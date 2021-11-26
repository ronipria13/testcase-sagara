import { Detail, Home,Login,Registrasi } from "../pages";


const routes = [
    {
        key:"page-home",
        name: "home",
        Components: Home,
        path: "/"
    },
    {
        key:"page-login",
        name: "login",
        Components: Login,
        path: "/login"
    },
    {
        key:"page-registrasi",
        name: "registrasi",
        Components: Registrasi,
        path: "/registrasi"
    },
    {
        key:"page-registrasi",
        name: "detail",
        Components: Detail,
        path: "/detail"
    }
]

export default routes;