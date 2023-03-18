import React from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

const MoreButton = () => {
	return (
		<>
			<button className='flex justify-center items-center gap-x-[31px] text-white bg-[#31B98A] hover:bg-[#218b66] rounded-[25px] py-[9px] pr-[26px] pl-[9px] cursor-pointer w-fit active:scale-95 duration-100 ease-out'>
				<span> عرض المزيد</span>
				<span className='w-[32px] h-[32px] bg-white rounded-full flex justify-center items-center'>
					<HiOutlineArrowNarrowLeft className='text-[#31B98A]' />
				</span>
			</button>
		</>
	);
};

export default MoreButton;
