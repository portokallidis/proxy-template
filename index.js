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
// proxy.register("static.schoolroom.gr", "http://localhost:3011", {  ssl: devicesHTTPS });
proxy.register("api.schoolroom.gr", "http://localhost:3005");
proxy.register("arc.schoolroom.gr", "http://localhost:3006");
proxy.register("loopback.schoolroom.gr", "http://localhost:3007");
proxy.register("triangular.schoolroom.gr", "http://localhost:3008");
proxy.register("react-angle.schoolroom.gr", "http://localhost:3009");
proxy.register("mean-angle.schoolroom.gr", "http://localhost:3010");
proxy.register("static.schoolroom.gr", "http://localhost:3011");
proxy.register("dev.schoolroom.gr", "http://localhost:3012");