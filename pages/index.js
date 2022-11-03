import Heading from '../components/Heading'
import Slider from '../components/Slider'
import StartTrial from '../components/StartTrial'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    let mainBG = document.getElementById("mainBG");
    let BGDesign = document.getElementById("BGDesign");

    mainBG.style.backgroundColor = isDarkTheme ? '#293356' : '#fafbff' ;
    BGDesign.style.backgroundColor = isDarkTheme ? '#293356' : '#f1f5fe' ;
    BGDesign.style.borderBottom = isDarkTheme ? 'solid 2px #ffffff' : '' ;

    let toggleThemeBtnParent = document.getElementById("toggleThemeBtnParent");
    let toggleThemeBtnChild = document.getElementById("toggleThemeBtnChild");
    let toggleThemeText = document.getElementById("toggleThemeText");

    toggleThemeText.style.color = isDarkTheme ? '#f1f5fe' : '#293356';
  })

  function toggleTheme(){
    if(isDarkTheme){
      toggleThemeBtnChild.style.transform = 'translateX(0px)';
      toggleThemeBtnParent.style.backgroundColor = '#293356';
      setIsDarkTheme(false);
    }
    else{
        toggleThemeBtnChild.style.transform = 'translateX(25px)';
        toggleThemeBtnParent.style.backgroundColor = '#cdd7ee';
        setIsDarkTheme(true);
    }
  }

  return (
    <div className="absolute top-0 left-0 w-full h-screen -z-30 bg-[#fafbff] overflow-x-hidden transition-colors duration-[2s] ease-in-out" id="mainBG">
      {/* Background Design*/}
      <div className="absolute top-0 left-0 w-screen bg-[#f1f5fe] h-3/5 rounded-bl-[230px] -z-20 duration-[1s] ease-in-out" id="BGDesign"></div>
      <div className="flex bg-transparent absolute top-0 right-0 m-[7px] items-center">
      <div className="font-manrope8 text-[#293356] duration-[0.5s] ease-in-out mr-[7px]" id="toggleThemeText">Change theme</div>
        <div className="w-[55px] h-[30px] bg-[#293356] rounded-[15px] cursor-pointer duration-[0.5s] ease-in-out relative" id="toggleThemeBtnParent" onClick={() => toggleTheme()}>
          <div className="absolute w-[20px] h-[20px] top-[5px] left-[5px] rounded-[15px] bg-[#ffffff] translate-x-[0px] duration-[0.5s] ease-in-out" id="toggleThemeBtnChild"></div>
        </div>
      </div>
      
      <Heading isDarkTheme={isDarkTheme} />
      {/* Main Div */}
      <div className="bg-[#ffffff] max-w-[65%] md:max-w-[60%] lg:max-w-[55%] xl:max-w-[40%] mx-auto relative mt-[50px] mb-[90px] rounded-2xl drop-shadow-xl">
        <Slider isDarkTheme={isDarkTheme} />
        <hr />
        <StartTrial isDarkTheme={isDarkTheme} />
      </div>
    </div>
  )
}