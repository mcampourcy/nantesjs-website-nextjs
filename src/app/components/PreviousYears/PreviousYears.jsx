import Link from 'next/link'
import cn from 'classnames'
import { getPastMeetupYears } from '@/lib'

import './PreviousYears.css'

export function PreviousYears({ currentYear }) {
  const previousYears = getPastMeetupYears()

  return (
    <nav className="previous-years">
      <ul>
        {previousYears.map((year) => (
          <li key={year}>
            <Link href={`/year/${year}`} className={cn({ active: Number(currentYear) === year })}>
              {year}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
