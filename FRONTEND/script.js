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
    const centerX = (container.offsetWidth / 2); //Konténer vízszintes közepe
    const centerY = (container.offsetHeight / 2); //Konténer függőleges közepe
    
    const scale = 20; //Négyzetek nagyításának mértéke
    const dir = [
        { dx: 1, dy: 0 },   // jobbra
        { dx: 0, dy: -1 },  // fel
        { dx: -1, dy: 0 },  // balra
        { dx: 0, dy: 1 },   // le
    ];
    let prev; //Előző négyzet eltárolásához


    //A nullát nem tudjuk megjeleníteni
    if(numbers.length > 1 && numbers[0] === 0){
        numbers.shift();
    }


}