// KYNE slide-out cart drawer
import { useCart } from "@/lib/cart";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";

export default function CartDrawer() {
  const { items, isOpen, setOpen, setQty, remove, clear, subtotal, count } = useCart();

  const meta = (i: (typeof items)[number]) => {
    if (i.isTierPack) {
      const strips = i.bundleSkus?.length ?? 0;
      return `tier pack · ${strips} strips · ${i.billingCycle ?? "monthly"}`;
    }
    if (i.isBundle) {
      const strips = i.bundleSkus?.length ?? 0;
      return `bundle · ${strips} strips`;
    }
    return [i.line, i.time !== "bundle" && i.time !== "pack" ? i.time : null]
      .filter(Boolean)
      .join(" · ");
  };

  const priceSuffix = (i: (typeof items)[number]) =>
    i.billingCycle === "annual" ? "/yr" : i.isTierPack || i.isBundle || i.time === "morning" || i.time === "day" || i.time === "night" ? "/mo" : "";

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Your protocol {count > 0 && `(${count})`}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-muted-foreground">
            <ShoppingBag className="h-10 w-10 opacity-40" />
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <>
            <div className="-mx-2 flex-1 space-y-3 overflow-y-auto px-2 py-4">
              {items.map((i) => (
                <div
                  key={i.id}
                  className="flex items-start justify-between gap-3 rounded-2xl border border-border bg-card p-4"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium text-card-foreground">{i.name}</p>
                    <p className="mt-0.5 text-xs uppercase tracking-wide text-muted-foreground">
                      {meta(i)}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        aria-label="decrease"
                        onClick={() => setQty(i.id, i.qty - 1)}
                        className="grid h-7 w-7 place-items-center rounded-full border border-border hover:bg-accent"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-6 text-center text-sm">{i.qty}</span>
                      <button
                        aria-label="increase"
                        onClick={() => setQty(i.id, i.qty + 1)}
                        className="grid h-7 w-7 place-items-center rounded-full border border-border hover:bg-accent"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="font-medium">
                      ${i.price * i.qty}
                      <span className="text-xs text-muted-foreground">{priceSuffix(i)}</span>
                    </span>
                    <button
                      aria-label="remove"
                      onClick={() => remove(i.id)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t border-border pt-4">
              <div className="flex items-center justify-between text-lg font-medium">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <Button className="w-full" size="lg" disabled>
                Checkout — coming soon
              </Button>
              <button
                onClick={clear}
                className="w-full text-center text-xs text-muted-foreground hover:text-foreground"
              >
                Clear cart
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
