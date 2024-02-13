import { MeetupDetails } from '@/app/components'
import { getSortedMeetupListByYear } from '@/lib'

export default function Page () {
    const [ nextMeetup, ...meetupList ] = getSortedMeetupListByYear()

    return (
        <div className="block-fullwidth">
            <MeetupDetails meetup={nextMeetup} />
        </div>
    )
}

