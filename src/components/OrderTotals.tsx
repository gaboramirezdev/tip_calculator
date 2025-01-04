import { useEffect, useState } from "react";
import { OrderItem } from "../types";

interface Props {
  order: OrderItem[];
  tip: number;
  guardarOrder: () => void;
}

export const OrderTotals = ({ order, tip, guardarOrder }: Props) => {
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    setSubTotal(
      order.reduce(
        (acumulador, orderItem) =>
          orderItem.price * orderItem.quantity + acumulador,
        0
      )
    );
  }, [order]);

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina</h2>
        <p>
          Subtotal a pagar: <span className="font-bold"> ${subTotal}</span>
        </p>
        <p>
          Propina: <span className="font-bold"> ${subTotal * tip}</span>
        </p>
        <p>
          Total a pagar:{" "}
          <span className="font-bold"> ${subTotal * tip + subTotal}</span>
        </p>
      </div>
      <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
        disabled={subTotal * tip + subTotal === 0}
        onClick={guardarOrder}
      >
        Guardar Orden
      </button>
    </>
  );
};
