import { IDecimalConverterProvider } from "../../providers/IDecimalConverterProvider";
import { IConvertToDecimalDTO } from "./ConvertToDecimalDTO";

export class ConverToDecimalUseCase {
  constructor(private convertProvider: IDecimalConverterProvider) {}
  async execute(data: IConvertToDecimalDTO) {
    const isBinary = await this.convertProvider.isBinary(data.content);
    if (!isBinary) {
      throw new Error("Content its not a binary number!");
    }

    const decimal = await this.convertProvider.convertToDecimal(data.content);

    return decimal;
  }
}
