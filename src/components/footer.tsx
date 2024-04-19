import React from "react";
import BigText from "./bigtext";
import TextMain from "./text";

import { ReactComponent as SvgSmiley } from "../img/6196cb803af995a7cce8.svg";
const Footer = () => {
	return (
		<>
			<hr className="my-6 border-black w-10/12 mx-auto" />

			<div className="flex container justify-center mx-24">
			<SvgSmiley style={{ fill: "green", height:"100px", width:"100px" }} />

				<div className="block text-center mx-64">
					<BigText customClass="text-blue-900" string="TẠP CHÍ ĐIỆN TỬ"  />
					<BigText customClass="text-blue-900"  string="HỆ THỐNG GIẢI ĐẤU CỘNG ĐỒNG FC ONLINE -GREAT MATES GROUP"  />
					<TextMain customClass="mb-5" string="Vui chơi như nhà cái-thế trận thay đổi người chơi đắm đuối" />
					</div>
			</div>
			
		</>

	)
}

export default Footer;
