import React, { Component } from 'react'
import { AgentImage, CardParagraph, EditedCard } from '../styles/StylesGlobal'

export default class CardPerson extends Component {
  render() {
    return (
      <>
        {['card1','card2','card3','card4','card5', 'card6'].map((expand) => (
          <EditedCard className='m-1 text-center d-flex flex-column justify-content-around align-items-center' key={expand}>
            <AgentImage src='https://res.cloudinary.com/gartners/image/upload/v1653885414/Reto-1-Sprint-2/agentplus_yomced.svg' alt='logo' />
            <h6>Felicity Belle Amis</h6>
            <CardParagraph>Work Joe</CardParagraph>
            <CardParagraph>Leave it to us to change jobs for designers!</CardParagraph>
          </EditedCard>
        ))}
      </>
    )
  }
}
