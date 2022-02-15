// Matrix effect
// 14/2/2022

const main = () => {
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    let h = window.innerHeight;
    let w = window.innerWidth;
    const font_size = 16;
    const columns = Math.floor(w / font_size);
    const drops = [];

    const matrix_str = 'ΓΔΘΙΛΜΝΞΟΠΡΣΤΥΦΧΨΩあアいイうウえエおオかカキくクけこコさサシすスせセそソたタちチつツてとトなナにニぬヌねネのはハひヒふフへほホまマみミむムめメもモやヤゆユよヨらラりリるルれレろロわワをヲんン1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
    function matrixEffect() {        
        ctx.fillStyle = 'rgba(0, 0, 32, 0.05)'; // background
        ctx.fillRect(0, 0, w, h);
        ctx.fontSize = `${font_size}px`;
        ctx.fillStyle = '#00ffff'; // font color
        for (let i = 0; i < columns; i++) {
            let e = Math.floor(Math.random()*matrix_str.length); // Select position in string
            let x = i * font_size;
            let y = drops[i]*font_size;
            ctx.fillText(matrix_str[e],x,y);
            y >= canvas.height && Math.random() > 0.99 ? drops[i] = 0 : drops[i]++;
        };
    };

    canvas.height = h;
    canvas.width = w;

    for (let i = 0; i < columns; i++) {
        drops.push(0);
    };
    
    setInterval(() => {
        matrixEffect()
    }, 75); 
}; 

document.addEventListener('DOMContentLoaded', main);