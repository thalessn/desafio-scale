import Country from './model/Country';
import api from './service/api';

const swap = (countries: Country[], index: number) => {
  let temp = countries[index];
  countries[index] = countries[index + 1];
  countries[index + 1] = temp;
}

const sortCountriesByFrontierNumberDesc = (countries: Country[]): Country[] => {
  let changed = true;
  do {
    changed = false;
    for (let index = 0; index < countries.length - 1; index++) {
      if(countries[index].fronteiras.length < countries[index + 1].fronteiras.length) {
        swap(countries, index);
        changed = true;
      } else if (countries[index].fronteiras.length === countries[index + 1].fronteiras.length) {
        if (countries[index].name < countries[index + 1].name) {
          swap(countries, index);
          changed = true;
        }
      }
    }
  }while(changed);
  return countries;
}

const printCountriesNamesWithFrontiers = (countries: Country[]) => {
  process.stdout.write("\n*****************************")
  process.stdout.write("\nPaís | Fronteiras com Países \n");
  process.stdout.write("*****************************\n");
  countries.forEach((country) => {
    process.stdout.write(`${country.code} | ${country.fronteiras.join(',')} \n`)
  });
}

(async function () {
  try {
    const { data: countries } = await api.get<Country[]>('/countries');
    const sortedArray = sortCountriesByFrontierNumberDesc(countries);
    printCountriesNamesWithFrontiers(sortedArray);
  } catch (error) {
    console.log("Não foi possível se conectar ao servidor para obter as informações.")
  }
})()
