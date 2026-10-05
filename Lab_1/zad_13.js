function hexStringToRGB(hexString) {
    hexString = hexString.replace('#', '')
    let mas = hexString.match(/.{1,2}/g)
    let rgb = [];
    for (let i = 0; i < mas.length; i++) {
        rgb[i] = parseInt(mas[i], 16);
    }
    return { r: rgb[0], g: rgb[1], b: rgb[2] };
}