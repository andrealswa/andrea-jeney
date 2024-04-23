import { particlesConfig } from '@/config/particles-config';
import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
	const particlesInit = useCallback(async (engine: any) => {
		await loadFull(engine);
	}, []);
	const particlesLoaded = useCallback(async (container: any) => {
		await console.log(container);
	}, []);

	return (
		<div id="particles-background">
			<Particles
				id="ts-particles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={particlesConfig as any}
			/>
		</div>
	);
};

export default ParticlesBackground;
