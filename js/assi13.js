var mathang=[
    {
        ten:"Cà chua",
        anh:"photo/duahau.jpg",
        gia:1,
        sao:5,
    },
    {
        ten:"Táo",
        anh:"photo/duahau.jpg",
        gia:2,
        sao:4,
    },
    {
        ten:"Bơ",
        anh:"photo/duahau.jpg",
        gia:3,
        sao:3,
    },
    {
        ten:"Cam",
        anh:"photo/duahau.jpg",
        gia:4,
        sao:2,
    },
    {
        ten:"Dưa Hấu",
        anh:"photo/duahau.jpg",
        gia:5,
        sao:1,
    },
    {
        ten:"vu sữa",
        anh:"photo/duahau.jpg",
        gia:10,
        sao:5,
    }
]
function sanpham(){
    var q="";
    for(var i=0;i<mathang.length;i++){
        q+="<div class=\"col-md-4\">\n" +
            "                <div class=\"all\">\n" +
            "                    <div class=\"new\">new</div>\n" +
            "                    <div class=\"traitim\"><i class=\"fas fa-heart\"></i></div>\n" +
            "\n" +
            "                    <img src=\""+mathang[i].anh+"\">\n" +
            "                    <div class=\"ten\">\n" +
            "                        "+mathang[i].ten+"\n" +
            "                    </div>\n" +
            "                    <span class=\"a\">$"+mathang[i].gia+"</span>\n" +
            "                    <span class=\"b\">$30.00</span>\n" +
            "                    <span class=\"sao\">\n" +
            "                        <div class=\"saosang\">\n" +
            "                            <div class=\"saotoi\"style=\"width:"+(mathang[i].sao/5*100)+"%\"></div>\n" +
            "                        </div>\n" +
            "                    </span>\n" +
            "                    <div class=\"giohang\">Add</div>\n" +
            "                </div>\n" +
            "            </div>"
    }
    return q;
}
var h=document.getElementById("sanpham");
h.innerHTML=sanpham();