import React, { Component } from 'react'
import Navbaritem from '../components/Navbaritem'
import { Col, Container, Row } from 'react-bootstrap'
import FullBanner from './FullBanner'
import { DivBanner, MainDiv } from '../styles/StylesGlobal'
import Content from '../components/Content'

export default class App extends Component {
    render() {
        return (
            <div>
                <DivBanner>
                    <Navbaritem />
                    <FullBanner className='my-5' />
                </DivBanner>
                <MainDiv className='text-center'>
                    <Content />
                </MainDiv>
            </div>
        )
    }
}