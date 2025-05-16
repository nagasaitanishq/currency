
document.addEventListener("DOMContentLoaded", function() {


    // const countries = Object.keys(countryCode);
    // const selectElement = document.getElementById("select_from");

    // countries.forEach(country => {
    //     let option = document.createElement("option");
    //     option.value = country;
    //     option.textContent = country;
    //     if (country === "United States") option.selected = true; // Set India as default
    //     selectElement.appendChild(option);
    // });


    const countryList = document.getElementById("countryList");


    Object.keys(countryCode).forEach(country => {
      let option = document.createElement("option");
      option.value = country; 
      countryList.appendChild(option);
    });


    
    // const selectElementto = document.getElementById("select_to");

    // countries.forEach(country => {
    //     let option = document.createElement("option");
    //     option.value = country;
    //     option.textContent = country;
    //     if (country === "India") option.selected = true; // Set India as default
    //     selectElementto.appendChild(option);
    // });




});




document.getElementById("select_to").addEventListener("change", function () {

    if(!countryCode[this.value] )
        {
            document.getElementById("toflag").src= null;
            return;
        }
    
    
    document.getElementById("toflag").src = countryCode[this.value]["flag"] ;

});


document.getElementById("select_from").addEventListener("change", function () {

    document.getElementById("fromflag").src = countryCode[this.value]["flag"] ;

});





function findexchange(event)
{
    event.preventDefault(); // Prevent form submission

    let valuedata  = document.getElementById("amount_value").value;
    let selectedToCurrency = document.getElementById("select_to").value;
    let selectedfromCurrency = document.getElementById("select_from").value;

   

    const selectfrom = countryCode[selectedfromCurrency]["currency"];
    const selectto = countryCode[selectedToCurrency]["currency"];



    async function fetchData() {
        try {
          let response = await fetch(`https://v6.exchangerate-api.com/v6/ac3db9d4c3ea48626dd09889/latest/${selectfrom}`);
          let data = await response.json();
          console.log(data["conversion_rates"][`${selectto}`]);

          let final_value = data["conversion_rates"][`${selectto}`]*valuedata;

          document.getElementById("After").innerHTML = `<p>${valuedata} ${selectfrom} = ${final_value} ${selectto}</p>`



        } catch (error) {
          console.error('Error:', error);
        }
      }
      fetchData();



}