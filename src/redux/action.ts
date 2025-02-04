export const INC_COUNTER = 'INC_COUNTER';
export const TOGGLE_ALL = 'TOGGLE_ALL';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const INIT_TICKET = 'INIT_TICKET'
export const SET_ERROR = 'SET_ERROR'
export const SET_LOADING = 'SET_LOADING'
export const GET_CHEAP = 'GET_CHEAP'
export const GET_FAST = 'GET_FAST'
export const GET_OPTIMAL = 'GET_OPTIMAL'


export const toggleAll = () => ({ type: TOGGLE_ALL })

export const toggleFilter = (filter: string) => ({
  type: TOGGLE_FILTER,
  filter,
})

export const toggleCounter = ({ type: INC_COUNTER }) 




