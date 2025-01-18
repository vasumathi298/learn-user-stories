import Bank from "../src/bank";

//setup
const bank = new Bank();
const account = bank.createAccount("John Doe", 29, "2938298");

//scenario 1: successful account creation
if(account.accountNumber === "2938298") {
    console.log("Scenario 1 passed");
}
else {
    console.log("Scenario 1 failed");
}

//scenario 2: account already exists
try {
    bank.createAccount("John Doe", 29, "2938298");
    console.log("Scenario 2 failed");
}
catch(_) {
    console.log("Scenario 2 passed");
}

// scenario 3: successful deposit
try {
  bank.deposit(100, "2938298");
  console.log("Scenario 3 passed");
} catch (_) {
  console.log("Scenario 3 failed");
}

// scenario 4: negative deposit
try {
  bank.deposit(-10, "2938298");
  console.log("Scenario 4 failed");
} catch (_) {
  console.log("Scenario 4 passed");
}

// scenario 5: non-existant account
try {
  bank.deposit(100, "1234567");
  console.log("Scenario 5 failed");
} catch (_) {
  console.log("Scenario 5 passed");
}

// scenario 6: successfully withdraw
try {
  bank.withdraw(10, '2938298');
  console.log("Scenario 6 passed");
} catch (_) {
  console.log("Scenario 6 failed");
}

// scenario 7: insufficient funds
try {
  bank.withdraw(999, '2938298');
  console.log("Scenario 7 failed");
} catch (_) {
  console.log("Scenario 7 passed");
}

// scenario 8: invalid withdrawl amount
try {
  bank.withdraw(-5, '2938298');
  console.log("Scenario 8 failed");
} catch (_) {
  console.log("Scenario 8 passed");
}

// scenario 9: successful balance check
try {
    const bal = bank.balanceCheck("2938298");
    if (bal == account.balance) {
        console.log("Scenario 9 passed");
    } else {
        console.log("Scenario 9 failed");
    }
} catch (_) {
    console.log("Scenario 9 failed");
}

// scenario 10: invalid account
try {
    bank.balanceCheck("1234567");
    console.log("Scenario 10 failed");
} catch (_) {
    console.log("Scenario 10 passed");
}