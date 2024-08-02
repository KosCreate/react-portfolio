import { layout } from "../style";
import styles from "../style";
import { skills, languagesAndFrameworks, gameEngines, IDEs, toolsAndServices } from "../constants";

const DisplayData = ({title, content}) => (
    <div className={`flex items-center flex-col w-[720px]`}> 
        <h1 className={`${styles.heading2} text-center`}>{title}</h1>
        <div className={`bg-white-gradient rounded-[50px] mb-[10px] mt-[10px] p-6 ${styles.tweenScale}`}>
                <ul>
                    {content.map((item) => (
                        <div className="flex flex-row justify-between space-y-5">
                            <h4 className={`font-poppins font-normal text-center text-white text-[24px] leading-[23px] mt-9`}>{item.content}
                            </h4>
                            <img src={item.icon} className="w-[50px] h-[50px] ml-[50px]"/>
                        </div>
                    ))}
                </ul>
        </div>
    </div>
)

const SkillsSection = () => (
    <section className={`flex flex-row ${layout.sectionReverse} items-center`}>
        <div className="flex flex-col space-y-8">
            <DisplayData title="Soft Skills" content={skills}/>
            <DisplayData title="Languages & Frameworks" content={languagesAndFrameworks}/>
            <DisplayData title="Game Engines" content={gameEngines}/>
            <DisplayData title="IDEs" content={IDEs}/>
            <DisplayData title="Tools & Services" content={toolsAndServices}/>
        </div>
        <div className="flex flex-col space-y-8">
            <DisplayData title="Soft Skills" content={skills}/>
            <DisplayData title="Languages & Frameworks" content={languagesAndFrameworks}/>
            <DisplayData title="Game Engines" content={gameEngines}/>
            <DisplayData title="IDEs" content={IDEs}/>
            <DisplayData title="Tools & Services" content={toolsAndServices}/>
        </div>
    </section>
);

export default SkillsSection;
