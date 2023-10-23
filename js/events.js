var array=[
    {
        title: "STOCKS 101",
        date: "26 October 2023",
        imgSRC:"img/event/event-4.jpg",
        href:"event-4.html",
        reg:"registration_form.html",
    },
    {
        title: "Fin-Shooting",
        date: "27 September 2023",
        imgSRC:"img/event/event-3.jpg",
        href:"event-3.html",
        reg:"",
    },
    {
        title: "Subcommittee Interview",
        date: "2,3,4 September 2023",
        imgSRC:"img/event/event-2.jpg",
        href:"event-2.html",
        reg:"",
    },
    {
        title: "Introductory event",
        date: "28 August 2023",
        imgSRC:"img/event/event-1.jpg",
        href:"event-1.html",
        reg:"",
    }
    ]
    function events(id){
        let load = "";
        for(i=0;i<array.length;i++){
            load +=`<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.${i+2}s">
                <div class="segment-item position-relative text-center">
                    <img class="img-fluid" src="${array[i].imgSRC}" alt="">
                    <div class="p-4">
                        <h4 class="mb-3">${array[i].title}</h4>
                        <p>Bulls & Bears</p>
                        <h4 class="text-primary">${array[i].date}</h4>
                    </div>
                    <div class="segment-overlay">
                        <a href="${array[i].href}" class="btn btn-primary rounded-pill py-2 px-4 m-2">More Detail <i class="fa fa-arrow-right ms-2"></i></a>
                        <a href="${array[i].reg}" class="btn btn-dark rounded-pill py-2 px-4 m-2">Register for the event <i class="fa fa-arrow-right ms-2"></i></a>
                    </div>
                </div>
            </div>`;
        }
        document.getElementById(id).innerHTML = load;
    }
