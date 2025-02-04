export const getStopsText = (stopsLength: number): string => {
  if (stopsLength === 0) return '0 пересадок';
  if (stopsLength === 1) return '1 пересадка';
  return `${stopsLength} пересадки`;
};