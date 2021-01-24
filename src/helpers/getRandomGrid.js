export const getRandomGrid = ( rows, cols ) => {

    const randomMatrix = Array.from({length: rows}, () => 
        Array.from({length: cols}, () => ( Math.random() < 0.25 ) )
    );
    
    return randomMatrix;
}
