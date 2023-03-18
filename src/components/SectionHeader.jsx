import React from 'react';

const SectionHeader = ({ header }) => {
	return (
		<>
			<div className='flex flex-col gap-y-[12px]'>
				<h2 className='text-[25px] leading-[37.5px]'>{header}</h2>
				<p className='text-[16px] leading-[27.12px] text-[#939393]'>
					يعبر هذا النص العربي عن نص وهمي سيتم اضافة نص حقيقي قريباً{' '}
				</p>
			</div>
		</>
	);
};

export default SectionHeader;
