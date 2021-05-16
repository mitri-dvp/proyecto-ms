import styles from './../styles/Loader.module.css'
export default function Loader({loaded}) {
  if(!loaded) return (
    <div className={styles.container}>
    </div>
  )

  return ''

}
