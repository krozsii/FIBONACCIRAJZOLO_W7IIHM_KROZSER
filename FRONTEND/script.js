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
    container.innerHTML = ""; //Előző rajz törlése
    const centerX = (container.offsetWidth / 2); //Konténer vízszintes közepe
    const centerY = (container.offsetHeight / 2); //Konténer függőleges közepe

    const values = document.getElementById("spiral_values"); //Fibonacci sorozat számszerű megjelenítésének helye
    values.innerHTML = ""; //Előző törlése
    
    const scale = 20; //Négyzetek nagyításának mértéke
    const directions = [
        { dx: 1, dy: 0 },   // jobbra
        { dx: 0, dy: -1 },  // fel
        { dx: -1, dy: 0 },  // balra
        { dx: 0, dy: 1 },   // le
    ];
    let prev; //Előző négyzet eltárolásához


    //Nulla kivétele a tömbből
    if(numbers.length > 0 && numbers[0] === 0){
        values.innerText = "0, ";
        numbers.shift();
    }

    for(let i = 0; i < numbers.length; i++){
        const size = numbers[i] * scale; //Aktuális négyzet mérete
        let x, y;

        if(i === 0){ //Első elem középre helyezése
            x = centerX - size / 2;
            y = centerY - size / 2;
        }
        else{
            const dir = directions[(i - 1) % 4]; //Hosszú oldal kiválasztása

            //Az irány függvényében kiszámolja az aktuális elem pozícióját az előző elem méretéből és helyzetéből
            if(dir.dx === 1){ //jobb
                x = prev.x + prev.size;
                y = prev.y + prev.size - size;
            }
            else if(dir.dy === -1){ //fel
                x = prev.x + prev.size - size;
                y = prev.y - size;
            }
            else if(dir.dx === -1){ //bal
                x = prev.x - size;
                y = prev.y;
            }
            else{ //le
                x = prev.x;
                y = prev.y + prev.size;
            }
        }

        //A HTML elem létrehozása és formázása
        const box = document.createElement("div");
        box.setAttribute("class", "box");
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.left = `${x}px`;
        box.style.top = `${y}px`;
        box.innerText = numbers[i];

        container.appendChild(box);
        prev = {x, y, size}; //Elmentjük az elemet, hogy a következő iterációnál ezzel tudjunk számolni
    }

    values.innerText += numbers; //Fibonacci sorozat számszerű megjelenítése
}