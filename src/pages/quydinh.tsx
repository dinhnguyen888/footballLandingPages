import React from "react" 


import Navbar from "../components/navbar";
import BigText from "../components/bigtext";
import Footer from "../components/footer";
import TextMain from "../components/text";
import Banner from "../components/banner";
import Body from "../components/body";


const Quydinh = () => {
	return (
		<>
			<Navbar />
			<Banner text="QUY ĐỊNH ĐỘI HÌNH" />
			<Body>
				<div className="w-full">
					<BigText customClass=" container text-red-600 text-2xl mx-28 my-7 " string="C. ĐỘI HÌNH"/>
					
					<TextMain customClass="mx-28 my-5 text-base" string="
					a) Sử dụng đội hình tự do.<br>
                    <br>
                    b) Được phép thay đổi, mua cầu thủ khác trong lúc giải đấu diễn ra<br>
                    <br>
                    c) Giới hạn lương: 255/255<br>
                    <br>
                    d) Được phép buff HLV.<br>
                    <br>
                    e) Sử dụng sơ đồ tối đa 5 hậu vệ (hậu vệ gồm SW, LWB, LB, RCB, LCB, CB, RWB, RB)<br>
                    <br>
                    f) Phải chỉnh ở tất cả 10 sơ đồ chiến thuật tối đa 5 hậu vệ<br>
                    <br>
                    g) Các tình huống vi phạm<br>
                    
					"   />
                    <BigText customClass=" container font-bold text-xl mx-28 text-blue-700 my-9  " string="Khi bên A phát hiện bên B vi phạm, sẽ có các tình huống sau đây:" />
                    
					<TextMain customClass="mx-28 my-5 text-base" string="
			  -A phát hiện và chụp ảnh chứng minh B vi phạm ở phòng chờ hoặc trước khi trận đấu bắt đầu của trận 1:<br>
             Báo ngay cho bên B để bên B chỉnh sửa (vì chưa bắt đầu trận 1).<br> <br>
             -A phát hiện và chụp ảnh chứng minh B vi phạm ở khi trận đấu đã bắt đầu 00:01s của trận 1:<br>
             Đá lại trận 1 nếu A đồng ý đá lại.<br>
             B sẽ bị xử thua nếu A không đồng ý đá lại trận 1.<br><br>
             -A phát hiện và chụp ảnh chứng minh B vi phạm ở phòng chờ hoặc trước khi trận đấu bắt đầu của trận 2:<br>
             Đá lại trận 1 nếu A đồng ý đá lại<br>
             Giữ nguyên kết quả trận 1 nếu A không đồng ý đá lại và chấp nhận kết quả đó (vì chưa bắt đầu trận 2).<br><br>
             -A phát hiện và chụp ảnh chứng minh B vi phạm ở khi trận đấu đã bắt đầu 00:01s của trận 2:<br>
             Đá lại trận 2 nếu A đồng ý đá lại.<br>
             B sẽ bị xử thua nếu A không đồng ý đá lại trận 2.<br><br>
             -A phát hiện và chụp ảnh chứng minh B vi phạm ở phòng chờ hoặc trước khi trận đấu bắt đầu của trận 3:<br>
             Đá lại trận 2 nếu A đồng ý đá lại.<br>
             Giữ nguyên kết quả trận 2 nếu A không đồng ý đá lại và chấp nhận kết quả đó (vì chưa bắt đầu trận 3).<br>
             Trận 1 giữ nguyên kết quả.<br><br>
             -A phát hiện và chụp ảnh chứng minh B vi phạm ở khi trận đấu đã bắt đầu 00:01s của trận 3:<br>
             Đá lại trận 3 nếu A đồng ý đá lại.<br>
             B sẽ bị xử thua nếu A không đồng ý đá lại trận 3.<br>
             Trận 1 giữ nguyên kết quả.<br><br>



					"/>
     <BigText customClass=" container font-bold text-xl mx-28 text-blue-700 my-3  " string="Các trận tiếp theo cũng theo công thức như vậy!!!" />
     <BigText customClass=" container font-bold text-xl mx-28 text-blue-700 my-3  " string="Các HLV có trách nhiệm kiểm tra chéo lẫn nhau để tăng tính công bằng cho giải!!!" />
				</div>	



			</Body>

			<Footer />
		
		</>	
	)
}



export default Quydinh;
