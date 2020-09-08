import events from "../apis/events";

export const approveEvent = (event_id) => async (dispatch) => {
  dispatch({ type: "APPROVE_EVENT_BEGIN" });
 
  events.get(`/events?id=${event_id}`)
    .then((res) => {
      dispatch({ type: "APPROVE_EVENT_SUCCESS" });
      const values = {
        eventType: res.data[0].eventType,
        time: res.data[0].time,
        details: res.data[0].details,
        participants: res.data[0].participants,
        date: res.data[0].date,
        id: res.data[0].id,
        approved: "approved",
      };
      events.put(`/events/${event_id}`, values);
    })
    .catch((err) => {
      dispatch({ type: "APPROVE_EVENT_FAILURE ", payload: err });
    });
};
