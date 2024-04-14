const fetchFromOKSurf = (endPointName, requestBody) => {
    const allowedEndpoints = ['news-section', 'news-section-names']
    const method = endPointName == "news-section" ? 'POST' : 'GET'
    const body = requestBody ? JSON.stringify(requestBody) : null
    return new Promise((resolve, reject) => {
        if (!allowedEndpoints.includes(endPointName)) {
            reject({
                code: 400,
                msg: 'Invalid endpoint name'
            })
        } else {
            fetch(`https://ok.surf/api/v1/${endPointName}`, {
                method: method,
                body: body,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                resolve({
                    code: 200,
                    msg: data
                })
            })
            .catch(err => {
                reject({
                    code: 500,
                    msg: err
                })
            })
        }
    })
}

export {
    fetchFromOKSurf
}