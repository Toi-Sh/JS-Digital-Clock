const clock = document.querySelector(".clock");
const tick=()=>{


    const now=new Date();
    const h=now.getHours();
    const m=now.getMinutes();
    const s=now.getSeconds();
    

    if(s<10){
        const html2=`
        <span>${h}</span> : 
        <span>${m}</span> : 
        <span>0${s}</span>
        `;
        clock.innerHTML=html2;
    }else{
        const html=`
        <span>${h}</span> : 
        <span>${m}</span> : 
        <span>${s}</span>
    `;
    clock.innerHTML=html;
    }

};
setInterval(tick, 1000);