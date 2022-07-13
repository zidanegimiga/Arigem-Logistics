import styles from './Team.module.scss';
import director from '../../../public/director.png'
import manager from '../../../public/manager.png'
import marketer from '../../../public/marketer.png'
import TeamCard from '../Team Card';

const Team = () => {
  return (
    <div className={styles.sectionWrapper}>
      <h1>Meet our Team</h1>
      <div className={styles.cardsWrapper}>
        <TeamCard src={director} name="Rose Faith" title="Director"/>                   
        <TeamCard src={manager} name="Zidane Gimiga" title="General Manager"/>                   
        <TeamCard src={marketer} name="Lucky Audrey" title="Marketing"/>                   
      </div>
    </div>    
  )
}

export default Team;