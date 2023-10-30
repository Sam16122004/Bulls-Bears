<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>BULLS & BEARS - The finance club of pdeu</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content name="keywords" />
    <meta content name="description" />

    <!-- Favicon -->
    <link href="img/favicon.ico" rel="icon" />

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Playfair+Display:wght@700;900&display=swap"
        rel="stylesheet" />

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

    <!-- Libraries Stylesheet -->
    <link href="lib/animate/animate.min.css" rel="stylesheet" />
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />

    <!-- Customized Bootstrap Stylesheet -->
    <link href="css/bootstrap.min.css" rel="stylesheet" />

    <!-- Template Stylesheet -->
    <link href="css/style.css" rel="stylesheet" />
</head>

<body>
    <!-- Spinner Start -->
    <div id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem"></div>
    </div>
    <!-- Spinner End -->

    <!-- Navbar Start -->
    <div id="navBox" class="container-fluid bg-white sticky-top" >
    </div>
    <!-- Navbar End -->

    <!-- Page Header Start -->
    <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container text-center py-5">
            <h1 class="display-2 text-dark mb-4 animated slideInDown">
                Event Registration
            </h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                    <li class="breadcrumb-item text-dark" aria-current="page">
                        Contact
                    </li>
                </ol>
            </nav>
        </div>
    </div>
    <!-- Page Header End -->

    <!-- Contact Start -->
    <header>
      <div class="container">
         <div class="row">
            <div class="col-md-12">
               <h1> Online Registration Form </h1>
            </div>
         </div>
      </div>
   </header>
   <div class="container mt-3">
      <div class="row">
         <div class="col-md-8">
            <form action="php/registration.php" method="post" enctype="multipart/form-data">
               <div class="card shadow mb-4">
                  <div class="card-body">
                     <div class="form-row">
                        <div class="col-md-12">
                           <h2 class="from-title"> Registration Form for Stocks 101 event <span> Step-1 </span> </h2>
                        </div>
                     </div>

                     <div class="form-group row">
                        <label class="col-md-4" for="company"> Name : </label>
                        <div class="col-md-8">
                           <input type="text" name="name" value="" size="40" class="required form-control"
                              placeholder="Enter Your Name" required>
                        </div>
                     </div>
                     <div class="form-group row">
                        <label class="col-md-4" for="company"> Roll Number : </label>
                        <div class="col-md-8">
                           <input type="text" name="roll" value="" size="40" class="required form-control dob"
                              placeholder="Roll Number"required>
                        </div>
                     </div>
                     <div class="form-group row">
                        <label class="col-md-4" for="company"> Email Id : </label>
                        <div class="col-md-8">
                           <input type="text" name="email" value="" size="40" class="required form-control dob"
                              placeholder="PDEU Email Id" required>
                        </div>
                     </div>
                     <div class="form-group row">
                        <label class="col-md-4" for="company"> School : </label>
                        <div class="col-md-8">
                           <select class="form-control my-select2" name="applyas" id="applyas"
                              onchange="studnts(this.value);setlbls('')">
                              <option value="">Select School</option>
                              <option value="SOT">SOT</option>
                              <option value="SLS">SLS</option>
                              <option value="SOET">SOET</option>
                              <option value="SOEM">SOEM</option>
                           </select required>
                        </div>
                     </div>
                     <div class="form-group row">
                        <label class="col-md-4" for="company"> Year : </label>
                        <div class="col-md-8">
                           <select name="board" id="board" class="form-control my-select2"
                              onchange="ch_borad(this.value)">
                              <option value="">Select Year</option>
                              <option value="1st">1st</option>
                              <option value="2nd">2nd</option>
                              <option value="3rd">3rd</option>
                              <option value="4th">4th</option>
                           </select required>
                        </div>
                     </div>
                     <div class="form-group row">
                        <label class="col-md-4" for="company"> Branch : </label>
                        <div class="col-md-8">
                           <input type="text" name="branch" value="" size="40" class="required form-control dob"
                              placeholder="Branch" required>
                        </div>
                     </div>
                     <div class="form-group">
                        <input type="file" name="fileToUpload"  id="fileToUpload">
                     </div>
                     <div class="form-group row">
                        <label class="col-md-4" for="company"> Contact Number : </label>
                        <div class="col-md-8">
                           <input type="text" name="contact" value="" size="40" class="required form-control dob"
                              placeholder="Contact Number" required>
                        </div>
                     </div>
                     <!-- <div class="form-row">
                          <div class="col-md-12">
                             <h3 class="from-title">  Details of Marks/Grade [Marks in Percentage, don't use symbol(%)] </h3>
                          </div>
                       </div>
                       <div class="form-group row">
                          <div class="col-md-4">
                             <label  for="company"> English : </label>
                             <input type="text" name="sub" value="" size="40"  class="required form-control sub" placeholder="English">
                          </div>
                          <div class="col-md-4">
                             <label  for="company"> Mathematics  : </label>
                             <input type="text" name="sub" value="" size="40"  class="required form-control sub" placeholder="Mathematics">
                          </div>
                          <div class="col-md-4">
                             <label  for="company"> Science : </label>
                             <input type="text" name="sub" value="" size="40"  class="required form-control sub" placeholder="Science">
                          </div>
                       </div>
                       <div class="form-group row">
                          <label class="col-md-4" for="company"> Board Roll No.   : </label>
                          <div class="col-md-8">
                             <input type="text" name="regno" id="regno" value="" size="40" class="required form-control" minlength="7" maxlength="7" placeholder="Enter Board Roll No.">
                          </div>
                       </div> -->
                     <p class="text-danger text-center"> Note:- keep draft ready before proceeding for online
                        registration. </p>
                     <div class="form-group">
                        <div class="text-center">
                           <input type="submit" class="btn btn-success px-4" value="Upload Image" name="Proceed to Register">
                           <!-- <input type="submit" class="btn btn-success px-4" name="Proceed to Register"> -->
                           <button class="btn btn-danger px-4"> Cancel </button>
                        </div>
                     </div>
                  </div>
               </div>
            </form>
         </div>
         <div class="col-md-4">
            <div class="card shadow mb-4" style="height:98%;">
               <div class="card-body">
                  <img class="img-fluid" src="img/event/Baazar.png">
               </div>
            </div>
         </div>
      </div>
   </div>
    <!-- Contact End -->

        <!-- Footer Start -->
        <div id="footBox" class="container-fluid bg-dark footer mt-5 py-5 wow fadeIn"
            data-wow-delay="0.1s">
        </div>
        <!-- Footer End -->

    <!-- Copyright Start -->
    <div class="container-fluid copyright py-4">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy;<a class="fw-medium" href="index.html">Bulls&BearsPdeu.com</a>
                    All
                    Right Reserved.
                </div>
                <div class="col-md-6 text-center text-md-end">
                    Designed By <a class="fw-medium">SAMYAK GANDHI</a>
                    MAINTAINED By
                    <a class="fw-medium">HARSH HIRANI</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Copyright End -->

    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i
            class="bi bi-arrow-up"></i></a>

   <!-- JavaScript Libraries -->
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
   <script src="lib/wow/wow.min.js"></script>
   <script src="lib/easing/easing.min.js"></script>
   <script src="lib/waypoints/waypoints.min.js"></script>
   <script src="lib/owlcarousel/owl.carousel.min.js"></script>

    <!-- Template Javascript -->
    <script src="js/main.js"></script>
    <script src="js/navbar.js"></script>
    <script>navbar('navBox');</script>
    <script src="js/footer.js"></script>
    <script>footBar('footBox');</script>
    <script> $(document).ready(function () {
        $('.my-select2').select2();
        $( ".dob" ).datepicker();
    });</script>
</body>

</html>