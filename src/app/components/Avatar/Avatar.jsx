import Image from 'next/image'
import { User } from 'react-feather'
import './Avatar.css'

export function Avatar({ speaker }) {
  return (
    <div className="avatar">
      {speaker.image ? (
        <Image src={speaker.image} width={100} height={100} alt={speaker.name} />
      ) : (
        <User name={speaker.name} />
      )}
      <p>{speaker.name}</p>
    </div>
  )
}
