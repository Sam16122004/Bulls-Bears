var array=[
    {
        title: "FINTASIA",
        date: "5 November 2023",
        time:"10 a.m. - 1 p.m.",
        venue:"D-002",
        imgSRC:"img/event/Fintasia.jpg",
        href:"event-6.html",
        reg:"https://shorturl.at/lmFR2",
    },
    {
        title: "BAZAAR 5.0",
        date: "4 November 2023",
        time:"10 a.m. - 4 p.m.",
        venue:"BLT-1",
        imgSRC:"img/event/Baazar.png",
        href:"event-5.html",
        reg:"https://shorturl.at/cmCFM",
        // reg:"registration_form.html",
    },
    {
        title: "STOCKS 101",
        date: "26 October 2023",
        time:"4 p.m. - 6 p.m.",
        venue:"C-103",
        imgSRC:"img/event/event-4.jpg",
        href:"event-4.html",
        reg:"expire.html",
    },
    {
        title: "Fin-Shooting",
        date: "27 September 2023",
        time:"4 p.m. - 6 p.m.",
        venue:"E-203",
        imgSRC:"img/event/event-3.jpg",
        href:"event-3.html",
        reg:"expire.html",
    },
    {
        title: "Subcommittee Interview",
        date: "2,3,4 September 2023",
        time:"10 a.m. - 1 p.m.",
        venue:"Google Meet/B block 1st Floor",
        imgSRC:"img/event/event-2.jpg",
        href:"event-2.html",
        reg:"expire.html",
    },
    {
        title: "Introductory event",
        date: "28 August 2023",
        time:"4 p.m. - 6 p.m.",
        venue:"E-202",
        imgSRC:"img/event/event-1.jpg",
        href:"event-1.html",
        reg:"",
    }
    ]
    function events(id){
        let load = "";
        for(i=0;i<array.length;i++){
            console.log(array[i])
            load +=`<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.${i+2}s">
                <div class="segment-item position-relative text-center">
                    <img class="img-fluid" src="${array[i].imgSRC}" alt="">
                    <div class="p-4">
                        <h4 class="mb-3">${array[i].title}</h4>
                        <h4 class="text-primary">${array[i].date}</h4>
                        <h5 class="text-primary">${array[i].time}</h5>
                        <h5 class="text-primary">${array[i].venue}</h5>
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
    function indexevents(id){
        let load = "";
        for(i=0;i<3;i++){
            load +=`<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.${i+2}s">
            <div class="segment-item position-relative text-center">
                <img class="img-fluid" src="${array[i].imgSRC}" alt="">
                <div class="p-4">
                    <h4 class="mb-3">${array[i].title}</h4>
                    <h4 class="text-primary">${array[i].date}</h4>
                    <h5 class="text-primary">${array[i].time}</h5>
                    <h5 class="text-primary">${array[i].venue}</h5>
                </div>
                <div class="segment-overlay">
                    <a href="${array[i].href}" class="btn btn-primary rounded-pill py-2 px-4 m-2">More Detail <i class="fa fa-arrow-right ms-2"></i></a>
                    <a href="./${array[i].reg}" class="btn btn-dark rounded-pill py-2 px-4 m-2">Register for the event <i class="fa fa-arrow-right ms-2"></i></a>
                </div>
            </div>
        </div>`;
        }
        document.getElementById(id).innerHTML = load;
    }
