const fs       = require( 'fs' );
const path     = require( 'path' );
const filePath = `${ path.resolve( __dirname, '..' ) }/machines.json`;

// No machines? Throw an error and bail.
if ( ! fs.existsSync( filePath ) ) {
	console.log( 'Error: no machines defined. run vvv config' ); // eslint-disable-line no-console
	process.exit( 1 );
}

module.exports = require( filePath );
