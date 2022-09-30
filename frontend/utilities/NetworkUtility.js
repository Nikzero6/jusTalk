import toast from "react-hot-toast";
import ROUTES from "./Constants";

const NetworkCallType = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE"
};

const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

const makeRequest = async (path, request, onSuccess, onFailure) => {
  try {
    const response = await fetch(path, request);
    const data = await response.json();
    const statusCode = response.status;
    if (statusCode === 201 || statusCode === 200) {
      onSuccess(data);
    } else {
      onFailure(data);
    }
  } catch (error) {
    onFailure(error);
  }
};

const doPost = async (path, headers, params, onSuccess, onFailure) => {
  return await makeRequest(
    path,
    {
      headers: {
        ...defaultHeaders,
        ...headers
      },
      body: JSON.stringify(params),
      method: NetworkCallType.POST
    },
    onSuccess,
    onFailure
  );
};

const doGet = async (path, headers, params, onSuccess, onFailure) => {
  return await makeRequest(
    path,
    {
      headers: {
        ...defaultHeaders,
        ...headers
      },
      method: NetworkCallType.GET
    },
    onSuccess,
    onFailure
  );
};

const apiCall = async (
  apiController,
  params,
  setDatas,
  setLoading,
  successMsg,
  log,
  cancel = true
) => {
  let status = 500;
  try {
    const { data, statusCode, msg } = await apiController(...params);
    status = statusCode;
    if (isAPISuccess(statusCode) && !!data) {
      if (!!log) {
        console.log(data);
      }

      if (!!setDatas && !!data && cancel) {
        setDatas.forEach(({ setData, value, properties, method }) => {
          if (!!value) {
            setData(value);
          } else if (!!properties) {
            let reqData = data;
            let count = 0;
            while (count < properties.length) {
              if (!!reqData[properties[count]]) {
                reqData = reqData[properties[count++]];
              } else {
                break;
              }
            }
            if (count == properties.length) {
              setData(reqData);
            }
          } else if (!!method) {
            method(data, setData);
          } else {
            setData(data);
          }
        });
      }

      if (!!successMsg && !!successMsg.length) toast.success(successMsg);
    } else if (!!msg) {
      toast.error(msg, { position: "top-right" });
      window.location.href = `${window.location.origin}ROUTES.SHOP`;
    } else {
      toast.error("Some error occured!", {
        position: "top-center"
      });
    }
  } catch (error) {
    if (!!log) {
      console.log(error);
    }
    toast.error("Some error occured!", {
      position: "top-center"
    });
  } finally {
    if (!!setLoading && cancel) setLoading(false);
    return status;
  }
};

const isAPISuccess = (statusCode) => {
  return statusCode == 200 || statusCode == 201;
};

export { doGet, doPost, apiCall, isAPISuccess };
