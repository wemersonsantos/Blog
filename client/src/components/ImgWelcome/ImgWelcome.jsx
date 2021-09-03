import React from 'react'
import './imgWelcome.css'

export default function ImgWelcome() {
    return (
        <div className='imgWelcome'>
            <div className='img'></div>
            <h1 id='msgTitle' className='msgWelcome'>Dê asas a sua curiosidade</h1>
            <h2 id='msgSubTitle' className='msgWelcome'>Escreva para pessoas com a mesma paixão que a sua!</h2>
            <a href='/write' id='buttonWrite' className='msgWelcome'>Escrever</a>
        </div>
    )
}
