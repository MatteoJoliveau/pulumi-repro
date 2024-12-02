import * as pulumi from "@pulumi/pulumi";
export declare class DhcpServerLease extends pulumi.CustomResource {
    /**
     * Get an existing DhcpServerLease resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DhcpServerLeaseState, opts?: pulumi.CustomResourceOptions): DhcpServerLease;
    /**
     * Returns true if the given object is an instance of DhcpServerLease.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DhcpServerLease;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * The IP address of the machine currently holding the DHCP lease.
     */
    readonly activeAddress: pulumi.Output<string>;
    /**
     * Actual client-id of the client.
     */
    readonly activeClientId: pulumi.Output<string>;
    /**
     * The hostname of the machine currently holding the DHCP lease.
     */
    readonly activeHostname: pulumi.Output<string>;
    /**
     * The MAC address of of the machine currently holding the DHCP lease.
     */
    readonly activeMacAddress: pulumi.Output<string>;
    /**
     * Actual dhcp server, which serves this client.
     */
    readonly activeServer: pulumi.Output<string>;
    /**
     * The IP address of the DHCP lease to be created.
     */
    readonly address: pulumi.Output<string>;
    /**
     * Address list to which address will be added if lease is bound.
     */
    readonly addressLists: pulumi.Output<string | undefined>;
    /**
     * Circuit ID of DHCP relay agent. If each character should be valid ASCII text symbol or else this value is displayed as
     * hex dump.
     */
    readonly agentCircuitId: pulumi.Output<string>;
    /**
     * Remote ID, set by DHCP relay agent.
     */
    readonly agentRemoteId: pulumi.Output<string>;
    /**
     * Creates a single simple queue entry for both IPv4 and IPv6 addresses, uses the MAC address and DUID for identification.
     */
    readonly allowDualStackQueue: pulumi.Output<boolean | undefined>;
    /**
     * Send all replies as broadcasts.
     */
    readonly alwaysBroadcast: pulumi.Output<boolean | undefined>;
    /**
     * Whether to block access for this DHCP client (true|false).
     */
    readonly blockAccess: pulumi.Output<boolean | undefined>;
    /**
     * Whether the lease is blocked.
     */
    readonly blocked: pulumi.Output<boolean>;
    /**
     * Class ID of the client. This option is available in RouterOS starting from version 7.16.
     */
    readonly classId: pulumi.Output<string | undefined>;
    /**
     * If specified, must match DHCP 'client identifier' option of the request.
     */
    readonly clientId: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * Add additional DHCP options.
     */
    readonly dhcpOption: pulumi.Output<string | undefined>;
    /**
     * Add additional set of DHCP options.
     */
    readonly dhcpOptionSet: pulumi.Output<string | undefined>;
    readonly dhcpServerLeaseId: pulumi.Output<string>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Whether the dhcp lease is static or dynamic. Dynamic leases are not guaranteed to continue to be assigned to that
     * specific device.
     */
    readonly dynamic: pulumi.Output<boolean>;
    /**
     * Time until lease expires.
     */
    readonly expiresAfter: pulumi.Output<string>;
    /**
     * The hostname of the device
     */
    readonly hostName: pulumi.Output<string>;
    /**
     * Specify where to place dynamic simple queue entries for static DCHP leases with rate-limit parameter set.
     */
    readonly insertQueueBefore: pulumi.Output<string | undefined>;
    readonly lastSeen: pulumi.Output<string>;
    /**
     * Time that the client may use the address. If set to 0s lease will never expire.
     */
    readonly leaseTime: pulumi.Output<string | undefined>;
    /**
     * The MAC addreess of the DHCP lease to be created.
     */
    readonly macAddress: pulumi.Output<string>;
    /**
     * Shows if this dynamic lease is authenticated by RADIUS or not.
     */
    readonly radius: pulumi.Output<string>;
    /**
     * Adds a dynamic simple queue to limit IP's bandwidth to a specified rate. Requires the lease to be static.
     */
    readonly rateLimit: pulumi.Output<string | undefined>;
    /**
     * Server name which serves this client.
     */
    readonly server: pulumi.Output<string | undefined>;
    /**
     * Source MAC address.
     */
    readonly srcMacAddress: pulumi.Output<string>;
    /**
     * Lease status.
     */
    readonly status: pulumi.Output<string>;
    /**
     * When this option is set server uses source MAC address instead of received CHADDR to assign address.
     */
    readonly useSrcMac: pulumi.Output<boolean | undefined>;
    /**
     * Create a DhcpServerLease resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DhcpServerLeaseArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DhcpServerLease resources.
 */
export interface DhcpServerLeaseState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The IP address of the machine currently holding the DHCP lease.
     */
    activeAddress?: pulumi.Input<string>;
    /**
     * Actual client-id of the client.
     */
    activeClientId?: pulumi.Input<string>;
    /**
     * The hostname of the machine currently holding the DHCP lease.
     */
    activeHostname?: pulumi.Input<string>;
    /**
     * The MAC address of of the machine currently holding the DHCP lease.
     */
    activeMacAddress?: pulumi.Input<string>;
    /**
     * Actual dhcp server, which serves this client.
     */
    activeServer?: pulumi.Input<string>;
    /**
     * The IP address of the DHCP lease to be created.
     */
    address?: pulumi.Input<string>;
    /**
     * Address list to which address will be added if lease is bound.
     */
    addressLists?: pulumi.Input<string>;
    /**
     * Circuit ID of DHCP relay agent. If each character should be valid ASCII text symbol or else this value is displayed as
     * hex dump.
     */
    agentCircuitId?: pulumi.Input<string>;
    /**
     * Remote ID, set by DHCP relay agent.
     */
    agentRemoteId?: pulumi.Input<string>;
    /**
     * Creates a single simple queue entry for both IPv4 and IPv6 addresses, uses the MAC address and DUID for identification.
     */
    allowDualStackQueue?: pulumi.Input<boolean>;
    /**
     * Send all replies as broadcasts.
     */
    alwaysBroadcast?: pulumi.Input<boolean>;
    /**
     * Whether to block access for this DHCP client (true|false).
     */
    blockAccess?: pulumi.Input<boolean>;
    /**
     * Whether the lease is blocked.
     */
    blocked?: pulumi.Input<boolean>;
    /**
     * Class ID of the client. This option is available in RouterOS starting from version 7.16.
     */
    classId?: pulumi.Input<string>;
    /**
     * If specified, must match DHCP 'client identifier' option of the request.
     */
    clientId?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Add additional DHCP options.
     */
    dhcpOption?: pulumi.Input<string>;
    /**
     * Add additional set of DHCP options.
     */
    dhcpOptionSet?: pulumi.Input<string>;
    dhcpServerLeaseId?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Whether the dhcp lease is static or dynamic. Dynamic leases are not guaranteed to continue to be assigned to that
     * specific device.
     */
    dynamic?: pulumi.Input<boolean>;
    /**
     * Time until lease expires.
     */
    expiresAfter?: pulumi.Input<string>;
    /**
     * The hostname of the device
     */
    hostName?: pulumi.Input<string>;
    /**
     * Specify where to place dynamic simple queue entries for static DCHP leases with rate-limit parameter set.
     */
    insertQueueBefore?: pulumi.Input<string>;
    lastSeen?: pulumi.Input<string>;
    /**
     * Time that the client may use the address. If set to 0s lease will never expire.
     */
    leaseTime?: pulumi.Input<string>;
    /**
     * The MAC addreess of the DHCP lease to be created.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Shows if this dynamic lease is authenticated by RADIUS or not.
     */
    radius?: pulumi.Input<string>;
    /**
     * Adds a dynamic simple queue to limit IP's bandwidth to a specified rate. Requires the lease to be static.
     */
    rateLimit?: pulumi.Input<string>;
    /**
     * Server name which serves this client.
     */
    server?: pulumi.Input<string>;
    /**
     * Source MAC address.
     */
    srcMacAddress?: pulumi.Input<string>;
    /**
     * Lease status.
     */
    status?: pulumi.Input<string>;
    /**
     * When this option is set server uses source MAC address instead of received CHADDR to assign address.
     */
    useSrcMac?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a DhcpServerLease resource.
 */
export interface DhcpServerLeaseArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The IP address of the DHCP lease to be created.
     */
    address: pulumi.Input<string>;
    /**
     * Address list to which address will be added if lease is bound.
     */
    addressLists?: pulumi.Input<string>;
    /**
     * Creates a single simple queue entry for both IPv4 and IPv6 addresses, uses the MAC address and DUID for identification.
     */
    allowDualStackQueue?: pulumi.Input<boolean>;
    /**
     * Send all replies as broadcasts.
     */
    alwaysBroadcast?: pulumi.Input<boolean>;
    /**
     * Whether to block access for this DHCP client (true|false).
     */
    blockAccess?: pulumi.Input<boolean>;
    /**
     * Class ID of the client. This option is available in RouterOS starting from version 7.16.
     */
    classId?: pulumi.Input<string>;
    /**
     * If specified, must match DHCP 'client identifier' option of the request.
     */
    clientId?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Add additional DHCP options.
     */
    dhcpOption?: pulumi.Input<string>;
    /**
     * Add additional set of DHCP options.
     */
    dhcpOptionSet?: pulumi.Input<string>;
    dhcpServerLeaseId?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Specify where to place dynamic simple queue entries for static DCHP leases with rate-limit parameter set.
     */
    insertQueueBefore?: pulumi.Input<string>;
    /**
     * Time that the client may use the address. If set to 0s lease will never expire.
     */
    leaseTime?: pulumi.Input<string>;
    /**
     * The MAC addreess of the DHCP lease to be created.
     */
    macAddress: pulumi.Input<string>;
    /**
     * Adds a dynamic simple queue to limit IP's bandwidth to a specified rate. Requires the lease to be static.
     */
    rateLimit?: pulumi.Input<string>;
    /**
     * Server name which serves this client.
     */
    server?: pulumi.Input<string>;
    /**
     * When this option is set server uses source MAC address instead of received CHADDR to assign address.
     */
    useSrcMac?: pulumi.Input<boolean>;
}
