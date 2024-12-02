import * as pulumi from "@pulumi/pulumi";
export declare class IpIpsecKey extends pulumi.CustomResource {
    /**
     * Get an existing IpIpsecKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpIpsecKeyState, opts?: pulumi.CustomResourceOptions): IpIpsecKey;
    /**
     * Returns true if the given object is an instance of IpIpsecKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpIpsecKey;
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
    readonly ipIpsecKeyId: pulumi.Output<string>;
    /**
     * Size of this key.
     */
    readonly keySize: pulumi.Output<number>;
    readonly name: pulumi.Output<string>;
    /**
     * Create a IpIpsecKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpIpsecKeyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpIpsecKey resources.
 */
export interface IpIpsecKeyState {
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
    ipIpsecKeyId?: pulumi.Input<string>;
    /**
     * Size of this key.
     */
    keySize?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IpIpsecKey resource.
 */
export interface IpIpsecKeyArgs {
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
    ipIpsecKeyId?: pulumi.Input<string>;
    /**
     * Size of this key.
     */
    keySize: pulumi.Input<number>;
    name?: pulumi.Input<string>;
}