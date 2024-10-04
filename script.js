let is24HourFormat = true;

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // For 12-hour format, adjust the hours
    if (!is24HourFormat) {
        hours = hours % 12 || 12; // Adjust 0 hours to 12 for AM
    }

    // Format the time with leading zeros if needed
    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    
    // Display the formatted time
    document.getElementById('clock').textContent = formattedTime;
}

// Add leading zeros to single-digit numbers
function padZero(number) {
    return number < 10 ? `0${number}` : number;
}

// Toggle between 24-hour and 12-hour format
function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    document.getElementById('toggle-format').textContent = is24HourFormat ? 
        'Switch to 12-hour format' : 'Switch to 24-hour format';
}

// Update the clock every second
setInterval(updateClock, 1000);

// Toggle button event listener
document.getElementById('toggle-format').addEventListener('click', toggleFormat);

// Initialize the clock immediately
updateClock();
