import { format, getDate, getYear } from 'date-fns'
import { fr } from 'date-fns/locale'
import './MeetupDate.css'

/**
 * MeetupDate is a functional component that displays the date of a meetup
 */

export function MeetupDate({ date }) {
  const formattedDate = format(date, 'yyyy-MM-dd', { locale: fr })
  const formattedMonth = format(date, 'MMM', { locale: fr })

  return (
    <time className="meetup-date" dateTime={formattedDate}>
      <span>
        <span className="day">{getDate(date)}</span>
        <span className="month">{formattedMonth}</span>
      </span>
      <span className="year">{getYear(date)}</span>
    </time>
  )
}
