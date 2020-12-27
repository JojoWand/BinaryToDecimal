export interface IDecimalConverterProvider {
  isBinary(content: string): Promise<Boolean>;
  convertToDecimal(content: string): Promise<Number>;
}
