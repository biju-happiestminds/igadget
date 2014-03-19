$("./body") {
	add_class("ig_details")
	
	$(".//div[@id='SideNewProducts']") {
		remove()
	}
	
	$(".//div[@id='SideNewsletterBox']") {
		remove()
	}
	
	$(".//div[@id='ProductByCategory']") {
		remove()
	}
	//ProductDetails
	$(".//div[@id='ProductReviews']") {
		remove()
	}
	
	$(".//div[@class='Block Moveable Panel PrimaryProductDetails']") {
		add_class("ig_PrimaryProductDetails")
	}
	
	$$("#ProductDescription") {
		attribute("data-ur-set", "toggler")
		attribute("class","mw_menu_btn")
		$("h3") {
			attribute("data-ur-toggler-component", "button")
		}
		$(".//div[@class='ProductDescriptionContainer']") {
			attribute("data-ur-toggler-component", "content")
		}
		$("./ProductDescriptionContainer") {
			attribute("data-ur-toggler-component", "content")
		}/**/
	}
}