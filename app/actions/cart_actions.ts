"use server";

import { cookies } from "next/headers";

export async function addToCart(id: number) {
  const cookieStore = cookies();
  const cart = cookieStore.get("cart");
  if (!cart) cookieStore.set("cart", JSON.stringify([id]));
  else {
    const cartArr = JSON.parse(cart.value);
    cookieStore.set("cart", JSON.stringify([...cartArr, id]));
  }
}

export async function getCart() {
  const cookieStore = cookies();
  return cookieStore.get("cart");
}

export async function undoAdd(id: number) {
  const cookieStore = cookies();
  const cart = cookieStore.get("cart");
  if (!cart) return;

  const cartArr = JSON.parse(cart.value);
  const indexToRemove = cartArr.indexOf(id);

  if (indexToRemove !== -1) {
    cartArr.splice(indexToRemove, 1);
  }

  cookieStore.set("cart", JSON.stringify(cartArr));
}
