async function getConfirmed() {
    const response = await fetch('https://api.covid19api.com/country/belgium/status/confirmed/live');
    const data = await response.json();
    console.log(data);
};
async function getDeaths() {
    const response = await fetch('https://api.covid19api.com/country/belgium/status/deaths/live');
    const data = await response.json();
    console.log(data);
};
async function getRecovered() {
    const response = await fetch('https://api.covid19api.com/country/belgium/status/recovered/live');
    const data = await response.json();
    console.log(data);
};

getConfirmed();
getDeaths();
getRecovered();
