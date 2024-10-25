import { useForm } from "react-hook-form";
import axios from "axios";

const URL =
  import.meta.env.VITE_API_ENDPOINT + "/collections/shop_products/records/";

export default function ProductAddForm() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors, isSubmitting } = formState;

  async function onAddProduct(values) {
    try {
      const response = await axios.postForm(URL, values);
      reset();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onAddProduct)}>
      <h2>New product form</h2>
      <label>
        Title
        <input
          type="text"
          {...register("title", {
            required: "Title is required",
          })}
        />
      </label>
      {errors.title && <p>{errors.title.message}</p>}
      <label>
        Description
        <input type="text" {...register("description")} />
      </label>
      <label>
        Price
        <input
          type="number"
          {...register("price", {
            required: "Price is required",
            min: {
              value: 0.01,
              message: "Price must be greater than 0.01",
            },
          })}
        />
      </label>
      {errors.price && <p>{errors.price.message}</p>}
      <label>
        Is discounted
        <input type="checkbox" role="switch" {...register("isDiscounted")} />
      </label>
      <label>
        Old price
        <input type="number" {...register("oldPrice")} />
      </label>
      <label>
        Currency
        <select {...register("currency")}>
          <option value="USD">US Dollar</option>
          <option value="EUR">Euro</option>
        </select>
      </label>
      <button aria-busy={isSubmitting}>Add</button>
    </form>
  );
}
