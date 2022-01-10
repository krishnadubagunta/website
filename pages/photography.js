import getProducts from '../utils/products'
import Container from '@mui/material/Container'
import Navbar from "../components/Navbar"
import Box from '@mui/material/Box'
import Card from '../components/Card'
import Flexbox from '../components/Flexbox'
import Image from 'next/image'
import CancelIcon from '@mui/icons-material/Cancel'
import Link from 'next/link'
import Modal from 'react-modal'
import ViewportHeightComponent from '../components/ViewportHeight'
import ReactMasonry from 'react-masonry-css'
import getProduct from '../utils/products/productId'
import { Masonry } from 'masonic'
import { styled } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'

export default function Photos({ products }) {

  const masonComponent = useMemo(() => <div>
    <Masonry
      items={products}
      columnGutter={4}
      columnWidth={425}
      render={({data : { sys, asset, title, }}) => {
        const { url, height, width } = asset
        return <motion.div >
          <Card
            href={`/products/${sys.id}`}
            imageUrl={url}
            height={height}
            width={width}
            title={title}
            id={sys.id}
          />
        </motion.div>
        }
      }
    />
  </div>, [products])
  return  <>
    <div className='my-8 h-full'>
      <div className='flex justify-center'>
        <div className='w-11/12'>
          { masonComponent }
        </div>
      </div>
    </div>
  </>
}

export async function getStaticProps() {
  const data = await getProducts()

  return {
    props: {
      products: data.productCollection.items
    },
    revalidate: 10,
  }
}
