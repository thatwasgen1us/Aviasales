import { fetchTickets } from "../http/tickets";
import { AppDispatch } from "./store";
import { INIT_TICKET, SET_ERROR, SET_LOADING } from "./action";

export const getTickets = () => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: SET_LOADING, payload: true });
    try {
      const tickets = await fetchTickets();
      dispatch({
        type: INIT_TICKET,
        payload: tickets,
      });
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Неизвестная ошибка';
      dispatch({ type: SET_ERROR, payload: errorMessage });
      console.error(error);
    } finally {
      dispatch({ type: SET_LOADING, payload: false });
    }
  };
};