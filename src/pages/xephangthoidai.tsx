import React from "react"
import Banner from "../components/banner"
import Footer from "../components/footer";

import Body from "../components/body";
import BigText from "../components/bigtext";
const Xephang = () => {
	return (	

		<>	
			<Banner text="BẢNG XẾP HẠNG NHÀ VÔ ĐỊCH"/>
			<Body>
				<div className="flex flex-col justify-center h-full">
				<BigText customClass="text-center text-3xl my-8 text-red-500    " string="MÙA 1 - NGUYỄN DUY ANH"/>
                <img src={require('../img/mua1.jpg')} className="mx-auto w-5/12 my-8" alt="Banner" />
{/* cop ở trên rồi chèn hình ảnh mình thích vào */}


				</div>
			</Body>
			<Footer />
		</>
		)



}

export default Xephang;
