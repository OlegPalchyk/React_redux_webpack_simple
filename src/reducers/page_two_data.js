import { GET_DATA_REQUEST, GET_DATA_SUCCESS,GET_DATA_FAILURE} from "../actions/page_two_data";

const initialState = {
    loaded: false
};

function initializeState() {
    return Object.assign({}, initialState, initialState);
}
export default function getData(state = initializeState(), action = {}) {
    switch (action.type) {
        case GET_DATA_REQUEST:
            return Object.assign({}, state, {
                type: action.type});
        case GET_DATA_SUCCESS:
            return Object.assign({}, state, { loaded: true,
                data : action.data,
                type: action.type});
        case GET_DATA_FAILURE:
            return Object.assign({}, state, { loaded: false,
                message:action.error,
                type: action.type});
        default:
            return state;
    }
}