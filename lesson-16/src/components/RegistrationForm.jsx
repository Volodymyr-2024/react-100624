import { useForm } from "react-hook-form";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function RegistrationForm() {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;

  function handleFormSubmit(values) {
    console.log("Form submitted", values);
  }

  return (
    <Card>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <CardHeader title="Register"></CardHeader>
        <CardContent>
          <Stack spacing={2}>
            <TextField
              variant="filled"
              label="First Name"
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              {...register("firstName", {
                required: "First name is required",
              })}
            />
            <TextField
              label="Last Name"
              error={Boolean(errors.lastName)}
              helperText={errors.lastName?.message}
              {...register("lastName", {
                required: "Last name is required",
              })}
            />
            <TextField
              label="Email"
              type="email"
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <TextField
              label="Password"
              type="password"
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
          </Stack>
        </CardContent>
        <CardActions>
          <Button variant="contained" type="submit">
            Register
          </Button>
        </CardActions>
      </form>
    </Card>
  );
}
