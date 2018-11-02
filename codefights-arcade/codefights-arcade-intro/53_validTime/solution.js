function validTime(time) {
    return Number(time.split(':')[0]) < 24 && Number(time.split(':')[1]) < 60
}
