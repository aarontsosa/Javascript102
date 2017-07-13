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

// function printSquare(size){
//     for(i=0; i < size; i++){
//         star = ""
//         for(j=0; j < size; j++)
//             star += "*"
//         console.log(i + star);
//     }
// }

// function cipher(string, offset){
//     var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//     var cesar = string.split("");
//     var end = [ ]
//     var decipher = 0
//     var ogplace = 0
//     while (decipher < cesar.length){
//         if (offset < 26){
//             for (i = 0; i < cesar.length; i++){
//                 text1 = cesar[i]
//                 decipher += 1
//                 ogplace = 0
//                 for (h = 0; h < alphabet.length; h++){
//                     text2 = alphabet[h]
//                     if (text1 == " "){
//                         end.push(" ")
//                         break
//                     } else if (text1 != text2){
//                         ogplace += 1
//                     } else { 
//                         ogplace += offset;
//                         if (ogplace < 26){
//                             end.push(alphabet[ogplace])
//                             break
//                         } else {
//                             ogplace = ogplace - 25
//                             end.push(alphabet[ogplace])
//                             break
//                         }
//                     }
//                 }
//             }
//         } else {
//             offset = offset - 25
//         }
//     }
//     return end.join("");
// }

////////////Sum of Numbers /////////////
// function sumNumbers(num){
//     var sum = 0;
//     for(i=0; i < num.length; i++){
//         sum += num[i];
//     }
//     return sum;
// }

//////////Just the positives///////////
// function positiveNumbers(num){
//     var pos = [ ]
//     for(i=0; i < num.length; i++)
//         if (num[i] >= 0){
//             pos.push(num[i])
//         }
//     return pos
// }

/////// Matrix Addition //////////
// function matrixAdd(num, num2){
//     end = [[],[]]
//     // for(x=0; x < num.length; x++)
//     //     end.push([0,0])
//     for(i=0; i < num.length; i++){
//         for(j=0; j < num[0].length; j++)
//             end[i].push (num[i][j] + num2[i][j]);
//     }
// return end;
// }

///////// Matrix Multiplication //////////
// function matrixMutiply(num, num2){
//     end = [[],[]]
//     // for(x=0; x < num.length; x++)
//     //     end.push([0,0])
//     for(i=0; i < num.length; i++){
//         for(j=0; j < num2[0].length; j++){
//             var sum = 0
//             for(k=0; k < num[0].length; k++){
//                 sum += num[i][k] * num2[k][j]
//             }
//             end[i].push(sum);
//         }
//     }
// return end;
// }

///////////tic-tac-toe///////////NOT FINISHED!!!!
function ticTacToe(G){
    var winner = 0
    var winCond = {
        "XXX": 'X',
        "OOO": 'O',
    }
    fwdslash = ""
    bkslash = ""
    var y = 0;
    for(i=0; i < G.length; i++){
        var row = ""
        for(j=0; j < G.length; j++){
            row += G[i][j]
        }
        if(row in winCond){
            winner = winCond[row]
        }
    }
    for(k=0; k < G.length; k++){
        var column = ""
        for(l=0; l < G.length; l++){
            column += G[l][k]
        }
        if(column in winCond){
            winner = winCond[column]
        }
    }
    for(a=0; a < G.length; a++){
        fwdslash += G[a][a]
    }
    if(fwdslash in winCond){
        winner = winCond[fwdslash]
    }
    for(x=2; x >= 0; x--){
        bkslash += G[x][y];
        y += 1
        if(bkslash in winCond){
            winner = winCond[bkslash]
        } 
    }
    if (winner === 0){
        winner = null;
    }
    return winner
}

//////////Tic Tac Toe////////////
// function rockPaperScissors(player1, player2){
//     var results = 0
//     var rules = {
//         'rock': 1,
//         'paper': 2,
//         'scissors': 3,
//     }
//     var winner = rules[player1] - rules[player2]
//     if ((winner === 1) || (winner === -2)){
//         results = "Player 1 Wins"
//     } else if ((winner === -1) || (winner === 2)) {
//         results = "Player 2 Wins"
//     } else {
//         results = "Draw"
//     }
//     return results
// }