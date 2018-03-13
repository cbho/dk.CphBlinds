'use strict';

const Homey = require('homey');
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
         'SWITCH_BINARY'
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
         'windowcoverings_tilt_set',
         'SWITCH_BINARY', {
            multiChannelNodeID: 2
         }
      )

   }
}

module.exports = CB;

/*
Multilevel Switch values (level):
   0x00: covering fully closed.
   0x63: covering fully opened.

MultiLevel Switch values (Slats (=tilt))
   0x00 and 0x63: Slats closed to the one or the other side.
   0x32: Slats open.

Outbound vertical control:
   Param 13: Out_bottom: 0x00: Closed, 0x63: Open

Angle control of horizontal slats:
   Param 23: 0x00 = Closed; up inside 0x32 = Open 0x63 = Closed; down inside

Hardware level (??)
   0x00..0x13 100% Up inside
   0x14..0x27 50% Up inside
   0x28..0x3B Open
   0x3C..0x4F 50% Down inside
   0x50..0x63 100% Down inside

Window Covering Report Command
   Parameter ID, Current Value, Target Value, Duration

*/
