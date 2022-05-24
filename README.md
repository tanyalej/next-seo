# Setup

You need node v14.19.0 to run this project. I recommend you to install nvm if you haven't and then install that version.

```bash
nvm install v14.19.0
nvm use v14.19.0

# confirm that the version is correct
node -v
```

## Getting Started

First I'd recommend to fork this repo so that you get a copy you can push to.

Then clone and install dependencies:

```bash
npm i
```

then run the development server:

```bash
npm run dev
```

It should open the home page showing an article.

## First Goal
If you click on the article and then run a Google lighthouse audit, you should get something like this:\

<img width="652" alt="Screen Shot 2022-05-24 at 3 20 43 p m" src="https://user-images.githubusercontent.com/247442/170125017-0cd1d211-0867-4544-bfe8-602b5491f18c.png">

Try not to worry a lot about the performance, since you are running a dev server that's expected, for example if you build the site `npm run build` and run it locally `npm start` you would get something like this:

<img width="660" alt="Screen Shot 2022-05-24 at 3 13 05 p m" src="https://user-images.githubusercontent.com/247442/170124176-52de6bcd-f438-4b46-988d-25737437ff2a.png">

The goal of this exercise is to fix all of the accessibility and SEO opportunities:

https://user-images.githubusercontent.com/247442/170124101-349e1b3a-410c-4873-9bbf-36e9f80f323f.mp4

## Secondary goals

For this next step I recommend using netlify to deploy our site in order to use some tools.

### Netlify static deployment

If you forked the repo skip this step, else create a new github repository and sync with your local repo.

Connect netlify to your github account.

Create a new netlify project choosing the github repo

Make sure to add these settings to the netlify deployment pipeline:
```
base directory: empty
build command: npm run build
publish directory: out
```

Also this environment variable should be added:

```
NETLIFY_NEXT_PLUGIN_SKIP=true
```

If you did all that correctly you should have the site up and running on the web.

### OpenGraph and twitter metatags

Go to https://www.opengraph.xyz/ and audit your newly deployed site.

We need to tweak our site to show good looking cards by adding data to the metatags that it is expecting:

<img width="1730" alt="Screen Shot 2022-05-24 at 3 30 42 p m" src="https://user-images.githubusercontent.com/247442/170127002-f83be65e-7dd6-41d0-a6c1-fbda6858b481.png">

### Structured data

Similarly for google to have rich results we should add [structured data](https://developers.google.com/search/docs/advanced/structured-data/article) to our article, you can use this example:

```
<script type="application/ld+json">
        {
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
</script>
```

When you audit your site at https://search.google.com/test/rich-results you should get something like this:


![Screen Shot 2022-05-24 at 3 25 48 p m](https://user-images.githubusercontent.com/247442/170127669-366bbfd8-badf-4b3d-b954-c2cbc72afb3a.png)

## Example site

If you need some hints here's the initial sate of the repo deployed to netlify:

https://next-seo.netlify.app/article

and the solution state of the same site can be consulted here

https://solution--next-seo.netlify.app/article
