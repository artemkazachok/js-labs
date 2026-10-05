function ipv4Parser(ip, mask) {
    const ArrIp = ip.split('.');
    const ArrMask = mask.split('.');
    let setblock = [];
    let idhost = [];
    for (let i = 0; i < 4; i++) {
        setblock[i] = ArrIp[i] & ArrMask[i];
        idhost[i] = ArrIp[i] & (255 - ArrMask[i]);
    }
    return [setblock.join('.'), idhost.join('.')];
}