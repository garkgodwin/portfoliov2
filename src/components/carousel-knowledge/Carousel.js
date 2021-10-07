import React, { useEffect, useState } from 'react';

//?STYLES
import './Carousel.css';

//?DATA
import { data } from './Data';

//?COMPONENTS
import CarouselItem from './CarouselItem';

const Carousel = () => {
	let [items, setItems] = useState(data);
	const [index, setIndex] = useState({
		left: 0,
		preActive: 0,
		active: 0,
		proActive: 0,
		right: 0,
	});
	useEffect(() => {
		setDefault();
	}, []);
	const setDefault = () => {
		let len = items.length;
		let midIndex = 0;
		if (len % 2 === 0) {
			//?middle will be middle left item
			midIndex = len / 2;
		} else {
			midIndex = Math.floor(len / 2);
		}
		for (let i = 0; i < len; i++) {
			const leftIndex = setLeft(midIndex, len - 1);
			const rightIndex = setRight(midIndex, len - 1);
			setIndex({
				left: leftIndex,
				preActive: midIndex,
				active: midIndex,
				proActive: midIndex,
				right: rightIndex,
			});
		}
	};

	const setLeft = (midIndex, lastIndex) => {
		let leftIndex = 0;
		if (midIndex === 0) {
			leftIndex = lastIndex;
		} else {
			leftIndex = midIndex - 1;
		}
		return leftIndex;
	};

	const setRight = (midIndex, lastIndex) => {
		let rightIndex = 0;
		if (midIndex === lastIndex) {
			rightIndex = 0;
		} else {
			rightIndex = midIndex + 1;
		}
		return rightIndex;
	};

	const handleArrow = (e, to) => {
		e.preventDefault();
		changeActive(to);
	};

	const changeActive = (to) => {
		const len = items.length;
		if (to === 'left') {
			if (index.active === 0) {
				setIndex({
					left: len - 2,
					active: len - 1,
					right: 0,
					preActive: len - 1,
					proActive: 0,
				});
			} else if (index.active === 1) {
				setIndex({
					left: len - 1,
					active: 0,
					right: 1,
					preActive: 0,
					proActive: 1,
				});
			} else {
				setIndex({
					left: index.active - 2,
					active: index.active - 1,
					right: index.active,
					preActive: index.active - 1,
					proActive: index.active,
				});
			}
		} else if (to === 'right') {
			if (index.active === len - 1) {
				setIndex({
					left: len - 1,
					active: 0,
					right: 1,
					preActive: 0,
					proActive: len - 1,
				});
			} else if (index.active === len - 2) {
				setIndex({
					left: len - 2,
					active: len - 1,
					right: 0,
					preActive: len - 1,
					proActive: len - 2,
				});
			} else {
				setIndex({
					left: index.active,
					active: index.active + 1,
					right: index.active + 2,
					preActive: index.active + 1,
					proActive: index.active,
				});
			}
		}
	};

	return (
		<div className="Carousel">
			<button
				className="c-arrow arrow-left"
				onClick={(e) => handleArrow(e, 'left')}></button>
			<button
				className="c-arrow arrow-right"
				onClick={(e) => handleArrow(e, 'right')}></button>
			<div className="c-items">
				{items.map((item, i) => {
					if (i === index.active) {
						item.cName = 'active';
					} else if (i === index.right) {
						item.cName = 'active-right';
					} else if (i === index.left) {
						item.cName = 'active-left';
					} else {
						item.cName = '';
					}

					if (i === index.preActive) {
						item.cName = item.cName + ' pre-active';
					} else if (i === index.proActive) {
						item.cName = item.cName + ' pro-active';
					}
					return <CarouselItem key={i} item={item} />;
				})}
			</div>
		</div>
	);
};

export default Carousel;
