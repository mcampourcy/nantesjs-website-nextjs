import { MainSection } from '@/app/(layout)'
import { PreviousYears } from '@/app/components'

export default async function Page() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <MainSection>
        <h2>Consulter les évènements des autres années</h2>
      </MainSection>
      <MainSection>
        <PreviousYears currentYear={currentYear}/>
      </MainSection>
    </>
  )
}
