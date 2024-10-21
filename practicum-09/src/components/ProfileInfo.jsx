import { useAuth } from "../context/AuthContext";

export default function ProfileInfo() {
  const { userData, logOut } = useAuth();
  return (
    <div>
      <h2>Profile</h2>
      <img
        src={`https://pocketbase-ns48884kwosgw00swo440g0o.ipbez.kz/api/files/_pb_users_auth_/${userData.id}/${userData.avatar}`}
        alt={userData.name}
      />
      <p>{userData.name}</p>
      <p>{userData.email}</p>
      <p>{userData.username}</p>
      <button onClick={logOut}>LogOut</button>
    </div>
  );
}
