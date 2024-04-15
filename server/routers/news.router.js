import { Router } from "express"
import { fetchFromOKSurf } from "../controllers/news.controller"

const router = Router()

router.route("/")
    .get((request, response) => {
        if (request.query.endPointName === undefined) {
            response.status(400).json({ msg: "Missing endpoint name" })
        } else {
            fetchFromOKSurf(request.query.endPointName)
            .then( result => {
                let responseCode = result.code
                let message = result.msg
                response.status(responseCode).render("categories.ejs", { data: message })
            })
            .catch(err => {
                let responseCode = err.code
                let resultData = err.msg
                response.status(responseCode).json({ msg: resultData })
            })
        }
    })
    .post((request, response) => {
        fetchFromOKSurf(request.query.endPointName, request.body)
        .then( result => {
            let responseCode = result.code
            let message = result.msg
            response.status(responseCode).render("news.ejs", { data: message[request.body.sections] })
        })
        .catch(err => {
            let responseCode = err.code
            let resultData = err.msg
            response.status(responseCode).json({ msg: resultData })
        })
    })

export default router