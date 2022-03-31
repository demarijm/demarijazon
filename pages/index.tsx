import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import WorkTogether from '../components/WorkTogether'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {

  const boxes:string[] = [
    'Example Website',
    'Another Website',
    'And Another one'
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Demari Jazon</title>
        <meta name="description" content="Digital Experience Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className="flex flex-col justify-start">
        <h1 className=" text-[12rem] py-12 font-bold leading-[0.8] border-t-2 border-black ">
          Web Design <br /> & Experiences
        </h1>
        <div className="flex justify-between border-b-2 border-black">
          <p>OUR WORK</p>
          <div>

          <img src="/box.gif" alt="moving box"/>
            </div>
        </div>

        <div className="flex h-80 py-4 border-b-2 border-black">
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

        <div className="pt-12 flex flex-col items-center leading-loose text-center justify-center">
          <h2 className="font-bold text-6xl pb-4">Design.Develop.Deliver</h2>
          <p className="text-2xl max-w-lg pb-4">
            I like to design experiences that change the way the web looks.
            Let's stop using boring work!
          </p>
          <a className="hover:underline hover:leading-loose">Learn More</a>
        </div>

          <WorkTogether />

       

       
      </main>

      <Footer />
    </div>
  );
}

export default Home
