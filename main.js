const firstRow="мама мыла раму";
const secondRow="мама мыла раму";
// let count1=0;
// let count2=0;
function getRow(firstRow,secondRow){
    let firstResult=countedChar(firstRow,'а');
    let secondResult=countedChar(secondRow,'а');
    
    if(firstResult===secondResult){
        return "here is the same number of letter"+countedChar.char;
    }
    return firstResult>secondResult?firstRow:secondRow;
    // for(let i=0;i<firstRow.length;i++){
    //     if(firstRow[i]==="а"){//  firstRow.charAt(i)==='a' <- can do like that
    //     count1++;
    //     }
    // }
    // for(let k=0;k<secondRow.length;k++){
    //     if(secondRow[k]==="а"){
    //     count2++;
    //     }
    // }

    // if(count1>count2)
    //     return firstRow;
    
    // else
    //     return secondRow;
    
}

function countedChar(row, char){
    let counted=0;

    for(let i=0;i<row.length;i++){
        if(row.charAt(1)===char){//  firstRow.charAt(i)==='a' <- can do like that
        counted++;
        }

        return counted;
    }

}



console.log(getRow(firstRow, secondRow));



