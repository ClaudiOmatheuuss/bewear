import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getUseCartQueryKey } from "../queries/use-cart";
import { decreaseCartProductQuantity } from "@/actions/decrease-cart-product-quantity";

export const getDecreaseProductQuantityFromCartMutationKey = (
  cartItemId: string,
) => ["decrease-cart-product"] as const;

export const useDecreaseCartProduct = (cartItemId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: getDecreaseProductQuantityFromCartMutationKey(cartItemId),
    mutationFn: () => decreaseCartProductQuantity({ cartItemId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getUseCartQueryKey() });
    },
  });
};
