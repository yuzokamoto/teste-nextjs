import { useRouter } from "next/router";
import { TOKEN_NAME } from "../constants/url";
import { goToLoginPage } from "../routes/coordinator";

export default function Header() {
    const router = useRouter();

    const logout = () => {
        window.localStorage.removeItem(TOKEN_NAME);
        goToLoginPage(router);
    };

    return (
        <header>
            <button onClick={logout}>Deslogar</button>
        </header>
    );
}
