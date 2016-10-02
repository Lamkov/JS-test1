var usersArray =[
    {age:25, name:"vasya", height:180},
    {age:30, name:"oleg", height:179},
    {age:20, name:"vanya", height:185},
    {age:45, name:"grigorij", height:175}
];

function drawTable (){	
	var table = "<table class='table table-striped'>";
	table += "<thead>";
	table += "<tr>";
	table +="<th></th>";
	table +="<th><a onclick='sortByAge(event)' href='#'>Возраст</a></th>";
	table +="<th><a onclick='sortByName(event)' href='#'>Имя</a></th>";
	table +="<th><a onclick='sortByHeight(event)' href='#'>Рост</a></th>";
	table +="</tr>";
	table +="</thead>";

for (var i = 0; i < usersArray.length; i++) {
    table +="<tr>";
    table +="<td><input name='checker' class='checker' type='checkbox'/></td>";
    table +="<td>"+usersArray[i]["age"]+"</td>";
    table +="<td>"+usersArray[i]["name"]+"</td>";
    table +="<td>"+usersArray[i]["height"]+"</td>";
    table +="</tr>";

}
table +="</table>";
document.getElementById("tableB").innerHTML = table;
}
function add(){
    var Person = {};
    Person.age = document.getElementById("age").value;
    Person.name = document.getElementById("name").value;
    Person.height = document.getElementById("height").value;

    usersArray.push(Person);
    drawTable();

}
function reset() {
    document.getElementById("age").value = "";
    document.getElementById("name").value = "";
    document.getElementById("height").value = "";
}
function validateForm() {
    var x, y, z, text;
    x = document.getElementById("age").value;
    y = document.getElementById("name").value;
    z = document.getElementById("height").value;
    // If x is Not a Number or less than one or greater than 10
    if ((isNaN(x) || x < 1 || x > 99)&&(typeof y === 'string')&&(isNaN(z) || z > 100 || z < 230)) {
        text = "Input not valid";
        reset();
    } else if ((x!=='')&&(y!=='')&&(z!=='')) {
        text = "Input OK";
        add();
        reset();
    } else {
        text = "Input not valid";
        reset();
    }
    document.getElementById("validationMessage").innerHTML = text;
}

function deleteSelectedRows() {
    var inputs = document.getElementsByClassName("checker");
		
    for (var i = usersArray.length - 1; i >= 0; i--) {
        if(inputs[i].checked) {
            usersArray.splice(i, 1);
        }
    }
	
    drawTable();
}

function copySelectedRows(){
    var inputs = document.getElementsByClassName("checker");
	
	for (var i = usersArray.length - 1; i >= 0; i--) {
        if(inputs[i].checked) {
            usersArray.splice(i, 0, usersArray[i]);
        }
    }
	
    /*for (i=0; i<inputs.length; i++) {
        if(inputs[i].checked) {
            usersArray.push(usersArray[index]);
        }
    }*/
    drawTable();
}

function sortByAge(event) {
	event.preventDefault();	
	usersArray.sort(function(a, b) {
		return (a.age - b.age);
	});
	//usersArray.reverse();	
	drawTable();
}

function compareObjectsByName (a, b) {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
}

function sortByName(event) {
	var usersArrayClone = [];
	
	event.preventDefault();
	
	for (var i in usersArray) {
	  usersArrayClone.push(usersArray[i]);
	}
	
	usersArrayClone.sort(compareObjectsByName);
	usersArray = usersArrayClone;
	drawTable();
}

function sortByHeight(event) {
	event.preventDefault();	
	usersArray.sort(function(a, b) {
		return (a.height - b.height);
	});
	drawTable();
}









