import { businessLinks } from "../constants";
import { portfolio_picture } from "../assets";
import styles from "../style";

const NavBar = () => (
  <nav className={`w-full flex items-center py-6 bg-primary navbar`}>
    <div className={`w-full flex flex-col-reverse md:flex-row items-center justify-between`}>
      {/* Text Section */}
      <div className="flex flex-col mt-4 md:mt-0">
        <h1 className="font-poppins font-medium text-white text-[40px] md:text-[50px] md:text-left text-center">
          Kostas Athanasiou
        </h1>
        <h2 className="text-gray-400 font-poppins text-[25px] md:text-[30px] md:text-left text-center">
          Software Engineer | .Net Framework & Games Programmer
        </h2>
        <div className="flex flex-row mt-[15px]">
          {businessLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url}>
              <img 
                src={link.icon}
                alt={link.name}
                className={`w-[60px] h-[60px] md:w-[70px] md:h-[70px] mr-5 rounded-full ${styles.tweenScale}`}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <img 
        src={portfolio_picture} 
        alt="portfolio" 
        className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] mt-[15px] md:mt-0 rounded-full object-cover"
      />
    </div>
  </nav>
);

export default NavBar;
