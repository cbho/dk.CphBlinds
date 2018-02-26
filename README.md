## Copenhagen Blinds - DEVELOPMENT VERSION
Unofficial support for the battery driven, z-wave controlled venetian blinds "Copenhagen Blinds" from "Art Andersen Copenhagen" in Homey.

### Supported devices
##### [Copenhagen Blinds](https://www.byartandersencph.com/en/)
Please note, this is a community app as the manufacturer, unfortunately has no intent to provide an app for Homey.
Further, the manufacturer has declined to supply any kind of information or support other than the most basic information that is available via the Z-Wave Alliance website:

##### [From the manufacturer's faq](https://www.byartandersencph.com/en/faq/):
* \"Can I use my Homey Box to control Copenhagen Blinds?\"

\"Yes and no. If you will benefit from all the advanced functions in the Art Andersen CPH app then you need to use the Copenhagen Blinds Gateway instead of a Homey Box. However if you just want the basic control (up/down/tilt) then you can use a Homey Box which also runs Z-Wave protocol like Copenhagen Blinds, however, Art Andersen CPH does not offer any kind of support for that.\"
* \"Does Copenhagen Blinds offer a Homey App?\"

\"No.\"

### Supported Languages:
* English

### Features
According to the specifications the device supports:
 Automatic Calibration
 Endpoint Aware
 Position Aware
 Supports Horizontal Blinds/Louvers
 Supports Open/Close Motion
 Supports Tilt Motion
 Supports Up/Down Motion

Hopefully all features will be implemented in the app as well.

### App progress

#### Working:
Devices can be included (only non-secure; Z-Wave plus protocol, but not supporting AES-128 Security)

###### Actions:
    Open
    Close
    Set to position
    Set state up/idle/down

#### Not working:

###### Triggers:
    Opened
    Closed
    Position changed
    The state changed (up/idle/down)

###### Conditions:
    Is open/closed
    State is (not) up/idle/down

### Change log

###### Version 0.0.2
- Vertical position as well as tilt can be controlled using sliders.
- Generic action flow cards (open/close/set position) can be used to set vertical postion as well as tilt.

###### Version 0.0.1
- Absolutely first release
