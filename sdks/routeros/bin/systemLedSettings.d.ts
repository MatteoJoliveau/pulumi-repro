import * as pulumi from "@pulumi/pulumi";
export declare class SystemLedSettings extends pulumi.CustomResource {
    /**
     * Get an existing SystemLedSettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemLedSettingsState, opts?: pulumi.CustomResourceOptions): SystemLedSettings;
    /**
     * Returns true if the given object is an instance of SystemLedSettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SystemLedSettings;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * An option to set when all LEDs should be turned off. Possible values: `after-1h`, `after-1min`, `immediate`, `never`.
     */
    readonly allLedsOff: pulumi.Output<string | undefined>;
    readonly systemLedSettingsId: pulumi.Output<string>;
    /**
     * Create a SystemLedSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemLedSettingsArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SystemLedSettings resources.
 */
export interface SystemLedSettingsState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option to set when all LEDs should be turned off. Possible values: `after-1h`, `after-1min`, `immediate`, `never`.
     */
    allLedsOff?: pulumi.Input<string>;
    systemLedSettingsId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SystemLedSettings resource.
 */
export interface SystemLedSettingsArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option to set when all LEDs should be turned off. Possible values: `after-1h`, `after-1min`, `immediate`, `never`.
     */
    allLedsOff?: pulumi.Input<string>;
    systemLedSettingsId?: pulumi.Input<string>;
}
