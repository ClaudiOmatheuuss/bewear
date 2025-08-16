import { useQuery } from "@tanstack/react-query";
import { getShippingAddresses } from "@/actions/get-shipping-addresses";

export const shippingAddressesQueryKey = () => ["shipping-addresses"];

export function useShippingAddresses() {
  return useQuery({
    queryKey: shippingAddressesQueryKey(),
    queryFn: getShippingAddresses,
  });
}
