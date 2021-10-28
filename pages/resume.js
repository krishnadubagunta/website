import Home from '../screens/Home'
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
import getProduct from '../utils/products/productId'
import { motion } from 'framer-motion'

export default function Photos({ products }) {
  return  <>
  </>
}

export async function getStaticProps() {
  return {
    props: {}
  }
}
