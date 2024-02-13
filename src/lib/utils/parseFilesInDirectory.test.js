import { describe, it, expect, vi, beforeEach } from 'vitest'
import { parseFilesInDirectory } from './parseFilesInDirectory'
import * as utils from './'

vi.mock('./', () => ({
    getMarkdownFilenames: vi.fn(),
    readFileFromDirectory: vi.fn()
}))

const mockFiles = [
    'test1.md',
    'test2.md'
]
const mockFileContents = [
    '---\ntitle: Test 1\n---\nContent 1',
    '---\ntitle: Test 2\n---\nContent 2'
]

describe('parseFilesInDirectory', () => {
    beforeEach(() => {
        vi.resetAllMocks()
    })

    it('should correctly parse markdown files in a directory', () => {
        // given
        utils.getMarkdownFilenames.mockReturnValue(mockFiles)
        utils.readFileFromDirectory.mockImplementation(({ filename }) => {
            return mockFileContents[mockFiles.indexOf(filename)]
        })
        // when
        const result = parseFilesInDirectory({ directory: '/test/dir' })
        // then
        expect(result).toEqual([
            { id: 'test1', title: 'Test 1' },
            { id: 'test2', title: 'Test 2' }
        ])
    })

    it('should return an empty array for an empty directory', () => {
        // given
        utils.getMarkdownFilenames.mockReturnValue([])
        // when
        const result = parseFilesInDirectory({ directory: '/empty/dir' })
        // then
        expect(result).toEqual([])
    })

    it('should handle file read errors gracefully', () => {
        // given
        utils.getMarkdownFilenames.mockReturnValue(['test1.md'])
        utils.readFileFromDirectory.mockImplementation(() => {
            throw new Error('File read error')
        })
        // when
        const result = parseFilesInDirectory({ directory: '/test/dir' })
        // then
        expect(result).toEqual([])
    })
})
