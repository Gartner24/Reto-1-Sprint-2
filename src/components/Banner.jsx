import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { ButtonGreen, SubInfo, Title } from '../styles/StylesGlobal'

export default class Banner extends Component {
    render() {
        return (
            <>
                <Title className='m-0'>We support your challenge in new areas.</Title>
                <SubInfo className='m-0'>Our highly qualified headhunters, who have passed a rigorous screening process, will introduce you to your new career opportunity.</SubInfo>
                <div>
                    <ButtonGreen variant="success" className='me-2'>Try it Free</ButtonGreen>
                    <Button variant="outline-success" className='ms-2'>Explore</Button>
                </div>
            </>
        )
    }
}
