import { MeetupDetails } from '@/app/components'
import { getSortedMeetupListByYear } from '@/lib/meetups.js'

export default async function Page () {
    const meetupList = await getSortedMeetupListByYear()
    const nextMeetup = meetupList.shift()

    return (
        <div className="block-fullwith">
            <MeetupDetails meetup={nextMeetup} />
        </div>
    )
}
