import { Router } from "express"
import { getAPIList } from "../controllers/apilist.controller"

const router = Router()

router.route("/")
    .get((request, response) => {
        response.status(200).render("api.nav.ejs", {
            data: getAPIList()
        })
    })

export default router