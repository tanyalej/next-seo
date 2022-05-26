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
	structuredData : {
		"@context": "https://schema.org",
		"@type": "NewsArticle",
		"mainEntityOfPage": {
			"@type": "WebPage",
			"@id": "https://google.com/article"
		},
		"headline": "Core Web Vitals",
		"image": [
			"https://example.com/photos/1x1/photo.jpg",
			"https://example.com/photos/4x3/photo.jpg",
			"https://example.com/photos/16x9/photo.jpg"
		],
		"datePublished": "2015-02-05T08:00:00+08:00",
		"dateModified": "2015-02-05T09:20:00+08:00",
		"author": {
			"@type": "Person",
			"name": "John Doe",
			"url": "http://example.com/profile/johndoe123"
		},
		"publisher": {
			"@type": "Organization",
			"name": "Google",
			"logo": {
				"@type": "ImageObject",
				"url": "https://google.com/logo.jpg"
			}
		}
	}
}
