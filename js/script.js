const loadPhones = () => {
    document.getElementById('phone-container').innerHTML = "";
    document.getElementById('spinner').style.display = 'block';
    document.getElementById('details').innerHTML=""
const searchValue = document.getElementById("search-box").value;

const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
//   console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => displayPhone(data.data));
};


const displayPhone = (phones) => {
    phones.forEach(phone => {       
        const parent = document.getElementById('phone-container')
        let div = document.createElement('div')
        div.classList.add('col-md-4')
        div.innerHTML = `
         <div id="phone-card" class="card border my-3 p-5">
          <div class="">
              <img class="w-50" src="${phone.image}" alt="">
          </div>
          <h4 class="text-success my-3">Name: ${phone.phone_name}</h4>
          <h5 class="text-primary my-1">Company: ${phone.brand}</h5>  

          <button onclick="loadDetails('${phone.slug}')" class="w-50 mx-auto btn btn-primary my-3">More Details</button>
          </div>
          `;
        parent.appendChild(div)
    });
        document.getElementById('spinner').style.display = 'none';

}
const loadDetails = id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
   console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => displayDetails(data));
}

const displayDetails = (data) => {    
    const detailsContainer = document.getElementById('details');
    detailsContainer.innerHTML = `
    <div class="my-3">
    <div class="">
        <img class="w-25" src="${data.data.image}" alt="">
    </div>
    <h6 class="my-1">Release-Date: ${data.data.releaseDate}</h6>
    <h4 class="text-success my-2">Name: ${data.data.name}</h4>
    <h5 class="text-primary">Company: ${data.data.brand}</h5>  
      <h6>Storage: ${data.data.mainFeatures.storage}</h6> 
      <h6>Display-size: ${data.data.mainFeatures.displaySize}</h6>    
      <h6>Chip: ${data.data.mainFeatures.chipSet}</h6>
      <h6 class="text-primary">Sensors: ${data.data.mainFeatures.sensors}</h6>
      <h6 class="text-warning">Others: ${data.data.others.WLAN}</h6>
     </div>
    `
    
   ;
   
    
}