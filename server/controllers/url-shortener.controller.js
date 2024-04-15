const shortenURL = (url) => {
    return new Promise((resolve, reject) => {
        console.log(url)
        fetch('https://cleanuri.com/api/v1/shorten', {
            method: 'POST',
            body: JSON.stringify({ url: url}),
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