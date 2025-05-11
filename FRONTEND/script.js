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
    
}