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