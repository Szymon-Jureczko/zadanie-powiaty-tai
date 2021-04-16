const set = new Set();
let init = {
    init: function(){
        document.getElementById('setBtn').addEventListener('click', init.action);
    }, 
    action: function(e){

        e.preventDefault();

        let enp = document.getElementById('powiatyIn').value;

        set.add(enp);

        entLst = document.getElementById('entLst');

        dLst = document.getElementById('dLst')
       
        dLst.innerHTML = "";

        entLst.innerHTML = "";


        for(const el of set){
            entLst.innerHTML += "<li>" + el + "</li>";
            
            dLst.innerHTML += "<option>" + el + "</option>";
        }
    }

}

window.addEventListener('load', init.init, false);