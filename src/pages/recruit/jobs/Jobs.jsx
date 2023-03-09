import React, { useEffect, useState } from "react";
import { jobsAllApis } from "../../../utils/jobsApiUtil";
import { AddJob } from "./AddJob";
import { DeleteJob } from "./DeleteJob";
import { EditJob } from "./EditJob";
import { HeaderJob } from "./HeaderJob";
import { MainBodyJob } from "./MainBodyJob";
import { SearchJob } from "./SearchJob";

function Jobs() {
  useEffect(() => {
    getAllJobs();
  }, []);
  const [jobs, setJobs] = useState([]);

  const getAllJobs = async () => {
    await jobsAllApis.getJobs(
      (res) => {
        setJobs(res);
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  };

  const addJob = async () => {
    const dataBlock = {
      jobTitle: "added new Blockn 8787 kjhgouyoyoiuipuio",
      startDate: "01/01/2023",
      endDate: "01/12/2023",
      jobType: "Part Time",
      status: "open",
      jobID: 36,
      applicant: 0,
      department: "new added dept",
    };
    await jobsAllApis.addJobs(
      dataBlock,
      (res) => {
        setJobs(res);
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  };

  return (
    <>

      <div class="content container-fluid">
      {/* <!-- Page Header --> */}
				<HeaderJob/>
					{/* <!-- /Page Header -->
					<!-- Search Filter --> */}
				<SearchJob/>
					{/* <!-- Search Filter --> */}
       <MainBodyJob addJob={addJob} jobs={jobs}/>
      </div>
      <AddJob/>
      <EditJob/>
      <DeleteJob/>
    </>
  );
}

export default Jobs;
