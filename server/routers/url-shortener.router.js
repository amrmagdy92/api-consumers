import { Router } from "express"
import { shortenURL } from "../controllers/url-shortener.controller"

const router = Router()

router.route('/')
    .get((request, response) => {
        response.status(200).render('url-shortener.ejs')
    })
    .post((request, response) => {
        shortenURL(request.body.url)
        .then(result => {
            let responseCode = result.code
            let resultData = result.msg
            response.status(responseCode).json({ msg: resultData })
        })
        .catch(err => {
            let responseCode = err.code
            let resultData = err.msg
            response.status(responseCode).json({ msg: resultData })
        })
    })

export default router