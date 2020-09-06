"use  strict";
(()=>{
    const $ = selector => document.querySelector(selector);
    const hora = (date) =>{
        let hora = date.getHours();
        if(hora > 12){
            hora = hora - 12;
        }
        if(hora < 10){
            hora = `0${hora}`;
        }
        return hora;
    }
    const minutos = (date)=>{
        let min = date.getMinutes();
        if(min<10){
            min = '0'+min;
        }
        return min;
    }
    const ampm = (date) =>{
        let hora = date.getHours()
        let ampm = "am";
        if(hora > 11)
        {ampm = "pm";}
        return ampm.toLocaleUpperCase();
    }
    const showTime = (date)=>{
        $("#hora").innerHTML = hora(date);
        $("#minutos").innerHTML = minutos(date);
        $("#ampm").innerHTML = ampm(date);
    }
    
    window.addEventListener('load', ()=>{
        showTime(new Date());
        setInterval(() => {
            showTime(new Date());
        }, 5000);
        $('.preloader').style.display = 'none';
        $('section').style.visibility = 'visible';
    })
})();