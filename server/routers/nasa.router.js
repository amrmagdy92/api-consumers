import { Router } from "express"
import { getPOD } from "../controllers/nasa.controller"

const router = Router()

router.route("/")
    .get((request, response) => {
        getPOD()
        .then(result => {
            let responseCode = result.code
            let message = result.msg
            response.status(responseCode).render("nasa.ejs", { data: message })
        })
        .catch(err => {
            let responseCode = err.code
            let resultData = err.msg
            response.status(responseCode).json({ msg: resultData })
        })
    })

export default router