"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convert_1 = require("../convert");
test('convertDozens: Test hàng chục là 10', () => {
    expect((0, convert_1.convertDozens)(10, true)).toBe(" mười");
});
test('convertDozens: Test hàng chục với số 1 lẻ', () => {
    expect((0, convert_1.convertDozens)(11, true)).toBe(" mười một");
});
test('convertDozens: Test hàng chục với số 1 lẻ và hàng chục > 10 ', () => {
    expect((0, convert_1.convertDozens)(21, true)).toBe(" hai mươi mốt");
});
test('convertDozens: Test hàng chục với số 5 lẻ', () => {
    expect((0, convert_1.convertDozens)(15, true)).toBe(" mười năm");
});
test('convertDozens: Test hàng chục với số 5 lẻ và hàng chục > 10 ', () => {
    expect((0, convert_1.convertDozens)(25, true)).toBe(" hai mươi lăm");
});
test('convertDozens: Test hàng chục với đơn vị là đẩy đủ = 0 và hiển thị đầy đủ ', () => {
    expect((0, convert_1.convertDozens)(20, true)).toBe(" hai mươi");
});
test('convertDozens: Test hàng chục với đơn vị là đẩy đủ = 0 và hiển thị không đầy đủ ', () => {
    expect((0, convert_1.convertDozens)(20, false)).toBe(" hai mươi");
});
test('convertDozens: Test hàng chục với đơn vị là đẩy đủ > 0 và hiển thị đầy đủ ', () => {
    expect((0, convert_1.convertDozens)(5, true)).toBe(" lẻ năm");
});
test('convertDozens: Test hàng chục với đơn vị là đẩy đủ > 0 và hiển thị không đầy đủ ', () => {
    expect((0, convert_1.convertDozens)(5, false)).toBe(" năm");
});
test('readBlock: Test hàng chục với đơn vị là đẩy đủ > 0 và hiển thị không đầy đủ ', () => {
    expect((0, convert_1.convertDozens)(5, false)).toBe(" năm");
});
