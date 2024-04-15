function requestNewsCategories () {
    const request = new XMLHttpRequest()
    request.open('GET', 'http://localhost:3000/api/v1/news/?endPointName=news-section-names')
    request.setRequestHeader('Content-Type', 'application/json')
    request.setRequestHeader('Accept', 'application/json')
    request.setRequestHeader('Access-Control-Allow-Origin', '*')
    request.addEventListener('load', function() {
        if (request.status === 200 && request.readyState === 4) {
            document.getElementById('categories-nav').innerHTML = request.response
        } else {
            if (request.status == 400 && request.readyState === 4) {
                console.log(request.response)
                // TODO: Add proper error handling
            }
        }
    })
    request.send()
}

function requestNews(category) {
    const request = new XMLHttpRequest()
    const body = {
        "sections": [ category? category : "Technology" ]
    }
    request.open('POST', 'http://localhost:3000/api/v1/news/?endPointName=news-section')
    request.setRequestHeader('Content-Type', 'application/json')
    request.setRequestHeader('Accept', 'application/json')
    request.addEventListener('load', function() {
        if (request.status === 200 && request.readyState === 4) {
            document.getElementById('news-section').innerHTML = request.response
        } else {
            console.log(request.response)
        }
    })
    request.send(JSON.stringify(body))
}

function requestAPIList() {
    const request = new XMLHttpRequest()
    request.open('GET', 'http://localhost:3000/api/v1/apilist')
    request.setRequestHeader('Content-Type', 'application/json')
    request.setRequestHeader('Accept', 'application/json')
    request.setRequestHeader('Access-Control-Allow-Origin', '*')
    request.addEventListener('load', function() {
        if (request.status === 200 && request.readyState === 4) {
            document.getElementById('api-nav').innerHTML = request.response
        } else {
            console.log(request.response)
        }
    })
    request.send()
}

function requestURLShortener() {}

function requestWeather() {}

function loadMainSection(apiCategory) {
    if (apiCategory === "news") {
        requestNewsCategories()
        requestNews()
    } else if (apiCategory === "URL-Shortener") {} else if (apiCategory === "Weather") {}
}

window.onload = function () {
    requestNewsCategories()
    requestAPIList()
    requestNews()
}