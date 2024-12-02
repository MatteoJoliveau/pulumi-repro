import * as pulumi from "@pulumi/pulumi";
export declare class Ipv6DhcpServer extends pulumi.CustomResource {
    /**
     * Get an existing Ipv6DhcpServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ipv6DhcpServerState, opts?: pulumi.CustomResourceOptions): Ipv6DhcpServer;
    /**
     * Returns true if the given object is an instance of Ipv6DhcpServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Ipv6DhcpServer;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * IPv6 pool, from which to take IPv6 prefix for the clients.
     */
    readonly addressPool: pulumi.Output<string>;
    /**
     * Creates a single simple queue entry for both IPv4 and IPv6 addresses, and uses the MAC address and DUID for
     * identification. Requires IPv6 DHCP Server to have this option enabled as well to work properly.
     */
    readonly allowDualStackQueue: pulumi.Output<boolean | undefined>;
    /**
     * A script that will be executed after binding is assigned or de-assigned. Internal `global` variables that can be used in
     * the script: - bindingBound - set to `1` if bound, otherwise set to `0` - bindingServerName - dhcp server name -
     * bindingDUID - DUID - bindingAddress - active address - bindingPrefix - active prefix.
     */
    readonly bindingScript: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * Add additional DHCP options from option list.
     */
    readonly dhcpOptions: pulumi.Output<string[] | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * DUID value.
     */
    readonly duid: pulumi.Output<string>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    readonly dynamic: pulumi.Output<boolean>;
    /**
     * Specify where to place dynamic simple queue entries for static DCHP leases with a rate-limit parameter set.
     */
    readonly insertQueueBefore: pulumi.Output<string | undefined>;
    /**
     * The interface on which server will be running.
     */
    readonly interface: pulumi.Output<string>;
    readonly invalid: pulumi.Output<boolean>;
    readonly ipv6DhcpServerId: pulumi.Output<string>;
    /**
     * The time that a client may use the assigned address. The client will try to renew this address after half of this time
     * and will request a new address after the time limit expires.
     */
    readonly leaseTime: pulumi.Output<string | undefined>;
    /**
     * Reference name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A dynamically created queue for this lease will be configured as a child queue of the specified parent queue.
     */
    readonly parentQueue: pulumi.Output<string | undefined>;
    readonly preference: pulumi.Output<number | undefined>;
    readonly rapidCommit: pulumi.Output<boolean | undefined>;
    /**
     * Distance of the route.
     */
    readonly routeDistance: pulumi.Output<number | undefined>;
    /**
     * Whether to use RADIUS server.
     */
    readonly useRadius: pulumi.Output<boolean | undefined>;
    /**
     * Create a Ipv6DhcpServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Ipv6DhcpServerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Ipv6DhcpServer resources.
 */
export interface Ipv6DhcpServerState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * IPv6 pool, from which to take IPv6 prefix for the clients.
     */
    addressPool?: pulumi.Input<string>;
    /**
     * Creates a single simple queue entry for both IPv4 and IPv6 addresses, and uses the MAC address and DUID for
     * identification. Requires IPv6 DHCP Server to have this option enabled as well to work properly.
     */
    allowDualStackQueue?: pulumi.Input<boolean>;
    /**
     * A script that will be executed after binding is assigned or de-assigned. Internal `global` variables that can be used in
     * the script: - bindingBound - set to `1` if bound, otherwise set to `0` - bindingServerName - dhcp server name -
     * bindingDUID - DUID - bindingAddress - active address - bindingPrefix - active prefix.
     */
    bindingScript?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Add additional DHCP options from option list.
     */
    dhcpOptions?: pulumi.Input<pulumi.Input<string>[]>;
    disabled?: pulumi.Input<boolean>;
    /**
     * DUID value.
     */
    duid?: pulumi.Input<string>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    /**
     * Specify where to place dynamic simple queue entries for static DCHP leases with a rate-limit parameter set.
     */
    insertQueueBefore?: pulumi.Input<string>;
    /**
     * The interface on which server will be running.
     */
    interface?: pulumi.Input<string>;
    invalid?: pulumi.Input<boolean>;
    ipv6DhcpServerId?: pulumi.Input<string>;
    /**
     * The time that a client may use the assigned address. The client will try to renew this address after half of this time
     * and will request a new address after the time limit expires.
     */
    leaseTime?: pulumi.Input<string>;
    /**
     * Reference name.
     */
    name?: pulumi.Input<string>;
    /**
     * A dynamically created queue for this lease will be configured as a child queue of the specified parent queue.
     */
    parentQueue?: pulumi.Input<string>;
    preference?: pulumi.Input<number>;
    rapidCommit?: pulumi.Input<boolean>;
    /**
     * Distance of the route.
     */
    routeDistance?: pulumi.Input<number>;
    /**
     * Whether to use RADIUS server.
     */
    useRadius?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a Ipv6DhcpServer resource.
 */
export interface Ipv6DhcpServerArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * IPv6 pool, from which to take IPv6 prefix for the clients.
     */
    addressPool: pulumi.Input<string>;
    /**
     * Creates a single simple queue entry for both IPv4 and IPv6 addresses, and uses the MAC address and DUID for
     * identification. Requires IPv6 DHCP Server to have this option enabled as well to work properly.
     */
    allowDualStackQueue?: pulumi.Input<boolean>;
    /**
     * A script that will be executed after binding is assigned or de-assigned. Internal `global` variables that can be used in
     * the script: - bindingBound - set to `1` if bound, otherwise set to `0` - bindingServerName - dhcp server name -
     * bindingDUID - DUID - bindingAddress - active address - bindingPrefix - active prefix.
     */
    bindingScript?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Add additional DHCP options from option list.
     */
    dhcpOptions?: pulumi.Input<pulumi.Input<string>[]>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Specify where to place dynamic simple queue entries for static DCHP leases with a rate-limit parameter set.
     */
    insertQueueBefore?: pulumi.Input<string>;
    /**
     * The interface on which server will be running.
     */
    interface: pulumi.Input<string>;
    ipv6DhcpServerId?: pulumi.Input<string>;
    /**
     * The time that a client may use the assigned address. The client will try to renew this address after half of this time
     * and will request a new address after the time limit expires.
     */
    leaseTime?: pulumi.Input<string>;
    /**
     * Reference name.
     */
    name?: pulumi.Input<string>;
    /**
     * A dynamically created queue for this lease will be configured as a child queue of the specified parent queue.
     */
    parentQueue?: pulumi.Input<string>;
    preference?: pulumi.Input<number>;
    rapidCommit?: pulumi.Input<boolean>;
    /**
     * Distance of the route.
     */
    routeDistance?: pulumi.Input<number>;
    /**
     * Whether to use RADIUS server.
     */
    useRadius?: pulumi.Input<boolean>;
}
