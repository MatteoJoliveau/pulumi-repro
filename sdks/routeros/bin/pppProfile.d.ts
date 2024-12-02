import * as pulumi from "@pulumi/pulumi";
export declare class PppProfile extends pulumi.CustomResource {
    /**
     * Get an existing PppProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PppProfileState, opts?: pulumi.CustomResourceOptions): PppProfile;
    /**
     * Returns true if the given object is an instance of PppProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PppProfile;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Address list name to which ppp assigned (on server) or received (on client) address will be added.
     */
    readonly addressList: pulumi.Output<string | undefined>;
    /**
     * Name of the bridge interface to which ppp interface will be added as a slave port. Both tunnel endpoints (server and
     * client) must be in bridge in order to make this work, see more details on the BCP bridging manual.
     */
    readonly bridge: pulumi.Output<string | undefined>;
    /**
     * Used split-horizon value for the dynamically created bridge port. Can be used to prevent bridging loops and isolate
     * traffic. Set the same value for a group of ports, to prevent them from sending data to ports with the same horizon
     * value.
     */
    readonly bridgeHorizon: pulumi.Output<number | undefined>;
    /**
     * Changes MAC learning behavior on the dynamically created bridge port: yes - enables MAC learning no - disables MAC
     * learning default - derive this value from the interface default profile; same as yes if this is the interface default
     * profile.
     */
    readonly bridgeLearning: pulumi.Output<string | undefined>;
    /**
     * Used path cost for the dynamically created bridge port, used by STP/RSTP to determine the best path, used by MSTP to
     * determine the best path between regions. This property has no effect when a bridge protocol-mode is set to none.
     */
    readonly bridgePathCost: pulumi.Output<number | undefined>;
    /**
     * Used priority for the dynamically created bridge port, used by STP/RSTP to determine the root port, used by MSTP to
     * determine root port between regions. This property has no effect when a bridge protocol-mode is set to none.
     */
    readonly bridgePortPriority: pulumi.Output<number | undefined>;
    /**
     * Modifies connection MSS settings (applies only for IPv4): yes - adjust connection MSS value no - do not adjust
     * connection MSS value default - derive this value from the interface default profile; same as no if this is the interface
     * default profile.
     */
    readonly changeTcpMss: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * It's the default item.
     */
    readonly default: pulumi.Output<boolean>;
    /**
     * Name of the IPv6 pool which will be used by dynamically created DHCPv6-PD server when client connects. [Read more
     * >>](https://wiki.mikrotik.com/wiki/Manual:IPv6_PD_over_PPP)
     */
    readonly dhcpv6PdPool: pulumi.Output<string | undefined>;
    /**
     * IP address of the DNS server that is supplied to ppp clients.
     */
    readonly dnsServers: pulumi.Output<string[] | undefined>;
    /**
     * Specifies the amount of time after which the link will be terminated if there are no activity present. Timeout is not
     * set by default.
     */
    readonly idleTimeout: pulumi.Output<string | undefined>;
    /**
     * Firewall chain name for incoming packets. Specified chain gets control for each packet coming from the client. The ppp
     * chain should be manually added and rules with action=jump jump-target=ppp should be added to other relevant chains in
     * order for this feature to work. For more information look at the examples section.
     */
    readonly incomingFilter: pulumi.Output<string | undefined>;
    /**
     * Specify where to place dynamic simple queue entries for static DCHP leases with rate-limit parameter set.
     */
    readonly insertQueueBefore: pulumi.Output<string | undefined>;
    /**
     * Interface list name.
     */
    readonly interfaceList: pulumi.Output<string | undefined>;
    /**
     * Tunnel address or name of the pool from which address is assigned to ppp interface locally.
     */
    readonly localAddress: pulumi.Output<string | undefined>;
    /**
     * PPP profile name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Execute script on user logging off. See on-up for more details.
     */
    readonly onDown: pulumi.Output<string | undefined>;
    /**
     * Execute script on user login-event. These are available variables that are accessible for the event script: *user
     * *local-address *remote-address *caller-id *called-id *interface.
     */
    readonly onUp: pulumi.Output<string | undefined>;
    /**
     * Defines whether a user is allowed to have more than one ppp session at a time yes - a user is not allowed to have more
     * than one ppp session at a time no - the user is allowed to have more than one ppp session at a time default - derive
     * this value from the interface default profile; same as no if this is the interface default profile.
     */
    readonly onlyOne: pulumi.Output<string | undefined>;
    /**
     * Firewall chain name for outgoing packets. The specified chain gets control for each packet going to the client. The PPP
     * chain should be manually added and rules with action=jump jump-target=ppp should be added to other relevant chains in
     * order for this feature to work. For more information look at the Examples section.
     */
    readonly outgoingFilter: pulumi.Output<string | undefined>;
    /**
     * Name of parent simple queue.
     */
    readonly parentQueue: pulumi.Output<string | undefined>;
    readonly pppProfileId: pulumi.Output<string>;
    /**
     * Queue types.
     */
    readonly queueType: pulumi.Output<string | undefined>;
    /**
     * Rate limitation in form of rx-rate[/tx-rate] [rx-burst-rate[/tx-burst-rate] [rx-burst-threshold[/tx-burst-threshold]
     * [rx-burst-time[/tx-burst-time] [priority] [rx-rate-min[/tx-rate-min]]]] from the point of view of the router (so 'rx' is
     * client upload, and 'tx' is client download). All rates are measured in bits per second, unless followed by optional 'k'
     * suffix (kilobits per second) or 'M' suffix (megabits per second). If tx-rate is not specified, rx-rate serves as tx-rate
     * too. The same applies for tx-burst-rate, tx-burst-threshold and tx-burst-time. If both rx-burst-threshold and
     * tx-burst-threshold are not specified (but burst-rate is specified), rx-rate and tx-rate are used as burst thresholds. If
     * both rx-burst-time and tx-burst-time are not specified, 1s is used as default. Priority takes values 1..8, where 1
     * implies the highest priority, but 8 - the lowest. If rx-rate-min and tx-rate-min are not specified rx-rate and tx-rate
     * values are used. The rx-rate-min and tx-rate-min values can not exceed rx-rate and tx-rate values.
     */
    readonly rateLimit: pulumi.Output<string | undefined>;
    /**
     * Tunnel address or name of the pool from which address is assigned to remote ppp interface.
     */
    readonly remoteAddress: pulumi.Output<string | undefined>;
    /**
     * Assign prefix from IPv6 pool to the client and install corresponding IPv6 route.
     */
    readonly remoteIpv6PrefixPool: pulumi.Output<string | undefined>;
    /**
     * Maximum time the connection can stay up. By default no time limit is set.
     */
    readonly sessionTimeout: pulumi.Output<string | undefined>;
    /**
     * Specifies whether to use data compression or not. yes - enable data compression no - disable data compression default -
     * derive this value from the interface default profile; same as no if this is the interface default profile This setting
     * does not affect OVPN tunnels.
     */
    readonly useCompression: pulumi.Output<string | undefined>;
    /**
     * Specifies whether to use data encryption or not. yes - enable data encryption no - disable data encryption default -
     * derive this value from the interface default profile; same as no if this is the interface default profile require -
     * explicitly requires encryption This setting does not work on OVPN and SSTP tunnels.
     */
    readonly useEncryption: pulumi.Output<string | undefined>;
    /**
     * Specifies whether to allow IPv6. By default is enabled if IPv6 package is installed. yes - enable IPv6 support no -
     * disable IPv6 support default - derive this value from the interface default profile; same as no if this is the interface
     * default profile require - explicitly requires IPv6 support.
     */
    readonly useIpv6: pulumi.Output<string | undefined>;
    /**
     * Specifies whether to allow MPLS over PPP. yes - enable MPLS support no - disable MPLS support default - derive this
     * value from the interface default profile; same as no if this is the interface default profile require - explicitly
     * requires MPLS support
     */
    readonly useMpls: pulumi.Output<string | undefined>;
    /**
     * Specifies whether to allow UPnP.
     */
    readonly useUpnp: pulumi.Output<string | undefined>;
    /**
     * IP address of the WINS server to supply to Windows clients.
     */
    readonly winsServers: pulumi.Output<string[] | undefined>;
    /**
     * Create a PppProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: PppProfileArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering PppProfile resources.
 */
export interface PppProfileState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Address list name to which ppp assigned (on server) or received (on client) address will be added.
     */
    addressList?: pulumi.Input<string>;
    /**
     * Name of the bridge interface to which ppp interface will be added as a slave port. Both tunnel endpoints (server and
     * client) must be in bridge in order to make this work, see more details on the BCP bridging manual.
     */
    bridge?: pulumi.Input<string>;
    /**
     * Used split-horizon value for the dynamically created bridge port. Can be used to prevent bridging loops and isolate
     * traffic. Set the same value for a group of ports, to prevent them from sending data to ports with the same horizon
     * value.
     */
    bridgeHorizon?: pulumi.Input<number>;
    /**
     * Changes MAC learning behavior on the dynamically created bridge port: yes - enables MAC learning no - disables MAC
     * learning default - derive this value from the interface default profile; same as yes if this is the interface default
     * profile.
     */
    bridgeLearning?: pulumi.Input<string>;
    /**
     * Used path cost for the dynamically created bridge port, used by STP/RSTP to determine the best path, used by MSTP to
     * determine the best path between regions. This property has no effect when a bridge protocol-mode is set to none.
     */
    bridgePathCost?: pulumi.Input<number>;
    /**
     * Used priority for the dynamically created bridge port, used by STP/RSTP to determine the root port, used by MSTP to
     * determine root port between regions. This property has no effect when a bridge protocol-mode is set to none.
     */
    bridgePortPriority?: pulumi.Input<number>;
    /**
     * Modifies connection MSS settings (applies only for IPv4): yes - adjust connection MSS value no - do not adjust
     * connection MSS value default - derive this value from the interface default profile; same as no if this is the interface
     * default profile.
     */
    changeTcpMss?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * It's the default item.
     */
    default?: pulumi.Input<boolean>;
    /**
     * Name of the IPv6 pool which will be used by dynamically created DHCPv6-PD server when client connects. [Read more
     * >>](https://wiki.mikrotik.com/wiki/Manual:IPv6_PD_over_PPP)
     */
    dhcpv6PdPool?: pulumi.Input<string>;
    /**
     * IP address of the DNS server that is supplied to ppp clients.
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the amount of time after which the link will be terminated if there are no activity present. Timeout is not
     * set by default.
     */
    idleTimeout?: pulumi.Input<string>;
    /**
     * Firewall chain name for incoming packets. Specified chain gets control for each packet coming from the client. The ppp
     * chain should be manually added and rules with action=jump jump-target=ppp should be added to other relevant chains in
     * order for this feature to work. For more information look at the examples section.
     */
    incomingFilter?: pulumi.Input<string>;
    /**
     * Specify where to place dynamic simple queue entries for static DCHP leases with rate-limit parameter set.
     */
    insertQueueBefore?: pulumi.Input<string>;
    /**
     * Interface list name.
     */
    interfaceList?: pulumi.Input<string>;
    /**
     * Tunnel address or name of the pool from which address is assigned to ppp interface locally.
     */
    localAddress?: pulumi.Input<string>;
    /**
     * PPP profile name.
     */
    name?: pulumi.Input<string>;
    /**
     * Execute script on user logging off. See on-up for more details.
     */
    onDown?: pulumi.Input<string>;
    /**
     * Execute script on user login-event. These are available variables that are accessible for the event script: *user
     * *local-address *remote-address *caller-id *called-id *interface.
     */
    onUp?: pulumi.Input<string>;
    /**
     * Defines whether a user is allowed to have more than one ppp session at a time yes - a user is not allowed to have more
     * than one ppp session at a time no - the user is allowed to have more than one ppp session at a time default - derive
     * this value from the interface default profile; same as no if this is the interface default profile.
     */
    onlyOne?: pulumi.Input<string>;
    /**
     * Firewall chain name for outgoing packets. The specified chain gets control for each packet going to the client. The PPP
     * chain should be manually added and rules with action=jump jump-target=ppp should be added to other relevant chains in
     * order for this feature to work. For more information look at the Examples section.
     */
    outgoingFilter?: pulumi.Input<string>;
    /**
     * Name of parent simple queue.
     */
    parentQueue?: pulumi.Input<string>;
    pppProfileId?: pulumi.Input<string>;
    /**
     * Queue types.
     */
    queueType?: pulumi.Input<string>;
    /**
     * Rate limitation in form of rx-rate[/tx-rate] [rx-burst-rate[/tx-burst-rate] [rx-burst-threshold[/tx-burst-threshold]
     * [rx-burst-time[/tx-burst-time] [priority] [rx-rate-min[/tx-rate-min]]]] from the point of view of the router (so 'rx' is
     * client upload, and 'tx' is client download). All rates are measured in bits per second, unless followed by optional 'k'
     * suffix (kilobits per second) or 'M' suffix (megabits per second). If tx-rate is not specified, rx-rate serves as tx-rate
     * too. The same applies for tx-burst-rate, tx-burst-threshold and tx-burst-time. If both rx-burst-threshold and
     * tx-burst-threshold are not specified (but burst-rate is specified), rx-rate and tx-rate are used as burst thresholds. If
     * both rx-burst-time and tx-burst-time are not specified, 1s is used as default. Priority takes values 1..8, where 1
     * implies the highest priority, but 8 - the lowest. If rx-rate-min and tx-rate-min are not specified rx-rate and tx-rate
     * values are used. The rx-rate-min and tx-rate-min values can not exceed rx-rate and tx-rate values.
     */
    rateLimit?: pulumi.Input<string>;
    /**
     * Tunnel address or name of the pool from which address is assigned to remote ppp interface.
     */
    remoteAddress?: pulumi.Input<string>;
    /**
     * Assign prefix from IPv6 pool to the client and install corresponding IPv6 route.
     */
    remoteIpv6PrefixPool?: pulumi.Input<string>;
    /**
     * Maximum time the connection can stay up. By default no time limit is set.
     */
    sessionTimeout?: pulumi.Input<string>;
    /**
     * Specifies whether to use data compression or not. yes - enable data compression no - disable data compression default -
     * derive this value from the interface default profile; same as no if this is the interface default profile This setting
     * does not affect OVPN tunnels.
     */
    useCompression?: pulumi.Input<string>;
    /**
     * Specifies whether to use data encryption or not. yes - enable data encryption no - disable data encryption default -
     * derive this value from the interface default profile; same as no if this is the interface default profile require -
     * explicitly requires encryption This setting does not work on OVPN and SSTP tunnels.
     */
    useEncryption?: pulumi.Input<string>;
    /**
     * Specifies whether to allow IPv6. By default is enabled if IPv6 package is installed. yes - enable IPv6 support no -
     * disable IPv6 support default - derive this value from the interface default profile; same as no if this is the interface
     * default profile require - explicitly requires IPv6 support.
     */
    useIpv6?: pulumi.Input<string>;
    /**
     * Specifies whether to allow MPLS over PPP. yes - enable MPLS support no - disable MPLS support default - derive this
     * value from the interface default profile; same as no if this is the interface default profile require - explicitly
     * requires MPLS support
     */
    useMpls?: pulumi.Input<string>;
    /**
     * Specifies whether to allow UPnP.
     */
    useUpnp?: pulumi.Input<string>;
    /**
     * IP address of the WINS server to supply to Windows clients.
     */
    winsServers?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a PppProfile resource.
 */
export interface PppProfileArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Address list name to which ppp assigned (on server) or received (on client) address will be added.
     */
    addressList?: pulumi.Input<string>;
    /**
     * Name of the bridge interface to which ppp interface will be added as a slave port. Both tunnel endpoints (server and
     * client) must be in bridge in order to make this work, see more details on the BCP bridging manual.
     */
    bridge?: pulumi.Input<string>;
    /**
     * Used split-horizon value for the dynamically created bridge port. Can be used to prevent bridging loops and isolate
     * traffic. Set the same value for a group of ports, to prevent them from sending data to ports with the same horizon
     * value.
     */
    bridgeHorizon?: pulumi.Input<number>;
    /**
     * Changes MAC learning behavior on the dynamically created bridge port: yes - enables MAC learning no - disables MAC
     * learning default - derive this value from the interface default profile; same as yes if this is the interface default
     * profile.
     */
    bridgeLearning?: pulumi.Input<string>;
    /**
     * Used path cost for the dynamically created bridge port, used by STP/RSTP to determine the best path, used by MSTP to
     * determine the best path between regions. This property has no effect when a bridge protocol-mode is set to none.
     */
    bridgePathCost?: pulumi.Input<number>;
    /**
     * Used priority for the dynamically created bridge port, used by STP/RSTP to determine the root port, used by MSTP to
     * determine root port between regions. This property has no effect when a bridge protocol-mode is set to none.
     */
    bridgePortPriority?: pulumi.Input<number>;
    /**
     * Modifies connection MSS settings (applies only for IPv4): yes - adjust connection MSS value no - do not adjust
     * connection MSS value default - derive this value from the interface default profile; same as no if this is the interface
     * default profile.
     */
    changeTcpMss?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Name of the IPv6 pool which will be used by dynamically created DHCPv6-PD server when client connects. [Read more
     * >>](https://wiki.mikrotik.com/wiki/Manual:IPv6_PD_over_PPP)
     */
    dhcpv6PdPool?: pulumi.Input<string>;
    /**
     * IP address of the DNS server that is supplied to ppp clients.
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the amount of time after which the link will be terminated if there are no activity present. Timeout is not
     * set by default.
     */
    idleTimeout?: pulumi.Input<string>;
    /**
     * Firewall chain name for incoming packets. Specified chain gets control for each packet coming from the client. The ppp
     * chain should be manually added and rules with action=jump jump-target=ppp should be added to other relevant chains in
     * order for this feature to work. For more information look at the examples section.
     */
    incomingFilter?: pulumi.Input<string>;
    /**
     * Specify where to place dynamic simple queue entries for static DCHP leases with rate-limit parameter set.
     */
    insertQueueBefore?: pulumi.Input<string>;
    /**
     * Interface list name.
     */
    interfaceList?: pulumi.Input<string>;
    /**
     * Tunnel address or name of the pool from which address is assigned to ppp interface locally.
     */
    localAddress?: pulumi.Input<string>;
    /**
     * PPP profile name.
     */
    name?: pulumi.Input<string>;
    /**
     * Execute script on user logging off. See on-up for more details.
     */
    onDown?: pulumi.Input<string>;
    /**
     * Execute script on user login-event. These are available variables that are accessible for the event script: *user
     * *local-address *remote-address *caller-id *called-id *interface.
     */
    onUp?: pulumi.Input<string>;
    /**
     * Defines whether a user is allowed to have more than one ppp session at a time yes - a user is not allowed to have more
     * than one ppp session at a time no - the user is allowed to have more than one ppp session at a time default - derive
     * this value from the interface default profile; same as no if this is the interface default profile.
     */
    onlyOne?: pulumi.Input<string>;
    /**
     * Firewall chain name for outgoing packets. The specified chain gets control for each packet going to the client. The PPP
     * chain should be manually added and rules with action=jump jump-target=ppp should be added to other relevant chains in
     * order for this feature to work. For more information look at the Examples section.
     */
    outgoingFilter?: pulumi.Input<string>;
    /**
     * Name of parent simple queue.
     */
    parentQueue?: pulumi.Input<string>;
    pppProfileId?: pulumi.Input<string>;
    /**
     * Queue types.
     */
    queueType?: pulumi.Input<string>;
    /**
     * Rate limitation in form of rx-rate[/tx-rate] [rx-burst-rate[/tx-burst-rate] [rx-burst-threshold[/tx-burst-threshold]
     * [rx-burst-time[/tx-burst-time] [priority] [rx-rate-min[/tx-rate-min]]]] from the point of view of the router (so 'rx' is
     * client upload, and 'tx' is client download). All rates are measured in bits per second, unless followed by optional 'k'
     * suffix (kilobits per second) or 'M' suffix (megabits per second). If tx-rate is not specified, rx-rate serves as tx-rate
     * too. The same applies for tx-burst-rate, tx-burst-threshold and tx-burst-time. If both rx-burst-threshold and
     * tx-burst-threshold are not specified (but burst-rate is specified), rx-rate and tx-rate are used as burst thresholds. If
     * both rx-burst-time and tx-burst-time are not specified, 1s is used as default. Priority takes values 1..8, where 1
     * implies the highest priority, but 8 - the lowest. If rx-rate-min and tx-rate-min are not specified rx-rate and tx-rate
     * values are used. The rx-rate-min and tx-rate-min values can not exceed rx-rate and tx-rate values.
     */
    rateLimit?: pulumi.Input<string>;
    /**
     * Tunnel address or name of the pool from which address is assigned to remote ppp interface.
     */
    remoteAddress?: pulumi.Input<string>;
    /**
     * Assign prefix from IPv6 pool to the client and install corresponding IPv6 route.
     */
    remoteIpv6PrefixPool?: pulumi.Input<string>;
    /**
     * Maximum time the connection can stay up. By default no time limit is set.
     */
    sessionTimeout?: pulumi.Input<string>;
    /**
     * Specifies whether to use data compression or not. yes - enable data compression no - disable data compression default -
     * derive this value from the interface default profile; same as no if this is the interface default profile This setting
     * does not affect OVPN tunnels.
     */
    useCompression?: pulumi.Input<string>;
    /**
     * Specifies whether to use data encryption or not. yes - enable data encryption no - disable data encryption default -
     * derive this value from the interface default profile; same as no if this is the interface default profile require -
     * explicitly requires encryption This setting does not work on OVPN and SSTP tunnels.
     */
    useEncryption?: pulumi.Input<string>;
    /**
     * Specifies whether to allow IPv6. By default is enabled if IPv6 package is installed. yes - enable IPv6 support no -
     * disable IPv6 support default - derive this value from the interface default profile; same as no if this is the interface
     * default profile require - explicitly requires IPv6 support.
     */
    useIpv6?: pulumi.Input<string>;
    /**
     * Specifies whether to allow MPLS over PPP. yes - enable MPLS support no - disable MPLS support default - derive this
     * value from the interface default profile; same as no if this is the interface default profile require - explicitly
     * requires MPLS support
     */
    useMpls?: pulumi.Input<string>;
    /**
     * Specifies whether to allow UPnP.
     */
    useUpnp?: pulumi.Input<string>;
    /**
     * IP address of the WINS server to supply to Windows clients.
     */
    winsServers?: pulumi.Input<pulumi.Input<string>[]>;
}
