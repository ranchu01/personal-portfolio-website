// const dynamicText = document.querySelector(" .home-content h3 h1 p");

// const words = [
// "Hello, It's Me",
// "Ranchu Mahato",
// "And I'm a",
// "Frontend Developer with extensive experiance for 3 years.",
// "Expertice is to create and website design , Frontend design and ",
// "many more...."]

// let wordIndex=0;
// let charIndex=0;
// let isDeleting = false;

// const typeEffect=() => {
//     const currentWord =words[wordIndex];
//     const currentChar = currentWord.substring(0 , charIndex);
//     dynamicText.textContent = currentChar;

//     if(isDeleting && charIndex < currentWord.length){
//         //if condition is true then type the next character
//         charIndex++ ;
//         setTimeout(typeEffect,200);
//     }
//     else if(isDeleting && charIndex > 0){
//         //if condition is true then remove the previous character
//         charIndex-- ;
//         setTimeout(typeEffect,100);
//     }
//     else{
//         //if word is deleted then switch to the next word
//         isDeleting = !isDeleting;
//         wordIndex = !isDeleting ? (wordIndex + 1) % words.length:wordIndex;
//         setTimeout(typeEffect,1200)
//     }
// }

// typeEffect();



var typed = new Typed (".text",{
strings:["FrondEnd Developer", "YouTuber"],
typeSpeed : 100,
backSpeed :100,
backDelay : 1000,
loop:true
});