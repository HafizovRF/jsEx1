'use strict';

let bStart = document.getElementById('start'),
    bv = document.querySelectorAll('.budget-value'),
    dbv = document.querySelectorAll('.daybudget-value'),
    lv = document.querySelectorAll('.level-value'),
    ev = document.querySelectorAll('.expenses-value'),
    oev = document.querySelectorAll('.optionalexpenses-value'),
    iv = document.querySelectorAll('.income-value'),
    msv = document.querySelectorAll('.monthsavings-value'),
    ysv = document.querySelectorAll('.yearsavings-value');

let exItems = document.querySelectorAll('input.expenses-item'),
    btnCountBdg = document.querySelector('button.count-budget-btn'),
    btnApprove = document.querySelector('button.optionalexpenses-btn'),
    optExpItems = document.querySelectorAll('input.optionalexpenses-item');

let incomeInput = document.getElementById('income'),
    incomeChB = document.getElementById('savings'),
    sumInput = document.getElementById('sum'),
    percentInput = document.getElementById('percent'),
    yvInput = document.querySelector('.year-value'),
    mvInput = document.querySelector('.month-value'),
    dvInput = document.querySelector('.day-value');

let expStatAr = ['девченки', 'печ.'],
    expSumAr = [122.0, 765.0],
    optExpAr = ['aliEpress', 'kino', 'aquapark'];

let r=0;
for (let item of exItems){
    r++;
    if(r%2!=0){
        item.value = expStatAr[Math.floor((r-1)/2)];
    } else {
        item.value = expSumAr[Math.floor((r-1)/2)];
    }
}

for (let ind = 0; ind< optExpItems.length; ind++){
    optExpItems[ind].value = optExpAr[ind];
}

incomeInput.value = 'работа, шабашки, электроника';
incomeChB.value = "on";
sumInput.value = 8500000;
percentInput.value = 30;    

