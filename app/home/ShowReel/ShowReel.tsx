import Reel from './Reel/Reel'
import styles from './ShowReel.module.scss'

const ShowReel = () => {
  return (
	<section className={styles.container}>
		<Reel />
	</section>
  )
}

export default ShowReel