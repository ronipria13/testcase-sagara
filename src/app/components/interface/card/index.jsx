import React from 'react'
import { useHistory } from 'react-router'
import Loading  from '../loading'

const Card = ({data,loading,error}) => {
    const router = useHistory()
    const setDataLocal = (value) => {
        localStorage.setItem('data', JSON.stringify(value))

        router.push('/detail')
    }
console.log(error)
    return (
        <>
         {
             error !== true ? (
                    loading === false ? (
                        <div className="container mt-5">
                        <div className="flex flex-col ">
                        {
                            data.map((value,key)=>(
                                <div key={key} className="my-6">
                                <div className=" rounded shadow-xl overflow-hidden border md:w-4/5  lg:w-4/5 w-full mx-auto  bg-white ">
                                        <div className="w-full flex justify-between p-3">
                                        <div className="flex">
                                            
                                            <span className="pt-1 px-2 ml-2 font-bold text-xl">{value.title}</span>
                                        </div>
                                        <span className="px-2 hover:bg-gray-300 cursor-pointer rounded"><i className="fas fa-ellipsis-h pt-2 text-lg"></i></span>
                                        </div>
                                        <img className="w-full px-8 rounded-3xl py-2 bg-cover h-96" src={value.urlToImage} alt={value.description} />
                                        <div className="px-3 pb-2">
                                        <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium"></div>
                                        <div className="mb-2 px-8">
                                            <div className="mb-2 text-base">
                                            {value.content}
                                            </div>
                                            <button type="button" className="text-green-500 py-5" onClick={()=> setDataLocal(data[key])}>Baca Selengkapnya...</button>.
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                    }
                </div>
                </div>

                ):(
                        <Loading title="Mohon Menunggu . . . . "/>
                    )
             ) :
             (
                 <p className="container text-center mt-5 text-2xl font-semibold">Mohon Maaf Data Tidak Dapat Ditampilkan . . . . </p>
             )
         }
        </>
    )
}

export default Card
