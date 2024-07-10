var num=Math.floor(Math.random()*101);
var count=0;
console.log(num);

function findnum()
{
    var guessed_num=parseInt(document.getElementById("n1").value);
    count+=1;
    if(guessed_num==num)
    {
        document.getElementById("result").textContent="Avalotha Neega Kandupudichitinga!!!";
    }   
    else if(guessed_num>num)
    {
        document.getElementById("result").textContent="Konjam Keela...";
    }
    else{
        document.getElementById("result").textContent="Enu Mella...";
    }
    document.getElementById("count").textContent=count;
}