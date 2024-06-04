
let body = document.querySelector("body");
let btn = document.querySelector(".btn");
let stopBtn = document.querySelector(".stop-btn");
console.log(btn);
console.log(body);

let intervalId;

btn.addEventListener("click", () => {
    intervalId = setInterval(() => {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256); 
        let rgb = `rgb(${red},${green},${blue})`;
        body.style.backgroundColor = rgb;
    }, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
});
