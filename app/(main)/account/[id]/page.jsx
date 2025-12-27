
import { getAccountWithTransactions } from '@/actions/account'
import React, { Suspense } from 'react'
import TransactionTable from './_components/transaction-table'
import { BarLoader } from 'react-spinners'
import TransactionChart from './_components/transaction-chart'

const AccountPage = async ({ params }) => {
    const { id } = await params
    const accountData = await getAccountWithTransactions(id)
    // accountData = {
    //   id: 'fed439b6-ee07-4efd-9ae1-32269cc30891',
    //   name: 'Demo',
    //   type: 'SAVINGS',
    //   balance: 2000,
    //   isDefault: true,
    //   userId: '24e29543-c10d-48f9-a5ae-525c52d3c9e2',
    //   createdAt: 2025-11-05T11:43:43.583Z,
    //   updatedAt: 2025-11-05T12:10:52.603Z,
    //   transactions: [],
    //   _count: { transactions: 0 }
    // }


    const { transactions, ...account } = accountData

    return (
        <div className="space-y-8 px-5 md:px-40">
            <div className="flex gap-4 items-end justify-between">
                <div>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight capitalize">
                        {account.name}
                    </h1>
                    <p className="text-muted-foreground">
                        {account.type.charAt(0) + account.type.slice(1).toLowerCase()}{" "}
                        Account
                    </p>
                </div>

                <div className="text-right pb-2">
                    <div className="text-xl sm:text-2xl font-bold">
                        ${parseFloat(account.balance).toFixed(2)}
                    </div>
                    <p className="text-sm text-muted-foreground">
                        {account._count.transactions} Transactions
                    </p>
                </div>
            </div>


            {/* Transaction Chart:  */}
            <Suspense fallback={<BarLoader className='mt-4' width={"100%"} color='#0055ff'></BarLoader>}>
                <TransactionChart transactions={transactions}></TransactionChart>
            </Suspense>


            
            {/* Transactions Table:  */}
            <Suspense fallback={<BarLoader className='mt-4' width={"100%"} color='#0055ff'></BarLoader>}>
                <TransactionTable transactions={transactions}></TransactionTable>
            </Suspense>

        </div>
    )
}

export default AccountPage
