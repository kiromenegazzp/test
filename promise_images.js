'use strict';

let images = [
    'http://d33wubrfki0l68.cloudfront.net/a831feb156a865dbaff01e2deac2b13283d151e5/8885f/images/users/cloudflare.png',
    'http://d33wubrfki0l68.cloudfront.net/beabc2ed6b1c8165942660821459c8f52f9cfb50/99e70/images/users/yahoo.png'
];

let downloadImage = src => {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = src;
        img.onload = resolve(img.src);
        img.onerror = e => {
            reject(e);
        };
    });
};

Promise.all(images.map(downloadImage))
.then(
    results => console.log(results),
    error => console.log(error)
);