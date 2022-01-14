<template>
    <nav
            class="navbar navbar-light navbar-glass navbar-top navbar-expand"
          >
            <button
              class="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarVerticalCollapse"
              aria-controls="navbarVerticalCollapse"
              aria-expanded="false"
              aria-label="Toggle Navigation"
            >
              <span class="navbar-toggle-icon"
                ><span class="toggle-line"></span
              ></span>
            </button>
            <a class="navbar-brand me-1 me-sm-3" href="index.html">
              <div class="d-flex align-items-center">
                <img
                  class="me-2"
                  src="assets/img/icons/spot-illustrations/falcon.png"
                  alt=""
                  width="40"
                /><span class="font-sans-serif">falcon</span>
              </div>
            </a>
            <ul class="navbar-nav align-items-center d-none d-lg-block">
              <li class="nav-item">
                <div class="search-box" data-list='{"valueNames":["title"]}'>
                  <form
                    class="position-relative"
                    data-bs-toggle="search"
                    data-bs-display="static"
                  >
                    <input
                      class="form-control search-input fuzzy-search"
                      type="search"
                      placeholder="Search..."
                      aria-label="Search"
                    />
                    <span class="fas fa-search search-box-icon"></span>
                  </form>
                  <div
                    class="btn-close-falcon-container position-absolute end-0 top-50 translate-middle shadow-none"
                    data-bs-dismiss="search"
                  >
                    <div class="btn-close-falcon" aria-label="Close"></div>
                  </div>
                  <div
                    class="dropdown-menu border font-base start-0 mt-2 py-0 overflow-hidden w-100"
                  ></div>
                </div>
              </li>
            </ul>
            <ul
              class="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center"
            >
              <li class="nav-item">
                <div class="theme-control-toggle fa-icon-wait px-2">
                  <input
                    class="form-check-input ms-0 theme-control-toggle-input"
                    id="themeControlToggle"
                    type="checkbox"
                    data-theme-control="theme"
                    value="dark"
                  />
                  <label
                    class="mb-0 theme-control-toggle-label theme-control-toggle-light"
                    for="themeControlToggle"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Switch to light theme"
                    ><span class="fas fa-sun fs-0"></span
                  ></label>
                  <label
                    class="mb-0 theme-control-toggle-label theme-control-toggle-dark"
                    for="themeControlToggle"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Switch to dark theme"
                    ><span class="fas fa-moon fs-0"></span
                  ></label>
                </div>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link pe-0"
                  id="navbarDropdownUser"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div class="avatar avatar-xl">
                    <img
                      class="rounded-circle"
                      src="assets/img/team/3-thumb.png"
                      alt=""
                    />
                  </div>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-end py-0"
                  aria-labelledby="navbarDropdownUser"
                >
                  <div class="bg-white dark__bg-1000 rounded-2 py-2">
                    <a
                      class="dropdown-item"
                      href="pages/authentication/card/logout.html"
                      >Logout</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </nav>
</template>
<script>
export default {
    name: "Sidebar"
}
</script>