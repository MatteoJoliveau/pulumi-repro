import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceEthernet extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceEthernet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceEthernetState, opts?: pulumi.CustomResourceOptions): InterfaceEthernet;
    /**
     * Returns true if the given object is an instance of InterfaceEthernet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceEthernet;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___skip_: pulumi.Output<string | undefined>;
    /**
     * Advertised speed and duplex modes for Ethernet interfaces over twisted pair, only applies when auto-negotiation is
     * enabled. Advertising higher speeds than the actual interface supported speed will have no effect, multiple options are
     * allowed.
     */
    readonly advertise: pulumi.Output<string | undefined>;
    /**
     * Address Resolution Protocol mode: * disabled - the interface will not use ARP * enabled - the interface will use ARP *
     * local-proxy-arp - the router performs proxy ARP on the interface and sends replies to the same interface * proxy-arp -
     * the router performs proxy ARP on the interface and sends replies to other interfaces * reply-only - the interface will
     * only reply to requests originated from matching IP address/MAC address combinations which are entered as static entries
     * in the ARP table. No dynamic entries will be automatically stored in the ARP table. Therefore for communications to be
     * successful, a valid static entry must already exist.
     */
    readonly arp: pulumi.Output<string | undefined>;
    /**
     * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to
     * the value of arp-timeout in IP/Settings, default is 30s. Can use postfix ms, s, M, h, d for milliseconds, seconds,
     * minutes, hours or days. If no postfix is set then seconds (s) is used.
     */
    readonly arpTimeout: pulumi.Output<string | undefined>;
    /**
     * When enabled, the interface "advertises" its maximum capabilities to achieve the best connection possible. Note1:
     * Auto-negotiation should not be disabled on one end only, otherwise Ethernet Interfaces may not work properly. Note2:
     * Gigabit Ethernet and NBASE-T Ethernet links cannot work with auto-negotiation disabled.
     */
    readonly autoNegotiation: pulumi.Output<boolean | undefined>;
    /**
     * Sets max rx/tx bandwidth in kbps that will be handled by an interface. TX limit is supported on all Atheros switch-chip
     * ports. RX limit is supported only on Atheros8327/QCA8337 switch-chip ports.
     */
    readonly bandwidth: pulumi.Output<string | undefined>;
    /**
     * Changes the cable length setting (only applicable to NS DP83815/6 cards)
     */
    readonly cableSettings: pulumi.Output<string | undefined>;
    /**
     * When auto mode is selected, the port that was first connected will establish the link. In case this link fails, the
     * other port will try to establish a new link. If both ports are connected at the same time (e.g. after reboot), the
     * priority will be the SFP/SFP+ port. When sfp mode is selected, the interface will only work through SFP/SFP+ cage. When
     * copper mode is selected, the interface will only work through RJ45 Ethernet port.
     */
    readonly comboMode: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * The default name for an interface.
     */
    readonly defaultName: pulumi.Output<string>;
    /**
     * Disable running check. If this value is set to 'no', the router automatically detects whether the NIC is connected with
     * a device in the network or not. Default value is 'yes' because older NICs do not support it. (only applicable to x86)
     */
    readonly disableRunningCheck: pulumi.Output<boolean | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * The factory name of the identifier, serves as resource identifier. Determines which interface will be updated.
     */
    readonly factoryName: pulumi.Output<string>;
    /**
     * Changes Forward Error Correction (FEC) mode for SFP28, QSFP+ and QSFP28 interfaces. Same mode should be used on both
     * link ends, otherwise FEC mismatch could result in non-working link or even false link-ups.
     */
    readonly fecMode: pulumi.Output<string | undefined>;
    /**
     * Defines whether the transmission of data appears in two directions simultaneously, only applies when auto-negotiation is
     * disabled.
     */
    readonly fullDuplex: pulumi.Output<boolean | undefined>;
    readonly interfaceEthernetId: pulumi.Output<string>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    readonly l2mtu: pulumi.Output<number | undefined>;
    readonly loopProtect: pulumi.Output<string | undefined>;
    readonly loopProtectDisableTime: pulumi.Output<string | undefined>;
    readonly loopProtectSendInterval: pulumi.Output<string | undefined>;
    readonly loopProtectStatus: pulumi.Output<string>;
    /**
     * Media Access Control number of an interface.
     */
    readonly macAddress: pulumi.Output<string | undefined>;
    /**
     * Whether the MDI/X auto cross over cable correction feature is enabled for the port (Hardware specific, e.g. ether1 on
     * RB500 can be set to yes/no. Fixed to 'yes' on other hardware.)
     */
    readonly mdixEnable: pulumi.Output<boolean | undefined>;
    /**
     * Layer3 Maximum transmission unit
     */
    readonly mtu: pulumi.Output<number | undefined>;
    /**
     * Name of the ethernet interface.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Original Media Access Control number of an interface. (read only)
     */
    readonly origMacAddress: pulumi.Output<string>;
    /**
     * An option that enables LLDP for managing devices.
     */
    readonly poeLldpEnabled: pulumi.Output<boolean | undefined>;
    /**
     * PoE settings: (https://wiki.mikrotik.com/wiki/Manual:PoE-Out)
     */
    readonly poeOut: pulumi.Output<string | undefined>;
    /**
     * PoE settings: (https://wiki.mikrotik.com/wiki/Manual:PoE-Out)
     */
    readonly poePriority: pulumi.Output<number | undefined>;
    /**
     * An option that allows us to manually control the voltage outputs on the PoE port.
     */
    readonly poeVoltage: pulumi.Output<string | undefined>;
    /**
     * An options that disables PoE-Out power for 5s between the specified intervals.
     */
    readonly powerCycleInterval: pulumi.Output<string | undefined>;
    /**
     * An address to monitor.
     */
    readonly powerCyclePingAddress: pulumi.Output<string | undefined>;
    /**
     * An option that enables ping watchdog of power cycles on the port if a host does not respond to ICMP or MAC-Telnet
     * packets.
     */
    readonly powerCyclePingEnabled: pulumi.Output<boolean | undefined>;
    /**
     * If the host does not respond over the specified period, the PoE-Out port is switched off for 5s.
     */
    readonly powerCyclePingTimeout: pulumi.Output<string | undefined>;
    /**
     * Whether interface is running. Note that some interface does not have running check and they are always reported as
     * "running"
     */
    readonly running: pulumi.Output<boolean>;
    /**
     * When set to on, the port will process received pause frames and suspend transmission if required. auto is the same as on
     * except when auto-negotiation=yes flow control status is resolved by taking into account what other end advertises.
     */
    readonly rxFlowControl: pulumi.Output<string | undefined>;
    /**
     * An option to ignore RX LOS (Loss of Signal) status of the SFP module.
     */
    readonly sfpIgnoreRxLos: pulumi.Output<boolean | undefined>;
    /**
     * Allows to control rate select pin for SFP ports. Values: high | low
     */
    readonly sfpRateSelect: pulumi.Output<string | undefined>;
    /**
     * The temperature in Celsius at which the interface will be temporarily turned off due to too high detected SFP module
     * temperature (introduced v6.48).The default value for SFP/SFP+/SFP28 interfaces is 95, and for QSFP+/QSFP28 interfaces 80
     * (introduced v7.6).
     */
    readonly sfpShutdownTemperature: pulumi.Output<number | undefined>;
    /**
     * Whether interface is configured as a slave of another interface (for example Bonding)
     */
    readonly slave: pulumi.Output<boolean>;
    /**
     * Sets interface data transmission speed which takes effect only when ```auto_negotiation``` is disabled.
     */
    readonly speed: pulumi.Output<string | undefined>;
    /**
     * ID to which switch chip interface belongs to.
     */
    readonly switch: pulumi.Output<string>;
    /**
     * When set to on, the port will generate pause frames to the upstream device to temporarily stop the packet transmission.
     * Pause frames are only generated when some routers output interface is congested and packets cannot be transmitted
     * anymore. Auto is the same as on except when auto-negotiation=yes flow control status is resolved by taking into account
     * what other end advertises.
     */
    readonly txFlowControl: pulumi.Output<string | undefined>;
    /**
     * Create a InterfaceEthernet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterfaceEthernetArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterfaceEthernet resources.
 */
