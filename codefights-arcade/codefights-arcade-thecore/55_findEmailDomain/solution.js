function findEmailDomain(address) {
  return /@([a-zA-Z0-9.\-]+)$/.exec(address)[1];
}
