import { getYear, parse } from 'date-fns'
import { getFilesData } from '@/lib/utils/index.js'
import { MEETUPS_DIRECTORY } from '@/lib/utils/constants.js'

const parseMeetupDate = (date) => parse(date, 'dd/MM/yyyy', new Date())

export async function getSortedMeetupListByYear (year) {
    const currentYear = year || new Date().getFullYear()

    const allFilesData = getFilesData({ directory: MEETUPS_DIRECTORY })

    const meetupList = allFilesData.map((meetup) => ({
        ...meetup,
        date: parseMeetupDate(meetup.date)
    }))

    return meetupList
        .filter((meetup) => meetup.date && getYear(meetup.date) === currentYear)
        .sort((a, b) => b.date - a.date)
}


// export async function getMeetupData (id) {
//     const fullPath = path.join(meetupsDirectory, `${id}.md`)
//     const fileContents = fs.readFileSync(fullPath, 'utf8')
//
//     const matterResult = matter(fileContents)
//
//     const processedContent = await remark().
//         use(html).
//         process(matterResult.content)
//     const contentHtml = processedContent.toString()
//
//     return {
//         id,
//         contentHtml,
//         ...matterResult.data
//     }
// }
