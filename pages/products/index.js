import {products} from '../../utils/db.js'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductItem from '../../components/ProductItem'

import styles from '../../styles/ProductsHome.module.css'

export default function ProductsHome() {
  return (
    <div>
      <Header/>

      <main className={styles.container}>
        <h1>PRODUCTOS</h1>
        {products.map(product => <ProductItem product={product} />)}
      </main>

      <Footer />
    </div>
  )
}
