import { INC_COUNTER } from "../action";

interface Counter {
  countTicket: number;
}

const initialState: Counter = {
  countTicket: 5,
};



interface CounterAction {
  type: typeof INC_COUNTER;
}

export const countReducer = (state = initialState, action: CounterAction): Counter => {
  switch (action.type) {
    case INC_COUNTER:
      return {
        ...state,
        countTicket: state.countTicket + 5,
      };
    default:
      return state;
  }
};
