import React from "react";

function CandidateSkill() {
  return( 
  <div>
{/* <!-- Page Content --> */}
                <div class="content container-fluid">
				
					{/* <!-- Page Header --> */}
					<div class="page-header">
						<div class="row align-items-center">
							<div class="col">
								<h3 class="page-title">Experience Level</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
									<li class="breadcrumb-item">Lookup</li>
									<li class="breadcrumb-item active">Candidate Skills</li>
								</ul>
							</div>
							<div class="col-auto float-end ms-auto">
								<a href="#" data-bs-toggle="modal" data-bs-target="#add_employee" class="btn add-btn"> Add Candidate Skill</a>
							</div>
						</div>
					</div>
					{/* <!-- /Page Header --> */}
					
					<div class="row">
						<div class="col-md-12">
							<div class="table-responsive">
								<table class="table table-striped custom-table mb-0 datatable">
									<thead>
										<tr>
											<th>#</th>
											<th>Skills</th>
											<th>Status</th>									
											<th class="text-center">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>										
											<td>General Programming Skills</td>
											<td>
												<div class="action-label">
													<a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
													<i class="fa fa-dot-circle-o text-success"></i> Active								</a>
												</div>  
											</td>
											<td class="text-center">
												<div class="dropdown dropdown-action">
													<a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_job"><i class="fa fa-pencil m-r-5"></i> Edit</a>
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>2</td>										
											<td>Core Java</td>
											<td>
												<div class="action-label">
													<a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
													<i class="fa fa-dot-circle-o text-success"></i> Active								</a>
												</div>  
											</td>
											<td class="text-center">
												<div class="dropdown dropdown-action">
													<a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_job"><i class="fa fa-pencil m-r-5"></i> Edit</a>
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>3</td>										
											<td>C#</td>
											<td>
												<div class="action-label">
													<a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
													<i class="fa fa-dot-circle-o text-success"></i> Active								</a>
												</div>  
											</td>
											<td class="text-center">
												<div class="dropdown dropdown-action">
													<a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_job"><i class="fa fa-pencil m-r-5"></i> Edit</a>
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>4</td>										
											<td>Python</td>
											<td>
												<div class="action-label">
													<a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
													<i class="fa fa-dot-circle-o text-success"></i> Active								</a>
												</div>  
											</td>
											<td class="text-center">
												<div class="dropdown dropdown-action">
													<a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_job"><i class="fa fa-pencil m-r-5"></i> Edit</a>
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>  
										<tr>
											<td>5</td>										
											<td>Angular</td>
											<td>
												<div class="action-label">
													<a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
													<i class="fa fa-dot-circle-o text-success"></i> Active								</a>
												</div>  
											</td>
											<td class="text-center">
												<div class="dropdown dropdown-action">
													<a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_job"><i class="fa fa-pencil m-r-5"></i> Edit</a>
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>  
										<tr>
											<td>6</td>										
											<td>ReactJS</td>
											<td>
												<div class="action-label">
													<a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
													<i class="fa fa-dot-circle-o text-success"></i> Active								</a>
												</div>  
											</td>
											<td class="text-center">
												<div class="dropdown dropdown-action">
													<a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_job"><i class="fa fa-pencil m-r-5"></i> Edit</a>
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr> 
										<tr>
											<td>7</td>										
											<td>SQL</td>
											<td>
												<div class="action-label">
													<a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
													<i class="fa fa-dot-circle-o text-success"></i> Active								</a>
												</div>  
											</td>
											<td class="text-center">
												<div class="dropdown dropdown-action">
													<a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_job"><i class="fa fa-pencil m-r-5"></i> Edit</a>
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>  
										<tr>
											<td>8</td>										
											<td>Oral Communication</td>
											<td>
												<div class="action-label">
													<a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
													<i class="fa fa-dot-circle-o text-success"></i> Active								</a>
												</div>  
											</td>
											<td class="text-center">
												<div class="dropdown dropdown-action">
													<a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_job"><i class="fa fa-pencil m-r-5"></i> Edit</a>
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>   
										<tr>
											<td>9</td>										
											<td>Written Communication</td>
											<td>
												<div class="action-label">
													<a class="btn btn-white btn-sm btn-rounded" href="javascript:void(0);">
													<i class="fa fa-dot-circle-o text-success"></i> Active								</a>
												</div>  
											</td>
											<td class="text-center">
												<div class="dropdown dropdown-action">
													<a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_job"><i class="fa fa-pencil m-r-5"></i> Edit</a>
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
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
				{/* <!-- /Page Content --> */}
				
				{/* <!-- Add Employee Modal --> */}
				<div id="add_employee" class="modal custom-modal fade" role="dialog">
					<div class="modal-dialog modal-dialog-centered" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Add Cansdidate Skill</h5>
								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="row">
										<div class="col-sm-12">
											<div class="form-group">
												<label>Candidate Skill <span class="text-danger">*</span></label>
												<input class="form-control" type="text"/>
											</div>
										</div>
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Status</label>
												<select class="select">
													<option>Select</option>
													<option>Active</option>
													<option>Inactive</option>
												</select>
											</div>
										</div>
										
									</div>
									
									<div class="submit-section">
										<button class="btn btn-primary submit-btn">Submit</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /Add Employee Modal --> */}

				{/* <!-- Edit Job Modal --> */}
				<div id="edit_job" class="modal custom-modal fade" role="dialog">
					<div class="modal-dialog modal-dialog-centered" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Edit Candidates</h5>
								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="row">
										<div class="col-sm-12">
											<div class="form-group">
												<label>Candidate Skill<span class="text-danger">*</span></label>
												<input class="form-control" type="text" />
											</div>
										</div>
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Status</label>
												<select class="select">
													<option>Select</option>
													<option selected>Active</option>
													<option>Inactive</option>
												</select>
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
				{/* <!-- /Edit Job Modal -->

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

export default CandidateSkill;
