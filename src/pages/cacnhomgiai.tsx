import React from "react"
import Banner from "../components/banner"
import Footer from "../components/footer";

import Body from "../components/body";
import BigText from "../components/bigtext";
const Cacnhomgiai = () => {
	return (	

		<>	
			<Banner text="CÁC NHÓM GIẢI"/>
			<Body>
				<div className="flex flex-col justify-center h-full">
				

			 <BigText customClass="text-center text-2xl my-7 text-blue-900 font-vietnam   " string="GROUP GIẢI ĐẤU TRÊN FACEBOOK "/>
			 <a href="https://www.facebook.com/groups/939885034118607" className="text-center my-4 text-xl text-blue-700 uppercase text-wrap underline">GREAT MATES(FC ONLINE)| FACEBOOK</a>

			 <BigText customClass="text-center text-2xl my-7 text-blue-900 font-vietnam    " string="BOX GIẢI ĐẤU TRÊN MESSENGER"/>
			<a href="https://m.me/j/AbZDVIVQ5tc8dOpg/" className="text-center my-4 text-xl text-blue-700 uppercase text-wrap underline">https://m.me/j/AbZDVIVQ5tc8dOpg/</a>
					</div>
					</Body>
			<Footer />
		</>
		)



}

export default Cacnhomgiai;
