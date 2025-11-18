

function getWeekDay(dateObj){
    const shortDays = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    const dayIndex = dateObj.getDay();
    return shortDays[dayIndex];
}

const date = new Date(2012, 0, 3)
alert(`Example for 3 Jan 2012: ${getWeekDay(date)}`);
