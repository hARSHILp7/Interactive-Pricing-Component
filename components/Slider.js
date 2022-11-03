import styles from '../styles/Slider.module.css'
import { useEffect, useState } from 'react';

const Slider = ({ isDarkTheme }) => {
    const [isToggleBtnEnabled, setIsToggleBtnEnabled] = useState(false);
    const [riderSliderValue, setRiderSliderValue] = useState(50);

    useEffect(() => {
        let toggleBtnParent = document.getElementById("toggleBtnParent");
        let toggleBtnChild = document.getElementById("toggleBtnChild");
        toggleBtnParent.style.backgroundColor = isToggleBtnEnabled ? (isDarkTheme ? '#293356' : '#10d5c2') : '#cdd7ee';
        
        let pageReviewsDisplay = document.getElementById("pageReviewsDisplay");
        let priceDisplay = document.getElementById("priceDisplay");

        let rangeSlider = document.getElementById("rangeSlider");
        let filledSlider = document.getElementById("filledSlider");
        let sliderSelector = document.getElementById("sliderSelector");
        let sliderSelectorG = document.getElementById("sliderSelectorG");

        filledSlider.style.backgroundColor = isDarkTheme ? '#293356' : '#a5f3eb';
        sliderSelector.style.backgroundColor = isDarkTheme ? '#293356' : '#10d5c2';
        sliderSelector.style.boxShadow = isDarkTheme ? '0px 14px 40px rgb(41,51,86,1)' : '0px 14px 40px rgba(16,213,194,1)';
        sliderSelectorG.style.fill = isDarkTheme ? '#eef0f7' : '#80FFF3';
        
        pageReviewsDisplay.innerHTML =
        riderSliderValue == 0 ? (10 + 'k')
        : riderSliderValue == 25 ? (50 + 'k')
        : riderSliderValue == 50 ? (100 + 'k')
        : riderSliderValue == 75 ? (500 + 'k')
        : (1 + 'M');
        priceDisplay.innerHTML = 
        riderSliderValue == 0 ? (isToggleBtnEnabled ? 6 : 8)
        : riderSliderValue == 25 ? (isToggleBtnEnabled ? 9 : 12)
        : riderSliderValue == 50 ? (isToggleBtnEnabled ? 12 : 16)
        : riderSliderValue == 75 ? (isToggleBtnEnabled ? 18 : 24)
        : (isToggleBtnEnabled ? 27 : 36);

        rangeSlider.oninput = function(){
            if(rangeSlider.value == 0){setRiderSliderValue(0)}
            else if(rangeSlider.value == 25){setRiderSliderValue(25)}
            else if(rangeSlider.value == 50){setRiderSliderValue(50)}
            else if(rangeSlider.value == 75){setRiderSliderValue(75)}
            else if(rangeSlider.value == 100){setRiderSliderValue(100)}
            sliderSelector.style.left = rangeSlider.value + '%';
            filledSlider.style.width = rangeSlider.value + '%';
        }
    })

    function toggleBtn(){
        if(isToggleBtnEnabled){
            toggleBtnChild.style.transform = 'translateX(0px)';
            toggleBtnParent.style.backgroundColor = '#cdd7ee';
            setIsToggleBtnEnabled(false);
        }
        else{
            toggleBtnChild.style.transform = 'translateX(25px)';
            toggleBtnParent.style.backgroundColor = isDarkTheme ? '#293356' : '#10d5c2';
            setIsToggleBtnEnabled(true);
        }
    }

    return(
        <div className="px-12 py-10">
            {/* Pageviews & $ */}
            <div className="flex flex-col xl:flex-row items-center justify-between text-[#858fad] font-manrope6">
                <div className="font-manrope8 uppercase tracking-[3px] text-[12px] lg:text-[14px]"><text id="pageReviewsDisplay">100k</text> Pageviews</div>
                <div className="text-[14px] lg:text-[16px] tracking-[1px]">
                    <text className="text-[#293356] font-manrope8 text-[44px] lg:text-[54px] tracking-[0px]">$</text>
                    <text className="text-[#293356] font-manrope8 text-[44px] lg:text-[54px] tracking-[0px]" id="priceDisplay"></text>
                    <text className="text-[#293356] font-manrope8 text-[44px] lg:text-[54px] tracking-[0px]">.00 </text>
                    / month
                </div>
            </div>
            {/* Slider */}
            <div className="mx-auto w-[90%] mt-[30px] mb-[50px]">
                <div className="relative">
                    <input type="range" min="0" max="100" step="25" className={styles.rangeSlider} id="rangeSlider" />
                    <div className={styles.filledSlider} id="filledSlider"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className={styles.sliderSelector} id="sliderSelector">
                        <g fill-rule="evenodd" id="sliderSelectorG">
                            <path d="M16 2.558v7.884a1 1 0 001.735.679l3.639-3.943a1 1 0 000-1.356l-3.64-3.943A1 1 0 0016 2.558zM6 2.558v7.884a1 1 0 01-1.735.679L.626 7.178a1 1 0 010-1.356l3.64-3.943A1 1 0 016 2.558z"/>
                        </g>
                    </svg>
                </div>
            </div>
            {/* Billing */}
            <div className="flex flex-row text-[#858fad] font-manrope6 items-center justify-center text-[10px] lg:text-[14px] ml-[20px] md:ml-[40px] lg:ml-[70px] w-[90%]">
                {/* Monthly */}
                <div className="mr-[10px]">Monthly Billing</div>
                {/* Toggle Button */}
                <div className="min-w-[55px] h-[30px] bg-[#cdd7ee] rounded-[15px] m-[10px] relative cursor-pointer duration-[0.5s] ease-in-out" id="toggleBtnParent" onClick={() => toggleBtn()}>
                    <div className="absolute w-[20px] h-[20px] top-[5px] left-[5px] rounded-[15px] bg-[#ffffff] translate-x-[0px] duration-[0.5s] ease-in-out" id="toggleBtnChild"></div>
                </div>
                {/* Yearly */}
                <div className="ml-[10px]">Yearly Billing <text className="text-[11px] font-manrope8 bg-[#feece7] rounded-full px-[8px] py-[1px] text-[#ff8c66] ml-[5px]"><text className="inline lg:hidden">-</text>25% <text className="hidden lg:inline">discount</text></text></div>
            </div>
        </div>
    );
}

export default Slider;