import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./routes/Routes.tsx";
import {Header} from "./components/Header.tsx";
import {useDuelStore} from "./stores/useUserStore.tsx";
import {useEffect} from "react";
import CookieManager from "./utils/cookieManager.ts";
import {customEvent} from "./utils/customEvent.ts";

;

function App() {
    const {setIsLoggedIn} = useDuelStore();

    useEffect(() => {
        const isLoggedIn = CookieManager.getItem('isLoggedIn');

        setIsLoggedIn(!!isLoggedIn);
    }, []);

    customEvent.on('changeCookie',()=> {
        setTimeout(()=> {
            const isLoggedIn = CookieManager.getItem('isLoggedIn');

            setIsLoggedIn(!!isLoggedIn);
        }, 0);
    })

  return (
        <Router>
            <Header/>
            <div className="pages-container">
                <Routes />
            </div>
        </Router>
  )
}

export default App;
