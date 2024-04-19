import React from "react" 


import Navbar from "../components/navbar";
import BigText from "../components/bigtext";
import Footer from "../components/footer";
import TextMain from "../components/text";
import Banner from "../components/banner";
import Body from "../components/body";


const Dieukien = () => {
	return (
		<>
			<Navbar />
			<Banner text="ĐIỀU KIỆN THAM DỰ" />
			<Body>
				<div className="w-full">
					<BigText customClass=" container text-red-600 text-2xl mx-28 my-7 " string="A.Điều kiện tham dự"/>
					<BigText customClass=" container font-bold text-xl mx-28 text-blue-700 my-9  " string="1. CHẤP NHẬN CÁC QUY ĐỊNH THUỘC ĐIỀU LUẬT GIẢI ĐẤU BÁN CHUYÊN QBFC GROUP"/>
					<TextMain customClass="mx-28 my-5 text-base" string="
					    1.Điều Kiện Tham Gia:<br>
						Tất cả các đội bóng muốn tham gia giải đấu phải đăng ký theo quy định của tổ chức.<br>
						Mỗi đội bóng cần tuân thủ các quy định về thành phần, độ tuổi, và bất kỳ quy tắc nào khác được quy định trước đó.<br><br>
				
					2.Hình Thức Thi Đấu:<br>
						Giải đấu có thể được tổ chức dưới nhiều hình thức khác nhau, bao gồm đấu loại trực tiếp, vòng tròn, hay theo thể thức giai đoạn vòng loại và vòng chung kết.<br>
						Các trận đấu diễn ra theo hình thức online<br><br>
				
					3.Quy Định Về Trò Chơi:<br>
						Các trận đấu phải tuân thủ các quy tắc cụ thể về thời gian, luật chơi và bất kỳ quy định nào khác liên quan đến trò chơi được quy định trước giải đấu.<br><br>
				
					4.Tính Công Bằng và Fair Play:<br>
						Mọi đội bóng và cầu thủ phải thể hiện tinh thần công bằng và fair play trong suốt quá trình thi đấu.<br>
						Các hành vi không đúng mực hoặc vi phạm quy định sẽ bị xử lý nghiêm khắc.<br> <br>
				
					5.Phần Thưởng:<br>
						Các phần thưởng cho các đội và cá nhân xuất sắc nhất sẽ được công bố trước giải đấu và phải tuân thủ các quy định liên quan.<br>
				<br>
					6.Quy Định Phụ Cấp:<br>
						Các quy định về phí đăng ký, phí tham gia và các khoản phí khác có thể áp dụng và phải được thanh toán đầy đủ và đúng hạn.<br>
				<br>
					7.Quy Định Đặc Biệt:<br>
						Bất kỳ quy định đặc biệt nào khác liên quan đến tổ chức và quản lý giải đấu sẽ được công bố và áp dụng tùy theo tình hình cụ thể của từng giải đấu.<br>
				<br>
				Những quy định này nhằm mục đích đảm bảo sự công bằng, minh bạch và cạnh tranh lành mạnh trong giải đấu của FC Online, tạo điều kiện thuận lợi cho sự phát triển của cộng đồng game thủ và người yêu bóng đá trên nền tảng trực tuyến.<br>

					"/>

<BigText customClass=" container font-bold text-xl mx-28 text-blue-700 my-9  " string="2. PHÍ ĐIỀU LỆ GIẢI ĐẤU"/>
					<TextMain customClass="mx-28 my-5 text-base" string="
					A) MỖI VẬN ĐỘNG VIÊN ĐÓNG PHÍ 50.000 VNĐ QUA CÁC CỔNG THANH TOÁN SAU ĐÂY.<br>
					B) VIETINBANK: 0886200436 CHỦ TÀI KHOẢN: PHAN DINH LONG<br>
					C) MOMO HOẶC THẺ CÀO VIETTEL: 0886200436 - CHỦ SĐT: PHAN DINH LONG<br>
					"/>

				</div>	



			</Body>

			<Footer />
		
		</>	
	)
}



export default Dieukien;
