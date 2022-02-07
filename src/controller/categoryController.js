const express = require('express')
const logger = require('../logger/logger')
const CategoryService = require('../service/categoryService')

const CategoryController = () => {
  const router = express.Router()
  
  router.get('', (req, res) => {
    CategoryService.getAllCategories()
      .then((response) => {
        logger.info('Successfully added new post', response.data.postId)
        return res.send(response.data)
      })
  
    /*
     * .catch((error) => {
     *   logger.error(DD600, error)
     *   res.status(ResponseCode.INTERNAL_SERVER_ERROR).send(DD600)
     * })
     */
  })
  
  router.post('', (req, res) => {
    CategoryService.addNewCategory(req.body)
      .then((response) => {
        logger.info('Successfully added new post', response.data.postId)
        return res.send(response.data)
      })
  
    /*
     * .catch((error) => {
     *   logger.error(DD600, error)
     *   res.status(ResponseCode.INTERNAL_SERVER_ERROR).send(DD600)
     * })
     */
  })
  
  router.post('/categories', (req, res) => {
    CategoryService.getCategories(req.body)
      .then((response) => {
        logger.info('Successfully added new post', response.data.postId)
        return res.send(response.data)
      })
  
    /*
     * .catch((error) => {
     *   logger.error(DD600, error)
     *   res.status(ResponseCode.INTERNAL_SERVER_ERROR).send(DD600)
     * })
     */
  })
  
  router.get('/:categoryUrl/page/:page', (req, res) => {
    CategoryService.getAllPosts(req.params)
      .then((response) => {
        logger.info('Successfully added new post', response.data.postId)
        return res.send(response.data)
      })
  
    /*
     * .catch((error) => {
     *   logger.error(DD600, error)
     *   res.status(ResponseCode.INTERNAL_SERVER_ERROR).send(DD600)
     * })
     */
  })
  
  router.get('/:categoryUrl/count', (req, res) => {
    CategoryService.countAllPosts(req.params.categoryUrl)
      .then((response) => {
        logger.info('Successfully added new post', response.data.postId)
        return res.send(response.data)
      })
  
    /*
     * .catch((error) => {
     *   logger.error(DD600, error)
     *   res.status(ResponseCode.INTERNAL_SERVER_ERROR).send(DD600)
     * })
     */
  })
  
  
  return router
}

module.exports = CategoryController()
