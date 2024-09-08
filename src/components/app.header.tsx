'use client';
import Image from 'next/image';
import '../styles/app/header.style.css';
import { useState } from 'react';

const AppHeader = (): JSX.Element => {
	const [isClicked, setClickStatus] = useState(false);

	const handleOnclickMenu = () => {
		setClickStatus(!isClicked);
		document
			.getElementsByClassName('menu-toggler')[0]
			.setAttribute(
				'class',
				isClicked
					? 'menu-toggler flex-col justify-evenly items-center w-9 h-full animate-normal p-1 bg-white'
					: 'menu-toggler flex-col justify-evenly items-center w-9 h-full animate-normal p-1 rounded-sm bg-light-gray'
			);
	};

	return (
		<div className='w-full h-fit flex justify-between items-center bg-white bg-slate-300 pl-5 pr-8 py-4'>
			<div
				className='menu-toggler flex-col justify-evenly items-center w-9 p-1 h-full animate-normal'
				onClick={handleOnclickMenu}
			>
				<div className='menu w-full h-1 my-1 bg-gray rounded-xl' />
				<div className='menu w-full h-1 my-1 bg-gray rounded-xl' />
				<div className='menu w-full h-1 my-1 bg-gray rounded-xl' />
			</div>

			<div className='flex justify-end items-center w-fit h-full'>
				<Image
					className='mx-2 border'
					src='/user-default-avt.png'
					alt='Hoang Anh Luong'
					width={40}
					height={40}
				/>
				<h4 className='w-fit font-medium text-base'>Hoang Anh Luong</h4>
			</div>
		</div>
	);
};

export default AppHeader;
