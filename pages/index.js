import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to News Site!
        </h1>

        <article className={styles.article}>
          <Link href="/article" as="/article" passHref>
            <a>
              <h2>Article headline</h2>
              <p>
                posted on <time>{new Date().toLocaleDateString()}</time>
              </p>
            </a>
          </Link>
        </article>
      </main>

      <footer className={styles.footer}>
        Eder Díaz &copy; {new Date().getFullYear()}
      </footer>
    </div>
  )
}
