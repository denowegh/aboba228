import {Navigate, Route, Routes} from 'react-router-dom';
import { SignUp } from "../pages/SignUp.tsx";
import {Main} from "../pages/Main.tsx";
import {SignIn} from "../pages/SignIn.tsx";
import {useDuelStore} from "../stores/useUserStore.tsx";
import {Membership} from "../pages/Membership.tsx";

const RoutesComponent = () => {
    const {isLoggedIn} = useDuelStore();

  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/signUp" element={<SignUp/>} />
      <Route path="/signIn" element={<SignIn/>} />
        {
            isLoggedIn && (
                <>
                    <Route path={'/membership'} element={<Membership/>}/>
                </>
            )
        }
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default RoutesComponent;
