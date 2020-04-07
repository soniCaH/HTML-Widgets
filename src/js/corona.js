async function getDeaths() {
    const response = await fetch('https://api.covid19api.com/country/belgium/status/confirmed/live');
    const data = await response.json();
    console.log(data);
}
