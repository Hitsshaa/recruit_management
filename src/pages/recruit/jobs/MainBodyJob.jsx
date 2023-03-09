import React from 'react'

export const MainBodyJob = ({addJob,jobs}) => {
  return (
    <div>
         <div class="row">
          <div class="col-md-12">
            <div class="table-responsive">
              <table class="table table-striped custom-table mb-0 datatable">
                <thead>
                  <tr>
                    <th>Job Id</th>
                    <th>Job Title</th>
                    <th>Department</th>
                    <th>Start Date</th>
                    <th>Target Date</th>
                    <th class="text-center">Job Type</th>
                    <th class="text-center">Status</th>
                    <th>Applicants</th>
                    <th class="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map(
                    (job) =>
                      job.jobTitle && (
                        <tr>
                          <td>{job.jobID}</td>
                          <td>
                            <a href="job-details.html">{job.jobTitle}</a>
                          </td>
                          <td>Web Development</td>
                          <td>{job.startDate}</td>
                          <td>{job.endDate}</td>
                          <td class="text-center">
                            <div class="action-label">
                              <a
                                class="btn btn-white btn-sm btn-rounded"
                                href="#"
                                aria-expanded="false"
                              >
                                <i class="fa fa-dot-circle-o text-info"></i>{" "}
                                {job.jobType}
                              </a>
                            </div>
                          </td>
                          <td class="text-center">
                            <div class="dropdown action-label">
                              <a
                                class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                                href="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i class="fa fa-dot-circle-o text-info"></i>{" "}
                                {job.status}
                              </a>
                              <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="#">
                                  <i class="fa fa-dot-circle-o text-info"></i>{" "}
                                  Open
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="fa fa-dot-circle-o text-danger"></i>{" "}
                                  Closed
                                </a>
                                <a class="dropdown-item" href="#">
                                  <i class="fa fa-dot-circle-o text-warning"></i>{" "}
                                  Cancelled
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a
                              href="candidates-filtered.html"
                              class="btn btn-sm btn-primary"
                            >
                              {job.applicant}
                            </a>
                          </td>
                          <td class="text-end">
                            <div class="dropdown dropdown-action">
                              <a
                                href="#"
                                class="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i class="material-icons">more_vert</i>
                              </a>
                              <div class="dropdown-menu dropdown-menu-right">
                                <a
                                  href="#"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit_job"
                                >
                                  <i class="fa fa-pencil m-r-5"></i> Edit
                                </a>
                                <a
                                  href="#"
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_job"
                                >
                                  <i class="fa fa-trash-o m-r-5"></i> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <button
          className="btn btn-success"
          onClick={() => {
            addJob();
          }}
        >
          Add Test
        </button>
      
    </div>
  )
}
