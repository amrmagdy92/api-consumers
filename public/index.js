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

function shortenUrl() {
    const request = new XMLHttpRequest()
    const body = {
        "url": document.getElementById('shortener-input').value
    }
    request.open('POST', 'http://localhost:3000/api/v1/url-shortener')
    request.setRequestHeader('Content-Type', 'application/json')
    request.setRequestHeader('Accept', 'application/json')
    request.addEventListener('load', function() {
        let result = JSON.parse(request.response)
        if (request.status === 200 && request.readyState === 4) {
            if (result.msg.error) {
                document.getElementById("message-error").classList.remove('visually-hidden')
                document.getElementById("message-error").innerHTML = result.msg.error
            } else {
                document.getElementById("message-error").classList.add('visually-hidden')
                document.getElementById('shortened-url').value = result.msg.result_url
            }
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

function requestURLShortener() {
    const request = new XMLHttpRequest()
    request.open('GET', 'http://localhost:3000/api/v1/url-shortener')
    request.setRequestHeader('Content-Type', 'application/json')
    request.setRequestHeader('Accept', 'application/json')
    request.addEventListener('load', function() {
        if (request.status === 200 && request.readyState === 4) {
            document.getElementById('main-body').innerHTML = request.response
            document.getElementById('shortener-input').value = ""
            document.getElementById('message-error').classList.add('visually-hidden')
            document.getElementById('shortened-url').innerText = ""
            document.getElementById('shortener-input').focus()
            document.getElementById('shortener-input').select()
        } else {
            console.log(request.response)
        }
    })
    request.send()
}

function requestWeather() {}

function loadMainSection(apiCategory) {
    if (apiCategory === "news") {
        requestNewsCategories()
        requestNews()
    } else if (apiCategory === "URL-Shortener") {
        requestURLShortener()
    } else if (apiCategory === "Weather") {
        requestWeather()
    }
}

window.onload = function () {
    requestNewsCategories()
    requestAPIList()
    requestNews()
}