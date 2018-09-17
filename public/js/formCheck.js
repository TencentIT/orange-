function vali(selector,reg,msg,e){
	var $txt=$(selector);
	if(reg.test($txt.val()))
		$txt.next().html("<img src='images/right.png'>");
	else{
		$txt.next().html(`<img src='images/err.png'>${msg}`);
		e.preventDefault();
	}
}
