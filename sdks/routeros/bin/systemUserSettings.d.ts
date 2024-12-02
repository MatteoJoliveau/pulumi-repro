import * as pulumi from "@pulumi/pulumi";
export declare class SystemUserSettings extends pulumi.CustomResource {
    /**
     * Get an existing SystemUserSettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemUserSettingsState, opts?: pulumi.CustomResourceOptions): SystemUserSettings;
    /**
     * Returns true if the given object is an instance of SystemUserSettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SystemUserSettings;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * An option specifies the complexity requirements of the password, with categories being uppercase, lowercase, digit, and
     * symbol.
     */
    readonly minimumCategories: pulumi.Output<number | undefined>;
    /**
     * An option specifies the minimum length of the password.
     */
    readonly minimumPasswordLength: pulumi.Output<number | undefined>;
    readonly systemUserSettingsId: pulumi.Output<string>;
    /**
     * Create a SystemUserSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemUserSettingsArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SystemUserSettings resources.
 */
export interface SystemUserSettingsState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option specifies the complexity requirements of the password, with categories being uppercase, lowercase, digit, and
     * symbol.
     */
    minimumCategories?: pulumi.Input<number>;
    /**
     * An option specifies the minimum length of the password.
     */
    minimumPasswordLength?: pulumi.Input<number>;
    systemUserSettingsId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SystemUserSettings resource.
 */
export interface SystemUserSettingsArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option specifies the complexity requirements of the password, with categories being uppercase, lowercase, digit, and
     * symbol.
     */
    minimumCategories?: pulumi.Input<number>;
    /**
     * An option specifies the minimum length of the password.
     */
    minimumPasswordLength?: pulumi.Input<number>;
    systemUserSettingsId?: pulumi.Input<string>;
}
