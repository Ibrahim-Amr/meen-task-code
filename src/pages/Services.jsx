import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Slider from '../components/Slider';
import SwiperSlider from '../components/SwiperSlider';

const Services = () => {
	return (
		<>
			<section className='flex flex-col gap-y-[32px] mb-[60px]'>
				{/* Section header */}
				<SectionHeader header={'خدماتنا'} />
				<Slider />
				<SwiperSlider />
			</section>
		</>
	);
};

export default Services;
