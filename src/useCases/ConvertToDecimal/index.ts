import { ConvertToDecimalController } from "./ConvertToDecimalController";
import { ConverToDecimalUseCase } from "./ConvertToDecimalUseCase";
import { MyBinaryConverterProvider } from "../../providers/implementations/MyBinaryConverterProvider";

const myBinaryConverterProvider = new MyBinaryConverterProvider();

const convertToDecimalUseCase = new ConverToDecimalUseCase(
  myBinaryConverterProvider
);

const convertToDecimalController = new ConvertToDecimalController(
  convertToDecimalUseCase
);

export { convertToDecimalUseCase, convertToDecimalController };
