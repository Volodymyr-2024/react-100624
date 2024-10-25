import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

export default function LoginForm() {
  const { register, handleSubmit, formState } = useForm();
  const { logIn, error: loginError, loading } = useAuth();

  const { errors } = formState;

  function authneticate(values) {
    logIn(values.identity, values.password);
  }

  return (
    <form onSubmit={handleSubmit(authneticate)}>
      <h2>Log in</h2>
      <input
        type="text"
        placeholder="Email or username"
        {...register("identity", {
          required: "Имя пользователя или имэил обязательно",
        })}
      />
      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Пароль обязателен",
          minLength: {
            value: 6,
            message: "Пароль должен быть не менее 6 символов",
          },
        })}
      />
      <button aria-busy={loading} type="submit">
        Log in
      </button>
      {loginError && (
        <p
          style={{
            color: "red",
          }}
        >
          {loginError}
        </p>
      )}
    </form>
  );
}
