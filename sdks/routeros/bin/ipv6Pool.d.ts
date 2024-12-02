import * as pulumi from "@pulumi/pulumi";
export declare class Ipv6Pool extends pulumi.CustomResource {
    /**
     * Get an existing Ipv6Pool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ipv6PoolState, opts?: pulumi.CustomResourceOptions): Ipv6Pool;
    /**
     * Returns true if the given object is an instance of Ipv6Pool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Ipv6Pool;
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
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    readonly dynamic: pulumi.Output<boolean>;
    readonly ipv6PoolId: pulumi.Output<string>;
    /**
     * Descriptive name of the pool.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Ipv6 address prefix.
     */
    readonly prefix: pulumi.Output<string | undefined>;
    /**
     * The option represents the prefix size that will be given out to the client.
     */
    readonly prefixLength: pulumi.Output<number>;
    /**
     * Create a Ipv6Pool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Ipv6PoolArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Ipv6Pool resources.
 */
export interface Ipv6PoolState {
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
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    ipv6PoolId?: pulumi.Input<string>;
    /**
     * Descriptive name of the pool.
     */
    name?: pulumi.Input<string>;
    /**
     * Ipv6 address prefix.
     */
    prefix?: pulumi.Input<string>;
    /**
     * The option represents the prefix size that will be given out to the client.
     */
    prefixLength?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a Ipv6Pool resource.
 */
export interface Ipv6PoolArgs {
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
    ipv6PoolId?: pulumi.Input<string>;
    /**
     * Descriptive name of the pool.
     */
    name?: pulumi.Input<string>;
    /**
     * Ipv6 address prefix.
     */
    prefix?: pulumi.Input<string>;
    /**
     * The option represents the prefix size that will be given out to the client.
     */
    prefixLength: pulumi.Input<number>;
}
