import { types } from "../types/types"

export const gameEvolve = () => {
    return {
        type: types.gameEvolve
    }
}

export const switchCell = ( row, col ) => {
    return {
        type: types.switchCell,
        payload: {
            row, col
        }
    }
}

export const randomizeGrid = () => {
    return {
        type: types.randomizeGrid
    }
} 

export const resetGrid = () => {
    return {
        type: types.resetGrid
    }
}

export const setGridSize = ( cols, rows ) => {
    return {
        type: types.setGridSize,
        payload: {
            cols,
            rows
        }
    }
}