// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper';
import 'swiper/swiper-bundle.css';
// Images
import image1 from '../assets/slider/1.jpg';
import image2 from '../assets/slider/2.jpg';
import image3 from '../assets/slider/3.jpg';
import image4 from '../assets/slider/4.jpg';
import image5 from '../assets/slider/5.jpg';

const SwiperSlider = () => {
	const images = [
		{ img: image1, name: 'التدريب', layer: 'blue-layer' },
		{ img: image2, name: 'تطوير الأعمال', layer: 'green-layer' },
		{ img: image3, name: 'دراسة الجدوى', layer: 'blue-layer' },
		{ img: image4, name: 'الجلسات الاستشارية', layer: 'green-layer' },
		{ img: image5, name: 'التمويل', layer: 'blue-layer' },
	];
	return (
		<>
			<div className='h-[640px] block lg:hidden'>
				<Swiper
					slidesPerView={1}
					navigation={true}
					pagination={{
						type: 'progressbar',
					}}
					effect='fade'
					autoplay={{ delay: 1500 }}
					modules={[Pagination, Navigation, Autoplay, EffectFade]}
					className='mySwiper mb-6 relative shadow h-full '>
					{images.map((data, index) => (
						<SwiperSlide key={index}>
							<div
								style={{
									backgroundImage: `url(${data.img})`,
									objectFit: 'cover',
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									backgroundRepeat: 'no-repeat',
								}}
								className='relative w-full h-[640px] overflow-hidden cursor-pointer brightness-50'></div>
							{/* Text */}
							<div className='text-white absolute top-6 right-4'>
								<p className='text-4xl leading-[37.5px] font-medium mb-5 pb-2 border-b w-fit border-[#939393]'>
									{data.name}
								</p>
								<p className={` duration-150 ease-in-out`}>
									برامج تدريبية وتأهيلية لتنمية المهارات المعرفية لأصحاب المشاريع المتناهية
									الصغر.
								</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};

export default SwiperSlider;
