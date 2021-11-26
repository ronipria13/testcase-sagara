import  { useEffect, useState } from 'react'
import { Card} from '../../components/interface'
import {DefaultLayout} from '../../components/layout'

const Home = () => {
    let [dataBerita,setDataBerita] = useState([])
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState(false)
    useEffect(() => {
      
        const getDataBerita = async () => {
            setLoading(true)
            try {
                const response = await fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=01ea7b6b191d4897a31cc5745f640c66',{
                method: 'GET',
            });
            const data = await response.json();
                if (data.status === 'ok') {
                    setDataBerita(data.articles)
                    setLoading(false)   
                }
            } catch (er) {
                setLoading(false)
                setError(true)
            }
        }

        getDataBerita()
    }, [])



    return (
        <DefaultLayout title="Home">
          <section className="px-40 py-7 mx-auto lg:h-128  shadow-md lg:space-x-8 lg:flex lg:items-center ">
                <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
                    <h1 className="text-3xl leading-snug text-blue-500 dark:text-gray-200 md:text-6xl">
                        <span className="font-semibold text-green-400">TestCase Portal Berita</span>
                    </h1>
                </div>
                <div className="w-full h-full md:h-96 lg:h-96 mt-4 lg:mt-0 lg:w-1/2">
                    <img className="w-full h-full mx-auto" src="/images/tes.svg" alt="web designer" />
                </div>
            </section>
            

         
                    <Card 
                    data={dataBerita}
                    loading={loading} 
                    error={error}  
                    />
           
           


        </DefaultLayout>
    )
}

export default Home
    