const listAllProviders = () => {
    return new Promise((resolve, reject) => {
        fetch('https://api.apis.guru/v2/providers.json', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => resolve({
            code: 200,
            msg: data
        }))
        .catch(err => reject({
            code: 500,
            msg: err
        }))
    })
}
const listAllProviderAPI = (provider) => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.apis.guru/v2/${provider}.json`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => resolve({
            code: 200,
            msg: data
        }))
        .catch(err => reject({
            code: 500,
            msg: err
        }))
    })
}
const listAllProviderServices = (provider) => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.apis.guru/v2/${provider}/services.json`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => resolve({
            code: 200,
            msg: data
        }))
        .catch(err => reject({
            code: 500,
            msg: err
        }))
    })
}
const listAllAPI = () => {
    return new Promise((resolve, reject) => {
        fetch('https://api.apis.guru/v2/list.json', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => resolve({
            code: 200,
            msg: data
        }))
        .catch(err => reject({
            code: 500,
            msg: err
        }))
    })
}
const getBasicMetrics = () => {
    return new Promise((resolve, reject) => {
        fetch('https://api.apis.guru/v2/metrics.json', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => resolve({
            code: 200,
            msg: data
        }))
        .catch(err => reject({
            code: 500,
            msg: err
        }))
    })
}

export {
    listAllProviders,
    listAllProviderAPI,
    listAllProviderServices,
    listAllAPI,
    getBasicMetrics
}