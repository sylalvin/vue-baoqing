// 获取当前时间
const getTodayDate = (format) => {
    let todayDate = '';
    let date = new Date();
    let year = date.getFullYear();
    let month = checkDate(date.getMonth() + 1);
    let day = checkDate(date.getDate());
    if(format) { // 年月日 时分秒
        let hour = checkDate(date.getHours());
        let minute = checkDate(date.getMinutes());
        let second = checkDate(date.getSeconds());
        return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    }
    return year + '-' + month + '-' + day; // 年月日
}

// 日期补零
const checkDate = (date) => {
    if(Number(date) < 10) {
        return '0' + date;
    }
    return date;
}

const checkNull = (check_val, msg) => {
    let val = String(check_val);
    if(val == "" || val == null || val == undefined) {
        return false;
    }
    return true;
}

export {
    getTodayDate,
    checkNull
}
