import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SortingType = 'Самый дешевый' | 'Самый быстрый' | 'Оптимальный';

interface SortingState {
  selectedSort: SortingType;
}

const initialState: SortingState = {
  selectedSort: 'Самый дешевый'
};

const sortingSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    setSelectedSort: (state, action: PayloadAction<SortingType>) => {
      state.selectedSort = action.payload;
    }
  }
});

export const { setSelectedSort } = sortingSlice.actions;
export default sortingSlice.reducer; 