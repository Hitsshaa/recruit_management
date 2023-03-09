import React from 'react'

export const AddJob = () => {
  return (
    <div>
        {/* <!-- Add Job Modal --> */}
				<div id="add_job" class="modal custom-modal fade" role="dialog">
					<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Add Job</h5>
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
												<input class="form-control" type="text"/>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Department</label>
												<select class="select">
													<option>-</option>
													<option>Web Development</option>
													<option>UX/UI Design</option>
													<option>Finance</option>
													<option>Sales</option>
												</select>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label>Job Location</label>
												<input class="form-control" type="text"/>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>No of Positions</label>
												<input class="form-control" type="text"/>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label>Work Experience</label>
												<select class="select">
													<option>-</option>
													<option>0-2 years</option>
													<option>1-3 years</option>
													<option>2-5 years</option>
													<option>4-6 years</option>
													<option>5-10 years</option>
													<option>8-15 years</option>
												</select>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Job Type</label>
												<select class="select">
													<option>Full Time</option>
													<option>Contract</option>
													<option>Internship</option>
												</select>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label>Salary From</label>
												<input type="text" class="form-control"/>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Salary To</label>
												<input type="text" class="form-control"/>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label>Start Date</label>
												<input type="text" class="form-control datetimepicker"/>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Target Date</label>
												<input type="text" class="form-control datetimepicker"/>
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
										<button class="btn btn-primary submit-btn">Submit</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /Add Job Modal --> */}
				
				
    </div>
  )
}
