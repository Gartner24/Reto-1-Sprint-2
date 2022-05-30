import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Banner from '../components/Banner'
import CardPerson from '../components/Cards'

export default class FullBanner extends Component {
  render() {
    return (
      <Container fluid className='p-0 px-lg-5'>
        <Row>
          <Col md={12} lg className='p-0 px-lg-5 d-flex flex-column justify-content-evenly'><Banner /></Col>
          <Col md={12} lg className='p-0 d-flex flex-row flex-wrap'><CardPerson /></Col>
        </Row>
      </Container>
    )
  }
}