import express, { Express, Request, Response} from 'express'
const router = express.Router()

router.get('/', async (req: Request, res: Response, next) => {
    return res.status(200).json({
        msg: "Testing api messaging system.",
        msg1: "LMOAFMOWMFOME"
    })
})

module.exports = router;