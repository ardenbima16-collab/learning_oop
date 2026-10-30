class BankAcount {
    private balance: number

    constructor(initialbalance:number) {
        this.balance = initialbalance
    }

    deposit(amount:number) {
        if (amount > 0) {
            this.balance += amount ;
            console.log(` berhasil setor ${amount} saldo saat ini ${this.balance}`);
            
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

const MyAccount = new BankAcount (10000);
MyAccount.deposit (5000);
console.log("cek saldo", MyAccount.getBalance());
