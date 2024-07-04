// Function to update the current time in UTC and current day of the week
function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[now.getUTCDay()];

    document.getElementById('currentTime').textContent = utcTime;
    document.getElementById('currentDay').textContent = currentDay;
}

// Update time and day every second
setInterval(updateTime, 1000);
updateTime();
