const { errorResponse, successResponse } = require("../../utils/responses")
const {Blog} = require("../../models");
const getUrl = require("../../utils/cloudinary_upload");


const createBlog =async(req,res)=>{
    try {
      let image;
      const {title,tag,introduction,conclusion,paragraph1,paragraph2,paragraph3,paragraph4,paragraph5} = req.body;
      if(req.file){
        image = await getUrl(req)
      }
      const response = await Blog.create({
        image,title,tag,introduction,conclusion,paragraph1,paragraph2,paragraph3,paragraph4,paragraph5
      })
      successResponse(res,response)
    } catch (error) {
        errorResponse(res,error)
    }
}
const getBlog = async (req,res)=>{
    try {
       const {uuid} = req.params;
       const blog = await Blog.findOne({
          where:{
            uuid
          }
       })
       successResponse(res,blog)
    } catch (error) {
        errorResponse(res,error)
    }
}
const updateBlog = async (req,res)=>{
    try {
       const {uuid} = req.params;
       const blog = await Blog.findOne({
          where:{
            uuid
          }
       })
       await blog.updateBlog({...req.body})
       successResponse(blog)
    } catch (error) {
        errorResponse(res,error)
    }
}
const deleteBlog = async (req,res)=>{
    try {
       const {uuid} = req.params;
       const blog = await Blog.findOne({
          where:{
            uuid
          }
       })
       await blog.destroy()
       successResponse(blog)
    } catch (error) {
        errorResponse(res,error)
    }
}
const getBlogs = async (req,res)=>{
    try {
        let {page,limit} = req.query
        page = parseInt(page)
        limit = parseInt(limit)
        const offset = (page-1)*limit
        const {count, rows} = await Blog.findAndCountAll({
            offset: offset,
            limit: limit,
            order:[['createdAt','DESC']]
        })
        const totalPages = (count%limit)>0?parseInt(count/limit)+1:parseInt(count/limit)
        successResponse(res, {count, data:rows, page, totalPages})
    } catch (error) {
        errorResponse(res,error)
    }
}

module.exports = {createBlog,getBlogs,getBlog,updateBlog,deleteBlog}