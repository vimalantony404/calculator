
function clear1(value)
{
    document.getElementById('tx1').value = "";
}
function num(value)
{
    document.getElementById('tx1').value += value;
}
function opts(value)
{
    document.getElementById('tx1').value += value;
}
function delet() 
{
var input = document.getElementById("tx1");
input.value = input.value.substring(0, input.value.length - 1);
}
function result(value)
{
    let p = document.getElementById('tx1').value;
    let q = eval(p);
    document.getElementById('tx1').value = q;
}