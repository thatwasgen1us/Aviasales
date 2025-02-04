import { Filters, Ticket } from "../types/tickets";

export const filterTickets = (
  tickets: Ticket[],
  allChecked: boolean,
  filters: Filters
): Ticket[] => {
  if (allChecked) {
    return tickets;
  }

  return tickets.filter(ticket => {
    const hasValidSegments = ticket.segments.length > 0; // Убедимся, что есть сегменты

    return (
      (filters.filter0 && hasValidSegments && ticket.segments.some(segment => segment.stops.length === 0)) || 
      (filters.filter1 && hasValidSegments && ticket.segments.some(segment => segment.stops.length === 1)) || 
      (filters.filter2 && hasValidSegments && ticket.segments.some(segment => segment.stops.length === 2)) || 
      (filters.filter3 && hasValidSegments && ticket.segments.some(segment => segment.stops.length === 3))    
    );
  });
};
