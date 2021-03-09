function sublist(l) {
    /*Generates all possible sublists of a given list.
    * Code ignores sublists containing originally non-adjacent elements at adjacent indexes.
    * Output is an array with nested arrays. 
    */

    let finalList = [[]];
    
    // Outer loop initiated to iterate over all elements in given list
    for (let i = 0; i<(l.length); i++){
        // Inner loop initiated with fixed offset from outer loop, 
        // Sublists generated for each element by incrementing range of innerloop)
        for (let j = i+1; j < (l.length + 1); j++){
            let innerLoop = l.slice(i,j);
            finalList.push(innerLoop);
        } 
    }
    return finalList;
}