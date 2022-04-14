import Navbar from "../components/Navbar/Navbar";
import { NextPage } from "next";
import styles from '../styles/Home.module.css'
import Footer from "../components/Footer";

const Pricing: NextPage = () => {

    return (
      <div className={styles.container}>
        <Navbar />

        <div className="flex flex-col items-center border-t-2 border-black ">


        <h1 className=" text-[16rem] text-center py-12 font-bold leading-[0.8] ">
          PRICING
        </h1>

        <p className='max-w-[90%]'> 
          All of our pricing is upfront. No more Call for quote. We deliver, consistently. 
        </p>

        </div>


        <Footer />
      </div>
    );
}
export default Pricing;