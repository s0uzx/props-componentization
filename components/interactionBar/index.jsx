import styles from '../interactionBar.module.css';

const InteractionBar = () => {
  return (
    <div className={styles.interactionBar}>
    <div className={styles.interactionButton}>
      <span>👍</span>
      <span>{meme.likes}</span>
    </div>
    <div className={styles.interactionButton}>
      <span>💬</span>
      <span>{meme.comments}</span>
    </div>
    <div className={styles.interactionButton}>
      <span>🔄</span>
      <span>Share</span>
    </div>
    <div className={styles.interactionButton}>
      <span>🔖</span>
      <span>Save</span>
    </div>
  </div>
  );
}


export default InteractionBar;