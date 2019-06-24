
//gloabl Variables
var time = 201;
var check;
var awn1;
var awn2;
var awn3;

function count(){
    if (time > 0){
        time--;
        $("#timerCt").text(time);
    }
    else{
        time=201;
        alert("You Lose, Try Again");
    }
}
var myTimer = setInterval(count,1000);

$("#submitBtn").on("click", function () {
    awn1 = $("input[name='riddle1']:checked").val();
    awn2 = $("input[name='riddle2']:checked").val();
    awn3 = $("input[name='riddle3']:checked").val();
    if (awn1 === "4"){
        if(awn2 === "Never"){
            if(awn3 === "1")
            {
                clearInterval(myTimer);
                alert("You Win!");
            }
            else{
                alert("One of the awnsers is wrong");
                time = time - 10;
            }
        }
        else{
            alert("One of the awnsers is wrong");
            time = time - 10;
        }
        
    }
    else{
        alert("One of the awnsers is wrong");
        time = time - 10;
    }
     
});
$("input").on("click", function () {    
    check = $("input:checked").val();
    console.log(check);
});


  