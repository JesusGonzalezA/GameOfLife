import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import { gameEvolve, randomizeGrid, resetGrid, setGridSize } from '../actions/game';

import '../styles/controllers.css'

//**************************************************************************
export const Controllers = () => {

    const dispatch = useDispatch();
    const { speed } = useSelector(state => state.game);

    const [intervalId, setIntervalId] = useState(null);

    const handlePlay = () => {
        if (intervalId !== null) return;

        setIntervalId(setInterval(play, speed))
    }

    const handleNextGeneration = () => {
        play();
    }

    
    const handlePause = () => {
        if (intervalId === null) return;

        clearInterval(intervalId);
        setIntervalId(null);
    }

    const play = () => {
        dispatch( gameEvolve() );
    }
    
    const handleRandomize = () => {
        dispatch( randomizeGrid() );
        pause();
    }

    const handleReset = () => {
        dispatch( resetGrid() );
        pause();
    }

    const pause = () => {
        handlePause();
    }    

    const handleGridSize = ( key, event ) => {
        event.preventDefault();

        const aspect = key.split('x');

        handleReset();
        dispatch( setGridSize( Number(aspect[0]), Number(aspect[1])) );
    }

    return (
        <div id="controllers-container">
            <Button 
                onClick={ handlePlay }
                variant="success"
            >
                Play <i className="fas fa-play"></i>
            </Button>

            <Button 
                onClick={ handlePause }
                variant="danger"
                id="pause-button"
            >
                Pause <i className="fas fa-pause"></i>
            </Button>

            <Button 
                onClick={ handleNextGeneration }
                variant="success"
            >
                Next Generation <i className="fas fa-angle-double-right"></i>
            </Button>
            

            <Button 
                onClick={ handleRandomize }
                variant="info"
            >
                Seed <i className="fas fa-seedling"></i>
            </Button>

            <Button 
                onClick={ handleReset }
                variant="warning"
            >
                Reset
            </Button>

            <DropdownButton variant="dark" title="Grid size" onSelect={ handleGridSize }>
                <Dropdown.Item eventKey="20x10">20x10</Dropdown.Item>
                <Dropdown.Item eventKey="50x30">50x30</Dropdown.Item>
                <Dropdown.Item eventKey="60x40">60x40</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}