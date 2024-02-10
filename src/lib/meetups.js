import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const meetupsDirectory = path.join(process.cwd(), 'src/data/meetups')
// process.cwd() returns the absolute path of the current working directory

export function getSortedMeetupsByYear ({ year }) {
    const fileNames = fs.readdirSync(meetupsDirectory) // [ 'pre-rendering.md', 'ssg-ssr.md' ]

    const allMeetupsData = fileNames.map((filename) => {
        const id = filename.replace(/\.md$/, '') // id = 'pre-rendering', 'ssg-ssr'

        const fullPath = path.join(meetupsDirectory, filename)
        const fileContents = fs.readFileSync(fullPath, 'utf8') // .md string content

        const matterResult = matter(fileContents)
        const meetupData = { id, ...matterResult.data }

        return meetupData
    })

    return allMeetupsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export async function getMeetupData (id) {
    const fullPath = path.join(meetupsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    const processedContent = await remark().
        use(html).
        process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}
