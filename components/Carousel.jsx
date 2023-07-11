// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Zoom, Navigation, Pagination, Autoplay } from 'swiper/modules';
import carousel from '@/contents/carousel';
import Image from 'next/image';

function Carousel() {
	return (
		<Swiper
			id="swiper_two"
			style={{
				'--swiper-pagination-color': '#fff',
			}}
			zoom={true}
			navigation={true}
			pagination={{
				clickable: true,
			}}
			modules={[Zoom, Navigation, Pagination, Autoplay]}
			autoplay={{
				delay: 3000,
				disableOnInteraction: true,
			}}
			className="w-full mx-auto bg-gray-100/30"
		>
			{carousel.map((car, index) => (
				<SwiperSlide key={index}>
					<Image
						className="w-[1400px] mx-auto max-md:w-full max-md:h-[100%] md:p-10"
						src={car.imagen}
						alt="imagen"
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default Carousel;
