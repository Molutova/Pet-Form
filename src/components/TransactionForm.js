import React, { useState } from "react";

export default function TransactionForm() {
  const [dateTime, setDateTime] = useState("");
  const [sum, setSum] = useState("");
  const [category, setCategory] = useState("Transport");
  const [total, setTotal] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      id: Date.now(),
      dateTime,
      sum: parseFloat(sum),
      category,
      comment,
    };

    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
    setTotal((prevTotal) => prevTotal + transaction.sum);
    setDateTime("");
    setSum("");
    setCategory("Food");
    setComment("");
  };

  return (
    <form className="p-6 flex flex-col gap-5 w-[50%]" onSubmit={handleSubmit}>
      <h1 className="text-gray-800 font-bold text-2xl">Добавить расход</h1>
      <label className="flex flex-col text-gray-700 gap-2">
        <p className="text-gray-600 font-semibold  text-xl">Дата</p>
        <div>
          <input
            type="date"
            className="border cursor-pointer"
            onChange={(e) => setDateTime(e.target.value)}
            value={dateTime}
          />
        </div>
      </label>
      <label className="flex flex-col text-gray-700 gap-2 ">
        <p className="text-gray-600 font-semibold text-xl"> Сумма</p>

        <div>
          <input
            type="number"
            className="border cursor-pointer"
            onChange={(e) => setSum(e.target.value)}
            value={sum}
          />
        </div>
      </label>
      <label className="flex flex-col text-gray-700 gap-2">
        <p className="text-gray-600 font-semibold  text-xl">Категория</p>
        <div>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className=" text-m border bg-gray-100 cursor-pointer"
          >
            <option value="Food">Еда</option>
            <option value="Transport">Транспорт</option>
            <option value="Entertainment">Развлечения</option>
            <option value="Education">Обучение</option>
            <option value="Clothes">Одежда</option>
          </select>
        </div>
      </label>
      <label className="flex flex-col text-gray-700 gap-2 ">
        <p className="text-gray-600 font-semibold text-xl"> Комментарий</p>
        <div>
          <textarea
            className="border"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
      </label>
      <button
        type="submit"
        className="border rounded-xl bg-blue-500 h-10 cursor-pointer w-full"
      >
        Добавить
      </button>
      <p className="text-gray-700 font-semibold">
        Общая сумма: {total.toLocaleString()} ₸
      </p>

      <div>
        <h2>История :</h2>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              <span>{transaction.dateTime} | </span>
              <span>{transaction.category} | </span>
              <span>{transaction.sum} ₸ </span>
              <span>{transaction.comment}</span>
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}
