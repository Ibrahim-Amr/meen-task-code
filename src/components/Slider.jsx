import MoreButton from './MoreButton';
import image1 from '../assets/slider/1.jpg';
import image2 from '../assets/slider/2.jpg';
import image3 from '../assets/slider/3.jpg';
import image4 from '../assets/slider/4.jpg';
import image5 from '../assets/slider/5.jpg';
import { useState } from 'react';

const Slider = () => {
	const images = [
		{ img: image1, name: 'التدريب', layer: 'blue-layer' },
		{ img: image2, name: 'تطوير الأعمال', layer: 'green-layer' },
		{ img: image3, name: 'دراسة الجدوى', layer: 'blue-layer' },
		{ img: image4, name: 'الجلسات الاستشارية', layer: 'green-layer' },
		{ img: image5, name: 'التمويل', layer: 'blue-layer' },
	];
	const [activeSlide, setAvitveSlide] = useState('التدريب');
	return (
		<section className='hidden lg:block'>
			<div className='flex'>
				{images.map((slide, index) => (
					<div
						key={index}
						onClick={() => setAvitveSlide(slide.name)}
						className={`h-[640px] flex justify-center items-center  relative ${
							activeSlide === slide.name ? 'w-[640px]' : `w-[200px] ${slide.layer}`
						} duration-150 ease-in-out cursor-pointer`}>
						{/* Image */}
						<img
							src={slide.img}
							alt={slide.name}
							className='brightness-50 w-full h-full object-cover'
						/>
						{/* Layer */}
						<div
							className={`text-white absolute ${
								activeSlide === slide.name ? 'top-1/2 -translate-y-[25%]' : 'bottom-0'
							} duration-150 ease-in-out`}>
							{/* Text */}
							<div className='mb-[52px]'>
								<p className='text-[25px] leading-[37.5px] font-medium pb-4 border-b w-fit border-[#939393]'>
									{slide.name}
								</p>
								<p
									className={`${
										activeSlide === slide.name ? '' : 'hidden'
									} duration-150 ease-in-out`}>
									برامج تدريبية وتأهيلية لتنمية المهارات المعرفية لأصحاب المشاريع المتناهية
									الصغر.
								</p>
							</div>
							{/* Buttom */}
							{activeSlide === slide.name && <MoreButton />}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Slider;
