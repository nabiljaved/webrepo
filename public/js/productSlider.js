let span = document.querySelectorAll('#arrows');
let span2 = document.querySelectorAll('#arrows_rack');
	let product = document.getElementsByClassName('product')
	let product_page = Math.ceil(product.length/4);
	console.log( Math.ceil(product.length/4))
	let l = 0;
	let movePer = 25.34;
	let maxMove = 203;
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 50.36;
	 	maxMove = 504;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		if (product == 1){l = 0; }
		for(const i of product)
		{
			console.log(i)
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span[1].onclick = ()=>{
		console.log("clicked")
		right_mover();
	}
	span[0].onclick = ()=>{
		console.log("clicked")
		left_mover();
	}

	span2[1].onclick = ()=>{
		console.log("clicked")
		right_mover();
	}
	span2[0].onclick = ()=>{
		console.log("clicked")
		left_mover();
	}