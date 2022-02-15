const p = document.querySelector('p');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    p.innerText = random();
    document.body.style.backgroundColor = random();
});

function random() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const color = `rgb(${r} ${g} ${b})`;
    return color;
}