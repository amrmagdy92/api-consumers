import { Router } from "express"
import { getPOD } from "../controllers/nasa.controller"

const router = Router()

router.route("/")
    .get((request, response) => {
        getPOD(request.query)
        .then(result => {
            let responseCode = result.code
            let message = result.msg
            response.status(responseCode).render("nasa.ejs", { data: message })
        })
    })

export default router