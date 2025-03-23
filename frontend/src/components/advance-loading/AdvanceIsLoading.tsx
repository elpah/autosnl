import styles from "./advance-is-loading.module.scss"
import LoadingCarCard from '../loading-carcard/LoadingCarCard'
const AdvanceIsLoading = () => {
  return (
	 <div className={styles.container}>
      {Array.from({ length: 21 }).map((_, index) => (
        <LoadingCarCard key={index} />
      ))}
    </div>
  )
}

export default AdvanceIsLoading