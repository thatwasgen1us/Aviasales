export interface Segment {
  origin: string;
  destination: string;
  date: string;
  duration: number;
  stops: string[];
}

export interface Ticket {
  price: number;
  segments: Segment[];
}

export interface RootState {
  tickets: {
    tickets: Ticket[];
    loading: boolean;
    error: string | null;
  };
  counter: {
    countTicket: number;
  };
  filters: {
    allChecked: boolean;
    filters: boolean[];
  };
} 

export interface Filters {
  filter0: boolean;
  filter1: boolean;
  filter2: boolean;
  filter3: boolean;
}


