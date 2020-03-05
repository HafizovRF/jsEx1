'use strict';

let bStart = document.getElementById('start'),
    bv = document.querySelector('.budget-value'),
    dbv = document.querySelector('.daybudget-value'),
    lv = document.querySelector('.level-value'),
    ev = document.querySelector('.expenses-value'),
    oev = document.querySelector('.optionalexpenses-value'),
    iv = document.querySelector('.income-value'),
    msv = document.querySelector('.monthsavings-value'),
    ysv = document.querySelector('.yearsavings-value');

let exItems = document.querySelectorAll('input.expenses-item'),
    inChooseIncome = document.querySelector('input.choose-income'),
    btnExpenseItem = document.querySelector('button.expenses-item-btn'),
    btnOptExpense = document.querySelector('button.optionalexpenses-btn'),
    btnCountBdg = document.querySelector('button.count-budget-btn'),
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



let appData = {
    budget: 0,
    timeData: '2020-03-31',
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,

    getNumberPrompt: function (description, val, tryCount = 10) {
        var NumberStr = prompt(description, String(val));

        for (let i = 0; i < tryCount; i++) {
            let newval = parseInt(NumberStr, 10);
            if (!isNaN(newval)) {
                return (newval);
            }
            NumberStr = prompt('Не получилось распознать числовое значение.  ' + 'Попытка №' + String(i + 2) + '. ' + description, String(val));
        }
        return (null);
    },
    getDatePrompt: function (description, val, tryCount = 10) {
        let timeStr = prompt(description, String(val));
        for (let i = 0; i < tryCount; i++) {
            let newval = new Date(timeStr);
            if (newval != null) {
                return (newval);
            }
            timeStr = prompt('Не получилось распознать дату. Попытка №' + String(i + 2) + '. ' + description, String(val));
        }
        return (1);
    },
    calcBudget1day: function(){
        this.budgetPerDay = (this.budget / 30);
        return this.budgetPerDay;
    },
    initdata: function() {
        this.budget = this.getNumberPrompt('Ваш бюджет в месяц', '10000', 10);
        this.timeData = this.getDatePrompt('Введите дату в формате YYYY-MM-DD', '2020-02-21', 10);
        this.calcBudget1day();
    },
    chooseExpenses:function(){
        let finSt = ['Девченки', 'Печеньки'];
        for (let i = 0; i < 2; i++) {
            let stName = prompt('Введите обязательную статью расходов в этом месяце', finSt[i]);
            let stVal = this.getNumberPrompt('Во сколько обойдется?', 100, 10);
            this.expenses[stName] = stVal;
        }
    },
    printExpensesPerDay: function(){
        let strMes = this.budgetPerDay;
        for (const key in this.expenses) {
            if (this.expenses.hasOwnProperty(key)) {
                const element = this.expenses[key];
                strMes = strMes + '   [' + key + ']: ' + (element / 30).toFixed(2) + '\n';
            }
        }
        console.log(strMes);
    }
};




bStart.addEventListener('click', function(event){
    appData.initdata();
    bv.textContent = appData.budget;
    dbv.textContent = appData.budgetPerDay.toFixed(2);
    yvInput.value = appData.timeData.getFullYear();
    mvInput.value = appData.timeData.getMonth()+1;
    dvInput.value = appData.timeData.getDate();

    btnExpenseItem.disabled = false;
    btnOptExpense.disabled = false;
    btnCountBdg.disabled = false;

});

btnExpenseItem.addEventListener('click', function(event){
    for (let i = 0; i < 2; i++) {
        let stName = exItems[i*2].value;
        let stVal = +exItems[i*2+1].value;
        appData.expenses[stName] = stVal;
    }
    let exps = '',
        sum = 0;
    for (let key in appData.expenses){
        if (exps!='') exps += ', ';
        exps += key;
        sum += +appData.expenses[key];
    }
    lv.textContent = exps;
    ev.textContent = ''+ sum.toFixed(1)+': '+exps;
});

btnOptExpense.addEventListener('click', function(event){
    let optEIStr = '';
    for (let item of optExpItems){
        if(optEIStr!='') optEIStr+=', ';
        optEIStr+= item.value;
    }
    oev.textContent = optEIStr;
});

btnCountBdg.addEventListener('click', function(event){
    let exps = '',
        sum = 0;
    for (let key in appData.expenses){
        sum += +appData.expenses[key];
    }

    dbv.textContent = ''+(sum / 30).toFixed(1) + ' / ' + ((appData.budget)/30).toFixed(1) 
        + ' ('+ ((appData.budget-sum)/30).toFixed(1)+ ')';
 
});

inChooseIncome.addEventListener('input', function(event){
    iv.textContent = inChooseIncome.value.split(',');
});

incomeChB.addEventListener('change', function(event){
    UpdateSavingsPeriod();
});

sumInput.addEventListener('change', function(event){
    UpdateSavingsPeriod();
});

percentInput.addEventListener('change', function(event){
    UpdateSavingsPeriod();
});

function UpdateSavingsPeriod(){
    appData.savings = incomeChB.checked;
    appData.savingPercent = +percentInput.value;
    appData.savingSum = +sumInput.value;
    if(appData.savings){
        ysv.textContent = (appData.savingSum * appData.savingPercent / 100).toFixed(2);
        msv.textContent = ((appData.savingSum * appData.savingPercent / 100) / 12).toFixed(2);
    } else {
        ysv.textContent = '--';
        msv.textContent = '--';
    }
}


document.body.onload = function(event){
    btnExpenseItem.disabled = true;
    btnOptExpense.disabled = true;
    btnCountBdg.disabled = true;
    incomeChB.checked = false;
};