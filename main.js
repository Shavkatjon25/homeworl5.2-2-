const btnEl=document.querySelector(".btn");
let     x=0;
btnEl.addEventListener("click", function(){

    const st1=document.getElementById("sti").value; 
    const mt1=document.getElementById("mti").value;
    const sd1=document.getElementById("sdi").value;
    const st2=document.querySelector(".st");
    const mt2=document.querySelector(".mt");
    const sd2=document.querySelector(".sd");
    st2.textContent=st1;
    if(st2.textContent=="" || st2.textContent==0){st2.textContent="00"}
    mt2.textContent=mt1;
    if(mt2.textContent=="" || mt2.textContent==0){mt2.textContent="00"}
    if(mt2.textContent<10 && mt2.textContent!=0){mt2.textContent="0"+mt2.textContent}
    sd2.textContent=sd1;
    if(sd2.textContent=="" || sd2.textContent==0){sd2.textContent="00"}
    let inter=0;
     if(!x){
      x = setInterval(function(){
        clearInterval(inter);
    if(st2.textContent==0 && mt2.textContent==0 && sd2.textContent==0){}
    else{
         if(mt2.textContent==0 && st2.textContent!=0){st2.textContent=+st2.textContent-1; mt2.textContent=60}
         if(st2.textContent=="" || st2.textContent==0){st2.textContent="00"}
         if(sd2.textContent==0 && mt2.textContent!=0){mt2.textContent=+mt2.textContent-1; sd2.textContent=60}
         if(mt2.textContent=="" || mt2.textContent==0){mt2.textContent="00"}
         if(sd2.textContent<11){
            sd2.textContent="0"+(+sd2.textContent-1);
            if(st2.textContent==0 && mt2.textContent==0){
                const ra1=document.getElementById("r1").value;
                const ra2=document.getElementById("r2").value;
                const ra3=document.getElementById("r3").value;
                if(!inter){
                 inter=setInterval(function(){
                    document.body.style.backgroundColor=ra1;
                }, 100)
                setInterval(function(){
                    document.body.style.backgroundColor=ra2;
                }, 200)
                setInterval(function(){
                    document.body.style.backgroundColor=ra3;
                }, 300)}
            }
         }else{sd2.textContent=+sd2.textContent-1;}
         if(sd2.textContent=="" || sd2.textContent==0){sd2.textContent="00"}
    }
    }, 1000)}
    setInterval(function(){
        if(st2.textContent==0 && mt2.textContent==0 && sd2.textContent==0){ clearInterval(inter);}
    }, 1)
} )