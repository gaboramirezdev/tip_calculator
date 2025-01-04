import { useState } from "react"
import { MenuItem, OrderItem } from "../types";

export const useOrder = () => {
    const [order, setorder] = useState<OrderItem[]>([]);
    const [tip, settip] = useState(0);

    const addOrder=(item:MenuItem)=>{
        const index= order.findIndex(i=>i.id===item.id);
        
        if (index!==-1) {
            const orderCopy=order.map(orderitem=>orderitem.id===item.id ? {...orderitem,quantity:orderitem.quantity+1}:orderitem);
            // orderCopy[index].quantity=orderCopy[index].quantity+1;
            setorder(orderCopy);
            return;
        }
        const newItem={...item,quantity:1};
        setorder([...order,newItem]);


    }

    const deleteOrderItem=(id:number)=>{
      const ordersCopy=order.filter(orderItem=>orderItem.id!==id);
      setorder(ordersCopy);
      
    }

    const guardarOrder=()=>{
      settip(0);
      setorder([]);
    }

  return (
    {
        order,
        tip,
        addOrder,
        deleteOrderItem,
        settip,
        guardarOrder,
        
    }
  )
}
