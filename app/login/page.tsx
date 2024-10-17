import LoginPage from "@/components/contents/Login";
import { poppins } from "@/styles/font";



export default function Login() {
    return (
        <main className={`${poppins.className} py-4`}>
            <LoginPage/>
        </main>
    )

}