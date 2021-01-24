import React from 'react'
import { useSelector } from 'react-redux'

import { Contact } from './components/Contact';
import { Grid } from './components/Grid';

import './styles/styles.css'
//**************************************************************************

export const App = () => {
  
  const { generation } = useSelector(state => state.game);

  return (
    <>
      <div className="container text-center">
        <h1 className="mt-5">
          The Game of life&nbsp;
          <a 
            className="fa fa-info-circle" 
            id="info"
            href="https://en.wikipedia.org/wiki/The_Game_of_Life" 
            target="_blank"
            rel="noreferrer"
            aria-hidden="true"> </a>
        </h1>
        <hr id="separator" />

        <Grid />


        <h2 className="mt-5">Generations: { generation }</h2>
      </div>

      <Contact />
    </>
  )
}
