import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { DefaultLayout } from '../../components/layout'
import * as Yup from 'yup';

const Validation = {
    email: "",
    password:""
}


export default function Login() {
    


    const submited = (value) => {
        alert(JSON.stringify(value))
    }

    const formik = useFormik({
        initialValues: Validation,
        validationSchema: Yup.object({
            email: Yup.string().required('Masukan Email').email('Email tidak valid'),
            password: Yup.string().required('Masukan Password').min(6, 'Password minimal 6 karakter').max(20, 'Password maksimal 20 karakter'),
        }),
        onSubmit: submited
    })



    return (
        <DefaultLayout>
            <div className="h-screen bg-white flex flex-col space-y-10 justify-center items-center">
 
        <div className=" flex w-96 ">
            <img className="h-20 w-20 mx-auto" src="/images/logo.jpg" alt="Logo" />
        </div>

        <div className="bg-white w-96 shadow-xl rounded p-5">
        <h1 className="text-3xl font-medium">Sagara</h1>
        <p className="text-sm">Halaman Login</p>
        <form onSubmit={formik.handleSubmit} className="space-y-5 mt-5">
            <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            name="email"
             type="text" 
             className="w-full h-12 border border-gray-800 rounded px-3" 
             placeholder="E-mail"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-xs italic">{formik.errors.email}</div>
              ) : null}

            <input 
            id="password"
            name="password"
            type="password" 
            className="w-full h-12 border border-gray-800 rounded px-3"  
            placeholder="Password" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-xs italic">{formik.errors.password}</div>
            ) : null}


            <button type="submit" className="text-center w-full bg-blue-700 rounded-full text-white py-3 font-medium">Login</button>

        </form>
        </div>

        <p><Link to="/registrasi" className="text-blue-700 font-medium">Registrasi</Link>  </p>
        </div>


        </DefaultLayout>
    )
}
