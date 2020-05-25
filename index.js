const fs = require("fs");
require("dotenv").config();
const { spawn } = require("child_process");

const {
  createCountryFilter,
  createCountryTopScaleFilter,
  createCountryBottomScaleFilter,
  createCountryTopEstimateFilter,
  createCountryBottomEstimateFilter,
  createCountryTopAvgScalaFilter,
  createCountryBottomAvgScalaFilter,
  createCountryTopAvgEstimateFilter,
  createCountryBottomAvgEstimateFilter,
} = require("./load-massive/filter");

insertCountry()
insertTopCountry();
// Lee todos los documentos del tipo TYPE para ser agregados primero a la Base de datos

async function insertCountry() {
  let country = readDocument(
    "NUMBER_PERCENT_COUNTRY_NORMAL_GENERAL.json",
    "beds"
  );
  let beds = readDocument("NUMBER_PERCENT_COUNTRY_NORMAL_TYPES.json", "beds");
  let restrictions = readDocument(
    "GENERAL_COUNTRY_INFORMATION_MEASURES.json",
    "measures"
  );

  createCountryFilter(country, beds, restrictions);
}

function insertTopCountry() {
  //(2) Top 10 countries with highest bed capacity (scale)

  let countryTopScale = readDocument(
    "TOP_COUNTRIES_SCALE_GENERAL.json",
    "beds"
  );
  createCountryTopScaleFilter(countryTopScale);
  //(3) Top 10 countries with lowest bed capacity (scale)
  let countryBottomScale = readDocument(
    "BOTTOM_COUNTRIES_SCALE_GENERAL.json",
    "beds"
  );
  createCountryBottomScaleFilter(countryBottomScale)
  //  (4) Top 10 countries with highest bed capacity (estimated)

  let countryTopEstime = readDocument(
    "TOP_COUNTRIES_ESTIMATE_GENERAL.json",
    "beds"
  );
  createCountryTopEstimateFilter(countryTopEstime)
  //  (5) Top 10 countries with lowest bed capacity (estimated)

  let countryBottomEstime = readDocument(
    "BOTTOM_COUNTRIES_ESTIMATE_GENERAL.json",
    "beds"
  );
  createCountryBottomEstimateFilter(countryBottomEstime)
  //  (6) Top 10 countries with highest average bed capacity (scale)
  let countryTopAvgScale = readDocument(
    "TOP_COUNTRIES_AVG_SCALE_GENERAL.json",
    "beds"
  );
  createCountryTopAvgScalaFilter(countryTopAvgScale)
  //  (7) Top 10 countries with lowest average bed capacity (scale)
  let countryBottomAvgScale = readDocument(
    "BOTTOM_COUNTRIES_AVG_SCALE_GENERAL.json",
    "beds"
  );
  createCountryBottomAvgScalaFilter(countryBottomAvgScale)
  //  (8) Top 10 countries with highest average bed capacity (estimated)
  let countryTopAvgEstimate = readDocument(
    "TOP_COUNTRIES_AVG_ESTIMATE_GENERAL.json",
    "beds"
  );
  createCountryTopAvgEstimateFilter(countryTopAvgEstimate)
  //  (9) Top 10 countries with lowest average bed capacity (estimated)
  let countryBottomAvgEstimate = readDocument(
    "BOTTOM_COUNTRIES_AVG_ESTIMATE_GENERAL.json",
    "beds"
  );
  createCountryBottomAvgEstimateFilter(countryBottomAvgEstimate)
}

function readDocument(document, folder) {
  URL = `${__dirname}/data_analysis/export/${folder}/${document}`;

  try {
    let result = fs.readFileSync(URL, "utf8");
    result = JSON.parse(result);
    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
}

/*
const ruta1 = spawn("cd", ["./data_analysis"]);
const child = spawn("python", ["./main.py", "1", "1"]);
const ruta2 = spawn("cd", [".."]);

child.stdout.on("data", (data) => {
  console.log(data.toString());
});

child.stderr.on("data", (data) => {
  console.error(data.toString());
});

*/
