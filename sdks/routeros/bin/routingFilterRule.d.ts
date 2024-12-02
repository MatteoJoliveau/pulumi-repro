import * as pulumi from "@pulumi/pulumi";
export declare class RoutingFilterRule extends pulumi.CustomResource {
    /**
     * Get an existing RoutingFilterRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RoutingFilterRuleState, opts?: pulumi.CustomResourceOptions): RoutingFilterRule;
    /**
     * Returns true if the given object is an instance of RoutingFilterRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RoutingFilterRule;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Chain name.
     */
    readonly chain: pulumi.Output<string>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    readonly inactive: pulumi.Output<boolean>;
    readonly routingFilterRuleId: pulumi.Output<string>;
    /**
     * Filter rule.
     */
    readonly rule: pulumi.Output<string>;
    /**
     * Create a RoutingFilterRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoutingFilterRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering RoutingFilterRule resources.
 */
export interface RoutingFilterRuleState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Chain name.
     */
    chain?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    inactive?: pulumi.Input<boolean>;
    routingFilterRuleId?: pulumi.Input<string>;
    /**
     * Filter rule.
     */
    rule?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a RoutingFilterRule resource.
 */
export interface RoutingFilterRuleArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Chain name.
     */
    chain: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    routingFilterRuleId?: pulumi.Input<string>;
    /**
     * Filter rule.
     */
    rule: pulumi.Input<string>;
}