export interface InterfaceEthernetState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
     */
    ___skip_?: pulumi.Input<string>;
    /**
     * Advertised speed and duplex modes for Ethernet interfaces over twisted pair, only applies when auto-negotiation is
     * enabled. Advertising higher speeds than the actual interface supported speed will have no effect, multiple options are
     * allowed.
     */
    advertise?: pulumi.Input<string>;
    /**
     * Address Resolution Protocol mode: * disabled - the interface will not use ARP * enabled - the interface will use ARP *
     * local-proxy-arp - the router performs proxy ARP on the interface and sends replies to the same interface * proxy-arp -
     * the router performs proxy ARP on the interface and sends replies to other interfaces * reply-only - the interface will
     * only reply to requests originated from matching IP address/MAC address combinations which are entered as static entries
     * in the ARP table. No dynamic entries will be automatically stored in the ARP table. Therefore for communications to be
     * successful, a valid static entry must already exist.
     */
    arp?: pulumi.Input<string>;
    /**
     * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to
     * the value of arp-timeout in IP/Settings, default is 30s. Can use postfix ms, s, M, h, d for milliseconds, seconds,
     * minutes, hours or days. If no postfix is set then seconds (s) is used.
     */
    arpTimeout?: pulumi.Input<string>;
    /**
     * When enabled, the interface "advertises" its maximum capabilities to achieve the best connection possible. Note1:
     * Auto-negotiation should not be disabled on one end only, otherwise Ethernet Interfaces may not work properly. Note2:
     * Gigabit Ethernet and NBASE-T Ethernet links cannot work with auto-negotiation disabled.
     */
    autoNegotiation?: pulumi.Input<boolean>;
    /**
     * Sets max rx/tx bandwidth in kbps that will be handled by an interface. TX limit is supported on all Atheros switch-chip
     * ports. RX limit is supported only on Atheros8327/QCA8337 switch-chip ports.
     */
    bandwidth?: pulumi.Input<string>;
    /**
     * Changes the cable length setting (only applicable to NS DP83815/6 cards)
     */
    cableSettings?: pulumi.Input<string>;
    /**
     * When auto mode is selected, the port that was first connected will establish the link. In case this link fails, the
     * other port will try to establish a new link. If both ports are connected at the same time (e.g. after reboot), the
     * priority will be the SFP/SFP+ port. When sfp mode is selected, the interface will only work through SFP/SFP+ cage. When
     * copper mode is selected, the interface will only work through RJ45 Ethernet port.
     */
    comboMode?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * The default name for an interface.
     */
    defaultName?: pulumi.Input<string>;
    /**
     * Disable running check. If this value is set to 'no', the router automatically detects whether the NIC is connected with
     * a device in the network or not. Default value is 'yes' because older NICs do not support it. (only applicable to x86)
     */
    disableRunningCheck?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * The factory name of the identifier, serves as resource identifier. Determines which interface will be updated.
     */
    factoryName?: pulumi.Input<string>;
    /**
     * Changes Forward Error Correction (FEC) mode for SFP28, QSFP+ and QSFP28 interfaces. Same mode should be used on both
     * link ends, otherwise FEC mismatch could result in non-working link or even false link-ups.
     */
    fecMode?: pulumi.Input<string>;
    /**
     * Defines whether the transmission of data appears in two directions simultaneously, only applies when auto-negotiation is
     * disabled.
     */
    fullDuplex?: pulumi.Input<boolean>;
    interfaceEthernetId?: pulumi.Input<string>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    l2mtu?: pulumi.Input<number>;
    loopProtect?: pulumi.Input<string>;
    loopProtectDisableTime?: pulumi.Input<string>;
    loopProtectSendInterval?: pulumi.Input<string>;
    loopProtectStatus?: pulumi.Input<string>;
    /**
     * Media Access Control number of an interface.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Whether the MDI/X auto cross over cable correction feature is enabled for the port (Hardware specific, e.g. ether1 on
     * RB500 can be set to yes/no. Fixed to 'yes' on other hardware.)
     */
    mdixEnable?: pulumi.Input<boolean>;
    /**
     * Layer3 Maximum transmission unit
     */
    mtu?: pulumi.Input<number>;
    /**
     * Name of the ethernet interface.
     */
    name?: pulumi.Input<string>;
    /**
     * Original Media Access Control number of an interface. (read only)
     */
    origMacAddress?: pulumi.Input<string>;
    /**
     * An option that enables LLDP for managing devices.
     */
    poeLldpEnabled?: pulumi.Input<boolean>;
    /**
     * PoE settings: (https://wiki.mikrotik.com/wiki/Manual:PoE-Out)
     */
    poeOut?: pulumi.Input<string>;
    /**
     * PoE settings: (https://wiki.mikrotik.com/wiki/Manual:PoE-Out)
     */
    poePriority?: pulumi.Input<number>;
    /**
     * An option that allows us to manually control the voltage outputs on the PoE port.
     */
    poeVoltage?: pulumi.Input<string>;
    /**
     * An options that disables PoE-Out power for 5s between the specified intervals.
     */
    powerCycleInterval?: pulumi.Input<string>;
    /**
     * An address to monitor.
     */
    powerCyclePingAddress?: pulumi.Input<string>;
    /**
     * An option that enables ping watchdog of power cycles on the port if a host does not respond to ICMP or MAC-Telnet
     * packets.
     */
    powerCyclePingEnabled?: pulumi.Input<boolean>;
    /**
     * If the host does not respond over the specified period, the PoE-Out port is switched off for 5s.
     */
    powerCyclePingTimeout?: pulumi.Input<string>;
    /**
     * Whether interface is running. Note that some interface does not have running check and they are always reported as
     * "running"
     */
    running?: pulumi.Input<boolean>;
    /**
     * When set to on, the port will process received pause frames and suspend transmission if required. auto is the same as on
     * except when auto-negotiation=yes flow control status is resolved by taking into account what other end advertises.
     */
    rxFlowControl?: pulumi.Input<string>;
    /**
     * An option to ignore RX LOS (Loss of Signal) status of the SFP module.
     */
    sfpIgnoreRxLos?: pulumi.Input<boolean>;
    /**
     * Allows to control rate select pin for SFP ports. Values: high | low
     */
    sfpRateSelect?: pulumi.Input<string>;
    /**
     * The temperature in Celsius at which the interface will be temporarily turned off due to too high detected SFP module
     * temperature (introduced v6.48).The default value for SFP/SFP+/SFP28 interfaces is 95, and for QSFP+/QSFP28 interfaces 80
     * (introduced v7.6).
     */
    sfpShutdownTemperature?: pulumi.Input<number>;
    /**
     * Whether interface is configured as a slave of another interface (for example Bonding)
     */
    slave?: pulumi.Input<boolean>;
    /**
     * Sets interface data transmission speed which takes effect only when ```auto_negotiation``` is disabled.
     */
    speed?: pulumi.Input<string>;
    /**
     * ID to which switch chip interface belongs to.
     */
    switch?: pulumi.Input<string>;
    /**
     * When set to on, the port will generate pause frames to the upstream device to temporarily stop the packet transmission.
     * Pause frames are only generated when some routers output interface is congested and packets cannot be transmitted
     * anymore. Auto is the same as on except when auto-negotiation=yes flow control status is resolved by taking into account
     * what other end advertises.
     */
    txFlowControl?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a InterfaceEthernet resource.
 */
