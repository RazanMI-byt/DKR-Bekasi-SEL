Footer();
function Footer() {
  const div = document.createElement("div");
  footer.innerHTML = "";
  div.classList.add("container");
  div.innerHTML = `
<div class="row gy-5">
<div class="col-12 col-sm-10 col-md-5 col-lg-5">
  <a href="#">
    <div class="brand-logo">
      <img
       
      />
    </div>
  </a>
  <div class="brand-tagline h2 my-3 w-75">
    Dewan Kerja Ranting Bekasi Selatan
  </div>
  <div class="brand-socials my-3 mt-4">
    <a href="#" class="mx-2"> <i class="bi bi-facebook"></i></a>
    <a href="#" class="mx-2"> <i class="bi bi-youtube"></i></a>
    <a href="#" class="mx-2"> <i class="bi bi-instagram"></i></a>
    <a href="#" class="mx-2"> <i class="bi bi-twitter"></i></a>
  </div>
</div>
<div class="col-12 col-md-7 col-lg-7">
  <div class="row gy-5">
    <div class="col-6 col-sm-5 col-lg-3">
      <div class="fw-6">DKR Bekasi Selatan</div>
      <div class="row gy-2 mt-2">
        <div><a href="#">About Us</a></div>
        <div><a href="#">Careers</a></div>
        <div><a href="#">Services</a></div>
        <div><a href="#">Blog</a></div>
      </div>
    </div>
    <div class="col-6 col-sm-5 col-lg-3">
      <div class="fw-6">Contact</div>
      <div class="row gy-2 mt-2">
        <div><a href="#">rantingbekasiselatan@gmail.com</a></div>
        <div><a href="#">+(62)85719326261</a></div>
          <div><a href="#">IG:dkrbekasiselatan</a></div>
          <div><a href="#">YT:dkrbekasiselatan</a></div>
      </div>
    </div>
    <div class="col-10 col-sm-10 col-lg-6">
      
        </form>
      </div>
    </div>
  </div>
</div>
</div>
`;
  footer.appendChild(div);
}
