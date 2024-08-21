// function print(){
//     for (var i=0; i<23; i++){
//         // console.log(Math.pow(i,2))
//         console.log(i*2)
//     }
// }
// print()

function check_var(){
    for(var i=0; i<12; i++){
        console.log(i)
    }
    console.log(i)
}
function check_let(){
    for(let i=0; i<12; i++){
        console.log(i)
    }
    // console.log(i) This will not run because this out of the braces in which let was used because let is braces scoped. 
}

// check_var()
check_let()