




console.log(navigator.onLine);






















const obtenerValor = () => {
    let inputValue = document.getElementById('testInput').value;
    localStorage.setItem('offlineData', inputValue);
}