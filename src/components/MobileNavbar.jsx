import { useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';

const MobileNavbar = () => {
	const [menuStatus, setMenuStatus] = useState(false);
	let menu = useRef();
	let label = useRef();

	const closeMenu = () => {
		menu.current.classList.toggle('hidden');
	};

	// function to close the menu if you clicked outside of it
	useEffect(() => {
		let clickCheck = (e) => {
			if (
				menu.current.contains(e.target) === false &&
				label.current.contains(e.target) === false
			) {
				setMenuStatus((prevState) => !prevState);
				closeMenu();
			}
		};
		menuStatus && document.addEventListener('mousedown', clickCheck);
		return () => {
			document.removeEventListener('mousedown', clickCheck);
		};
	}, [menuStatus]);

	return (
		<>
			<div className='flex justify-between items-center w-full'>
				{/* Navbar Toggler in mobile screen */}
				<div>
					{menuStatus === false ? (
						<svg
							className='swap-off fill-current text-[#14B1C7] blocl lg:hidden cursor-pointer'
							ref={label}
							onClick={() => {
								closeMenu();
								setMenuStatus((prevState) => !prevState);
							}}
							xmlns='http://www.w3.org/2000/svg'
							width='32'
							height='32'
							viewBox='0 0 512 512'>
							<path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
						</svg>
					) : (
						<svg
							className='swap-on fill-current text-[#14B1C7] blocl lg:hidden cursor-pointer'
							ref={label}
							onClick={() => {
								closeMenu();
								setMenuStatus((prevState) => !prevState);
							}}
							xmlns='http://www.w3.org/2000/svg'
							width='32'
							height='32'
							viewBox='0 0 512 512'>
							<polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
						</svg>
					)}
				</div>
				{/* Logo */}
				<div className='lg:hidden block'>
					<Link to={'/'}>
						<img
							src='https://www.sdb.gov.sa/SDB/img/logo_ar.svg'
							loading='l'
							alt='logo'
							className='h-[56px]'
						/>
					</Link>
				</div>
				{/* user Status */}
				<div className='lg:hidden block'>
					{/* Text */}
					<div className='flex flex-col justify-center items-start gap-x-[5px] '>
						<p className='text-[10px] font-[400px] leading-[15px] text-[#6A6A6A]'>
							حالة الحساب
						</p>
						<p className='relative text-[15px] font-[400px] leading-[21px] text-black before:w-[10px] before:h-[10px] before:bg-[#FFBB6A] before:rounded-full before:absolute before:right-0 before:translate-x-[calc(100%+5px)] before:top-[50%] before:translate-y-[-50%]'>
							قيد التفعيل
						</p>
					</div>
				</div>
				{/* Links */}
				<div
					ref={menu}
					className='hidden lg:hidden absolute bottom-0 left-0 right-0 translate-y-full w-full px-20 bg-slate-100 shadow-inner duration-200 ease-in-out'>
					<ul className='flex flex-col gap-y-5 py-5 text-base text-gray-700 lg:flex lg:justify-between lg:pt-0'>
						<li>
							<Link
								onClick={() => {
									closeMenu();
									setMenuStatus((prevState) => !prevState);
								}}
								to={'/'}
								className='lg:p-4 py-2 hover:text-blue-500'>
								الرئيسية
							</Link>
						</li>
						<li>
							<Link
								onClick={() => {
									closeMenu();
									setMenuStatus((prevState) => !prevState);
								}}
								to={'/about'}
								className='lg:p-4 py-2 hover:text-blue-500'>
								عن تجسير
							</Link>
						</li>
						<li>
							<Link
								onClick={() => {
									closeMenu();
									setMenuStatus((prevState) => !prevState);
								}}
								to={'/services'}
								className='lg:p-4 py-2 hover:text-blue-500'>
								الخدمات
							</Link>
						</li>
						<li>
							<Link
								onClick={() => {
									closeMenu();
									setMenuStatus((prevState) => !prevState);
								}}
								to={'/beneficiaries'}
								className='lg:p-4 py-2 hover:text-blue-500'>
								عن المستفيد
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default MobileNavbar;
