import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

import Bubbles from './Bubbles';
import ColorList from './ColorList';

const BubblePage = () => {
	const [ colorList, setColorList ] = useState([]);

	// fetch your colors data from the server when the component mounts
	// set that data to the colorList state property

	// initial render
	useEffect(
		() => {
			axiosWithAuth()
				.get('http://localhost:5000/api/colors')
				.then((res) => {
					setColorList(res.data);
				})
				.catch((err) => console.log(err));
		},
		[ setColorList ]
	);

	return (
		<div>
			<h1>hello</h1>
			<ColorList colors={colorList} updateColors={setColorList} />
			<Bubbles colors={colorList} />
		</div>
	);
};

export default BubblePage;
