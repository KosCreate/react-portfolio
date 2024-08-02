import { layout } from "../style";
import styles from "../style";
import { skills, languagesAndFrameworks, gameEngines, IDEs } from "../constants";

const DisplayData = ({title, content}) => (
    <div className={`flex flex-col`}> 
        <h1 className={`${styles.heading2} text-center`}>{title}</h1>
        <div className={`bg-black-gradient rounded-[50px] mb-[10px] mt-[10px] p-6 ${styles.tweenScale}`}>
                <ul>
                    {content.map((item) => (
                        <h4 className={`font-poppins font-normal text-center text-dimWhite text-[24px] leading-[23px] mt-4`}>{item.content}
                        </h4>
                    ))}
                </ul>
        </div>
    </div>
)

const SkillsSection = () => (
    <section className={`flex flex-col md:${styles.paddingY} md:${styles.paddingX}`}>
        <div className="flex flex-col space-y-8">
            <DisplayData title="Soft Skills" content={skills}/>
            <DisplayData title="Languages & Frameworks" content={languagesAndFrameworks}/>
            <DisplayData title="Game Engines" content={gameEngines}/>
            <DisplayData title="IDEs" content={IDEs} isRight={true}/>
            <DisplayData title="Game Engines" content={gameEngines}/>
        </div>
    </section>
);

export default SkillsSection;
