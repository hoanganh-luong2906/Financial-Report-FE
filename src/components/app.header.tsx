const AppHeader = (): JSX.Element => {
	return (
		<div className='w-full flex justify-between items-center bg-white h-10 bg-slate-300 px-5'>
			<label className='bar menu-toggler'>
				<input type='checkbox' id='check' />
				<span className='menu-top'></span>
				<span className='menu-middle'></span>
				<span className='menu-bottom'></span>
			</label>
			<h4>User</h4>
		</div>
	);
};

export default AppHeader;
