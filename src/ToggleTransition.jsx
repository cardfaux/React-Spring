import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const ToggleTransition = () => {
	const [isToggled, setToggled] = useState(false);
	const transition = useTransition(isToggled, null, {
		from: { opacity: 0, position: 'absolute' },
		enter: { opacity: 1 },
		leave: { opacity: 0 }
	});

	return (
		<div style={{ position: 'relative' }}>
			{transition.map(({ item, key, props }) =>
				item ? (
					<animated.h1 style={props}>Hello</animated.h1>
				) : (
					<animated.h1 style={props}>World</animated.h1>
				)
			)}
			<button onClick={() => setToggled(!isToggled)}>Toggle</button>
		</div>
	);
};

//const AnimatedTitle = animated(componentName);

export default ToggleTransition;
