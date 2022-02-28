const loadPhones = () => {
    document.getElementById('phone-container').value = "";
const searchValue = document.getElementById("search-box").value;

const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
//   console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => displayPhone(data.data));
};

const displayPhone = (phones) => {
    for (const phone of phones) {
        const parent = document.getElementById('phone-container')

        const div = document.createElement('div')
        div.classList.add('col-md-4')
        div.innerHTML = `
         <div class="card border my-3 p-5">
          <div class="">
              <img class="w-50" src="${phone.image}" alt="">
          </div>
          <h4 class="text-success my-3">Name: ${phone.phone_name}</h4>
          <h5 class="text-primary my-1">Company: ${phone.brand}</h5>
          <button onclick="loadDetails()" class="w-50 mx-auto btn btn-primary my-3">More Details</button>
          </div>
          `;
        parent.appendChild(div)
    }    
}