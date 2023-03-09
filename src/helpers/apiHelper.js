export const httpMethodTypes = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  DELETE: "DELETE",
};
export const apiHelper = {
  createRequestOptions,
  sendRequest,
};

let sessionExpired = false;

function createRequestOptions(
  requestMethod,
  isAuthorized = false,
  requestDataBlk
) {
  const params = requestDataBlk;
  const requestOptions = {
    method: requestMethod,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // 'Access-Control-Allow-Credentials': 'true',
    },
  };
  if (
    (requestMethod == httpMethodTypes.POST ||
      requestMethod == httpMethodTypes.PUT) &&
    requestDataBlk
  ) {
    requestOptions.body = JSON.stringify(requestDataBlk);
  }
  if (isAuthorized) {
    //if (!authToken) {
    const authToken = returnLocalStorageTocken();

    //}
    requestOptions.headers.Authorization = "Bearer " + authToken;
  }

  return requestOptions;
}

let resStatus = 0;
function sendRequest(url, requestOptions, successCallBack, errorCallBack) {
  return fetch(url, requestOptions)
    .then((res) => {
      resStatus = res.status;
      if (resStatus == 204 || resStatus == 500 || resStatus == 404) {
        console.log("inerror");
        return errorCallBack(res);
      }
      return res.json();
    })
    .then((res) => {
      switch (resStatus) {
        case 200:
        case 201:
        case 204:
          if (sessionExpired) {
            sessionExpired = false;
          }
          return successCallBack(res);
          break;
        case 400:
          console.log("in 404");
          if (res) {
            if (errorCallBack) {
              errorCallBack(res);
            } else {
              var errors = "";
              for (var key in res) {
                if (res.hasOwnProperty(key)) {
                  var val = res[key];
                  errors += val + " ";
                }
              }
            }
          } else {
            const error = "Failed to perform action";
          }

          break;
        case 401:
          if (!sessionExpired) {
            sessionExpired = true;
            localStorage.removeItem("token");
          }
          break;
        case 403:
          if (res) {
            var errors = "";
            for (var key in res) {
              if (res.hasOwnProperty(key)) {
                var val = res[key];
                errors += val + " ";
              }
            }
          }
          break;
        case 404:
          break;

        case 500:
          break;
        default:
          console.log("unhandled");
          break;
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

const returnLocalStorageTocken = () => {
  const keys = Object.keys(localStorage);
  let i = keys.length;
  while (i--) {
    const val = localStorage.getItem(keys[i]);
    try {
      const json = JSON.parse(val);
      if (json.credentialType === "IdToken") {
        return json.secret;
      }
    } catch (e) {}
  }
};
