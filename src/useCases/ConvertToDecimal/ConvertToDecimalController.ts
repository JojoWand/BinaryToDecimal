import { ConverToDecimalUseCase } from "./ConvertToDecimalUseCase";
import { NextApiRequest, NextApiResponse } from "next";

export class ConvertToDecimalController {
  constructor(private convertToDecimalUseCase: ConverToDecimalUseCase) {}

  async handle(
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<NextApiResponse> {
    const { content } = req.body;
    try {
      const decimal = await this.convertToDecimalUseCase.execute({ content });
      res.statusCode = 201;
      res.send(decimal);
      return res;
    } catch (error) {
      res.statusCode = 400;
      res.json({ message: error.message });
      return res;
    }
  }
}
