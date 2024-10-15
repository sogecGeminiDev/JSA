define(function() {
    return {
        contacts: [],

        addContact: function(contact)
        {
            console.log(`Contact ${contact.email} has added.`);
            this.contacts.push(contact);
        },
        deleteContact: function(contact)
        {
            console.log(`Contact ${contact.email} has deleted.`);
            this.contacts = this.contacts.filter(rowContact =>  rowContact.email !== contact.email);
        },
        getContacts: function()
        {
            console.log(`Display all contacts`);
            return this.contacts;
        }
    };
});