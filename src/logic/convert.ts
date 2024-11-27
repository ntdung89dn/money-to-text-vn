import {numberListConstant} from "../constants";

const numberListVn = numberListConstant.number_list_vn;

export function convertDozens(so: number, daydu: boolean): string {
    let chuoi: string = "";
    const chuc: number = Math.floor(so / 10);
    const donvi: number = so % 10;

    if (chuc > 1) {
        chuoi = " " + numberListVn[chuc] + " mươi";
        if (donvi === 1) {
            chuoi += " mốt";
        }
    } else if (chuc === 1) {
        chuoi = " mười";
        if (donvi === 1) {
            chuoi += " một";
        }
    } else if (daydu && donvi > 0) {
        chuoi = " lẻ";
    }

    if (donvi === 5 && chuc > 1) {
        chuoi += " lăm";
    } else if (donvi > 1 || (donvi === 1 && chuc === 0)) {
        chuoi += " " + numberListVn[donvi];
    }
    return chuoi;
}

export function readBlock(so: number, daydu: boolean): string {
    let chuoi: string = "";
    const tram: number = Math.floor(so / 100);
    so = so % 100;

    if (daydu || tram > 0) {
        chuoi = " " + numberListVn[tram] + " trăm";
        chuoi += convertDozens(so, true);
    } else {
        chuoi = convertDozens(so, false);
    }
    return chuoi;
}

export function convertMilions(so: number, daydu: boolean): string {
    let chuoi: string = "";
    const trieu: number = Math.floor(so / 1000000);
    so = so % 1000000;

    if (trieu > 0) {
        chuoi = readBlock(trieu, daydu) + " triệu";
        daydu = true;
    }
    const nghin: number = Math.floor(so / 1000);
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

export function converMoneyToText(so: number): string {
    if (so === 0) return numberListVn[0];
    let chuoi: string = "";
    let after_prefix: string = "";

    do {
        const ty: number = so % 1000000000;
        so = Math.floor(so / 1000000000);
        if (so > 0) {
            chuoi = `${convertMilions(ty, true)}${after_prefix}${chuoi}`;
        } else {
            chuoi = `${convertMilions(ty, false)}${after_prefix}${chuoi}`;
        }
        after_prefix = " tỷ";
    } while (so > 0);
    return chuoi;
}

