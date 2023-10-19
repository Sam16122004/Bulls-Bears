var heads=[
    {
        imgSRC:"img/Parva_jani.jpg",
        name: "Parva Jani",
        designation: "President",
    },
    {
        imgSRC:"img/Parva_jani.jpg",
        name: "Parva Jani",
        designation: "President",
    },
    {
        imgSRC:"img/Parva_jani.jpg",
        name: "Parva Jani",
        designation: "President",
    },
    ]
    function head(id){
        let load = "";
        for(i=0;i<heads.length;i++){
            load +=`<div class="owl-carousel TEAM-carousel wow fadeInUp"
            data-wow-delay="0.5s"><a href class="d-block TEAM-item rounded">
            <img src="${heads[i].imgSRC}" alt>
            <div
                class="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
                <h4 class="text-primary">${heads[i].name}</h4>
                <span class="text-body">${heads[i].designation}</span>
            </div>
        </a>`;
        }
        document.getElementById(id).innerHTML = load;
    }
