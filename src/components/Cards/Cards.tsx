import React from 'react'
import Card from '../Card/Card'
import classes from './Cards.module.scss'

const Cards: React.FC = () => {
  return (
    <ul className={classes.cards}>
      <Card />
    </ul>
  )
}

export default Cards
