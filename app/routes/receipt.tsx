import { FormEvent, useState } from "react";

const INPUT_CLASS_NAME =
  'p-2 mb-4 border-2 border-slate-300 rounded-md focus:border-indigo-500 outline-none'

function isString(v: unknown): v is string {
  return typeof v === 'string'
}

export default function Receipt() {
  const [list, setList] = useState<{ product: string; price: number }[]>([])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const fd = new FormData(e.currentTarget)
    const product = fd.get('product')
    const price = fd.get('price')

    if (!isString(product) || !isString(price)) return
    if (!product || !price) return

    setList((l) => [...l, { product, price: Number(price) * 100 }])
  }

  return (
    <>
    <h1 className="text-3xl mb-4 font-bold text-indigo-500">Welcome to Remix!</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Voer product in</p>
            <input name="product" type="text" placeholder="Cola" className={INPUT_CLASS_NAME} />
          </label>
          <label>
            <p>Voer bedrag in</p>
            <input
              name="price"
              type="text"
              inputMode="decimal"
              placeholder="20"
              className={INPUT_CLASS_NAME}
            />
          </label>
          <button
            type="submit"
            className="block rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
          >
            Toevoegen
          </button>
        </form>
        <ul className='mt-12'>
          {list.map((item, index) => (
            <li key={item.product + '-' + index} className="p-4 border-2 border-indigo-200 rounded-lg flex">
              <p>{item.product}</p>
              <p className='ml-auto'>{item.price}</p>
            </li>
          ))}
        </ul>
        </>
  )
}