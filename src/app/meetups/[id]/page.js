import { getMeetupData } from '@/lib/getSortedMeetupListByYear.js'
import { MeetupDetails } from '@/app/components'

// Set the title of the page to be the post title, note that we no longer use
// e.g. next/head in app dir, and this can be async just like the server
export async function generateMetadata ({ params }) {
    const postData = await getMeetupData(params.id)

    return {
        title: postData.title
    }
}

export default async function Post ({ params }) {
    const meetup = await getMeetupData(params.id)

    return (
        <div className="block-fullwidth">
            <MeetupDetails meetup={meetup}/>
        </div>
    )
}
