// Indicates the type for all bank accounts in the bank
interface BankAccount {
  customerName: string;
  customerAge: number;
  customerAccountNumber: string;
  accountBalance: number;
} 

/**
* Bank class that manages all bank accounts in the bank
*/
export default class Bank {
  // Array to store all bank accounts in the bank 
  private allAccounts: BankAccount[] = [];

  /**
   * Method to find a bank account in the bank
   * @param {string} customerAccountNumber Account number of the bank account to find
   * @returns Bank account if found, undefined otherwise
   */
  private locateAccount(customerAccountNumber: string): BankAccount | undefined {
      return this.allAccounts.find(account => account.customerAccountNumber === customerAccountNumber);
  }

  /**
   * Creates a new account with a unique account number
   * @param customerName -- name of the customer
   * @param customerAge -- age of the customer
   * @param customerAccountNumber -- account number of the customer
   * @returns BankAccount -- the created account
   */
  public createAccount(customerName: string, customerAge: number, customerAccountNumber: string): BankAccount {
      const accountExists = this.locateAccount(customerAccountNumber);
      if (accountExists) {
          throw new Error("Account already exists");
      }
      const newAccount: BankAccount = {
          customerName,
          customerAge,
          customerAccountNumber,
          accountBalance: 0
      };
      this.allAccounts.push(newAccount);
      return newAccount;
  }

  /**
   * Deposits money given an amount and account number
   * @param amountToDeposit -- amount of money to deposit
   * @param customerAccountNumber -- account number
   */
  public deposit(amountToDeposit: number, customerAccountNumber: string): void {
      if (amountToDeposit <= 0) {
          throw new Error("Deposit must be greater than zero");
      }
      const accountToDeposit = this.locateAccount(customerAccountNumber);
      if (!accountToDeposit) {
          throw new Error("Account does not exist");
      }
      accountToDeposit.accountBalance += amountToDeposit;
  }

  /**
   * Withdraws money given an amount and account number
   * @param amountToWithdraw -- amount of money to withdraw
   * @param customerAccountNumber -- account number
   */
  public withdraw(amountToWithdraw: number, customerAccountNumber: string): void {
      if (amountToWithdraw <= 0) {
          throw new Error("Withdrawal amount must be greater than zero");
      }
      const accountToWithdraw = this.locateAccount(customerAccountNumber);
      if (!accountToWithdraw) {
          throw new Error("Account does not exist");
      }
      if (accountToWithdraw.accountBalance < amountToWithdraw) {
          throw new Error("Insufficient funds");
      }
      accountToWithdraw.accountBalance -= amountToWithdraw;
  }

  /**
   * Checks the balance of an account
   * @param customerAccountNumber - account number
   * @returns account balance
   */
  public balanceCheck(customerAccountNumber: string): number {
      const accountToCheck = this.locateAccount(customerAccountNumber);
      if (!accountToCheck) {
          throw new Error("Account does not exist");
      }
      return accountToCheck.accountBalance;
  }
}
