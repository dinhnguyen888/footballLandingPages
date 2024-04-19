import React from "react"
import Banner from "../components/banner"
import Footer from "../components/footer";

import Body from "../components/body";
import BigText from "../components/bigtext";
import TextMain from "../components/text";
const Giaithuong = () => {
	return (	

		<>	
			<Banner text=""/>
			<Body>
				<div className="flex flex-col justify-center h-full">
			 <BigText customClass=" mx-44 text-xl my-5 text-blue-900    " string="GIẢI THƯỞNG"/>

			 <TextMain customClass="mx-44 text-base" string="
			     VÔ ĐỊCH: 350<br>
				 GIẢI NHÌ: 200<br>
				 HẠNG 3: 100<br>
				 HẠNG TƯ: 50<br>" />
			 
			 
					</div>
					</Body>
			<Footer />
		</>
		)
        }
        export default Giaithuong