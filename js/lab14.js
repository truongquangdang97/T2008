function item(products){
    var I_html ="";
    for(var i=0;i<products.length;i++){
        I_html+="<div class=\"B col-md-4\">\n" +
            "            <h4><b>"+products[i].name+"</b></h4>\n" +
            "            <img src=\""+products[i].image+"\"/>\n" +
            "            <span>$"+products[i].price+"</span>\n" +
            "        </div>"
    }
    return  I_html;
}

function loaddata(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function (){
        if (this.readyState == 4 && this.status == 200){
            var thai =this.responseText;
            thai=JSON.parse(thai);
            var products=thai.data.foods;
            var grid= document.getElementById("mathang");
            grid.innerHTML=item(products);
        }
    }
    xhttp.open("GET","https://foodgroup.herokuapp.com/api/category/3");
    xhttp.send();
}
loaddata()