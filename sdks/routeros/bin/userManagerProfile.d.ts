import * as pulumi from "@pulumi/pulumi";
export declare class UserManagerProfile extends pulumi.CustomResource {
    /**
     * Get an existing UserManagerProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserManagerProfileState, opts?: pulumi.CustomResourceOptions): UserManagerProfile;
    /**
     * Returns true if the given object is an instance of UserManagerProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is UserManagerProfile;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Unique name of the profile.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name that will be shown to users in the web interface.
     */
    readonly nameForUsers: pulumi.Output<string | undefined>;
    /**
     * An option whether to allow multiple sessions with the same user name.
     */
    readonly overrideSharedUsers: pulumi.Output<string | undefined>;
    /**
     * The price of the profile.
     */
    readonly price: pulumi.Output<number | undefined>;
    /**
     * The time when the profile becomes active (`assigned` - immediately when the profile entry is created, `first-auth` -
     * upon first authentication request).
     */
    readonly startsWhen: pulumi.Output<string | undefined>;
    readonly userManagerProfileId: pulumi.Output<string>;
    /**
     * The total amount of time a user can use this profile.
     */
    readonly validity: pulumi.Output<string | undefined>;
    /**
     * Create a UserManagerProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: UserManagerProfileArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering UserManagerProfile resources.
 */
export interface UserManagerProfileState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Unique name of the profile.
     */
    name?: pulumi.Input<string>;
    /**
     * The name that will be shown to users in the web interface.
     */
    nameForUsers?: pulumi.Input<string>;
    /**
     * An option whether to allow multiple sessions with the same user name.
     */
    overrideSharedUsers?: pulumi.Input<string>;
    /**
     * The price of the profile.
     */
    price?: pulumi.Input<number>;
    /**
     * The time when the profile becomes active (`assigned` - immediately when the profile entry is created, `first-auth` -
     * upon first authentication request).
     */
    startsWhen?: pulumi.Input<string>;
    userManagerProfileId?: pulumi.Input<string>;
    /**
     * The total amount of time a user can use this profile.
     */
    validity?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a UserManagerProfile resource.
 */
export interface UserManagerProfileArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Unique name of the profile.
     */
    name?: pulumi.Input<string>;
    /**
     * The name that will be shown to users in the web interface.
     */
    nameForUsers?: pulumi.Input<string>;
    /**
     * An option whether to allow multiple sessions with the same user name.
     */
    overrideSharedUsers?: pulumi.Input<string>;
    /**
     * The price of the profile.
     */
    price?: pulumi.Input<number>;
    /**
     * The time when the profile becomes active (`assigned` - immediately when the profile entry is created, `first-auth` -
     * upon first authentication request).
     */
    startsWhen?: pulumi.Input<string>;
    userManagerProfileId?: pulumi.Input<string>;
    /**
     * The total amount of time a user can use this profile.
     */
    validity?: pulumi.Input<string>;
}
