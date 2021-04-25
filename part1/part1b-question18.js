function countSec(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(countSec, 1000);