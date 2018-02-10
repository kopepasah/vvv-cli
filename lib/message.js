const chalk  = require( 'chalk' );

module.exports = {
	/**
	 * Prints out an error message in the console.
	 *
	 * @param {String} message The error message.
	 */
	error( message ) {
		console.error( `${ chalk.red( 'Error:' ) } ${ message }` ); // eslint-disable-line no-console
	},

	/**
	 * Prints out a warning message in the console.
	 *
	 * @param {String} message The warning message.
	 */
	warn( message ) {
		console.warn( `${ chalk.yellow( 'Warning:' ) } ${ message }` ); // eslint-disable-line no-console
	},

	/**
	 * Prints out an error message in the console.
	 *
	 * @param {String} message The error message.
	 */
	success( message ) {
		console.error( `${ chalk.green( 'Success:' ) } ${ message }` ); // eslint-disable-line no-console
	}
}
