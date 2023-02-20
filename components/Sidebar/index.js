'use client';
import { useEffect, useState } from 'react'
import uniq from 'lodash/uniq'
import getCameraTypes from '../../utils/products/cameraTypes'

export default function Sidebar() {
    

    useEffect(() => {
        getCameraTypes().then(({ productCollection }) => {
            setTypes(uniq(productCollection.items.map(({ cameraType }) => cameraType)))
        })
    }, [types, setTypes])

    return <div className='flex-col'>
            {
                types.map((cameraType) => <h1 key={cameraType}>{ cameraType }</h1>)
            }
        </div>

}
