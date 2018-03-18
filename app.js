'use strict';

const HomeyAppUpload = require('homey-app-upload-lib');

const Homey = require('homey');

class CphBlinds extends Homey.App {

	onInit() {
		this.log('CphBlinds is running...');
    HomeyAppUpload(this.manifest);
	}
}

module.exports = CphBlinds;
