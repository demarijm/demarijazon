import Navbar from "../components/Navbar/Navbar";
import { NextPage } from "next";
import styles from '../styles/Home.module.css'
import WorkTogether from "../components/WorkTogether";
import Footer from "../components/Footer";

const About: NextPage = () => {

    return (
      <div className={styles.container}>
        <Navbar />

        <div className="flex flex-col items-center border-t-2 border-black ">


        <h1 className=" text-[16rem] text-center py-12 font-bold leading-[0.8] ">
          ABOUT
        </h1>

        <p className='max-w-[90%]'> 
          The term Web Session defines the amount of time a person spends on a
          website. While it is evident that we find ourselves consistently
          surfing a myriad of websites, there is a lack of focus on enhancing
          the experience that each website evokes. Given the ever-increasing
          amount of time that we allocate on visiting websites - Web Sessions
          focuses on applying human-centered design principles and the latest
          web technologies to enhance the experience of your sites visitors.
          Our need to develop using cutting edge web technologies complements
          our design obsession. Designing and developing websites without
          compromises allows us to deliver unique web experiences that are
          original and leave a lasting impression.
        </p>

        </div>

        <WorkTogether />

        <Footer />
      </div>
    );
}
export default About;