import Head from 'next/head'

export default function Meta ({ title, keywords, description }) {
  return (
    <Head>
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Next SEO',
  keywords: 'next, seo',
  description: 'Get the latest news about next and seo',
}
