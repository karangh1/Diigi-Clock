let hourEl= document.getElementById("hour");
let minuteEl= document.getElementById("minute");
let secondEl= document.getElementById("second");
let ampmEl =document.getElementById("ampm");
function update(){
    let h =new Date().getHours();
    let m =new Date().getMinutes();
    let s =new Date().getSeconds();
    let ampm ="Am";

    if(h>12){
        h=h-12;
        ampm="PM"
        hourEl.innerHTML=h;
        minuteEl.innerHTML=m;
        secondEl.innerHTML=s;
        ampmEl.innerHTML=ampm;
        setTimeout(()=>{
            update()
        } ,1000)
    }
}
update();




