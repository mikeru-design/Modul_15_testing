import { convertPLNToUSD } from './../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toEqual('$0.29');
    expect(convertPLNToUSD(2)).toEqual('$0.57');
    expect(convertPLNToUSD(20)).toEqual('$5.71');
    expect(convertPLNToUSD(12)).toEqual('$3.43');
  });
  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('5')).toBeNaN();
    expect(convertPLNToUSD('abc')).toBeNaN();
    expect(convertPLNToUSD("O")).toBeNaN();
    expect(convertPLNToUSD("0")).toBeNaN();
    expect(convertPLNToUSD("&")).toBeNaN();
    expect(convertPLNToUSD("()")).toBeNaN();
    expect(convertPLNToUSD('-521')).toBeNaN();
  });
  it('should return NaN when input is empty', () => {
    expect(convertPLNToUSD()).toBeNaN();
  });
  it('should return error when input is not text or a number', () => {
    expect(convertPLNToUSD([])).toEqual('Error');
    expect(convertPLNToUSD({})).toEqual('Error');
    expect(convertPLNToUSD(null)).toEqual('Error');
    expect(convertPLNToUSD(function(){})).toEqual('Error');
  });
  it('should return $0.00 when input is < 0', () => {
    expect(convertPLNToUSD(-1)).toEqual('$0.00');
    expect(convertPLNToUSD(-10)).toEqual('$0.00');
    expect(convertPLNToUSD(-53870)).toEqual('$0.00');
    expect(convertPLNToUSD(-0.0001)).toEqual('$0.00');
  });
});
