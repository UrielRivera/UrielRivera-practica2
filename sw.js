// Solo sale una vez

self.addEventListener('install', (event) => { 
    
    console.log(" SW: instalado"); 

     const myPromise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('instalaciones finalizadas');
            resolve('ok')
        },3000)
     })

     event.waitUntil(myPromise)

// Promise.all([])
});

self.addEventListener('activate', (event) =>{
    console.log("SW: ACTVIDADO");
   
})


self.addEventListener('fetch', event => {

    if (event.request.url.includes('jpg')) {
        event.respondWith(fetch('./images/img3.jpg'));
    }

   // console.log(event.request.url);
   /* if (event.request.url.includes('style.css')) {
        const response = new Response(
            `body {
                color: red;
                background-color: blueviolet;
            }`,
            {
                headers: {
                    'Content-Type': 'text/css'
                }
            });
        event.respondWith(response);
    }*/
})

