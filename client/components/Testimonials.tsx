import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function Testimonials() {
  const isBreakpoint = useMediaQuery(768);
  const testimonials = [
    {
      text:
        "Praesent pharetra rhoncus dictum. Morbi fermentum vestibulum lectus, in vestibulum libero.",
      img: "/images/profile1.jpg",
      name: "Mark william",
      company: "ABC Company",
      id: "1",
    },
    {
      text:
        "Praesent pharetra rhoncus dictum. Morbi fermentum vestibulum lectus, in vestibulum libero.",
      img: "/images/profile2.jpg",
      name: "Mark william",
      company: "ABC Company",
      id: "2",
    },
    {
      text:
        "Praesent pharetra rhoncus dictum. Morbi fermentum vestibulum lectus, in vestibulum libero.",
      img: "/images/profile3.jpg",
      name: "Mark william",
      company: "ABC Company",
      id: "3",
    },
  ];

  return (
    <section className="grid-container bg-testimonialBG bg-no-repeat bg-right py-20 md:py-32">
      <main className="col-start-2 col-end-3">
        <h1 className=" text-2xl md:text-4xl">What our Customers say</h1>
        <Swiper
          spaceBetween={20}
          slidesPerView={isBreakpoint ? 1 : 1.4}
          className="flex-row md:flex mt-10 md:mt-20 max-w-3xl rounded-xl "
        >
          {testimonials.map(({ name, img, company, text, id }) => (
            <SwiperSlide
              className="bg-gradient-to-tr from-purple-300    to-red-200 rounded-3xl transform cursor-pointer "
              key={id}
            >
              <div className=" border p-4 md:p-16  rounded-3xl  ">
                <div className="rounded-full overflow-hidden relative w-14 h-14 shadow-md py-2 border-4 border-white ring-1 ring-black mb-4  ">
                  <div className="">
                    <Image src={img} layout="fill" />
                  </div>
                </div>
                <p className="mb-4 md:text-lg ">{text}</p>
                <h1 className="font-semibold ">{name}</h1>
                <cite className="text-xs">{company}</cite>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </section>
  );
}
