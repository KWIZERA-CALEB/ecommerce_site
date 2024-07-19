import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const MobileHero = () => {
  return (
    <div className="md:hidden">
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper w-full"
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
  );
};

export default MobileHero;
