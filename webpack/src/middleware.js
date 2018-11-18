export const CALL_API = Symbol('Call API');

const api = store => next => action => {
    if (typeof action[CALL_API] == 'undefined') {
        return next(action)
    }
    return request(store, action[CALL_API]);
};

// Handles all CALL_API action types
async function request(store, action) {
    const { body, credentials, endpoint, headers, method, types, state } = action;
    const options = { method, headers, credentials, body };
    let error;

    store.dispatch({ type: types[0], request: { endpoint, options } }); // Dispatch Request Action

    try {
        const response = await fetch(endpoint, options);
        let responseData

        if (!response.ok) {
            error = 'Server Error: Unable to complete request'
            console.error(error)
            store.dispatch({type: types[2], error });
            return Promise.resolve(error)
        } else {
            if (responseTypeText) {
                responseData = await response.text()
            } else {
                responseData = await response.json()
            }
        }

        store.dispatch({ type: types[1], data: responseData, state });
        return Promise.resolve(responseData)
    } catch(err) {
        error = 'Request Error: Unable to complete request'
        console.error(err)
        store.dispatch({ type: types[2], error });
        return Promise.resolve(err)
    }
}

export default api;
