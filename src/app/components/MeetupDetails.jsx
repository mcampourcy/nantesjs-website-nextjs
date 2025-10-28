import { Avatar } from '@/app/components/Avatar'

export function MeetupDetails({ meetup }) {
  const isMeetupHero = meetup.type === 'meetup-hero'

  return (
    <>
      {meetup.talks.map((talk, index) => {
        const description = isMeetupHero ? (
          <MeetupHeroDescription description={talk.description} final={talk.final} />
        ) : (
          <p>{talk.description}</p>
        )

        return (
          <article key={`${talk.title}-article`}>
            <section>
              {talk.speakers.map((speaker) => (
                <Avatar speaker={speaker} key={`${speaker.name}-avatar`} />
              ))}
            </section>
            <section>
              {talk.title && <h2>{talk.title}</h2>}
              {description}
              {talk.requirements && <TalkRequirements requirements={talk.requirements} />}
              {talk.video && (
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${talk.video}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              )}
            </section>
          </article>
        )
      })}
    </>
  )
}

const MeetupHeroDescription = ({ description, final }) => (
  <>
    <ul>
      {description.map(({ label, details }) => (
        <li key={label}>
          <strong>{label}</strong> - {details}
        </li>
      ))}
    </ul>
    {final && <p>{final}</p>}
  </>
)

const TalkRequirements = ({ requirements }) => (
  <>
    <h3>Prérequis</h3>
    <ul>
      {requirements.map((requirement) => (
        <li key={requirement}>{requirement}</li>
      ))}
    </ul>
  </>
)
