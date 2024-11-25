import { getSortedMeetupListByYear } from '@/lib'
import { MainSection } from '@/app/(layout)/index.js'
import Image from 'next/image'
import Meetup from '@/app/components/Meetup.jsx'

export default function Page () {
    const [ nextMeetup, ...meetupList ] = getSortedMeetupListByYear()

    return (
        <>
            <Meetup meetup={nextMeetup} />
            <MainSection className="sponsors">
                <h2>Sponsors</h2>
            </MainSection>
            <MainSection className="sponsors">
                <Image src='/images/sponsors/bam.png' alt='coucou' height={500} width={500}/>
            </MainSection>
        </>
    )
}

