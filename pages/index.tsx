import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import WorkTogether from '../components/WorkTogether'
import styles from '../styles/Home.module.css'
import web from './web.png'


const Home: NextPage = () => {

  const boxes:string[] = [
    'Example Website',
    'Another Website',
    'And Another one'
  ]

  return (
    <div >
      <div className="px-8 dark:text-[#94a3b8] dark:bg-slate-900">
        <Head>
          <title>Demari Jazon</title>
          <meta name="description" content="Digital Experience Studio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />

        <main className="flex flex-col justify-start">
          <img className="w-full" src='./web.png' />
          <div className="flex justify-between border-b-2 dark:border-[#E2E8F0] border-black text-lg">
            <p>Living at the intersection of digital and creative, helping make the web more fun with immersive front-ends</p>
            <div>
              <img className="h-8 pb-2" src="/box.gif" alt="moving box" />
            </div>
          </div>
            <h2 className='pt-12 font-bold'>QUICK LINKS</h2>

          <div className="flex h-80 py-4">
            {boxes.map((box, index) => {
              return (
                <div
                  key={index}
                  className="border-2 w-full mr-2 bg-blue-400 flex justify-between items-end border-black"
                >
                  <div className="bg-white ">
                    <p className="w-full h-full">{box}</p>
                  </div>
                  <div className="bg-white ">
                    <p className="w-full h-full">{box}</p>
                  </div>
                </div>
              );
            })}
          </div>
            <p className='pb-2'>See More</p>

            <h2 className='pt-6 font-bold'>SOME OF MY WORK</h2>

<div className="flex h-80 py-4">
  {boxes.map((box, index) => {
    return (
      <div
        key={index}
        className="border-2 w-full mr-2 bg-blue-400 flex justify-between items-end border-black"
      >
        <div className="bg-white ">
          <p className="w-full h-full">{box}</p>
        </div>
        <div className="bg-white ">
          <p className="w-full h-full">{box}</p>
        </div>
      </div>
    );
  })}
</div>
  <p className='border-b-2 pb-12 dark:border-[#E2E8F0] border-black'>See More</p>

          <div className="pt-12 flex flex-col items-center leading-loose text-center justify-center">
            <h2 className="font-bold text-[2rem] pb-4">Design.Develop.Deliver</h2>
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
    </div>
  );
}

export default Home
