// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
} 
mondayWork();

function wrapAdjective(param = "*") {
    return function (message = "special") {
        return `You are ${param}${message}${param}!`;
    }
}
wrapAdjective("||")("a star")