import * as pulumi from "@pulumi/pulumi";
export declare class Bridge extends pulumi.CustomResource {
    /**
     * Get an existing Bridge resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BridgeState, opts?: pulumi.CustomResourceOptions): Bridge;
    /**
     * Returns true if the given object is an instance of Bridge.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Bridge;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    readonly actualMtu: pulumi.Output<number>;
    /**
     * Whether to add DHCP Option-82 information (Agent Remote ID and Agent Circuit ID) to DHCP packets. Can be used together
     * with Option-82 capable DHCP server to assign IP addresses and implement policies. This property only has effect when
     * dhcp-snooping is set to yes.
     */
    readonly addDhcpOption82: pulumi.Output<boolean | undefined>;
    /**
     * Static MAC address of the bridge. This property only has effect when auto-mac is set to no.
     */
    readonly adminMac: pulumi.Output<string>;
    /**
     * How long a host's information will be kept in the bridge database.
     */
    readonly ageingTime: pulumi.Output<string | undefined>;
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
     * Automatically select one MAC address of bridge ports as a bridge MAC address, bridge MAC will be chosen from the first
     * added bridge port. After a device reboot, the bridge MAC can change depending on the port-number.
     */
    readonly autoMac: pulumi.Output<boolean | undefined>;
    readonly bridgeId: pulumi.Output<string>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly dhcpSnooping: pulumi.Output<boolean | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * This property only has effect when vlan-filtering is set to yes.
     */
    readonly etherType: pulumi.Output<string | undefined>;
    readonly fastForward: pulumi.Output<boolean>;
    /**
     * Time which is spent during the initialization phase of the bridge interface (i.e., after router startup or enabling the
     * interface) in listening/learning state before the bridge will start functioning normally.
     */
    readonly forwardDelay: pulumi.Output<string | undefined>;
    /**
     * An option whether to forward IEEE reserved multicast MAC addresses that are in the `01:80:C2:00:00:0x` range. This
     * option is available in RouterOS starting from version 7.16.
     */
    readonly forwardReservedAddresses: pulumi.Output<boolean | undefined>;
    /**
     * Specifies allowed frame types on a bridge port. This property only has effect when vlan-filtering is set to yes.
     */
    readonly frameTypes: pulumi.Output<string | undefined>;
    /**
     * Enables multicast group and port learning to prevent multicast traffic from flooding all interfaces in a bridge.
     */
    readonly igmpSnooping: pulumi.Output<boolean | undefined>;
    /**
     * Selects the IGMP version in which IGMP general membership queries will be generated. This property only has effect when
     * igmp-snooping is set to yes.
     */
    readonly igmpVersion: pulumi.Output<number>;
    /**
     * Enables or disables VLAN ingress filtering, which checks if the ingress port is a member of the received VLAN ID in the
     * bridge VLAN table. Should be used with frame-types to specify if the ingress traffic should be tagged or untagged. This
     * property only has effect when vlan-filtering is set to yes.
     */
    readonly ingressFiltering: pulumi.Output<boolean | undefined>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    readonly l2mtu: pulumi.Output<number>;
    /**
     * If a port has fast-leave set to no and a bridge port receives a IGMP Leave message, then a IGMP Snooping enabled bridge
     * will send a IGMP query to make sure that no devices has subscribed to a certain multicast stream on a bridge port.
     */
    readonly lastMemberInterval: pulumi.Output<string>;
    /**
     * How many times should last-member-interval pass until a IGMP Snooping bridge will stop forwarding a certain multicast
     * stream. This property only has effect when igmp-snooping is set to yes.
     */
    readonly lastMemberQueryCount: pulumi.Output<number>;
    /**
     * Current mac address.
     */
    readonly macAddress: pulumi.Output<string>;
    /**
     * Bridge count which BPDU can pass in a MSTP enabled network in the same region before BPDU is being ignored. This
     * property only has effect when protocol-mode is set to mstp.
     */
    readonly maxHops: pulumi.Output<number>;
    /**
     * An option to set the maximum number of learned hosts for the bridge interface. This option is available in RouterOS
     * starting from version 7.16.
     */
    readonly maxLearnedEntries: pulumi.Output<string | undefined>;
    /**
     * Changes the Max Age value in BPDU packets, which is transmitted by the root bridge. This property only has effect when
     * protocol-mode is set to stp or rstp. Value: 6s..40s
     */
    readonly maxMessageAge: pulumi.Output<string | undefined>;
    /**
     * Amount of time after an entry in the Multicast Database (MDB) is removed if a IGMP membership report is not received on
     * a certain port. This property only has effect when igmp-snooping is set to yes.
     */
    readonly membershipInterval: pulumi.Output<string>;
    /**
     * Selects the MLD version. Version 2 adds support for source-specific multicast. This property only has effect when
     * RouterOS IPv6 package is enabled and igmp-snooping is set to yes.
     */
    readonly mldVersion: pulumi.Output<number>;
    /**
     * The default bridge MTU value without any bridge ports added is 1500. The MTU value can be set manually, but it cannot
     * exceed the bridge L2MTU or the lowest bridge port L2MTU. If a new bridge port is added with L2MTU which is smaller than
     * the actual-mtu of the bridge (set by the mtu property), then manually set value will be ignored and the bridge will act
     * as if mtu=auto is set.
     */
    readonly mtu: pulumi.Output<string | undefined>;
    /**
     * Multicast querier generates IGMP general membership queries to which all IGMP capable devices respond with an IGMP
     * membership report, usually a PIM (multicast) router or IGMP proxy generates these queries. This property only has an
     * effect when igmp-snooping is set to yes. Additionally, the igmp-snooping should be disabled/enabled after changing
     * multicast-querier property.
     */
    readonly multicastQuerier: pulumi.Output<boolean | undefined>;
    /**
     * A multicast router port is a port where a multicast router or querier is connected. On this port, unregistered multicast
     * streams and IGMP/MLD membership reports will be sent. This setting changes the state of the multicast router for a
     * bridge interface itself. This property can be used to send IGMP/MLD membership reports and multicast traffic to the
     * bridge interface for further multicast routing or proxying. This property only has an effect when igmp-snooping is set
     * to yes.
     */
    readonly multicastRouter: pulumi.Output<string>;
    /**
     * Enables MVRP for bridge (available since RouterOS 7.15). It ensures that the MAC address 01:80:C2:00:00:21 is trapped
     * and not forwarded, the vlan-filtering must be enabled.
     */
    readonly mvrp: pulumi.Output<boolean | undefined>;
    readonly name: pulumi.Output<string>;
    /**
     * An option that changes the port path cost and internal path cost mode for bridged ports, utilizing automatic values
     * based on interface speed.
     */
    readonly portCostMode: pulumi.Output<string | undefined>;
    /**
     * Bridge priority, used by STP to determine root bridge, used by MSTP to determine CIST and IST regional root bridge. This
     * property has no effect when protocol-mode is set to none.
     */
    readonly priority: pulumi.Output<string | undefined>;
    /**
     * Select Spanning tree protocol (STP) or Rapid spanning tree protocol (RSTP) to ensure a loop-free topology for any
     * bridged LAN.
     */
    readonly protocolMode: pulumi.Output<string | undefined>;
    /**
     * Port VLAN ID (pvid) specifies which VLAN the untagged ingress traffic is assigned to. It applies e.g. to frames sent
     * from bridge IP and destined to a bridge port. This property only has effect when vlan-filtering is set to yes.
     */
    readonly pvid: pulumi.Output<number | undefined>;
    /**
     * Used to change the interval how often a bridge checks if it is the active multicast querier. This property only has
     * effect when igmp-snooping and multicast-querier is set to yes.
     */
    readonly querierInterval: pulumi.Output<string>;
    /**
     * Used to change the interval how often IGMP general membership queries are sent out. This property only has effect when
     * igmp-snooping and multicast-querier is set to yes.
     */
    readonly queryInterval: pulumi.Output<string>;
    /**
     * Interval in which a IGMP capable device must reply to a IGMP query with a IGMP membership report. This property only has
     * effect when igmp-snooping and multicast-querier is set to yes.
     */
    readonly queryResponseInterval: pulumi.Output<string>;
    /**
     * MSTP region name. This property only has effect when protocol-mode is set to mstp.
     */
    readonly regionName: pulumi.Output<string | undefined>;
    /**
     * MSTP configuration revision number. This property only has effect when protocol-mode is set to mstp.
     */
    readonly regionRevision: pulumi.Output<number | undefined>;
    readonly running: pulumi.Output<boolean>;
    /**
     * Specifies how many times must startup-query-interval pass until the bridge starts sending out IGMP general membership
     * queries periodically. This property only has effect when igmp-snooping and multicast-querier is set to yes.
     */
    readonly startupQueryCount: pulumi.Output<number>;
    /**
     * Used to change the amount of time after a bridge starts sending out IGMP general membership queries after the bridge is
     * enabled. This property only has effect when igmp-snooping and multicast-querier is set to yes.
     */
    readonly startupQueryInterval: pulumi.Output<string>;
    /**
     * The Transmit Hold Count used by the Port Transmit state machine to limit transmission rate.
     */
    readonly transmitHoldCount: pulumi.Output<number | undefined>;
    /**
     * Globally enables or disables VLAN functionality for bridge.
     */
    readonly vlanFiltering: pulumi.Output<boolean | undefined>;
    /**
     * Create a Bridge resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: BridgeArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Bridge resources.
 */
export interface BridgeState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    actualMtu?: pulumi.Input<number>;
    /**
     * Whether to add DHCP Option-82 information (Agent Remote ID and Agent Circuit ID) to DHCP packets. Can be used together
     * with Option-82 capable DHCP server to assign IP addresses and implement policies. This property only has effect when
     * dhcp-snooping is set to yes.
     */
    addDhcpOption82?: pulumi.Input<boolean>;
    /**
     * Static MAC address of the bridge. This property only has effect when auto-mac is set to no.
     */
    adminMac?: pulumi.Input<string>;
    /**
     * How long a host's information will be kept in the bridge database.
     */
    ageingTime?: pulumi.Input<string>;
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
     * Automatically select one MAC address of bridge ports as a bridge MAC address, bridge MAC will be chosen from the first
     * added bridge port. After a device reboot, the bridge MAC can change depending on the port-number.
     */
    autoMac?: pulumi.Input<boolean>;
    bridgeId?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    dhcpSnooping?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * This property only has effect when vlan-filtering is set to yes.
     */
    etherType?: pulumi.Input<string>;
    fastForward?: pulumi.Input<boolean>;
    /**
     * Time which is spent during the initialization phase of the bridge interface (i.e., after router startup or enabling the
     * interface) in listening/learning state before the bridge will start functioning normally.
     */
    forwardDelay?: pulumi.Input<string>;
    /**
     * An option whether to forward IEEE reserved multicast MAC addresses that are in the `01:80:C2:00:00:0x` range. This
     * option is available in RouterOS starting from version 7.16.
     */
    forwardReservedAddresses?: pulumi.Input<boolean>;
    /**
     * Specifies allowed frame types on a bridge port. This property only has effect when vlan-filtering is set to yes.
     */
    frameTypes?: pulumi.Input<string>;
    /**
     * Enables multicast group and port learning to prevent multicast traffic from flooding all interfaces in a bridge.
     */
    igmpSnooping?: pulumi.Input<boolean>;
    /**
     * Selects the IGMP version in which IGMP general membership queries will be generated. This property only has effect when
     * igmp-snooping is set to yes.
     */
    igmpVersion?: pulumi.Input<number>;
    /**
     * Enables or disables VLAN ingress filtering, which checks if the ingress port is a member of the received VLAN ID in the
     * bridge VLAN table. Should be used with frame-types to specify if the ingress traffic should be tagged or untagged. This
     * property only has effect when vlan-filtering is set to yes.
     */
    ingressFiltering?: pulumi.Input<boolean>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    l2mtu?: pulumi.Input<number>;
    /**
     * If a port has fast-leave set to no and a bridge port receives a IGMP Leave message, then a IGMP Snooping enabled bridge
     * will send a IGMP query to make sure that no devices has subscribed to a certain multicast stream on a bridge port.
     */
    lastMemberInterval?: pulumi.Input<string>;
    /**
     * How many times should last-member-interval pass until a IGMP Snooping bridge will stop forwarding a certain multicast
     * stream. This property only has effect when igmp-snooping is set to yes.
     */
    lastMemberQueryCount?: pulumi.Input<number>;
    /**
     * Current mac address.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Bridge count which BPDU can pass in a MSTP enabled network in the same region before BPDU is being ignored. This
     * property only has effect when protocol-mode is set to mstp.
     */
    maxHops?: pulumi.Input<number>;
    /**
     * An option to set the maximum number of learned hosts for the bridge interface. This option is available in RouterOS
     * starting from version 7.16.
     */
    maxLearnedEntries?: pulumi.Input<string>;
    /**
     * Changes the Max Age value in BPDU packets, which is transmitted by the root bridge. This property only has effect when
     * protocol-mode is set to stp or rstp. Value: 6s..40s
     */
    maxMessageAge?: pulumi.Input<string>;
    /**
     * Amount of time after an entry in the Multicast Database (MDB) is removed if a IGMP membership report is not received on
     * a certain port. This property only has effect when igmp-snooping is set to yes.
     */
    membershipInterval?: pulumi.Input<string>;
    /**
     * Selects the MLD version. Version 2 adds support for source-specific multicast. This property only has effect when
     * RouterOS IPv6 package is enabled and igmp-snooping is set to yes.
     */
    mldVersion?: pulumi.Input<number>;
    /**
     * The default bridge MTU value without any bridge ports added is 1500. The MTU value can be set manually, but it cannot
     * exceed the bridge L2MTU or the lowest bridge port L2MTU. If a new bridge port is added with L2MTU which is smaller than
     * the actual-mtu of the bridge (set by the mtu property), then manually set value will be ignored and the bridge will act
     * as if mtu=auto is set.
     */
    mtu?: pulumi.Input<string>;
    /**
     * Multicast querier generates IGMP general membership queries to which all IGMP capable devices respond with an IGMP
     * membership report, usually a PIM (multicast) router or IGMP proxy generates these queries. This property only has an
     * effect when igmp-snooping is set to yes. Additionally, the igmp-snooping should be disabled/enabled after changing
     * multicast-querier property.
     */
    multicastQuerier?: pulumi.Input<boolean>;
    /**
     * A multicast router port is a port where a multicast router or querier is connected. On this port, unregistered multicast
     * streams and IGMP/MLD membership reports will be sent. This setting changes the state of the multicast router for a
     * bridge interface itself. This property can be used to send IGMP/MLD membership reports and multicast traffic to the
     * bridge interface for further multicast routing or proxying. This property only has an effect when igmp-snooping is set
     * to yes.
     */
    multicastRouter?: pulumi.Input<string>;
    /**
     * Enables MVRP for bridge (available since RouterOS 7.15). It ensures that the MAC address 01:80:C2:00:00:21 is trapped
     * and not forwarded, the vlan-filtering must be enabled.
     */
    mvrp?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    /**
     * An option that changes the port path cost and internal path cost mode for bridged ports, utilizing automatic values
     * based on interface speed.
     */
    portCostMode?: pulumi.Input<string>;
    /**
     * Bridge priority, used by STP to determine root bridge, used by MSTP to determine CIST and IST regional root bridge. This
     * property has no effect when protocol-mode is set to none.
     */
    priority?: pulumi.Input<string>;
    /**
     * Select Spanning tree protocol (STP) or Rapid spanning tree protocol (RSTP) to ensure a loop-free topology for any
     * bridged LAN.
     */
    protocolMode?: pulumi.Input<string>;
    /**
     * Port VLAN ID (pvid) specifies which VLAN the untagged ingress traffic is assigned to. It applies e.g. to frames sent
     * from bridge IP and destined to a bridge port. This property only has effect when vlan-filtering is set to yes.
     */
    pvid?: pulumi.Input<number>;
    /**
     * Used to change the interval how often a bridge checks if it is the active multicast querier. This property only has
     * effect when igmp-snooping and multicast-querier is set to yes.
     */
    querierInterval?: pulumi.Input<string>;
    /**
     * Used to change the interval how often IGMP general membership queries are sent out. This property only has effect when
     * igmp-snooping and multicast-querier is set to yes.
     */
    queryInterval?: pulumi.Input<string>;
    /**
     * Interval in which a IGMP capable device must reply to a IGMP query with a IGMP membership report. This property only has
     * effect when igmp-snooping and multicast-querier is set to yes.
     */
    queryResponseInterval?: pulumi.Input<string>;
    /**
     * MSTP region name. This property only has effect when protocol-mode is set to mstp.
     */
    regionName?: pulumi.Input<string>;
    /**
     * MSTP configuration revision number. This property only has effect when protocol-mode is set to mstp.
     */
    regionRevision?: pulumi.Input<number>;
    running?: pulumi.Input<boolean>;
    /**
     * Specifies how many times must startup-query-interval pass until the bridge starts sending out IGMP general membership
     * queries periodically. This property only has effect when igmp-snooping and multicast-querier is set to yes.
     */
    startupQueryCount?: pulumi.Input<number>;
    /**
     * Used to change the amount of time after a bridge starts sending out IGMP general membership queries after the bridge is
     * enabled. This property only has effect when igmp-snooping and multicast-querier is set to yes.
     */
    startupQueryInterval?: pulumi.Input<string>;
    /**
     * The Transmit Hold Count used by the Port Transmit state machine to limit transmission rate.
     */
    transmitHoldCount?: pulumi.Input<number>;
    /**
     * Globally enables or disables VLAN functionality for bridge.
     */
    vlanFiltering?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a Bridge resource.
 */
export interface BridgeArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to add DHCP Option-82 information (Agent Remote ID and Agent Circuit ID) to DHCP packets. Can be used together
     * with Option-82 capable DHCP server to assign IP addresses and implement policies. This property only has effect when
     * dhcp-snooping is set to yes.
     */
    addDhcpOption82?: pulumi.Input<boolean>;
    /**
     * Static MAC address of the bridge. This property only has effect when auto-mac is set to no.
     */
    adminMac?: pulumi.Input<string>;
    /**
     * How long a host's information will be kept in the bridge database.
     */
    ageingTime?: pulumi.Input<string>;
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
     * Automatically select one MAC address of bridge ports as a bridge MAC address, bridge MAC will be chosen from the first
     * added bridge port. After a device reboot, the bridge MAC can change depending on the port-number.
     */
    autoMac?: pulumi.Input<boolean>;
    bridgeId?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    dhcpSnooping?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * This property only has effect when vlan-filtering is set to yes.
     */
    etherType?: pulumi.Input<string>;
    fastForward?: pulumi.Input<boolean>;
    /**
     * Time which is spent during the initialization phase of the bridge interface (i.e., after router startup or enabling the
     * interface) in listening/learning state before the bridge will start functioning normally.
     */
    forwardDelay?: pulumi.Input<string>;
    /**
     * An option whether to forward IEEE reserved multicast MAC addresses that are in the `01:80:C2:00:00:0x` range. This
     * option is available in RouterOS starting from version 7.16.
     */
    forwardReservedAddresses?: pulumi.Input<boolean>;
    /**
     * Specifies allowed frame types on a bridge port. This property only has effect when vlan-filtering is set to yes.
     */
    frameTypes?: pulumi.Input<string>;
    /**
     * Enables multicast group and port learning to prevent multicast traffic from flooding all interfaces in a bridge.
     */
    igmpSnooping?: pulumi.Input<boolean>;
    /**
     * Selects the IGMP version in which IGMP general membership queries will be generated. This property only has effect when
     * igmp-snooping is set to yes.
     */
    igmpVersion?: pulumi.Input<number>;
    /**
     * Enables or disables VLAN ingress filtering, which checks if the ingress port is a member of the received VLAN ID in the
     * bridge VLAN table. Should be used with frame-types to specify if the ingress traffic should be tagged or untagged. This
     * property only has effect when vlan-filtering is set to yes.
     */
    ingressFiltering?: pulumi.Input<boolean>;
    /**
     * If a port has fast-leave set to no and a bridge port receives a IGMP Leave message, then a IGMP Snooping enabled bridge
     * will send a IGMP query to make sure that no devices has subscribed to a certain multicast stream on a bridge port.
     */
    lastMemberInterval?: pulumi.Input<string>;
    /**
     * How many times should last-member-interval pass until a IGMP Snooping bridge will stop forwarding a certain multicast
     * stream. This property only has effect when igmp-snooping is set to yes.
     */
    lastMemberQueryCount?: pulumi.Input<number>;
    /**
     * Bridge count which BPDU can pass in a MSTP enabled network in the same region before BPDU is being ignored. This
     * property only has effect when protocol-mode is set to mstp.
     */
    maxHops?: pulumi.Input<number>;
    /**
     * An option to set the maximum number of learned hosts for the bridge interface. This option is available in RouterOS
     * starting from version 7.16.
     */
    maxLearnedEntries?: pulumi.Input<string>;
    /**
     * Changes the Max Age value in BPDU packets, which is transmitted by the root bridge. This property only has effect when
     * protocol-mode is set to stp or rstp. Value: 6s..40s
     */
    maxMessageAge?: pulumi.Input<string>;
    /**
     * Amount of time after an entry in the Multicast Database (MDB) is removed if a IGMP membership report is not received on
     * a certain port. This property only has effect when igmp-snooping is set to yes.
     */
    membershipInterval?: pulumi.Input<string>;
    /**
     * Selects the MLD version. Version 2 adds support for source-specific multicast. This property only has effect when
     * RouterOS IPv6 package is enabled and igmp-snooping is set to yes.
     */
    mldVersion?: pulumi.Input<number>;
    /**
     * The default bridge MTU value without any bridge ports added is 1500. The MTU value can be set manually, but it cannot
     * exceed the bridge L2MTU or the lowest bridge port L2MTU. If a new bridge port is added with L2MTU which is smaller than
     * the actual-mtu of the bridge (set by the mtu property), then manually set value will be ignored and the bridge will act
     * as if mtu=auto is set.
     */
    mtu?: pulumi.Input<string>;
    /**
     * Multicast querier generates IGMP general membership queries to which all IGMP capable devices respond with an IGMP
     * membership report, usually a PIM (multicast) router or IGMP proxy generates these queries. This property only has an
     * effect when igmp-snooping is set to yes. Additionally, the igmp-snooping should be disabled/enabled after changing
     * multicast-querier property.
     */
    multicastQuerier?: pulumi.Input<boolean>;
    /**
     * A multicast router port is a port where a multicast router or querier is connected. On this port, unregistered multicast
     * streams and IGMP/MLD membership reports will be sent. This setting changes the state of the multicast router for a
     * bridge interface itself. This property can be used to send IGMP/MLD membership reports and multicast traffic to the
     * bridge interface for further multicast routing or proxying. This property only has an effect when igmp-snooping is set
     * to yes.
     */
    multicastRouter?: pulumi.Input<string>;
    /**
     * Enables MVRP for bridge (available since RouterOS 7.15). It ensures that the MAC address 01:80:C2:00:00:21 is trapped
     * and not forwarded, the vlan-filtering must be enabled.
     */
    mvrp?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    /**
     * An option that changes the port path cost and internal path cost mode for bridged ports, utilizing automatic values
     * based on interface speed.
     */
    portCostMode?: pulumi.Input<string>;
    /**
     * Bridge priority, used by STP to determine root bridge, used by MSTP to determine CIST and IST regional root bridge. This
     * property has no effect when protocol-mode is set to none.
     */
    priority?: pulumi.Input<string>;
    /**
     * Select Spanning tree protocol (STP) or Rapid spanning tree protocol (RSTP) to ensure a loop-free topology for any
     * bridged LAN.
     */
    protocolMode?: pulumi.Input<string>;
    /**
     * Port VLAN ID (pvid) specifies which VLAN the untagged ingress traffic is assigned to. It applies e.g. to frames sent
     * from bridge IP and destined to a bridge port. This property only has effect when vlan-filtering is set to yes.
     */
    pvid?: pulumi.Input<number>;
    /**
     * Used to change the interval how often a bridge checks if it is the active multicast querier. This property only has
     * effect when igmp-snooping and multicast-querier is set to yes.
     */
    querierInterval?: pulumi.Input<string>;
    /**
     * Used to change the interval how often IGMP general membership queries are sent out. This property only has effect when
     * igmp-snooping and multicast-querier is set to yes.
     */
    queryInterval?: pulumi.Input<string>;
    /**
     * Interval in which a IGMP capable device must reply to a IGMP query with a IGMP membership report. This property only has
     * effect when igmp-snooping and multicast-querier is set to yes.
     */
    queryResponseInterval?: pulumi.Input<string>;
    /**
     * MSTP region name. This property only has effect when protocol-mode is set to mstp.
     */
    regionName?: pulumi.Input<string>;
    /**
     * MSTP configuration revision number. This property only has effect when protocol-mode is set to mstp.
     */
    regionRevision?: pulumi.Input<number>;
    /**
     * Specifies how many times must startup-query-interval pass until the bridge starts sending out IGMP general membership
     * queries periodically. This property only has effect when igmp-snooping and multicast-querier is set to yes.
     */
    startupQueryCount?: pulumi.Input<number>;
    /**
     * Used to change the amount of time after a bridge starts sending out IGMP general membership queries after the bridge is
     * enabled. This property only has effect when igmp-snooping and multicast-querier is set to yes.
     */
    startupQueryInterval?: pulumi.Input<string>;
    /**
     * The Transmit Hold Count used by the Port Transmit state machine to limit transmission rate.
     */
    transmitHoldCount?: pulumi.Input<number>;
    /**
     * Globally enables or disables VLAN functionality for bridge.
     */
    vlanFiltering?: pulumi.Input<boolean>;
}
