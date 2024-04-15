import { Router } from "express"
import { listAllProviders, listAllProviderAPI, listAllProviderServices, listAllAPI, getBasicMetrics } from "../controllers/apiguru.controller"

const router = Router()

router.route("/providers")
    .get(listAllProviders)

router.route("/providers/api")
    .get(listAllProviderAPI)

router.route("/providers/services")
    .get(listAllProviderServices)

router.route("/apis")
    .get(listAllAPI)

router.route("/metrics")
    .get(getBasicMetrics)

export default router