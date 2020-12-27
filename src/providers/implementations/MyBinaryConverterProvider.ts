import { IDecimalConverterProvider } from "../IDecimalConverterProvider";
export class MyBinaryConverterProvider implements IDecimalConverterProvider {
  async isBinary(content: string): Promise<boolean> {
    const isnum = /^[0-1]+$/.test(content);
    if (isnum) {
      return true;
    }
    return false;
  }

  async convertToDecimal(content: string): Promise<number> {
    const decimal = parseInt(content, 2);
    return decimal;
  }
}
