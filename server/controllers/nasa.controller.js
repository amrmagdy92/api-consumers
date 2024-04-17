import { validateQuery } from "../helpers/nasa.helpers"

const getPOD = (queries) => {
    return new Promise((resolve, reject) => {
        let NASAURL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
        let validationErrors = validateQuery(queries)
        if (Object.keys(validationErrors).length > 0) {
            reject({
                code: 400,
                msg: `Invalid query: ${validationErrors}`
            })
        } else {
            if (Object.keys(queries).length > 0) {
                for (let i=0; i<Object.keys(queries).length; i++) {
                    NASAURL += `&${Object.keys(queries)[i]}=${Object.values(queries)[i]}`
                }
            }
            fetch(NASAURL)
            .then(response => response.json())
            .then(data => {
                resolve({
                    code: 200,
                    msg: data
                })
            })
        }
    })
}

export { getPOD }