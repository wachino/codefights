function isIPv4Address(inputString) {
    var arr = inputString.split('.');
    return arr.length === 4 &&
        arr.reduce((acc,el) => acc && /^\d{1,3}$/.test(el) && Number(el) < 256 ,true);
}
