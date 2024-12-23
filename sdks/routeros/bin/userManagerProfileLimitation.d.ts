import * as pulumi from "@pulumi/pulumi";
export declare class UserManagerProfileLimitation extends pulumi.CustomResource {
    /**
     * Get an existing UserManagerProfileLimitation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserManagerProfileLimitationState, opts?: pulumi.CustomResourceOptions): UserManagerProfileLimitation;
    /**
     * Returns true if the given object is an instance of UserManagerProfileLimitation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is UserManagerProfileLimitation;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Time of the day when the limitation should take place.
     */
    readonly fromTime: pulumi.Output<string | undefined>;
    /**
     * The limitation name.
     */
    readonly limitation: pulumi.Output<string>;
    /**
     * The profile name.
     */
    readonly profile: pulumi.Output<string>;
    /**
     * Time of the day when the limitation should end.
     */
    readonly tillTime: pulumi.Output<string | undefined>;
    readonly userManagerProfileLimitationId: pulumi.Output<string>;
    /**
     * Days of the week when the limitation is active.
     */
    readonly weekdays: pulumi.Output<string[] | undefined>;
    /**
     * Create a UserManagerProfileLimitation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserManagerProfileLimitationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering UserManagerProfileLimitation resources.
 */
export interface UserManagerProfileLimitationState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Time of the day when the limitation should take place.
     */
    fromTime?: pulumi.Input<string>;
    /**
     * The limitation name.
     */
    limitation?: pulumi.Input<string>;
    /**
     * The profile name.
     */
    profile?: pulumi.Input<string>;
    /**
     * Time of the day when the limitation should end.
     */
    tillTime?: pulumi.Input<string>;
    userManagerProfileLimitationId?: pulumi.Input<string>;
    /**
     * Days of the week when the limitation is active.
     */
    weekdays?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a UserManagerProfileLimitation resource.
 */
export interface UserManagerProfileLimitationArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Time of the day when the limitation should take place.
     */
    fromTime?: pulumi.Input<string>;
    /**
     * The limitation name.
     */
    limitation: pulumi.Input<string>;
    /**
     * The profile name.
     */
    profile: pulumi.Input<string>;
    /**
     * Time of the day when the limitation should end.
     */
    tillTime?: pulumi.Input<string>;
    userManagerProfileLimitationId?: pulumi.Input<string>;
    /**
     * Days of the week when the limitation is active.
     */
    weekdays?: pulumi.Input<pulumi.Input<string>[]>;
}
