import { ChangeEvent, useState } from 'react'

const LOCALES = ['nl-NL', 'en-US', 'en-GB', 'es-CA', 'de-DE']
type Locale = typeof LOCALES[number]

const CURRENCIES = ['EUR', 'USD', 'JPY']
type Currency = typeof CURRENCIES[number]

const MOCK_ORDERS = [
  { orderNumber: '00001', createdAt: '2022-08-10T22:57:18.843Z', totalPrice: 1299 },
  { orderNumber: '00002', createdAt: '2022-08-12T12:08:01.199Z', totalPrice: 1800 },
  { orderNumber: '00003', createdAt: '2022-08-12T08:58:20.952Z', totalPrice: 750000 },
  { orderNumber: '00004', createdAt: '2022-08-12T06:04:56.049Z', totalPrice: 50 },
  { orderNumber: '00005', createdAt: '2022-08-12T02:09:51.389Z', totalPrice: 4423 },
]
const INPUT_CLASS_NAME =
  'p-2 mb-4 border-2 border-slate-300 rounded-md focus:border-indigo-500 outline-none'

export default function Index() {
  const [locale, setLocale] = useState<Locale>(LOCALES[0])
  const [currency, setCurrency] = useState<Currency>(CURRENCIES[0])

  const handleLocaleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget
    setLocale(value)
  }

  const handleCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget
    setCurrency(value)
  }

  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        lineHeight: '1.4',
        justifyContent: 'center',
      }}
      className="h-screen w-screen flex pt-4"
    >
      <main>
        <h1 className="text-3xl mb-4 font-bold text-indigo-500">Welcome to Remix!</h1>
        <div className="flex gap-4">
          <label>
            <p className="font-bold text-slate-700 mb-2">Actieve locale</p>
            <select
              name="locale"
              id="locale"
              value={locale}
              onChange={handleLocaleChange}
              className={INPUT_CLASS_NAME}
            >
              {LOCALES.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </label>
          <label>
            <p className="font-bold text-slate-700 mb-2">Actieve valuta</p>
            <select
              name="currency"
              id="currency"
              value={currency}
              onChange={handleCurrencyChange}
              className={INPUT_CLASS_NAME}
            >
              {CURRENCIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
        </div>
        <ul className="mt-12">
          {MOCK_ORDERS.map((order) => (
            <li key={order.orderNumber} className="my-2 p-4 border-2 border-indigo-200 rounded-lg">
              <div className="flex">
                <p className="font-semibold uppercase text-xs text-slate-700 mr-32">
                  <span>Ordernummer: </span>
                  <span>{order.orderNumber}</span>
                </p>
                <p className="font-semibold uppercase text-xs text-slate-700">
                  <span>Datum: </span>
                  <time dateTime={order.createdAt}>{order.createdAt}</time>
                </p>
              </div>
              <hr className="border-1 mt-2 mb-4" />

              <div className="grid grid-cols-2 text-lg">
                <span className="font-bold text-slate-800">Totaalprijs: </span>
                <span className="font-bold bg-gradient-to-br from-indigo-800 to-indigo-400 bg-clip-text text-transparent ml-auto">
                  {order.totalPrice}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
