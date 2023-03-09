import React from 'react'

export const MainBodyJobType = ({setJobId,jobTypes,getSingleJobType}) => {
  return (
    <div>
        <div class="row">
						<div class="col-md-12">
							<div class="table-responsive">
								<table class="table table-striped custom-table mb-0 datatable">
									<thead>
										<tr>
											<th>#</th>
											<th>Job Type</th>
											<th>Status</th>									
											<th class="text-center">Action</th>
										</tr>
									</thead>
									<tbody>
									{jobTypes.jobType  && jobTypes.jobType.map((jobType) =>	(<tr key = {jobType.jobId}>
											<td>{jobType.jobId}</td>										
											<td>{jobType.jobName}</td>
											<td>
												<div class="action-label">
													<a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
													<i class="fa fa-dot-circle-o text-success"></i> {jobType.jobStatus?"Active":"Inactive"}</a>
												</div>  
											</td>
											<td class="text-center">
												<div class="dropdown dropdown-action">
													<a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_job"  onClick={()=>{setJobId(jobType.jobId);getSingleJobType(jobType.jobId);}}><i class="fa fa-pencil m-r-5"></i> Edit</a>
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_job" onClick={()=>{setJobId(jobType.jobId)}}><i class="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>)
                    )}
										
									</tbody>
								</table>
							</div>
						</div>
					</div>
                
    </div>
  )
}
