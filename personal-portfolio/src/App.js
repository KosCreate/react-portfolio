import styles from './style'
import { Hero, NavBar, SkillsSection } from './components'

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>
    <div className={`bg-slate-950 ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <SkillsSection />
      </div>
    </div>
  </div>
)

export default App