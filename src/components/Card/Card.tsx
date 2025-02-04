import { RootState } from '@reduxjs/toolkit/query';
import { Spin } from 'antd';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LogoS7 from '../../assets/S7-Logo.svg';
import { getTickets } from '../../redux/thunk';
import { filterTickets } from '../../utils/filterTickets';
import { getStopsText } from '../../utils/getStopsText';
import { sortTickets } from '../../utils/sortTickets';
import { dateToTime, time } from '../../utils/time';
import classes from './Card.module.scss';

const Card: React.FC = () => {
  const dispatch = useDispatch();

  const { tickets, loading, error } = useSelector((state: RootState) => state.tickets);
  const { countTicket } = useSelector((state: RootState) => state.counter);
  const { allChecked, filters } = useSelector((state: RootState) => state.filters);
  const selectedSort = useSelector((state: RootState) => state.sorting.selectedSort);

  const filteredTickets = useMemo(() => filterTickets(tickets, allChecked, filters), [tickets, allChecked, filters]);
  
  const sortedTickets = useMemo(() => 
    sortTickets(filteredTickets, selectedSort),
    [filteredTickets, selectedSort]
  );

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  if (loading) {
    return <Spin />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!filteredTickets.length) {
    return <div>Билеты не найдены</div>;
  }

  return (
    <>
      {sortedTickets.slice(0, countTicket).map((ticket) => (
        <li className={classes['card']} key={`ticket-${ticket.price}-${ticket.segments[0].date}`}>
          <div className={classes["card__top"]}>
            <div className={classes["card__top--sum"]}>
              {ticket.price.toLocaleString('ru-RU')} ₽
            </div>
            <img src={LogoS7} alt="S7" className={classes["cards__top--logo"]} />
          </div>
          {ticket.segments.map((segment: Segment) => (
            <div className={classes["card__info"]} key={`segment-${segment.date}-${segment.origin}`}>
              <div className={classes["card__info--first"]}>
                <div className={classes["card__info--title"]}>
                  {segment.origin} – {segment.destination}
                </div>
                <div className={classes["card__info--subtitle"]}>
                  {dateToTime(segment.date, segment.duration)}
                </div>
              </div>
              <div className={classes["card__info--second"]}>
                <div className={classes["card__info--title"]}>
                  В пути
                </div>
                <div className={classes["card__info--subtitle"]}>
                  {time(segment.duration)}
                </div>
              </div>
              <div className={classes["card__info--third"]}>
                <div className={classes["card__info--title"]}>
                  {getStopsText(segment.stops.length)}
                </div>
                <div className={classes["card__info--subtitle"]}>
                  {segment.stops.join(', ')}
                </div>
              </div>
            </div>
          ))}
        </li>
      ))}
    </>
  );
};

export default Card;
