import * as pulumi from "@pulumi/pulumi";
export declare class WifiChannel extends pulumi.CustomResource {
    /**
     * Get an existing WifiChannel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WifiChannelState, opts?: pulumi.CustomResourceOptions): WifiChannel;
    /**
     * Returns true if the given object is an instance of WifiChannel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WifiChannel;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Frequency band and wireless standard that will be used by the AP.
     */
    readonly band: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Channel frequency value or range in MHz on which AP or station will operate.
     */
    readonly frequencies: pulumi.Output<string[] | undefined>;
    /**
     * Name of the channel.
     */
    readonly name: pulumi.Output<string>;
    /**
     * An option that specifies when the interface should rescan channel availability and select the most appropriate one to
     * use.
     */
    readonly reselectInterval: pulumi.Output<string | undefined>;
    /**
     * Specifies the second frequency that will be used for 80+80MHz configuration. Set it to `disabled` in order to disable
     * 80+80MHz capability.
     */
    readonly secondaryFrequencies: pulumi.Output<string[] | undefined>;
    /**
     * An option to avoid using channels on which channel availability check (listening for the presence of radar signals) is
     * required.
     */
    readonly skipDfsChannels: pulumi.Output<string | undefined>;
    /**
     * Channel width.
     */
    readonly width: pulumi.Output<string | undefined>;
    readonly wifiChannelId: pulumi.Output<string>;
    /**
     * Create a WifiChannel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WifiChannelArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering WifiChannel resources.
 */
export interface WifiChannelState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Frequency band and wireless standard that will be used by the AP.
     */
    band?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Channel frequency value or range in MHz on which AP or station will operate.
     */
    frequencies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the channel.
     */
    name?: pulumi.Input<string>;
    /**
     * An option that specifies when the interface should rescan channel availability and select the most appropriate one to
     * use.
     */
    reselectInterval?: pulumi.Input<string>;
    /**
     * Specifies the second frequency that will be used for 80+80MHz configuration. Set it to `disabled` in order to disable
     * 80+80MHz capability.
     */
    secondaryFrequencies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An option to avoid using channels on which channel availability check (listening for the presence of radar signals) is
     * required.
     */
    skipDfsChannels?: pulumi.Input<string>;
    /**
     * Channel width.
     */
    width?: pulumi.Input<string>;
    wifiChannelId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a WifiChannel resource.
 */
export interface WifiChannelArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Frequency band and wireless standard that will be used by the AP.
     */
    band?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Channel frequency value or range in MHz on which AP or station will operate.
     */
    frequencies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the channel.
     */
    name?: pulumi.Input<string>;
    /**
     * An option that specifies when the interface should rescan channel availability and select the most appropriate one to
     * use.
     */
    reselectInterval?: pulumi.Input<string>;
    /**
     * Specifies the second frequency that will be used for 80+80MHz configuration. Set it to `disabled` in order to disable
     * 80+80MHz capability.
     */
    secondaryFrequencies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An option to avoid using channels on which channel availability check (listening for the presence of radar signals) is
     * required.
     */
    skipDfsChannels?: pulumi.Input<string>;
    /**
     * Channel width.
     */
    width?: pulumi.Input<string>;
    wifiChannelId?: pulumi.Input<string>;
}
