import Box from '@material-ui/core/Box'
import Card from '../../components/Card'
import { Masonry } from 'masonic'
import Navbar from "../../components/Navbar"

export default function Home({ products }) {
  return (<>
    <Navbar />
    <Box m={4}>
      <Masonry
        items={products}
        columnGutter={4}
        columnWidth={450}
        render={({data : { sys, asset, title }}) => {
          const { url, height, width } = asset
          return <Card
            imageUrl={url}
            height={height}
            width={width}
            title={title}
            id={sys.id}
          />}
        }
      />
    </Box>
  </>
  )
}
