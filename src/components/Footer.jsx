import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Footer = () => {
	return (
		<>
			<footer className='bg-[#14B1C7] rounded-t-[20px]'>
				<div className='container mx-auto '>
					{/* Top Section */}
					<div className='py-5 flex flex-col md:flex-row justify-between items-center border-b border-white/30 gap-y-5 md:gap-y-0 '>
						<ul className='flex justify-between items-center gap-x-8 text-white'>
							<li>
								<Link to={'/'}>الرئيسية</Link>
							</li>
							<li>
								<Link to={'/'}>عن المنصة</Link>
							</li>
							<li>
								<Link to={'/'}>الخدمات</Link>
							</li>
							<li>
								<Link to={'/'}>إنضم إلينا</Link>
							</li>
						</ul>
						{/* logo */}
						<div>
							<Link to={'/'}>
								<img src={logo} alt='logo' className='h-[68.21px]' />
							</Link>
						</div>
						{/* Socail */}
						<ul className='flex justify-between items-center gap-x-8 text-white text-2xl '>
							<li className='w-[42px] h-[42px] rounded-full border border-white flex justify-center items-center'>
								<Link
									to={'https://www.linkedin.com/in/ibrahim-omar-883156253/'}
									target='_blank'>
									<AiFillLinkedin />
								</Link>
							</li>
							<li className='w-[42px] h-[42px] rounded-full border border-white flex justify-center items-center'>
								<Link to={'/'} target='_blank'>
									<AiFillYoutube />
								</Link>
							</li>
							<li className='w-[42px] h-[42px] rounded-full border border-white flex justify-center items-center'>
								<Link to={'/'} target='_blank'>
									<AiFillInstagram />
								</Link>
							</li>
							<li className='w-[42px] h-[42px] rounded-full border border-white flex justify-center items-center'>
								<Link to={'/'} target='_blank'>
									<AiOutlineTwitter />
								</Link>
							</li>
							<li className='w-[42px] h-[42px] rounded-full border border-white flex justify-center items-center'>
								<Link to={'/'} target='_blank'>
									<BsFacebook />
								</Link>
							</li>
						</ul>
					</div>
					{/* Bottom Section */}
					<div className='py-4'>
						<ul className='flex justify-center  md:justify-end items-center gap-x-8 text-white  '>
							<li>
								<Link
									to={'/'}
									className='underline hover:text-gray-200 duration-150 ease-in-out '>
									سياسة الخصوصية
								</Link>
							</li>
							<li>
								<Link
									to={'/'}
									className='underline hover:text-gray-200 duration-150 ease-in-out '>
									شروط الاستخدام
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
