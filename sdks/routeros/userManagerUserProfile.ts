// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class UserManagerUserProfile extends pulumi.CustomResource {
    /**
     * Get an existing UserManagerUserProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserManagerUserProfileState, opts?: pulumi.CustomResourceOptions): UserManagerUserProfile {
        return new UserManagerUserProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/userManagerUserProfile:UserManagerUserProfile';

    /**
     * Returns true if the given object is an instance of UserManagerUserProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UserManagerUserProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UserManagerUserProfile.__pulumiType;
    }

    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    public readonly ___id_!: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    public readonly ___path_!: pulumi.Output<string | undefined>;
    /**
     * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
     */
    public readonly ___skip_!: pulumi.Output<string | undefined>;
    /**
     * Name of the profile to assign to the user.
     */
    public readonly profile!: pulumi.Output<string>;
    /**
     * Name of the user to use the specified profile.
     */
    public readonly user!: pulumi.Output<string>;
    public readonly userManagerUserProfileId!: pulumi.Output<string>;

    /**
     * Create a UserManagerUserProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserManagerUserProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserManagerUserProfileArgs | UserManagerUserProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UserManagerUserProfileState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["___skip_"] = state ? state.___skip_ : undefined;
            resourceInputs["profile"] = state ? state.profile : undefined;
            resourceInputs["user"] = state ? state.user : undefined;
            resourceInputs["userManagerUserProfileId"] = state ? state.userManagerUserProfileId : undefined;
        } else {
            const args = argsOrState as UserManagerUserProfileArgs | undefined;
            if ((!args || args.profile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profile'");
            }
            if ((!args || args.user === undefined) && !opts.urn) {
                throw new Error("Missing required property 'user'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["___skip_"] = args ? args.___skip_ : undefined;
            resourceInputs["profile"] = args ? args.profile : undefined;
            resourceInputs["user"] = args ? args.user : undefined;
            resourceInputs["userManagerUserProfileId"] = args ? args.userManagerUserProfileId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(UserManagerUserProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
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
