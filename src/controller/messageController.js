const express = require('express')
const logger = require('../logger/logger')
const MessageService = require('../service/messageService')
const { handleError } = require('../utils/errorHandlers')

const MessageController = () => {
  const router = express.Router()
  
  router.post('', (req, res) => {
    MessageService.sendMessage(req.body)
      .then(({ data }) => res.send(data))
      .catch((error) => {
        const customError = { message: 'Failed to send message' }
        logger.logAPIError(req, error, customError)
        handleError(error, res, customError)
      })
  })
  
  return router
}

module.exports = MessageController()
