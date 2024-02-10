import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getYear, parse } from 'date-fns'

const meetupsDirectory = path.join(process.cwd(), 'src/data/meetups')

function readMeetupFile (filename) {
    try {
        const fullPath = path.join(meetupsDirectory, filename)
        return fs.readFileSync(fullPath, 'utf8')
    } catch (error) {
        console.error(`Error reading file ${fullPath}:`, error)
        return null
    }
}

function getAllMeetupData (fileNames) {
    return fileNames.map((filename) => {
        const id = filename.replace(/\.md$/, '') // id = 'meetup-01'
        const fileContents = readMeetupFile(filename)

        const matterResult = matter(fileContents)
        const meetupData = { id, ...matterResult.data }

        meetupData.date = parse(meetupData.date, 'dd/MM/yyyy', new Date())

        return meetupData
    })
}

export async function getSortedMeetupListByYear (year) {
    const currentYear = year || new Date().getFullYear()

    const fileNames = fs.readdirSync(meetupsDirectory)

    const allMeetupsData = getAllMeetupData(fileNames)

    return allMeetupsData
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
