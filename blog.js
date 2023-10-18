var blogarray = [
        {
        imgSRC:"img/blog.jpg",
        date: "4 September 2023",
        title: "Today’s Space Mining is growing Tomorrow’s World Economy and Dreams",
        short:"BullsandBears - finance club at PDEU collaborated with Brahmand - Astronomy club at PDEU to bring together the world of finance and space.",
        para2:"",
        para3:"",
        para4:"",
        para5:"",
        para6:"",
        para7:"",
        para8:"",
        para9:"",
        para10:"",
        para11:"",
        para12:"",
        para13:"",

    },
];
function blog(id) {
    let load = "";
    for (i = 0; i < blogarray.length; i++) {
        load += `<div class="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <img class="img-fluid" src="${blogarray[i].imgSRC}" alt>
    </div>
    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
        <div class="section-title">
            <p class="fs-5 fw-medium fst-italic text-primary">${blogarray[i].date}</p>
            <h1 class="display-6">${blogarray[i].title}</h1>
        </div>
        <p class="mb-4 fst-italic">${blogarray[i].short}</p>
        <a href="" class="btn btn-primary rounded-pill py-3 px-5">Read More</a>
    </div>`;
    }
    document.getElementById(id).innerHTML = load;
}