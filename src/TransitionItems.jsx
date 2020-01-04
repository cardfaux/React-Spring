import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const TransitionItems = () => {
	const [items, setItems] = useState([
		{
			letter: 'A',
			key: 1
		},
		{
			letter: 'D',
			key: 2
		},
		{
			letter: 'A',
			key: 3
		},
		{
			letter: 'M',
			key: 4
		},
		{
			letter: 'H',
			key: 5
		}
	]);
	const transition = useTransition(items, (item) => item.key, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 }
	});

	return (
		<div>
			{transition.map(({ item, key, props }) => (
				<animated.h1 style={props} key={key}>
					{item.letter}
				</animated.h1>
			))}
			<button
				onClick={() =>
					setItems([
						{
							letter: 'J',
							key: 1
						}
					])
				}
			>
				Toggle
			</button>
		</div>
	);
};

//const AnimatedTitle = animated(componentName);

export default TransitionItems;
