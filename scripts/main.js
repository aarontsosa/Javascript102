// function printNumbers(start, finish){
//     while(start <= finish){
//         console.log(start++)
//     }
//     }

// function printNumbers(start, finish){
//     for(i=start; i <= finish; i++) {
//         console.log(i)
//     }
// }

function printSquare(size){
    for(i=0; i < size; i++){
        star = ""
        for(j=0; j < size; j++)
            star += "*"
        console.log(i + star);
    }

}