import { describe, expect, it, vi } from 'vitest'
import { getSortedMeetupListByYear } from './getSortedMeetupListByYear'
import * as utils from './'

vi.mock('./', () => ({
    parseFilesInDirectory: vi.fn()
}))

const mockData = [
    { date: '02/01/2022', title: 'January Meetup' },
    { date: '15/01/2022', title: 'Mid-January Meetup' },
    { date: 'invalid date', title: 'Invalid Date Meetup' }
]

describe('getSortedMeetupListByYear', () => {
    beforeEach(() => {
        utils.parseFilesInDirectory.mockReturnValue(mockData)
    })

    it('should sort meetups in descending order by date within the specified year', () => {
        const sortedList = getSortedMeetupListByYear(2022)

        const titles = sortedList.map((meetup) => meetup.title)
        expect(titles).toEqual([
            'Mid-January Meetup',
            'January Meetup'
        ])
    })

    it('should filter out meetups with invalid dates', () => {
        const sortedList = getSortedMeetupListByYear(2022)

        const titles = sortedList.map((meetup) => meetup.title)
        expect(titles).not.toContain('Invalid Date Meetup')
    })

    it('should return an empty array if no meetups match the specified year', () => {
        utils.parseFilesInDirectory.mockReturnValue([{ date: '01/01/2021', title: 'Meetup in 2021' }])

        const sortedList = getSortedMeetupListByYear(2023)

        expect(sortedList).toEqual([])
    })
})
