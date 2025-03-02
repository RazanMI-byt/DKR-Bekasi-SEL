showReview();
function showReview() {
  videoSection.innerHTML = "";
  const videoSectionEl = document.createElement("div");
  videoSectionEl.classList.add("container");
  videoSectionEl.classList.add("light-bg");
  videoSectionEl.innerHTML = `
    <div class="row align-items-center">
            <div class="col-12 col-md-6 py-5">
              <h2>Helmi Sucipto Hatibie, S.Pd</h2>
              <p class="my-4">
                Ketua Kwartir Ranting Bekasi Selatan Masa bakti 2022-2025
              </p>

              <figcaption class="reviewer-info d-flex align-items-center mt-5">
                <img
                  class="rounded-circle"
                  src="https://i.pinimg.com/736x/db/28/83/db28839d48722d3a554760b44f24f4ac.jpg"
                  alt=""
                  srcset=""
                  style="width: 50px; height: 50px"
                />
                <div class="px-3">
                  <div class="fs-6 cl-blue-700 fw-bold">Helmi Sucipto Hatibie, S.Pd</div>
                  <span class="mt-1 cl-primary">Ketua Kwartir Ranting Bekasi Selatan</span>
                </div>
              </figcaption>
            </div>
            <div
              class="col-12 col-md-6 video-wrapper overflow-hidden b-6 position-relative"
            >
              <div
                class="action-wrapper position-absolute d-flex align-items-center text-white"
                style="bottom: 10%; left: 6%"
              >
                <i class="bi bi-play-circle-fill fs-1"></i>
                <a href="" class="mx-3 text-decoration-none text-white"
                  >Ketua</a
                >
              </div>
              <a href="#">
                <img
                  class="img-fit-cover"
                  src="https://i.pinimg.com/736x/db/28/83/db28839d48722d3a554760b44f24f4ac.jpg"
                  alt=""
                  srcset=""
                />
              </a>
            </div>
          </div>
    `;
  videoSection.appendChild(videoSectionEl);
}