export interface InterfaceEthernetArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
     */
    ___skip_?: pulumi.Input<string>;
    /**
     * Advertised speed and duplex modes for Ethernet interfaces over twisted pair, only applies when auto-negotiation is
     * enabled. Advertising higher speeds than the actual interface supported speed will have no effect, multiple options are
     * allowed.
     */
    advertise?: pulumi.Input<string>;
    /**
     * Address Resolution Protocol mode: * disabled - the interface will not use ARP * enabled - the interface will use ARP *
     * local-proxy-arp - the router performs proxy ARP on the interface and sends replies to the same interface * proxy-arp -
     * the router performs proxy ARP on the interface and sends replies to other interfaces * reply-only - the interface will
     * only reply to requests originated from matching IP address/MAC address combinations which are entered as static entries
     * in the ARP table. No dynamic entries will be automatically stored in the ARP table. Therefore for communications to be
     * successful, a valid static entry must already exist.
     */
    arp?: pulumi.Input<string>;
    /**
     * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to
     * the value of arp-timeout in IP/Settings, default is 30s. Can use postfix ms, s, M, h, d for milliseconds, seconds,
     * minutes, hours or days. If no postfix is set then seconds (s) is used.
     */
    arpTimeout?: pulumi.Input<string>;
    /**
     * When enabled, the interface "advertises" its maximum capabilities to achieve the best connection possible. Note1:
     * Auto-negotiation should not be disabled on one end only, otherwise Ethernet Interfaces may not work properly. Note2:
     * Gigabit Ethernet and NBASE-T Ethernet links cannot work with auto-negotiation disabled.
     */
    autoNegotiation?: pulumi.Input<boolean>;
    /**
     * Sets max rx/tx bandwidth in kbps that will be handled by an interface. TX limit is supported on all Atheros switch-chip
     * ports. RX limit is supported only on Atheros8327/QCA8337 switch-chip ports.
     */
    bandwidth?: pulumi.Input<string>;
    /**
     * Changes the cable length setting (only applicable to NS DP83815/6 cards)
     */
    cableSettings?: pulumi.Input<string>;
    /**
     * When auto mode is selected, the port that was first connected will establish the link. In case this link fails, the
     * other port will try to establish a new link. If both ports are connected at the same time (e.g. after reboot), the
     * priority will be the SFP/SFP+ port. When sfp mode is selected, the interface will only work through SFP/SFP+ cage. When
     * copper mode is selected, the interface will only work through RJ45 Ethernet port.
     */
    comboMode?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Disable running check. If this value is set to 'no', the router automatically detects whether the NIC is connected with
     * a device in the network or not. Default value is 'yes' because older NICs do not support it. (only applicable to x86)
     */
    disableRunningCheck?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * The factory name of the identifier, serves as resource identifier. Determines which interface will be updated.
     */
    factoryName: pulumi.Input<string>;
    /**
     * Changes Forward Error Correction (FEC) mode for SFP28, QSFP+ and QSFP28 interfaces. Same mode should be used on both
     * link ends, otherwise FEC mismatch could result in non-working link or even false link-ups.
     */
    fecMode?: pulumi.Input<string>;
    /**
     * Defines whether the transmission of data appears in two directions simultaneously, only applies when auto-negotiation is
     * disabled.
     */
    fullDuplex?: pulumi.Input<boolean>;
    interfaceEthernetId?: pulumi.Input<string>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    l2mtu?: pulumi.Input<number>;
    loopProtect?: pulumi.Input<string>;
    loopProtectDisableTime?: pulumi.Input<string>;
    loopProtectSendInterval?: pulumi.Input<string>;
    /**
     * Media Access Control number of an interface.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Whether the MDI/X auto cross over cable correction feature is enabled for the port (Hardware specific, e.g. ether1 on
     * RB500 can be set to yes/no. Fixed to 'yes' on other hardware.)
     */
    mdixEnable?: pulumi.Input<boolean>;
    /**
     * Layer3 Maximum transmission unit
     */
    mtu?: pulumi.Input<number>;
    /**
     * Name of the ethernet interface.
     */
    name?: pulumi.Input<string>;
    /**
     * An option that enables LLDP for managing devices.
     */
    poeLldpEnabled?: pulumi.Input<boolean>;
    /**
     * PoE settings: (https://wiki.mikrotik.com/wiki/Manual:PoE-Out)
     */
    poeOut?: pulumi.Input<string>;
    /**
     * PoE settings: (https://wiki.mikrotik.com/wiki/Manual:PoE-Out)
     */
    poePriority?: pulumi.Input<number>;
    /**
     * An option that allows us to manually control the voltage outputs on the PoE port.
     */
    poeVoltage?: pulumi.Input<string>;
    /**
     * An options that disables PoE-Out power for 5s between the specified intervals.
     */
    powerCycleInterval?: pulumi.Input<string>;
    /**
     * An address to monitor.
     */
    powerCyclePingAddress?: pulumi.Input<string>;
    /**
     * An option that enables ping watchdog of power cycles on the port if a host does not respond to ICMP or MAC-Telnet
     * packets.
     */
    powerCyclePingEnabled?: pulumi.Input<boolean>;
    /**
     * If the host does not respond over the specified period, the PoE-Out port is switched off for 5s.
     */
    powerCyclePingTimeout?: pulumi.Input<string>;
    /**
     * When set to on, the port will process received pause frames and suspend transmission if required. auto is the same as on
     * except when auto-negotiation=yes flow control status is resolved by taking into account what other end advertises.
     */
    rxFlowControl?: pulumi.Input<string>;
    /**
     * An option to ignore RX LOS (Loss of Signal) status of the SFP module.
     */
    sfpIgnoreRxLos?: pulumi.Input<boolean>;
    /**
     * Allows to control rate select pin for SFP ports. Values: high | low
     */
    sfpRateSelect?: pulumi.Input<string>;
    /**
     * The temperature in Celsius at which the interface will be temporarily turned off due to too high detected SFP module
     * temperature (introduced v6.48).The default value for SFP/SFP+/SFP28 interfaces is 95, and for QSFP+/QSFP28 interfaces 80
     * (introduced v7.6).
     */
    sfpShutdownTemperature?: pulumi.Input<number>;
    /**
     * Sets interface data transmission speed which takes effect only when ```auto_negotiation``` is disabled.
     */
    speed?: pulumi.Input<string>;
    /**
     * When set to on, the port will generate pause frames to the upstream device to temporarily stop the packet transmission.
     * Pause frames are only generated when some routers output interface is congested and packets cannot be transmitted
     * anymore. Auto is the same as on except when auto-negotiation=yes flow control status is resolved by taking into account
     * what other end advertises.
     */
    txFlowControl?: pulumi.Input<string>;
}
