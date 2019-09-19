$(function() {
	$("#tit4_1").click(function() {
		// setTimeout("alert('领取成功！！！')", 3000 )
		$(".read-later-alert").show();
		setTimeout(function() {
			$(".read-later-alert").hide();
			window.location.href = 'youhuijuan.html'
		}, 3000)
	});
})
