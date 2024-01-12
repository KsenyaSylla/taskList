export function ex1() {
    class BankAccount {
        #balance = 0;
        constructor(balance) {
            if (balance < 0) {
                throw new Error("Отрицательный баланс!");
            }
            this.#balance = balance;
        }

        get balance() {
            return this.#balance;
        }
        set balance(balance) {
            if (balance < 0) {
                throw new Error("Отрицательный баланс!");
            }
            this.#balance = balance;
        }

        deposit(amount) {
            if (amount <= 0) {
                throw new Error("Сумма должна быть больше 0");
            }
            this.#balance += amount;
            return this.#balance;
        }
        withdraw(amount) {
            if (amount <= 0) {
                throw new Error("Сумма для снятия должна быть больше 0");
            }
            if (amount > this.#balance) {
                throw new Error(`Сумма для снятия должна быть меньше суммы на балансе. Вам доступно ${this.#balance}`);
            }
            this.#balance -= amount;
            return this.#balance;
        }
    };

    let account = new BankAccount(500);

    console.log(account.balance);

    account.deposit(300);
    console.log(account.balance);

    account.withdraw(100);
    console.log(account.balance);
}