import { useFormik } from 'formik'
import { DefaultLayout } from '../../components/layout'
import * as Yup from 'yup'

const Validation = {
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    jenis_kelamin:"",
    provinsi:"",
    kota:"",
}


const kotasumut = [
    {
        nama: "binjai"
    },
    {
        nama: "medan"
    },
    {
        nama: "lubuk pakam"
    },
    {
        nama: "mandailing natal"
    },
    {
        nama: "tapanuli"
    }
]

const kotasumbar = [
    {
        nama: "padang"
    },
    {
        nama: "bukititnggi"
    },
    {
        nama: "pasaman"
    },
    {
        nama: "solok"
    },
    {
        nama: "solok selatan"
    }
]
export default function Registrasi() {

    const submited = (value) => {
        alert(JSON.stringify(value))
    }
    const formik = useFormik({
        initialValues: Validation,
        validationSchema: Yup.object({
            firstName: Yup.string().required('Masukkan First Name'),
            lastName: Yup.string().required('Masukkan Last Name'),
            email: Yup.string().required('Masukkan Email').email('Email tidak valid'),
            password: Yup.string().required('Masukkan Password').min(6, 'Password minimal 6 karakter').max(20, 'Password maksimal 20 karakter'),
            jenis_kelamin: Yup.string().required('Pilih Jenis Kelamin'),
            provinsi: Yup.string().required('Pilih Provinsi'),
            kota: Yup.string().required('Pilih Kota'),
        }),
        onSubmit: submited
    })
    
    const datakota = formik.values.provinsi === "2" ? kotasumut : formik.values.provinsi === "3"  ? kotasumbar : []
    
    // console.log(datakota)
    return (
        <DefaultLayout>
            <div className="w-full">
                <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                    <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
                        <p className="text-3xl font-bold leading-7 text-center">Registrasi</p>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="md:flex items-center mt-12">
                                <div className="w-full md:w-1/2 flex flex-col">
                                    <label className="font-semibold leading-none">First Name</label>
                                    <input 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.firstName}
                                    type="text" 
                                    name="firstName"
                                    className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                                    {formik.touched.firstName && formik.errors.firstName ? ( <p className="text-red-500 text-xs italic">{formik.errors.firstName}</p> ) : null}
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                    <label className="font-semibold leading-none">Last Name</label>
                                    <input 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.lastName}
                                    type="text" 
                                    name="lastName"
                                    className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                                    {formik.touched.lastName && formik.errors.lastName ? ( <p className="text-red-500 text-xs italic">{formik.errors.lastName}</p> ) : null}
                                </div>
                            </div>
                            <div className="md:flex items-center mt-8">
                                <div className="w-full flex flex-col">
                                    <label className="font-semibold leading-none">Email</label>
                                    <input 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    name="email"
                                    type="email" 
                                    className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                                    {formik.touched.email && formik.errors.email ? ( <p className="text-red-500 text-xs italic">{formik.errors.email}</p> ) : null}
                                </div>
                                
                            </div>
                            <div className="md:flex items-center mt-8">
                                <div className="w-full flex flex-col">
                                    <label className="font-semibold leading-none">Password</label>
                                    <input 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    type="password" 
                                    name="password"
                                    id="password"
                                    className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                                    {formik.touched.password && formik.errors.password ? ( <p className="text-red-500 text-xs italic">{formik.errors.password}</p> ) : null}
                                </div>
                                
                            </div>
                            <div className="md:flex items-center mt-8">
                                <div className="w-full flex flex-col">
                                    <label className="font-semibold leading-none">Jenis Kelamin</label>
                                    <select 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.jenis_kelamin}
                                    name="jenis_kelamin" 
                                    className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200">
                                        <option value="">Pilih Jenis Kelamin</option>
                                        <option value="laki-laki">Laki-laki</option>
                                        <option value="perempuan">Perempuan</option>
                                    </select>
                                    {formik.touched.jenis_kelamin && formik.errors.jenis_kelamin ? ( <p className="text-red-500 text-xs italic">{formik.errors.jenis_kelamin}</p> ) : null}
                                </div>
                            </div>
                            <div className="md:flex items-center mt-8">
                                <div className="w-full flex flex-col">
                                    <label className="font-semibold leading-none">Provinsi</label>
                                    <select 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.provinsi}
                                    name="provinsi" 
                                    className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200">
                                        <option value="">Pilih Provinsi</option>
                                        <option value="2">Sumatera Utara</option>
                                        <option value="3">Sumatera Barat</option>
                                    </select>
                                    {formik.touched.provinsi && formik.errors.provinsi ? ( <p className="text-red-500 text-xs italic">{formik.errors.provinsi}</p> ) : null}
                                </div>
                            </div>
                            <div className="md:flex items-center mt-8">
                                <div className="w-full flex flex-col">
                                    <label className="font-semibold leading-none">Kota</label>
                                    <select 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.kota}
                                    name="kota" 
                                    className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200">
                                        <option value="">Pilih Kota</option>
                                            {
                                                datakota.map((value,key) => (
                                                    <option key={key} value={value.nama}>{value.nama}</option>
                                                ))
                                            }

                                    </select>
                                    {formik.touched.kota && formik.errors.kota ? ( <p className="text-red-500 text-xs italic">{formik.errors.kota}</p> ) : null}
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <button 
                                type="submit"
                                className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 w-full focus:outline-none">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}
