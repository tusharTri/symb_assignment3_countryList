let countries = [];
let insertdatafromAPI=document.getElementById('box');
function startLoadingAPI()
{
   
    fetch('https://restcountries.com/v3.1/all').then((apidata)=>{
        console.log(apidata);
        return apidata.json();
})
.then((actualdata)=>{
    console.log(actualdata);
    let str="";
    for( let country in actualdata){
    let str1 = `<div class="row my-1 mx-1  border border-dark rounded">
            <div class="col-6 my-3 country-img">
                <img src="${actualdata[country].flags.svg}" class=" col-12 mx-0 px-0" >
            </div>
            <div class="col-6 mt-3 country-info">
                <h5>"${actualdata[country].name.official}"</h5>
                <p><strong>Currency: </strong>""</p>
                <p><strong>Current Date and Time: </strong>1234567876</p>
                <button type="button" class="btn col-6 show-map btn-outline-primary">Show Map</button>
                <button type="button" class="btn col-5 country-details btn-outline-primary">Details</button>
            
            </div>
        </div>
            `; 
            str+=str1;
    }
    insertdatafromAPI.innerHTML=str;

})
.catch((error)=>{
    console.log('$(error)');

})
}

function search(){
    let input=document.getElementById('search1').value.toUpperCase();
    console.log(input);
    let resultdata=actualdata.filter((country)=>{
        return country.name.toUpperCase().startsWith(input);
    });
    console.log(resultdata);
    appendata(resultdata);
    
}
