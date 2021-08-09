import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Card from '../../components/Card'
import { Masonry } from 'masonic'
import Link from 'next/link'
import Navbar from "../../components/Navbar"

export default function Home({ products }) {
  return (<>
    <Container maxWidth='xl'>
      <Navbar />
    </Container>
    <Container maxWidth='xl'>
      <Box m={4}>
        <Masonry
          items={products}
          columnGutter={4}
          columnWidth={475}
          render={({data : { sys, asset, title }}) => {
            const { url, height, width } = asset
            return <Card
                linkTo={`/products/${sys.id}`}
                imageUrl={url}
                height={height}
                width={width}
                title={title}
                id={sys.id}
              />
            }
          }
        />
      </Box>
    </Container>
  </>
  )
}
