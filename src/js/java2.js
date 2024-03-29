window.addEventListener('load', function () {
let saveDateObject_deserialized = JSON.parse(localStorage.getItem("saveDateObject"));
let saveDataTheme_deserialized = JSON.parse(localStorage.getItem("saveDataTheme"));

    //write date
    document.documentElement.setAttribute('data-theme',saveDataTheme_deserialized);

    document.getElementById("flag").src = saveDateObject_deserialized.flag;
    document.getElementById("nameOfState").innerHTML = saveDateObject_deserialized.name;
    document.getElementById("nativeName").innerHTML = saveDateObject_deserialized.native;
    document.getElementById("population").innerHTML = saveDateObject_deserialized.population;
    document.getElementById("region").innerHTML = saveDateObject_deserialized.region;
    document.getElementById("subregion").innerHTML = saveDateObject_deserialized.subRegion;
    document.getElementById("capital").innerHTML = saveDateObject_deserialized.capital;

    document.getElementById("levelDomain").innerHTML = saveDateObject_deserialized.topLevelDomain;
    document.getElementById("currencies").innerHTML = "Code: "+saveDateObject_deserialized.currencies[0].code+", Name: "+saveDateObject_deserialized.currencies[0].name+", Symbol: "+saveDateObject_deserialized.currencies[0].symbol.toUpperCase();
    document.getElementById("langs").innerHTML = saveDateObject_deserialized.language[0].name+", Native Name: "+saveDateObject_deserialized.language[0].nativeName;
    
    document.getElementById("borders").innerHTML = saveDateObject_deserialized.borders; 

});

    let back_btn = document.getElementById("back");
    back_btn.addEventListener('click', function() {
        localStorage.removeItem('saveDateObject');
});   

