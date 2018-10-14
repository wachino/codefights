function findEmailDomain(address) {
    return /^.*@([.\w\d]+)$/.exec(address)[1];
}
