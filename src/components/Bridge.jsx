import React from 'react';
import BridgeBanner from './BridgeBanner';
import BridgeCircle from './BridgeCircle';
import SectionHeader from './SectionHeader';

const Bridge = () => {
	return (
		<>
			<section className='flex flex-col gap-y-[32px] mb-[60px]'>
				{/* Section header */}
				<SectionHeader header={'جسر المستفيد'} />
				{/* Step Section */}
				<BridgeCircle />
				{/* BridgeBanner */}
				<BridgeBanner />
			</section>
		</>
	);
};

export default Bridge;
