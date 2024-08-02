import styles from "../style";
import { skills, languagesAndFrameworks } from "../constants";

const Hero = () => (
    <div className={`flex flex-row md:${styles.paddingY} md:${styles.paddingX}`}>
        <div className="flex flex-col space-y-8">
            <div className={`flex flex-col`}>
                <h1 className={styles.heading2}>Soft Skills</h1>
                <hr className="border-t-2 border-gray-400 w-full my-4"/>
                <ul className="mb-8">
                    {skills.map((skill) => (
                        <h4 className={`font-poppins font-normal text-white text-[18px] leading-[23px] mt-4 ${styles.tweenScale}`}>{skill.content}
                        </h4>
                    ))}
                </ul>
                <hr className="border-t-2 border-gray-400 w-full my-4"/>
                <h1 className={styles.heading2}>Frameworks & Languages</h1>
                <hr className="border-t-2 border-gray-400 w-full my-4"/>
                <ul>
                    {languagesAndFrameworks.map((skill) => (
                        <h4 className={`font-poppins font-normal text-white text-[18px] leading-[23px] mt-4 ${styles.tweenScale}`}>{skill.content}
                        </h4>
                    ))}
                </ul>
                <hr className="border-t-2 border-gray-400 w-full my-4"/>
            </div>
        </div>
        <div className="flex flex-col space-y-8">
            <div className={`flex flex-col text-right`}>
                <h1 className={styles.heading2}>Soft Skills</h1>
                <hr className="border-t-2 border-gray-400 w-full my-4"/>
                <ul className="mb-8">
                    {skills.map((skill) => (
                        <h4 className={`font-poppins font-normal text-white text-[18px] leading-[23px] mt-4 ${styles.tweenScale}`}>{skill.content}
                        </h4>
                    ))}
                </ul>
                <hr className="border-t-2 border-gray-400 w-full my-4"/>
                <h1 className={styles.heading2}>Frameworks & Languages</h1>
                <hr className="border-t-2 border-gray-400 w-full my-4"/>
                <ul>
                    {languagesAndFrameworks.map((skill) => (
                        <h4 className={`font-poppins font-normal text-white text-[18px] leading-[23px] mt-4 ${styles.tweenScale}`}>{skill.content}
                        </h4>
                    ))}
                </ul>
                <hr className="border-t-2 border-gray-400 w-full my-4"/>
            </div>
        </div>
    </div>
);

export default Hero;
