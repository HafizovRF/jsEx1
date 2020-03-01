'use strict';

// 1
let money = 0;
let time = '2020-03-31';

function getNumberPrompt(description, val, tryCount = 10) {
    var NumberStr = prompt(description, String(val));

    for (let i = 0; i < tryCount; i++) {
        let newval = parseInt(NumberStr, 10);
        if (!isNaN(newval)) {
            return (newval);
        }
        NumberStr = prompt('Не получилось распознать числовое значение.  '+'Попытка №'+String(i+2)+'. '+description, String(val));
    }
    return (null);
}

function getDatePrompt(description, val, tryCount = 10) {
    let timeStr = prompt(description, String(val));
    for (let i = 0; i < tryCount; i++) {
        let newval = new Date(timeStr);
        if (newval != null) {
            return (newval);
        }
        timeStr = prompt('Не получилось распознать дату. Попытка №'+String(i+2)+'. '+description, String(val));
    }
    return (1);
}

money = getNumberPrompt('Ваш бюджет в месяц', '10000', 10);
time = getDatePrompt('Введите дату в формате YYYY-MM-DD', '2020-02-21', 10);


// 2
let appData ={}
if(money>0 && time!=null){

    appData = {
        budget: money,
        timeData:time,
        expenses:{},
        optionalExpenses:{},
        income:[],
        savings:false
    };

    let finSt=['Девченки', 'Печеньки'];
    for(let i=0; i<2; i++){
        let stName = prompt('Введите обязательную статью расходов в этом месяце', finSt[i]);
        let stVal = getNumberPrompt('Во сколько обойдется?', 100, 10);
        appData.expenses[stName] = stVal;
    }


}


let strMes='Общий бюджет на 1 день: '+String((appData.budget/30).toFixed(2))+'\n';
    
for (const key in appData.expenses) {
    if (appData.expenses.hasOwnProperty(key)) {
        const element = appData.expenses[key];
        strMes = strMes+'   ['+key+']: '+(element/30).toFixed(2)+'\n';
    }
}


alert(strMes);
console.log(strMes);


console.log('money: ' + String(money));
console.log('time: ' + String(time));
console.log('appdata:'+JSON.stringify(appData));
