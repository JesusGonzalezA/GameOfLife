export const getInitializedGrid = (rows, cols) => {
    return Array(rows).fill().map( () => (Array(cols).fill(false)) )
}