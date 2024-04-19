import React from "react"
import Banner from "../components/banner"
import Footer from "../components/footer";

import Body from "../components/body";
import BigText from "../components/bigtext";
const Trangchu = () => {
	return (	

		<>	
			<Banner text=""/>
			<Body>
				<div className="flex flex-col justify-center h-full">
			 <BigText customClass="text-center text-3xl my-14 text-blue-900    " string="GIỚI THIỆU SƠ LƯỢC"/>

					<BigText customClass="text-center my-4 mx-11 " string="GIẢI BÓNG ĐÁ THỂ THAO ĐIỆN TỬ FC ONLINE GREAT MATES group là một sân chơi ảo được tổ chức trực tuyến dành cho các đội bóng đam mê, nơi họ có thể thể hiện tài năng, chiến thuật và sự gắn kết của mình thông qua trò chơi điện tử, là cơ hội để tạo ra các mối quan hệ mới, giao lưu văn hóa và cùng nhau xây dựng cộng đồng đam mê bóng đá." />
				
				<BigText customClass="text-center my-4 " string="GIẢI ĐẤU DO ADMIN Phan long THÀNH LẬP vào tháng 4 năm 2024. " />
				
				<BigText customClass="text-center my-4 mx-11 " string="Tại GREAT MATES group, các đội bóng sẽ tham gia vào các cuộc đối đầu kịch tính, từ vòng loại đến vòng chung kết, để tranh giành danh hiệu và phần thưởng hấp dẫn. Bằng cách sử dụng nền tảng trực tuyến, các thành viên có thể tương tác, thi đấu và theo dõi trận đấu mọi lúc, mọi nơi, chỉ cần có kết nối internet." />
				
				<BigText customClass="text-center my-4  mx-11 " string="FC Online cam kết cung cấp một môi trường công bằng và chuyên nghiệp, nơi mọi người đều có cơ hội để thể hiện bản thân và tận hưởng niềm vui của trò chơi." />
				
							
				<BigText customClass="text-center my-4 "string="Với sự đa dạng về độ tuổi, giới tính và kỹ năng, FC Online đang trở thành điểm đến lý tưởng cho những ai yêu thích bóng đá và trò chơi điện tử." />	
					</div>
					</Body>
			<Footer />
		</>
		)



}

export default Trangchu;
