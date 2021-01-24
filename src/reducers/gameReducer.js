import { getEvolvedGrid } from "../helpers/getEvolvedGrid";
import { getInitializedGrid } from "../helpers/getInitializedGrid";
import { getRandomGrid } from "../helpers/getRandomGrid";
import { getSwitchedCellGrid } from "../helpers/getSwitchedCellGrid";
import { types } from "../types/types";

const initialConfig = {
    generation: 0,
    speed: 100,
    cellSize: 15,
    rows: 30,
    cols: 50
}

const initialState = {
    ...initialConfig,
    grid: getInitializedGrid( initialConfig.rows, initialConfig.cols )
}

//**************************************************************************
export const gameReducer = ( state = initialState, action ) => {

    switch (action?.type) {

        case types.switchCell:
            return {
                ...state,
                grid: getSwitchedCellGrid( state.grid, action.payload.row, action.payload.col )
            }

        case types.randomizeGrid:
            return {
                ...state,
                grid: getRandomGrid(state.rows, state.cols)
            }

        case types.resetGrid:
            return {
                ...state,
                generation: 0,
                grid: getInitializedGrid(state.rows, state.cols)
            }
            
        case types.gameEvolve:
            return {
                ...state,
                grid: getEvolvedGrid(state.grid, state.rows, state.cols),
                generation: state.generation + 1
            }

        case types.setGridSize:
            return {
                ...state,
                cols: action.payload.cols,
                rows: action.payload.rows,
                grid: getInitializedGrid( action.payload.rows, action.payload.cols )
            }


        default:
            return state;
    }
}

//**************************************************************************
