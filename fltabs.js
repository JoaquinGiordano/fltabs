let tabs = 0;
let sptabs = 0;
let current_tab_id = null;
class FLtabs{

    constructor(){
       
    }

    start(data){
        document.querySelector(data.container).innerHTML =`
        <ul id="tabs_top"></ul>
        `
    }

    addTab(data = {closeButton: true}){

        if(data.closeButton != false){
            document.querySelector('#tabs_top').innerHTML += `<li class="tab_label" onclick="FLtabs.hideTabs(); this.classList.add('active'); document.getElementsByClassName('tab_container')[${tabs}].style.display = 'block'; current_tab_id = ${tabs};" ><p >${data.title} </p><p class="tab_close_button" onclick="FLtabs.removeTab(${tabs})">x</p></li>`
        }else{
            document.querySelector('#tabs_top').innerHTML += `<li class="tab_label" onclick="FLtabs.hideTabs(); this.classList.add('active'); document.getElementsByClassName('tab_container')[${tabs}].style.display = 'block'; current_tab_id = ${tabs};" ><p >${data.title} </p></li>`
        }
        document.querySelector(data.container).innerHTML += `<div class="tab_container">${data.content}</div>`
        tabs++;
        sptabs++;
    }

    
    removeTab(id){
        console.log(id);
        document.getElementsByClassName('tab_label')[id].style.display = "none";
        document.getElementsByClassName('tab_container')[id].style.display = "none";
        document.getElementsByClassName('tab_container')[id].innerHTML = "";
        sptabs--;
    }

    changeActualTab(id){

        if(id <= tabs - 1){
            FLtabs.hideTabs();
            document.getElementsByClassName('tab_container')[id].style.display = "block";
            current_tab_id = id;
        }else{
            console.error('That tab does not exist')
        }
        
    }

    getTabsCount(){
        return sptabs;
    }
    
    getActualTabId(){
        return current_tab_id;
    }

    static hideTabs(){
        let tabs_count = tabs - 1;
        for(var i = 0; i <= tabs_count; i++){
            document.getElementsByClassName('tab_container')[i].style.display = 'none';
            document.getElementsByClassName('tab_label')[i].classList.remove('active');
        }
    }

       static removeTab(id){
        console.log(id);
        document.getElementsByClassName('tab_label')[id].style.display = "none";
        document.getElementsByClassName('tab_container')[id].style.display = "none";
        document.getElementsByClassName('tab_container')[id].innerHTML = "";
        sptabs--;
    }


}


