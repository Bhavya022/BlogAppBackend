
const express = require('express') 
const blogController = require('../controllers/blogController') 
const router = express.Router() 
const auth = require('../utils/auth') 

//router.use(auth)  
router.get('/',blogController.welcome) 
router.get('/blogs',blogController.getAllBlogs)
router.post('/blogs',blogController.createBlog) 
router.put('/blogs/:id',blogController.updateBlog) 
router.delete('/blogs/:id',blogController.deleteBlog)  
router.patch('/blogs/:id/like',blogController.likeBlog) 
router.patch('/blogs/:id/comment',blogController.commentOnBlog) 
router.get('/blogs/search/:query', blogController.searchBlogs)
router.get('/blogs/filter/:category/sort/:order', blogController.filterAndSortBlogs)



module.exports=router 