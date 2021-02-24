import {Countdown} from '../components/Countdown'
import { CompletedChalenges } from '../components/CompletedChalenges'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import styles from '../styles/pages/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>moveIt</title>
      </Head>
      <ExperienceBar />

      <section>

        <div>
          <Profile />
          <CompletedChalenges/>
          <Countdown/>
        </div>

        <div>

        </div>

      </section>

    </div>
  )
}
