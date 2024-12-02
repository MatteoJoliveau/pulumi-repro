import * as pulumi from "@pulumi/pulumi";
export declare class Ipv6Route extends pulumi.CustomResource {
    /**
     * Get an existing Ipv6Route resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ipv6RouteState, opts?: pulumi.CustomResourceOptions): Ipv6Route;
    /**
     * Returns true if the given object is an instance of Ipv6Route.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Ipv6Route;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * A flag indicates whether the route is elected as Active and eligible to be added to the FIB.
     */
    readonly active: pulumi.Output<boolean>;
    /**
     * It's a blackhole route. If you need to cancel route marking, then simply delete the parameter from the configuration of
     * the TF. The value of the parameter (true or false) has no effect on the MT processing logic.
     */
    readonly blackhole: pulumi.Output<boolean | undefined>;
    /**
     * Currently used check-gateway option.
     */
    readonly checkGateway: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Value used in route selection. Routes with smaller distance value are given preference.
     */
    readonly distance: pulumi.Output<number | undefined>;
    /**
     * IP prefix of route, specifies destination addresses that this route can be used for.
     */
    readonly dstAddress: pulumi.Output<string>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    readonly dynamic: pulumi.Output<boolean>;
    /**
     * A flag indicates whether the route is added as an Equal-Cost Multi-Path route in the FIB.
     */
    readonly ecmp: pulumi.Output<boolean>;
    /**
     * Array of IP addresses or interface names. Specifies which host or interface packets should be sent to (IP | interface |
     * IP%interface | IP@table[, IP | string, [..]]).
     */
    readonly gateway: pulumi.Output<string>;
    /**
     * Indicates whether the route is eligible to be hardware offloaded on supported hardware.
     */
    readonly hwOffloaded: pulumi.Output<boolean>;
    /**
     * Shows actual (resolved) gateway and interface that will be used for packet forwarding.
     */
    readonly immediateGw: pulumi.Output<string>;
    readonly inactive: pulumi.Output<boolean>;
    readonly ipv6RouteId: pulumi.Output<string>;
    /**
     * Which of the local IP addresses to use for locally originated packets that are sent via this route. Value of this
     * property has no effect on forwarded packets. If value of this property is set to IP address that is not local address of
     * this router then the route will be inactive (in ROS v6, ROS v7 allows IP spoofing).
     */
    readonly prefSrc: pulumi.Output<string | undefined>;
    /**
     * Routing table this route belongs to.
     */
    readonly routingTable: pulumi.Output<string | undefined>;
    /**
     * Used in nexthop resolution. Route can resolve nexthop only through routes that have scope less than or equal to the
     * target-scope of this route.
     */
    readonly scope: pulumi.Output<number | undefined>;
    readonly static: pulumi.Output<boolean>;
    readonly suppressHwOffload: pulumi.Output<boolean | undefined>;
    /**
     * Used in nexthop resolution. This is the maximum value of scope for a route through which a nexthop of this route can be
     * resolved.
     */
    readonly targetScope: pulumi.Output<number | undefined>;
    /**
     * VRF interface name.
     */
    readonly vrfInterface: pulumi.Output<string>;
    /**
     * Create a Ipv6Route resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Ipv6RouteArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Ipv6Route resources.
 */
export interface Ipv6RouteState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * A flag indicates whether the route is elected as Active and eligible to be added to the FIB.
     */
    active?: pulumi.Input<boolean>;
    /**
     * It's a blackhole route. If you need to cancel route marking, then simply delete the parameter from the configuration of
     * the TF. The value of the parameter (true or false) has no effect on the MT processing logic.
     */
    blackhole?: pulumi.Input<boolean>;
    /**
     * Currently used check-gateway option.
     */
    checkGateway?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Value used in route selection. Routes with smaller distance value are given preference.
     */
    distance?: pulumi.Input<number>;
    /**
     * IP prefix of route, specifies destination addresses that this route can be used for.
     */
    dstAddress?: pulumi.Input<string>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    /**
     * A flag indicates whether the route is added as an Equal-Cost Multi-Path route in the FIB.
     */
    ecmp?: pulumi.Input<boolean>;
    /**
     * Array of IP addresses or interface names. Specifies which host or interface packets should be sent to (IP | interface |
     * IP%interface | IP@table[, IP | string, [..]]).
     */
    gateway?: pulumi.Input<string>;
    /**
     * Indicates whether the route is eligible to be hardware offloaded on supported hardware.
     */
    hwOffloaded?: pulumi.Input<boolean>;
    /**
     * Shows actual (resolved) gateway and interface that will be used for packet forwarding.
     */
    immediateGw?: pulumi.Input<string>;
    inactive?: pulumi.Input<boolean>;
    ipv6RouteId?: pulumi.Input<string>;
    /**
     * Which of the local IP addresses to use for locally originated packets that are sent via this route. Value of this
     * property has no effect on forwarded packets. If value of this property is set to IP address that is not local address of
     * this router then the route will be inactive (in ROS v6, ROS v7 allows IP spoofing).
     */
    prefSrc?: pulumi.Input<string>;
    /**
     * Routing table this route belongs to.
     */
    routingTable?: pulumi.Input<string>;
    /**
     * Used in nexthop resolution. Route can resolve nexthop only through routes that have scope less than or equal to the
     * target-scope of this route.
     */
    scope?: pulumi.Input<number>;
    static?: pulumi.Input<boolean>;
    suppressHwOffload?: pulumi.Input<boolean>;
    /**
     * Used in nexthop resolution. This is the maximum value of scope for a route through which a nexthop of this route can be
     * resolved.
     */
    targetScope?: pulumi.Input<number>;
    /**
     * VRF interface name.
     */
    vrfInterface?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Ipv6Route resource.
 */
export interface Ipv6RouteArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * It's a blackhole route. If you need to cancel route marking, then simply delete the parameter from the configuration of
     * the TF. The value of the parameter (true or false) has no effect on the MT processing logic.
     */
    blackhole?: pulumi.Input<boolean>;
    /**
     * Currently used check-gateway option.
     */
    checkGateway?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Value used in route selection. Routes with smaller distance value are given preference.
     */
    distance?: pulumi.Input<number>;
    /**
     * IP prefix of route, specifies destination addresses that this route can be used for.
     */
    dstAddress: pulumi.Input<string>;
    /**
     * Array of IP addresses or interface names. Specifies which host or interface packets should be sent to (IP | interface |
     * IP%interface | IP@table[, IP | string, [..]]).
     */
    gateway: pulumi.Input<string>;
    ipv6RouteId?: pulumi.Input<string>;
    /**
     * Which of the local IP addresses to use for locally originated packets that are sent via this route. Value of this
     * property has no effect on forwarded packets. If value of this property is set to IP address that is not local address of
     * this router then the route will be inactive (in ROS v6, ROS v7 allows IP spoofing).
     */
    prefSrc?: pulumi.Input<string>;
    /**
     * Routing table this route belongs to.
     */
    routingTable?: pulumi.Input<string>;
    /**
     * Used in nexthop resolution. Route can resolve nexthop only through routes that have scope less than or equal to the
     * target-scope of this route.
     */
    scope?: pulumi.Input<number>;
    suppressHwOffload?: pulumi.Input<boolean>;
    /**
     * Used in nexthop resolution. This is the maximum value of scope for a route through which a nexthop of this route can be
     * resolved.
     */
    targetScope?: pulumi.Input<number>;
    /**
     * VRF interface name.
     */
    vrfInterface?: pulumi.Input<string>;
}
