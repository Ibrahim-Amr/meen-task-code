import { Link, NavLink } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
	return (
		<>
			<nav className='sticky top-0 flex flex-wrap items-center justify-between w-full  md:py-0 px-4 text-lg text-gray-700 bg-gray-50 shadow-md z-[100]'>
				<div className='w-full max-w-[1440px] mx-auto p-0 flex justify-between items-center md:block'>
					<div className='hidden lg:flex justify-between items-center '>
						{/* Logo */}
						<Link to={'/'}>
							<img
								src='https://www.sdb.gov.sa/SDB/img/logo_ar.svg'
								alt='logo'
								className='h-[56px]'
							/>
						</Link>
						{/* Links */}
						<div className='hidden md:flex justify-between items-center w-fit'>
							<ul className='pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0'>
								<li>
									<NavLink to={'/'} className='md:p-4 py-2 block'>
										الرئيسية
									</NavLink>
								</li>
								<li>
									<NavLink to={'/about'} className='md:p-4 py-2 block'>
										عن تجسير
									</NavLink>
								</li>
								<li>
									<NavLink to={'/services'} className='md:p-4 py-2 block'>
										الخدمات
									</NavLink>
								</li>
								<li>
									<NavLink to={'/beneficiaries'} className='md:p-4 py-2 block'>
										عن المستفيد
									</NavLink>
								</li>
							</ul>
						</div>
						{/* User Status */}
						<div className=''>
							{/* Text */}
							<div className='flex flex-col justify-center items-start gap-x-[5px] px-5'>
								<p className='text-[10px] font-[400px] leading-[15px] text-[#6A6A6A]'>
									حالة الحساب
								</p>
								<p className='relative text-[15px] font-[400px] leading-[21px] text-black before:w-[10px] before:h-[10px] before:bg-[#FFBB6A] before:rounded-full before:absolute before:right-0 before:translate-x-[calc(100%+5px)] before:top-[50%] before:translate-y-[-50%]'>
									قيد التفعيل
								</p>
							</div>
						</div>
					</div>
					{/* Mobile Nav */}
				</div>
				<MobileNavbar />
			</nav>
		</>
	);
};

export default Navbar;
