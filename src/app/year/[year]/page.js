import { getMeetupList, getMeetupListByYear } from '@/lib'
import { PreviousMeetup, PreviousYears } from '@/app/components'
import { MainSection } from '@/app/(layout)/index.js'

export async function generateStaticParams() {
  const meetupList = getMeetupList()

  const availableYearList = meetupList.map((meetup) =>
    new Date(meetup.date).getFullYear()
  )

  const years = new Set(availableYearList)

  return Array.from(years).map((year) => ({ year: year.toString() }))
}

export async function generateMetadata({ params }) {
  const { year } = await params
  return {
    title: `Meetups pour l'année ${year}`,
  }
}

export default async function YearPage({ params }) {
  const { year } = await params
  const meetupList = getMeetupListByYear(parseInt(year, 10))

  if (!meetupList.length) {
    return <p>Aucun meetup trouvé pour l&#39;année {year}.</p>
  }

  return (
    <>
      <MainSection>
        <h1>Meetups pour l&#39;année {year}</h1>
        <PreviousYears currentYear={year} />
      </MainSection>
      {meetupList.map((meetup) => (
        <PreviousMeetup key={meetup.id} meetup={meetup} />
      ))}
    </>
  )
}
