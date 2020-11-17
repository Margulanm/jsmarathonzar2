const firstRow="мама мыла раму";
const secondRow="собака друг человека";
let count1=0;
let count2=0;
function getRow(firstRow,secondRow){
    for(let i=0;i<firstRow.length;i++){
        if(firstRow[i]==="а"){
        count1++;
        }
    }
    for(let k=0;k<secondRow.length;k++){
        if(secondRow[k]==="а"){
        count2++;
        }
    }
    if(count1>count2)
        return firstRow;
    
    else
        return secondRow;
    
}

console.log(getRow(firstRow, secondRow));



