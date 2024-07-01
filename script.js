let studObj1 = {
    id: 1,
    name: 'Nikhil',
    grades: 80,
}
let studObj2 = {
    id: 2,
    name: 'Rohit',
    grades: 90,
}
let studObj3 = {
    id: 3,
    name: 'Danish',
    grades: 85,
}



let studArr = []
function addStudent(newStudent){
    studArr.push(newStudent);
}

function toDelete(deleteStd){
    let newId = deleteStd.id;
    for(let i = 0; i < studentsArr.length; i++){
        if(newId === studentsArr[i].id){;
            studentsArr.splice(i, i)
        }
    }


    return studentsArr;
}

console.log(studArr)
addStudent(studObj1);
addStudent(studObj2)
addStudent(studObj3)
console.log(studentsArr)
toDelete(studObj3);
console.log(studArr);
