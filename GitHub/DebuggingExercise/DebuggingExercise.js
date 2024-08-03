const accounts = [
  { id: 1, owner: "Alice", balance: 500 },
  { id: 2, owner: "Bob", balance: 300 },
];

function getAccountById(id) {
  for (const account of accounts) {
    if (account.id == id) {
      return account;
    }
  }
}

//console.log(getAccountById(1))// Example usage)

function createAccount(newAccountId, newAccountOwner) {
  for (const account of accounts) {
    if (account.id === newAccountId || account.owner === newAccountOwner) {
      // Check if account ID or owner already exists
      throw new Error("Account already exists.");
    } else if (newAccountId < 1 || typeof newAccountId !== "number") {
      // Check if account ID is valid
      throw new Error("Invalid account ID.");
    } else if (
      typeof newAccountOwner !== "string" ||
      !/[a-zA-Z]/.test(newAccountOwner) ||
      newAccountOwner.length < 1
    ) {
      // Check if owner name is valid
      throw new Error("Invalid owner name.");
    } else {
      accounts.push({
        id: newAccountId,
        owner: newAccountOwner,
        balance: 0,
      });
      console.log("Account created successfully.");
      return;
    }
  }
}
//createAccount(1, "Alice");
//createAccount(2, "John");
//createAccount(3, "Alice");
//createAccount(-3, "Charlie");
//createAccount(3, ["Charlie"]);
//createAccount (4, " ");

createAccount(3, "John"); //New account
//Example usage

function depositMoney(accountId, amount) {
  const account = getAccountById(accountId);

  if (!account) {
    // Check if account exists
    throw new Error("Account not found");
  } else if (amount <= 0 || typeof amount !== "number") {
    // Check if deposit amount is valid
    throw new Error("Invalid deposit amount.");
  } else if (!isFinite(amount)) {
    throw new Error("Nice try.");
  } else {
    // Deposit money into account
    account.balance += amount;
    console.log(
      `Deposited ${amount} into account ${accountId}. New balance: ${account.balance}`
    );
    return account.owner, account.balance;
  }
}

//depositMoney(1, "300");
//depositMoney(1, -300)
//depositMoney(1, 0)
//depositMoney(1, Infinity)

//depositMoney(3, 100);

//depositMoney(4, 100)

function withdrawMoney(accountId, amount) {
  const account = getAccountById(accountId);

  if (!account) {
    throw new Error("Account not found.");
  }

  if (!Number.isFinite(amount)) {
    // Check if withdrawal amount is valid
    throw new Error(
      "Invalid value for withdrawal amount: The amount must be a finite number."
    );
  } else if (amount > account.balance) {
    // Check if withdrawal amount is valid
    throw new Error("Insufficient funds.");
  } else if (amount <= 0) {
    // Check if withdrawal amount is valid
    throw new Error("Invalid withdrawal amount.");
  } else {
    // Withdraw money from account
    account.balance -= amount;
    console.log(
      `Withdrew ${amount} from account ${accountId}. New balance: ${account.balance}`
    );
    return account.balance;
  }
}
//withdrawMoney(1, -100);
//withdrawMoney(1, 0)
//withdrawMoney(1, 501)
withdrawMoney(1, 100);

function transferMoney(fromAccountId, toAccountId, amount) {
  const fromAccount = getAccountById(fromAccountId);
  const toAccount = getAccountById(toAccountId);

  if (!fromAccount) { // Check if source account exists
    throw new Error("Source account not found.");
  } else if (!toAccount) { // Check if destination account exists
    throw new Error("Destination account not found.");
  } else if (amount > fromAccount.balance) { // Check if transfer amount is valid
    throw new Error("Insufficient funds.");
  } else if ( // Check if transfer amount is valid
    !Number.isFinite(amount) ||
    amount <= 0 ||
    typeof amount !== "number"
  ) {
    throw new Error(
      "Invalid value for transfer amount: The amount must be a positive finite number."
    );
  } else { // Transfer money from source to destination
    toAccount.balance += amount;
    fromAccount.balance -= amount;
    console.log(
      `Transferred ${amount} from account ${fromAccountId} to account ${toAccountId}. New account ${fromAccountId} balance: ${fromAccount.balance}, New account ${toAccountId} balance: ${toAccount.balance}`
    );
  }
}
//transferMoney(1, 4, 100);

//transferMoney(1, 2, 501);

transferMoney(1, 2, 100);
