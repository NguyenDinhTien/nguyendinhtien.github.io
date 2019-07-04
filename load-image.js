document.addEventListener("DOMContentLoaded",function(){
	var imgs=document.querySelectorAll('.muchItem .oneItem'),
    links=document.querySelectorAll('.link'),
    black=document.querySelector('.black'),
    close=document.querySelector('.close'),
    infoImg=document.querySelector('.infoImg'),
    listImg=document.querySelectorAll('.blockImg ul li'),
    leftBtn=document.querySelector('.left'),
    rightBtn=document.querySelector('.right');



        //khi click nen den
        black.addEventListener('click',function(){
        	black.classList.remove('show');
        	infoImg.classList.remove('show');
    	//phai khai bao o trong vi khi click den moi co active
    	var anhactive=document.querySelector('li.active');
        anhactive.classList.remove('active');
    })
        //dung chung cho anh
        thutucuaactive=0;

        for (var i = 0; i < imgs.length; i++) {
        	imgs[i].addEventListener('click',function(){
        		black.classList.add('show');
        		infoImg.classList.add('show');
        		var anhduocclick=this;

        		for (var chiso= 0; anhduocclick=anhduocclick.previousElementSibling; chiso++) {}

					//in ra phan tu duoc active
				thutucuaactive=chiso;
				listImg[chiso].classList.add('active');
				

			})

        }
        // Prevent show image
        for (var i = 0; i <links.length ; i++) {
            links[i].addEventListener('click',function(e){
                e.stopPropagation();
            })
        }
        
        
        var hientai2=thutucuaactive;
        rightBtn.addEventListener('click',function(){
        	
        	var soluonganh=listImg.length-1;
        	
        	hientai2=(hientai2<soluonganh)?(hientai2+1):0;
        	var phantutieptheo=listImg[hientai2];

        	document.querySelector('li.active').classList.remove('active');
        	phantutieptheo.classList.add('active');
        })


        leftBtn.addEventListener('click',function(){

            var soluonganh=listImg.length-1;
            
            hientai2=(hientai2<soluonganh)?(hientai2-1):0;
            var phantutieptheo=listImg[hientai2];

            document.querySelector('li.active').classList.remove('active');
            phantutieptheo.classList.add('active');
        })


    },false)