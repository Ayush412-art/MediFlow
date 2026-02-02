
import Image from "next/image";
import Sponcers from "./components/Sponcers";
import Navbar from "./components/Navbar";
import { poppins , inter } from "./layout";


export default function Home() {
  return (
    <main>
      <Navbar />

      <div id="home" className="hero w-full h-[550px] flex flex-col justify-center items-center text-white px-6 text-center">
        
        <p className={`px-3 py-3 rounded-full  bg-orange-500 shadow-2xl font-bold text-sm md:text-lg uppercase tracking-wide opacity-90`}>
          Get your instant checkup now
        </p>

        <h1 className={`mt-4 text-3xl md:text-5xl font-bold ${poppins.className}  leading-tight`}>
          Smart Health Checkup <br />
          & Doctor's Appointment
        </h1>

        <p className="mt-6 max-w-2xl context-text text-base md:text-lg opacity-90">
          Don’t wait for illness to take control of your life.
          Schedule your health checkup today and move towards a healthier,
          happier future.
        </p>
      
        <div className="flex mt-5 w-flex-col lg:flex-row">
              <div className="card bg-white/20 cursor-pointer
    backdrop-blur-lg rounded-box grid py-2 px-4  grow place-items-center">Book Appointment</div>
  <div className="divider lg:divider-horizontal">OR</div>
  <div className="card bg-white/20
    backdrop-blur-lg cursor-pointer  rounded-box grid grow py-2 px-4 place-items-center">Free AI checkup</div>
        </div>

      </div>
      <div className="relative -mt-16 mx-auto px-6 max-w-6xl flex justify-center">
              <Image className="rounded-xl shadow-2xl" src={"/images/dash.png"} alt="dashboard/png" height={1000} width={1000}></Image>
      </div>

      {/*Medical brands sponcers*/}
        <Sponcers />

       <section className="bg-[#4A7766] px-6 lg:px-12 xl:px-[8%] py-16">
     <div className="flex flex-col lg:flex-row items-center gap-10">
    <div className="flex-1">
      <Image
        className="rounded-xl shadow-2xl w-full max-w-lg mx-auto"
        src="/images/dash.png"
        alt="dashboard preview"
        height={600}
        width={600}
        priority
      />
    </div>

    <div className="flex-1 text-white text-center lg:text-left">

      <h2 className={`text-3xl lg:text-4xl  font-semibold leading-tight mb-4 `}>
        Instant Symptom Guidance & 🩺 Verified Doctor Appointments
      </h2>

      <p className={`text-base lg:text-lg ${inter.className} text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0`}>
        💬 Give your symptoms details and ask for quick action 
      </p>
        <p className={`text-base lg:text-lg ${inter.className} text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0`}>
          ⚡Quick LLM solution on patient's health condition with face to face doctor's consult.
      </p>
       <p className={`text-base lg:text-lg ${inter.className} text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0`}>
         📅 Book verified doctor appointments effortlessly with{" "}
        <strong className="font-semibold text-white">MediFlow</strong>.
      </p>

      <div className="mt-3 lg:mt-5 ">
              <ul className="steps">
        <li className="step step-primary">Register</li>
        <li className="step step-primary">Choose plan</li>
        <li className="step">Purchase</li>
        <li className="step">Receive Product</li>
      </ul>
      </div>
  
    </div>

        
  </div>
</section>


    </main>
  );
}
