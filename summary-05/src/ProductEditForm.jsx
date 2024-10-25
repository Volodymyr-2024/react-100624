// Импортируем необходимые хуки из библиотеки react-hook-form
import { useForm } from "react-hook-form";
// Импортируем хуки из React
import { useEffect, useMemo } from "react";
// Импортируем библиотеку axios для HTTP-запросов
import axios from "axios";

// Определяем URL для API, где данные загружаются из переменной окружения
const URL =
  import.meta.env.VITE_API_ENDPOINT + "/collections/shop_products/records/";

// Асинхронная функция для получения данных о продукте по ID
async function fetchProduct(id) {
  try {
    // Отправляем GET-запрос для получения данных продукта
    const response = await axios.get(`${URL}${id}`);
    // Возвращаем данные из ответа
    return response.data;
  } catch (error) {
    // Логируем ошибку, если запрос не удался
    console.error(error);
    return null;
  }
}

// Экспортируем компонент формы для редактирования продукта
export default function ProductEditForm({ id }) {
  // Инициализируем react-hook-form и извлекаем нужные методы и свойства
  const { register, handleSubmit, formState, reset, watch } = useForm();
  const { errors, isSubmitting } = formState;

  // Слежение за полем mainImage (основное изображение)
  const mainImage = watch("mainImage");
  // Создаем preview для отображения изображения при выборе файла
  const preview = useMemo(() => {
    // Проверяем, что mainImage существует и является файлом
    if (mainImage && mainImage[0] instanceof File) {
      return window.URL.createObjectURL(mainImage[0]);
    }
    return null;
  }, [mainImage]);

  // Хук useEffect для загрузки данных продукта при монтировании компонента
  useEffect(() => {
    async function loadProduct() {
      const product = await fetchProduct(id);
      if (product) {
        // Устанавливаем полученные данные как значения по умолчанию в форму
        reset(product);
      }
    }
    loadProduct();
  }, [id, reset]);

  // Обработчик отправки формы
  const onSubmit = async (data) => {
    try {
      // Отправляем PATCH-запрос для обновления продукта, включая загруженное изображение
      await axios.patchForm(`${URL}${id}`, {
        ...data,
        mainImage: data.mainImage[0],
      });
      alert("Продукт успешно обновлен!");
    } catch (error) {
      console.error("Не удалось обновить продукт:", error);
    }
  };

  // Возвращаем JSX разметку формы
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Форма редактирования продукта</h2>

      {/* Поле для ввода названия продукта */}
      <label>
        Название
        <input
          type="text"
          {...register("title", {
            required: "Поле 'Название' обязательно для заполнения",
          })}
        />
      </label>
      {errors.title && <p>{errors.title.message}</p>}

      {/* Поле для загрузки основного изображения продукта */}
      <label>
        Основное изображение
        <input type="file" accept="image/*" {...register("mainImage")} />
      </label>
      {/* Отображаем превью изображения, если файл загружен */}
      {preview && <img src={preview} alt="Предпросмотр" />}

      {/* Поле для ввода описания продукта */}
      <label>
        Описание
        <input type="text" {...register("description")} />
      </label>

      {/* Поле для ввода цены продукта */}
      <label>
        Цена
        <input
          type="number"
          {...register("price", {
            required: "Поле 'Цена' обязательно для заполнения",
            min: {
              value: 0.01,
              message: "Цена должна быть больше 0.01",
            },
          })}
        />
      </label>
      {errors.price && <p>{errors.price.message}</p>}

      {/* Переключатель для отметки продукта как уцененного */}
      <label>
        Уцененный продукт
        <input type="checkbox" role="switch" {...register("isDiscounted")} />
      </label>

      {/* Поле для ввода старой цены (до уценки) */}
      <label>
        Старая цена
        <input type="number" {...register("oldPrice")} />
      </label>

      {/* Выпадающий список для выбора валюты */}
      <label>
        Валюта
        <select {...register("currency")}>
          <option value="USD">Доллар США</option>
          <option value="EUR">Евро</option>
        </select>
      </label>

      {/* Кнопка отправки формы, которая блокируется во время отправки */}
      <button type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
        Редактировать
      </button>
    </form>
  );
}
