import Head from "next/head";
import { Component, SyntheticEvent } from "react";
import { convertToDecimalUseCase } from "../src/useCases/ConvertToDecimal";

export default class Home extends Component<
  {},
  { decimalValue?: string; message: string }
> {
  constructor(props) {
    super(props);
    this.state = {
      decimalValue: null,
      message: ""
    };
  }

  onFormSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  onInputChange = async (event) => {
    event.preventDefault();
    if (event.target.name !== "binaryValue") {
      return;
    }
    try {
      const binaryValue = event.target.value;
      const decimalValue = await convertToDecimalUseCase.execute({
        content: binaryValue
      });
      this.setState({ decimalValue: decimalValue.toString() });
    } catch (error) {
      this.setState({ decimalValue: null });
      this.setState({ message: error.message });
    }
  };

  render() {
    const { decimalValue, message } = this.state;
    return (
      <div>
        <Head>
          <title>Binary To Devimal</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <label className="Title">
            Binary Valor <br />
            <input
              className="Normal-Input"
              type="text"
              name="binaryValue"
              onChange={this.onInputChange}
            />
          </label>
          <h2 className="Binary-Response">{decimalValue || message}</h2>
        </main>

        <footer></footer>
      </div>
    );
  }
}

// export default function Home() {
//   function handleInputChange(event) {
//     this.setState;
//   }
//   return (
//     <div>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <form>
//           <input type="text" />
//         </form>
//       </main>

//       <footer></footer>
//     </div>
//   );
// }
