import * as Yup from 'yup';

export const productSchema = Yup.object({
  name: Yup.string("Product name should be in name").required(
    "Please enter a valid product name"
  ),
  online_selling_price: Yup.number().required().positive().integer(),
  inhouse_selling_price: Yup.number().required().positive().integer(),
});
