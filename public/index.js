function requestNewsCategories () {
    const request = new XMLHttpRequest()
    request.open('GET', 'http://localhost:3000/api/v1/news/?endPointName=news-section-names')
    request.setRequestHeader('Content-Type', 'application/json')
    request.setRequestHeader('Accept', 'application/json')
    request.setRequestHeader('Access-Control-Allow-Origin', '*')
    request.addEventListener('load', function() {
        if (request.status === 200 && request.readyState === 4) {
            console.log(request.response)
        } else {
            if (request.status == 400 && request.readyState === 4) {
                console.log(request.response)
                // TODO: Add proper error handling
            }
        }
    })
    request.send()
}