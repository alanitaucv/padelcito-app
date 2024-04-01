export const organizarPartidos = (couples) => {
        
    const justIds = couples.map((x) => x.id);

    const sizeGroups = justIds.length/2;
    const sizeTeams = justIds.length;
    const groupTeamsSize = sizeGroups;
    
    let group1 = justIds.slice(0, sizeGroups)
    let group2 = justIds.slice( sizeGroups, sizeTeams)
    
    let rounds = [];
    rounds[0] = [group1+ "," + group2];

    //Algoritmo de arreglos circulares dejando el primer elemento del primer arreglo fijo        
    for (let r = 1; r < sizeTeams - 1; r++){
        const lastElement = group1[groupTeamsSize - 1];
        const firtsElementG2 = group2[0];

        for (let i = 0; i < groupTeamsSize-1; i++){
            if (i!=0) group1[i+1] = group1[i];
        }
        group1[1] = firtsElementG2;

        for (let j = 0; j < groupTeamsSize - 1; j++) {
            group2[j] = group2[j+1];
        }
        group2[groupTeamsSize-1] = lastElement;
        rounds[r] = [group1+ "," + group2];
    }
    
    return rounds;
}