var array=[
    {
        title: "Findepth 01",
        date: "1 March 2021",
        imgSRC:"img/FINDEPTH 01 front_page.jpg",
        link:"findepth1.html"
    },

    {
        title: "Findepth 02",
        date: "2 June 2021",
        imgSRC:"img/FINDEPTH 02 front_page.jpg",
        link:"findepth2.html"
    },
    {
        title: "Findepth 03",
        date: "3 January 2022",
        imgSRC:"img/FINDEPTH 03 front_page.jpg",
        link:"findepth3.html"
    },
    {
        title: "Findepth 04",
        date: "4 July 2022",
        imgSRC:"img/FINDEPTH 04 front_page.jpg",
        link:"findepth4.html"
    },
    ]
    function findepth(id){
        let load = "";
        for(i=0;i<array.length;i++){
            load +=`<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.${i+2}s">
                <div class="segment-item position-relative text-center">
                    <img class="img-fluid" src="${array[i].imgSRC}" alt="">
                    <div class="p-4">
                        <div class="text-center mb-3">
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                            <small class="fa fa-star text-primary"></small>
                        </div>
                        <h4 class="mb-3">${array[i].title}</h4>
                        <p>issued on</p>
                        <h4 class="text-primary">${array[i].date}</h4>
                    </div>
                    <div class="segment-overlay">
                        <a href="${array[i].link}" class="btn btn-dark rounded-pill py-2 px-4 m-2">Read More<i class="fa fa-arrow-right ms-2"></i></a>
                    </div>
                </div>
            </div>`;
        }
        document.getElementById(id).innerHTML = load;
    }
