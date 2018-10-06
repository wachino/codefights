function growingPlant(upSpeed, downSpeed, desiredHeight) {
    var g = upSpeed - downSpeed;
    return Math.max(0,Math.ceil((desiredHeight-upSpeed)/g)) +1
}
