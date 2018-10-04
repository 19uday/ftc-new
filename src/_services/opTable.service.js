export const opTableService = {
    getOpTable
};
function getOpTable() {
    const requestOptions = {
        method: "GET",
        body: null
    };

    return fetch(`http://2609a159-4f2d-4403-9fb1-7d284a187567.mock.pstmn.io/trackerMetrics/operational`, requestOptions)
        .then(handleResponse)
}
function handleResponse(response) {
    return response.json().then(json => {
        if (!response.ok) {
            if (response.status === 403) {
                console.log("403")
                localStorage.removeItem('user')
                window.location.reload(true);
            }

            const error = (json && json.message) || response.statusText;
            return Promise.reject(error);
        }
        else{
            console.log("suc");
            return json;
        }
    });
}