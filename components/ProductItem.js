import Link from 'next/link'

export default function ProductItem({product}) {
  return (
    <div>
      <Link href={`/products/${product.slug}`}><a>{product.name}</a></Link>
    </div>
  )
}
