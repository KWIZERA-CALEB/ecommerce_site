import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';


const Hero = () => {

return (
    <>

        <div className="relative w-full h-96 mt-[50px]">
            <Swiper
                modules={[Pagination, Autoplay, EffectCoverflow]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={{
                el: '.swiper-pagination',
                clickable: true,
                }}
                className="mySwiper"
            >
                <SwiperSlide className="flex justify-center items-center">
                <img src="https://ap.rdcpix.com/23fb2dc4a8c87497e1d8f4efea26e580l-m559627912od-w480_h360.jpg" alt="Slide 1" className="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                <img src="https://ap.rdcpix.com/23fb2dc4a8c87497e1d8f4efea26e580l-m559627912od-w480_h360.jpg" alt="Slide 2" className="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                <img src="https://ap.rdcpix.com/23fb2dc4a8c87497e1d8f4efea26e580l-m559627912od-w480_h360.jpg" alt="Slide 3" className="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                <img src="https://ap.rdcpix.com/23fb2dc4a8c87497e1d8f4efea26e580l-m559627912od-w480_h360.jpg" alt="Slide 4" className="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                <img src="https://ap.rdcpix.com/23fb2dc4a8c87497e1d8f4efea26e580l-m559627912od-w480_h360.jpg" alt="Slide 5" className="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                <img src="https://ap.rdcpix.com/23fb2dc4a8c87497e1d8f4efea26e580l-m559627912od-w480_h360.jpg" alt="Slide 6" className="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                <img src="https://ap.rdcpix.com/23fb2dc4a8c87497e1d8f4efea26e580l-m559627912od-w480_h360.jpg" alt="Slide 7" className="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                <img src="https://ap.rdcpix.com/23fb2dc4a8c87497e1d8f4efea26e580l-m559627912od-w480_h360.jpg" alt="Slide 8" className="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                <img src="https://ap.rdcpix.com/23fb2dc4a8c87497e1d8f4efea26e580l-m559627912od-w480_h360.jpg" alt="Slide 9" className="w-full h-full object-cover" />
                </SwiperSlide>
            </Swiper>
        </div>

        <div>
            <div><h4 className="text-slate-900 font-black text-[25px] select-none mt-[20px] flex justify-center">Our Top Products</h4></div>
        </div>

    </>
  )
}

export default Hero
