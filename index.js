// OPTIONAL: Setup your proxy but disable the X-Forwarded-For header

// var devicesHTTPS = {
//         port: 443,
//         key: "../ssl_certificates/devices/carre-startssl-private.key",
//         cert: "../ssl_certificates/devices/2_devices.carre-project.eu.crt",    
//         ca: "../ssl_certificates/devices/root.crt",    
//     };

    
var proxy = require('redbird')({
    port: 80, 
    xfwd: false
    // ssl :devicesHTTPS
});

// Route to any global ip

//taxonomies


//STATIC SERVER
// proxy.register("static.schoolroom.gr", "http://localhost:3011", {  ssl: devicesHTTPS });
proxy.register("static.schoolroom.gr", "http://localhost:3011");
proxy.register("dev.schoolroom.gr", "http://localhost:3012");