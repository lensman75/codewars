// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

function formatDuration(seconds) {
    let oneMinute = 60;
    let oneHour = oneMinute * 60;
    let oneDay = oneHour * 24;
    let oneYear = oneDay * 365;

    if (seconds == 0) {
        return 'now';
    }

    let years = Math.floor(seconds / oneYear);
    let days = Math.floor((seconds - years * oneYear) / oneDay);
    let hours = Math.floor((seconds - years * oneYear - days * oneDay) / oneHour);
    let minutes = Math.floor((seconds - years * oneYear - days * oneDay - hours * oneHour) / oneMinute);
    let leftseconds = seconds - (years * oneYear + days * oneDay + hours * oneHour + minutes * oneMinute);

    function getYearText(years) {
        if (years == 0) {
            return '';
        } else if (years == 1) {
            return years + ' year';
        } else {
            return years + ' years';
        }
    }

    function getDayText(days) {
        if (days == 0) {
            return '';
        } else if (days == 1) {
            return days + ' day'
        } else {
            return days + ' days'
        }
    }

    function getHourText(hours) {
        if (hours == 0) {
            return '';
        } else if (hours == 1) {
            return hours + ' hour'
        } else {
            return hours + ' hours'
        }
    }

    function getMinuteText(minutes) {
        if (minutes == 0) {
            return '';
        } else if (minutes == 1) {
            return minutes + ' minute';
        } else {
            return minutes + ' minutes';
        }
    }

    function getSecondText(leftseconds) {
        if (leftseconds == 0) {
            return '';
        } else if (leftseconds == 1) {
            return leftseconds + ' second';
        } else {
            return leftseconds + ' seconds';
        }
    }
    let arr = [];
    arr.push(getYearText(years), getDayText(days), getHourText(hours), getMinuteText(minutes), getSecondText(leftseconds));
    arr = arr.filter(n => n);

    let arrone = arr.slice(0, arr.length - 1);
    let arrtwo = arr[arr.length - 1];

    if (arr.length == 1) {
        return arrtwo;
    } else {
        return arrone.join(', ') + ' and ' + arrtwo;
    }
}