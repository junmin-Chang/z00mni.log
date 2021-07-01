const renderDate =  (dateString) => {
    const date = new Date(dateString);
    const monthName = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
    return `${date.getFullYear()}년 ${monthName[date.getMonth()]} ${date.getDate()}일`;
    
}

export default renderDate