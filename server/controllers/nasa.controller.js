const getPOD = () => {
    return new Promise((resolve, reject) => {
        let NASAURL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
        fetch(NASAURL)
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

export { getPOD }