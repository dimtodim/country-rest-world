window.addEventListener('load', function () {
    let dataTheme = this.document.querySelectorAll('html');

    function saveTheme(dataTheme) {
            dataTheme.forEach(function(dataTheme){

                let saveDataTheme = {
                    theme: dataTheme.getAttribute('data-theme')
                }

                let saveDataTheme_serialized = JSON.stringify(saveDataTheme.theme);
                localStorage.setItem("saveDataTheme", saveDataTheme_serialized);
            })
    
    }

    let saveDataTheme_deserialized = JSON.parse(localStorage.getItem("saveDataTheme"));
    let tema = saveDataTheme_deserialized;

    let clickMe = document.querySelectorAll('.display-card');
    clickMe.forEach(function(hereWeGo, index) {
        
        hereWeGo.addEventListener('click', function() {

                saveDateLocaly(index);

        });
    });


    var checker = document.querySelector('input[name=theme]');
    const icon = document.querySelector('i');
    const mode = document.getElementById('mode');

//save checker state to local storage
    function save(){
        var checkbox = document.getElementById('switch');
        localStorage.setItem('switch', checkbox.checked);
    }
//load checker state
    function load(){    
        var checked = JSON.parse(localStorage.getItem('switch'));
        document.getElementById("switch").checked = checked;
        //console.log("load je: "+tema);
        document.documentElement.setAttribute('data-theme', tema);
        if  (tema === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            mode.innerHTML = 'Light Mode';
            } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            mode.innerHTML = 'Dark Mode';
            }
    }
    
    function wis(){
        location.reload();
        localStorage.clear()
    
    }

    load();

    checker.addEventListener('change', function(){
                
            if  (this.checked) {
                
                document.documentElement.setAttribute('data-theme', 'dark');
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                mode.innerHTML = 'Light Mode';
                save();
                saveTheme(dataTheme);
            } else {

                document.documentElement.setAttribute('data-theme', 'light');
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                mode.innerHTML = 'Dark Mode';
                save();
                saveTheme(dataTheme);
            } 
            
        })

});