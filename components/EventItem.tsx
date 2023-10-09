import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/EventItem.module.css'

export default function EventItem({ evt, index }: any) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={evt.image}
          width={170}
          height={100}
          alt={evt.description}
          priority={index < 3 ? true : false}
        />
      </div>

      <div className={styles.info}>
        <span>
          {new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
        </span>
        <h3>{evt.name}</h3>
      </div>

      <div className={styles.link}>
        <Link href={`/events/${evt.slug}`} className="btn">
          Details
        </Link>
      </div>
    </div>
  )
}
