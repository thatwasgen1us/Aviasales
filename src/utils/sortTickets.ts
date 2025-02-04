import { Ticket } from "../types/tickets";

export const sortTickets = (tickets: Ticket[], sortType: string): Ticket[] => {
  return [...tickets].sort((a, b) => {
    const totalDurationA = a.segments.reduce((sum, segment) => sum + segment.duration, 0);
    const totalDurationB = b.segments.reduce((sum, segment) => sum + segment.duration, 0);

    switch (sortType) {
      case 'Самый дешевый':
        return a.price - b.price;
      
      case 'Самый быстрый':
        return totalDurationA - totalDurationB;
      
      case 'Оптимальный':
        const maxPrice = Math.max(...tickets.map(t => t.price));
        const maxDuration = Math.max(...tickets.map(t => 
          t.segments.reduce((sum, segment) => sum + segment.duration, 0)
        ));

        const scoreA = (a.price / maxPrice + totalDurationA / maxDuration) / 2;
        const scoreB = (b.price / maxPrice + totalDurationB / maxDuration) / 2;
        
        return scoreA - scoreB;
      
      default:
        return 0;
    }
  });
};