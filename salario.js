// function findRepeatedAge(students) {
//     let arrayAge = []
//     for(let i in students){
//         arrayAge.push(students.age)
//     }

//     let lista1count = {}

//     arrayAge.map((element) => {
//         if(lista1count[element])  lista1count[element] +=1

//         else lista1count[element] = 1

//     })

//     let lista1Array = Object.entries(lista1count).sort(
//         (elemento1,elemento2)=> {return elemento1[1]-elemento2[1]}
//     )

//     const moda = lista1Array[lista1Array.length-1]

//     return moda
// }

function calcularModa(arr){
    lista1count = {}
    arr.map((element) => {
        if(lista1count[element])  lista1count[element] +=1
    
        else lista1count[element] = 1
        
    })

    lista1Array = Object.entries(lista1count).sort(
        (elemento1,elemento2)=> {return elemento1[1]-elemento2[1]}
    )

    const moda = lista1Array[lista1Array.length-1]

    return parseInt(moda[0])

}

console.log(calcularModa([2,5,3,2,5,6]))