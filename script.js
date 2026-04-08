let courses=[];

function addCourse(){

let name=document.getElementById("courseName").value;
let hours=document.getElementById("hours").value;

if(name==""||hours==""){
alert("Enter all data");
return;
}

courses.push({name,hours});

render();

}

function render(){

let table=document.getElementById("table");

table.innerHTML=`
<tr>
<th>Course</th>
<th>Hours</th>
<th>Actions</th>
</tr>
`;

courses.forEach((c,i)=>{

table.innerHTML+=`
<tr>
<td>${c.name}</td>
<td>${c.hours}</td>

<td>

<button class="edit" onclick="editCourse(${i})">Edit</button>

<button class="delete" onclick="deleteCourse(${i})">Delete</button>

</td>

</tr>
`;

});

}

function deleteCourse(i){

courses.splice(i,1);

render();

}

function editCourse(i){

let name=prompt("Edit name",courses[i].name);
let hours=prompt("Edit hours",courses[i].hours);

courses[i].name=name;
courses[i].hours=hours;

render();

}