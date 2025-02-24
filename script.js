// Set the birthdate
const birthDate = new Date("October 13, 2005 00:00:00");

function updateCountdown() {
    let now = new Date();
    
    // Calculate the difference in total milliseconds
    let diff = now - birthDate;

    // Convert to years, months, days, hours, minutes, seconds
    let birthYear = birthDate.getFullYear();
    let birthMonth = birthDate.getMonth();
    let birthDay = birthDate.getDate();

    let years = now.getFullYear() - birthYear;
    let months = now.getMonth() - birthMonth;
    let days = now.getDate() - birthDay;
    
    if (days < 0) {
        months--;
        let lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Update HTML elements
    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

// Update every second
setInterval(updateCountdown, 1000);
updateCountdown();  // Run immediately to prevent delay
