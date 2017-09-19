import {callApi} from "../utils/apiUtils";
import {pseudoCallApi} from "../utils/pseudoApiUtils";

export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

function getDataRequest() {
    return {
        type: GET_DATA_REQUEST,

    };
}

function getDataSuccess(response) {
    return {
        type: GET_DATA_SUCCESS,
        data : response.data

    };
}

function getDataFailure(error) {

    return {
        type: GET_DATA_FAILURE,
        error
    };
}

export function getData() {

    const config = {
        method: "get",
        credentials: "include"
    };
    //use callApi when with real project
    return pseudoCallApi(
        "/getData",
        config,
        getDataRequest(),
        getDataSuccess,
        getDataFailure
    );
}
