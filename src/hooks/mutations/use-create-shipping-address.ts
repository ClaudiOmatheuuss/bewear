import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createShippingAddress } from "@/actions/create-shipping-address";
import { CreateShippingAddressSchema } from "@/actions/create-shipping-address/schema";

export const useCreateShippingAddress = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateShippingAddressSchema) =>
      createShippingAddress(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shipping-addresses"] });
    },
  });
};
