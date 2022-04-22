import React from 'react';
import * as BiIcons from 'react-icons/bi';
import * as FaIcons from 'react-icons/fa';
import * as IonIcons from 'react-icons/io';
import * as IonIcons5 from 'react-icons/io5';
import './MagicNavbar.css';

const MagicNavbar = () => {
	return (
		<div className='navigation'>
			<ul>
				<li className='list'>
					<a href='#'>
						<span className='icon'>
							<IonIcons.IoIosHome />
						</span>
						<span className='text'>Home</span>
					</a>
				</li>
				<li className='list'>
					<a href='#'>
						<span className='icon'>
							<FaIcons.FaUser />
						</span>
						<span className='text'>Profile</span>
					</a>
				</li>
				<li className='list'>
					<a href='#'>
						<span className='icon'>
							<BiIcons.BiEnvelope />
						</span>
						<span className='text'>Messages</span>
					</a>
				</li>
				<li className='list'>
					<a href='#'>
						<span className='icon'>
							
							<IonIcons5.IoCamera />
						</span>
						<span className='text'>Photos</span>
					</a>
				</li>
				<li className='list'>
					<a href='#'>
						<span className='icon'>
							<IonIcons5.IoSettingsOutline />
						</span>
						<span className='text'>Settings</span>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default MagicNavbar;
