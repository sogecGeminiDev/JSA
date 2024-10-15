require(['dataServer', 'ui'], function(dataServer, ui){

    const user = dataServer.fetchUserData();
    ui.displayUserData(user);
});