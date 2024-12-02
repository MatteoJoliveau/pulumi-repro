import * as pulumi from "@pulumi/pulumi";
export declare class IpIpsecPolicyGroup extends pulumi.CustomResource {
    /**
     * Get an existing IpIpsecPolicyGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpIpsecPolicyGroupState, opts?: pulumi.CustomResourceOptions): IpIpsecPolicyGroup;
    /**
     * Returns true if the given object is an instance of IpIpsecPolicyGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpIpsecPolicyGroup;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * It's the default item.
     */
    readonly default: pulumi.Output<boolean>;
    readonly ipIpsecPolicyGroupId: pulumi.Output<string>;
    readonly name: pulumi.Output<string>;
    /**
     * Create a IpIpsecPolicyGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpIpsecPolicyGroupArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpIpsecPolicyGroup resources.
 */
export interface IpIpsecPolicyGroupState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * It's the default item.
     */
    default?: pulumi.Input<boolean>;
    ipIpsecPolicyGroupId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IpIpsecPolicyGroup resource.
 */
export interface IpIpsecPolicyGroupArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    ipIpsecPolicyGroupId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
