
/**
 * Algoritmo circular de todos contra todos, solo funciona para equipos pares
 * @param {*} couples 
 * @returns 
 */
export const organizarPartidos = (couples) => {
        
    const justIds = couples.map((x) => x.id);

    const sizeGroups = justIds.length/2;
    const sizeTeams = justIds.length;
    const groupTeamsSize = sizeGroups;
    
    let group1 = justIds.slice(0, sizeGroups)
    let group2 = justIds.slice( sizeGroups, sizeTeams)
    
    let rounds = (sizeTeams - 1 <= 0) ? [] : new Array(sizeTeams - 1);
    rounds[0] = [group1+ "," + group2];

    //Algoritmo de arreglos circulares dejando el primer elemento del primer arreglo fijo        
    for (let r = 1; r < sizeTeams - 1; r++){
        const lastElement = group1[groupTeamsSize - 1];
        const firtsElementG2 = group2[0];

        //mueve los elementos de izquierda a derecha
        for (let i = 0; i < groupTeamsSize-1; i++){
            if (i!=0) group1[i+1] = group1[i];
        }
        group1[1] = firtsElementG2;

        //mueve los elementos de derecha a izquierda
        for (let j = 0; j < groupTeamsSize - 1; j++) {
            group2[j] = group2[j+1];
        }
        group2[groupTeamsSize-1] = lastElement;
        rounds[r] = [group1+ "," + group2];
    }
    return partidos(couples, rounds);
    //return rounds;
}

/**
 * Calcula los partidos por ronda y en que cancha va cada 1
 * @param {*} couples 
 * @param {*} rounds 
 */
export const partidos = (couples, rounds) => {
    const couplesSize = couples.length;
    const numCourts = couplesSize / 2;
    let matches = [];

    for(let i=0; i<rounds.length; i++){
        let court = 0;
        const combinatoria = (rounds[i][0]).split(',');
        matches[i] = new Array(numCourts);

        for (let c = 0; c<couplesSize; c=c+2){
            const firtsCoupleNames = couples.find(couple => couple.id === combinatoria[c % couplesSize]);
            const secondCoupleNames = couples.find(couple => couple.id === combinatoria[c % couplesSize + 1]);

            matches[i][court]= [firtsCoupleNames, secondCoupleNames];
            court++;
        }
    }
   // console.log("matches ", matches);
    return matches;
}