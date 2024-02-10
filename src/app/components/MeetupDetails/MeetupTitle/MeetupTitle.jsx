import Image from 'next/image.js'
import { MainSection } from '@/app/(layout)'
import { MeetupDate } from './MeetupDate'
import './MeetupTitle.css'

/**
 * MeetupTitle is a functional component that renders the title section of a meetup.
 *
 * This component displays the meetup's logo, title, sponsor and host details, and the date.
 */
export function MeetupTitle ({ date, image, title, sponsor, host }) {
    return (
        <MainSection className="meetup-title">
            <Image
                src={image}
                alt="Logo accessibilité"
                width={100}
                height={100}
            />

            <section>
                <h1>{title}</h1>
                <p>Sponsorisé par <strong>{sponsor}</strong></p>
                <p>Hébergé par <strong>{host}</strong></p>
            </section>

            <MeetupDate date={date} />
        </MainSection>
    )
}
