import * as pulumi from "@pulumi/pulumi";
export declare class IpVrf extends pulumi.CustomResource {
    /**
     * Get an existing IpVrf resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpVrfState, opts?: pulumi.CustomResourceOptions): IpVrf;
    /**
     * Returns true if the given object is an instance of IpVrf.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpVrf;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * At least one interface must be added to the VRF.
     */
    readonly interfaces: pulumi.Output<string[]>;
    readonly ipVrfId: pulumi.Output<string>;
    /**
     * Unique name of the VRF.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Create a IpVrf resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpVrfArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpVrf resources.
 */
export interface IpVrfState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * At least one interface must be added to the VRF.
     */
    interfaces?: pulumi.Input<pulumi.Input<string>[]>;
    ipVrfId?: pulumi.Input<string>;
    /**
     * Unique name of the VRF.
     */
    name?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IpVrf resource.
 */
export interface IpVrfArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * At least one interface must be added to the VRF.
     */
    interfaces: pulumi.Input<pulumi.Input<string>[]>;
    ipVrfId?: pulumi.Input<string>;
    /**
     * Unique name of the VRF.
     */
    name?: pulumi.Input<string>;
}
