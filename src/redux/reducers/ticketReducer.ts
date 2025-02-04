import { INIT_TICKET, SET_ERROR, SET_LOADING } from '../action';

interface Segment {
  origin: string;
  destination: string;
  date: string;
  duration: number;
  stops: string[];
}

interface Ticket {
  carrier: string;
  price: number;
  segments: Segment[];
}

interface TicketsState {
  tickets: Ticket[];
  loading: boolean;
  error: string | null;
}

const initialState: TicketsState = {
  tickets: [],
  loading: false,
  error: null,
};

interface TicketAction {
  type: typeof INIT_TICKET | typeof SET_LOADING | typeof SET_ERROR;
  payload: any; 
}

export const ticketReducer = (state = initialState, action: TicketAction): TicketsState => {
  switch (action.type) {
    case INIT_TICKET:
      return {
        ...state,
        tickets: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
