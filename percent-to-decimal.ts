/**
 * @param { string | number } input the percent value in whole # form to convert to decimal
 * @param { string } outputType either 'string' or 'number'
 * @returns { string | number } the percent represented as a decimal
 */

type Util = string | number

type DecimalFormats = {
  asNumber: number;
  asString: string;
}

class PercentToDecimalUtil {
  decimalFormats!: DecimalFormats
  input!: Util | undefined
  decimalNumber!: number
  decimalString!: string
  output!: Util | null

  constructor (input: Util) {
    if (!input) return
    this.output = null
    this.input = input
    this.decimalFormats = this.convertToDecimal(this.input)
    this.decimalString = this.decimalFormats.asString
    this.decimalNumber = this.decimalFormats.asNumber
  }

  convertToDecimal (input: Util) {
    const stringPercent = this.stringify(input)
    const percentWithoutSymbol = this.removePercentSymbol(stringPercent)
    return this.handleDecimalPoint(percentWithoutSymbol)
  }

  stringify (input: Util) {
    return typeof input === 'number' ? JSON.stringify(input) : input
  }

  removePercentSymbol (percent: string) {
    return percent.indexOf('%') === -1 ? percent : percent.slice(percent.indexOf('%'), 1)
  }

  handleDecimalPoint (percent: string): DecimalFormats {
    const decimalNumber: number = parseFloat((parseFloat(percent) / 100).toFixed(2))
    const decimalString: string = JSON.stringify(decimalNumber)
    return { asNumber: decimalNumber, asString: decimalString }
  }

  get asString () { return this.decimalString }
  get asNumber () { return this.decimalNumber }
  get getDecimalFormats () { return { asNumber: this.decimalNumber, asString: this.decimalString } }
}

export default PercentToDecimalUtil
