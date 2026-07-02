import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "babylon_cart";

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    } catch {
      return [];
    }
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (product, openDrawer = true) => {
    setItems((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [
        ...prev,
        { id: product.id, name: product.name, price: product.price, qty: 1 }
      ];
    });
    if (openDrawer) setOpen(true);
  };

  const decrement = (id) =>
    setItems((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0)
    );

  const removeItem = (id) => setItems((prev) => prev.filter((p) => p.id !== id));

  const clear = () => setItems([]);

  const count = useMemo(() => items.reduce((n, p) => n + p.qty, 0), [items]);
  const total = useMemo(
    () => items.reduce((s, p) => s + p.price * p.qty, 0),
    [items]
  );

  const value = {
    items,
    addItem,
    decrement,
    removeItem,
    clear,
    count,
    total,
    open,
    setOpen
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
