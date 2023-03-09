import React from 'react'

export  const HeaderJob = () => {
  return (
    <div>
        	<div class="page-header">
						<div class="row align-items-center">
							<div class="col">
								<h3 class="page-title">Jobs</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
									<li class="breadcrumb-item active">Jobs</li>
								</ul>
							</div>
							<div class="col-auto float-end ms-auto">
								<a href="#" class="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_job"><i class="fa fa-plus"></i> Add Job</a>
							</div>
						</div>
					</div>
    </div>
  )
}
