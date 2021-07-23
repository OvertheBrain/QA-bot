export const SendService = (message,callback) => {
    const data={
        message:message,
    }

    fetch(`http://127.0.0.1:8000/test`,{
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        });
};
