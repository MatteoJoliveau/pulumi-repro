import * as pulumi from "@pulumi/pulumi";
export declare class IpPool extends pulumi.CustomResource {
    /**
     * Get an existing IpPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpPoolState, opts?: pulumi.CustomResourceOptions): IpPool;
    /**
     * Returns true if the given object is an instance of IpPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpPool;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly ipPoolId: pulumi.Output<string>;
    readonly name: pulumi.Output<string>;
    /**
     * When address is acquired from pool that has no free addresses, and next-pool property is set to another pool, then next
     * IP address will be acquired from next-pool.
     */
    readonly nextPool: pulumi.Output<string | undefined>;
    /**
     * IP address list of non-overlapping IP address ranges in form of: ["from1-to1", "from2-to2", ..., "fromN-toN"]. For
     * example, ["10.0.0.1-10.0.0.27", "10.0.0.32-10.0.0.47"]
     */
    readonly ranges: pulumi.Output<string[]>;
    /**
     * Create a IpPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpPoolArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpPool resources.
 */
export interface IpPoolState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    ipPoolId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * When address is acquired from pool that has no free addresses, and next-pool property is set to another pool, then next
     * IP address will be acquired from next-pool.
     */
    nextPool?: pulumi.Input<string>;
    /**
     * IP address list of non-overlapping IP address ranges in form of: ["from1-to1", "from2-to2", ..., "fromN-toN"]. For
     * example, ["10.0.0.1-10.0.0.27", "10.0.0.32-10.0.0.47"]
     */
    ranges?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a IpPool resource.
 */
export interface IpPoolArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    ipPoolId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * When address is acquired from pool that has no free addresses, and next-pool property is set to another pool, then next
     * IP address will be acquired from next-pool.
     */
    nextPool?: pulumi.Input<string>;
    /**
     * IP address list of non-overlapping IP address ranges in form of: ["from1-to1", "from2-to2", ..., "fromN-toN"]. For
     * example, ["10.0.0.1-10.0.0.27", "10.0.0.32-10.0.0.47"]
     */
    ranges: pulumi.Input<pulumi.Input<string>[]>;
}
