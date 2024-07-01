let studObj1 = {
    id: 1,
    name: 'Smith',
    grades: 80,
}
let studObj2 = {
    id: 2,
    name: 'John',
    grades: 90,
}
let studObj3 = {
    id: 3,
    name: 'Natasha',
    grades: 85,
}



let studArr = []
function addStudent(newStudent){
    studArr.push(newStudent);
}

function toDelete(deleteStd){
    let newId = deleteStd.id;
    for(let i = 0; i < studArr.length; i++){
        if(newId === studArr[i].id){;
            studArr.splice(i, i)
        }
    }


    return studArr;
}

console.log(studArr)
addStudent(studObj1);
addStudent(studObj2)
addStudent(studObj3)
console.log(studArr)
toDelete(studObj3);
console.log(studArr);
