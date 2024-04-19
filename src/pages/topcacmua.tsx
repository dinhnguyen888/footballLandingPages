import React from "react"
import Banner from "../components/banner"
import Footer from "../components/footer";

import Body from "../components/body";
import BigText from "../components/bigtext";
const Topmua = () => {
	return (	

		<>	
			<Banner text="TOP CÁC MÙA "/>
			<Body>
				<div className="flex flex-col justify-center h-full">

                <img src={require('../img/topcacmua.jpg')} className="mx-auto w-10/12 my-11" alt="Banner" />
{/* cop ở trên rồi chèn hình ảnh mình thích vào */}


				</div>
			</Body>
			<Footer />
		</>
		)



}

export default Topmua;
