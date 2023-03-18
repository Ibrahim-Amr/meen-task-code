import img1 from '../assets/1.png';

const BridgeBanner = () => {
	return (
		<>
			<div className='flex justify-start gap-x-5 xl:gap-x-0 xl:justify-between items-center bg-[#0C74AF] text-white h-[116px] rounded-[16px] overflow-hidden'>
				<p className='flex justify-center items-center bg-[#14B1C7] text-white h-full w-fit text-[59px] leading-[88.5px] px-[36px] py-[31px] rounded-[16px]'>
					<span> 01</span>
				</p>
				<p className=' md:text-[20px] leading-[30px] pl-5 '>
					<span>
						في هذه المرحلة نسعى لاستقطاب الاسر المنتجة ذو الكفاءة و الرغبة للانتقال الى مشاريع
						صغيرة مستدامة
					</span>
				</p>

				<img src={img1} alt='' className='hidden xl:flex h-full ml-6' />
			</div>
		</>
	);
};

export default BridgeBanner;
