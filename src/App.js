import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom';
import Beneficiaries from './pages/Beneficiaries';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ScrollToTop from 'react-scroll-to-top';

function App() {
	const LayOut = () => {
		return (
			<>
				<main>
					<Navbar />
					<Outlet />
					<Footer />
					<ScrollToTop
						top='200'
						color='white'
						smooth
						className='flex justify-center items-center '
					/>
				</main>
			</>
		);
	};

	const route = createHashRouter([
		{
			path: '/',
			element: <LayOut />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: '/about',
					element: <AboutPage />,
				},
				{
					path: '/services',
					element: <ServicesPage />,
				},
				{
					path: '/beneficiaries',
					element: <Beneficiaries />,
				},
			],
		},
	]);
	return (
		<>
			<RouterProvider router={route}></RouterProvider>
		</>
	);
}

export default App;
