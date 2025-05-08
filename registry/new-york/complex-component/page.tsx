import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Search,
  DollarSign,
  TrendingUp,
  CreditCard,
  Users,
  Menu,
  Home,
  FileText,
  BarChart2,
  Settings,
  Bell,
  HelpCircle,
  ChevronDown,
  Plus,
  Calendar,
  Receipt,
  Wallet,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

// Mock data for demonstration
const financialData = {
  totalRevenue: 125000,
  totalExpenses: 45000,
  outstandingInvoices: 15000,
  activeCustomers: 45,
  recentTransactions: [
    {
      id: 1,
      type: "Invoice",
      amount: 2500,
      date: "2024-03-15",
      status: "Paid",
      customer: "Acme Corp",
    },
    {
      id: 2,
      type: "Expense",
      amount: -850,
      date: "2024-03-14",
      status: "Completed",
      category: "Office Supplies",
    },
    {
      id: 3,
      type: "Invoice",
      amount: 1800,
      date: "2024-03-13",
      status: "Pending",
      customer: "TechStart Inc",
    },
    {
      id: 4,
      type: "Expense",
      amount: -1200,
      date: "2024-03-12",
      status: "Completed",
      category: "Software",
    },
  ],
  upcomingPayments: [
    {
      id: 1,
      type: "Invoice",
      amount: 3200,
      dueDate: "2024-03-20",
      customer: "Global Services",
    },
    {
      id: 2,
      type: "Bill",
      amount: -1500,
      dueDate: "2024-03-22",
      vendor: "Cloud Hosting",
    },
  ],
  accountBalances: [
    { name: "Checking", balance: 45600, type: "bank" },
    { name: "Savings", balance: 125000, type: "bank" },
    { name: "Credit Card", balance: -2500, type: "credit" },
  ],
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f6f8fa] w-full">
      {/* Top Navigation Bar */}
      <nav className="border-b bg-white shadow-sm">
        <div className="w-full px-4">
          <div className="flex h-12 items-center justify-between">
            <div className="flex items-center h-12 gap-x-1">
              <Menu className="h-5 w-5 text-gray-500" />
              <div className="ml-3 flex items-center gap-x-2 h-12">
                <h1 className="text-lg font-bold leading-none">QuickBooks</h1>
                <div className="flex items-center gap-x-1 text-xs text-gray-500 h-12">
                  <span className="leading-none">My Company</span>
                  <ChevronDown className="h-3 w-3" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-qb-md h-12">
              <div className="relative flex items-center h-8">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search..."
                  className="w-40 pl-8 py-1 text-sm rounded-md border border-gray-200 h-8 align-middle"
                />
              </div>
              <button className="rounded-full bg-blue-600 p-1.5 text-white flex items-center h-8 w-8 justify-center ml-qb-md">
                <Plus className="h-4 w-4" />
              </button>
              <div className="flex items-center h-8 w-8 justify-center ml-qb-md">
                <Bell className="h-5 w-5 text-gray-500" />
              </div>
              <div className="flex items-center h-8 w-8 justify-center ml-qb-md">
                <HelpCircle className="h-5 w-5 text-gray-400" />
              </div>
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center ml-qb-md" />
            </div>
          </div>
        </div>
      </nav>

      <div className="flex min-h-screen w-full">
        {/* Sidebar Navigation */}
        <aside className="w-[200px] border-r border-gray-200 bg-[#f8fafb] p-2 flex-shrink-0 min-h-screen">
          <nav className="flex flex-col gap-y-1 mt-2">
            <a
              href="#"
              className="flex items-center gap-x-3 rounded-md px-3 py-2 text-gray-900 font-medium bg-white shadow-sm"
            >
              <Home className="h-5 w-5" />
              <span className="text-[15px]">Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-x-3 rounded-md px-3 py-2 text-gray-700 hover:bg-white hover:shadow-sm"
            >
              <FileText className="h-5 w-5" />
              <span className="text-[15px]">Invoices</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-x-3 rounded-md px-3 py-2 text-gray-700 hover:bg-white hover:shadow-sm"
            >
              <Receipt className="h-5 w-5" />
              <span className="text-[15px]">Bills</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-x-3 rounded-md px-3 py-2 text-gray-700 hover:bg-white hover:shadow-sm"
            >
              <BarChart2 className="h-5 w-5" />
              <span className="text-[15px]">Reports</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-x-3 rounded-md px-3 py-2 text-gray-700 hover:bg-white hover:shadow-sm"
            >
              <Calendar className="h-5 w-5" />
              <span className="text-[15px]">Calendar</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-x-3 rounded-md px-3 py-2 text-gray-700 hover:bg-white hover:shadow-sm"
            >
              <Wallet className="h-5 w-5" />
              <span className="text-[15px]">Banking</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-x-3 rounded-md px-3 py-2 text-gray-700 hover:bg-white hover:shadow-sm"
            >
              <PieChart className="h-5 w-5" />
              <span className="text-[15px]">Taxes</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-x-3 rounded-md px-3 py-2 text-gray-700 hover:bg-white hover:shadow-sm"
            >
              <Settings className="h-5 w-5" />
              <span className="text-[15px]">Settings</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 max-w-6xl mx-auto w-full">
          {/* Stats Section */}
          <div className="mb-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="shadow-sm rounded-lg border border-gray-200">
              <CardHeader className="flex flex-row items-center justify-between pb-1 gap-x-2">
                <CardTitle className="text-xs font-semibold text-gray-600">
                  Total Revenue
                </CardTitle>
                <DollarSign className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">
                  ${financialData.totalRevenue.toLocaleString()}
                </div>
                <div className="flex items-center text-xs text-green-500 mt-1 gap-x-1">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  <span>+12% from last month</span>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-sm rounded-lg border border-gray-200">
              <CardHeader className="flex flex-row items-center justify-between pb-1 gap-x-2">
                <CardTitle className="text-xs font-semibold text-gray-600">
                  Total Expenses
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">
                  ${financialData.totalExpenses.toLocaleString()}
                </div>
                <div className="flex items-center text-xs text-red-500 mt-1 gap-x-1">
                  <ArrowDownRight className="mr-1 h-3 w-3" />
                  <span>+5% from last month</span>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-sm rounded-lg border border-gray-200">
              <CardHeader className="flex flex-row items-center justify-between pb-1 gap-x-2">
                <CardTitle className="text-xs font-semibold text-gray-600">
                  Outstanding Invoices
                </CardTitle>
                <CreditCard className="h-4 w-4 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">
                  ${financialData.outstandingInvoices.toLocaleString()}
                </div>
                <p className="text-xs text-gray-500 mt-1">5 invoices pending</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm rounded-lg border border-gray-200">
              <CardHeader className="flex flex-row items-center justify-between pb-1 gap-x-2">
                <CardTitle className="text-xs font-semibold text-gray-600">
                  Active Customers
                </CardTitle>
                <Users className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">
                  {financialData.activeCustomers}
                </div>
                <div className="flex items-center text-xs text-green-500 mt-1 gap-x-1">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  <span>+3 new this month</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {/* Recent Transactions */}
            <Card className="shadow-sm rounded-lg border border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold text-gray-700">
                  Recent Transactions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-y-2 divide-y divide-gray-100">
                  {financialData.recentTransactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between py-2 gap-x-2"
                    >
                      <div className="flex flex-col gap-y-0.5">
                        <p className="text-xs font-medium text-gray-700">
                          {transaction.type}
                        </p>
                        <p className="text-xs text-gray-400">
                          {transaction.customer || transaction.category}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-y-0.5">
                        <p
                          className={`text-xs font-semibold ${
                            transaction.amount > 0
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {transaction.amount > 0 ? "+" : ""}$
                          {Math.abs(transaction.amount).toLocaleString()}
                        </p>
                        <p className="text-xs text-gray-400">
                          {transaction.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Account Balances */}
            <Card className="shadow-sm rounded-lg border border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold text-gray-700">
                  Account Balances
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-y-2 divide-y divide-gray-100">
                  {financialData.accountBalances.map((account) => (
                    <div
                      key={account.name}
                      className="flex items-center justify-between py-2 gap-x-2"
                    >
                      <div className="flex flex-col gap-y-0.5">
                        <p className="text-xs font-medium text-gray-700">
                          {account.name}
                        </p>
                        <p className="text-xs text-gray-400">{account.type}</p>
                      </div>
                      <div className="flex flex-col items-end gap-y-0.5">
                        <p
                          className={`text-xs font-semibold ${
                            account.balance >= 0
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          ${Math.abs(account.balance).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Payments - full width below */}
          <div className="mt-4">
            <Card className="shadow-sm rounded-lg border border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold text-gray-700">
                  Upcoming Payments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-y-2 divide-y divide-gray-100">
                  {financialData.upcomingPayments.map((payment) => (
                    <div
                      key={payment.id}
                      className="flex items-center justify-between py-2 gap-x-2"
                    >
                      <div className="flex flex-col gap-y-0.5">
                        <p className="text-xs font-medium text-gray-700">
                          {payment.type}
                        </p>
                        <p className="text-xs text-gray-400">
                          {payment.customer || payment.vendor}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-y-0.5">
                        <p
                          className={`text-xs font-semibold ${
                            payment.amount > 0
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {payment.amount > 0 ? "+" : ""}$
                          {Math.abs(payment.amount).toLocaleString()}
                        </p>
                        <p className="text-xs text-gray-400">
                          Due {payment.dueDate}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
