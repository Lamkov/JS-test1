var basictable =[
    {age:25, name:"vasya", height:180},
    {age:30, name:"oleg", height:179},
    {age:20, name:"vanya", height:185},
    {age:45, name:"grigorij", height:175}
];

function alpha (){
var table = "<table class='basic_table' border='1|1'>";
for (var i = 0; i < basictable.length; i++) {
    table +="<tr>";
    table +="<td><input name='checker' type='checkbox'/></td>";
    table +="<td>"+basictable[i]["age"]+"</td>";
    table +="<td>"+basictable[i]["name"]+"</td>";
    table +="<td>"+basictable[i]["height"]+"</td>";

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

    basictable.push(Person);
    alpha();

}
function reset() {
    document.getElementById("age").value = "";
    document.getElementById("name").value = "";
    document.getElementById("height").value = "";
}
function myFunction() {
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
    document.getElementById("demo").innerHTML = text;
}
function Remove(){
    var checked = document.getElementById("myCheck").checked.value;
    basictable.splice(checked, 1);
}
function check() {
    var tab = document.getElementsByClassName("basic_table");
    var length = tab.getElementsByTagName('input').checked;
    if(length == true) {
    alert ("The checkBox is checked");
    } else {
        alert ("The checkBox is unchecked");
        document.getElementById("demo").innerHTML = length;
    }
}