'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

// Documentation: https://products.z-wavealliance.org/products/1835

class CB extends ZwaveDevice {

   async onMeshInit() {

      // enable debugging
      this.enableDebug();

      // print the node's info to the console
      this.printNode();

      // register the `measure_battery` capability with COMMAND_CLASS_BATTERY and with the
		// default system capability handler (see: lib/zwave/system/capabilities)
		this.registerCapability(
         'measure_battery', 'BATTERY', {
            getOpts: {
               getOnOnline: true
            }
         }
      );

      // register devices capabilities

      this.registerCapability(
         'onoff',
         'SWITCH_BINARY', {
            multiChannelNodeID: 1
         }
      );

      this.registerCapability(
         'dim',
         'SWITCH_MULTILEVEL', {
            multiChannelNodeID: 1
         }
      );

      this.registerCapability(
         'windowcoverings_state',
         'WINDOW_COVERING', {
            multiChannelNodeID: 1
         }
      );

      this.registerCapability(
         'dim',
         'SWITCH_MULTILEVEL', {
            multiChannelNodeID: 2
         }
      )

      this.registerCapability(
         'windowcoverings_tilt_set',
         'SWITCH_BINARY', {
            multiChannelNodeID: 2
         }
      )
   }
}

module.exports = CB;
