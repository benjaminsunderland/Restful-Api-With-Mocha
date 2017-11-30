const expect = require("chai").expect

const contacts = require("../models/contact.js")

describe("contacts test", () => {
  it("should return a list of contacts", (done) => {
    const contactsList = contacts.getAllContacts().then(contactsList => {
     expect(contactsList).to.be.an("array")
     done()
    })
  })
})
