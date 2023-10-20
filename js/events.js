var array=[
    {
        title: "Subcommittee Interview",
        date: "2,3,4 September 2023",
        imgSRC:"img/event-2.jpg"
    },
    {
        title: "Fin-Shooting",
        date: "27 September 2023",
        imgSRC:"img/event-3.jpg"
    },
    {
        title: "Introductory event",
        date: "28 August 2023",
        imgSRC:"img/event-1.jpg"
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
                        <a href="" class="btn btn-primary rounded-pill py-2 px-4 m-2">More Detail <i class="fa fa-arrow-right ms-2"></i></a>
                        <a href="registration_form.html" class="btn btn-dark rounded-pill py-2 px-4 m-2">Register for the event <i class="fa fa-arrow-right ms-2"></i></a>
                    </div>
                </div>
            </div>`;
        }
        document.getElementById(id).innerHTML = load;
    }
