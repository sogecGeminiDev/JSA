define(function() {
    return {
        createContact: function(name, email) {
            console.log(`Contact ${name} has created now with email '${email}'!`);
            return {
                name: name,
                email: email
            }
        }
    };
});