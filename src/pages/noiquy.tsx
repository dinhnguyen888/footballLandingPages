import React from "react" 


import Navbar from "../components/navbar";
import BigText from "../components/bigtext";
import Footer from "../components/footer";
import TextMain from "../components/text";
import Banner from "../components/banner";
import Body from "../components/body";


const NoiQuy = () => {
	return (
		<>
			<Navbar />
			<Banner text="NỘI QUY" />
			<Body>
				<div className="w-full">
					<BigText customClass=" container text-red-600 text-2xl mx-28 my-7 " string="B. NỘI QUY"/>
					<BigText customClass=" container font-bold text-xl mx-28 text-blue-700 my-9  " string="1. KHUNG GIỜ THI ĐẤU"/>
					<TextMain customClass="mx-28 my-5 text-base" string="
					a) BTC sẽ ra lịch trên group<br>
                    <br>
                    b) Không được tự ý dàn xếp đá trước mà không có quyết định từ BTC.<br>
                    <br>
                    c) Giờ thi đấu tự do, các HLV tự hẹn nhau trên nhóm Messenger để đá.<br>
                    <br>


					"/>


                    <BigText customClass=" container font-bold text-xl mx-28 text-blue-700 my-9  " string="2. THI ĐẤU BÙ"/>
					<TextMain customClass="mx-28 my-5 text-base" string="
					a) Các trận thi đấu quá hạn, trễ lịch: sẽ được thi đấu bù vào 1 ngày theo lịch trình.<br>
                    <br>
                    b) Điều này chỉ áp dụng với các HLV thi đấu ít nhất 1 trận trong 2 ngày gần nhất.<br>
                    <br>
                    c) Nếu trong 2 ngày gần nhất không đá trận nào thì bị xử thua 0-3 và không áp dụng thi đấu bù.<br>
                    <br>
                    d) Nhưng trường hợp HLV đó đã nhiều lần gọi đối thủ mà vẫn không được thì hãy chụp màn hình tin nhắn gửi BTC để xem xét.<br>
                    <br>
                    e) Nếu HLV không trả lời tin nhắn đối thủ, không có bất cứ trận đấu nào trong 2 ngày liên tiếp thì sẽ bị tính là bỏ giải và xử lý theo 'Luật số 5 mục e'.<br>
                    <br>
                    
					"/>

                    <BigText customClass=" container font-bold text-xl mx-28 text-blue-700 my-9  " string="3. LỖI DISS KẾT NỐI/OUT NGANG"/>
					<TextMain customClass="mx-28 my-5 text-base" string="
					a) Mỗi vận động viên tham gia giải đấu phải chịu trách nhiệm về một lối chơi công bằng và cạnh tranh.<br>
                    <br>
                    b) Nếu Vận động viên đang xếp sau và không còn cơ hội chiến thắng tự ý thoát khỏi Trò chơi (tức là bỏ một Trò chơi đang diễn ra) thì sẽ bị trừ 6 điểm và xử thua 0-3 trận đó.<br>
                    <br>
                    c) Tái phạm thì sẽ bị kick khỏi giải đấu ngay lập tức.<br>
                    <br>
                    d) Các vấn đề mất kết nối hoặc lỗi game do lỗi hệ thống cần được ghi lại qua video hoặc ảnh chụp màn hình thể hiện lỗi. Trọng tài sẽ xử lý tình huống phù hợp với dữ liệu nhận được.<br>
                    <br>
                    e) Để tránh lỗi này, các Vận động viên hãy đảm bảo Wifi ổn định.<br>
                    <br>
                    f) Lúc bị out thì cả 2 bên hãy tự thống nhất với nhau đá lại.<br>
                    <br>
                    g) Một trận mà một Vận động viên bị out 03 lần trở lên thì BTC sẽ xử thua 0-3 ngay lập tức<br>
                    <br>
                    h) Lỗi out ngang vào các phút sau đây:<br>
                    *** Lúc đá lại, Nếu đã có bàn thắng, không nhất thiết phải phản lưới nhà để trả bàn thắng, tỉ số sẽ được cộng thêm sau đó.<br>
                    <br>
                    <10' : Giữ nguyên tỉ số - Đá lại toàn trận<br>
                    <br>
                    >10 đến Half-time: Giữ nguyên tỉ số, đá lại từ phút bị out<br>
                    <br>
                    >45 đến <60: Giữ nguyên tỉ số, đá lại đến Half-time.<br>
                    <br>
                    >60 đến <85: Giữ nguyên tỉ số, đá lại tính kết quả đến phút 30:00''<br>
                    <br>
                    >85 đến Full-time: Giữ nguyên tỉ số, đá lại tính kết quả đến phút 15:00''<br>
                    <br>
					"/>

                    <BigText customClass=" container font-bold text-xl mx-28 text-blue-700 my-9  " string="4. HÀNH VI"/>
					<TextMain customClass="mx-28 my-5 text-base" string="
					a) Không được có hành vi thiếu đẹp mắt, không fair-play với đối thủ và gây ảnh hưởng tới giải đấu.<br>
                    <br>
                    b) Không dùng lời lẽ lăng mạ, xúc phạm, chửi bới lẫn nhau.<br>
                    <br>
                    c) Đây là hành vi mà BTC sẽ xử lý nghiêm khắc.<br>
                    <br>
                    d) Nếu lần đầu vi phạm thì sẽ bị trừ 3 điểm fairplay cảnh cáo.<br>
                    <br>
                    e) Lần thứ 2 sẽ bị trừ 6đ fairplay<br>
                    <br>
                    f) Lần thứ 3 tái phạm nữa thì bị cho vào danh sách đen, kick ra khỏi giải.<br>
                    <br>
                    g) Trong thời gian diễn ra giải đấu, nếu BTC phát hiện Vận động viên mạo danh, đang hoặc từng đi lừa đảo, gian lận thì sẽ bị kick ngay lập tức.<br>
                    <br>
                    h) Các danh hiệu ( chưa trao thưởng ) sẽ bị tước, trao giải lại cho người thứ hạng tiếp theo.<br>
                    <br>
					"/>

                    <BigText customClass=" container font-bold text-xl mx-28 text-blue-700 my-9  " string="5. BỎ GIẢI / RÚT LUI KHỎI GIẢI"/>
					<TextMain customClass="mx-28 my-5 text-base" string="
					a) Rút lui khỏi giải khi giải đấu chưa bắt đầu một trận đấu nào đã vội xin hoặc tự động out giải.<br>
                    <br>
                    b) Rút lui khỏi giải BTC vẫn sẽ không hoàn phí nếu đã đóng. BTC sẽ thay thế bằng một VĐV khác hoặc không.<br>
                    <br>
                    c) Bỏ giải là khi giải đấu đã diễn ra xong ít nhất 01 trận mà đã vội xin hoặc tự động out giải.<br>
                    <br>
                    d) Bỏ giải thì cũng sẽ không được hoàn phí.<br>
                    <br>
                    e) Bỏ giải thì mọi kết quả trước đó đều và các trận còn lại xử thua 0-3.<br>
                    <br>
                    
					"/>

                   

<BigText customClass=" container font-bold text-xl mx-28 text-blue-700 my-9  " string="6. LỜI CẢM ƠN VÌ ĐÃ ĐỌC XONG NỘI QUY"/>
					<TextMain customClass="mx-28 my-5 text-base" string="
                a) BTC xin chân thành cảm ơn các HLV tham gia<br>
                <br>
                b) Điều đó đã giúp cho BTC tạo nên một mảng nội quy cần thiết và công bằng để cho tất cả HLV tham gia giao lưu vui vẻ với nhau là chủ yếu.<br>
                <br>
                c) Các HLV cũng nên tự giác hơn trong trách nhiệm của mình vì điều đó cũng coi như là góp phần giúp sức cho BTC phát triển giải đấu ngày một càng chuyên nghiệp hơn.<br>
                
					"/>
				</div>	



			</Body>

			<Footer />
		
		</>	
	)
}



export default NoiQuy;
