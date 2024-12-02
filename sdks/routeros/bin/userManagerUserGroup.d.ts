import * as pulumi from "@pulumi/pulumi";
export declare class UserManagerUserGroup extends pulumi.CustomResource {
    /**
     * Get an existing UserManagerUserGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserManagerUserGroupState, opts?: pulumi.CustomResourceOptions): UserManagerUserGroup;
    /**
     * Returns true if the given object is an instance of UserManagerUserGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is UserManagerUserGroup;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * A custom set of colon-separated attributes with their values will be added to `Access-Accept` messages for users in this
     * group.
     */
    readonly attributes: pulumi.Output<string[] | undefined>;
    /**
     * It's the default item.
     */
    readonly default: pulumi.Output<boolean>;
    /**
     * The default name of the group.
     */
    readonly defaultName: pulumi.Output<string>;
    /**
     * A set of allowed authentication methods for tunneled authentication methods (`ttls-pap`, `ttls-chap`, `ttls-mschap1`,
     * `ttls-mschap2`, `peap-mschap2`).
     */
    readonly innerAuths: pulumi.Output<string[] | undefined>;
    /**
     * Unique name of the group.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A set of allowed authentication methods (`pap`, `chap`, `mschap1`, `mschap2`, `eap-tls`, `eap-ttls`, `eap-peap`,
     * `eap-mschap2`).
     */
    readonly outerAuths: pulumi.Output<string[] | undefined>;
    readonly userManagerUserGroupId: pulumi.Output<string>;
    /**
     * Create a UserManagerUserGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: UserManagerUserGroupArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering UserManagerUserGroup resources.
 */
export interface UserManagerUserGroupState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * A custom set of colon-separated attributes with their values will be added to `Access-Accept` messages for users in this
     * group.
     */
    attributes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * It's the default item.
     */
    default?: pulumi.Input<boolean>;
    /**
     * The default name of the group.
     */
    defaultName?: pulumi.Input<string>;
    /**
     * A set of allowed authentication methods for tunneled authentication methods (`ttls-pap`, `ttls-chap`, `ttls-mschap1`,
     * `ttls-mschap2`, `peap-mschap2`).
     */
    innerAuths?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Unique name of the group.
     */
    name?: pulumi.Input<string>;
    /**
     * A set of allowed authentication methods (`pap`, `chap`, `mschap1`, `mschap2`, `eap-tls`, `eap-ttls`, `eap-peap`,
     * `eap-mschap2`).
     */
    outerAuths?: pulumi.Input<pulumi.Input<string>[]>;
    userManagerUserGroupId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a UserManagerUserGroup resource.
 */
export interface UserManagerUserGroupArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * A custom set of colon-separated attributes with their values will be added to `Access-Accept` messages for users in this
     * group.
     */
    attributes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A set of allowed authentication methods for tunneled authentication methods (`ttls-pap`, `ttls-chap`, `ttls-mschap1`,
     * `ttls-mschap2`, `peap-mschap2`).
     */
    innerAuths?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Unique name of the group.
     */
    name?: pulumi.Input<string>;
    /**
     * A set of allowed authentication methods (`pap`, `chap`, `mschap1`, `mschap2`, `eap-tls`, `eap-ttls`, `eap-peap`,
     * `eap-mschap2`).
     */
    outerAuths?: pulumi.Input<pulumi.Input<string>[]>;
    userManagerUserGroupId?: pulumi.Input<string>;
}
