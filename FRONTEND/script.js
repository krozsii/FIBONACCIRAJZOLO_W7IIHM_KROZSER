const input = document.getElementById("iteration").value;

function sendRequest() {
    fetch('https://localhost:7241/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
    })
    .then(response => response.json())
    .then(data => {
        
    })
    .catch(error => {
        console.error('Hiba történt a kérés során:', error);
    });
  }