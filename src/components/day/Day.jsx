import React, {useContext, useState, useEffect} from 'react';
import moment from 'moment/min/moment-with-locales';
import 'moment/locale/es';
import GlobalContext from '../../context/GlobalContext';

const Day = ({ day, rowIdx }) => {

    const [dayEvents, setDayEvents] = useState([]);
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) =>
        moment(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

    function getCurrentDayClass() {
        return day.format("DD-MM-YY") === moment().format("DD-MM-YY")
          ? "bg-blue-600 text-gray rounded-full w"
          : "";
      }
    return (
    
      <div className="border border-gray-200 text-2xl flex flex-col font-sans hover:font-serif">
        <headers className="flex flex-col items-center">
            {rowIdx === 0 && (<p className="text-2xl text-black mt-1">
            {moment.weekdays(true)[day.day()].charAt(0).toUpperCase()}
          </p>)}
          
          <p className={`text-2xl p-1 my-1 text-center  ${getCurrentDayClass()}`}>
            {moment.locale('es') && day.format('DD')}
          </p>
        </headers>
        <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt.label}-200 p-1 mr-3 text-black text-lg rounded mb-1 truncate`}
          >
            {evt.title}
          </div>
        ))}
      </div>
      </div>
    );
  };

export default Day;