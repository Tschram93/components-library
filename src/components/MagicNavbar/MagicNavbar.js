import React from 'react';
import * as BiIcons from 'react-icons/bi';
import * as FaIcons from 'react-icons/fa';
import * as IonIcons from 'react-icons/io';
import * as IonIcons5 from 'react-icons/io5';
import './MagicNavbar.css';

const MagicNavbar = () => {
    const list = document.querySelectorAll('.list');

function activeLink(){
    list.forEach((item) => {
        item.classList.remove('active');
        this.classList.add('active');
    })
} 

list.forEach((item) => item.addEventListener('click', activeLink))

	return (
		<div className='navigation'>
			<ul>
				<li className='list active'>
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
                <div className="indicator"></div>
			</ul>
            <script src="MainNavbarScript.js"></script>
		</div>
	);
};

export default MagicNavbar;
