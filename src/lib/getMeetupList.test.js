import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getMeetupList } from './getMeetupList.js'
import { getFileContent, getJsonFilenames, parseDateFromString } from '../lib/utils/index.js'

vi.mock('../lib/utils/getJsonFilenames.js')
vi.mock('../lib/utils/getFileContent.js')

const mockFilenames = ['test1', 'test2']
const mockFile1Contents = { title: 'Test 1', date: '03/04/2016' }
const mockFile2Contents = { title: 'Test 2', date: '04/05/2017' }

describe('getMeetupList', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('should correctly parse json files in a directory', () => {
    // given
    vi.mocked(getJsonFilenames).mockReturnValue(mockFilenames)
    vi.mocked(getFileContent).mockReturnValueOnce(mockFile1Contents)
    vi.mocked(getFileContent).mockReturnValueOnce(mockFile2Contents)

    // when
    const result = getMeetupList()

    // then
    expect(result).toEqual([
      {
        date: parseDateFromString(mockFile1Contents.date),
        title: mockFile1Contents.title,
        hosting: null,
        sponsor: null,
      },
      {
        date: parseDateFromString(mockFile2Contents.date),
        title: mockFile2Contents.title,
        hosting: null,
        sponsor: null,
      }
    ])
  })

  it('should return an empty array for an empty directory', () => {
    // given
    vi.mocked(getJsonFilenames).mockReturnValue([])
    // when
    const result = getMeetupList()
    // then
    expect(result).toEqual([])
  })
})
