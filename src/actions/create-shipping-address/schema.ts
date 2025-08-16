import { z } from "zod";

export const createShippingAddressSchema = z.object({
  recipientName: z.string().min(1, "Nome completo é obrigatório"),
  street: z.string().min(1, "Endereço é obrigatório"),
  number: z.string().min(1, "Número é obrigatório"),
  complement: z.string().optional(),
  city: z.string().min(1, "Cidade é obrigatória"),
  state: z.string().min(1, "Estado é obrigatório"),
  neighborhood: z.string().min(1, "Bairro é obrigatório"),
  zipCode: z.string().min(1, "CEP é obrigatório"),
  country: z.string().min(1, "País é obrigatório"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  email: z.string().email("E-mail inválido"),
  cpfOrCnpj: z.string().min(1, "CPF/CNPJ é obrigatório"),
});

export type CreateShippingAddressSchema = z.infer<
  typeof createShippingAddressSchema
>;
