"use client";

import { useState, useMemo } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { format, subDays, startOfDay, endOfDay } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";


const DATE_RANGES = {
    "7D": { label: "Last 7 Days", days: 7 },
    "1M": { label: "Last Month", days: 30 },
    "3M": { label: "Last 3 Months", days: 90 },
    "6M": { label: "Last 6 Months", days: 180 },
};

const TransactionChart = ({ transactions }) => {
    const [dateRange, setDateRange] = useState("1M");

    const filteredData = useMemo(() => {         // e.g  dateRange = "7D"
        const range = DATE_RANGES[dateRange];
        const now = new Date();
        const startDate = range.days
            && startOfDay(subDays(now, range.days))

        // Filter transactions within date range
        const filtered = transactions.filter(
            (t) => new Date(t.date) >= startDate && new Date(t.date) <= endOfDay(now)// from the huge array of transactions filter the transaction where date greater than equal to startdate and less then the present date 
        )

        // now we got the filteres transaction but for chart preparation we need an array like : 
        // [
        //   { date: "Nov 10", income: 300, expense: 0 },
        //   { date: "Nov 11", income: 0, expense: 50 },
        //   { date: "Nov 12", income: 200, expense: 0 }
        // ]
        // Group transactions by date
        const grouped = filtered.reduce((acc, transaction) => {
            const date = format(new Date(transaction.date), "MMM dd");
            if (!acc[date]) {
                acc[date] = { date, income: 0, expense: 0 };
            }
            if (transaction.type === "INCOME") {
                acc[date].income += transaction.amount;
            } else {
                acc[date].expense += transaction.amount;
            }
            return acc;
        }, {});

        // grouped : {
        //   "Nov 10": { date: "Nov 10", income: 200, expense: 50 },
        //   "Nov 11": { date: "Nov 11", income: 100, expense: 0 }
        // }

        // the above is an objesct we have to convert them into an sorted array : 
        return Object.values(grouped).sort(
            (a, b) => new Date(a.date) - new Date(b.date)
        );

        // Final Output: 
        // [
        //   { date: "Nov 10", income: 300, expense: 0 },
        //   { date: "Nov 11", income: 0, expense: 50 },
        //   { date: "Nov 12", income: 200, expense: 0 }
        // ]
    }, [transactions, dateRange])

    // Calculate totals for the selected period
    const totals = useMemo(() => {
        return filteredData.reduce(
            (acc, day) => ({
                income: acc.income + day.income,
                expense: acc.expense + day.expense,
            }),
            { income: 0, expense: 0 }
        );
    }, [filteredData]);

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
                <CardTitle className="text-base font-normal">
                    Transaction Overview
                </CardTitle>
                <Select defaultValue={dateRange} onValueChange={setDateRange}>
                    <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                        {Object.entries(DATE_RANGES).map(([key, { label }]) => (
                            <SelectItem key={key} value={key}>
                                {label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent>
                <div className="flex justify-around mb-6 text-sm">
                    <div className="text-center">
                        <p className="text-muted-foreground">Total Income</p>
                        <p className="text-lg font-bold text-green-500">
                            ${totals.income.toFixed(2)}
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-muted-foreground">Total Expenses</p>
                        <p className="text-lg font-bold text-red-500">
                            ${totals.expense.toFixed(2)}
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-muted-foreground">Net</p>
                        <p
                            className={`text-lg font-bold ${totals.income - totals.expense >= 0
                                    ? "text-green-500"
                                    : "text-red-500"
                                }`}
                        >
                            ${(totals.income - totals.expense).toFixed(2)}
                        </p>
                    </div>
                </div>
                <div className="h-[300px]">
                    
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={filteredData}  // e.g { date: "Nov 10", income: 300, expense: 0 }
                            margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
                        >
                            <CartesianGrid vertical={false} />  
                             {/* Vertical line false  */}
                            <XAxis 
                                dataKey="date"    // filteredData.date 
                                fontSize={12}
                            />
                            <YAxis
                                fontSize={12}
                                tickFormatter={(value) => `$${value}`}
                            />
                            <Tooltip
                                formatter={(value) => [`$${value}`]}  // this is noting but to add dollor sign 
                            />
                            <Legend />
                            <Bar
                                dataKey="income"
                                name="Income"
                                fill="#22c55e"
                                radius={[4, 4, 0, 0]}
                            />
                            <Bar
                                dataKey="expense"
                                name="Expense"
                                fill="#ef4444"
                                radius={[4, 4, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    )
}

export default TransactionChart
