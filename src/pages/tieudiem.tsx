import React from "react"
import Banner from "../components/banner"
import Footer from "../components/footer";

import Body from "../components/body";
import BigText from "../components/bigtext";
import Click from "../components/clicktodetail";
const Tieudiem = () => {
	return (	

		<>	
			<Banner text="TIÊU ĐIỂM "/>
			<Body>
				<div className="flex flex-col justify-center h-full ">
                <br className="my-5"/>
            <Click description="demo" details={<div className="flex justify-between flex-wrap my-5">
                
                <img src={require('../img/BANNER-01.png')} className="w-[calc(25% - 2rem)] m-4 w-1/4 h-full" alt="Banner" />
                <img src={require('../img/BANNER-01.png')} className="w-[calc(25% - 2rem)] m-4 w-1/4 h-full" alt="Banner" />
                <img src={require('../img/BANNER-01.png')} className="w-[calc(25% - 2rem)] m-4 w-1/4 h-full" alt="Banner" />
                <img src={require('../img/BANNER-01.png')} className="w-[calc(25% - 2rem)] m-4 w-1/4 h-full" alt="Banner" />
            
                
                
                
                
                 </div>} />

                 <br className="my-5"/>
                 <Click description="demo" details={<div className="flex justify-between flex-wrap my-5">
                
                <img src={require('../img/BANNER-01.png')} className="w-[calc(25% - 2rem)] m-4 w-1/4 h-full" alt="Banner" />
                <img src={require('../img/BANNER-01.png')} className="w-[calc(25% - 2rem)] m-4 w-1/4 h-full" alt="Banner" />
                <img src={require('../img/BANNER-01.png')} className="w-[calc(25% - 2rem)] m-4 w-1/4 h-full" alt="Banner" />
                <img src={require('../img/BANNER-01.png')} className="w-[calc(25% - 2rem)] m-4 w-1/4 h-full" alt="Banner" />
            
                
                
                
                
                 </div>} />

                 <br className="my-5"/>
                 <Click description="demo" details={<div className="flex justify-between flex-wrap my-5">
                
                <img src={require('../img/BANNER-01.png')} className="w-[calc(25% - 2rem)] m-4 w-1/4 h-full" alt="Banner" />
                <img src={require('../img/BANNER-01.png')} className="w-[calc(25% - 2rem)] m-4 w-1/4 h-full" alt="Banner" />
                <img src={require('../img/BANNER-01.png')} className="w-[calc(25% - 2rem)] m-4 w-1/4 h-full" alt="Banner" />
                <img src={require('../img/BANNER-01.png')} className="w-[calc(25% - 2rem)] m-4 w-1/4 h-full" alt="Banner" />
            
                
                
                
                
                 </div>} />

                 <br className="my-5"/>
                 <Click description="demo" details={<div className="flex justify-between flex-wrap my-5">
                
                <img src={require('../img/BANNER-01.png')} className="w-[calc(25% - 2rem)] m-4 w-1/4 h-full" alt="Banner" />
                <img src={require('../img/BANNER-01.png')} className="w-[calc(25% - 2rem)] m-4 w-1/4 h-full" alt="Banner" />
                <img src={require('../img/BANNER-01.png')} className="w-[calc(25% - 2rem)] m-4 w-1/4 h-full" alt="Banner" />
                <img src={require('../img/BANNER-01.png')} className="w-[calc(25% - 2rem)] m-4 w-1/4 h-full" alt="Banner" />
            
                
                
                
                
                 </div>} />
				
                
		        </div>
					</Body>
			<Footer />
		</>
		)



}

export default Tieudiem;
