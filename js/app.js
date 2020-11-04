

var colors=["orange","red","green"];
var i=0;
function click1(e){
    var box=document.getElementById("box")
    i++;
    box.style.backgroundColor=colors[i%6];
}
function hover1(e){
    //var box=document.getElementById("box");
    e.style.backgroundColor="black";
}
function hover2(e){
    //var box=document.getElementById("box");
    e.style.backgroundColor="pink";
}


function mau1(e){
    e.style.backgroundColor="back";
}







function key1(e){
    var v=e.value;
    console.log(v);
}
function key2(e){
    var v=e.value;
    console.log(v);
    var k=event.keyCode;
    if(k==13){
        console.log(v);
    }
    colors.log(k);
}
function key3(e){
    var v=e.value;
    console.log(v);
}
function cop1(e){
    colors.log("copy")
}
