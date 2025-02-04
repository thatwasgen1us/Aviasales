import { TOGGLE_ALL, TOGGLE_FILTER } from "../action"

interface FilterState {
  allChecked: boolean,
  filters: {
    [key: string]: boolean
  },
}

const initialState: FilterState = {
  allChecked: true,
  filters: {
    filter0: true,
    filter1: true,
    filter2: true,
    filter3: true
  },
}

interface ToggleAllAction {
  type: typeof TOGGLE_ALL
}

interface ToggleFilterAction {
  type: typeof TOGGLE_FILTER,
  filter: string
}

type FilterAction = ToggleAllAction | ToggleFilterAction

const filterReducer = (state = initialState, action: FilterAction): FilterState => {
  switch (action.type) {
    case TOGGLE_ALL:
      const newAllChecked = !state.allChecked
      const updateFilters = Object.keys(state.filters).reduce((acc, filter) => {
        acc[filter] = newAllChecked
        return acc
      }, {} as { [key: string]: boolean })
      return {
        ...state,
        allChecked: newAllChecked,
        filters: updateFilters
      }

    case TOGGLE_FILTER:
      const updateFilterState = {
        ...state.filters,
        [action.filter]: !state.filters[action.filter]
      }

      const allChecked = Object.values(updateFilterState).every((value) => value);
      return {
        ...state,
        filters: updateFilterState,
        allChecked: allChecked
      }

    default:
      return state;
  }
}

export default filterReducer