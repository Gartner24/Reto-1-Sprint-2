import React, { Component } from 'react'
import { IconsImage, InfoCardStyled } from '../styles/StylesGlobal'

export default class InfoCard extends Component {
    render() {
        return (
            <>
                {['card1', 'card2', 'card3', 'card4'].map((expand) => (
                    <InfoCardStyled className='m-1 flex-column justify-content-around' key={expand}>
                        <p>Head of marketing for electronic payment services</p>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='d-flex ms-3'>
                                <IconsImage className=' me-1' src='https://res.cloudinary.com/gartners/image/upload/v1653877831/Reto-1-Sprint-2/ubicationIcon_la9ccs.svg' alt='logo' />
                                <h6 className='m-0 me-3'>FLorida</h6>
                            </div>
                            <div className='d-flex'>
                                <IconsImage className=' me-1' src='https://res.cloudinary.com/gartners/image/upload/v1653877831/Reto-1-Sprint-2/workIcon_e4fzyt.svg' alt='logo' />
                                <h6 className='m-0 me-3'>Marketer</h6>
                            </div>
                        </div>
                    </InfoCardStyled>
                ))}
            </>
        )
    }
}
