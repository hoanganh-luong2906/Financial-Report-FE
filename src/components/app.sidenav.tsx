import Image from 'next/image';

const SideNav = (): JSX.Element => {
	return (
		// <div className='sm:w-32 md:w-32 lg:w-48  h-screen '>
		<div className='col-span-2 w-full h-full flex-col bg-white px-5 justify-start items-center'>
			<Image
				className='my-5'
				src='/logo.svg'
				width={180}
				height={50}
				alt='Logo Image'
			/>
			<h3 className='text-center my-3'>Home</h3>
			<h3 className='text-center my-3'>Detail report</h3>
		</div>
	);
};

export default SideNav;
