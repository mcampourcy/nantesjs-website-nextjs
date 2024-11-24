import Link from 'next/link'
import { getSortedMeetupListByYear } from '@/lib/getSortedMeetupListByYear.js'

export default async function Page () {
    const posts = getSortedMeetupListByYear()

    return (
        <div>
            <h1>My blog</h1>

            <h2>All posts:</h2>
            <ul>
                {posts.map((post) => {
                    const { id, date, title } = post
                    return (
                        <li key={id}>
                            <Link href={`/meetups/${id}`}>
                                {date} - {title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
