function footBar(id) {
    let load = "";
  
  load+=`        
  <div class="container-fluid bg-dark footer mt-5 py-5 wow fadeIn"
  data-wow-delay="0.1s">
  <div class="container py-5">
      <div class="row g-5">
          <div class="col-lg-3 col-md-6">
              <h4 class="text-primary mb-4">Our Location</h4>
              <p class="mb-2"><i
                      class="fa fa-map-marker-alt text-primary me-3"></i>Pandit
                  Denndayal Energy University,Gandhinagar</p>
              <p class="mb-2"><i
                      class="fa fa-phone-alt text-primary me-3"></i>+91
                  9510882766</p>
              <p class="mb-2"><i
                      class="fa fa-envelope text-primary me-3"></i>info@example.com</p>
              <div class="d-flex pt-3">
                    <a
                        class="btn btn-square btn-primary rounded-circle me-2"
                        href="https://instagram.com/bullsandbears_pdeu?igshid=MzRlODBiNWFlZA"><i class="bi bi-instagram"></i></a>
                    <a
                        class="btn btn-square btn-primary rounded-circle me-2"
                        href="https://chat.whatsapp.com/LkyHY7jmPw3LoUxicQjKPP"><i class="bi bi-whatsapp"></i></a>
                        <a
                        class="btn btn-square btn-primary rounded-circle me-2"
                        href="https://www.facebook.com/Bullsandbearspdpu/"><i class="fab fa-facebook-f"></i></a>
                        <a
                        class="btn btn-square btn-primary rounded-circle me-2"
                        href="https://www.linkedin.com/company/bulls-bearspdeu/"><i class="fab fa-linkedin-in"></i></a>
              </div>
          </div>
          <div class="col-lg-3 col-md-6">
              <h4 class="text-primary mb-4">Quick Links</h4>
              <a class="btn btn-link" href="about.html">About Us</a>
              <a class="btn btn-link" href="contact.html">Contact Us</a>
              <a class="btn btn-link" href="event.html">Our Events</a>
              <a class="btn btn-link" href="findepth.html">Findepth Magazine</a>
              <a class="btn btn-link" href="blog.html">Blog</a>
              <a class="btn btn-link" href="#">Photo Gallery</a>
          </div>
          <div class="col-lg-3 col-md-4">
              <h4 class="text-primary mb-4">CLUB TIMINGS</h4>
              <p class="mb-1">Monday - Friday</p>
              <h6 class="text-light">09:00 am - 06:00 pm</h6>
              </div>
              <div class="col-lg-3 col-md-6">
              <h4 class="text-primary mb-4">Register</h4>
              <p>Thank you for being a part of the finance world</p>
              <div class="position-relative w-100">
              <input
              class="form-control bg-transparent w-100 py-3 ps-4 pe-5"
              type="text" placeholder="Your email">
                  <button type="button"
                      class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                      </div>
                      </div>
                      </div>
  </div>
</div>`;
    document.getElementById(id).innerHTML = load;
}
//   <a
//   class="btn btn-square btn-primary rounded-circle me-2"
//   href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
//   <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
// </svg></a>
// <a
// class="btn btn-square btn-primary rounded-circle me-2"
// href><i class="fab fa-youtube"></i></a>
{/* <p class="mb-1">Saturday-Sunday</p>
<h6 class="text-light">Closed</h6> */}