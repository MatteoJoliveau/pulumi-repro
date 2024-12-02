import * as pulumi from "@pulumi/pulumi";
export declare class RoutingRule extends pulumi.CustomResource {
    /**
     * Get an existing RoutingRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RoutingRuleState, opts?: pulumi.CustomResourceOptions): RoutingRule;
    /**
     * Returns true if the given object is an instance of RoutingRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RoutingRule;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * An action to take on the matching packet:drop - silently drop the packet.lookup - perform a lookup in routing
     * tables.lookup-only-in-table - perform lookup only in the specified routing table (see table parameter).unreachable -
     * generate ICMP unreachable message and send it back to the source.
     */
    readonly action: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * The destination address of the packet to match.
     */
    readonly dstAddress: pulumi.Output<string | undefined>;
    readonly inactive: pulumi.Output<boolean>;
    /**
     * Incoming interface to match.
     */
    readonly interface: pulumi.Output<string | undefined>;
    /**
     * Equivalent to Linux IP rule `suppress_prefixlength`. For example to suppress the default route in the routing decision
     * set the value to 0.
     */
    readonly minPrefix: pulumi.Output<number | undefined>;
    /**
     * Match specific routing mark.
     */
    readonly routingMark: pulumi.Output<string | undefined>;
    readonly routingRuleId: pulumi.Output<string>;
    /**
     * The source address of the packet to match.
     */
    readonly srcAddress: pulumi.Output<string | undefined>;
    /**
     * Name of the routing table to use for lookup.
     */
    readonly table: pulumi.Output<string | undefined>;
    /**
     * Create a RoutingRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: RoutingRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering RoutingRule resources.
 */
export interface RoutingRuleState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An action to take on the matching packet:drop - silently drop the packet.lookup - perform a lookup in routing
     * tables.lookup-only-in-table - perform lookup only in the specified routing table (see table parameter).unreachable -
     * generate ICMP unreachable message and send it back to the source.
     */
    action?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * The destination address of the packet to match.
     */
    dstAddress?: pulumi.Input<string>;
    inactive?: pulumi.Input<boolean>;
    /**
     * Incoming interface to match.
     */
    interface?: pulumi.Input<string>;
    /**
     * Equivalent to Linux IP rule `suppress_prefixlength`. For example to suppress the default route in the routing decision
     * set the value to 0.
     */
    minPrefix?: pulumi.Input<number>;
    /**
     * Match specific routing mark.
     */
    routingMark?: pulumi.Input<string>;
    routingRuleId?: pulumi.Input<string>;
    /**
     * The source address of the packet to match.
     */
    srcAddress?: pulumi.Input<string>;
    /**
     * Name of the routing table to use for lookup.
     */
    table?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a RoutingRule resource.
 */
export interface RoutingRuleArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An action to take on the matching packet:drop - silently drop the packet.lookup - perform a lookup in routing
     * tables.lookup-only-in-table - perform lookup only in the specified routing table (see table parameter).unreachable -
     * generate ICMP unreachable message and send it back to the source.
     */
    action?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * The destination address of the packet to match.
     */
    dstAddress?: pulumi.Input<string>;
    /**
     * Incoming interface to match.
     */
    interface?: pulumi.Input<string>;
    /**
     * Equivalent to Linux IP rule `suppress_prefixlength`. For example to suppress the default route in the routing decision
     * set the value to 0.
     */
    minPrefix?: pulumi.Input<number>;
    /**
     * Match specific routing mark.
     */
    routingMark?: pulumi.Input<string>;
    routingRuleId?: pulumi.Input<string>;
    /**
     * The source address of the packet to match.
     */
    srcAddress?: pulumi.Input<string>;
    /**
     * Name of the routing table to use for lookup.
     */
    table?: pulumi.Input<string>;
}
