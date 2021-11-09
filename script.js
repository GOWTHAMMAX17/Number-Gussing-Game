function check(a)
{
    let b = Math.floor((Math.random() * 100) + 1);
    if(a==b){
        location.href = "index2.html";
    }
    else if(a!=b){
        location.href = "index3.html";
    }
}
function reloadbutton(){
    location.href = "index.html";
}