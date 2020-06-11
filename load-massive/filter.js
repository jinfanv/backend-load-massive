"use strict";

const { ObjectID } = require("mongodb");
const { randomBytes } = require("crypto");
const { createColecction, getColecction } = require("./load");

//Incluye Beds - Restrictions

function createCountryFilter(country, beds, restrictions) {
  country = addObjectToData(country);
  beds = addObjectToData(beds);
  restrictions = addObjectToData(restrictions);

  country = country.map((item) => {
    return {
      ...item,
      typebed: filterBedToCountry(beds, item.code),
      restrictions: filterRestrictionToCountry(restrictions, item.code),
    };
  });

  createColecction(country, "Country");
  createColecction(beds, "Beds");
  createColecction(restrictions, "Restrictions");
}

async function createCountryTopScaleFilter(data) {
  let topData = await CountryFilter(data);
  console.log(topData);

  createColecction(topData, "CountryTopScale");
}

async function createCountryBottomScaleFilter(data) {
  let BottomData = await CountryFilter(data);
  createColecction(BottomData, "CountryBottomScale");
}

async function createCountryTopEstimateFilter(data) {
  let TopData = await CountryFilter(data);
  createColecction(TopData, "CountryTopEstimate");
}
async function createCountryBottomEstimateFilter(data) {
  let BottomData = await CountryFilter(data);
  createColecction(BottomData, "CountryBottomEstimate");
}

async function createCountryTopAvgScalaFilter(data) {
  let TopData = await CountryFilter(data);
  createColecction(TopData, "CountryTopAvgScala");
}

async function createCountryBottomAvgScalaFilter(data) {
  let BottomData = await CountryFilter(data);
  createColecction(BottomData, "CountryBottomAvgScala");
}

async function createCountryTopAvgEstimateFilter(data) {
  let TopData = await CountryFilter(data);
  createColecction(TopData, "CountryTopAvgEstimate");
}

async function createCountryBottomAvgEstimateFilter(data) {
  let BottomData = await CountryFilter(data);
  createColecction(BottomData, "CountryBottomAvgEstimate");
}

// Dataset Measure

async function createGeneralMeasureFilter(data) {
  createColecction(data, "GeneralMeasureCountry");
}

async function createGeneralTopMeasureFilter(data) {
  createColecction(data, "GeneralTopMeasureCountry");
}

async function createGeneralBottomMeasureFilter(data) {
  createColecction(data, "GeneralBottomMeasureCountry");
}

async function createMeasureTopFilter(data) {
  createColecction(data, "MeasureTopMeasureCountry");
}

async function createMeasureBottomFilter(data) {
  createColecction(data, "MeasureBottomMeasureCountry");
}

async function createGeneralTopMeasureRecordFilter(data) {
  createColecction(data, "GeneralTopMeasureRecordCountry");
}

async function createGeneralBottomMeasureRecordFilter(data) {
  createColecction(data, "GeneralBottomMeasureRecordCountry");
}

async function createMeasureTopRecordFilter(data) {
  createColecction(data, "MeasureTopMeasureRecordCountry");
}

async function createMeasureBottomRecordFilter(data) {
  createColecction(data, "MeasureBottomMeasureRecordCountry");
}

//Incluye Beds - Restrictions for TOP COUNTRIES SCALE

async function CountryFilter(data) {
  let Country = await getColecction("Country");

  let dataTop = data.map((x) => {
    let top = Country.find((i) => i.code === x.code);
    return {
      ...top,
    };
  });
  return dataTop;
  //console.log(dataTop);
}
//Agrega los ObjectID Custom
function addObjectToData(data) {
  return data.map((item) => {
    return {
      _id: ObjectID(randomBytes(12).toString("hex")),
      ...item,
    };
  });
}

//Agrega Tipos de Camas
function filterBedToCountry(bed, country) {
  let typeBed = [];
  bed.forEach((i) => {
    if (i.code == country) typeBed.push(i._id);
  });
  return typeBed;
}

//Agrega Tipos de restricciones
function filterRestrictionToCountry(restriction, country) {
  let restrictions = [];
  restriction.forEach((i) => {
    if (i.code == country) restrictions.push(i._id);
  });
  return restrictions;
}

module.exports = {
  createCountryFilter,
  createCountryTopScaleFilter,
  createCountryBottomScaleFilter,
  createCountryTopEstimateFilter,
  createCountryBottomEstimateFilter,
  createCountryTopAvgScalaFilter,
  createCountryBottomAvgScalaFilter,
  createCountryTopAvgEstimateFilter,
  createCountryBottomAvgEstimateFilter,
  createGeneralMeasureFilter,
  createGeneralTopMeasureFilter,
  createGeneralBottomMeasureFilter,
  createMeasureTopFilter,
  createMeasureBottomFilter,
  createGeneralTopMeasureRecordFilter,
  createGeneralBottomMeasureRecordFilter,
  createMeasureTopRecordFilter,
  createMeasureBottomRecordFilter,
};
