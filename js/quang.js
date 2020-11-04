function TimerCountdown(){
    var a=document.getElementById("quang");
    var m=isNaN(parseInt(a.value))?0:parseInt(a.value);
    var n=0;
    var b=setInterval(function (){
        var spanMin=document.getElementById("phut");
        var spanSec=document.getElementById("giay");
        spanMin.innerText=m>=10?m:"0"+m;
        spanSec.innerText=n>=10?n:"0"+n;
        n--;
        if(n<0){
            n=59;
            m--;
        }
        if(m<0){
            clearInterval(b);
        }
    },1000)
}
function ClockTime(){
    var now=new Date();
    var giothat=now.getHours();
    var phutthat=now.getMinutes();
    var giaythat=now.getSeconds();
    var spanHour=document.getElementById("gio");
    var spanMinute=document.getElementById("phut1");
    var spanSecond=document.getElementById("giay1");
    setInterval(function (){
        spanHour.innerText=giothat;
        spanMinute.innerText=phutthat;
        spanSecond.innerText=giaythat;
        giaythat++;
        if(giaythat>59){
            giaythat=0;
            phutthat++;
        }
        if(phutthat>59){
            phutthat=0;
            giaythat++;
        }
        if (giothat>23) {
            giothat = 0
        }
    },1000)
}