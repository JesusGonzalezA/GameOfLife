export const getGridClone = ( grid ) => {
    return JSON.parse(JSON.stringify( JSON.parse(JSON.stringify( grid )) ));
}