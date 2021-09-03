import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import ImgWelcome from '../../components/ImgWelcome/ImgWelcome';
import Posts from '../../components/Posts/Posts';

import './home.css'

export default function Home() {
    return (
        <div className='Home' id='outer-container'>
            <h1 className='title'>Eureka</h1>
            <h2 className='subtitle'>Para amantes de ciências e tecnologias</h2>

            <div id="page-wrap" className='mobileMenu'>
                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            </div>
            <ImgWelcome />
            <Posts/>
        </div>
    );
};