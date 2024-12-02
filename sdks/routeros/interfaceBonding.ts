// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class InterfaceBonding extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceBonding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceBondingState, opts?: pulumi.CustomResourceOptions): InterfaceBonding {
        return new InterfaceBonding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/interfaceBonding:InterfaceBonding';

    /**
     * Returns true if the given object is an instance of InterfaceBonding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InterfaceBonding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InterfaceBonding.__pulumiType;
    }

    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    public readonly ___id_!: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    public readonly ___path_!: pulumi.Output<string | undefined>;
    /**
     * Address Resolution Protocol for the interface. disabled - the interface will not use ARP enabled - the interface will
     * use ARP proxy-arp - the interface will use the ARP proxy feature reply-only -the interface will only reply to requests
     * originated from matching IPaddress/MAC address combinations which are entered as static entries inthe '/ip arp' table.
     * No dynamic entries will be automatically stored inthe '/ip arp' table. Therefore for communications to be successful,
     * avalid static entry must already exist.
     */
    public readonly arp!: pulumi.Output<string | undefined>;
    /**
     * Time in milliseconds defines how often to monitor ARP requests.
     */
    public readonly arpInterval!: pulumi.Output<string | undefined>;
    /**
     * IP target address which will be monitored if link-monitoring is set to arp. You can specify multiple IP addresses,
     * separated by a comma.
     */
    public readonly arpIpTargets!: pulumi.Output<string | undefined>;
    /**
     * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to
     * the value of arp-timeout in IP/Settings, default is 30s. Can use postfix ms, s, M, h, d for milliseconds, seconds,
     * minutes, hours or days. If no postfix is set then seconds (s) is used.
     */
    public readonly arpTimeout!: pulumi.Output<string | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * If a link failure has been detected, the bonding interface is disabled for a down-delay time. The value should be a
     * multiple of mii-interval, otherwise, it will be rounded down to the nearest value. This property only has an effect when
     * link-monitoring is set to mii.
     */
    public readonly downDelay!: pulumi.Output<string | undefined>;
    /**
     * Bydefault, the bonding interface will use the MAC address of the firstselected slave interface. This property allows to
     * configure static MACaddress for the bond interface (all zeros, broadcast or multicastaddresses will not apply). RouterOS
     * will automatically change the MACaddress for slave interfaces and it will be visible in /interface ethernet
     * configuration export.
     */
    public readonly forcedMacAddress!: pulumi.Output<string | undefined>;
    public readonly interfaceBondingId!: pulumi.Output<string>;
    /**
     * LinkAggregation Control Protocol rate specifies how often to exchange withLACPDUs between bonding peers. Used to
     * determine whether a link is up orother changes have occurred in the network. LACP tries to adapt tothese changes
     * providing failover.
     */
    public readonly lacpRate!: pulumi.Output<string | undefined>;
    /**
     * Specifiesthe upper 10 bits of the port key. The lower 6 bits are automaticallyassigned based on individual port link
     * speed and duplex. The setting isavailable only since RouterOS v7.3.
     */
    public readonly lacpUserKey!: pulumi.Output<number | undefined>;
    /**
     * Method to use for monitoring the link (whether it is up or down) arp - uses Address Resolution Protocol to determine
     * whether the remote interface is reachable mii - uses Media Independent Interface to determine link status. Link status
     * determination relies on the device driver. none - no method for link monitoring is used. Note: some bonding modes
     * require specific link monitoring to work properly.
     */
    public readonly linkMonitoring!: pulumi.Output<string | undefined>;
    /**
     * Current mac address.
     */
    public /*out*/ readonly macAddress!: pulumi.Output<string>;
    /**
     * How often to monitor the link for failures (the parameter used only if link-monitoring is mii)
     */
    public readonly miiInterval!: pulumi.Output<string | undefined>;
    /**
     * How many active slave links needed for bonding to become active.
     */
    public readonly minLinks!: pulumi.Output<number | undefined>;
    /**
     * ChangesMLAG ID for bonding interface. The same MLAG ID should be used on bothpeer devices to successfully create a
     * single MLAG. See more details on MLAG .
     */
    public readonly mlagId!: pulumi.Output<number | undefined>;
    /**
     * Specifies one of the bonding policies: * 802.3ad -IEEE 802.3ad dynamic link aggregation. In this mode, the interfaces
     * areaggregated in a group where each slave shares the same speed. Itprovides fault tolerance and load balancing. Slave
     * selection foroutgoing traffic is done according to the transmit-hash-policy * active-backup - provides link backup. Only
     * one slave can be active at a time. Another slave only becomes active, if the first one fails. * balance-alb - adaptive
     * load balancing. The same as balance-tlb but received traffic is also balanced. The device driver should have support for
     * changing it's MAC address. * balance-rr -round-robin load balancing. Slaves in a bonding interface will transmitand
     * receive data in sequential order. It provides load balancing andfault tolerance. * balance-tlb -Outgoing traffic is
     * distributed according to the current load on eachslave. Incoming traffic is not balanced and is received by the
     * currentslave. If receiving slave fails, then another slave takes the MACaddress of the failed slave. * balance-xor -
     * Transmit based on the selected transmit-hash-policy. This mode provides load balancing and fault tolerance. * broadcast
     * -Broadcasts the same data on all interfaces at once. This provides faulttolerance but slows down traffic throughput on
     * some slow machines.
     */
    public readonly mode!: pulumi.Output<string | undefined>;
    /**
     * MaximumTransmit Unit in bytes. Must be smaller or equal to the smallest L2MTUvalue of a bonding slave. L2MTU of a
     * bonding interface is determined bythe lowest L2MTU value among its slave interfaces.
     */
    public readonly mtu!: pulumi.Output<number | undefined>;
    /**
     * Name of the bonding interface.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Controlsthe primary interface between active slave ports, works only foractive-backup, balance-tlb and balance-alb
     * modes. For active-backupmode, it controls which running interface is supposed to send andreceive the traffic. For
     * balance-tlb mode, it controls which runninginterface is supposed to receive all the traffic, but for balance-albmode, it
     * controls which interface is supposed to receive the unbalanced traffic (the non-IPv4 traffic). When none of the
     * interfaces are selectedas primary, device will automatically select the interface that isconfigured as the first one.
     */
    public readonly primary!: pulumi.Output<string | undefined>;
    public /*out*/ readonly running!: pulumi.Output<boolean>;
    /**
     * At least two ethernet-like interfaces separated by a comma, which will be used for bonding
     */
    public readonly slaves!: pulumi.Output<string[]>;
    /**
     * Selects the transmit hash policy to use for slave selection in balance-xor and 802.3ad modes: * layer-2 -Uses XOR of
     * hardware MAC addresses to generate the hash. This algorithm will place all traffic to a particular network peer on the
     * same slave.This algorithm is 802.3ad compliant. * layer-2-and-3 -This policy uses a combination of layer2 and layer3
     * protocolinformation to generate the hash. Uses XOR of hardware MAC addresses andIP addresses to generate the hash. This
     * algorithm will place alltraffic to a particular network peer on the same slave. For non-IPtraffic, the formula is the
     * same as for the layer2 transmit hash policy.This policy is intended to provide a more balanced distribution oftraffic
     * than layer2 alone, especially in environments where a layer3gateway device is required to reach most destinations. This
     * algorithm is802.3ad compliant. * layer-3-and-4 - This policyuses upper layer protocol information, when available, to
     * generate thehash. This allows for traffic to a particular network peer to spanmultiple slaves, although a single
     * connection will not span multipleslaves. For fragmented TCP or UDP packets and all other IP protocoltraffic, the source
     * and destination port information is omitted. Fornon-IP traffic, the formula is the same as for the layer2 transmit
     * hashpolicy. This algorithm is not fully 802.3ad compliant.
     */
    public readonly transmitHashPolicy!: pulumi.Output<string | undefined>;
    /**
     * If a link has been brought up, the bonding interface is disabled for up-delay time and after this time it is enabled.
     * The value should be a multiple of mii-interval , otherwise, it will be rounded down to the nearest value. This property
     * only has an effect when link-monitoring is set to mii.
     */
    public readonly upDelay!: pulumi.Output<string | undefined>;

    /**
     * Create a InterfaceBonding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterfaceBondingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InterfaceBondingArgs | InterfaceBondingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as InterfaceBondingState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["arp"] = state ? state.arp : undefined;
            resourceInputs["arpInterval"] = state ? state.arpInterval : undefined;
            resourceInputs["arpIpTargets"] = state ? state.arpIpTargets : undefined;
            resourceInputs["arpTimeout"] = state ? state.arpTimeout : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["downDelay"] = state ? state.downDelay : undefined;
            resourceInputs["forcedMacAddress"] = state ? state.forcedMacAddress : undefined;
            resourceInputs["interfaceBondingId"] = state ? state.interfaceBondingId : undefined;
            resourceInputs["lacpRate"] = state ? state.lacpRate : undefined;
            resourceInputs["lacpUserKey"] = state ? state.lacpUserKey : undefined;
            resourceInputs["linkMonitoring"] = state ? state.linkMonitoring : undefined;
            resourceInputs["macAddress"] = state ? state.macAddress : undefined;
            resourceInputs["miiInterval"] = state ? state.miiInterval : undefined;
            resourceInputs["minLinks"] = state ? state.minLinks : undefined;
            resourceInputs["mlagId"] = state ? state.mlagId : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["mtu"] = state ? state.mtu : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["primary"] = state ? state.primary : undefined;
            resourceInputs["running"] = state ? state.running : undefined;
            resourceInputs["slaves"] = state ? state.slaves : undefined;
            resourceInputs["transmitHashPolicy"] = state ? state.transmitHashPolicy : undefined;
            resourceInputs["upDelay"] = state ? state.upDelay : undefined;
        } else {
            const args = argsOrState as InterfaceBondingArgs | undefined;
            if ((!args || args.slaves === undefined) && !opts.urn) {
                throw new Error("Missing required property 'slaves'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["arp"] = args ? args.arp : undefined;
            resourceInputs["arpInterval"] = args ? args.arpInterval : undefined;
            resourceInputs["arpIpTargets"] = args ? args.arpIpTargets : undefined;
            resourceInputs["arpTimeout"] = args ? args.arpTimeout : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["downDelay"] = args ? args.downDelay : undefined;
            resourceInputs["forcedMacAddress"] = args ? args.forcedMacAddress : undefined;
            resourceInputs["interfaceBondingId"] = args ? args.interfaceBondingId : undefined;
            resourceInputs["lacpRate"] = args ? args.lacpRate : undefined;
            resourceInputs["lacpUserKey"] = args ? args.lacpUserKey : undefined;
            resourceInputs["linkMonitoring"] = args ? args.linkMonitoring : undefined;
            resourceInputs["miiInterval"] = args ? args.miiInterval : undefined;
            resourceInputs["minLinks"] = args ? args.minLinks : undefined;
            resourceInputs["mlagId"] = args ? args.mlagId : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["mtu"] = args ? args.mtu : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["primary"] = args ? args.primary : undefined;
            resourceInputs["slaves"] = args ? args.slaves : undefined;
            resourceInputs["transmitHashPolicy"] = args ? args.transmitHashPolicy : undefined;
            resourceInputs["upDelay"] = args ? args.upDelay : undefined;
            resourceInputs["macAddress"] = undefined /*out*/;
            resourceInputs["running"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(InterfaceBonding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering InterfaceBonding resources.
 */
export interface InterfaceBondingState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Address Resolution Protocol for the interface. disabled - the interface will not use ARP enabled - the interface will
     * use ARP proxy-arp - the interface will use the ARP proxy feature reply-only -the interface will only reply to requests
     * originated from matching IPaddress/MAC address combinations which are entered as static entries inthe '/ip arp' table.
     * No dynamic entries will be automatically stored inthe '/ip arp' table. Therefore for communications to be successful,
     * avalid static entry must already exist.
     */
    arp?: pulumi.Input<string>;
    /**
     * Time in milliseconds defines how often to monitor ARP requests.
     */
    arpInterval?: pulumi.Input<string>;
    /**
     * IP target address which will be monitored if link-monitoring is set to arp. You can specify multiple IP addresses,
     * separated by a comma.
     */
    arpIpTargets?: pulumi.Input<string>;
    /**
     * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to
     * the value of arp-timeout in IP/Settings, default is 30s. Can use postfix ms, s, M, h, d for milliseconds, seconds,
     * minutes, hours or days. If no postfix is set then seconds (s) is used.
     */
    arpTimeout?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * If a link failure has been detected, the bonding interface is disabled for a down-delay time. The value should be a
     * multiple of mii-interval, otherwise, it will be rounded down to the nearest value. This property only has an effect when
     * link-monitoring is set to mii.
     */
    downDelay?: pulumi.Input<string>;
    /**
     * Bydefault, the bonding interface will use the MAC address of the firstselected slave interface. This property allows to
     * configure static MACaddress for the bond interface (all zeros, broadcast or multicastaddresses will not apply). RouterOS
     * will automatically change the MACaddress for slave interfaces and it will be visible in /interface ethernet
     * configuration export.
     */
    forcedMacAddress?: pulumi.Input<string>;
    interfaceBondingId?: pulumi.Input<string>;
    /**
     * LinkAggregation Control Protocol rate specifies how often to exchange withLACPDUs between bonding peers. Used to
     * determine whether a link is up orother changes have occurred in the network. LACP tries to adapt tothese changes
     * providing failover.
     */
    lacpRate?: pulumi.Input<string>;
    /**
     * Specifiesthe upper 10 bits of the port key. The lower 6 bits are automaticallyassigned based on individual port link
     * speed and duplex. The setting isavailable only since RouterOS v7.3.
     */
    lacpUserKey?: pulumi.Input<number>;
    /**
     * Method to use for monitoring the link (whether it is up or down) arp - uses Address Resolution Protocol to determine
     * whether the remote interface is reachable mii - uses Media Independent Interface to determine link status. Link status
     * determination relies on the device driver. none - no method for link monitoring is used. Note: some bonding modes
     * require specific link monitoring to work properly.
     */
    linkMonitoring?: pulumi.Input<string>;
    /**
     * Current mac address.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * How often to monitor the link for failures (the parameter used only if link-monitoring is mii)
     */
    miiInterval?: pulumi.Input<string>;
    /**
     * How many active slave links needed for bonding to become active.
     */
    minLinks?: pulumi.Input<number>;
    /**
     * ChangesMLAG ID for bonding interface. The same MLAG ID should be used on bothpeer devices to successfully create a
     * single MLAG. See more details on MLAG .
     */
    mlagId?: pulumi.Input<number>;
    /**
     * Specifies one of the bonding policies: * 802.3ad -IEEE 802.3ad dynamic link aggregation. In this mode, the interfaces
     * areaggregated in a group where each slave shares the same speed. Itprovides fault tolerance and load balancing. Slave
     * selection foroutgoing traffic is done according to the transmit-hash-policy * active-backup - provides link backup. Only
     * one slave can be active at a time. Another slave only becomes active, if the first one fails. * balance-alb - adaptive
     * load balancing. The same as balance-tlb but received traffic is also balanced. The device driver should have support for
     * changing it's MAC address. * balance-rr -round-robin load balancing. Slaves in a bonding interface will transmitand
     * receive data in sequential order. It provides load balancing andfault tolerance. * balance-tlb -Outgoing traffic is
     * distributed according to the current load on eachslave. Incoming traffic is not balanced and is received by the
     * currentslave. If receiving slave fails, then another slave takes the MACaddress of the failed slave. * balance-xor -
     * Transmit based on the selected transmit-hash-policy. This mode provides load balancing and fault tolerance. * broadcast
     * -Broadcasts the same data on all interfaces at once. This provides faulttolerance but slows down traffic throughput on
     * some slow machines.
     */
    mode?: pulumi.Input<string>;
    /**
     * MaximumTransmit Unit in bytes. Must be smaller or equal to the smallest L2MTUvalue of a bonding slave. L2MTU of a
     * bonding interface is determined bythe lowest L2MTU value among its slave interfaces.
     */
    mtu?: pulumi.Input<number>;
    /**
     * Name of the bonding interface.
     */
    name?: pulumi.Input<string>;
    /**
     * Controlsthe primary interface between active slave ports, works only foractive-backup, balance-tlb and balance-alb
     * modes. For active-backupmode, it controls which running interface is supposed to send andreceive the traffic. For
     * balance-tlb mode, it controls which runninginterface is supposed to receive all the traffic, but for balance-albmode, it
     * controls which interface is supposed to receive the unbalanced traffic (the non-IPv4 traffic). When none of the
     * interfaces are selectedas primary, device will automatically select the interface that isconfigured as the first one.
     */
    primary?: pulumi.Input<string>;
    running?: pulumi.Input<boolean>;
    /**
     * At least two ethernet-like interfaces separated by a comma, which will be used for bonding
     */
    slaves?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Selects the transmit hash policy to use for slave selection in balance-xor and 802.3ad modes: * layer-2 -Uses XOR of
     * hardware MAC addresses to generate the hash. This algorithm will place all traffic to a particular network peer on the
     * same slave.This algorithm is 802.3ad compliant. * layer-2-and-3 -This policy uses a combination of layer2 and layer3
     * protocolinformation to generate the hash. Uses XOR of hardware MAC addresses andIP addresses to generate the hash. This
     * algorithm will place alltraffic to a particular network peer on the same slave. For non-IPtraffic, the formula is the
     * same as for the layer2 transmit hash policy.This policy is intended to provide a more balanced distribution oftraffic
     * than layer2 alone, especially in environments where a layer3gateway device is required to reach most destinations. This
     * algorithm is802.3ad compliant. * layer-3-and-4 - This policyuses upper layer protocol information, when available, to
     * generate thehash. This allows for traffic to a particular network peer to spanmultiple slaves, although a single
     * connection will not span multipleslaves. For fragmented TCP or UDP packets and all other IP protocoltraffic, the source
     * and destination port information is omitted. Fornon-IP traffic, the formula is the same as for the layer2 transmit
     * hashpolicy. This algorithm is not fully 802.3ad compliant.
     */
    transmitHashPolicy?: pulumi.Input<string>;
    /**
     * If a link has been brought up, the bonding interface is disabled for up-delay time and after this time it is enabled.
     * The value should be a multiple of mii-interval , otherwise, it will be rounded down to the nearest value. This property
     * only has an effect when link-monitoring is set to mii.
     */
    upDelay?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a InterfaceBonding resource.
 */
export interface InterfaceBondingArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Address Resolution Protocol for the interface. disabled - the interface will not use ARP enabled - the interface will
     * use ARP proxy-arp - the interface will use the ARP proxy feature reply-only -the interface will only reply to requests
     * originated from matching IPaddress/MAC address combinations which are entered as static entries inthe '/ip arp' table.
     * No dynamic entries will be automatically stored inthe '/ip arp' table. Therefore for communications to be successful,
     * avalid static entry must already exist.
     */
    arp?: pulumi.Input<string>;
    /**
     * Time in milliseconds defines how often to monitor ARP requests.
     */
    arpInterval?: pulumi.Input<string>;
    /**
     * IP target address which will be monitored if link-monitoring is set to arp. You can specify multiple IP addresses,
     * separated by a comma.
     */
    arpIpTargets?: pulumi.Input<string>;
    /**
     * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to
     * the value of arp-timeout in IP/Settings, default is 30s. Can use postfix ms, s, M, h, d for milliseconds, seconds,
     * minutes, hours or days. If no postfix is set then seconds (s) is used.
     */
    arpTimeout?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * If a link failure has been detected, the bonding interface is disabled for a down-delay time. The value should be a
     * multiple of mii-interval, otherwise, it will be rounded down to the nearest value. This property only has an effect when
     * link-monitoring is set to mii.
     */
    downDelay?: pulumi.Input<string>;
    /**
     * Bydefault, the bonding interface will use the MAC address of the firstselected slave interface. This property allows to
     * configure static MACaddress for the bond interface (all zeros, broadcast or multicastaddresses will not apply). RouterOS
     * will automatically change the MACaddress for slave interfaces and it will be visible in /interface ethernet
     * configuration export.
     */
    forcedMacAddress?: pulumi.Input<string>;
    interfaceBondingId?: pulumi.Input<string>;
    /**
     * LinkAggregation Control Protocol rate specifies how often to exchange withLACPDUs between bonding peers. Used to
     * determine whether a link is up orother changes have occurred in the network. LACP tries to adapt tothese changes
     * providing failover.
     */
    lacpRate?: pulumi.Input<string>;
    /**
     * Specifiesthe upper 10 bits of the port key. The lower 6 bits are automaticallyassigned based on individual port link
     * speed and duplex. The setting isavailable only since RouterOS v7.3.
     */
    lacpUserKey?: pulumi.Input<number>;
    /**
     * Method to use for monitoring the link (whether it is up or down) arp - uses Address Resolution Protocol to determine
     * whether the remote interface is reachable mii - uses Media Independent Interface to determine link status. Link status
     * determination relies on the device driver. none - no method for link monitoring is used. Note: some bonding modes
     * require specific link monitoring to work properly.
     */
    linkMonitoring?: pulumi.Input<string>;
    /**
     * How often to monitor the link for failures (the parameter used only if link-monitoring is mii)
     */
    miiInterval?: pulumi.Input<string>;
    /**
     * How many active slave links needed for bonding to become active.
     */
    minLinks?: pulumi.Input<number>;
    /**
     * ChangesMLAG ID for bonding interface. The same MLAG ID should be used on bothpeer devices to successfully create a
     * single MLAG. See more details on MLAG .
     */
    mlagId?: pulumi.Input<number>;
    /**
     * Specifies one of the bonding policies: * 802.3ad -IEEE 802.3ad dynamic link aggregation. In this mode, the interfaces
     * areaggregated in a group where each slave shares the same speed. Itprovides fault tolerance and load balancing. Slave
     * selection foroutgoing traffic is done according to the transmit-hash-policy * active-backup - provides link backup. Only
     * one slave can be active at a time. Another slave only becomes active, if the first one fails. * balance-alb - adaptive
     * load balancing. The same as balance-tlb but received traffic is also balanced. The device driver should have support for
     * changing it's MAC address. * balance-rr -round-robin load balancing. Slaves in a bonding interface will transmitand
     * receive data in sequential order. It provides load balancing andfault tolerance. * balance-tlb -Outgoing traffic is
     * distributed according to the current load on eachslave. Incoming traffic is not balanced and is received by the
     * currentslave. If receiving slave fails, then another slave takes the MACaddress of the failed slave. * balance-xor -
     * Transmit based on the selected transmit-hash-policy. This mode provides load balancing and fault tolerance. * broadcast
     * -Broadcasts the same data on all interfaces at once. This provides faulttolerance but slows down traffic throughput on
     * some slow machines.
     */
    mode?: pulumi.Input<string>;
    /**
     * MaximumTransmit Unit in bytes. Must be smaller or equal to the smallest L2MTUvalue of a bonding slave. L2MTU of a
     * bonding interface is determined bythe lowest L2MTU value among its slave interfaces.
     */
    mtu?: pulumi.Input<number>;
    /**
     * Name of the bonding interface.
     */
    name?: pulumi.Input<string>;
    /**
     * Controlsthe primary interface between active slave ports, works only foractive-backup, balance-tlb and balance-alb
     * modes. For active-backupmode, it controls which running interface is supposed to send andreceive the traffic. For
     * balance-tlb mode, it controls which runninginterface is supposed to receive all the traffic, but for balance-albmode, it
     * controls which interface is supposed to receive the unbalanced traffic (the non-IPv4 traffic). When none of the
     * interfaces are selectedas primary, device will automatically select the interface that isconfigured as the first one.
     */
    primary?: pulumi.Input<string>;
    /**
     * At least two ethernet-like interfaces separated by a comma, which will be used for bonding
     */
    slaves: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Selects the transmit hash policy to use for slave selection in balance-xor and 802.3ad modes: * layer-2 -Uses XOR of
     * hardware MAC addresses to generate the hash. This algorithm will place all traffic to a particular network peer on the
     * same slave.This algorithm is 802.3ad compliant. * layer-2-and-3 -This policy uses a combination of layer2 and layer3
     * protocolinformation to generate the hash. Uses XOR of hardware MAC addresses andIP addresses to generate the hash. This
     * algorithm will place alltraffic to a particular network peer on the same slave. For non-IPtraffic, the formula is the
     * same as for the layer2 transmit hash policy.This policy is intended to provide a more balanced distribution oftraffic
     * than layer2 alone, especially in environments where a layer3gateway device is required to reach most destinations. This
     * algorithm is802.3ad compliant. * layer-3-and-4 - This policyuses upper layer protocol information, when available, to
     * generate thehash. This allows for traffic to a particular network peer to spanmultiple slaves, although a single
     * connection will not span multipleslaves. For fragmented TCP or UDP packets and all other IP protocoltraffic, the source
     * and destination port information is omitted. Fornon-IP traffic, the formula is the same as for the layer2 transmit
     * hashpolicy. This algorithm is not fully 802.3ad compliant.
     */
    transmitHashPolicy?: pulumi.Input<string>;
    /**
     * If a link has been brought up, the bonding interface is disabled for up-delay time and after this time it is enabled.
     * The value should be a multiple of mii-interval , otherwise, it will be rounded down to the nearest value. This property
     * only has an effect when link-monitoring is set to mii.
     */
    upDelay?: pulumi.Input<string>;
}