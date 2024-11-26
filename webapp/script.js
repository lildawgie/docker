document.addEventListener('DOMContentLoaded', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('random-number').textContent = randomNumber;
});
