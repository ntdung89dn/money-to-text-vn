"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDozens = convertDozens;
exports.readBlock = readBlock;
exports.convertMilions = convertMilions;
exports.converMoneyToText = converMoneyToText;
const constants_1 = require("../constants");
const numberListVn = constants_1.numberListConstant.number_list_vn;
function convertDozens(so, daydu) {
    let chuoi = "";
    const chuc = Math.floor(so / 10);
    const donvi = so % 10;
    if (chuc > 1) {
        chuoi = " " + numberListVn[chuc] + " mươi";
        if (donvi === 1) {
            chuoi += " mốt";
        }
    }
    else if (chuc === 1) {
        chuoi = " mười";
        if (donvi === 1) {
            chuoi += " một";
        }
    }
    else if (daydu && donvi > 0) {
        chuoi = " lẻ";
    }
    if (donvi === 5 && chuc > 1) {
        chuoi += " lăm";
    }
    else if (donvi > 1 || (donvi === 1 && chuc === 0)) {
        chuoi += " " + numberListVn[donvi];
    }
    return chuoi;
}
function readBlock(so, daydu) {
    let chuoi = "";
    const tram = Math.floor(so / 100);
    so = so % 100;
    if (daydu || tram > 0) {
        chuoi = " " + numberListVn[tram] + " trăm";
        chuoi += convertDozens(so, true);
    }
    else {
        chuoi = convertDozens(so, false);
    }
    return chuoi;
}
function convertMilions(so, daydu) {
    let chuoi = "";
    const trieu = Math.floor(so / 1000000);
    so = so % 1000000;
    if (trieu > 0) {
        chuoi = readBlock(trieu, daydu) + " triệu";
        daydu = true;
    }
    const nghin = Math.floor(so / 1000);
    so = so % 1000;
    if (nghin > 0) {
        chuoi += readBlock(nghin, daydu) + " nghìn";
        daydu = true;
    }
    if (so > 0) {
        chuoi += readBlock(so, daydu);
    }
    return chuoi;
}
function converMoneyToText(so) {
    if (so === 0)
        return numberListVn[0];
    let chuoi = "";
    let after_prefix = "";
    do {
        const ty = so % 1000000000;
        so = Math.floor(so / 1000000000);
        if (so > 0) {
            chuoi = `${convertMilions(ty, true)}${after_prefix}${chuoi}`;
        }
        else {
            chuoi = `${convertMilions(ty, false)}${after_prefix}${chuoi}`;
        }
        after_prefix = " tỷ";
    } while (so > 0);
    return chuoi;
}
