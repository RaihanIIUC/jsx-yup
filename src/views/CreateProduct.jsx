import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { productSchema } from '../schemas';

function CreateProduct() {
  const product = {
    name: "",
    online_selling_price: 0,
    inhouse_selling_price: 0,
  };

  const { values, errors, touched ,  handleBlur, handleChange, handleSubmit } = useFormik({
            initialValues: product,
            validationSchema : productSchema,
    onSubmit: (values , action) => {
              console.log(JSON.stringify(values, null, 2));
              action.resetForm();
    },
  });
          
          console.log(values, errors);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter product name"
        />
        {errors.name && touched.name ? (
          <Form.Text className="text-danger">
            {errors.name}
          </Form.Text>
        ) : null}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Online Selling Price</Form.Label>
        <Form.Control
          type="text"
          name="online_selling_price"
          value={values.online_selling_price}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="online selling price"
        />
        {errors.online_selling_price && touched.online_selling_price ? (
          <Form.Text className="text-danger">
            {errors.online_selling_price}
          </Form.Text>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product inhouse Selling Price</Form.Label>
        <Form.Control
          type="text"
          name="inhouse_selling_price"
          value={values.inhouse_selling_price}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="inhouse selling price"
        />
        { errors.inhouse_selling_price && touched.inhouse_selling_price ? (
          <Form.Text className="text-danger">
          {errors.inhouse_selling_price}{" "}
        </Form.Text>
        ) : null}
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export default CreateProduct;
