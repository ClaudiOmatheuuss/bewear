import { useQuery } from "@tanstack/react-query";

import { getShippingAddresses } from "@/actions/get-shipping-addresses";
import { shippingAddressTable } from "@/db/schema";

export const getShippingAddressesQueryKey = () => ["user-addresses"] as const;

export const useUserAddresses = (params?: {
  initialData?: (typeof shippingAddressTable.$inferSelect)[];
}) => {
  return useQuery({
    queryKey: getShippingAddressesQueryKey(),
    queryFn: getShippingAddresses,
    initialData: params?.initialData
      ? { success: true, data: params.initialData }
      : undefined,
  });
};
