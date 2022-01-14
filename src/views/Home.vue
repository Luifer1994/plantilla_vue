<template>
  <div class="row g-3 mb-3">
    <div class="col-md-6 col-xxl-3">
      <div class="card h-md-100 ecommerce-card-min-width">
        <div class="card-header pb-0">
          <h6 class="mb-0 mt-2 d-flex align-items-center">
            Weekly Sales<span
              class="ms-1 text-400"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Calculated according to last week's sales"
              ><span
                class="far fa-question-circle"
                data-fa-transform="shrink-1"
              ></span
            ></span>
          </h6>
        </div>
        <div class="card-body d-flex flex-column justify-content-end">
          <div class="row">
            <div class="col">
              <span class="badge badge-soft-success rounded-pill fs--2"
                >+3.5%</span
              >
            </div>
            <div class="col-auto ps-0">
              <div class="h-100">
                <!-- Char -->
                <CharWeeklySales></CharWeeklySales>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xxl-3">
      <div class="card h-md-100">
        <div class="card-header pb-0">
          <h6 class="mb-0 mt-2">Total Order</h6>
        </div>
        <div class="card-body d-flex flex-column justify-content-end">
          <div class="row justify-content-between">
            <div class="col-auto align-self-end">
              <span class="badge rounded-pill fs--2 bg-200 text-primary"
                ><span class="fas fa-caret-up me-1"></span>13.6%</span
              >
            </div>
            <div class="col-auto ps-0">
              <div class="h-100">
                <!-- Char -->
                <CharOrders></CharOrders>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xxl-3">
      <div class="card h-md-100">
        <div class="card-body">
          <div class="row h-100 justify-content-between g-0">
            <div class="col-5 col-sm-6 col-xxl pe-2">
              <h6 class="mt-1">Market Share</h6>
              <div class="col-auto position-relative">
                <CharMarket></CharMarket>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xxl-3">
      <div class="card h-md-100">
        <div class="card-header d-flex flex-between-center pb-0">
          <h6 class="mb-0">Weather</h6>
          <div class="dropdown font-sans-serif btn-reveal-trigger">
            <button
              class="
                btn btn-link
                text-600
                btn-sm
                dropdown-toggle dropdown-caret-none
                btn-reveal
              "
              type="button"
              id="dropdown-weather-update"
              data-bs-toggle="dropdown"
              data-boundary="viewport"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="fas fa-ellipsis-h fs--2"></span>
            </button>
            <div
              class="dropdown-menu dropdown-menu-end border py-2"
              aria-labelledby="dropdown-weather-update"
            >
              <a class="dropdown-item" href="#!">View</a
              ><a class="dropdown-item" href="#!">Export</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item text-danger" href="#!">Remove</a>
            </div>
          </div>
        </div>
        <div class="card-body pt-2">
          <div class="row g-0 h-100 align-items-center">
            <div class="col">
              <div class="d-flex align-items-center">
                <img
                  class="me-3"
                  src="assets/img/icons/weather-icon.png"
                  alt=""
                  height="60"
                />
                <div>
                  <h6 class="mb-2">New York City</h6>
                  <div class="fs--2 fw-semi-bold">
                    <div class="text-warning">Sunny</div>
                    Precipitation: 50%
                  </div>
                </div>
              </div>
            </div>
            <div class="col-auto text-center ps-2">
              <div
                class="fs-4 fw-normal font-sans-serif text-primary mb-1 lh-1"
              >
                31&deg;
              </div>
              <div class="fs--1 text-800">32&deg; / 25&deg;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row g-0">
    <div class="col-lg-6 pe-lg-2 mb-3">
      <div class="card h-lg-100 overflow-hidden">
        <div class="card-header bg-light">
          <div class="row align-items-center">
            <div class="col">
              <h6 class="mb-0">Running Projects</h6>
            </div>
            <div class="col-auto text-center pe-card">
              <select class="form-select form-select-sm">
                <option>Working Time</option>
                <option>Estimated Time</option>
                <option>Billable Time</option>
              </select>
            </div>
          </div>
        </div>
        <div class="card-body p-0">
          <div
            class="
              row
              g-0
              align-items-center
              py-2
              position-relative
              border-bottom border-200
            "
          >
            <div class="col ps-card py-1 position-static">
              <div class="d-flex align-items-center">
                <div class="avatar avatar-xl me-3">
                  <div
                    class="avatar-name rounded-circle bg-soft-primary text-dark"
                  >
                    <span class="fs-0 text-primary">F</span>
                  </div>
                </div>
                <div class="flex-1">
                  <h6 class="mb-0 d-flex align-items-center">
                    <a class="text-800 stretched-link" href="#!">Falcon</a
                    ><span class="badge rounded-pill ms-2 bg-200 text-primary"
                      >38%</span
                    >
                  </h6>
                </div>
              </div>
            </div>
            <div class="col py-1">
              <div class="row flex-end-center g-0">
                <div class="col-auto pe-2">
                  <div class="fs--1 fw-semi-bold">12:50:00</div>
                </div>
                <div class="col-5 pe-card ps-2">
                  <div class="progress bg-200 me-2" style="height: 5px">
                    <div
                      class="progress-bar rounded-pill"
                      role="progressbar"
                      style="width: 38%"
                      aria-valuenow="38"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="
              row
              g-0
              align-items-center
              py-2
              position-relative
              border-bottom border-200
            "
          >
            <div class="col ps-card py-1 position-static">
              <div class="d-flex align-items-center">
                <div class="avatar avatar-xl me-3">
                  <div
                    class="avatar-name rounded-circle bg-soft-success text-dark"
                  >
                    <span class="fs-0 text-success">R</span>
                  </div>
                </div>
                <div class="flex-1">
                  <h6 class="mb-0 d-flex align-items-center">
                    <a class="text-800 stretched-link" href="#!">Reign</a
                    ><span class="badge rounded-pill ms-2 bg-200 text-primary"
                      >79%</span
                    >
                  </h6>
                </div>
              </div>
            </div>
            <div class="col py-1">
              <div class="row flex-end-center g-0">
                <div class="col-auto pe-2">
                  <div class="fs--1 fw-semi-bold">25:20:00</div>
                </div>
                <div class="col-5 pe-card ps-2">
                  <div class="progress bg-200 me-2" style="height: 5px">
                    <div
                      class="progress-bar rounded-pill"
                      role="progressbar"
                      style="width: 79%"
                      aria-valuenow="79"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="
              row
              g-0
              align-items-center
              py-2
              position-relative
              border-bottom border-200
            "
          >
            <div class="col ps-card py-1 position-static">
              <div class="d-flex align-items-center">
                <div class="avatar avatar-xl me-3">
                  <div
                    class="avatar-name rounded-circle bg-soft-info text-dark"
                  >
                    <span class="fs-0 text-info">B</span>
                  </div>
                </div>
                <div class="flex-1">
                  <h6 class="mb-0 d-flex align-items-center">
                    <a class="text-800 stretched-link" href="#!">Boots4</a
                    ><span class="badge rounded-pill ms-2 bg-200 text-primary"
                      >90%</span
                    >
                  </h6>
                </div>
              </div>
            </div>
            <div class="col py-1">
              <div class="row flex-end-center g-0">
                <div class="col-auto pe-2">
                  <div class="fs--1 fw-semi-bold">58:20:00</div>
                </div>
                <div class="col-5 pe-card ps-2">
                  <div class="progress bg-200 me-2" style="height: 5px">
                    <div
                      class="progress-bar rounded-pill"
                      role="progressbar"
                      style="width: 90%"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="
              row
              g-0
              align-items-center
              py-2
              position-relative
              border-bottom border-200
            "
          >
            <div class="col ps-card py-1 position-static">
              <div class="d-flex align-items-center">
                <div class="avatar avatar-xl me-3">
                  <div
                    class="avatar-name rounded-circle bg-soft-warning text-dark"
                  >
                    <span class="fs-0 text-warning">R</span>
                  </div>
                </div>
                <div class="flex-1">
                  <h6 class="mb-0 d-flex align-items-center">
                    <a class="text-800 stretched-link" href="#!">Raven</a
                    ><span class="badge rounded-pill ms-2 bg-200 text-primary"
                      >40%</span
                    >
                  </h6>
                </div>
              </div>
            </div>
            <div class="col py-1">
              <div class="row flex-end-center g-0">
                <div class="col-auto pe-2">
                  <div class="fs--1 fw-semi-bold">21:20:00</div>
                </div>
                <div class="col-5 pe-card ps-2">
                  <div class="progress bg-200 me-2" style="height: 5px">
                    <div
                      class="progress-bar rounded-pill"
                      role="progressbar"
                      style="width: 40%"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row g-0 align-items-center py-2 position-relative">
            <div class="col ps-card py-1 position-static">
              <div class="d-flex align-items-center">
                <div class="avatar avatar-xl me-3">
                  <div
                    class="avatar-name rounded-circle bg-soft-danger text-dark"
                  >
                    <span class="fs-0 text-danger">S</span>
                  </div>
                </div>
                <div class="flex-1">
                  <h6 class="mb-0 d-flex align-items-center">
                    <a class="text-800 stretched-link" href="#!">Slick</a
                    ><span class="badge rounded-pill ms-2 bg-200 text-primary"
                      >70%</span
                    >
                  </h6>
                </div>
              </div>
            </div>
            <div class="col py-1">
              <div class="row flex-end-center g-0">
                <div class="col-auto pe-2">
                  <div class="fs--1 fw-semi-bold">31:20:00</div>
                </div>
                <div class="col-5 pe-card ps-2">
                  <div class="progress bg-200 me-2" style="height: 5px">
                    <div
                      class="progress-bar rounded-pill"
                      role="progressbar"
                      style="width: 70%"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer bg-light p-0">
          <a class="btn btn-sm btn-link d-block w-100 py-2" href="#!"
            >Show all projects<span
              class="fas fa-chevron-right ms-1 fs--2"
            ></span
          ></a>
        </div>
      </div>
    </div>
    <div class="col-lg-6 ps-lg-2 mb-3">
      <div class="card h-lg-100">
        <div class="card-header">
          <div class="row flex-between-center">
            <div class="col-auto">
              <h6 class="mb-0">Total Sales</h6>
            </div>
          </div>
        </div>
        <div class="card-body h-100 pe-0">
         <CharTotalSales></CharTotalSales>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CharOrders from "../components/CharOrders.vue";
import CharWeeklySales from "../components/CharWeeklySales.vue";
import CharMarket from "../components/CharMarket.vue";
import CharTotalSales from "../components/CharTotalSales.vue";
export default {
  name: "Home",
  components: {
    CharOrders,
    CharWeeklySales,
    CharMarket,
    CharTotalSales
  },
};
</script>
