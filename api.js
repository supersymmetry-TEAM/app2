import axios from "axios";


const callApi = async (method, path, data, jwt) => 
{
    const headers = {
        Authorization: `Bearer ${jwt}`,
        "Content-Type" : "application/json"
    };
    
    const baseUrl = "http://27.96.130.14:8787";
    
    const fullUrl = baseUrl + path;
    if (method === "get" || method === "delete"){
        return axios[method](fullUrl, { headers });
    } else {
        return axios[method](fullUrl, data, { headers });
    }
};

const callApi_1 = async (method, path, data, jwt) => 
{
    const headers = {
        Authorization: `Bearer ${jwt}`,
        "Content-Type" : "application/json"
    };
    // const baseUrl = "http://0.0.0.0:7777";
    const baseUrl = "http://27.96.130.14:7777";
    
    const fullUrl = baseUrl + path;
    if (method === "get" || method === "delete"){
        return axios[method](fullUrl, { headers });
    } else {
        return axios[method](fullUrl, data, { headers });
    }
};

export default {

    createAccount: form => callApi("post", "/usrs/v1/", form),
    
    login: form => callApi("post", "/usrs/v1/login/", form),
    
    foods_by_name: (search,page = 1, id,) => 
       callApi("get", `/api/v1/foods/search/?pd_name=${search}&page=${page}&id=${id}`,null,null),
    
    nute_by_name: (foodname) => callApi ("get", `/api/v1/foods/search_nut/?pd_name=${foodname}`,null,null)
  };