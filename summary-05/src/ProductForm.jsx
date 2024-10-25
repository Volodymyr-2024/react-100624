import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const URL =
  import.meta.env.VITE_API_ENDPOINT + "/collections/shop_products/records/";

const ProductForm = ({ productId }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isDirty, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      isDiscounted: false,
      oldPrice: 0,
      mainImage: null,
      currency: "USD",
    },
  });

  const [mode, setMode] = useState(productId ? "Edit" : "Create");

  useEffect(() => {
    if (productId) {
      // Load product details for edit mode
      axios
        .get(URL + productId)
        .then((response) => {
          const {
            title,
            description,
            price,
            isDiscounted,
            oldPrice,
            mainImage,
            currency,
          } = response.data;
          setValue("title", title);
          setValue("description", description);
          setValue("price", price);
          setValue("isDiscounted", isDiscounted);
          setValue("oldPrice", oldPrice);
          setValue("currency", currency);
          setValue("mainImage", mainImage); // For display purposes, e.g., preview
        })
        .catch((error) =>
          console.error("Error loading product details:", error),
        );
    }
  }, [productId, setValue]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("isDiscounted", data.isDiscounted);
      formData.append("oldPrice", data.oldPrice);
      formData.append("currency", data.currency);

      if (data.mainImage && data.mainImage[0]) {
        formData.append("mainImage", data.mainImage[0]); // Append file if present
      }

      if (mode === "Edit") {
        await axios.patch(URL + productId, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Product updated successfully!");
      } else {
        await axios.post(URL, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Product created successfully!");
        reset(); // Reset form after successful creation
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Title</label>
        <input type="text" {...register("title", { required: true })} />
      </div>

      <div>
        <label>Description</label>
        <textarea {...register("description", { required: true })}></textarea>
      </div>

      <div>
        <label>Price</label>
        <input
          type="number"
          {...register("price", { required: true, min: 0 })}
        />
      </div>

      <div>
        <label>Is Discounted</label>
        <input type="checkbox" {...register("isDiscounted")} />
      </div>

      <div>
        <label>Old Price</label>
        <input type="number" {...register("oldPrice", { min: 0 })} />
      </div>

      <div>
        <label>Main Image</label>
        <input type="file" accept="image/*" {...register("mainImage")} />
      </div>

      <div>
        <label>Currency</label>
        <select {...register("currency")}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>

      <button type="submit" disabled={!isDirty || isSubmitting}>
        {mode === "Edit" ? "Update Product" : "Create Product"}
      </button>
    </form>
  );
};

export default ProductForm;
