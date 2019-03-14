import { Database } from "@arkecosystem/core-interfaces";
import { constants, Transaction } from "@arkecosystem/crypto";
import { TransactionService } from "./transaction";

export class MultiPaymentTransactionService extends TransactionService {
    public getType(): number {
        return constants.TransactionTypes.MultiPayment;
    }

    public canBeApplied(
        transaction: Transaction,
        wallet: Database.IWallet,
        walletManager?: Database.IWalletManager,
    ): boolean {
        return super.canBeApplied(transaction, wallet, walletManager);
    }

    public apply(transaction: Transaction, wallet: Database.IWallet): void {
        return;
    }

    public revert(transaction: Transaction, wallet: Database.IWallet): void {
        return;
    }
}
