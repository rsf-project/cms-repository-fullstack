import { useCookies } from "react-cookie";
const Cookie = () => {
    const [cookies] = useCookies();
    return(
        <h1>{cookies.token.expired_at}awdawda</h1>
    );
};
export default Cookie;