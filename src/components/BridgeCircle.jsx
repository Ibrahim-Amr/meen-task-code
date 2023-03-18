import React, { useState } from 'react';

const BridgeCircle = () => {
	const [selected, setSelected] = useState('التسجيل');
	const steps = [
		'التسجيل',
		'القبول',
		'التدريب',
		'دراسة الجدوى',
		'جلسات الاستشارية',
		'تمويل',
		'تطوير الاعمال',
		'تصدير',
	];
	return (
		<>
			<div className='relative flex justify-start sm:justify-between items-center flex-wrap gap-x-5 lg:gap-x-0 gap-y-5 md:before:border  md:before:border-[#D9D9D9] md:before:w-full md:before:absolute'>
				{steps.map((step, index) => (
					<div
						onClick={() => setSelected(step)}
						key={index}
						className={`h-[65px] w-[65px] p-2 md:h-[70px] md:w-[70px] md:p-5 lg:h-[84px] lg:w-[116.07px] lg:px-2 flex justify-center items-center rounded-[112px] border border-[#14B1C7] ${
							selected === step ? 'bg-[#14B1C7] text-white' : 'text-black bg-white'
						} cursor-pointer z-10 overflow-hidden`}>
						<p className='text-[13px] font-bold md:font-normal md:text-[16px] leading-[24px] break-words text-center'>
							{step}
						</p>
					</div>
				))}
			</div>
		</>
	);
};

export default BridgeCircle;
