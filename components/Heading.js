import { useEffect } from 'react';

const Heading = ({ isDarkTheme }) => {
    useEffect(() => {
        let headingText = document.getElementById("headingText");
        let headingBG = document.getElementById("headingBG");
        headingText.style.color = isDarkTheme ? '#ffffff' : '#293356';
        headingBG.style.opacity = isDarkTheme ? 0.2 : 1;
    })

    return(
        <div className="max-w-[85%] lg:max-w-[55%] mx-auto text-center p-[40px] relative mt-[70px]">
            <div className="text-[#293356] font-manrope8 text-[24px] lg:text-[32px] duration-[1s] ease-in-out" id="headingText">Simple, traffic-based pricing</div>
            <div className="text-[#858fad] font-manrope6 text-[14px] lg:text-[16px] mt-[10px]">Sign-up for our 30-day trial. No credit card required.</div>
            <img src="pattern-circles.svg" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] scale-[1.1] -z-10 duration-[2s]" id="headingBG" />
        </div>
    );
}

export default Heading;