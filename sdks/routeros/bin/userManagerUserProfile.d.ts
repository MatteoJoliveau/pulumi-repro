import * as pulumi from "@pulumi/pulumi";
export declare class UserManagerUserProfile extends pulumi.CustomResource {
    /**
     * Get an existing UserManagerUserProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserManagerUserProfileState, opts?: pulumi.CustomResourceOptions): UserManagerUserProfile;
    /**
     * Returns true if the given object is an instance of UserManagerUserProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is UserManagerUserProfile;
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
     * Name of the profile to assign to the user.
     */
    readonly profile: pulumi.Output<string>;
    /**
     * Name of the user to use the specified profile.
     */
    readonly user: pulumi.Output<string>;
    readonly userManagerUserProfileId: pulumi.Output<string>;
    /**
     * Create a UserManagerUserProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserManagerUserProfileArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering UserManagerUserProfile resources.
 */
export interface UserManagerUserProfileState {
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
     * Name of the profile to assign to the user.
     */
    profile?: pulumi.Input<string>;
    /**
     * Name of the user to use the specified profile.
     */
    user?: pulumi.Input<string>;
    userManagerUserProfileId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a UserManagerUserProfile resource.
 */
export interface UserManagerUserProfileArgs {
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
     * Name of the profile to assign to the user.
     */
    profile: pulumi.Input<string>;
    /**
     * Name of the user to use the specified profile.
     */
    user: pulumi.Input<string>;
    userManagerUserProfileId?: pulumi.Input<string>;
}
