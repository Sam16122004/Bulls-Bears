var array=[
	{
		imgSrc:"img/image gallery/5.jpg",
		caption:"STOCKS 101,27 October 2023 ",  
    },
	{
		imgSrc:"img/image gallery/13.jpg",
		caption:"STOCKS 101,27 October 2023 ",  
    },
	{
		imgSrc:"img/image gallery/14.jpg",
		caption:"STOCKS 101,27 October 2023 ",  
    },
	{
		imgSrc:"img/image gallery/15.jpg",
		caption:"STOCKS 101,27 October 2023 ",  
	},
	{
		imgSrc:"img/image gallery/16.jpg",
		caption:"STOCKS 101,27 October 2023 ",  
    },
	{
		imgSrc:"img/image gallery/17.jpg",
		caption:"STOCKS 101,27 October 2023 ",  
    },
	{
		imgSrc:"img/image gallery/19.jpg",
		caption:"Tessaract theme launch,6 October 2023 ",  
    },
	{
		imgSrc:"img/image gallery/21.JPG",
		caption:"Tessaract theme launch,6 October 2023 ",  
    },
	{
		imgSrc:"img/image gallery/22.JPG",
		caption:"Tessaract theme launch,6 October 2023 ",  
    },
	{
		imgSrc:"img/image gallery/23.JPG",
		caption:"Tessaract theme launch,6 October 2023 ",  
    },
	{
		imgSrc:"img/image gallery/25.JPG",
		caption:"Tessaract theme launch,6 October 2023 ",  
    },
	{
		imgSrc:"img/image gallery/26.JPG",
		caption:"Tessaract theme launch,6 October 2023 ",  
    },
	{
		imgSrc:"img/image gallery/28.jpg",
		caption:"Tessaract theme launch,6 October 2023 ",  
    },
	{
		imgSrc:"img/image gallery/29.jpg",
		caption:"Tessaract theme launch,6 October 2023 ",  
    },
	{
		imgSrc:"img/image gallery/1.jpg",
		caption:"Fin-Shooting,27 September 2023 ",  
    },
	{
		imgSrc:"img/image gallery/2.jpg",
		caption:"Fin-Shooting,27 September 2023 ",  
    },
	{
		imgSrc:"img/image gallery/3.jpg",
		caption:"Fin-Shooting,27 September 2023 ",  
    },
    ]
    function photo(id){
        let load = "";
        for(i=0;i<array.length;i++){
            load +=`<figure>
			<img
			  src="${array[i].imgSrc}"
			  alt=""
			  title="">
			<figcaption><font face= "Kalam">${array[i].caption}</font></figcaption>
		  </figure>`;
        }
        document.getElementById(id).innerHTML = load;
    }




"use strict";
(function () {
	window.onload = () => {
		const obj = document.querySelector("#gallery");
		const time = 10000;
		function animStart() {
			if (obj.classList.contains("active") == false) {
				obj.classList.add("active");
				setTimeout(() => {
					animEnd();
				}, time);
			}
		}
		function animEnd() {
			obj.classList.remove("active");
			obj.offsetWidth;
		}
		document.addEventListener("scroll", function () {
			// scroll or scrollend
			animStart();
		});
		window.addEventListener("resize", animStart);
		animStart();
	};
})();
