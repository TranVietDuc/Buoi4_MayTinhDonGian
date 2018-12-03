var BtnValue = [["1","2","3","+"],["4","5","6","-"],["7","8","9","x"],["C","0","=","/"]];
var toCaculate = ["0"];
var i = 0; 
// Ham tao cac nut tren Frame caculator
function creatButton(){
var sout = "<table id='table'>";
for(let i=0; i<4 ;i++)
{
    sout += "<tr class='row'>";
    for(var j=0; j<4 ; j++)
    {
     sout += "<td> <button class='btn' onclick='pushedBtn("+ BtnValue[i][j]+""+")'>"+ BtnValue[i][j]+"</button>" + "<td>";
    }
    sout += "<tr>";
}
sout += "</table>";
return sout;
}


// Ham phep cong :

//Su li khi bam phim
function pushedBtn(Value)
{ 
   console.log(Value);
switch(Value)
{
case 0:    
case 1:
case 2:
case 3:
case 4: 
case 5: 
case 6: 
case 7: 
case 8: 
case 9: 
    document.getElementById("screen").value += Value;
    toCaculate[i] += Value +"";
    console.log(toCaculate[i]);
    break;
case "+" :
case "-" :
case "x" :
case "/" :
    if(toCaculate[i] !="sum"&&toCaculate[i] !="sub"&&toCaculate[i] !="mul"&&toCaculate[i] !="div" )
    {
    document.getElementById("screen").value += Value;  
    i++;
    toCaculate[i] = Value;
    console.log(toCaculate[i]);
    }
}
}
document.getElementById("btnFrame").innerHTML = creatButton();

