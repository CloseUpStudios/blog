

export default function FormatDate({ date, withTime=false }) {
    date = new Date(date);
    const dateMonth = () => {
        if(date.getMonth() < 10) {
            return `0${date.getMonth()}`
        } else { return date.getMonth() }
    }
    let dateString = `${date.getDate()}.${dateMonth()}.${date.getFullYear()}`;

    // add time to dateString
    if(withTime) {
        dateString = `${date.getHours()}:${date.getMinutes()}, ${dateString} `;
    }
    return dateString;
}