import InputView from './Views/InputView.js';
import Validator from '../utils/Validator.js';
import User from './User.js';
import OutputView from './Views/OutputView.js';

class LottoController {
  #user;

  async play() {
    await this.readPurchaseAmount();
    await this.readMainNumber();
  }

  async readPurchaseAmount() {
    const purchaseAmount = await InputView.readPurchaseAmount();
    this.handlePurchaseAmount(purchaseAmount);
  }

  handlePurchaseAmount(purchaseAmount) {
    if (!Validator.validatePurchaseAmount(purchaseAmount)) return this.readPurchaseAmount();
    this.#user = new User(purchaseAmount);
    return this.printResult(purchaseAmount);
  }

  printResult(purchaseAmount) {
    OutputView.printQuantity(purchaseAmount);
    OutputView.printLottoString(this.#user);
  }

  async readMainNumber() {
    const mainNumberArray = await InputView.readMainNumber();
    this.handleMainNumber(mainNumberArray);
  }

  handleMainNumber(mainNumberArray) {
    if (!Validator.validateLottoNumbers(mainNumberArray)) return this.readMainNumber();
    OutputView.printBlank();
  }
}

export default LottoController;
