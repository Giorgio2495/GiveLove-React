import moment from 'moment/min/moment-with-locales';
import 'moment/locale/es';

export function getMonth(month = moment().month()) {
  month = Math.floor(month);
  const year = moment().year();
  const firstDayOfTheMonth = moment(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return moment(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}