function navbar(id) {
  let load = "";

load+=`<div class="container">
<nav class="navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0">
    <a href="index.html" class="navbar-brand">
        <img class="img-fluid" src="img/logo.png" alt="Logo">
    </a>
    <button type="button" class="navbar-toggler ms-auto me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto">
            <a href="index.html" class="nav-item nav-link">Home</a>
            <a href="about.html" class="nav-item nav-link">About</a>
            <a href="teammain.html" class="nav-item nav-link">TEAM</a>
            <a href="event.html" class="nav-item nav-link">EVENTS</a>
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div class="dropdown-menu bg-light rounded-0 m-0">
                    <a href="findepthmain.html" class="dropdown-item">FINDEPTH</a>
                    <a href="blog.html" class="dropdown-item">Blog</a>
                    <a href="financial_literacy.html" class="dropdown-item">FINANCIAL LITERACY</a>
                    <a href="bazaar.bullsandbearspdeu.com" class="dropdown-item">BAZAAR</a>
                </div>
            </div>
            <a href="contact.html" class="nav-item nav-link">Contact</a>
        </div>
        <div class="border-start ps-4 d-none d-lg-block">
            <button type="button" class="btn btn-sm p-0"><i class="fa fa-search"></i></button>
        </div>
    </div>
</nav>
</div>`;
  document.getElementById(id).innerHTML = load;
}
