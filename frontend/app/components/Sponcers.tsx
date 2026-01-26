
import Image from "next/image";

const logos = [
    "/images/sponcer1.png",
    "/images/sponcer2.png",
    "/images/sponcer3.png",
    "/images/sponcer4.png",
    "/images/sponcer5.png",
    "/images/sponcer6.png",
]
function Sponcers() {
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-6 mt-3">
        <p className="w-full m-4 text-center text-base font-semibold uppercase text-gray-500 tracking-wider">
                Our trusted medical partners
        </p>

        <div className="relative overflow-hidden group ">
          <div className="flex items-center gap-16 animate-scroll">
                {[...logos , ...logos].map((val , index) =>(
                    <Image 

                        src={val}
                        key={index}
                        alt="sponcers icons"
                        width={120}
                        height={120}

                        className="object-contain grayscale hover:grayscale-0 transition-all"

                    />
                ))
                }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponcers;
