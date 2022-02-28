import React from 'react';
import './FlipCard.css';

const FlipCard = () => {
	return (
		<section>
			<div className='title'>
				<h1>Flip Card</h1>
				<p>Flip card placeholder text.</p>
			</div>
			<div className='flip-card'>
				<div className='flip-card-inner'>
					<div className='flip-card-front'>
                        <img src={require('../../assets/pexels-suzy-hazelwood-1629236-min.jpg')} alt="astrophotography of distant stars" />
                    </div>
					<div className='flip-card-back'></div>
				</div>
			</div>
		</section>
	);
};

export default FlipCard;
