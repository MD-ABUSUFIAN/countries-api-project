const loadCuntries=()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>loadDisplay(data))
}

loadCuntries()

const loadDisplay=cuntries=>{

   const cuntriesInfo=document.getElementById('cuntries-info'); 
cuntries.forEach(cuntrey => {
    // console.log(cuntrey.name);
    

    const div=document.createElement('div');
    div.classList.add('cuntrey')
    div.innerHTML=`
    <h3>${cuntrey.name}</h3>
    <p>${cuntrey.capital}</p>
    <button onclick="loadCountryName('${cuntrey.name}')">Details</button>
    `
    // const h3=document.createElement('h3');
    // h3.innerText=cuntrey.name;
    // div.appendChild(h3);
    // const p=document.createElement('p');
    // p.innerText=cuntrey.capital;
    // div.appendChild(p);
    cuntriesInfo.appendChild(div)
});
}


const loadCountryName=name=>{
   const url=`https://restcountries.eu/rest/v2/name/${name}`
   fetch(url)
   .then(res=>res.json())
   .then(data=>loadDisplayCuntries(data[0]))
}

const loadDisplayCuntries=nameOf=>{
    // console.log(nameOf);

const cuntriesDetails=document.getElementById('cuntries-details')

cuntriesDetails.innerHTML=`
<h3>${nameOf.name}</h3>
<p>${nameOf.population}</p>
<img width="200px" src="${nameOf.flag}">`
}