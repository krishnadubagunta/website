import getCameraTypes from '../../utils/products/cameraTypes'

export default function Sidebar(props) {
    console.log("PROPS", props)
    return <>
        {
            // props.cameraTypes.map((cameraType) => <h1 key={cameraType}>{ cameraType }</h1>)
        }
    </>
}

export async function getStaticProps() {
    const data = await getCameraTypes()
    console.log("PRRRR", data)
    return {
        props: {
            cameraTypes: data.productCollection.items.map(({ cameraType }) => cameraType)
        },
        revalidate: 10,
    }
}
