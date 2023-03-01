import { useContext } from "react";
import CenterSection from "../components/CenterSection";
import { AuthCtx, UserToken } from "../context/auth-context";
import { useJwt } from "react-jwt";

function ProfilePage() {
  const authContext = useContext(AuthCtx)!;
  const { decodedToken: user } = useJwt<UserToken>(authContext.authState.token);
  return (
    <CenterSection>
      <header>
        <h2 className="font-bold text-4xl text-indigo-400">Your Info</h2>
      </header>
      <div>
        <p className="font-semibold text-2xl capitalize">
          user name : <span className="text-amber-500">{user?.user_name}</span>
        </p>
        <p className="font-semibold text-2xl capitalize">
          Name : <span className="text-amber-500">{user?.name}</span>
        </p>
        <p className="font-semibold text-2xl capitalize">
          number : <span className="text-amber-500">{user?.number}</span>
        </p>
      </div>
    </CenterSection>
  );
}
export default ProfilePage;
