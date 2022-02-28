const loadPhones = () => {
    document.getElementById('phone-container').innerHTML = "";
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

        const div = document.createElement('div')
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
}
const loadDetails = id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
//    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => displayDetails(data));
}

const displayDetails = (infos) => {
    infos.forEach(info => {
        const parent2 = document.getElementById('details-container')

        const div2 = document.createElement('div')
        div2.classList.add('col-md-4')
        div2.innerHTML = `
         <div class="card border my-3 p-5">
          <div class="">
              <img class="w-50" src="${info.image}" alt="">
          </div>
          <h4 class="text-success my-3">Name: ${info.phone_name}</h4>
          <h5 class="text-primary my-1">Company: ${info.brand}</h5>
          <button onclick="loadDetails('${info.mainFeatures.storage}')" class="w-50 mx-auto btn btn-primary my-3">More Details</button>
          </div>
          `;
        parent2.appendChild(div2)
    });        
}