import React, { useEffect, useState } from "react";
import { testApis } from "../../utils/testApiUtil";

function Test() {
  useEffect(() => {
    callApi();
  }, []);
  const [jobs, setJobs] = useState([]);
  const callApi = async () => {
    await testApis.testApi(
      (res) => {
        setJobs(res);
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  };
  return <div>Test</div>;
}

export default Test;
