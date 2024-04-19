import React from "react"
import Banner from "../components/banner"
import Footer from "../components/footer";

import Body from "../components/body";
import BigText from "../components/bigtext";
import GoogleSheetViewer from "../components/googlesheet";
const Ltd = () => {
    const sheetUrl = 'https://docs.google.com/spreadsheets/d/195XuQK0F_J8M5np2DUk_a1YI0Drsb_zTZrHi0458kRg/edit?fbclid=IwAR3rJ0wDLu3utyGEQnDyX7d8lDMbxdSPbr4EZlD_5QQYZQDPlEdCYVfUivc_aem_AUJDtg0EEvvoLKBB293x2iDWrbThNz1rdb-NyzndT2EeRjpmbvTpvGMq1c0X9CdqP0nYXceJwj0aYWVsVuKCrh8T#gid=1437060990';
	return (	

		<>	
			<Banner text=""/>
			<Body>
            
      <h1 className="text-center my-11 uppercase font-vietnam font-bold">Bảng xếp hạng</h1>
      <GoogleSheetViewer sheetUrl={sheetUrl} />
    
					</Body>
			<Footer />
		</>
		)



}

export default Ltd;
