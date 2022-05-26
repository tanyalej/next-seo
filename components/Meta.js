import Head from 'next/head'

export default function Meta ({ title, keywords, description, image, structuredData }) {
  return (
    <Head>
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>

			<meta property="og:url" content="https://tanya-next-seo.netlify.app/" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
	
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="tanya-next-seo.netlify.app" />
			<meta property="twitter:url" content="https://tanya-next-seo.netlify.app/" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />

			<script 
				type="application/ld+json" 
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData)}}
			/>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Next SEO',
  keywords: 'next, seo',
  description: 'Get the latest news about next and seo',
	image: 'https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZZU8Z7TMKXmzZT2mCjJU.svg',
	structuredData:   {
		"@context": "https://schema.org/",
		"@type": "NewsArticle",
		"mainEntityOfPage": {
			"@type": "WebPage",
			"@id": "https://google.com/article"
		},
		"headline": "Next and SEO Newsgit",
		"author": {
			"@type": "Person",
			"name": "Jane Doe"
		},
		"datePublished": "2022-05-23",
	}
}
