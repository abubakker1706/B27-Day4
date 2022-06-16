const url='https://restcountries.com/v3.1/all'

async function country(){
const response=await fetch(url)
const result = await response.json()
console.log(result)

result.map((country)=>{
console.log(country.name)
console.log(country.region)
console.log(country.subregion)
console.log(country.population)
})

}
country()