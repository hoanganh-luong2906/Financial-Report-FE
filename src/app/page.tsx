import AppHeader from '@/components/app.header';
import '../styles/global.css';
import HomePage from './home/page';

const Page = (): JSX.Element => {
	return (
		<div className='w-full h-full'>
			<AppHeader />
			<HomePage />
		</div>
	);
};

export default Page;
