import * as pulumi from "@pulumi/pulumi";
export declare class SystemUserGroup extends pulumi.CustomResource {
    /**
     * Get an existing SystemUserGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemUserGroupState, opts?: pulumi.CustomResourceOptions): SystemUserGroup;
    /**
     * Returns true if the given object is an instance of SystemUserGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SystemUserGroup;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not
     * required.</em>
     */
    readonly ___unset_: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * The name of the user group
     */
    readonly name: pulumi.Output<string>;
    /**
     * A set of allowed policies.
     */
    readonly policies: pulumi.Output<string[] | undefined>;
    /**
     * The name of the skin that will be used for WebFig.
     */
    readonly skin: pulumi.Output<string | undefined>;
    readonly systemUserGroupId: pulumi.Output<string>;
    /**
     * Create a SystemUserGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemUserGroupArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SystemUserGroup resources.
 */
export interface SystemUserGroupState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not
     * required.</em>
     */
    ___unset_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * The name of the user group
     */
    name?: pulumi.Input<string>;
    /**
     * A set of allowed policies.
     */
    policies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the skin that will be used for WebFig.
     */
    skin?: pulumi.Input<string>;
    systemUserGroupId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SystemUserGroup resource.
 */
export interface SystemUserGroupArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not
     * required.</em>
     */
    ___unset_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * The name of the user group
     */
    name?: pulumi.Input<string>;
    /**
     * A set of allowed policies.
     */
    policies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the skin that will be used for WebFig.
     */
    skin?: pulumi.Input<string>;
    systemUserGroupId?: pulumi.Input<string>;
}
