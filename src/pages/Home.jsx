import About from '../components/About';
import Bridge from '../components/Bridge';

import Services from './Services';

const Home = () => {
	return (
		<>
			<section className='max-w-[1440px] mx-auto py-2 px-4 md:px-2'>
				<About />
				<Bridge />
				<Services />
			</section>
		</>
	);
};

export default Home;
