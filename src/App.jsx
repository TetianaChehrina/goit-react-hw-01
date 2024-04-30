import userData from "./userData.json";
import Profile from "./components/Profile/Profile.jsx";

export default function App()
{
  return (
    <>
     <Profile user={userData} />
    </>
  );
}
