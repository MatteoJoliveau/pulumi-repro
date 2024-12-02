import * as pulumi from "@pulumi/pulumi";
export declare class FirewallFilter extends pulumi.CustomResource {
    /**
     * Get an existing FirewallFilter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallFilterState, opts?: pulumi.CustomResourceOptions): FirewallFilter;
    /**
     * Returns true if the given object is an instance of FirewallFilter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is FirewallFilter;
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
     * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not
     * required.</em>
     */
    readonly ___unset_: pulumi.Output<string | undefined>;
    /**
     * Action to take if a packet is matched by the rule
     */
    readonly action: pulumi.Output<string>;
    /**
     * Name of the address list used in 'add-dst-to-address-list' and 'add-src-to-address-list' actions.
     */
    readonly addressList: pulumi.Output<string | undefined>;
    /**
     * Time interval after which the address will be removed from the address list specified by address-list parameter. Used in
     * conjunction with add-dst-to-address-list or add-src-to-address-list actions.
     */
    readonly addressListTimeout: pulumi.Output<string | undefined>;
    /**
     * Specifies to which chain rule will be added. If the input does not match the name of an already defined chain, a new
     * chain will be created.
     */
    readonly chain: pulumi.Output<string>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * Matches packets only if a given amount of bytes has been transfered through the particular connection.
     */
    readonly connectionBytes: pulumi.Output<string | undefined>;
    /**
     * Matches connections per address or address block after given value is reached. Should be used together with
     * connection-state=new and/or with tcp-flags=syn because matcher is very resource intensive.
     */
    readonly connectionLimit: pulumi.Output<string | undefined>;
    /**
     * Matches packets marked via mangle facility with particular connection mark. If no-mark is set, rule will match any
     * unmarked connection.
     */
    readonly connectionMark: pulumi.Output<string | undefined>;
    /**
     * Can match connections that are srcnatted, dstnatted or both.
     */
    readonly connectionNatState: pulumi.Output<string | undefined>;
    /**
     * Connection Rate is a firewall matcher that allow to capture traffic based on present speed of the connection
     * (0..4294967295).
     */
    readonly connectionRate: pulumi.Output<string | undefined>;
    /**
     * Interprets the connection tracking analysis data for a particular packet.
     */
    readonly connectionState: pulumi.Output<string | undefined>;
    /**
     * Matches packets from related connections based on information from their connection tracking helpers.
     */
    readonly connectionType: pulumi.Output<string | undefined>;
    /**
     * Match packets that contain specified text.
     */
    readonly content: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Matches DSCP IP header field.
     */
    readonly dscp: pulumi.Output<number | undefined>;
    /**
     * Matches packets which destination is equal to specified IP or falls into specified IP range.
     */
    readonly dstAddress: pulumi.Output<string | undefined>;
    /**
     * Matches destination address of a packet against user-defined address list.
     */
    readonly dstAddressList: pulumi.Output<string | undefined>;
    /**
     * Matches destination address type.
     */
    readonly dstAddressType: pulumi.Output<string | undefined>;
    /**
     * Matches packets until a given rate is exceeded.
     */
    readonly dstLimit: pulumi.Output<string | undefined>;
    /**
     * List of destination port numbers or port number ranges.
     */
    readonly dstPort: pulumi.Output<string | undefined>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    readonly dynamic: pulumi.Output<boolean>;
    readonly firewallFilterId: pulumi.Output<string>;
    /**
     * Matches fragmented packets. First (starting) fragment does not count. If connection tracking is enabled there will be no
     * fragments as system automatically assembles every packet
     */
    readonly fragment: pulumi.Output<boolean | undefined>;
    /**
     * Matches packets received from HotSpot clients against various HotSpot matchers.
     */
    readonly hotspot: pulumi.Output<string | undefined>;
    /**
     * Connection offloading for Fasttrack.
     */
    readonly hwOffload: pulumi.Output<boolean | undefined>;
    /**
     * Matches ICMP type: code fields.
     */
    readonly icmpOptions: pulumi.Output<string | undefined>;
    /**
     * Actual interface the packet has entered the router if the incoming interface is a bridge. Works only if use-ip-firewall
     * is enabled in bridge settings.
     */
    readonly inBridgePort: pulumi.Output<string | undefined>;
    /**
     * Set of interfaces defined in interface list. Works the same as in-bridge-port.
     */
    readonly inBridgePortList: pulumi.Output<string | undefined>;
    /**
     * Interface the packet has entered the router.
     */
    readonly inInterface: pulumi.Output<string | undefined>;
    /**
     * Set of interfaces defined in interface list. Works the same as in-interface.
     */
    readonly inInterfaceList: pulumi.Output<string | undefined>;
    /**
     * Matches the priority of an ingress packet. Priority may be derived from VLAN, WMM, DSCP, or MPLS EXP bit.
     */
    readonly ingressPriority: pulumi.Output<number | undefined>;
    readonly invalid: pulumi.Output<boolean>;
    /**
     * Matches the policy used by IPsec. Value is written in the following format: direction, policy.
     */
    readonly ipsecPolicy: pulumi.Output<string | undefined>;
    /**
     * Matches IPv4 header options.
     */
    readonly ipv4Options: pulumi.Output<string | undefined>;
    /**
     * Name of the target chain to jump to. Applicable only if action=jump.
     */
    readonly jumpTarget: pulumi.Output<string | undefined>;
    /**
     * Layer7 filter name.
     */
    readonly layer7Protocol: pulumi.Output<string | undefined>;
    /**
     * Matches packets up to a limited rate (packet rate or bit rate). A rule using this matcher will match until this limit is
     * reached. Parameters are written in the following format: rate[/time],burst:mode.
     */
    readonly limit: pulumi.Output<string | undefined>;
    /**
     * Add a message to the system log.
     */
    readonly log: pulumi.Output<boolean | undefined>;
    /**
     * Adds specified text at the beginning of every log message. Applicable if action=log or log=yes configured.
     */
    readonly logPrefix: pulumi.Output<string | undefined>;
    /**
     * Matches every nth packet: nth=2,1 rule will match every first packet of 2, hence, 50% of all the traffic that is matched
     * by the rule
     */
    readonly nth: pulumi.Output<string | undefined>;
    /**
     * Actual interface the packet is leaving the router if the outgoing interface is a bridge. Works only if use-ip-firewall
     * is enabled in bridge settings.
     */
    readonly outBridgePort: pulumi.Output<string | undefined>;
    /**
     * Set of interfaces defined in interface list. Works the same as out-bridge-port.
     */
    readonly outBridgePortList: pulumi.Output<string | undefined>;
    /**
     * Interface the packet is leaving the router.
     */
    readonly outInterface: pulumi.Output<string | undefined>;
    /**
     * Set of interfaces defined in interface list. Works the same as out-interface.
     */
    readonly outInterfaceList: pulumi.Output<string | undefined>;
    /**
     * Matches packets marked via mangle facility with particular packet mark. If no-mark is set, the rule will match any
     * unmarked packet.
     */
    readonly packetMark: pulumi.Output<string | undefined>;
    /**
     * Matches packets of specified size or size range in bytes.
     */
    readonly packetSize: pulumi.Output<string | undefined>;
    /**
     * PCC matcher allows dividing traffic into equal streams with the ability to keep packets with a specific set of options
     * in one particular stream.
     */
    readonly perConnectionClassifier: pulumi.Output<string | undefined>;
    /**
     * Before which position the rule will be inserted. > Please check the effect of this option, as it does not work as you
     * think! > Best way to use in conjunction with a data source. See example.
     */
    readonly placeBefore: pulumi.Output<string | undefined>;
    /**
     * Matches if any (source or destination) port matches the specified list of ports or port ranges. Applicable only if
     * protocol is TCP or UDP
     */
    readonly port: pulumi.Output<string | undefined>;
    /**
     * Matches the packet's priority after a new priority has been set. Priority may be derived from VLAN, WMM, DSCP, MPLS EXP
     * bit, or from the priority that has been set using the set-priority action.
     */
    readonly priority: pulumi.Output<number | undefined>;
    /**
     * Matches particular IP protocol specified by protocol name or number.
     */
    readonly protocol: pulumi.Output<string | undefined>;
    /**
     * Attempts to detect TCP and UDP scans. Parameters are in the following format WeightThreshold, DelayThreshold,
     * LowPortWeight, HighPortWeight.
     */
    readonly psd: pulumi.Output<string | undefined>;
    /**
     * Matches packets randomly with a given probability.
     */
    readonly random: pulumi.Output<number | undefined>;
    /**
     * Specifies ICMP error to be sent back if the packet is rejected. Applicable if action=reject.
     */
    readonly rejectWith: pulumi.Output<string | undefined>;
    /**
     * Matches packets marked by mangle facility with particular routing mark.
     */
    readonly routingMark: pulumi.Output<string | undefined>;
    /**
     * Matches packets which destination address is resolved in specific a routing table.
     */
    readonly routingTable: pulumi.Output<string | undefined>;
    /**
     * Matches packets which source is equal to specified IP or falls into a specified IP range.
     */
    readonly srcAddress: pulumi.Output<string | undefined>;
    /**
     * Matches source address of a packet against user-defined address list.
     */
    readonly srcAddressList: pulumi.Output<string | undefined>;
    /**
     * Matches source address type.
     */
    readonly srcAddressType: pulumi.Output<string | undefined>;
    /**
     * Matches source MAC address of the packet.
     */
    readonly srcMacAddress: pulumi.Output<string | undefined>;
    /**
     * List of source ports and ranges of source ports. Applicable only if a protocol is TCP or UDP.
     */
    readonly srcPort: pulumi.Output<string | undefined>;
    /**
     * Matches specified TCP flags.
     */
    readonly tcpFlags: pulumi.Output<string | undefined>;
    /**
     * Matches TCP MSS value of an IP packet.
     */
    readonly tcpMss: pulumi.Output<string | undefined>;
    /**
     * Allows to create a filter based on the packets' arrival time and date or, for locally generated packets, departure time
     * and date.
     */
    readonly time: pulumi.Output<string | undefined>;
    /**
     * Allows matching HTTPS traffic based on TLS SNI hostname.
     */
    readonly tlsHost: pulumi.Output<string | undefined>;
    /**
     * Matches packets TTL value.
     */
    readonly ttl: pulumi.Output<string | undefined>;
    /**
     * Create a FirewallFilter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallFilterArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering FirewallFilter resources.
 */
export interface FirewallFilterState {
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
     * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not
     * required.</em>
     */
    ___unset_?: pulumi.Input<string>;
    /**
     * Action to take if a packet is matched by the rule
     */
    action?: pulumi.Input<string>;
    /**
     * Name of the address list used in 'add-dst-to-address-list' and 'add-src-to-address-list' actions.
     */
    addressList?: pulumi.Input<string>;
    /**
     * Time interval after which the address will be removed from the address list specified by address-list parameter. Used in
     * conjunction with add-dst-to-address-list or add-src-to-address-list actions.
     */
    addressListTimeout?: pulumi.Input<string>;
    /**
     * Specifies to which chain rule will be added. If the input does not match the name of an already defined chain, a new
     * chain will be created.
     */
    chain?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Matches packets only if a given amount of bytes has been transfered through the particular connection.
     */
    connectionBytes?: pulumi.Input<string>;
    /**
     * Matches connections per address or address block after given value is reached. Should be used together with
     * connection-state=new and/or with tcp-flags=syn because matcher is very resource intensive.
     */
    connectionLimit?: pulumi.Input<string>;
    /**
     * Matches packets marked via mangle facility with particular connection mark. If no-mark is set, rule will match any
     * unmarked connection.
     */
    connectionMark?: pulumi.Input<string>;
    /**
     * Can match connections that are srcnatted, dstnatted or both.
     */
    connectionNatState?: pulumi.Input<string>;
    /**
     * Connection Rate is a firewall matcher that allow to capture traffic based on present speed of the connection
     * (0..4294967295).
     */
    connectionRate?: pulumi.Input<string>;
    /**
     * Interprets the connection tracking analysis data for a particular packet.
     */
    connectionState?: pulumi.Input<string>;
    /**
     * Matches packets from related connections based on information from their connection tracking helpers.
     */
    connectionType?: pulumi.Input<string>;
    /**
     * Match packets that contain specified text.
     */
    content?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Matches DSCP IP header field.
     */
    dscp?: pulumi.Input<number>;
    /**
     * Matches packets which destination is equal to specified IP or falls into specified IP range.
     */
    dstAddress?: pulumi.Input<string>;
    /**
     * Matches destination address of a packet against user-defined address list.
     */
    dstAddressList?: pulumi.Input<string>;
    /**
     * Matches destination address type.
     */
    dstAddressType?: pulumi.Input<string>;
    /**
     * Matches packets until a given rate is exceeded.
     */
    dstLimit?: pulumi.Input<string>;
    /**
     * List of destination port numbers or port number ranges.
     */
    dstPort?: pulumi.Input<string>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    firewallFilterId?: pulumi.Input<string>;
    /**
     * Matches fragmented packets. First (starting) fragment does not count. If connection tracking is enabled there will be no
     * fragments as system automatically assembles every packet
     */
    fragment?: pulumi.Input<boolean>;
    /**
     * Matches packets received from HotSpot clients against various HotSpot matchers.
     */
    hotspot?: pulumi.Input<string>;
    /**
     * Connection offloading for Fasttrack.
     */
    hwOffload?: pulumi.Input<boolean>;
    /**
     * Matches ICMP type: code fields.
     */
    icmpOptions?: pulumi.Input<string>;
    /**
     * Actual interface the packet has entered the router if the incoming interface is a bridge. Works only if use-ip-firewall
     * is enabled in bridge settings.
     */
    inBridgePort?: pulumi.Input<string>;
    /**
     * Set of interfaces defined in interface list. Works the same as in-bridge-port.
     */
    inBridgePortList?: pulumi.Input<string>;
    /**
     * Interface the packet has entered the router.
     */
    inInterface?: pulumi.Input<string>;
    /**
     * Set of interfaces defined in interface list. Works the same as in-interface.
     */
    inInterfaceList?: pulumi.Input<string>;
    /**
     * Matches the priority of an ingress packet. Priority may be derived from VLAN, WMM, DSCP, or MPLS EXP bit.
     */
    ingressPriority?: pulumi.Input<number>;
    invalid?: pulumi.Input<boolean>;
    /**
     * Matches the policy used by IPsec. Value is written in the following format: direction, policy.
     */
    ipsecPolicy?: pulumi.Input<string>;
    /**
     * Matches IPv4 header options.
     */
    ipv4Options?: pulumi.Input<string>;
    /**
     * Name of the target chain to jump to. Applicable only if action=jump.
     */
    jumpTarget?: pulumi.Input<string>;
    /**
     * Layer7 filter name.
     */
    layer7Protocol?: pulumi.Input<string>;
    /**
     * Matches packets up to a limited rate (packet rate or bit rate). A rule using this matcher will match until this limit is
     * reached. Parameters are written in the following format: rate[/time],burst:mode.
     */
    limit?: pulumi.Input<string>;
    /**
     * Add a message to the system log.
     */
    log?: pulumi.Input<boolean>;
    /**
     * Adds specified text at the beginning of every log message. Applicable if action=log or log=yes configured.
     */
    logPrefix?: pulumi.Input<string>;
    /**
     * Matches every nth packet: nth=2,1 rule will match every first packet of 2, hence, 50% of all the traffic that is matched
     * by the rule
     */
    nth?: pulumi.Input<string>;
    /**
     * Actual interface the packet is leaving the router if the outgoing interface is a bridge. Works only if use-ip-firewall
     * is enabled in bridge settings.
     */
    outBridgePort?: pulumi.Input<string>;
    /**
     * Set of interfaces defined in interface list. Works the same as out-bridge-port.
     */
    outBridgePortList?: pulumi.Input<string>;
    /**
     * Interface the packet is leaving the router.
     */
    outInterface?: pulumi.Input<string>;
    /**
     * Set of interfaces defined in interface list. Works the same as out-interface.
     */
    outInterfaceList?: pulumi.Input<string>;
    /**
     * Matches packets marked via mangle facility with particular packet mark. If no-mark is set, the rule will match any
     * unmarked packet.
     */
    packetMark?: pulumi.Input<string>;
    /**
     * Matches packets of specified size or size range in bytes.
     */
    packetSize?: pulumi.Input<string>;
    /**
     * PCC matcher allows dividing traffic into equal streams with the ability to keep packets with a specific set of options
     * in one particular stream.
     */
    perConnectionClassifier?: pulumi.Input<string>;
    /**
     * Before which position the rule will be inserted. > Please check the effect of this option, as it does not work as you
     * think! > Best way to use in conjunction with a data source. See example.
     */
    placeBefore?: pulumi.Input<string>;
    /**
     * Matches if any (source or destination) port matches the specified list of ports or port ranges. Applicable only if
     * protocol is TCP or UDP
     */
    port?: pulumi.Input<string>;
    /**
     * Matches the packet's priority after a new priority has been set. Priority may be derived from VLAN, WMM, DSCP, MPLS EXP
     * bit, or from the priority that has been set using the set-priority action.
     */
    priority?: pulumi.Input<number>;
    /**
     * Matches particular IP protocol specified by protocol name or number.
     */
    protocol?: pulumi.Input<string>;
    /**
     * Attempts to detect TCP and UDP scans. Parameters are in the following format WeightThreshold, DelayThreshold,
     * LowPortWeight, HighPortWeight.
     */
    psd?: pulumi.Input<string>;
    /**
     * Matches packets randomly with a given probability.
     */
    random?: pulumi.Input<number>;
    /**
     * Specifies ICMP error to be sent back if the packet is rejected. Applicable if action=reject.
     */
    rejectWith?: pulumi.Input<string>;
    /**
     * Matches packets marked by mangle facility with particular routing mark.
     */
    routingMark?: pulumi.Input<string>;
    /**
     * Matches packets which destination address is resolved in specific a routing table.
     */
    routingTable?: pulumi.Input<string>;
    /**
     * Matches packets which source is equal to specified IP or falls into a specified IP range.
     */
    srcAddress?: pulumi.Input<string>;
    /**
     * Matches source address of a packet against user-defined address list.
     */
    srcAddressList?: pulumi.Input<string>;
    /**
     * Matches source address type.
     */
    srcAddressType?: pulumi.Input<string>;
    /**
     * Matches source MAC address of the packet.
     */
    srcMacAddress?: pulumi.Input<string>;
    /**
     * List of source ports and ranges of source ports. Applicable only if a protocol is TCP or UDP.
     */
    srcPort?: pulumi.Input<string>;
    /**
     * Matches specified TCP flags.
     */
    tcpFlags?: pulumi.Input<string>;
    /**
     * Matches TCP MSS value of an IP packet.
     */
    tcpMss?: pulumi.Input<string>;
    /**
     * Allows to create a filter based on the packets' arrival time and date or, for locally generated packets, departure time
     * and date.
     */
    time?: pulumi.Input<string>;
    /**
     * Allows matching HTTPS traffic based on TLS SNI hostname.
     */
    tlsHost?: pulumi.Input<string>;
    /**
     * Matches packets TTL value.
     */
    ttl?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a FirewallFilter resource.
 */
export interface FirewallFilterArgs {
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
     * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not
     * required.</em>
     */
    ___unset_?: pulumi.Input<string>;
    /**
     * Action to take if a packet is matched by the rule
     */
    action: pulumi.Input<string>;
    /**
     * Name of the address list used in 'add-dst-to-address-list' and 'add-src-to-address-list' actions.
     */
    addressList?: pulumi.Input<string>;
    /**
     * Time interval after which the address will be removed from the address list specified by address-list parameter. Used in
     * conjunction with add-dst-to-address-list or add-src-to-address-list actions.
     */
    addressListTimeout?: pulumi.Input<string>;
    /**
     * Specifies to which chain rule will be added. If the input does not match the name of an already defined chain, a new
     * chain will be created.
     */
    chain: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Matches packets only if a given amount of bytes has been transfered through the particular connection.
     */
    connectionBytes?: pulumi.Input<string>;
    /**
     * Matches connections per address or address block after given value is reached. Should be used together with
     * connection-state=new and/or with tcp-flags=syn because matcher is very resource intensive.
     */
    connectionLimit?: pulumi.Input<string>;
    /**
     * Matches packets marked via mangle facility with particular connection mark. If no-mark is set, rule will match any
     * unmarked connection.
     */
    connectionMark?: pulumi.Input<string>;
    /**
     * Can match connections that are srcnatted, dstnatted or both.
     */
    connectionNatState?: pulumi.Input<string>;
    /**
     * Connection Rate is a firewall matcher that allow to capture traffic based on present speed of the connection
     * (0..4294967295).
     */
    connectionRate?: pulumi.Input<string>;
    /**
     * Interprets the connection tracking analysis data for a particular packet.
     */
    connectionState?: pulumi.Input<string>;
    /**
     * Matches packets from related connections based on information from their connection tracking helpers.
     */
    connectionType?: pulumi.Input<string>;
    /**
     * Match packets that contain specified text.
     */
    content?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Matches DSCP IP header field.
     */
    dscp?: pulumi.Input<number>;
    /**
     * Matches packets which destination is equal to specified IP or falls into specified IP range.
     */
    dstAddress?: pulumi.Input<string>;
    /**
     * Matches destination address of a packet against user-defined address list.
     */
    dstAddressList?: pulumi.Input<string>;
    /**
     * Matches destination address type.
     */
    dstAddressType?: pulumi.Input<string>;
    /**
     * Matches packets until a given rate is exceeded.
     */
    dstLimit?: pulumi.Input<string>;
    /**
     * List of destination port numbers or port number ranges.
     */
    dstPort?: pulumi.Input<string>;
    firewallFilterId?: pulumi.Input<string>;
    /**
     * Matches fragmented packets. First (starting) fragment does not count. If connection tracking is enabled there will be no
     * fragments as system automatically assembles every packet
     */
    fragment?: pulumi.Input<boolean>;
    /**
     * Matches packets received from HotSpot clients against various HotSpot matchers.
     */
    hotspot?: pulumi.Input<string>;
    /**
     * Connection offloading for Fasttrack.
     */
    hwOffload?: pulumi.Input<boolean>;
    /**
     * Matches ICMP type: code fields.
     */
    icmpOptions?: pulumi.Input<string>;
    /**
     * Actual interface the packet has entered the router if the incoming interface is a bridge. Works only if use-ip-firewall
     * is enabled in bridge settings.
     */
    inBridgePort?: pulumi.Input<string>;
    /**
     * Set of interfaces defined in interface list. Works the same as in-bridge-port.
     */
    inBridgePortList?: pulumi.Input<string>;
    /**
     * Interface the packet has entered the router.
     */
    inInterface?: pulumi.Input<string>;
    /**
     * Set of interfaces defined in interface list. Works the same as in-interface.
     */
    inInterfaceList?: pulumi.Input<string>;
    /**
     * Matches the priority of an ingress packet. Priority may be derived from VLAN, WMM, DSCP, or MPLS EXP bit.
     */
    ingressPriority?: pulumi.Input<number>;
    /**
     * Matches the policy used by IPsec. Value is written in the following format: direction, policy.
     */
    ipsecPolicy?: pulumi.Input<string>;
    /**
     * Matches IPv4 header options.
     */
    ipv4Options?: pulumi.Input<string>;
    /**
     * Name of the target chain to jump to. Applicable only if action=jump.
     */
    jumpTarget?: pulumi.Input<string>;
    /**
     * Layer7 filter name.
     */
    layer7Protocol?: pulumi.Input<string>;
    /**
     * Matches packets up to a limited rate (packet rate or bit rate). A rule using this matcher will match until this limit is
     * reached. Parameters are written in the following format: rate[/time],burst:mode.
     */
    limit?: pulumi.Input<string>;
    /**
     * Add a message to the system log.
     */
    log?: pulumi.Input<boolean>;
    /**
     * Adds specified text at the beginning of every log message. Applicable if action=log or log=yes configured.
     */
    logPrefix?: pulumi.Input<string>;
    /**
     * Matches every nth packet: nth=2,1 rule will match every first packet of 2, hence, 50% of all the traffic that is matched
     * by the rule
     */
    nth?: pulumi.Input<string>;
    /**
     * Actual interface the packet is leaving the router if the outgoing interface is a bridge. Works only if use-ip-firewall
     * is enabled in bridge settings.
     */
    outBridgePort?: pulumi.Input<string>;
    /**
     * Set of interfaces defined in interface list. Works the same as out-bridge-port.
     */
    outBridgePortList?: pulumi.Input<string>;
    /**
     * Interface the packet is leaving the router.
     */
    outInterface?: pulumi.Input<string>;
    /**
     * Set of interfaces defined in interface list. Works the same as out-interface.
     */
    outInterfaceList?: pulumi.Input<string>;
    /**
     * Matches packets marked via mangle facility with particular packet mark. If no-mark is set, the rule will match any
     * unmarked packet.
     */
    packetMark?: pulumi.Input<string>;
    /**
     * Matches packets of specified size or size range in bytes.
     */
    packetSize?: pulumi.Input<string>;
    /**
     * PCC matcher allows dividing traffic into equal streams with the ability to keep packets with a specific set of options
     * in one particular stream.
     */
    perConnectionClassifier?: pulumi.Input<string>;
    /**
     * Before which position the rule will be inserted. > Please check the effect of this option, as it does not work as you
     * think! > Best way to use in conjunction with a data source. See example.
     */
    placeBefore?: pulumi.Input<string>;
    /**
     * Matches if any (source or destination) port matches the specified list of ports or port ranges. Applicable only if
     * protocol is TCP or UDP
     */
    port?: pulumi.Input<string>;
    /**
     * Matches the packet's priority after a new priority has been set. Priority may be derived from VLAN, WMM, DSCP, MPLS EXP
     * bit, or from the priority that has been set using the set-priority action.
     */
    priority?: pulumi.Input<number>;
    /**
     * Matches particular IP protocol specified by protocol name or number.
     */
    protocol?: pulumi.Input<string>;
    /**
     * Attempts to detect TCP and UDP scans. Parameters are in the following format WeightThreshold, DelayThreshold,
     * LowPortWeight, HighPortWeight.
     */
    psd?: pulumi.Input<string>;
    /**
     * Matches packets randomly with a given probability.
     */
    random?: pulumi.Input<number>;
    /**
     * Specifies ICMP error to be sent back if the packet is rejected. Applicable if action=reject.
     */
    rejectWith?: pulumi.Input<string>;
    /**
     * Matches packets marked by mangle facility with particular routing mark.
     */
    routingMark?: pulumi.Input<string>;
    /**
     * Matches packets which destination address is resolved in specific a routing table.
     */
    routingTable?: pulumi.Input<string>;
    /**
     * Matches packets which source is equal to specified IP or falls into a specified IP range.
     */
    srcAddress?: pulumi.Input<string>;
    /**
     * Matches source address of a packet against user-defined address list.
     */
    srcAddressList?: pulumi.Input<string>;
    /**
     * Matches source address type.
     */
    srcAddressType?: pulumi.Input<string>;
    /**
     * Matches source MAC address of the packet.
     */
    srcMacAddress?: pulumi.Input<string>;
    /**
     * List of source ports and ranges of source ports. Applicable only if a protocol is TCP or UDP.
     */
    srcPort?: pulumi.Input<string>;
    /**
     * Matches specified TCP flags.
     */
    tcpFlags?: pulumi.Input<string>;
    /**
     * Matches TCP MSS value of an IP packet.
     */
    tcpMss?: pulumi.Input<string>;
    /**
     * Allows to create a filter based on the packets' arrival time and date or, for locally generated packets, departure time
     * and date.
     */
    time?: pulumi.Input<string>;
    /**
     * Allows matching HTTPS traffic based on TLS SNI hostname.
     */
    tlsHost?: pulumi.Input<string>;
    /**
     * Matches packets TTL value.
     */
    ttl?: pulumi.Input<string>;
}
