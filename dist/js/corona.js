"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*! kevin-van-ransbeeck-widgets v1.0.0 | (c) 2020  | MIT License |  */
function getConfirmed() {
  return _getConfirmed.apply(this, arguments);
}

function _getConfirmed() {
  _getConfirmed = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://api.covid19api.com/country/belgium/status/confirmed/live");

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            data = _context.sent;
            console.log(data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getConfirmed.apply(this, arguments);
}

function getDeaths() {
  return _getDeaths.apply(this, arguments);
}

function _getDeaths() {
  _getDeaths = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var response, data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("https://api.covid19api.com/country/belgium/status/deaths/live");

          case 2:
            response = _context2.sent;
            _context2.next = 5;
            return response.json();

          case 5:
            data = _context2.sent;
            console.log(data);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getDeaths.apply(this, arguments);
}

function getRecovered() {
  return _getRecovered.apply(this, arguments);
}

function _getRecovered() {
  _getRecovered = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var response, data;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch("https://api.covid19api.com/country/belgium/status/recovered/live");

          case 2:
            response = _context3.sent;
            _context3.next = 5;
            return response.json();

          case 5:
            data = _context3.sent;
            console.log(data);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getRecovered.apply(this, arguments);
}

function getSummary() {
  return _getSummary.apply(this, arguments);
} // getConfirmed();
// getDeaths();
// getRecovered();


function _getSummary() {
  _getSummary = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var response, _yield$response$json, Global, Countries, Datetime, Belgium;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return fetch("https://api.covid19api.com/summary");

          case 2:
            response = _context4.sent;
            _context4.next = 5;
            return response.json();

          case 5:
            _yield$response$json = _context4.sent;
            Global = _yield$response$json.Global;
            Countries = _yield$response$json.Countries;
            Datetime = _yield$response$json.Date;
            document.getElementById("corona_global--total--confirmed").innerHTML = Global.TotalConfirmed.toLocaleString("nl-BE");
            document.getElementById("corona_global--total--deaths").innerHTML = Global.TotalDeaths.toLocaleString("nl-BE");
            document.getElementById("corona_global--total--recovered").innerHTML = Global.TotalRecovered.toLocaleString("nl-BE");
            document.getElementById("corona_global--new--confirmed").innerHTML = Global.NewConfirmed.toLocaleString("nl-BE");
            document.getElementById("corona_global--new--deaths").innerHTML = Global.NewDeaths.toLocaleString("nl-BE");
            document.getElementById("corona_global--new--recovered").innerHTML = Global.NewRecovered.toLocaleString("nl-BE");
            document.getElementById("corona_global__datetime").innerHTML = new Date(Datetime).toLocaleString("nl-BE");
            Belgium = Countries.find(function (Country) {
              return Country.Country === "Belgium";
            });
            document.getElementById("corona_belgium--total--confirmed").innerHTML = Belgium.TotalConfirmed.toLocaleString("nl-BE");
            document.getElementById("corona_belgium--total--deaths").innerHTML = Belgium.TotalDeaths.toLocaleString("nl-BE");
            document.getElementById("corona_belgium--total--recovered").innerHTML = Belgium.TotalRecovered.toLocaleString("nl-BE");
            document.getElementById("corona_belgium--new--confirmed").innerHTML = Belgium.NewConfirmed.toLocaleString("nl-BE");
            document.getElementById("corona_belgium--new--deaths").innerHTML = Belgium.NewDeaths.toLocaleString("nl-BE");
            document.getElementById("corona_belgium--new--recovered").innerHTML = Belgium.NewRecovered.toLocaleString("nl-BE");
            document.getElementById("corona_belgium__datetime").innerHTML = new Date(Belgium.Date).toLocaleString("nl-BE");

          case 24:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getSummary.apply(this, arguments);
}

getSummary();