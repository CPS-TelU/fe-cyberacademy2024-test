import { poppins } from "@/styles/font";
import RegistrationPage from "../../components/contents/Registration";


export default function Registration() {
    return (
        <main className={`${poppins.className} py-4`}>
            <RegistrationPage/>
        </main>
    )

}