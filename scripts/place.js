function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
    }
    return "N/A";
}

document.getElementById('windChill').textContent = calculateWindChill(10, 5);

const lastModifiedDate = document.lastModified;
document.getElementById(
    "lastModified"
).textContent = `Last Modification: ${lastModifiedDate}`;