import { getMeetupListByYear } from '@/lib'
import { Meetup, PreviousMeetup, PreviousYears, Sponsors } from '@/app/components'
import { MainSection } from '@/app/(layout)'

export default function Page() {
  const [nextMeetup, ...meetupList] = getMeetupListByYear()

  return (
    <>
      <Meetup meetup={nextMeetup} />
      <Sponsors />
      {meetupList.length > 0 && (
        <>
          <MainSection>
            <h2>Évènements passés</h2>
          </MainSection>
          {meetupList.map((meetup) => (
            <PreviousMeetup key={meetup.id} meetup={meetup} />
          ))}
        </>
      )}
      <MainSection>
        <h2>Consulter les évènements des autres années</h2>
      </MainSection>
      <MainSection>
        <PreviousYears />
      </MainSection>
    </>
  )
}
