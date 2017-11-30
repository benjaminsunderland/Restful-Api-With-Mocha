'use strict'

function getAllContacts() {
  return new Promise((resolve, reject) => {
    resolve([])
  })
}

function addContact(newContact) {
  return new Promise((resolve, reject) => {
    resolve(newContact)
  })
}

module.exports = {
  getAllContacts: getAllContacts,
  addContact: addContact
}
