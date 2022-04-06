const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]


function superbowlWin(array){
    if(array.find(checkWin)){
        return array.find(checkWin).year
    }
}
function checkWin(record){
    return record.result === 'W'
}

superbowlWin(checkWin);

// function superbowlWin(object) {
//     let result = object.find(checkWin)
//     debugger
//     if(result){
//         return result.year
//     }else {
//         return undefined
//     }
// }


// let checkWin = record.find(records => records.result ==='W');

function checkWin(record){
    return record.result === 'W'
}

superbowlWin(checkWin);


// record.find(superbowlWin);

//   function superbowlWin(record){
//       let winYear = undefined;
//       for(let item of record) {
//           if (item.result === 'W' && item.year === '2015'){
//           winYear = item.year
//           return winYear;
//           }
//       }
// //   }