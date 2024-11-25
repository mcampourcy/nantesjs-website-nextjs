import { MainSection } from '@/app/(layout)/index.js'
import { MeetupTitle } from '@/app/components/MeetupTitle/index.js'
import { MeetupDetails } from '@/app/components/MeetupDetails.jsx'

import './Meetup.css'

export default async function Meetup ({ meetup }) {
    return (
        <MainSection className="meetup">
            <MeetupTitle meetup={meetup}/>
            <MeetupDetails meetup={meetup}/>
        </MainSection>
    )
}
