import matter from 'gray-matter'
import { getMarkdownFilenames, readFileFromDirectory } from '../lib/utils'

/**
 * Extracts the data from a markdown file.
 *
 * @param {string} directory - The directory where the file is located.
 * @param {string} filename - The name of the file.
 * @returns {object|null} The extracted file data or null in case of an error.
 */
function extractMarkdownFileData (directory, filename) {
    try {
        const fileContents = readFileFromDirectory({ directory, filename })
        const matterResult = matter(fileContents)
        const id = filename.replace(/\.md$/, '')

        return { id, ...matterResult.data }
    } catch (error) {
        console.error(`Error processing file ${filename}:`, error)
        return null
    }
}

/**
 * Parses markdown files in a given directory and returns their data.
 *
 * @param {string} directory - The directory to parse files from.
 * @returns {object[]} - An array of objects containing file data.
 */
export function parseFilesInDirectory ({ directory }) {
    const markdownFiles = getMarkdownFilenames(directory)
    const filesData = markdownFiles.map((filename) => extractMarkdownFileData(directory, filename))

    return filesData.filter((data) => data != null)
}
