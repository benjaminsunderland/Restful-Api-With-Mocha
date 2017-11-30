const expect = require("chai").expect
const contacts = require("../models/contact.js")

describe("contacts test", () => {
  it("should return a list of contacts", () => {
    const contactsList = contacts.getAllContacts()
    expect(contactsList).to.be.an("array")
  })
})
