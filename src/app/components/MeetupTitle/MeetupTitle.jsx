import Image from 'next/image'
import { MeetupDate } from '../MeetupDate'
import './MeetupTitle.css'

/**
 * MeetupTitle is a functional component that renders the title section of a meetup.
 *
 * This component displays the meetup's logo, title, sponsor and host details, and the date.
 */
export function MeetupTitle({ meetup }) {
  const { date, image, title, sponsor, hosting } = meetup

  return (
    <div className="meetup-title">
      {image && (
        <Image
          src={`/images/meetups/${image}`}
          alt=""
          width={100}
          height={100}
        />
      )}

      <section>
        <h1>{title}</h1>
        {sponsor && (
          <p>
            Sponsorisé par <strong>{sponsor.name}</strong>
          </p>
        )}
        {hosting && (
          <p>
            Hébergé par <strong>{hosting.name}</strong>
          </p>
        )}
      </section>

      <MeetupDate date={date} />
    </div>
  )
}
