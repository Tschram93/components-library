import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

export const sidebarData = [
    {
        cName: 'nav-text',
        icon: <AiIcons.AiFillHome />,
        path: '/',
        title: 'Home'
    },
    {
        cName: 'nav-text',
        icon: <IoIcons.IoIosPaper />,
        path: '/reports',
        title: 'Reports'
    },
    {
        cName: 'nav-text',
        icon: <FaIcons.FaCartPlus />,
        path: '/products',
        title: 'Products'
    },
    {
        cName: 'nav-text',
        icon: <IoIcons.IoMdPeople />,
        path: '/team',
        title: 'Team'
    },
    {
        cName: 'nav-text',
        icon: <FaIcons.FaEnvelopeOpenText />,
        path: '/messages',
        title: 'Messages'
    },
    {
        cName: 'nav-text',
        icon: <IoIcons.IoMdHelpCircle />,
        path: '/support',
        title: 'Support'
    }
]