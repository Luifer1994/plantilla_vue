<template>
     <div class="card mb-3" id="ordersTable" data-list='{"valueNames":["order","date","address","status","amount"],"page":10,"pagination":true}'>
            <div class="card-header">
              <div class="row flex-between-center">
                <div class="col-4 col-sm-auto d-flex align-items-center pe-0">
                  <h5 class="fs-0 mb-0 text-nowrap py-2 py-xl-0">Orders</h5>
                </div>
                <div class="col-8 col-sm-auto ms-auto text-end ps-0">
                  <div class="d-none" id="orders-bulk-actions">
                    <div class="d-flex">
                      <select class="form-select form-select-sm" aria-label="Bulk actions">
                        <option selected="">Bulk actions</option>
                        <option value="Refund">Refund</option>
                        <option value="Delete">Delete</option>
                        <option value="Archive">Archive</option>
                      </select>
                      <button class="btn btn-falcon-default btn-sm ms-2" type="button">Apply</button>
                    </div>
                  </div>
                  <div id="orders-actions">
                    <button class="btn btn-falcon-default btn-sm" type="button"><span class="fas fa-plus" data-fa-transform="shrink-3 down-2"></span><span class="d-none d-sm-inline-block ms-1">New</span></button>
                    <button class="btn btn-falcon-default btn-sm mx-2" type="button"><span class="fas fa-filter" data-fa-transform="shrink-3 down-2"></span><span class="d-none d-sm-inline-block ms-1">Filter</span></button>
                    <button class="btn btn-falcon-default btn-sm" type="button"><span class="fas fa-external-link-alt" data-fa-transform="shrink-3 down-2"></span><span class="d-none d-sm-inline-block ms-1">Export</span></button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body p-0">
              <div class="table-responsive scrollbar">
                <table class="table table-sm table-striped fs--1 mb-0 overflow-hidden">
                  <thead class="bg-200 text-900">
                    <tr>
                      <th>
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" id="checkbox-bulk-customers-select" type="checkbox" data-bulk-select='{"body":"table-orders-body","actions":"orders-bulk-actions","replacedElement":"orders-actions"}' />
                        </div>
                      </th>
                      <th class="sort pe-1 align-middle white-space-nowrap" data-sort="order">Order</th>
                      <th class="sort pe-1 align-middle white-space-nowrap pe-7" data-sort="date">Date</th>
                      <th class="sort pe-1 align-middle white-space-nowrap" data-sort="address" style="min-width: 12.5rem;">Ship To</th>
                      <th class="sort pe-1 align-middle white-space-nowrap text-center" data-sort="status">Status</th>
                      <th class="sort pe-1 align-middle white-space-nowrap text-end" data-sort="amount">Amount</th>
                      <th class="no-sort"></th>
                    </tr>
                  </thead>
                  <tbody class="list" id="table-orders-body">
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-0" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#181</strong></a> by <strong>Ricky Antony</strong><br /><a href="mailto:ricky@example.com">ricky@example.com</a></td>
                      <td class="date py-2 align-middle">20/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Ricky Antony, 2392 Main Avenue, Penasauka, New Jersey 02149
                        <p class="mb-0 text-500">Via Flat Rate</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-success">Completed<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$99</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-0" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-0">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-1" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#182</strong></a> by <strong>Kin Rossow</strong><br /><a href="mailto:kin@example.com">kin@example.com</a></td>
                      <td class="date py-2 align-middle">20/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Kin Rossow, 1 Hollywood Blvd,Beverly Hills, California 90210
                        <p class="mb-0 text-500">Via Free Shipping</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-primary">Processing<span class="ms-1 fas fa-redo" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$120</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-1" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-1">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-2" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#183</strong></a> by <strong>Merry Diana</strong><br /><a href="mailto:merry@example.com">merry@example.com</a></td>
                      <td class="date py-2 align-middle">30/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Merry Diana, 1 Infinite Loop, Cupertino, California 90210
                        <p class="mb-0 text-500">Via Link Road</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-secondary">On Hold<span class="ms-1 fas fa-ban" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$70</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-2" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-2">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-3" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#184</strong></a> by <strong>Bucky Robert</strong><br /><a href="mailto:bucky@example.com">bucky@example.com</a></td>
                      <td class="date py-2 align-middle">30/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Bucky Robert, 1 Infinite Loop, Cupertino, California 90210
                        <p class="mb-0 text-500">Via Free Shipping</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-warning">Pending<span class="ms-1 fas fa-stream" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$92</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-3" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-3">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-4" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#185</strong></a> by <strong>Rocky Zampa</strong><br /><a href="mailto:rocky@example.com">rocky@example.com</a></td>
                      <td class="date py-2 align-middle">30/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Rocky Zampa, 1 Infinite Loop, Cupertino, California 90210
                        <p class="mb-0 text-500">Via Free Road</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-secondary">On Hold<span class="ms-1 fas fa-ban" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$120</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-4" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-4">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-5" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#186</strong></a> by <strong>Ricky John</strong><br /><a href="mailto:ricky@example.com">ricky@example.com</a></td>
                      <td class="date py-2 align-middle">30/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Ricky John, 1 Infinite Loop, Cupertino, California 90210
                        <p class="mb-0 text-500">Via Free Shipping</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-primary">Processing<span class="ms-1 fas fa-redo" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$145</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-5" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-5">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-6" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#187</strong></a> by <strong>Cristofer Henric</strong><br /><a href="mailto:cristofer@example.com">cristofer@example.com</a></td>
                      <td class="date py-2 align-middle">30/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Cristofer Henric, 1 Infinite Loop, Cupertino, California 90210
                        <p class="mb-0 text-500">Via Flat Rate</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-success">Completed<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$55</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-6" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-6">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-7" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#188</strong></a> by <strong>Brate Lee</strong><br /><a href="mailto:lee@example.com">lee@example.com</a></td>
                      <td class="date py-2 align-middle">29/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Brate Lee, 1 Infinite Loop, Cupertino, California 90210
                        <p class="mb-0 text-500">Via Link Road</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-secondary">On Hold<span class="ms-1 fas fa-ban" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$90</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-7" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-7">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-8" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#189</strong></a> by <strong>Thomas Stephenson</strong><br /><a href="mailto:Stephenson@example.com">Stephenson@example.com</a></td>
                      <td class="date py-2 align-middle">29/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Thomas Stephenson, 116 Ballifeary Road, Bamff
                        <p class="mb-0 text-500">Via Flat Rate</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-primary">Processing<span class="ms-1 fas fa-redo" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$52</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-8" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-8">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-9" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#190</strong></a> by <strong>Evie Singh</strong><br /><a href="mailto:eviewsing@example.com">eviewsing@example.com</a></td>
                      <td class="date py-2 align-middle">29/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Evie Singh, 54 Castledore Road, Tunstead
                        <p class="mb-0 text-500">Via Flat Rate</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-success">Completed<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$90</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-9" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-9">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-10" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#191</strong></a> by <strong>David Peters</strong><br /><a href="mailto:peter@example.com">peter@example.com</a></td>
                      <td class="date py-2 align-middle">29/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">David Peters, Rhyd Y Groes, Rhosgoch, LL66 0AT
                        <p class="mb-0 text-500">Via Link Road</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-success">Completed<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$69</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-10" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-10">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-11" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#192</strong></a> by <strong>Jennifer Johnson</strong><br /><a href="mailto:jennifer@example.com">jennifer@example.com</a></td>
                      <td class="date py-2 align-middle">28/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Jennifer Johnson, Rhyd Y Groes, Rhosgoch, LL66 0AT
                        <p class="mb-0 text-500">Via Flat Rate</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-primary">Processing<span class="ms-1 fas fa-redo" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$112</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-11" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-11">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-12" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#193</strong></a> by <strong> Demarcus Okuneva</strong><br /><a href="mailto:okuneva@example.com">okuneva@example.com</a></td>
                      <td class="date py-2 align-middle">28/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap"> Demarcus Okuneva, 90555 Upton Drive Jeffreyview, UT 08771
                        <p class="mb-0 text-500">Via Flat Rate</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-success">Completed<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$99</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-12" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-12">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-13" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#194</strong></a> by <strong>Simeon Harber</strong><br /><a href="mailto:simeon@example.com">simeon@example.com</a></td>
                      <td class="date py-2 align-middle">27/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Simeon Harber, 702 Kunde Plain Apt. 634 East Bridgetview, HI 13134-1862
                        <p class="mb-0 text-500">Via Free Shipping</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-secondary">On Hold<span class="ms-1 fas fa-ban" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$129</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-13" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-13">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-14" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#195</strong></a> by <strong>Lavon Haley</strong><br /><a href="mailto:lavon@example.com">lavon@example.com</a></td>
                      <td class="date py-2 align-middle">27/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Lavon Haley, 30998 Adonis Locks McGlynnside, ID 27241
                        <p class="mb-0 text-500">Via Free Shipping</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-warning">Pending<span class="ms-1 fas fa-stream" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$70</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-14" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-14">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-15" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#196</strong></a> by <strong>Ashley Kirlin</strong><br /><a href="mailto:ashley@example.com">ashley@example.com</a></td>
                      <td class="date py-2 align-middle">26/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Ashley Kirlin, 43304 Prosacco Shore South Dejuanfurt, MO 18623-0505
                        <p class="mb-0 text-500">Via Link Road</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-primary">Processing<span class="ms-1 fas fa-redo" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$39</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-15" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-15">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-16" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#197</strong></a> by <strong>Johnnie Considine</strong><br /><a href="mailto:johnnie@example.com">johnnie@example.com</a></td>
                      <td class="date py-2 align-middle">26/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Johnnie Considine, 6008 Hermann Points Suite 294 Hansenville, TN 14210
                        <p class="mb-0 text-500">Via Flat Rate</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-warning">Pending<span class="ms-1 fas fa-stream" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$70</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-16" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-16">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-17" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#198</strong></a> by <strong>Trace Farrell</strong><br /><a href="mailto:trace@example.com">trace@example.com</a></td>
                      <td class="date py-2 align-middle">26/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Trace Farrell, 431 Steuber Mews Apt. 252 Germanland, AK 25882
                        <p class="mb-0 text-500">Via Free Shipping</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-success">Completed<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$70</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-17" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-17">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-18" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#199</strong></a> by <strong>Estell Nienow</strong><br /><a href="mailto:nienow@example.com">nienow@example.com</a></td>
                      <td class="date py-2 align-middle">26/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Estell Nienow, 4167 Laverna Manor Marysemouth, NV 74590
                        <p class="mb-0 text-500">Via Free Shipping</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-success">Completed<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$59</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-18" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-18">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-19" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#200</strong></a> by <strong>Daisha Howe</strong><br /><a href="mailto:howe@example.com">howe@example.com</a></td>
                      <td class="date py-2 align-middle">25/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Daisha Howe, 829 Lavonne Valley Apt. 074 Stehrfort, RI 77914-0379
                        <p class="mb-0 text-500">Via Free Shipping</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-success">Completed<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$39</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-19" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-19">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-20" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#201</strong></a> by <strong>Miles Haley</strong><br /><a href="mailto:haley@example.com">haley@example.com</a></td>
                      <td class="date py-2 align-middle">24/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Miles Haley, 53150 Thad Squares Apt. 263 Archibaldfort, MO 00837
                        <p class="mb-0 text-500">Via Flat Rate</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-success">Completed<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$55</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-20" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-20">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-21" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#202</strong></a> by <strong>Brenda Watsica</strong><br /><a href="mailto:watsica@example.com">watsica@example.com</a></td>
                      <td class="date py-2 align-middle">24/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Brenda Watsica, 9198 O'Kon Harbors Morarborough, IA 75409-7383
                        <p class="mb-0 text-500">Via Free Shipping</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-success">Completed<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$89</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-21" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-21">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-22" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#203</strong></a> by <strong>Ellie O'Reilly</strong><br /><a href="mailto:ellie@example.com">ellie@example.com</a></td>
                      <td class="date py-2 align-middle">24/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Ellie O'Reilly, 1478 Kaitlin Haven Apt. 061 Lake Muhammadmouth, SC 35848
                        <p class="mb-0 text-500">Via Free Shipping</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-success">Completed<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$47</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-22" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-22">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-23" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#204</strong></a> by <strong>Garry Brainstrow</strong><br /><a href="mailto:garry@example.com">garry@example.com</a></td>
                      <td class="date py-2 align-middle">23/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Garry Brainstrow, 13572 Kurt Mews South Merritt, IA 52491
                        <p class="mb-0 text-500">Via Free Shipping</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-success">Completed<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$139</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-23" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-23">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-24" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#205</strong></a> by <strong>Estell Pollich</strong><br /><a href="mailto:estell@example.com">estell@example.com</a></td>
                      <td class="date py-2 align-middle">23/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Estell Pollich, 13572 Kurt Mews South Merritt, IA 52491
                        <p class="mb-0 text-500">Via Free Shipping</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-secondary">On Hold<span class="ms-1 fas fa-ban" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$49</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-24" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-24">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-25" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#206</strong></a> by <strong>Ara Mueller</strong><br /><a href="mailto:ara@example.com">ara@example.com</a></td>
                      <td class="date py-2 align-middle">23/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Ara Mueller, 91979 Kohler Place Waelchiborough, CT 41291
                        <p class="mb-0 text-500">Via Flat Rate</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-secondary">On Hold<span class="ms-1 fas fa-ban" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$19</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-25" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-25">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-26" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#207</strong></a> by <strong>Lucienne Blick</strong><br /><a href="mailto:blick@example.com">blick@example.com</a></td>
                      <td class="date py-2 align-middle">23/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Lucienne Blick, 6757 Giuseppe Meadows Geraldinemouth, MO 48819-4970
                        <p class="mb-0 text-500">Via Flat Rate</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-secondary">On Hold<span class="ms-1 fas fa-ban" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$59</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-26" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-26">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-27" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#208</strong></a> by <strong>Laverne Haag</strong><br /><a href="mailto:haag@example.com">haag@example.com</a></td>
                      <td class="date py-2 align-middle">22/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Laverne Haag, 2327 Kaylee Mill East Citlalli, AZ 89582-3143
                        <p class="mb-0 text-500">Via Flat Rate</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-secondary">On Hold<span class="ms-1 fas fa-ban" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$49</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-27" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-27">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-28" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#209</strong></a> by <strong>Brandon Bednar</strong><br /><a href="mailto:bednar@example.com">bednar@example.com</a></td>
                      <td class="date py-2 align-middle">22/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Brandon Bednar, 25156 Isaac Crossing Apt. 810 Lonborough, CO 83774-5999
                        <p class="mb-0 text-500">Via Flat Rate</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-secondary">On Hold<span class="ms-1 fas fa-ban" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$39</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-28" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-28">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="btn-reveal-trigger">
                      <td class="align-middle" style="width: 28px;">
                        <div class="form-check fs-0 mb-0 d-flex align-items-center">
                          <input class="form-check-input" type="checkbox" id="checkbox-29" data-bulk-select-row="data-bulk-select-row" />
                        </div>
                      </td>
                      <td class="order py-2 align-middle white-space-nowrap"><a href="../../../app/e-commerce/orders/order-details.html"> <strong>#210</strong></a> by <strong>Dimitri Boehm</strong><br /><a href="mailto:dimitri@example.com">dimitri@example.com</a></td>
                      <td class="date py-2 align-middle">23/04/2019</td>
                      <td class="address py-2 align-middle white-space-nowrap">Dimitri Boehm, 71603 Wolff Plains Apt. 885 Johnstonton, MI 01581
                        <p class="mb-0 text-500">Via Flat Rate</p>
                      </td>
                      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap"><span class="badge badge rounded-pill d-block badge-soft-secondary">On Hold<span class="ms-1 fas fa-ban" data-fa-transform="shrink-2"></span></span>
                      </td>
                      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$111</td>
                      <td class="py-2 align-middle white-space-nowrap text-end">
                        <div class="dropdown font-sans-serif position-static">
                          <button class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" id="order-dropdown-29" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span class="fas fa-ellipsis-h fs--1"></span></button>
                          <div class="dropdown-menu dropdown-menu-end border py-0" aria-labelledby="order-dropdown-29">
                            <div class="bg-white py-2"><a class="dropdown-item" href="#!">Completed</a><a class="dropdown-item" href="#!">Processing</a><a class="dropdown-item" href="#!">On Hold</a><a class="dropdown-item" href="#!">Pending</a>
                              <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card-footer">
              <div class="d-flex align-items-center justify-content-center">
                <button class="btn btn-sm btn-falcon-default me-1" type="button" title="Previous" data-list-pagination="prev"><span class="fas fa-chevron-left"></span></button>
                <ul class="pagination mb-0"></ul>
                <button class="btn btn-sm btn-falcon-default ms-1" type="button" title="Next" data-list-pagination="next"><span class="fas fa-chevron-right">             </span></button>
              </div>
            </div>
          </div>
</template>
<script>
export default {
    name:"Orders"
}
</script>