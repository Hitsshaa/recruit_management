import React from "react";

function Candidates() {
  return (
  <div>
    	{/* <!-- Page Content --> */}
                <div class="content container-fluid">
				
					{/* <!-- Page Header --> */}
					<div class="page-header">
						<div class="row align-items-center">
							<div class="col-12">
								<h3 class="page-title">Candidates</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><a href="jobs-dashboard.html">Dashboard</a></li>
									<li class="breadcrumb-item">Jobs</li>
									<li class="breadcrumb-item active">Candidates</li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /Page Header -->
					<!-- Search Filter --> */}
					<div class="row filter-row">
						<div class="col-sm-6 col-md-3">  
							<div class="form-group form-focus">
								<input type="text" class="form-control floating"/>
								<label class="focus-label">Candidate Name</label>
							</div>
						</div>
						<div class="col-sm-6 col-md-3"> 
							<div class="form-group form-focus select-focus">
								<select class="select floating"> 
									<option>Select Status</option>
									<option>New</option>
									<option>Shortlisted</option>
                                    <option>On Hold</option>
                                    <option>Offered</option>
									<option>Rejected</option>
								</select>
								<label class="focus-label">Candidate Status</label>
							</div>
						</div>
						<div class="col-sm-6 col-md-3"> 
							<div class="form-group form-focus select-focus">
								<select class="select floating"> 
									<option>Select Job</option>
                                    <option>Not tagged yet</option>
									<option>Automation Developer (Aug 2022) - Open</option>
									<option>Web Developer (Oct 2022) - Open</option>
									<option>Web Designer (Nov 2022) - Closed</option>
									<option>Android Developer (Nov 2022) - Cancelled</option>
								</select>
								<label class="focus-label">Job</label>
							</div>
						</div>          
						<div class="col-sm-6 col-md-3">
							<div class="d-grid">
								<a href="#" class="btn btn-success w-100"> Search </a>  
							</div>  
						</div>                                                              
                    </div>
					{/* <!-- Search Filter -->					 */}

					<div class="row">
						<div class="col-md-12">
							<div class="table-responsive">
								<table class="table table-striped custom-table mb-0 datatable">
									<thead>
										<tr>
											<th>#</th>
                                            <th> </th>
											<th>Name</th>
											<th>Job</th>
											<th class="text-center">Job Type</th>
											<th>Created Date</th>
											<th class="text-center">Status</th>
											<th class="text-center">Stage</th>
											<th>Resume</th>
											<th class="text-end">Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
                                            <td>
												<h2 class="table-avatar">
													<span class="quick-look" data-bs-toggle="offcanvas" data-bs-target="#quick-look" aria-controls="theme-settings-offcanvas"><i class="fa fa-eye"></i></span> 
												</h2>                                                
											</td>                                            
											<td>
												<h2 class="table-avatar">
													<a href="candidate-details.html">Nayana P</a>
												</h2>                                                
											</td>                                            
											<td><a href="job-details.html">Not tagged yet</a></td>
											<td class="text-center">
												<div class="dropdown action-label">
													<a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
														<i class="fa fa-dot-circle-o text-success"></i> Full Time
													</a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Full Time</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Contract</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Internship</a>
													</div>
												</div>
											</td>                                            
											<td>15/10/2022 5:23 PM</td>
											<td class="text-center">
												<div class="dropdown action-label">
													<a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
														<i class="fa fa-dot-circle-o text-info"></i> New
													</a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> New</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-purple"></i> Shortlisted</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-warning"></i> On Hold</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Offered</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Rejected</a>
													</div>
												</div>
											</td>
											<td class="text-center">
												<div class="dropdown action-label">
													<a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
														<i class="fa fa-dot-circle-o text-info"></i> Screening
													</a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Screening</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-purple"></i> Assessment Test - Round 1</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-warning"></i> Assessment Test - Round 2 </a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Technical Interview</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> HR Interview</a>
													</div>
												</div>
											</td>											
											<td><a href="javascript:void(0);" class="btn btn-sm btn-primary"><i class="fa fa-eye me-1"></i> View</a></td>
											<td class="text-center">
												<div class="dropdown dropdown-action">
													<a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
													<div class="dropdown-menu dropdown-menu-right">
														<a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit_candidate"><i class="fa fa-pencil m-r-5"></i> Edit</a>
														<a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#set_job"><i class="fa fa-pencil m-r-5"></i> Set Job</a>
														<a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>
                                        <tr>
											<td>2</td>
                                            <td>
												<h2 class="table-avatar">
													<a class="quick-look"><i class="fa fa-eye" aria-hidden="true"></i></a>
												</h2>                                                
											</td>                                            
											<td>
												<h2 class="table-avatar">
													<a href="profile.html">Yamanappa C K</a>
												</h2>                                                
											</td>
											<td><a href="job-details.html">Web Developer (Oct 2022) - Open</a></td>
											<td class="text-center">
												<div class="dropdown action-label">
													<a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
														<i class="fa fa-dot-circle-o text-success"></i> Full Time
													</a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Full Time</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Contract</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Internship</a>
													</div>
												</div>
											</td>                                            
											<td>15/10/2022 5:21 PM</td>
											<td class="text-center">
												<div class="dropdown action-label">
													<a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
														<i class="fa fa-dot-circle-o text-purple"></i> Shortlisted
													</a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> New</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-purple"></i> Shortlisted</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-warning"></i> On Hold</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Offered</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Rejected</a>													</div>
												</div>
											</td>
											<td class="text-center">
												<div class="dropdown action-label">
													<a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
														<i class="fa fa-dot-circle-o text-info"></i> Assessment Test - Round 1
													</a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Screening</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-purple"></i> Assessment Test - Round 1</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-warning"></i> Assessment Test - Round 2 </a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Technical Interview</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> HR Interview</a>
													</div>
												</div>
											</td>											
											<td><a href="javascript:void(0);" class="btn btn-sm btn-primary"><i class="fa fa-eye me-1"></i> View</a></td>
											<td class="text-center">
												<div class="dropdown dropdown-action">
													<a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
													<div class="dropdown-menu dropdown-menu-right">
														<a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit_candidate"><i class="fa fa-pencil m-r-5"></i> Edit</a>
														<a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#set_job"><i class="fa fa-pencil m-r-5"></i> Set Job</a>
														<a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>
                                        <tr>
											<td>3</td>
                                            <td>
												<h2 class="table-avatar">
													<a class="quick-look"><i class="fa fa-eye" aria-hidden="true"></i></a>
												</h2>                                                
											</td>                                            
											<td>
												<h2 class="table-avatar">
													<a href="profile.html">Chaitra M</a>
												</h2>                                                
											</td>                                              
											<td><a href="job-details.html">Web Developer (Oct 2022) - Open</a></td>
											<td class="text-center">
												<div class="dropdown action-label">
													<a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
														<i class="fa fa-dot-circle-o text-success"></i> Full Time
													</a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Full Time</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Contract</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Internship</a>
													</div>
												</div>
											</td>                                            
											<td>15/10/2022 4:43 PM</td>
											<td class="text-center">
												<div class="dropdown action-label">
													<a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
														<i class="fa fa-dot-circle-o text-info"></i> New
													</a>
													<div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> New</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-purple"></i> Shortlisted</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-warning"></i> On Hold</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Offered</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Rejected</a>													</div>
												</div>
											</td>
											<td class="text-center">
												<div class="dropdown action-label">
													<a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
														<i class="fa fa-dot-circle-o text-info"></i> Screening
													</a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Screening</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-purple"></i> Assessment Test - Round 1</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-warning"></i> Assessment Test - Round 2 </a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Technical Interview</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> HR Interview</a>
													</div>
												</div>
											</td>											
											<td><a href="javascript:void(0);" class="btn btn-sm btn-primary"><i class="fa fa-eye me-1"></i> View</a></td>
											<td class="text-center">
												<div class="dropdown dropdown-action">
													<a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
													<div class="dropdown-menu dropdown-menu-right">
														<a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit_candidate"><i class="fa fa-pencil m-r-5"></i> Edit</a>
														<a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#set_job"><i class="fa fa-pencil m-r-5"></i> Set Job</a>
														<a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>
                                        <tr>
											<td>4</td>
                                            <td>
												<h2 class="table-avatar">
													<a class="quick-look"><i class="fa fa-eye" aria-hidden="true"></i></a>
												</h2>                                                
											</td>                                            
											<td>
												<h2 class="table-avatar">
													<a href="profile.html">Basavaraj K</a>
												</h2>                                                
											</td>                                               
											<td><a href="job-details.html">Automation Developer (Aug 2022) - Open</a></td>
											<td class="text-center">
												<div class="dropdown action-label">
													<a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
														<i class="fa fa-dot-circle-o text-success"></i> Full Time
													</a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Full Time</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Contract</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Internship</a>
													</div>
												</div>
											</td>                                            
											<td>12/08/2022 11:48 AM</td>
											<td class="text-center">
												<div class="dropdown action-label">
													<a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
														<i class="fa fa-dot-circle-o text-danger"></i> Rejected
													</a>
													<div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> New</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-purple"></i> Shortlisted</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-warning"></i> On Hold</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Offered</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Rejected</a>													</div>
												</div>
											</td>
											<td class="text-center">
												<div class="dropdown action-label">
													<a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
														<i class="fa fa-dot-circle-o text-info"></i> Technical Interview
													</a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Screening</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-purple"></i> Assessment Test - Round 1</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-warning"></i> Assessment Test - Round 2 </a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Technical Interview</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> HR Interview</a>
													</div>
												</div>
											</td>											
											<td><a href="javascript:void(0);" class="btn btn-sm btn-primary"><i class="fa fa-eye me-1"></i> View</a></td>
											<td class="text-center">
												<div class="dropdown dropdown-action">
													<a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
													<div class="dropdown-menu dropdown-menu-right">
														<a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit_candidate"><i class="fa fa-pencil m-r-5"></i> Edit</a>
														<a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#set_job"><i class="fa fa-pencil m-r-5"></i> Set Job</a>
														<a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>
                                        <tr>
											<td>5</td>
                                            <td>
												<h2 class="table-avatar">
													<a class="quick-look"><i class="fa fa-eye" aria-hidden="true"></i></a>
												</h2>                                                
											</td>                                            
											<td>
												<h2 class="table-avatar">
													<a href="profile.html">Manoj Kumar C</a>
												</h2>                                                
											</td>                                               
											<td><a href="job-details.html">Web Designer (Nov 2022) - Closed</a></td>
											<td class="text-center">
												<div class="dropdown action-label">
													<a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
														<i class="fa fa-dot-circle-o text-success"></i> Full Time
													</a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Full Time</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Contract</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Internship</a>
													</div>
												</div>
											</td>                                            
											<td>21/11/2022 2:51 PM</td>
											<td class="text-center">
												<div class="dropdown action-label">
													<a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
														<i class="fa fa-dot-circle-o text-success"></i> Offerred
													</a>
													<div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> New</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-purple"></i> Shortlisted</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-warning"></i> On Hold</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Offered</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Rejected</a>													</div>
												</div>
											</td>
											<td class="text-center">
												<div class="dropdown action-label">
													<a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
														<i class="fa fa-dot-circle-o text-info"></i> Technical Interview
													</a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Screening</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-purple"></i> Assessment Test - Round 1</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-warning"></i> Assessment Test - Round 2 </a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Technical Interview</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> HR Interview</a>
													</div>
												</div>
											</td>											
											<td><a href="javascript:void(0);" class="btn btn-sm btn-primary"><i class="fa fa-eye me-1"></i> View</a></td>
											<td class="text-center">
												<div class="dropdown dropdown-action">
													<a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
													<div class="dropdown-menu dropdown-menu-right">
														<a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit_candidate"><i class="fa fa-pencil m-r-5"></i> Edit</a>
														<a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#set_job"><i class="fa fa-pencil m-r-5"></i> Set Job</a>
														<a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>
                                        <tr>
											<td>6</td>
                                            <td>
												<h2 class="table-avatar">
													<a class="quick-look"><i class="fa fa-eye" aria-hidden="true"></i></a>
												</h2>                                                
											</td>                                            
											<td>
												<h2 class="table-avatar">
													<a href="profile.html">Shriram C V</a>
												</h2>                                                
											</td>                                               
											<td><a href="job-details.html">Android Developer (Nov 2022) - Cancelled</a></td>
											<td class="text-center">
												<div class="dropdown action-label">
													<a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
														<i class="fa fa-dot-circle-o text-success"></i> Full Time
													</a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Full Time</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Contract</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Internship</a>
													</div>
												</div>
											</td>                                            
											<td>20/11/2022 10:33 AM</td>
											<td class="text-center">
												<div class="dropdown action-label">
													<a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
														<i class="fa fa-dot-circle-o text-info"></i> New
													</a>
													<div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> New</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-purple"></i> Shortlisted</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-warning"></i> On Hold</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Offered</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Rejected</a>													</div>
												</div>
											</td>
											<td class="text-center">
												<div class="dropdown action-label">
													<a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
														<i class="fa fa-dot-circle-o text-info"></i> Screening
													</a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Screening</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-purple"></i> Assessment Test - Round 1</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-warning"></i> Assessment Test - Round 2 </a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Technical Interview</a>
														<a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> HR Interview</a>
													</div>
												</div>
											</td>											
											<td><a href="javascript:void(0);" class="btn btn-sm btn-primary"><i class="fa fa-eye me-1"></i> View</a></td>
											<td class="text-center">
												<div class="dropdown dropdown-action">
													<a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
													<div class="dropdown-menu dropdown-menu-right">
														<a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit_candidate"><i class="fa fa-pencil m-r-5"></i> Edit</a>
														<a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#set_job"><i class="fa fa-pencil m-r-5"></i> Set Job</a>
														<a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
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
				{/* <!-- /Page Content -->

				<!-- Edit Candidate Modal --> */}
				<div id="edit_candidate" class="modal custom-modal fade" role="dialog">
					<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Edit Job</h5>
								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label>Job Title</label>
												<input class="form-control" type="text" value="Web Developer"/>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Department</label>
												<select class="select">
													<option>-</option>
													<option selected>Web Development</option>
													<option>Application Development</option>
													<option>IT Management</option>
													<option>Accounts Management</option>
													<option>Support Management</option>
													<option>Marketing</option>
												</select>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label>Job Location</label>
												<input class="form-control" type="text" value="California"/>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>No of Vacancies</label>
												<input class="form-control" type="text" value="5"/>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label>Experience</label>
												<input class="form-control" type="text" value="2 Years"/>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Age</label>
												<input class="form-control" type="text" value="-"/>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label>Salary From</label>
												<input type="text" class="form-control" value="32k"/>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Salary To</label>
												<input type="text" class="form-control" value="38k"/>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label>Job Type</label>
												<select class="select">
													<option selected>Full Time</option>
													<option>Part Time</option>
													<option>Internship</option>
													<option>Temporary</option>
													<option>Remote</option>
													<option>Others</option>
												</select>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Status</label>
												<select class="select">
													<option selected>Open</option>
													<option>Closed</option>
													<option>Cancelled</option>
												</select>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label>Start Date</label>
												<input type="text" class="form-control datetimepicker" value="3 Mar 2019"/>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Expired Date</label>
												<input type="text" class="form-control datetimepicker" value="31 May 2019"/>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-md-12">
											<div class="form-group">
												<label>Description</label>
												<textarea class="form-control"></textarea>
											</div>
										</div>
									</div>
									<div class="submit-section">
										<button class="btn btn-primary submit-btn">Save</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /Edit Candidate Modal -->

				<!-- Set Job Modal --> */}
				<div id="set_job" class="modal custom-modal fade" role="dialog">
					<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Set Job</h5>
								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label>Candidate Name</label>
												<input class="form-control" type="text" value="John Doe" disabled/>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Job</label>
												<select class="select">
													<option selected>--Select Job--</option>
													<option>Web Developer (Oct 2022)</option>
													<option>Android Developer (Nov 2022)</option>
													<option>Wed Designer (Nov 2022)</option>
												</select>
											</div>
										</div>
									</div>
									<div class="submit-section">
										<button class="btn btn-primary submit-btn">Set Job</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /Set Job Modal -->                

				<!-- Delete Job Modal --> */}
				<div class="modal custom-modal fade" id="delete_job" role="dialog">
					<div class="modal-dialog modal-dialog-centered">
						<div class="modal-content">
							<div class="modal-body">
								<div class="form-header">
									<h3>Delete</h3>
									<p>Are you sure want to delete?</p>
								</div>
								<div class="modal-btn delete-action">
									<div class="row">
										<div class="col-6">
											<a href="javascript:void(0);" class="btn btn-primary continue-btn">Delete</a>
										</div>
										<div class="col-6">
											<a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary cancel-btn">Cancel</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /Delete Job Modal --> */}
  </div>);
}

export default Candidates;
