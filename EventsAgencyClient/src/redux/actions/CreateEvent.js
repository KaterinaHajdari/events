import users from '../apis/events';

export const createEventReservation = eventValues => async dispatch => {
    
    dispatch({type: "EVENT_BEGIN"});

    const response = await users.post("/events", eventValues)
    .then(res => {
        dispatch({type: "EVENT_SUCCESS",  payload: eventValues});
    })
    .catch(err => {
        dispatch({type: "EVENT_FAILURE", payload: err});
    })

}
