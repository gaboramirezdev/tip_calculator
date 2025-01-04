import { MenuItemComponent } from "./components/MenuItem";
import { OrderContent } from "./components/OrderContent";
import { OrderTotals } from "./components/OrderTotals";
import { TipForm } from "./components/TipForm";
import { menuItems } from "./db/db";
import { useOrder } from "./hooks/useOrder";

function App() {
  const { order, tip, addOrder, deleteOrderItem, settip, guardarOrder } =
    useOrder();
  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className=" text-center text-4xl font-black">Tip Calculator</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItemComponent
                key={item.id}
                item={item}
                addOrder={addOrder}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContent order={order} deleteOrderItem={deleteOrderItem} />

          {order.length && (
            <div>
              <TipForm settip={settip} tip={tip} />
              <OrderTotals
                order={order}
                tip={tip}
                guardarOrder={guardarOrder}
              />
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
