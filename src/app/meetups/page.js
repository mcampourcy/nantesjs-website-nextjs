import Link from 'next/link'
import { getSortedMeetupListByYear } from '@/lib/getSortedMeetupListByYear.js'

export default async function Page () {
    const sortedMeetups = getSortedMeetupListByYear()

    return (
        <div>
            <h1>Meetups</h1>
        </div>
    )
}
