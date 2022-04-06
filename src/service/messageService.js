const apiAdapter = require('../API/utils/apiAdapter')
const { BACKEND_URL } = require('../config')

const API = apiAdapter(BACKEND_URL || 'http://localhost:8080')
const BASE_PATH = `${BACKEND_URL}/messages`

const MessageService = {
  sendMessage(body) {
    return API.post(`${BASE_PATH}`, body)
  }
}

module.exports = MessageService
