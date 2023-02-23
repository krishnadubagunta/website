import Link from '../Link';
import getCameraTypes from '../../utils/products/cameraTypes'
import capitalize from 'lodash/capitalize';
import { useMemo } from 'react';

export default async function Sidebar({ cameraType }) {
    const types = await getCameraTypes()

    const typesElements = types.map((path) => <Link
        className={`${path === cameraType ? 'font-normal' : 'font-light'}`}
        key={path}
        href={`/photography/${path}`}
    >
        { capitalize(path) }
    </Link>)


    return <div className='my-8 ml-8 sticky top-1'>
        <div className=''>
            { typesElements }
        </div>
    </div>
}
