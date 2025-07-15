(() => {

    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    function getMovieCastById( movieId: string ) {
        console.log({ movieId });
    }

    function getActorBioById( actorId: string ) {
        console.log({ actorId });
    }
    
    // Crear una película
    interface Movie {
        cast:           string[];
        description:    string; 
        title:          string; 
        rating:         number;
    }
    function createMovie({
        title, 
        description, 
        rating, 
        cast
    }: Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }
})();