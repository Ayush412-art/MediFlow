
import Image from "next/image";
import Sponcers from "./components/Sponcers";
export default function Home() {
  return (
    <main>
      <div className="hero w-full h-[550px] flex flex-col justify-center items-center text-white px-6 text-center">
        
        <p className="px-3 py-3 rounded-full  bg-orange-500 shadow-2xl text-sm md:text-base uppercase tracking-wide opacity-90">
          Get your instant checkup now
        </p>

        <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
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


    </main>
  );
}
