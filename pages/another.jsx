import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import WorkTogether from "../components/WorkTogether";


export default function Another() {
  return (

     

        <div className="flex flex-col mx-8  pt-6 justify-start">

          <div className="flex mx-8 justify-between border-b-2 border-black text-lg">
            <p>DIGITAL + CREATIVE</p>
            <div>
              <img className="h-8 pb-2" src="/box.gif" alt="moving box" />
            </div>
          </div>
      </div>
  );
}
