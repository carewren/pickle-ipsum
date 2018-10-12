// Event listener on generate button
var ref = document.getElementById("generate-img").addEventListener("click", randomImage);
console.log (ref);

// Method to generate randomRick image
var lastIndex = 0;

function randomImage() {
    var rick = document.getElementById('randomRick');
    var imgDir = 'img/';
    var imgArray = new array('rick01.jpg','rick02.jpeg','rick03.jpg','rick-4.jpeg','rick05.jpg','rick06.jpg','rick07.jpg','rick08.jpg','rick09.jpg','rick10.jpeg','rick11.jpg','rick12.png','rick13.jpg','rick14.jpg','rick15.jpg','rick16.jpeg','rick18.jpg','rick19.jpg','rick20.jpg','rick21.png','rick22.jpg','rick23.jpeg','rick24.jpeg','rick25.png');
    var imgIndex = 0;

    if(imgArray.length > 1) {
        while(imgIndex == lastIndex) {
            imgIndex = Math.floor(Math.random() * imgArray.length);
        }
        lastIndex = imgIndex;
    }
    
    var imgPath = imgDir + imgArray[imgIndex];
    
    rick.src = imgPath;
    rick.alt = imgArray[imgIndex];


}
