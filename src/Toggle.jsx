import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Toggle = () => {
	const [isToggled, setToggled] = useState(false);
	const { color, y } = useSpring({
		//opacity: isToggled ? 1 : 0,
		//fontSize: isToggled ? '2rem' : '5em',
		color: isToggled ? '#000' : 'green',
		//transform: isToggled ? 'translate3d(0,0,0)' : 'translate3d(0,-50px,0)'
		y: isToggled ? 0 : 1
	});

	return (
		<div>
			<animated.h1
				style={{
					transform: y
						.interpolate({
							range: [0, 0.25, 0.5, 0.75, 1],
							output: [0, -25, -50, -100, -50]
						})
						.interpolate((y) => `translate3d(0, ${y}px, 0)`),
					color
				}}
			>
				Hello
			</animated.h1>
			<button onClick={() => setToggled(!isToggled)}>Toggle</button>
		</div>
	);
};

//const AnimatedTitle = animated(componentName);

export default Toggle;
