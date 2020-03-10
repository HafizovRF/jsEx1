
window.addEventListener('DOMContentLoaded', function(event){
    'use strict';

    let tabControl = document.querySelector('.info'),
        tabHead = document.querySelector('.info-header'),
        tabBtns = document.querySelectorAll('.info-header-tab'),
        tabs = document.querySelectorAll('.info-tabcontent');

    function activateTab(ind){
        for(let i=0; i<tabs.length; i++){
            if(i==ind){
                if(!tabs[i].classList.contains('show')){ 
                    tabs[i].classList.add('show');
                    tabs[i].classList.remove('hide');
                }
            } else {                
                if(!tabs[i].classList.contains('hide')) {
                    tabs[i].classList.remove('show');
                    tabs[i].classList.add('hide');
                }
            }
        }
    }
    tabHead.addEventListener('click', function(event){
        let target =event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(let i = 0; i<tabBtns.length; i++){
                if (tabBtns[i]==target){
                    activateTab(i);
                    break;
                }
            }
        }
    });

    activateTab(0);
});