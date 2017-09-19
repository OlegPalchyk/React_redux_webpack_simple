import "isomorphic-fetch";
import {HOST} from "./config";
import data from '../jsons/data.json'


export function pseudoCallApi(
  url,
  config,
  request,
  onRequestSuccess,
  onRequestFailure
) {
  return dispatch => {

    dispatch(request);
    setTimeout( dispatch(onRequestSuccess(data)), 500);

  };
}
