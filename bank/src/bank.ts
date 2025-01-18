// Indictes the type for all bank accounts in the bank
interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
  } 
  
  /**
  * Bank class that manages all bank accounts in the bank
  */
  export default class Bank {
    // Array to store all bank accounts in the bank 
    private accounts: BankAccount[] = [];
  
    /**
     * Method to find a bank account in the bank
     * @param {string} accountNumber Account number of the bank account to find
     * @returns Bank account if found, undefined otherwise
     */
    private findAccount(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(account => account.accountNumber === accountNumber);
    }
  
    /**
     * creates a new account with a unique account number
     * @param name -- name of the customer
     * @param age -- age of the customer
     * @param accountNumber -- account number of the customer
     * @returns BankAccount -- the created account
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const isAccExists = this.findAccount(accountNumber);
        if (isAccExists) {
            throw new Error("Account already exists");
        }
        const account: BankAccount = {
            name,
            age,
            accountNumber,
            balance: 0
        };
        this.accounts.push(account);
        return account;
    }
  
    /**
     * deposits money given an amount and account number
     * @param depositAmount -- amount of money to deposit
     * @param accountNumber -- account number
     */
    public deposit(depositAmount: number, accountNumber: string): void {
      if (depositAmount <= 0) {
          throw new Error("Deposit must be greater than zero");
      }
      const account = this.findAccount(accountNumber);
      if (!account) {
          throw new Error("Account does not exist");
      }
      account.balance += depositAmount;
    }
  
    /**
     * Withdraws money given an amount and account number
     * @param withdrawAmount -- amount of money to withdraw
     * @param accountNumber -- account number
     */
    public withdraw(withdrawAmount: number, accountNumber: string): void {
      if (withdrawAmount <= 0) {
        throw new Error("Withdrawal amount must be greater than zero");
      }
      const account = this.findAccount(accountNumber);
      if (!account) {
        throw new Error("Account does not exist");
      }
      if (account.balance < withdrawAmount) {
        throw new Error("Insufficient funds");
      }
      account.balance -= withdrawAmount;
    }
  
    /**
     * Checks the balance of an account
     * @param accountNumber - account number
     * @returns account balance
     */
    public balanceCheck(accountNumber: string): number {
      const account = this.findAccount(accountNumber);
      if (!account) {
          throw new Error("Account does not exist");
      }
      return account.balance;
    }
  }