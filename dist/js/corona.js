"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*! kevin-van-ransbeeck-widgets v1.0.0 | (c) 2020  | MIT License |  */
function getConfirmed() {
  return _getConfirmed.apply(this, arguments);
}

function _getConfirmed() {
  _getConfirmed = _asyncToGenerator(function* () {
    const response = yield fetch("https://api.covid19api.com/country/belgium/status/confirmed/live");
    const data = yield response.json();
    console.log(data);
  });
  return _getConfirmed.apply(this, arguments);
}

function getDeaths() {
  return _getDeaths.apply(this, arguments);
}

function _getDeaths() {
  _getDeaths = _asyncToGenerator(function* () {
    const response = yield fetch("https://api.covid19api.com/country/belgium/status/deaths/live");
    const data = yield response.json();
    console.log(data);
  });
  return _getDeaths.apply(this, arguments);
}

function getRecovered() {
  return _getRecovered.apply(this, arguments);
}

function _getRecovered() {
  _getRecovered = _asyncToGenerator(function* () {
    const response = yield fetch("https://api.covid19api.com/country/belgium/status/recovered/live");
    const data = yield response.json();
    console.log(data);
  });
  return _getRecovered.apply(this, arguments);
}

function getSummary() {
  return _getSummary.apply(this, arguments);
} // getConfirmed();
// getDeaths();
// getRecovered();


function _getSummary() {
  _getSummary = _asyncToGenerator(function* () {
    const response = yield fetch("https://api.covid19api.com/summary");
    const {
      Global,
      Countries,
      Date: Datetime
    } = yield response.json();
    document.getElementById("corona_global--total--confirmed").innerHTML = Global.TotalConfirmed.toLocaleString("nl-BE");
    document.getElementById("corona_global--total--deaths").innerHTML = Global.TotalDeaths.toLocaleString("nl-BE");
    document.getElementById("corona_global--total--recovered").innerHTML = Global.TotalRecovered.toLocaleString("nl-BE");
    document.getElementById("corona_global--new--confirmed").innerHTML = Global.NewConfirmed.toLocaleString("nl-BE");
    document.getElementById("corona_global--new--deaths").innerHTML = Global.NewDeaths.toLocaleString("nl-BE");
    document.getElementById("corona_global--new--recovered").innerHTML = Global.NewRecovered.toLocaleString("nl-BE");
    document.getElementById("corona_global__datetime").innerHTML = new Date(Datetime).toLocaleString("nl-BE");
    const Belgium = Countries.find(Country => Country.Country === "Belgium");
    document.getElementById("corona_belgium--total--confirmed").innerHTML = Belgium.TotalConfirmed.toLocaleString("nl-BE");
    document.getElementById("corona_belgium--total--deaths").innerHTML = Belgium.TotalDeaths.toLocaleString("nl-BE");
    document.getElementById("corona_belgium--total--recovered").innerHTML = Belgium.TotalRecovered.toLocaleString("nl-BE");
    document.getElementById("corona_belgium--new--confirmed").innerHTML = Belgium.NewConfirmed.toLocaleString("nl-BE");
    document.getElementById("corona_belgium--new--deaths").innerHTML = Belgium.NewDeaths.toLocaleString("nl-BE");
    document.getElementById("corona_belgium--new--recovered").innerHTML = Belgium.NewRecovered.toLocaleString("nl-BE");
    document.getElementById("corona_belgium__datetime").innerHTML = new Date(Belgium.Date).toLocaleString("nl-BE");
  });
  return _getSummary.apply(this, arguments);
}

getSummary();