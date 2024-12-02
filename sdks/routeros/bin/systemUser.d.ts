import * as pulumi from "@pulumi/pulumi";
export declare class SystemUser extends pulumi.CustomResource {
    /**
     * Get an existing SystemUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemUserState, opts?: pulumi.CustomResourceOptions): SystemUser;
    /**
     * Returns true if the given object is an instance of SystemUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SystemUser;
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
     * Host or network address from which the user is allowed to log in.
     */
    readonly address: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Password expired.
     */
    readonly expired: pulumi.Output<boolean>;
    /**
     * Name of the group the user belongs to.
     */
    readonly group: pulumi.Output<string>;
    /**
     * Inactivity policy.
     */
    readonly inactivityPolicy: pulumi.Output<string | undefined>;
    /**
     * Inactivity timeout for non-GUI sessions.
     */
    readonly inactivityTimeout: pulumi.Output<string | undefined>;
    /**
     * User name. Although it must start with an alphanumeric character, it may contain '*', '_', '.' and '@' symbols.
     */
    readonly name: pulumi.Output<string>;
    /**
     * User password. If not specified, it is left blank (hit [Enter] when logging in). It conforms to standard Unix
     * characteristics of passwords and may contain letters, digits, '*' and '_' symbols.
     */
    readonly password: pulumi.Output<string | undefined>;
    readonly systemUserId: pulumi.Output<string>;
    /**
     * Create a SystemUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemUserArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SystemUser resources.
 */
export interface SystemUserState {
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
     * Host or network address from which the user is allowed to log in.
     */
    address?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Password expired.
     */
    expired?: pulumi.Input<boolean>;
    /**
     * Name of the group the user belongs to.
     */
    group?: pulumi.Input<string>;
    /**
     * Inactivity policy.
     */
    inactivityPolicy?: pulumi.Input<string>;
    /**
     * Inactivity timeout for non-GUI sessions.
     */
    inactivityTimeout?: pulumi.Input<string>;
    /**
     * User name. Although it must start with an alphanumeric character, it may contain '*', '_', '.' and '@' symbols.
     */
    name?: pulumi.Input<string>;
    /**
     * User password. If not specified, it is left blank (hit [Enter] when logging in). It conforms to standard Unix
     * characteristics of passwords and may contain letters, digits, '*' and '_' symbols.
     */
    password?: pulumi.Input<string>;
    systemUserId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SystemUser resource.
 */
export interface SystemUserArgs {
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
     * Host or network address from which the user is allowed to log in.
     */
    address?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Name of the group the user belongs to.
     */
    group: pulumi.Input<string>;
    /**
     * Inactivity policy.
     */
    inactivityPolicy?: pulumi.Input<string>;
    /**
     * Inactivity timeout for non-GUI sessions.
     */
    inactivityTimeout?: pulumi.Input<string>;
    /**
     * User name. Although it must start with an alphanumeric character, it may contain '*', '_', '.' and '@' symbols.
     */
    name?: pulumi.Input<string>;
    /**
     * User password. If not specified, it is left blank (hit [Enter] when logging in). It conforms to standard Unix
     * characteristics of passwords and may contain letters, digits, '*' and '_' symbols.
     */
    password?: pulumi.Input<string>;
    systemUserId?: pulumi.Input<string>;
}
