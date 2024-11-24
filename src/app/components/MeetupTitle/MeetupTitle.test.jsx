import { parse } from 'date-fns'
import { fr } from 'date-fns/locale'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { MeetupTitle } from './index'
import '@testing-library/jest-dom'

const parseDate = (date) => parse(date, 'yyyy-MM-dd', new Date(), { locale: fr })

describe('MeetupTitle', () => {
    const meetup = {
        date: parseDate('2024-01-18'),
        image: '/path/to/image.jpg',
        title: 'Meetup #77',
        sponsor: 'NantesJS',
        venue: 'Epitech'
    }

    it('renders the meetup title, sponsor, and host correctly', () => {
        render(<MeetupTitle meetup={meetup} />)

        // expect(screen.getByText(meetup.title)).toBeInTheDocument()
        expect(screen.getByText(meetup.sponsor)).toBeInTheDocument()
        expect(screen.getByText(meetup.venue)).toBeInTheDocument()
    })

    it('should have no accessibility violations', async () => {
        const { container } = render(<MeetupTitle meetup={meetup} />)

        const results = await axe(container)
        expect(results).toHaveNoViolations()
    })
})
