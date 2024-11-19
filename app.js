const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];
// console.log(data)
let student1 = ['Jack', 24];
let student2 = ['Sara', 23];
let student3 = ['Peter', 24];

let studs = [student1,student2,student3]
// console.log(studs)
// console.log(studs[0])
// console.log(studs[0][0])
student4 = ['sam',30]
studs.push(student4)
studs[1][2] = 'cool'
// console.log(studs)
studs[0].push("ready")
console.log(studs)
console.log('************************')
// for(let i =0 ;i<studs.length;i++){

//     for(let j = 0;j<studs[i].length;j++){

//         console.log(studs[i][j])
//     }
//     console.log('-----------')
// }

//read over 2 array  table like - mutlidientional array
studs.forEach((row)=>{

    row.forEach((cell)=>{

        console.log(cell)
        
    })
})