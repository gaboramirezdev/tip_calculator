import { MenuItem, OrderItem } from "../types";

export interface Props {
  item: MenuItem;
  addOrder: (item: MenuItem) => void;
}

export const MenuItemComponent = ({ item, addOrder }: Props) => {
  return (
    <button
      className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200"
      onClick={() => addOrder(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">$ {item.price}</p>
    </button>
  );
};
