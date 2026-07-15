// KYNE Cart — context + localStorage persistence.
// Supports single variants, archetype bundles, and tier packs as single line items.
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type CartItemTime = "morning" | "day" | "night" | "bundle" | "pack";

export interface CartItem {
  id: string;
  name: string;
  line?: string;
  time: CartItemTime;
  price: number;
  qty: number;
  // bundle / tier-pack extras
  isBundle?: boolean;
  isTierPack?: boolean;
  tierKind?: string;
  billingCycle?: "monthly" | "annual";
  bundleSkus?: string[];
  selectedLines?: string[];
}

interface CartContextValue {
  items: CartItem[];
  add: (item: Omit<CartItem, "qty">) => void;
  addBundle: (item: Omit<CartItem, "qty">) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);
const STORAGE_KEY = "kyne-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setOpen] = useState(false);

  // hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  // persist
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const add: CartContextValue["add"] = (item) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  // Bundles/packs add as a single authoritative line item at the bundle price.
  const addBundle: CartContextValue["addBundle"] = (item) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const remove: CartContextValue["remove"] = (id) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const setQty: CartContextValue["setQty"] = (id, qty) =>
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => i.id !== id)
        : prev.map((i) => (i.id === id ? { ...i, qty } : i))
    );

  const clear = () => setItems([]);

  const count = items.reduce((n, i) => n + i.qty, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{ items, add, addBundle, remove, setQty, clear, count, subtotal, isOpen, setOpen }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
