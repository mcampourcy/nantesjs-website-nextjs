import { MeetupTitle } from './MeetupTitle'

/**
 * MeetupDetails is a functional component that displays details of a meetup
 * including its image, title, sponsors, hosting details, and date
 */

export function MeetupDetails ({ meetup }) {
    const { date, image, title, sponsor, venue } = meetup

    return (
        <MeetupTitle date={date} image={image} title={title} sponsor={sponsor.name} host={venue.name} />
    )
}
