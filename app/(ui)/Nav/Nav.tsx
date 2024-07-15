'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import routes from './Links.json'
import styles from './Nav.module.scss'

export default function Nav() {

  const pathname = usePathname()

  const renderRoutes = () => {
    return routes.map(route => (
      <Link key={route.id} href={route.url} className={`${styles.linkWrapper} ${pathname === route.url && styles.activeLink}`}>
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