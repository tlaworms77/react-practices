// Asynchronous Programming

const wget1 = (url, callback) => {
    console.log( 'wget1 [' + url + ']' );
 
    setTimeout(() => {
        const response = {
            data: 'Hello Wolrd'
        }
        callback(response);
    }, 3000);

}

const wget2 = (url) => {
    console.log( 'wget2 [' + url + ']' );

    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const response = {
                data: 'Hello Wolrd'
            }
            resolve(response);
            //reject( 'fails - wget2' );
        }, 3000);
    } );
}

const _fetch = async(url) => {
    try {
        console.log( 'fetch [' + url + ']' );
        var response = await wget2( url );
        return response;
    } catch( err ){
        console.error( err );
    }
}
 

wget1( 'http://www.kickscar.com/api', ( response ) => console.log( response ) );

wget2( 'http://www.kickscar.com/api' )
.then( (response) => console.log(response) )
.catch( (err) => console.error(err) );

_fetch( 'http://www.kickscar.com/api' )
.then( (response) => console.log(response) )


console.log( 'do something....' );