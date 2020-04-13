// async function getConfirmed() {
//   const response = await fetch(
//     "https://api.covid19api.com/country/belgium/status/confirmed/live"
//   )
//   const data = await response.json()
//   console.log(data)
// }
// async function getDeaths() {
//   const response = await fetch(
//     "https://api.covid19api.com/country/belgium/status/deaths/live"
//   )
//   const data = await response.json()
//   console.log(data)
// }
// async function getRecovered() {
//   const response = await fetch(
//     "https://api.covid19api.com/country/belgium/status/recovered/live"
//   )
//   const data = await response.json()
//   console.log(data)
// }

function storageAvailable(type) {
  var storage
  try {
    storage = window[type]
    var x = "__storage_test__"
    storage.setItem(x, x)
    storage.removeItem(x)
    return true
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    )
  }
}

async function getSummary() {
  const localStorageAvailable = storageAvailable("localStorage")
  const date = new Date().getTime()
  // Get from cache.
  let cachedResponse = {}
  let globalData, countriesData, dateData

  if (localStorageAvailable) {
    if (window.localStorage.getItem("covid19")) {
      const oldData = JSON.parse(window.localStorage.getItem("covid19"))
      if (oldData.date >= date - 15 * 60000) {
        cachedResponse = oldData.data
      }
    }
  }

  if (Object.keys(cachedResponse).length === 0) {
    const { Global, Countries, Date: Datetime } = await fetch(
      "https://api.covid19api.com/summary"
    )
      .then(function (response) {
        console.log("Network request");
        if (response.ok) {
          return response.json()
        } else {
          document.getElementById("corona_global--total--confirmed").innerHTML =
            "FOUTJE: " + response.status + response.text()
          alert(response.status + response.text())
        }
      })
      .catch(function (err) {
        document.getElementById("corona_global--total--confirmed").innerHTML =
          "ERROR: " + err
        alert(err)
      })

    if (localStorageAvailable) {
      // Add to cache.
      window.localStorage.setItem(
        "covid19",
        JSON.stringify({
          date: date,
          data: { Global, Countries, Datetime },
        })
      )
    }
    globalData = Global
    countriesData = Countries
    dateData = Datetime
  } else {
    console.log("Cached!")
    console.log(cachedResponse)
    const { Global, Countries, Date: Datetime } = cachedResponse

    globalData = Global
    countriesData = Countries
    dateData = Datetime
  }

  document.getElementById(
    "corona_global--total--confirmed"
  ).innerHTML = globalData.TotalConfirmed.toLocaleString("nl-BE")
  document.getElementById(
    "corona_global--total--deaths"
  ).innerHTML = globalData.TotalDeaths.toLocaleString("nl-BE")
  document.getElementById(
    "corona_global--total--recovered"
  ).innerHTML = globalData.TotalRecovered.toLocaleString("nl-BE")

  document.getElementById(
    "corona_global--new--confirmed"
  ).innerHTML = globalData.NewConfirmed.toLocaleString("nl-BE")
  document.getElementById(
    "corona_global--new--deaths"
  ).innerHTML = globalData.NewDeaths.toLocaleString("nl-BE")
  document.getElementById(
    "corona_global--new--recovered"
  ).innerHTML = globalData.NewRecovered.toLocaleString("nl-BE")
  document.getElementById("corona_global__datetime").innerHTML = new Date(
    dateData
  ).toLocaleString("nl-BE")

  const Belgium = countriesData.find((Country) => Country.Country === "Belgium")

  document.getElementById(
    "corona_belgium--total--confirmed"
  ).innerHTML = Belgium.TotalConfirmed.toLocaleString("nl-BE")
  document.getElementById(
    "corona_belgium--total--deaths"
  ).innerHTML = Belgium.TotalDeaths.toLocaleString("nl-BE")
  document.getElementById(
    "corona_belgium--total--recovered"
  ).innerHTML = Belgium.TotalRecovered.toLocaleString("nl-BE")

  document.getElementById(
    "corona_belgium--new--confirmed"
  ).innerHTML = Belgium.NewConfirmed.toLocaleString("nl-BE")
  document.getElementById(
    "corona_belgium--new--deaths"
  ).innerHTML = Belgium.NewDeaths.toLocaleString("nl-BE")
  document.getElementById(
    "corona_belgium--new--recovered"
  ).innerHTML = Belgium.NewRecovered.toLocaleString("nl-BE")

  document.getElementById("corona_belgium__datetime").innerHTML = new Date(
    Belgium.Date
  ).toLocaleString("nl-BE")
}

// getConfirmed();
// getDeaths();
// getRecovered();
getSummary()
