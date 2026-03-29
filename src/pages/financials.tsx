import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

interface LineItem {
  label: string;
  amount: number;
}

interface Contribution {
  name: string;
  amount: number;
}

const formatCurrency = (value: number) =>
  `$${value.toLocaleString("en-US", {
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2
  })}`;

export default function Financials() {
  const fundsInHand = 3201.06;

  const founderContributions: Contribution[] = [
    { name: "Sodani's", amount: 500 },
    { name: "Somani's", amount: 500 },
    { name: "Gupta's", amount: 500 },
    { name: "Sharma's", amount: 500 },
    { name: "Agarwal's", amount: 500 },
    { name: "Bisani's", amount: 300 },
    { name: "Jhaveria's", amount: 300 },
    { name: "Jain's", amount: 300 },
    { name: "Purohit's", amount: 300 },
    { name: "Mittal's", amount: 300 }
  ];

  const aprilFundraising: Contribution[] = [
    { name: "Dhiraj and Supriya Soni", amount: 101 },
    { name: "Satyen and Nimisha Ameria", amount: 200 },
    { name: "Sachin and Neha Gupta", amount: 101 },
    { name: "Sumeet and Neha Kabra", amount: 101 },
    { name: "Anirudh and Kartika Maheshwari", amount: 200 },
    { name: "Charan and Nirmal Singh", amount: 200 },
    { name: "Rahul S and Megha Gupta", amount: 100 },
    { name: "Shatrughan and Priya Tiwari", amount: 150 },
    { name: "Rahul and Rashmi Kast", amount: 250 },
    { name: "Ashish and Purva Agarwal", amount: 501 },
    { name: "Puneet Agarwal and Tanushree Mittal", amount: 200 },
    { name: "Shubham Vyas and Arti Sahu", amount: 100 },
    { name: "Mitesh Gaur and Akansha Sharma", amount: 100 },
    { name: "Amardeep Tekriwal and Archana Mahajan", amount: 151 }
  ];

  const julyFundraising: Contribution[] = [
    { name: "Surendra Chauhan", amount: 100 },
    { name: "Akansha and Mitesh Gaur", amount: 151 },
    { name: "Nidhi and Kaustubh", amount: 50 }
  ];

  const aprilExpenses: LineItem[] = [
    { label: "Costco Online Order (Paper Products)", amount: 81 },
    { label: "Amazon order (Paper products)", amount: 100.06 },
    { label: "Amazon order (Burners and photo booth stand)", amount: 71 },
    { label: "Aam pana powder (Taza Mart)", amount: 14 },
    { label: "Lanterns House Deposit", amount: 300 },
    { label: "Deposit for Food Catering (Deepika Bajaj)", amount: 350 },
    { label: "Indian Store (Thandai & Mukhwas)", amount: 34.84 },
    { label: "King Soopers", amount: 28.73 },
    { label: "Final payment to Deepika Bajaj for Raj food", amount: 335 },
    { label: "MCC poster board", amount: 15.98 },
    { label: "Cleaning for April 19th event @ $25/hr for 5.5 hrs + $15 tip", amount: 155 },
    { label: "Costco (Chips, Juice, Water Bottles)", amount: 49.85 },
    { label: "King Cooper's (Fruit tray, ice)", amount: 50.57 },
    { label: "Ice bags", amount: 10 },
    { label: "Food Catering payment to Dimple and Sandeepji", amount: 560 },
    { label: "Decoration April 19 event (background poster and tape)", amount: 29 }
  ];

  const julyExpenses: LineItem[] = [
    { label: "Venue", amount: 150 },
    { label: "Food Catering payment to Dimple and Sandeepji", amount: 420 },
    { label: "Delivery charges for Food catering", amount: 30 },
    { label: "Disposables, Water and Garbage bags", amount: 74.94 },
    { label: "Kulfi, Popsicles and Ice", amount: 126.92 },
    { label: "Food Catering payment in cash", amount: 370 },
    { label: "Costco bill for burger/drinks/corn", amount: 120 },
    { label: "Indian store (Bhel, Achar)", amount: 68 },
    { label: "Watermelon", amount: 10 }
  ];

  const founderTotal = founderContributions.reduce((sum, item) => sum + item.amount, 0);
  const aprilFundraisingTotal = aprilFundraising.reduce((sum, item) => sum + item.amount, 0);
  const julyFundraisingTotal = julyFundraising.reduce((sum, item) => sum + item.amount, 0);
  const aprilExpensesTotal = aprilExpenses.reduce((sum, item) => sum + item.amount, 0);
  const julyExpensesTotal = julyExpenses.reduce((sum, item) => sum + item.amount, 0);

  const totals = {
    contributions: founderTotal + aprilFundraisingTotal + julyFundraisingTotal,
    expenses: aprilExpensesTotal + julyExpensesTotal
  };

  const getLabel = (row: LineItem | Contribution) => ("label" in row ? row.label : row.name);

  const summaryCards = [
    {
      title: "Total Raised to Date",
      value: formatCurrency(totals.contributions),
      tone: "from-green-100 to-emerald-50",
      accent: "text-green-700",
      border: "border-green-200"
    },
    {
      title: "Total Spent on Events",
      value: formatCurrency(totals.expenses),
      tone: "from-orange-100 to-red-50",
      accent: "text-orange-700",
      border: "border-orange-200"
    },
    {
      title: "Funds in Hand with MCC",
      value: formatCurrency(fundsInHand),
      tone: "from-blue-100 to-indigo-50",
      accent: "text-blue-700",
      border: "border-blue-200"
    }
  ];

const renderTable = (
  title: string,
  rows: LineItem[] | Contribution[],
  total: number,
  options?: { showTotalBadge?: boolean }
) => {
  const showTotalBadge = options?.showTotalBadge ?? true;

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-orange-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        {showTotalBadge && (
          <span className="text-sm font-semibold text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
            Total {formatCurrency(total)}
          </span>
        )}
      </div>
      <div className="overflow-hidden rounded-xl border border-orange-100">
        <div className="grid grid-cols-3 bg-gradient-to-r from-orange-50 to-red-50 px-4 py-3 font-semibold text-sm text-orange-900">
          <span className="col-span-2">Line Item</span>
          <span className="text-right">Amount</span>
        </div>
        {(rows as (LineItem | Contribution)[]).map((row, idx) => (
          <div
            key={`${title}-${idx}`}
            className="grid grid-cols-3 px-4 py-3 text-sm text-gray-800 bg-white odd:bg-orange-50/40 border-b border-orange-100"
          >
            <span className="col-span-2">{getLabel(row)}</span>
            <span className="text-right font-semibold text-gray-900">{formatCurrency(row.amount)}</span>
          </div>
        ))}
        <div className="grid grid-cols-3 px-4 py-3 text-sm font-bold text-gray-900 bg-orange-100/80">
          <span className="col-span-2">Total</span>
          <span className="text-right">{formatCurrency(total)}</span>
        </div>
      </div>
    </div>
  );
};

  return (
    <>
      <Head>
        <title>Financials - Marwari Community of Colorado</title>
        <meta name="description" content="Transparent financials for the Marwari Community of Colorado" />
        <link rel="icon" href="/MarwariCClogo.jpg" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 text-6xl text-green-400 transform rotate-12">$</div>
          <div className="absolute top-60 right-1/4 text-5xl text-green-300 transform -rotate-12">$</div>
          <div className="absolute bottom-1/3 left-1/4 text-4xl text-green-300 transform rotate-45">$</div>
          <div className="absolute bottom-20 right-20 text-5xl text-green-200 transform -rotate-45">$</div>
        </div>

        <nav className="relative z-10 border-b border-orange-200 bg-white/90 backdrop-blur-sm shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex h-20 items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image 
                  src="/MarwariCClogo.jpg" 
                  alt="Marwari Community Logo" 
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover border-2 border-orange-300"
                />
                <Link href="/" className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Marwari Community of Colorado
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors font-medium hover:border-b-2 hover:border-orange-300">
                  Home
                </Link>
                <Link href="/events" className="text-gray-700 hover:text-orange-600 transition-colors font-medium hover:border-b-2 hover:border-orange-300">
                  Events
                </Link>
                <Link href="/members" className="text-gray-700 hover:text-orange-600 transition-colors font-medium hover:border-b-2 hover:border-orange-300">
                  Members
                </Link>
                <Link href="/signup" className="text-gray-700 hover:text-orange-600 transition-colors font-medium hover:border-b-2 hover:border-orange-300">
                  Sign Up
                </Link>
                <Link href="/financials" className="text-gray-700 hover:text-orange-600 transition-colors font-medium border-b-2 border-orange-500">
                  Financials
                </Link>
                <Link href="/members" className="text-gray-700 hover:text-orange-600 transition-colors font-medium hover:border-b-2 hover:border-orange-300">
                  Support Us
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="relative z-10 container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent to-orange-400"></div>
              <span className="mx-4 text-4xl text-green-600">$</span>
              <div className="h-1 w-20 bg-gradient-to-l from-transparent to-orange-400"></div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
              Financial Transparency
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A clear view of contributions, event expenses, and funds in hand for the Marwari Community of Colorado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {summaryCards.map((card) => (
              <div key={card.title} className={`bg-gradient-to-br ${card.tone} ${card.border} border rounded-2xl p-6 shadow-lg`}>
                <p className="text-sm font-semibold text-gray-700 mb-2">{card.title}</p>
                <p className={`text-3xl font-extrabold ${card.accent}`}>{card.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Fundraising</h2>
                <p className="text-sm text-gray-600">Founder contributions and event fundraising totals.</p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Total Raised</p>
                    <p className="text-3xl font-extrabold text-green-700">{formatCurrency(totals.contributions)}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <details className="rounded-xl border border-green-100 bg-green-50/60 p-3">
                    <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900">
                      <span>Founder Families Contribution</span>
                      <span className="text-green-700 font-bold">{formatCurrency(founderTotal)}</span>
                    </summary>
                    <div className="mt-3">
                      {renderTable("Founder Families Contribution", founderContributions, founderTotal, { showTotalBadge: false })}
                    </div>
                  </details>

                  <details className="rounded-xl border border-green-100 bg-green-50/60 p-3">
                    <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900">
                      <span>April 19th Fund Raising</span>
                      <span className="text-green-700 font-bold">{formatCurrency(aprilFundraisingTotal)}</span>
                    </summary>
                    <div className="mt-3">
                      {renderTable("April 19th Fund Raising", aprilFundraising, aprilFundraisingTotal, { showTotalBadge: false })}
                    </div>
                  </details>

                  <details className="rounded-xl border border-green-100 bg-green-50/60 p-3">
                    <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900">
                      <span>July 21st Fundraising</span>
                      <span className="text-green-700 font-bold">{formatCurrency(julyFundraisingTotal)}</span>
                    </summary>
                    <div className="mt-3">
                      {renderTable("July 21st Fundraising", julyFundraising, julyFundraisingTotal, { showTotalBadge: false })}
                    </div>
                  </details>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Expenses</h2>
                <p className="text-sm text-gray-600">Totals at a glance. Expand each event to see detailed line items.</p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-orange-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Total Expenses</p>
                    <p className="text-3xl font-extrabold text-orange-700">{formatCurrency(totals.expenses)}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <details className="rounded-xl border border-orange-100 bg-orange-50/60 p-3">
                    <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900">
                      <span>Marwari Gala April 19th</span>
                      <span className="text-orange-700 font-bold">{formatCurrency(aprilExpensesTotal)}</span>
                    </summary>
                    <div className="mt-3">
                      {renderTable("Marwari Gala April 19th Expenses", aprilExpenses, aprilExpensesTotal, { showTotalBadge: false })}
                    </div>
                  </details>

                  <details className="rounded-xl border border-orange-100 bg-orange-50/60 p-3">
                    <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900">
                      <span>MCC Picnic - July 21st</span>
                      <span className="text-orange-700 font-bold">{formatCurrency(julyExpensesTotal)}</span>
                    </summary>
                    <div className="mt-3">
                      {renderTable("MCC Picnic Expenses - July 21st", julyExpenses, julyExpensesTotal, { showTotalBadge: false })}
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-orange-200 overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 text-4xl text-orange-300 transform rotate-12">✺</div>
                <div className="absolute bottom-4 left-4 text-3xl text-red-300 transform -rotate-12">✦</div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <Image 
                    src="/MarwariCClogo.jpg" 
                    alt="Community" 
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover border-4 border-orange-300"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Questions about these numbers?
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  We believe in transparent finances. If you&apos;d like more detail on any line item or to help grow these funds, reach out to our leadership or support the community directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/members"
                    className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105"
                  >
                    Support the Community
                  </Link>
                  <Link
                    href="/members"
                    className="inline-block border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-lg hover:bg-orange-50 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105"
                  >
                    Contact Leadership
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
