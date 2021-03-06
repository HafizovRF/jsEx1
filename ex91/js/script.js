'use strict';

class Options {
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width; 
        this.bg = bg;
        this.fontSize =fontSize;
        this.textAlign = textAlign; 
    }

    createDiv(elmParent, divText){
        let mDiv = document.createElement('div');
        elmParent.appendChild(mDiv);
        mDiv.textContent = divText;
        /*mDiv.style.width = this.width+'px';
        mDiv.style.height = this.height+'px';
        mDiv.style.background = this.bg;
        mDiv.style.fontSize = this.fontSize+'px';
        mDiv.style.textAlign = this.textAlign;*/

        let param = `height:${this.height}px; width:${this.width}px; background:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
		mDiv.style.cssText = param;
        return mDiv;
    }
}


window.addEventListener('DOMContentLoaded', function (event) {
    

    let tabControl = document.querySelector('.info'),
        tabHead = document.querySelector('.info-header'),
        tabBtns = document.querySelectorAll('.info-header-tab'),
        tabs = document.querySelectorAll('.info-tabcontent');

    function activateTab(ind) {
        for (let i = 0; i < tabs.length; i++) {
            if (i == ind) {
                if (!tabs[i].classList.contains('show')) {
                    tabs[i].classList.add('show');
                    tabs[i].classList.remove('hide');
                }
            } else {
                if (!tabs[i].classList.contains('hide')) {
                    tabs[i].classList.remove('show');
                    tabs[i].classList.add('hide');
                }
            }
        }
    }
    tabHead.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tabBtns.length; i++) {
                if (tabBtns[i] == target) {
                    activateTab(i);
                    break;
                }
            }
        }
    });


    function getTimerData(deadline) {
        let ts = Date.parse(deadline) - new Date();
        return {
            total: ts,
            hours: (Math.floor(ts / (1000 * 60 * 60) % 60)),
            minutes: (Math.floor(ts / (1000 * 60) % 60)),
            seconds: (Math.floor(ts / 1000) % 60)
        };
    }

    function setTimer(id, deadline) {
        let timerElm = document.getElementById(id),
            hours = timerElm.querySelector('.hours'),
            minutes = timerElm.querySelector('.minutes'),
            seconds = timerElm.querySelector('.seconds'),
            hndintervaler = setInterval(updateTimer, 1000);

        function updateTimer() {
            let time = getTimerData(deadline);

            if (time.total < 0) {
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(hndintervaler);
            } else {
                hours.textContent = String(time.hours).padStart(2, 0);
                minutes.textContent = String(time.minutes).padStart(2, 0);
                seconds.textContent = String(time.seconds).padStart(2, 0);
            }
        }

    }


    activateTab(0);

    setTimer('timer', '2020-03-12 21:16:00');

    let overlay = document.querySelector('.overlay'),
        popClose = overlay.querySelector('.popup-close'),
        btnMore = document.querySelector('button.more'),
        btnDsrptns = document.querySelectorAll('.description-btn');
    
    
    btnMore.addEventListener('click', function(event){
        showModalOvl.call(this,event);
        
        let options = new Options(150,800,'url(img/slider_2.jpg)',36,'right');
        options.createDiv(tabControl, 'Hallo my frend!');

    });
    
    btnDsrptns.forEach(function(elm){
        elm.addEventListener('click', function(event){
            showModalOvl.call(this,event);
        });
    });

    function showModalOvl(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }
    
    popClose.addEventListener('click', function(event){
        overlay.style.display = 'none';
        btnMore.classList.remove('more-splash');
        for(let elm of btnDsrptns){
            elm.classList.remove('more-splash');
        }
        document.body.style.overflow = '';
    });
});