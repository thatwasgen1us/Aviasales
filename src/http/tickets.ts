import axios from "axios";

const FIRST_ATTEMPT_TIMEOUT = 5000;
const RETRY_TIMEOUT = 10000;

export const fetchTickets = async (): Promise<any | null> => {
  const getId = async (attempt = 1): Promise<string | null> => {
    try {
      const response = await axios.get('https://aviasales-test-api.kata.academy/search', {
        timeout: attempt === 1 ? FIRST_ATTEMPT_TIMEOUT : RETRY_TIMEOUT
      });
      return response.data.searchId;
    } catch (error) {
      if (axios.isAxiosError(error) && error.code === 'ECONNABORTED') {
        console.warn(`Таймаут запроса searchId (попытка ${attempt})`);
      }
      return null;
    }
  };
  const searchId = await getId();
  if (!searchId) {
    throw new Error('searchId не найден. Убедитесь, что создана гостевая сессия.');
  }
  const response = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
  return response.data.tickets;
};



