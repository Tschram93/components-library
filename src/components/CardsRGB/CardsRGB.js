import React from 'react';
import Tilt from 'react-vanilla-tilt';
import './CardsRGB.css';

const CardsRGB = () => {
	return (
		<section>
			<Tilt options={{ scale: 1.1, glare: true, 'max-glare': 0.5 }}>
				<div className='card'>
					<div className='card-image'></div>
					<div className='card-text'>
						<span className='date'>4 days ago</span>
						<h2>Post One</h2>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum,
							ut!
						</p>
					</div>
				</div>
			</Tilt>
			<Tilt options={{ scale: 1.1, glare: true, 'max-glare': 0.5 }}>
				<div class='card'>
					<div class='card-image card2'></div>
					<div class='card-text card2'>
						<span class='date'>1 week ago</span>
						<h2>Post Two</h2>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
					</div>
				</div>
			</Tilt>
			<Tilt options={{ scale: 1.1, glare: true, 'max-glare': 0.5 }}>
				<div class='card'>
					<div class='card-image card3'></div>
					<div class='card-text card3'>
						<span class='date'>3 week ago</span>
						<h2>Post Three</h2>
						<p>
							Lorem ipsum dolor sit amet consect <br /> adipisicing elit.
							Provident, quia?
						</p>
					</div>
				</div>
			</Tilt>
		</section>
	);
};

export default CardsRGB;
