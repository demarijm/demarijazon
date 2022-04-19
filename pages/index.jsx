import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import WorkTogether from '../components/WorkTogether'
import styles from '../styles/Home.module.css'
import Swiping from '../components/Swiping';

import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

import "../styles/Home.module.css";




const Index = ({ allPosts: { edges }, preview }) => {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)
  const theTitle = heroPost.title.toString();


  return (
    <div className={styles.container}>
      <div className="px-8">
        <Head>
          <title>Demari Jazon</title>
          <meta name="description" content="Digital Experience Studio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />

        <main className="flex flex-col justify-start">
          <div className='relative w-full'>
          <img className="absolute z-20 " src="./web.png" />
          <img className=' aboslute z-10' src='./ellipse.png' />
          </div>

          <div className="flex justify-between border-b-2 mb-12 pb-4 border-black text-lg">
            <p>DIGITAL + CREATIVE</p>
            <div>
              <img className="h-6 mb-[0.9rem] " src="/box.gif" alt="moving box" />
            </div>
          </div>
          <h2 className="pt-12 font-bold">QUICK LINKS</h2>
          <Swiping posts={morePosts} />

     
          <p className="pb-2">See More</p>

          <h2 className="pt-6 font-bold">SOME OF MY WORK</h2>
          <Swiping posts={morePosts} />

          <p className="border-b-2 pb-12 border-black">
            See More
          </p>

          <div className="pt-12 flex flex-col items-center leading-loose text-center justify-center">
            <h2 className="font-bold text-[2rem] pb-4">
              Design.Develop.Deliver
            </h2>
            <p className="text-2xl max-w-lg pb-4">
              I like to design experiences that change the way the web looks.
              Lets stop using boring work!
            </p>
            <a className="hover:underline hover:leading-loose">Learn More</a>
          </div>

          <WorkTogether />
        </main>

        <Footer />
      </div>
      <Layout preview={preview}>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </div>
  );
}

export default Index;

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
  }
}