import path from 'path'
import fs from 'fs'
import { describe, expect, it, beforeEach, afterEach } from 'vitest'
import { readFileFromDirectory } from './readFileFromDirectory.js'

const testDirectory = path.join(process.cwd(), 'src/data/test')
const testFilename = 'test1.json'
const testFileContent = '---\ntitle: Test 1\n---\nContent 1'

const invalidDirectory = 123
const invalidFilename = null

describe('readFileFromDirectory', () => {
    beforeEach(() => {
        fs.mkdirSync(testDirectory, { recursive: true })
        fs.writeFileSync(path.join(testDirectory, testFilename), testFileContent)
    })

    afterEach(() => {
        fs.rmSync(testDirectory, { recursive: true })
    })

    it('should correctly read and return file content', () => {
        const result = readFileFromDirectory({ directory: testDirectory, filename: testFilename })

        expect(result).toEqual(testFileContent)
    })

    it('should return null for a non-existent file', () => {
        const result = readFileFromDirectory({ directory: testDirectory, filename: 'nonexistent.md' })

        expect(result).toBeNull()
    })

    it('should return null for invalid input types', () => {
        const result = readFileFromDirectory({ directory: invalidDirectory, filename: invalidFilename })

        expect(result).toBeNull()
    })
})
