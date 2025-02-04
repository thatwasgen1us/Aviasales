import { TOGGLE_ALL, TOGGLE_FILTER } from "../action";

interface Filters {
  filter0: boolean;
  filter1: boolean;
  filter2: boolean;
  filter3: boolean;
}

interface FilterState {
  allChecked: boolean;
  filters: Filters;
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
  filter: keyof Filters
}

type FilterAction = ToggleAllAction | ToggleFilterAction

const filterReducer = (state = initialState, action: FilterAction): FilterState => {
  switch (action.type) {
    case TOGGLE_ALL:
      const newAllChecked = !state.allChecked
      const updateFilters: Filters = {
        filter0: newAllChecked,
        filter1: newAllChecked,
        filter2: newAllChecked,
        filter3: newAllChecked
      }
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