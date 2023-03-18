import MoreButton from './MoreButton';
import play from '../assets/v-icon.svg';

const About = () => {
	return (
		<>
			<section className='h-[calc(100vh-56px)] relative flex justify-start items-center'>
				<div className=''>
					{/* know More */}
					<div className='absolute top-0 left-0 h-[363px] w-[50%] bg-[#EFFDFF] rounded-br-[106px] z-50 hidden md:flex  flex-col justify-center items-start px-5 xl:px-[105px] gap-y-[37px] '>
						<p className='text-[#939393] text-[16px] leading-3-[27.12px]'>
							يهدف برنامج تجسير لابتكار حلول مساعدة للأسر المنتجة لتمكينها من تحول أنشطتها
							إلى منشآت مستدامة وذلك بدعم حصولها على الحلول التمويلية ودعم مساهمتها في تنمية
							الاقتصاد المحلي وخلق فرص تسويقية للمشاريع المميزة منها محليًا ودوليًا
						</p>
						{/* More Buttom */}
						<MoreButton />
					</div>
					{/*  */}
					<div>
						<p className='text-[16px]  leading-[27.12px] bg-[#D3FAFF] py-[8px] px-[42px] rounded-full mb-[16px] w-fit text-[#14B1C7]'>
							عن تجسير
						</p>
						<h2 className='text-[#242424] text-[25px] leading-[42.38px] mb-[62px]'>
							تحويل الأسر المنتجة إلى منشآت تجارية مستدامة
						</h2>
						<div className='relative'>
							<img
								src='https://s3-alpha-sig.figma.com/img/25ee/af01/97d0b37fdbb4951ba06caf2f306771d7?Expires=1679875200&Signature=TzVLa7ue8GB7C~oXnaeZ6MPFIy5hnN9ydTyBJQSOp9121ZdWHAc889tX~-uBS00Sk-~HrhGUx~mokE38cHcB7K2sB2kL~7Pace3RDZ7yR5GNHg6gltT-ckodDqEW~GKfYX2EJuNdVGOTc63TVDP4hp00~iihMY5qyA6pkWxRhWFCB2JP5C-9iu4kQhflTjCWP~4Lz0KTqhr3mA-OTTN4n7LGRqXKEiXyzJ4fV-WvPUo2Wi7UpL0p2LazEDGIGkF9ZWkvDrCveigSP4l1DeoX~WDLODPd3pxR5pdt4Q5ULjzyG-KBiaW8CekJSMklSyuSwdTnWbm0zepimB9KhWMKvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
								alt=''
								className='brightness-50 rounded-[20px] object-cover  h-[548px]'
							/>
							<div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  p-[40px] bg-[#0C74AF] rounded-full before:absolute before:-inset-2 before:z-10 before:border before:border-white before:rounded-full after:absolute after:-inset-5 after:z-10 after:border after:border-white after:rounded-full'>
								<img src={play} alt='' />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
