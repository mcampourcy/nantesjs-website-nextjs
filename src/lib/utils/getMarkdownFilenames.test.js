import path from 'path'
import fs from 'fs'
import { describe, expect, it, beforeEach, afterEach } from 'vitest'
import { getMarkdownFilenames } from './getMarkdownFilenames.js'

const testDir = path.join(process.cwd(), 'src/data/test')
const emptyDir = path.join(process.cwd(), 'src/data/test/empty')
const nonExistentDir = path.join(testDir, 'nonexistent')

const mockFiles = [
    { name: 'test1.md', content: 'Test 1' },
    { name: 'test2.md', content: 'Test 2' },
    { name: 'test.txt', content: 'Non-Markdown file' }, // Non-Markdown file
    { name: '.hiddenFile', content: 'Hidden file' } // Hidden file
]

describe('getMarkdownFilenames', () => {
    beforeEach(() => {
        fs.mkdirSync(testDir, { recursive: true })
        fs.mkdirSync(emptyDir)

        mockFiles.forEach(({ name, content }) => {
            fs.writeFileSync(path.join(testDir, name), content)
        })
    })

    afterEach(() => {
        fs.rmSync(testDir, { recursive: true })
    })

    it('should return an array of markdown filenames', () => {
        const result = getMarkdownFilenames(testDir)

        expect(result.length).toBe(2)
        expect(result).toEqual([
            'test1.md',
            'test2.md'
        ])
    })

    it('should return an empty array for an empty directory', () => {
        const result = getMarkdownFilenames(emptyDir)

        expect(result).toEqual([])
    })

    it('should return an empty array if the directory does not exist', () => {
        const result = getMarkdownFilenames(nonExistentDir)

        expect(result).toEqual([])
    })
})
