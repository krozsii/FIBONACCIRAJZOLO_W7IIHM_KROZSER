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
    const container = document.getElementById("spiral");
    const centerX = (container.offsetWidth / 2);
    const centerY = (container.offsetHeight / 2);
    
    const scale = 20;
    const dir = [
        { dx: 1, dy: 0 },   // jobbra
        { dx: 0, dy: -1 },  // fel
        { dx: -1, dy: 0 },  // balra
        { dx: 0, dy: 1 },   // le
    ];
    let prev;

}