'use strict';

let images = [
    'http://d33wubrfki0l68.cloudfront.net/f35d49d959deb5bfd7deb80c2668128367e2917c/eb35e/images/logo.svg',
    'http://d33wubrfki0l68.cloudfront.net/beabc2ed6b1c8165942660821459c8f52f9cfb50/99e70/images/users/yahoo.png'
];

let downloadImage = src => {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = src;
        img.onload = resolve(`loaded ${img.src}`);
        img.onerror = reject('failed');
    });
};

Promise.all([images.map(downloadImage)])
.then(
results => console.log(results),
error => console.log(error)
);