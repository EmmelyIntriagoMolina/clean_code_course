(() => {

    const temperaturesCelsius = [33.6, 12.34];

    const serverIP = '123.123.123.123';

    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // Listado de emails de los usuarios
    const usersEmails = users.map( user => user.email );

    const isJumping = false;
    const isRunning = true;
    const hasItems = true;
    const isLoading = false;

    // Otros ejercicios
    const initialTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    const finalTime = new Date().getTime() - initialTime;


    // Funciones
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function getBooksByUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    
    function getScureArea( side: number ) {
        throw new Error('Function not implemented.');
    }

    function printJob() {
        throw new Error('Function not implemented.');
    }
    
})();