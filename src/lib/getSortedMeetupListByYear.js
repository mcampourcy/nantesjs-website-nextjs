import { getYear, parse, isValid } from 'date-fns'
import { fr } from 'date-fns/locale'
import matter from 'gray-matter'
import { parseFilesInDirectory, readFileFromDirectory } from '../lib/utils'
import { MEETUPS_DIRECTORY } from '../lib/utils/constants'

const parseMeetupDate = (dateString) => {
    const date = parse(dateString, 'dd/MM/yyyy', new Date(), { locale: fr })

    return isValid(date) ? date : null
}

export function getSortedMeetupListByYear (year) {
    const currentYear = year || new Date().getFullYear()
    const allFilesData = parseFilesInDirectory({ directory: MEETUPS_DIRECTORY })

    return allFilesData
        .map((meetup) => ({
            ...meetup,
            date: parseMeetupDate(meetup.date)
        }))
        .filter((meetup) => meetup.date && getYear(meetup.date) === currentYear)
        .sort((a, b) => b.date - a.date)
}


export async function getMeetupData (id) {
    const fileContents = readFileFromDirectory({
        directory: MEETUPS_DIRECTORY,
        filename: `meetup-${id}.md`
    })

    const matterResult = matter(fileContents)

    return {
        id,
        ...matterResult.data,
        date: parseMeetupDate(matterResult.data.date)
    }
}
