var basictable =[
    [25, "vasya", 180],
    [30, "oleg", 179],
    [20, "vanya", 185],
    [45, "grigorij", 175]
];

function alpha (){
var tableb = "<table class='basic_table' border='1|1'>";
for (var i = 0; i < basictable.length; i++) {
    tableb +="<tr>";
    tableb +="<td>"+basictable[i][0]+"</td>";
    tableb +="<td>"+basictable[i][1]+"</td>";
    tableb +="<td>"+basictable[i][2]+"</td>";

    tableb +="</tr>";

}
tableb +="</table>";
document.getElementById("tableB").innerHTML = tableb;
}