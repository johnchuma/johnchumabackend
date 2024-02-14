const {Router} = require('express')
const { createBlog, getBlogs, getBlog, deleteBlog, updateBlog } = require('./blog.controller')
const upload = require('../../utils/upload')
const router = Router()

router.post("/",upload.single('file'),createBlog)
router.get("/",getBlogs)
router.get("/:uuid",getBlog)
router.patch("/:uuid",updateBlog)
router.delete("/:uuid",deleteBlog)

module.exports = router

