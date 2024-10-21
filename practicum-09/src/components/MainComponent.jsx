import { useAuth } from "../context/AuthContext";
import LoginForm from "./LoginForm";
import ProfileInfo from "./ProfileInfo";

export default function MainComponent() {
  const context = useAuth();

  if (context.userData) {
    return <ProfileInfo />;
  } else {
    return <LoginForm />;
  }
}
