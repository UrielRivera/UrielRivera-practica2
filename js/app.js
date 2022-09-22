if (navigator.serviceWorker) {
    //identificar si estoy en  local o en github
    if(window.location.hostname = "localhost"){
        console.log("Es local host");
        navigator.serviceWorker.register('/sw.js');
    }else{
        navigator.serviceWorker.register('./sw.js');
    }
   
}

