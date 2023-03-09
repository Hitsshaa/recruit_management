import React from "react";

function Users() {
  return( <div>
    {/* <!-- Page Content --> */}
                <div class="content container-fluid">
				
					{/* <!-- Page Header --> */}
					<div class="page-header">
						<div class="row align-items-center">
							<div class="col">
								<h3 class="page-title">Users</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
									<li class="breadcrumb-item active">Users</li>
								</ul>
							</div>
							<div class="col-auto float-end ms-auto">
								<a href="#" class="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_user"><i class="fa fa-plus"></i> Add User</a>
							</div>
						</div>
					</div>
					{/* <!-- /Page Header -->
					
					<!-- Search Filter --> */}
					<div class="row filter-row">
						<div class="col-sm-6 col-md-3">  
							<div class="form-group form-focus">
								<input type="text" class="form-control floating"/>
								<label class="focus-label">Name</label>
							</div>
						</div>
						<div class="col-sm-6 col-md-3"> 
							<div class="form-group form-focus select-focus">
								<select class="select floating"> 
									<option>Select Company</option>
									<option>Global Technologies</option>
									<option>Delta Infotech</option>
								</select>
								<label class="focus-label">Company</label>
							</div>
						</div>
						<div class="col-sm-6 col-md-3"> 
							<div class="form-group form-focus select-focus">
								<select class="select floating"> 
									<option>Select Roll</option>
									<option>Web Developer</option>
									<option>Web Designer</option>
									<option>Android Developer</option>
									<option>Ios Developer</option>
								</select>
								<label class="focus-label">Role</label>
							</div>
						</div>
						<div class="col-sm-6 col-md-3">  
							<a href="#" class="btn btn-success w-100"> Search </a>  
						</div>     
                    </div>
					{/* <!-- /Search Filter --> */}
					
					<div class="row">
						<div class="col-md-12">
							<div class="table-responsive">
								<table class="table table-striped custom-table datatable">
									<thead>
										<tr>
											<th>Employee Id</th>
											<th>Name</th>
											<th>Email</th>
											<th>Phone</th>
											<th>Type</th>
											<th>Created Date</th>
											<th class="text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
                                            <td>12</td>
											<td>
												<h2 class="table-avatar">
													<a href="profile.html" class="avatar"><img src="assets/img/profiles/avatar-21.jpg" alt=""/></a>
													<a href="profile.html">Aswanth C</a>
												</h2>
											</td>
											<td>aswanth@example.com</td>
                                            <td>+919123243245</td>
											<td>
												<span class="badge bg-inverse-danger">Admin</span>
											</td>
                                            <td>03/12/2022 10:30 AM</td>
											<td class="text-end">
												<div class="dropdown dropdown-action">
													<a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_user"><i class="fa fa-pencil m-r-5"></i> Edit</a>
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_user"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>
										<tr>
                                            <td>24</td>
											<td>
												<h2 class="table-avatar">
													<a href="profile.html" class="avatar"><img alt="" src="assets/img/profiles/avatar-02.jpg"/></a>
													<a href="profile.html">John Doe</a>
												</h2>
											</td>
											<td>johndoe@example.com</td>
											<td>+914354354345</td>
											<td>
											    <span class="badge bg-inverse-success">Employee</span>
											</td>
                                            <td>04/10/2022 9:16 AM</td>
											<td class="text-end">
												<div class="dropdown dropdown-action">
													<a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_user"><i class="fa fa-pencil m-r-5"></i> Edit</a>
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_user"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>
										<tr>
                                            <td>16</td>
											<td>
												<h2 class="table-avatar">
													<a href="profile.html" class="avatar"><img alt="" src="assets/img/profiles/avatar-09.jpg"/></a>
													<a href="profile.html">Anoop Kumar</a>
												</h2>
											</td>
											<td>anoop@example.com</td>
											<td>+916543454353</td>
											<td>
												<span class="badge bg-inverse-danger">Admin</span>
											</td>
                                            <td>15/10/2022 11:34 AM</td>
											<td class="text-end">
												<div class="dropdown dropdown-action">
													<a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_user"><i class="fa fa-pencil m-r-5"></i> Edit</a>
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_user"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>
										<tr>
                                            <td>21</td>
											<td>
												<h2 class="table-avatar">
													<a href="profile.html" class="avatar"><img alt="" src="assets/img/profiles/avatar-10.jpg"/></a>
													<a href="profile.html">John Smith</a>
												</h2>
											</td>
											<td>johnsmith@example.com</td>
											<td>5435332345</td>
											<td>
												<span class="badge bg-inverse-info">External</span>
											</td>
											<td>10/11/2022 3:21 PM</td>
											<td class="text-end">
												<div class="dropdown dropdown-action">
													<a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
													<div class="dropdown-menu dropdown-menu-right">
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_user"><i class="fa fa-pencil m-r-5"></i> Edit</a>
														<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_user"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
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
				
				<!-- Add User Modal --> */}
				<div id="add_user" class="modal custom-modal fade" role="dialog">
					<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Add User</h5>
								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="row">
										<div class="col-sm-6">
											<div class="form-group">
												<label>First Name <span class="text-danger">*</span></label>
												<input class="form-control" type="text"/>
											</div>
										</div>
										<div class="col-sm-6">
											<div class="form-group">
												<label>Last Name</label>
												<input class="form-control" type="text"/>
											</div>
										</div>
										<div class="col-sm-6">
											<div class="form-group">
												<label>Email <span class="text-danger">*</span></label>
												<input class="form-control" type="text"/>
											</div>
										</div>
										<div class="col-sm-6">
											<div class="form-group">
												<label>Phone</label>
												<input class="form-control" type="email"/>
											</div>
										</div>
										<div class="col-sm-6">
											<div class="form-group">
												<label>Password</label>
												<input class="form-control" type="password"/>
											</div>
										</div>
										<div class="col-sm-6">
											<div class="form-group">
												<label>Confirm Password</label>
												<input class="form-control" type="password"/>
											</div>
										</div>
										<div class="col-sm-6">
											<div class="form-group">
												<label>Employee ID <span class="text-danger">*</span></label>
												<input type="text" class="form-control floating"/>
											</div>
										</div>
										<div class="col-sm-6">
											<div class="form-group">
												<label>Type</label>
												<select class="select">
                                                    <option>-- Select Type --</option>
													<option>Admin</option>
													<option>Employee</option>
													<option>External</option>
												</select>
											</div>
										</div>
                                    </div>
									<div class="table-responsive m-t-15">
										<table class="table table-striped custom-table">
											<thead>
												<tr>
													<th>Module </th>
													<th class="text-center">Role</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Recruit</td>
													<td class="text-center">
                                                        <div class="dropdown action-label">
                                                            <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                                                -- Select Role --
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                <a class="dropdown-item" href="#"> -- Select Role --</a>
                                                                <a class="dropdown-item" href="#"> Engineering</a>
                                                                <a class="dropdown-item" href="#"> Finance</a>
                                                                <a class="dropdown-item" href="#"> IT Manager</a>
                                                            </div>
                                                        </div>                                                        
													</td>
												</tr>
											</tbody>
										</table>
									</div>
									<div class="submit-section">
										<button class="btn btn-primary submit-btn">Submit</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /Add User Modal -->
				
				<!-- Edit User Modal --> */}
				<div id="edit_user" class="modal custom-modal fade" role="dialog">
					<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Edit User</h5>
								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									{/* <div class="row"> */}

										<div class="col-sm-6">
											<div class="form-group">
												<label>First Name <span class="text-danger">*</span></label>
												<input class="form-control" type="text"/>
											</div>
										</div>

										<div class="col-sm-6">
											<div class="form-group">
												<label>Last Name</label>
												<input class="form-control" type="text"/>
											</div>
										</div>

										<div class="col-sm-6">
											<div class="form-group">
												<label>Email <span class="text-danger">*</span></label>
												<input class="form-control" type="text"/>
											</div>
										</div>

										<div class="col-sm-6">
											<div class="form-group">
												<label>Phone</label>
												<input class="form-control" type="email"/>
											</div>
										</div>

										<div class="col-sm-6">
											<div class="form-group">
												<label>Password</label>
												<input class="form-control" type="password"/>
											</div>
										</div>

										<div class="col-sm-6">
											<div class="form-group">
												<label>Confirm Password</label>
												<input class="form-control" type="password"/>
											</div>
										</div>

										<div class="col-sm-6">
											<div class="form-group">
												<label>Employee ID <span class="text-danger">*</span></label>
												<input type="text" class="form-control floating"/>
											</div>
										</div>

										<div class="col-sm-6">
											<div class="form-group">
												<label>Type</label>
												<select class="select">
                                                    <option>-- Select Type --</option>
													<option>Admin</option>
													<option>Employee</option>
													<option>External</option>
												</select>
											</div>
										</div>
                     

									<div class="table-responsive m-t-15">
										<table class="table table-striped custom-table">
											<thead>
												<tr>
													<th>Module </th>
													<th class="text-center">Role</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Recruit</td>
													<td class="text-center">
                                                        <div class="dropdown action-label">
                                                            <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                                                -- Select Role --
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                <a class="dropdown-item" href="#"> -- Select Role --</a>
                                                                <a class="dropdown-item" href="#"> Engineering</a>
                                                                <a class="dropdown-item" href="#"> Finance</a>
                                                                <a class="dropdown-item" href="#"> IT Manager</a>
                                                            </div>
                                                        </div>                                                        
													</td>
												</tr>
											</tbody>
										</table>
									</div>

									<div class="submit-section">
										<button class="btn btn-primary submit-btn">Submit</button>
									</div>

                  
								</form>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /Edit User Modal -->
				
				<!-- Delete User Modal --> */}
				<div class="modal custom-modal fade" id="delete_user" role="dialog">
					<div class="modal-dialog modal-dialog-centered">
						<div class="modal-content">
							<div class="modal-body">
								<div class="form-header">
									<h3>Delete User</h3>
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
				{/* <!-- /Delete User Modal --> */}
  </div>);
}

export default Users;
