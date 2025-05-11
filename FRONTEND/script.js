function sendReq() {
    var input = document.getElementById("iteration").value;

    fetch('https://localhost:7118/Fibonacci', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control': 'Allow-Origin'
        },
        body: JSON.stringify(input)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("A válasz nem volt sikeres: " + response.status);
        }
        return response.json();
    })
    .then(numbers => {
        drawFibonacci(numbers)
    })
    .catch(error => {
        console.error('Hiba történt a kérés során:', error);
    });
}


function drawFibonacci(numbers){
    const container = document.getElementById("spiral"); //HTML konténer, amelyben meg akarunk jeleníteni
    container.innerHTML = "";
    const centerX = (container.offsetWidth / 2); //Konténer vízszintes közepe
    const centerY = (container.offsetHeight / 2); //Konténer függőleges közepe

    const values = document.getElementById("spiral_values");
    values.innerHTML = "";
    
    const scale = 20; //Négyzetek nagyításának mértéke
    const directions = [
        { dx: 1, dy: 0 },   // jobbra
        { dx: 0, dy: -1 },  // fel
        { dx: -1, dy: 0 },  // balra
        { dx: 0, dy: 1 },   // le
    ];
    let prev; //Előző négyzet eltárolásához


    //A nullát nem tudjuk megjeleníteni
    if(numbers.length > 0 && numbers[0] === 0){
        values.innerText = "0, ";
        numbers.shift();
    }

    for(let i = 0; i < numbers.length; i++){
        const size = numbers[i] * scale;
        let x, y;

        if(i === 0){
            x = centerX - size / 2;
            y = centerY - size / 2;
        }
        else{
            const dir = directions[(i - 1) % 4];
            const prevDir = directions[(i - 1) % 4];
            const prevSize = numbers[i - 1] * scale;

            if(dir.dx === 1){
                x = prev.x + prevSize;
                y = prev.y + prevSize - size;
            }
            else if(dir.dy === -1){
                x = prev.x + prevSize - size;
                y = prev.y - size;
            }
            else if(dir.dx === -1){
                x = prev.x - size;
                y = prev.y;
            }
            else{
                x = prev.x;
                y = prev.y + prevSize;
            }
        }

        const box = document.createElement("div");
        box.setAttribute("class", "box");
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.left = `${x}px`;
        box.style.top = `${y}px`;
        box.innerText = numbers[i];

        container.appendChild(box);
        prev = {x, y, size};
    }

    values.innerText += numbers;
}