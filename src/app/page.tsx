'use client'
import Card from '@/components/card/page'
import styles from './page.module.css'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import supabase from '../../supabase'

export interface IProduct {
  id: number
  product: string
  category: string
  image: string
  displayName: string
  link: string
  text: string
  price: number
}

const CardDisplay = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #202020;
  padding: 32px;
  gap: 32px;
`

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>()

  useEffect(() => {
    const getProducts = async () => {
      const { data, error } = await supabase.from('products').select()
      if (data) {
        setProducts(data)
      }
    }
    getProducts()
  }, [])
  console.log(products)
  return (
    <main className={styles.main}>
      <CardDisplay>
        {products?.map((product, index) => (
          <Card
            image="https://m.media-amazon.com/images/I/61VMf4NG7lL._AC_SL1100_.jpg"
            link={`${product.link}`}
            name={product.displayName}
            text={product.text}
            category={product.category}
            price={product.price}
          />
        ))}
      </CardDisplay>
    </main>
  )
}
