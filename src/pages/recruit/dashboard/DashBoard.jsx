import React from "react";

function DashBoard() {
  return (
    <>

      <div class="content container-fluid">



        <div class="page-header">
          <div class="row">
            <div class="col-sm-12">
              <h3 class="page-title">Job Dashboard</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                <li class="breadcrumb-item">Jobs</li>
                <li class="breadcrumb-item active">Job Dashboard</li>
              </ul>
            </div>
          </div>
        </div>


        <div class="row">
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div class="card dash-widget">
              <div class="card-body">
                <span class="dash-widget-icon"><i class="fa fa-briefcase"></i></span>
                <div class="dash-widget-info">
                  <h3>10</h3>
                  <span>Jobs</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div class="card dash-widget">
              <div class="card-body">
                <span class="dash-widget-icon"><i class="fa fa-users"></i></span>
                <div class="dash-widget-info">
                  <h3>150</h3>
                  <span>Candidates</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div class="card dash-widget">
              <div class="card-body">
                <span class="dash-widget-icon"><i class="fa fa-file-text-o"></i></span>
                <div class="dash-widget-info">
                  <h3>12</h3>
                  <span>Offered</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div class="card dash-widget">
              <div class="card-body">
                <span class="dash-widget-icon"><i class="fa fa-ban"></i></span>
                <div class="dash-widget-info">
                  <h3>138</h3>
                  <span>Rejected</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-6 text-center d-flex">
                <div class="card flex-fill">
                  <div class="card-body">
                    <h3 class="card-title">Overview</h3>
                    <canvas id="lineChart"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-md-6 d-flex">
                <div class="card flex-fill">
                  <div class="card-body">
                    <h3 class="card-title text-center">Latest Jobs</h3>
                    <ul class="list-group">
                      <li class="list-group-item list-group-item-action">Software Engineer - Trainee (Dec 2022<span class="float-end text-sm text-muted">3 Days ago</span></li>
                      <li class="list-group-item list-group-item-action">Senior Software Engineer (Oct 2022)<span class="float-end text-sm text-muted">42 Days ago</span></li>
                      <li class="list-group-item list-group-item-action">Software Engineer - Trainee (Sept 2022)<span class="float-end text-sm text-muted">60 Days ago</span></li>
                      <li class="list-group-item list-group-item-action">Project Lead (Mar 2022)<span class="float-end text-sm text-muted">150 Days ago</span></li>
                      <li class="list-group-item list-group-item-action">Software Engineer - Trainee (Jan 2022)<span class="float-end text-sm text-muted">250 Days ago</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="row">
          <div class="col-md-12">
            <div class="card card-table">
              <div class="card-header">
                <h3 class="card-title mb-0">Recent Applicants</h3>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-nowrap custom-table mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Job Title</th>
                        <th>Departments</th>
                        <th>Start Date</th>
                        <th>Expire Date</th>
                        <th class="text-center">Job Types</th>
                        <th class="text-center">Status</th>
                        <th class="text-center">Resume</th>
                        <th class="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <h2 class="table-avatar">
                            <a href="profile.html" class="avatar"><img alt="" src="assets/img/profiles/avatar-02.jpg" /></a>
                            <a href="profile.html"><span>Chaitra M</span></a>
                          </h2>
                        </td>
                        <td><a href="job-details.html">Web Developer (Oct 2022)</a></td>
                        <td>Web Development</td>
                        <td>3 Mar 2019</td>
                        <td>31 May 2019</td>
                        <td class="text-center">
                          <div class="dropdown action-label">
                            <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="fa fa-dot-circle-o text-info"></i> Full Time
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Full Time</a>
                              <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Part Time</a>
                              <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Internship</a>
                              <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-warning"></i> Temporary</a>
                              <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-warning"></i> Other</a>
                            </div>
                          </div>
                        </td>
                        <td class="text-center">
                          <div class="dropdown action-label">
                            <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="fa fa-dot-circle-o text-info"></i> New
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> New</a>
                              <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-warning"></i> Shortlisted</a>
                              <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Hired</a>
                              <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Rejected</a>
                            </div>
                          </div>
                        </td>
                        <td class="text-center"><a href="javascript:void(0);" class="btn btn-sm btn-primary"><i class="fa fa-eye me-1"></i> View</a></td>
                        <td class="text-center">
                          <div class="dropdown dropdown-action">
                            <a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit_job"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                              <a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="fa fa-trash-o m-r-5"></i> Reject</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <h2 class="table-avatar">
                            <a href="profile.html" class="avatar"><img alt="" src="assets/img/profiles/avatar-09.jpg"/></a>
                            <a href="profile.html"><span>Yamanappa C K</span></a>
                        </h2>
                      </td>
                      <td><a href="job-details.html">Internship (Nov 2022)</a></td>
                      <td>Web Development</td>
                      <td>3 Mar 2019</td>
                      <td>31 May 2019</td>
                      <td class="text-center">
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-warning"></i> Internship
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Full Time</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Part Time</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Internship</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-warning"></i> Temporary</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-warning"></i> Other</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-center">
                        <div class="dropdown action-label">
                          <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-warning"></i> Shortlisted
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> New</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-warning"></i> Shortlisted</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Hired</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Rejected</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-center"><a href="javascript:void(0);" class="btn btn-sm btn-primary"><i class="fa fa-eye me-1"></i> View</a></td>
                      <td class="text-center">
                        <div class="dropdown dropdown-action">
                          <a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit_job"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                            <a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="fa fa-trash-o m-r-5"></i> Reject</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <h2 class="table-avatar">
                          <a href="profile.html" class="avatar"><img alt="" src="assets/img/profiles/avatar-10.jpg"/></a>
                          <a href="profile.html"><span>Nayana P</span></a>
                      </h2>
                    </td>
                    <td><a href="job-details.html">Web Developer (Oct 2022)</a></td>
                    <td>Web Development</td>
                    <td>3 Mar 2019</td>
                    <td>31 May 2019</td>
                    <td class="text-center">
                      <div class="dropdown action-label">
                        <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fa fa-dot-circle-o text-info"></i> Full Time
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Full Time</a>
                          <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Part Time</a>
                          <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Internship</a>
                          <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-warning"></i> Temporary</a>
                          <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-warning"></i> Other</a>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="dropdown action-label">
                        <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fa fa-dot-circle-o text-warning"></i> Shortlisted
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> New</a>
                          <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-warning"></i> Shortlisted</a>
                          <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Hired</a>
                          <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Rejected</a>
                        </div>
                      </div>
                    </td>
                    <td class="text-center"><a href="javascript:void(0);" class="btn btn-sm btn-primary"><i class="fa fa-eye me-1"></i> View</a></td>
                    <td class="text-center">
                      <div class="dropdown dropdown-action">
                        <a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit_job"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                          <a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="fa fa-trash-o m-r-5"></i> Reject</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="row">
        <div class="col-md-12">
          <div class="card card-table">
            <div class="card-header">
              <h3 class="card-title mb-0">Offered Candidates</h3>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-nowrap custom-table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Job Title</th>
                      <th>Department</th>
                      <th class="text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        1
                      </td>
                      <td>
                        <h2 class="table-avatar">
                          <a href="profile.html" class="avatar"><img alt="" src="assets/img/profiles/avatar-02.jpg"/></a>
                          <a href="profile.html"><span>Vinay S</span></a>
                      </h2>
                    </td>
                    <td><a href="job-details.html">Web Developer (Oct 2022)</a></td>
                    <td>Web Development</td>
                    <td class="text-center">
                      <div class="action-label">
                        <a class="btn btn-white btn-sm btn-rounded" href="#">
                          <i class="fa fa-dot-circle-o text-success"></i> Offered
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      2
                    </td>
                    <td>
                      <h2 class="table-avatar">
                        <a href="profile.html" class="avatar"><img alt="" src="assets/img/profiles/avatar-09.jpg"/></a>
                        <a href="profile.html"><span>Venkat Krishna</span></a>
                    </h2>
                  </td>
                  <td><a href="job-details.html">Web Developer (Oct 2022)</a></td>
                  <td>Web Development</td>
                  <td class="text-center">
                    <div class="action-label">
                      <a class="btn btn-white btn-sm btn-rounded" href="#">
                        <i class="fa fa-dot-circle-o text-success"></i> Offered
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    3
                  </td>
                  <td>
                    <h2 class="table-avatar">
                      <a href="profile.html" class="avatar"><img alt="" src="assets/img/profiles/avatar-10.jpg"/></a>
                      <a href="profile.html">Yash H</a>
                    </h2>
                  </td>
                  <td><a href="job-details.html">Internship (Nov 2022)</a></td>
                  <td>Web Development</td>
                  <td class="text-center">
                    <div class="action-label">
                      <a class="btn btn-white btn-sm btn-rounded" href="#">
                        <i class="fa fa-dot-circle-o text-success"></i> Offered
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
        


      </div>
    </div>
</div>
    </>
  );
}

export default DashBoard;
