import * as pulumi from "@pulumi/pulumi";
export declare class UserManagerUser extends pulumi.CustomResource {
    /**
     * Get an existing UserManagerUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserManagerUserState, opts?: pulumi.CustomResourceOptions): UserManagerUser;
    /**
     * Returns true if the given object is an instance of UserManagerUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is UserManagerUser;
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
     * Allow user's authentication with a specific Calling-Station-Id value.
     */
    readonly callerId: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Name of the group the user is associated with.
     */
    readonly group: pulumi.Output<string | undefined>;
    /**
     * Username for session authentication.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A token of a one-time code that will be attached to the password.
     */
    readonly otpSecret: pulumi.Output<string | undefined>;
    /**
     * The password of the user for session authentication.
     */
    readonly password: pulumi.Output<string | undefined>;
    /**
     * The total amount of sessions the user can simultaneously establish.
     */
    readonly sharedUsers: pulumi.Output<number | undefined>;
    readonly userManagerUserId: pulumi.Output<string>;
    /**
     * Create a UserManagerUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: UserManagerUserArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering UserManagerUser resources.
 */
export interface UserManagerUserState {
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
     * Allow user's authentication with a specific Calling-Station-Id value.
     */
    callerId?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Name of the group the user is associated with.
     */
    group?: pulumi.Input<string>;
    /**
     * Username for session authentication.
     */
    name?: pulumi.Input<string>;
    /**
     * A token of a one-time code that will be attached to the password.
     */
    otpSecret?: pulumi.Input<string>;
    /**
     * The password of the user for session authentication.
     */
    password?: pulumi.Input<string>;
    /**
     * The total amount of sessions the user can simultaneously establish.
     */
    sharedUsers?: pulumi.Input<number>;
    userManagerUserId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a UserManagerUser resource.
 */
export interface UserManagerUserArgs {
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
     * Allow user's authentication with a specific Calling-Station-Id value.
     */
    callerId?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Name of the group the user is associated with.
     */
    group?: pulumi.Input<string>;
    /**
     * Username for session authentication.
     */
    name?: pulumi.Input<string>;
    /**
     * A token of a one-time code that will be attached to the password.
     */
    otpSecret?: pulumi.Input<string>;
    /**
     * The password of the user for session authentication.
     */
    password?: pulumi.Input<string>;
    /**
     * The total amount of sessions the user can simultaneously establish.
     */
    sharedUsers?: pulumi.Input<number>;
    userManagerUserId?: pulumi.Input<string>;
}
