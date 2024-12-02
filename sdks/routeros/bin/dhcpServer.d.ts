import * as pulumi from "@pulumi/pulumi";
export declare class DhcpServer extends pulumi.CustomResource {
    /**
     * Get an existing DhcpServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DhcpServerState, opts?: pulumi.CustomResourceOptions): DhcpServer;
    /**
     * Returns true if the given object is an instance of DhcpServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DhcpServer;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Whether to add dynamic ARP entry.
     */
    readonly addArp: pulumi.Output<boolean | undefined>;
    /**
     * IP pool, from which to take IP addresses for the clients. If set to static-only, then only the clients that have a
     * static lease (added in lease submenu) will be allowed.
     */
    readonly addressPool: pulumi.Output<string | undefined>;
    /**
     * Creates a single simple queue entry for both IPv4 and IPv6 addresses, uses the MAC address and DUID for identification.
     * Requires IPv6 DHCP Server to have this option enabled as well to work properly.
     */
    readonly allowDualStackQueue: pulumi.Output<boolean | undefined>;
    /**
     * Always send replies as broadcasts even if destination IP is known.
     */
    readonly alwaysBroadcast: pulumi.Output<boolean | undefined>;
    /**
     * Option changes the way how a server responds to DHCP requests.
     */
    readonly authoritative: pulumi.Output<string | undefined>;
    /**
     * Accepts two predefined options or time value: * forever - lease never expires * lease-time - use time from lease-time
     * parameter
     */
    readonly bootpLeaseTime: pulumi.Output<string | undefined>;
    /**
     * Support for BOOTP clients.
     */
    readonly bootpSupport: pulumi.Output<string | undefined>;
    /**
     * Specifies whether to limit specific number of clients per single MAC address.
     */
    readonly clientMacLimit: pulumi.Output<number | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * Allows to disable/enable conflict detection. If option is enabled, then whenever server tries to assign a lease it will
     * send ICMP and ARP messages to detect whether such address in the network already exist. If any of above get reply
     * address is considered already used. Conflict detection must be disabled when any kind of DHCP client limitation per port
     * or per mac is used.
     */
    readonly conflictDetection: pulumi.Output<boolean | undefined>;
    /**
     * If secs field in DHCP packet is smaller than delay-threshold, then this packet is ignored. If set to none - there is no
     * threshold (all DHCP packets are processed).
     */
    readonly delayThreshold: pulumi.Output<string | undefined>;
    /**
     * Use custom set of DHCP options defined in option sets menu.
     */
    readonly dhcpOptionSet: pulumi.Output<string | undefined>;
    readonly dhcpServerId: pulumi.Output<string>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    readonly dynamic: pulumi.Output<boolean>;
    /**
     * Specify where to place dynamic simple queue entries for static DCHP leases with rate-limit parameter set.
     */
    readonly insertQueueBefore: pulumi.Output<string | undefined>;
    /**
     * Name of the interface.
     */
    readonly interface: pulumi.Output<string>;
    readonly invalid: pulumi.Output<boolean>;
    /**
     * A script that will be executed after a lease is assigned or de-assigned.
     */
    readonly leaseScript: pulumi.Output<string | undefined>;
    /**
     * The time that a client may use the assigned address. The client will try to renew this address after half of this time
     * and will request a new address after the time limit expires.
     */
    readonly leaseTime: pulumi.Output<string | undefined>;
    readonly name: pulumi.Output<string>;
    readonly parentQueue: pulumi.Output<string | undefined>;
    /**
     * The IP address of the relay this DHCP server.
     */
    readonly relay: pulumi.Output<string | undefined>;
    /**
     * The address which the DHCP client must send requests to in order to renew an IP address lease.
     */
    readonly srcAddress: pulumi.Output<string | undefined>;
    /**
     * Forward RADIUS Framed-Route as a DHCP Classless-Static-Route to DHCP-client.
     */
    readonly useFramedAsClassless: pulumi.Output<boolean | undefined>;
    /**
     * Whether to use RADIUS server.
     */
    readonly useRadius: pulumi.Output<string | undefined>;
    /**
     * Create a DhcpServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DhcpServerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DhcpServer resources.
 */
export interface DhcpServerState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to add dynamic ARP entry.
     */
    addArp?: pulumi.Input<boolean>;
    /**
     * IP pool, from which to take IP addresses for the clients. If set to static-only, then only the clients that have a
     * static lease (added in lease submenu) will be allowed.
     */
    addressPool?: pulumi.Input<string>;
    /**
     * Creates a single simple queue entry for both IPv4 and IPv6 addresses, uses the MAC address and DUID for identification.
     * Requires IPv6 DHCP Server to have this option enabled as well to work properly.
     */
    allowDualStackQueue?: pulumi.Input<boolean>;
    /**
     * Always send replies as broadcasts even if destination IP is known.
     */
    alwaysBroadcast?: pulumi.Input<boolean>;
    /**
     * Option changes the way how a server responds to DHCP requests.
     */
    authoritative?: pulumi.Input<string>;
    /**
     * Accepts two predefined options or time value: * forever - lease never expires * lease-time - use time from lease-time
     * parameter
     */
    bootpLeaseTime?: pulumi.Input<string>;
    /**
     * Support for BOOTP clients.
     */
    bootpSupport?: pulumi.Input<string>;
    /**
     * Specifies whether to limit specific number of clients per single MAC address.
     */
    clientMacLimit?: pulumi.Input<number>;
    comment?: pulumi.Input<string>;
    /**
     * Allows to disable/enable conflict detection. If option is enabled, then whenever server tries to assign a lease it will
     * send ICMP and ARP messages to detect whether such address in the network already exist. If any of above get reply
     * address is considered already used. Conflict detection must be disabled when any kind of DHCP client limitation per port
     * or per mac is used.
     */
    conflictDetection?: pulumi.Input<boolean>;
    /**
     * If secs field in DHCP packet is smaller than delay-threshold, then this packet is ignored. If set to none - there is no
     * threshold (all DHCP packets are processed).
     */
    delayThreshold?: pulumi.Input<string>;
    /**
     * Use custom set of DHCP options defined in option sets menu.
     */
    dhcpOptionSet?: pulumi.Input<string>;
    dhcpServerId?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    /**
     * Specify where to place dynamic simple queue entries for static DCHP leases with rate-limit parameter set.
     */
    insertQueueBefore?: pulumi.Input<string>;
    /**
     * Name of the interface.
     */
    interface?: pulumi.Input<string>;
    invalid?: pulumi.Input<boolean>;
    /**
     * A script that will be executed after a lease is assigned or de-assigned.
     */
    leaseScript?: pulumi.Input<string>;
    /**
     * The time that a client may use the assigned address. The client will try to renew this address after half of this time
     * and will request a new address after the time limit expires.
     */
    leaseTime?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    parentQueue?: pulumi.Input<string>;
    /**
     * The IP address of the relay this DHCP server.
     */
    relay?: pulumi.Input<string>;
    /**
     * The address which the DHCP client must send requests to in order to renew an IP address lease.
     */
    srcAddress?: pulumi.Input<string>;
    /**
     * Forward RADIUS Framed-Route as a DHCP Classless-Static-Route to DHCP-client.
     */
    useFramedAsClassless?: pulumi.Input<boolean>;
    /**
     * Whether to use RADIUS server.
     */
    useRadius?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DhcpServer resource.
 */
export interface DhcpServerArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to add dynamic ARP entry.
     */
    addArp?: pulumi.Input<boolean>;
    /**
     * IP pool, from which to take IP addresses for the clients. If set to static-only, then only the clients that have a
     * static lease (added in lease submenu) will be allowed.
     */
    addressPool?: pulumi.Input<string>;
    /**
     * Creates a single simple queue entry for both IPv4 and IPv6 addresses, uses the MAC address and DUID for identification.
     * Requires IPv6 DHCP Server to have this option enabled as well to work properly.
     */
    allowDualStackQueue?: pulumi.Input<boolean>;
    /**
     * Always send replies as broadcasts even if destination IP is known.
     */
    alwaysBroadcast?: pulumi.Input<boolean>;
    /**
     * Option changes the way how a server responds to DHCP requests.
     */
    authoritative?: pulumi.Input<string>;
    /**
     * Accepts two predefined options or time value: * forever - lease never expires * lease-time - use time from lease-time
     * parameter
     */
    bootpLeaseTime?: pulumi.Input<string>;
    /**
     * Support for BOOTP clients.
     */
    bootpSupport?: pulumi.Input<string>;
    /**
     * Specifies whether to limit specific number of clients per single MAC address.
     */
    clientMacLimit?: pulumi.Input<number>;
    comment?: pulumi.Input<string>;
    /**
     * Allows to disable/enable conflict detection. If option is enabled, then whenever server tries to assign a lease it will
     * send ICMP and ARP messages to detect whether such address in the network already exist. If any of above get reply
     * address is considered already used. Conflict detection must be disabled when any kind of DHCP client limitation per port
     * or per mac is used.
     */
    conflictDetection?: pulumi.Input<boolean>;
    /**
     * If secs field in DHCP packet is smaller than delay-threshold, then this packet is ignored. If set to none - there is no
     * threshold (all DHCP packets are processed).
     */
    delayThreshold?: pulumi.Input<string>;
    /**
     * Use custom set of DHCP options defined in option sets menu.
     */
    dhcpOptionSet?: pulumi.Input<string>;
    dhcpServerId?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Specify where to place dynamic simple queue entries for static DCHP leases with rate-limit parameter set.
     */
    insertQueueBefore?: pulumi.Input<string>;
    /**
     * Name of the interface.
     */
    interface: pulumi.Input<string>;
    /**
     * A script that will be executed after a lease is assigned or de-assigned.
     */
    leaseScript?: pulumi.Input<string>;
    /**
     * The time that a client may use the assigned address. The client will try to renew this address after half of this time
     * and will request a new address after the time limit expires.
     */
    leaseTime?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    parentQueue?: pulumi.Input<string>;
    /**
     * The IP address of the relay this DHCP server.
     */
    relay?: pulumi.Input<string>;
    /**
     * The address which the DHCP client must send requests to in order to renew an IP address lease.
     */
    srcAddress?: pulumi.Input<string>;
    /**
     * Forward RADIUS Framed-Route as a DHCP Classless-Static-Route to DHCP-client.
     */
    useFramedAsClassless?: pulumi.Input<boolean>;
    /**
     * Whether to use RADIUS server.
     */
    useRadius?: pulumi.Input<string>;
}
