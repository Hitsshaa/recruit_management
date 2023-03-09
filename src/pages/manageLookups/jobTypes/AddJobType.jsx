import React from 'react'

export const AddJobType = ({setJobName,setStatus,addJobTypes}) => {
  return (
    <div>
        	<div id="add_employee" class="modal custom-modal fade" role="dialog">
					<div class="modal-dialog modal-dialog-centered" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Add Job Type</h5>
								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="row">
										<div class="col-sm-12">
											<div class="form-group">
												<label>Job Type <span class="text-danger">*</span></label>
												<input class="form-control" type="text" onChange={(e)=>setJobName(e.target.value)}/>
											</div>
										</div>
										<div class="col-sm-12">
											<div class="form-group">
												<label class="col-form-label">Status</label>
												<select class="select" onChange={(e)=>setStatus(e.target.value=="Active"?1:0)}>
													<option>Select</option>
													<option>Active</option>
													<option>Inactive</option>
												</select>
											</div>
										</div>
										
									</div>
									
									<div class="submit-section">
										<button class="btn btn-primary submit-btn" onClick={()=>{addJobTypes()}}>Submit</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
    </div>
  )
}
