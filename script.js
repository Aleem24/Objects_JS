let student = {
    name : "Aleem",
    age : 10,
    grade : 4,
};


 let obj1 = `Hello I am ${student.name} and I read in grade ${student["grade"]}.`;

document.getElementById("r1").innerHTML = obj1;