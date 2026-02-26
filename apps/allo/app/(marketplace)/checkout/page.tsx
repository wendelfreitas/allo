"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Card, Separator } from "@allo/ui";
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "../../../store/cart";
import { useCreateOrder } from '../../../hooks/use-create-order/use-create-order';
import { DeliveryForm } from "../../../components/checkout/DeliveryForm/DeliveryForm";
import { PaymentSelector } from "../../../components/checkout/PaymentSelector/PaymentSelector";
import { OrderReview } from "../../../components/checkout/OrderReview/OrderReview";
import { restaurants } from "../../../app/api/_data/restaurants";

export default function CheckoutPage() {
  const router = useRouter();
  const items = useCartStore((s) => s.items);
  const restaurantId = useCartStore((s) => s.restaurantId);
  const restaurantName = useCartStore((s) => s.restaurantName);
  const clearCart = useCartStore((s) => s.clearCart);
  const createOrder = useCreateOrder();

  const [address, setAddress] = useState("");
  const [instructions, setInstructions] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const restaurant = restaurants.find((r) => r.id === restaurantId);
  const deliveryFee = restaurant?.deliveryFee ?? 299;

  const canSubmit = items.length > 0 && address.trim().length > 0;

  const handleSubmit = async () => {
    if (!canSubmit || !restaurantId || !restaurantName) return;

    const order = await createOrder.mutateAsync({
      items: items.map((item) => ({
        name: item.menuItem.name,
        quantity: item.quantity,
        price: item.menuItem.price,
      })),
      restaurantId,
      restaurantName,
      deliveryAddress: `${address}${instructions ? ` (${instructions})` : ""}`,
      paymentMethod,
      deliveryFee,
    });

    setIsSubmitted(true);
    clearCart();
    router.push(`/order/${order.id}`);
  };

  if (items.length === 0 && !isSubmitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">
          Add items to your cart before checking out
        </p>
        <Link href="/restaurants">
          <Button className="mt-6">Browse Restaurants</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/restaurants"
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={16} />
        Back to restaurants
      </Link>

      <h1 className="mb-8 text-3xl font-bold">Checkout</h1>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-8">
          <Card className="p-6">
            <DeliveryForm
              address={address}
              onAddressChange={setAddress}
              instructions={instructions}
              onInstructionsChange={setInstructions}
            />
          </Card>

          <Card className="p-6">
            <PaymentSelector
              value={paymentMethod}
              onChange={setPaymentMethod}
            />
          </Card>
        </div>

        <div>
          <Card className="sticky top-24 p-6">
            <OrderReview />
            <Separator className="my-4" />
            <Button
              className="w-full"
              size="lg"
              onClick={handleSubmit}
              disabled={!canSubmit || createOrder.isPending}
            >
              {createOrder.isPending ? (
                <>
                  <Loader2 size={16} className="mr-2 animate-spin" />
                  Placing order...
                </>
              ) : (
                "Place Order"
              )}
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
