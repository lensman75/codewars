// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

function formatDuration(seconds) {
    let oneminute = 60;
    let onehour = oneminute * 60;
    let oneday = onehour * 24;
    let oneyear = oneday * 365;

    if (seconds == 0) {
        return 'now';
    }

    let years = Math.floor(seconds / oneyear);
    console.log(years);
    let days = Math.floor((seconds - years * oneyear) / oneday);
    console.log(days);
    let hours = Math.floor((seconds - years * oneyear - days * oneday) / onehour);
    console.log(hours);
    let minutes = Math.floor((seconds - years * oneyear - days * oneday - hours * onehour) / oneminute);
    console.log(minutes);
    let leftseconds = seconds - (years * oneyear + days * oneday + hours * onehour + minutes * oneminute);
    console.log(leftseconds);

    function getYearText() {
        console.log(years);
        if (years == 0) {
            return '';
        } else if (years == 1) {
            return years + ' year';
        } else {
            return years + ' years';
        }
    }

    function getDayText() {
        if (days == 0) {
            return '';
        } else if (days == 1) {
            return days + ' day'
        } else {
            return days + ' days'
        }
    }

    function getHourText(){
        if (hours == 0) {
            return '';
        } else if (hours == 1) {
            return hours + ' hour'
        } else {
            return hours + ' hours'
        }
    }

    function getMinuteText(){
        if (minutes == 0) {
            return '';
        } else if (minutes == 1) {
            return minutes + ' minute';
        } else {
            return minutes + ' minutes';
        }
    }

    function getSecondText(){
        if (leftseconds == 0) {
            return '';
        } else if (leftseconds == 1) {
            return leftseconds + ' second';
        } else {
            return leftseconds + ' seconds';
        }
    }
    let arr = [];
    arr.push(getYearText(),getDayText(),getHourText(),getMinuteText(),getSecondText());
    arr = arr.filter(n => n);

    let arrone = arr.slice(0,arr.length-1);
    let arrtwo = arr[arr.length-1];

    // let answer = arrone.join(', ') + ' and ' + ' ' + arrtwo;
    function getAnswer(){
        if (arr.length == 1) {
            return arrtwo;
        } else {
            return arrone.join(', ') + ' and ' + arrtwo;
        }
    }

    return getAnswer();

}

