data = [
{
    name: "Arni Parikh",
    desc:"Working with bulls and bears has been a tremendous journey. A fun-filled experience with a lot of new learning opportunities, the club had it all! It definitely provided me with a stepping stone for my future endeavours and sharpened my skills. Bulls and Bears will always remain close to my heart.",
    img:"Arni parikh.jpg"
},
{
    name: "Arni Parikh",
    desc:"Working with bulls and bears has been a tremendous journey. A fun-filled experience with a lot of new learning opportunities, the club had it all! It definitely provided me with a stepping stone for my future endeavours and sharpened my skills. Bulls and Bears will always remain close to my heart.",
    img:"Arni parikh.jpg"
}
]

function advisor(id){
load = ''

for (let i = 0; i < data.length; i++) {
    const element = data[i];


    load+=`<div class="testimonial-item p-4 p-lg-5">
<p class="mb-4">${element.desc}</p>
<div class="d-flex align-items-center justify-content-center">
    <img class="img-fluid flex-shrink-0" src="img/${element.img}" alt="">
    <div class="text-start ms-3">
        <h5>${element.name}</h5>
        <span class="text-primary">ADVISOR</span>
    </div>
</div>
</div>`;
    
}
document.getElementById(id).innerHTML = load;
}