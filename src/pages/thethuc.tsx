import React from "react"
import Banner from "../components/banner"
import Footer from "../components/footer";

import Body from "../components/body";
import BigText from "../components/bigtext";
import TextMain from "../components/text";
const Thethuc = () => {
	return (	

		<>	
			<Banner text=""/>
			<Body>
				<div className="flex flex-col justify-center h-full">
			 <BigText customClass=" text-xl mt-11 text-blue-900 mx-44   " string="	GM GROUP CUP - MÙA 2"/>




				<TextMain customClass="mx-44  text-base" string="

<br>
BAO GỒM 24 ĐỘI<br>
CHIA NGẪU NHIÊN THÀNH: 6 BẢNG<br>
MỖI BẢNG BAO GỒM 4 ĐỘI<br>
THI ĐẤU 90 PHÚT VÒNG TRÒN 2 LƯỢT TÍNH ĐIỂM<br><br>


NHẤT NHÌ MỖI BẢNG +4 ĐỘI CÓ THÀNH TÍCH XUẤT SẮC NHẤT ĐI TIẾP VÀO THI ĐẤU Ở VÒNG LOẠI TRỰC TIẾP<br>


TỪ VÒNG 16 ĐỘI SẼ THI ĐẤU THỂ THỨC BO3<br> <br>



					"/>
				
<BigText customClass=" text-xl mt-11 text-blue-900 mx-44   " string="Tính điểm bảng xếp hạng"/>

								<TextMain customClass="mx-44  text-base" string="
			
<br>
Thắng 3đ, hòa 1đ, thua 0đ <br>
<br>
Tiêu chí thứ tự xét khi bằng điểm <br>
<br>

    Hiệu số <br>
    <br>
    Đối đầu <br>
    <br>
    Bàn thắng <br>
    <br>

TÍNH ĐIỂM FAIR-PLAY <br>
<br>

					"/>

<BigText customClass=" text-xl mt-11 text-blue-900 mx-44   " string="tính điểm fairplay"/>

								<TextMain customClass="mx-44  text-base" string="
			

<br>
Khởi đầu giải, mỗi HLV sẽ được trang bị 3 điểm Fairplay <br>
<br>
Khi vi phạm, các điểm số sẽ bị giảm, và sau đây là các ngưỡng chạm điểm: <br>
<br>
Chạm 0đ: trừ 1 hiệu số bàn thắng thua <br>
<br>
Chạm -1đ: trừ 2 hiệu số bàn thắng thua <br>
<br>
Chạm -2đ trở về sau: trừ 1 điểm của BXH/lần <br>
<br>
Các lỗi vi phạm bị trừ: <br>
<br>
Không hoặc quên chụp ảnh xác minh khi thi đấu: -1đ fairplay/lần <br>
<br>
Đội hình, sơ đồ vi phạm: -1đ fairplay/lần <br>
<br>
Phát ngôn bừa bãi, gây war: -3đ fairplay (hoặc xem xét kick khỏi giải) <br>					"/>


					</div>
					</Body>
			<Footer />
		</>
		)
        }
        export default Thethuc
