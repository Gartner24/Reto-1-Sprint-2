import React, { Component } from 'react'
import { Button, Form, Image } from 'react-bootstrap'
import { SearchInput } from '../styles/StylesGlobal'
import InfoCard from './InfoCard'

export default class Content extends Component {
    render() {
        return (
            <>
                <div className='d-flex'>
                    <p className='mx-3' style={{width: '160px'}}>Trusted by the world's leading companies</p>
                    <Image className='mx-3 px-3' src='https://res.cloudinary.com/gartners/image/upload/v1653813059/Reto-1-Sprint-2/HAREE_duyowm.svg' alt='logo' />
                    <Image className='mx-3 px-3' src='https://res.cloudinary.com/gartners/image/upload/v1653858864/Reto-1-Sprint-2/JOBQO_hqofkk.svg' alt='logo' />
                    <Image className='mx-3 px-3' src='https://res.cloudinary.com/gartners/image/upload/v1653813059/Reto-1-Sprint-2/logo_perman_ywwvhw.svg' alt='logo' />
                    <Image className='mx-3 px-3' src='https://res.cloudinary.com/gartners/image/upload/v1653813059/Reto-1-Sprint-2/logo_jobona_ryss2n.svg' alt='logo' />
                    <Image className='mx-3 px-3' src='https://res.cloudinary.com/gartners/image/upload/v1653813059/Reto-1-Sprint-2/logo_workctrl_avn9ax.svg' alt='logo' />
                </div>
                <div >
                    <h2>Search for your area of interest</h2>
                    <p>Please enter your desired industry, job title, and skills</p>
                    <Form>
                        <SearchInput type='text' placeholder='Enter your desired industry' />
                        <Button className='mx-3' variant='dark'>Search</Button>
                    </Form>
                </div>
                <div className='d-flex flex-wrap my-5'>
                    <InfoCard />
                </div>
            </>
        )
    }
}
