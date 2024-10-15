require(['contact', 'contactService'], function(contact, contactService) {

    const personn = contact.createContact('John', 'john@john.com');
    const personn1 = contact.createContact('Britany', 'britany@john.com');

    contactService.addContact(personn);
    contactService.addContact(personn1);

    contactService.getContacts().map(contact => console.log(`I iterate on ${contact.name} with email ${contact.email}.`));
    
    contactService.deleteContact(personn1);
    
    contactService.getContacts().map(contact => console.log(`I iterate on ${contact.name} with email ${contact.email}.`));
    
    contactService.deleteContact(personn);
    
    if (contactService.getContacts().length < 1){
        console.log('Contact service is empty');
    } else {
        contactService.getContacts().map(contact => console.log(`I iterate on ${contact.name} with email ${contact.email}.`));
    }
});