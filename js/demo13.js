var mathang=[
    {
        ten:"quan ao",
        anh:"photo/zara1.webp",
        gia:1,
        sao:4,
    },
    {
        ten:"giay dep",
        anh:"photo/zara2.webp",
        gia:1,
        sao:2,
    },
    {
        ten:"nha cua",
        anh:"photo/zara3.webp",
        gia:1,
        sao:2,
    },
    {
        ten:"quan ao",
        anh:"photo/zara3.webp",
        gia:1,
        sao:2,
    },
    {
        ten:"quan ao",
        anh:"photo/zara2.webp",
        gia:1,
        sao:2,
    },
    {
        ten:"quan ao",
        anh:"photo/zara1.webp",
        gia:1,
        sao:2,
    },
]
function sanpham(){
    var q="";
    for (var i=0;i<mathang.length;i++){
        q+="<div class=\"col-md-4\">\n" +
            "                <div class=\"all\">\n" +
            "                    <img class=\"a1\" src=\""+mathang[i].anh+"\" />\n" +
            "                    <div class=\"a2\">"+mathang[i].ten+"</div>\n" +
            "                    <div class=\"sao\">\n" +
            "                        <div class=\"saosang\">\n" +
            "                            <div class=\"saotoi\" style=\"width: "+(mathang[i].sao/5*100)+"%\"></div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <br/>\n" +
            "                    <div class=\"a3\">$"+mathang[i].gia+"</div>\n" +
            "                    <div class=\"a4\">Add to cart</div>\n" +
            "                </div>\n" +
            "            </div>"
    }
    return q;
}
var h=document.getElementById("sanpham");
h.innerHTML=sanpham();