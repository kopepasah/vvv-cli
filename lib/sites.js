const fs       = require( 'fs' );
const yaml     = require( 'js-yaml' );
const chalk    = require( 'chalk' );
const machines = require( './machines' );
const message  = require( './message' );

module.exports = {

	/**
	 * Gets the site for the command.
	 */
	getSite( site ) {
		let data = false,
			config = {},
			dir = '',
			cwd = '';

		// Machine name was passed, so let's use it.
		if ( site.indexOf( '.' ) !== -1 ) {
			site = site.split( '.' );

			if ( machines.list.hasOwnProperty( site[0] ) ) {
				cwd = machines.list[ site[0] ];
			} else {
				message.error( `No machine exists with name ${ chalk.cyan( site[0] ) }. Run 'vvv config ${ chalk.cyan( site[0] ) }' from within the VVV directory.` )
				process.exit( 1 );
			}

			site = site[1];
		} else {
			cwd = machines.list[ machines.default ];
		}

		if ( fs.existsSync( `${ cwd }/vvv-custom.yml` ) ) {
			config = `${ cwd }/vvv-custom.yml`;
		} else {
			config = `${ cwd }/vvv-config.yml`;
		}

		config = yaml.safeLoad( fs.readFileSync( config, 'utf8' ) );

		if ( config.sites.hasOwnProperty( site ) ) {
			data = config.sites[ site ];
		} else {
			message.error( `No site exists with name ${ chalk.cyan( site ) }. Make sure site exists in you VVV config YAML file.` );
			process.exit( 1 );
		}

		if ( undefined !== data.vm_dir ) {
			dir = data.vm_dir;
		} else {
			dir = `/srv/www/${ site }`;
		}

		return { cwd, dir };
	}
};
