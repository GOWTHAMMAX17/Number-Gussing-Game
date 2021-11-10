let count=10;
let b = Math.floor((Math.random() * 100) + 1);
console.log(b);
function check(a)
{
    if(count>0){
        if(a==b){
            location.href = "index2.html";
        }
        else{
            count = count-1;
        }
        document.getElementById("clicks").innerHTML = count;
    }
    else{ 
        alert("You Exided the Maximum Attempts");
        location.href = "index3.html";
    }
}
function back()
{
    location.href = "index.html";
}