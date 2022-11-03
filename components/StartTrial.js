import { useEffect } from "react";

const StartTrial = ({ isDarkTheme }) => {
    useEffect(() => {
        let tickMark1 = document.getElementById("tickMark1");
        let tickMark2 = document.getElementById("tickMark2");
        let tickMark3 = document.getElementById("tickMark3");

        tickMark1.style.stroke = isDarkTheme ? '#293356' : '#10d8c4';
        tickMark2.style.stroke = isDarkTheme ? '#293356' : '#10d8c4';
        tickMark3.style.stroke = isDarkTheme ? '#293356' : '#10d8c4';
    })

    return(
        <div className="flex flex-col lg:flex-row items-center justify-between font-manrope6 text-[#858fad] px-12 pt-10 pb-8 text-[14px]">
            <ul className="space-y-3">
                {/* <li><img src="icon-check.svg" className="scale-[1.3] inline mr-4" id="tickMarks" />Unlimited websites</li> */}
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" className="inline mr-4 scale-[1.3]">
                        <path fill="none" stroke="#10D8C4" stroke-width="2" d="M1 4.134l1.907 1.908L7.949 1" id="tickMark1" className="duration-[0.8s] ease-in-out" />
                    </svg>
                    Unlimited websites
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" className="inline mr-4 scale-[1.3]">
                        <path fill="none" stroke="#10D8C4" stroke-width="2" d="M1 4.134l1.907 1.908L7.949 1" id="tickMark2" className="duration-[0.8s] ease-in-out" />
                    </svg>
                    100% data ownership
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" className="inline mr-4 scale-[1.3]">
                        <path fill="none" stroke="#10D8C4" stroke-width="2" d="M1 4.134l1.907 1.908L7.949 1" id="tickMark3" className="duration-[0.8s] ease-in-out" />
                    </svg>
                    Email reports
                </li>
            </ul>
            <button className="bg-[#293356] px-14 py-3 mt-[30px] lg:mt-[0px] rounded-full text-[#bdccff] hover:border-[1px] hover:border-[#293356] hover:bg-white hover:text-[#293356] hover:drop-shadow-xl duration-[0.25s]">Start my trial</button>
        </div>
    );
}

export default StartTrial;