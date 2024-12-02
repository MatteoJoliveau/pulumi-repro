import * as pulumi from "@pulumi/pulumi";
export declare class PppAaa extends pulumi.CustomResource {
    /**
     * Get an existing PppAaa resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PppAaaState, opts?: pulumi.CustomResourceOptions): PppAaa;
    /**
     * Returns true if the given object is an instance of PppAaa.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PppAaa;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * An option that enables accounting for users.
     */
    readonly accounting: pulumi.Output<boolean | undefined>;
    /**
     * An option that enables IPv6 separate accounting.
     */
    readonly enableIpv6Accounting: pulumi.Output<boolean | undefined>;
    /**
     * Interval between scheduled RADIUS Interim-Update messages.
     */
    readonly interimUpdate: pulumi.Output<string | undefined>;
    readonly pppAaaId: pulumi.Output<string>;
    readonly useCircuitIdInNasPortId: pulumi.Output<boolean | undefined>;
    /**
     * An option whether to use RADIUS server.
     */
    readonly useRadius: pulumi.Output<boolean | undefined>;
    /**
     * Create a PppAaa resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: PppAaaArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering PppAaa resources.
 */
export interface PppAaaState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option that enables accounting for users.
     */
    accounting?: pulumi.Input<boolean>;
    /**
     * An option that enables IPv6 separate accounting.
     */
    enableIpv6Accounting?: pulumi.Input<boolean>;
    /**
     * Interval between scheduled RADIUS Interim-Update messages.
     */
    interimUpdate?: pulumi.Input<string>;
    pppAaaId?: pulumi.Input<string>;
    useCircuitIdInNasPortId?: pulumi.Input<boolean>;
    /**
     * An option whether to use RADIUS server.
     */
    useRadius?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a PppAaa resource.
 */
export interface PppAaaArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option that enables accounting for users.
     */
    accounting?: pulumi.Input<boolean>;
    /**
     * An option that enables IPv6 separate accounting.
     */
    enableIpv6Accounting?: pulumi.Input<boolean>;
    /**
     * Interval between scheduled RADIUS Interim-Update messages.
     */
    interimUpdate?: pulumi.Input<string>;
    pppAaaId?: pulumi.Input<string>;
    useCircuitIdInNasPortId?: pulumi.Input<boolean>;
    /**
     * An option whether to use RADIUS server.
     */
    useRadius?: pulumi.Input<boolean>;
}
