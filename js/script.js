const loadPhones = () => {
    document.getElementById('phone-container').innerHTML = "";
    document.getElementById('spinner').style.display = 'block';
    document.getElementById('details').innerHTML=""
const searchValue = document.getElementById("search-box").value;

const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
//   console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (searchValue == "" || data.data.length === 0) {         
            document.getElementById("err-msg").style.display = "block";
            document.getElementById('spinner').style.display = "none";
      } else {
            document.getElementById("err-msg").style.display = "none";
            document.getElementById('spinner').style.display = "block";
        displayPhone(data.data);
       
      }
    });
};

const displayPhone = (phones) => {
    const phoneLength = phones.length;
    console.log(phoneLength);
    phones.slice(0,20).forEach(phone => {    
        
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
    if (data.data.others == null) {
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
     </div>
    `
        return
    }
    else {
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
      <h5 class="text-warning">Others:
      <ul>
          <h6 class="text-primary">WLAN: ${data.data.others.WLAN}</h6>
          <h6 class="text-primary">Bluetooth: ${data.data.others.Bluetooth}</h6>
          <h6 class="text-primary">GPS: ${data.data.others.GPS}</h6>
          <h6 class="text-primary">NFC: ${data.data.others.NFC}</h6>
          <h6 class="text-primary">Radio: ${data.data.others.Radio}</h6>
          <h6 class="text-primary">USB: ${data.data.others.USB}</h6>
      </ul>          
      </h5>
     </div>
    ` ;
    }
   
    
    
}