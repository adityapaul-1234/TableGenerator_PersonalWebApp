function print(){
    var num=document.getElementById("input").value;
    var array=[];
    for (var i=1; i<=10; i++){
        var temp= num + " x " + i + " = " + (num*i);
        array.push(temp);
    }
    var final_output=array.join("<br>");
    document.getElementById("output").innerHTML=final_output;
}

function reset(){
    document.getElementById("output").innerHTML=" ";
}