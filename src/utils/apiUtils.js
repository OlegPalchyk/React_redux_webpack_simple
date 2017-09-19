import "isomorphic-fetch";
import {HOST} from "./config";

export function checkStatus(response) {

  if (!response.ok) {
    // (response.status < 200 || response.status > 300)
    const error = new Error(response.statusText);
    error.response = response;

    if(response.status==413){
      error.response = 'The image is too large, try again with another image'
    }

    throw error;
  }
  return response;
}



export function parseJSON(response) {


  return response.json();
}

/**
 * A utility to call a restful service.
 *
 * @param url The restful service end point.
 * @param config The config object of the call. Can be null.
 * @param request The request action.
 * @param onRequestSuccess The callback function to create request success action.
 *                 The function expects response json payload as its argument.
 * @param onRequestFailure The callback function to create request failure action.
 *                 The function expects error as its argument.
 */
export function callApi(
  url,
  config,
  request,
  onRequestSuccess,
  onRequestFailure
) {
  return dispatch => {

    dispatch(request);
    let format_endpoint = function(url){return HOST+'/api'+url};
      return fetch(format_endpoint(url), config)
      .then(checkStatus)
      .then(parseJSON)
      .then(json => {
       if(json.status === "success"){
         dispatch(onRequestSuccess(json));
       }else {
         dispatch(onRequestFailure(json.message));
       }

      })
      .catch(error => {
        const response = error.response;
        if (response === undefined) {
          let message = 'Something went wrong, we’re currently fixing it';
          dispatch(onRequestFailure(message));
        } else {
          error.status = response.status;

          switch(error.status){
           default : {
              error.statusText = response.statusText;
              response.text().then(text => {
                try {
                  const json = JSON.parse(text);
                  error.message = json.message;
                } catch (ex) {
                  error.message = text;
                }
                dispatch(onRequestFailure(error.message));
              });
            }
          }

        }
      });
  };
}
