import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Core Web Vitals
        </h1>

        <p>
          Core Web Vitals are the subset of Web Vitals that apply to all web pages, should be measured 
          by all site owners, and will be surfaced across all Google tools. Each of the Core Web Vitals 
          represents a distinct facet of the user experience, is measurable in the field, and reflects 
          the real-world experience of a critical user-centric outcome.
        </p>

        <p>
          The metrics that make up Core Web Vitals will evolve over time. The current set for 2020 focuses 
          on three aspects of the user experience—loading, interactivity, and visual stability—and includes 
          the following metrics (and their respective thresholds):
        </p>

        <img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZZU8Z7TMKXmzZT2mCjJU.svg" alt="LCP - Largest Contenful Paint"></img>

        <img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/iHYrrXKe4QRcb2uu8eV8.svg" alt="FID - First Imput Delay"></img>

        <img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dgpDFckbHwwOKdIGDa3N.svg" alt="CLS - Comulative Layout Shift"></img>

        <ul>
          <li>
            <strong><a href="/lcp/">Largest Contentful Paint (LCP)</a></strong>: measures <em>loading</em> 
            performance. To provide a good user experience, LCP should occur within <strong>2.5 seconds</strong> of 
            when the page first starts loading.
          </li>
          <li>
            <strong><a href="/fid/">First Input Delay (FID)</a></strong>: measures <em>interactivity</em>. 
            To provide a good user experience, pages should have a FID of <strong>100 
            milliseconds</strong> or less.
          </li>
          <li>
            <strong><a href="/cls/">Cumulative Layout Shift (CLS)</a></strong>: measures 
            <em>visual stability</em>. To provide a good user experience, pages should maintain a 
            CLS of <strong>0.1.</strong> or less.
          </li>
        </ul>

        <p>
          For each of the above metrics, to ensure you&apos;re hitting the recommended target for most 
          of your users, a good threshold to measure is the 75th percentile of page loads, segmented 
          across mobile and desktop devices.
        </p>

        <p>This is a fragment of a <Link href="https://web.dev/i18n/en/vitals/">blog post</Link> by Philip Walton on web.dev</p>
      </main>
    </div>
  )
}
