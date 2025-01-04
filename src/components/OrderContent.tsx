import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";

interface Props {
  order: OrderItem[];
  deleteOrderItem: (id: number) => void;
}

export const OrderContent = ({ order, deleteOrderItem }: Props) => {
  return (
    <div>
      <div className="space-y-3 mt-5">
        {order.length === 0 ? (
          <p className="text-center">La orden esta vacia</p>
        ) : (
          <>
            <h2 className="font-black text-4xl">Consumo</h2>
            {order.map((orderitem) => (
              <div
                key={orderitem.id}
                className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
              >
                <div>
                  <p className="text-lg">
                    {orderitem.name}-{formatCurrency(orderitem.price)}
                  </p>
                  <p className="font-black">
                    Cantidad: {orderitem.quantity}-{" "}
                    {formatCurrency(orderitem.price * orderitem.quantity)}
                  </p>
                </div>
                <div>
                  <button
                    className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                    onClick={() => deleteOrderItem(orderitem.id)}
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
