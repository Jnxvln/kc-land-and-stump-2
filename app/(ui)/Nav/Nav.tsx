import Link from 'next/link'
import DebugBorder from '../utils/DebugBorder'
import routes from './Links.json'

const Nav = () => {

  const renderRoutes = () => {
    return routes.map(route => (
      <DebugBorder key={route.id}>
          <Link href={route.url}>{route.content}</Link>
      </DebugBorder>
    ))
  }

  return (
	<nav>
    <div className="flex justify-between">
      {renderRoutes()}
    </div>
  </nav>
  )
}

export default Nav