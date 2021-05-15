import {products} from '../../utils/db.js'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import styles from '../../styles/Product.module.css'

export default function product({product}) {
  return (
    <div>
      <Header/>
      <main className={styles.container}>
        <h1>{product.name}</h1>
      </main>
      <Footer />
    </div>
  )
}


export async function getStaticProps({params: {slug}}) {
  // Retrieve all possible paths
  const product = products.filter((product) => product.slug === slug)

  // Return to NextJS context
  return  {
    props: {
      product: product[0], // Using a query will result in returning an array
    }
  }
}

export async function getStaticPaths() {
  // Return as Props
  return {
    paths: products.map(product => ({
      params: {
        slug: String(product.slug)
      }
    })),
    fallback: false // 404 error if no match
  }
}

