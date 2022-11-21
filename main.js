var sec = 0;
var min = 0;

    function myFunction(){
        sec++
        document.getElementById("sec").innerHTML=(sec + " sec")
        if(sec==60){
            sec=0 ;
            min++ ;
            document.getElementById("min").innerHTML=(min + " min")
            document.getElementById("sec").innerHTML=(sec + " sec")
        }
    }
     function reset(){
        sec = 0;
        min = 0;
        document.getElementById("sec").innerHTML=(sec + " sec")
        document.getElementById("min").innerHTML=(min + " min")
        clearInterval(myTimer) 
     }

