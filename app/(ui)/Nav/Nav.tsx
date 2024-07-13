import Link from 'next/link'
import routes from './Links.json'
import styles from './Nav.module.scss'

export default function Nav() {
  const renderRoutes = () => {
    return routes.map(route => (
      // <div key={route.id} className={styles.linkWrapper}>
      //     <Link href={route.url}>{route.content}</Link>
      // </div>

      <Link key={route.id} href={route.url} className={styles.linkWrapper}>
        <div>{route.content}</div>
      </Link>
    ))
  }

  return (
	<nav>
    <div className={styles.linksContainer}>
      {renderRoutes()}
    </div>
  </nav>
  )
}