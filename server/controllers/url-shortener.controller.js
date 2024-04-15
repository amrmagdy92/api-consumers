const shortenURL = (url) => {
    return new Promise((resolve, reject) => {
        fetch('https://cleanuri.com/api/v1/shorten', {
            method: 'POST',
            body: url,
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
    })
}

export { shortenURL }