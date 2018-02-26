'use strict';

const Homey = require('homey');
const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

// Documentation: https://products.z-wavealliance.org/products/1835

class CB extends ZwaveDevice {
    async onMeshInit() {
        this.enableDebug();
        this.printNode();

        // register devices capabilities
        this.registerCapability(
            'measure_battery', 'BATTERY',
                {
                    getOpts: {
                        getOnStart: true,
                        getOnOnline: true
                    }
                }
        );
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
            'onoff',
            'SWITCH_BINARY', {
                multiChannelNodeID: 2
            }
        );
        this.registerCapability(
            'dim',
            'SWITCH_MULTILEVEL', {
                multiChannelNodeID: 2
            }
        );
    }
}

module.exports = CB;
