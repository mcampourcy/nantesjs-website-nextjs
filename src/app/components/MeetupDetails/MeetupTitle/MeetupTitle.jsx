import Image from 'next/image.js'
import { MainSection } from '@/app/(layout)'
import { MeetupDate } from './MeetupDate'
import './MeetupTitle.css'

/**
 * MeetupTitle is a functional component that renders the title section of a meetup.
 *
 * This component displays the meetup's logo, title, sponsor and host details, and the date.
 */
export function MeetupTitle () {
    return (
        <MainSection className="meetup-title">
            <Image
                src="/meetup-images/accessibility.png"
                alt="Logo accessibilité"
                width={100}
                height={100}
            />

            <section>
                <h1>Meetup #77</h1>
                <p>Sponsorisé par <strong>NantesJS</strong></p>
                <p>Hébergé par <strong>Epitech</strong></p>
            </section>

            <MeetupDate />
        </MainSection>
    )
}
