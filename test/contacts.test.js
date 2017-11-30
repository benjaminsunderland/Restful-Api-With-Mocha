const expect = require("chai").expect

const contacts = require("../models/contact.js")

describe("Contacts test", () => {
  it("should return a list of contacts", (done) => {
    const contactsList = contacts.getAllContacts().then(contactsList => {
     expect(contactsList).to.be.an("array")
     done()
    })
  })
  it("should add a contact to the contacts list", (done) => {
    const newContact = {
      firstName: "Tim",
      lastName: "Jones",
      email: "tjones@example.com",
      id: 1
    }
    contacts.addContact(newContact).then(contactResult => {
      expect(contactResult).to.have.property("firstName")
      done()
    })
  })
})
