"use server";

import { headers } from "next/headers";

import { getDb } from "@/db";
import { shippingAddressTable } from "@/db/schema";
import { auth } from "@/lib/auth";
import { eq } from "drizzle-orm";

export async function getShippingAddresses() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    
    if (!session?.user?.id) {
      throw new Error("Usuário não autenticado");
    }

    const db = getDb();

    const addresses = await db
      .select()
      .from(shippingAddressTable)
      .where(eq(shippingAddressTable.userId, session.user.id))
      .orderBy(shippingAddressTable.createdAt);

    return { success: true, data: addresses };
  } catch (error) {
    return { success: false, error: "Erro ao buscar endereços" };
  }
}
