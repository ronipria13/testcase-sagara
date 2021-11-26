import React from 'react'
import { Card } from '../../components/interface'
import { DefaultLayout } from '../../components/layout'

const dataDetail = localStorage.getItem('data');
const Detail = () => {
    const data = [
        JSON.parse(dataDetail)
    ]
    return (
        <DefaultLayout>
            <Card data={data} loading={false} error={false}/>
        </DefaultLayout>
    )
}

export default Detail
