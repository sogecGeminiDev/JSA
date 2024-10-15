define(function() {
    return {
        createCompteur: function() {
            let count = 0;
            return function() {
                count++;
                console.log(count);
            };
        }
    };
});