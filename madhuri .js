function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Update analog clock hands
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');

    const hourDeg = (360 / 12) * (hours % 12) + (minutes / 60) * (360 / 12);
    const minuteDeg = (360 / 60) * minutes + (seconds / 60) * (360 / 60);
    const secondDeg = (360 / 60) * seconds;

    hourHand.style.transform = ' rotate(${hourDeg}deg)';
    minuteHand.style.transform = 'rotate(${minuteDeg}deg)';
    secondHand.style.transform = 'rotate(${secondDeg}deg)';

    // Update digital time
    const digitalTime = document.getElementById('digital-time');
    digitalTime.textContent = now.toLocaleTimeString();
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to set time immediately
