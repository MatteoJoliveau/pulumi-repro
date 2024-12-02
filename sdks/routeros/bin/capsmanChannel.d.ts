import * as pulumi from "@pulumi/pulumi";
export declare class CapsmanChannel extends pulumi.CustomResource {
    /**
     * Get an existing CapsmanChannel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CapsmanChannelState, opts?: pulumi.CustomResourceOptions): CapsmanChannel;
    /**
     * Returns true if the given object is an instance of CapsmanChannel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CapsmanChannel;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Define operational radio frequency band and mode taken from hardware capability of wireless card.
     */
    readonly band: pulumi.Output<string | undefined>;
    readonly capsmanChannelId: pulumi.Output<string>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * Control channel width.
     */
    readonly controlChannelWidth: pulumi.Output<string | undefined>;
    /**
     * Extension channel configuration. (E.g. Ce = extension channel is above Control channel, eC = extension channel is below
     * Control channel)
     */
    readonly extensionChannel: pulumi.Output<string | undefined>;
    /**
     * Channel frequency value in MHz on which AP will operate. If left blank, CAPsMAN will automatically determine the best
     * frequency that is least occupied.
     */
    readonly frequencies: pulumi.Output<number[] | undefined>;
    readonly name: pulumi.Output<string>;
    /**
     * The interval after which the least occupied frequency is chosen, can be defined as a random interval, ex. as '30m..60m'.
     * Works only if channel.frequency is left blank.
     */
    readonly reselectInterval: pulumi.Output<string | undefined>;
    /**
     * If channel frequency is chosen automatically and channel.reselect-interval is used, then saves the last picked
     * frequency.
     */
    readonly saveSelected: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the second frequency that will be used for 80+80MHz configuration. Set it to Disabled in order to disable
     * 80+80MHz capability.
     */
    readonly secondaryFrequencies: pulumi.Output<string[] | undefined>;
    /**
     * If channel.frequency is left blank, the selection will skip DFS channels.
     */
    readonly skipDfsChannels: pulumi.Output<boolean | undefined>;
    /**
     * TX Power for CAP interface (for the whole interface not for individual chains) in dBm. It is not possible to set higher
     * than allowed by country regulations or interface. By default max allowed by country or interface is used.
     */
    readonly txPower: pulumi.Output<number | undefined>;
    /**
     * Channel Width in MHz.
     */
    readonly width: pulumi.Output<string | undefined>;
    /**
     * Create a CapsmanChannel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CapsmanChannelArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering CapsmanChannel resources.
 */
export interface CapsmanChannelState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Define operational radio frequency band and mode taken from hardware capability of wireless card.
     */
    band?: pulumi.Input<string>;
    capsmanChannelId?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Control channel width.
     */
    controlChannelWidth?: pulumi.Input<string>;
    /**
     * Extension channel configuration. (E.g. Ce = extension channel is above Control channel, eC = extension channel is below
     * Control channel)
     */
    extensionChannel?: pulumi.Input<string>;
    /**
     * Channel frequency value in MHz on which AP will operate. If left blank, CAPsMAN will automatically determine the best
     * frequency that is least occupied.
     */
    frequencies?: pulumi.Input<pulumi.Input<number>[]>;
    name?: pulumi.Input<string>;
    /**
     * The interval after which the least occupied frequency is chosen, can be defined as a random interval, ex. as '30m..60m'.
     * Works only if channel.frequency is left blank.
     */
    reselectInterval?: pulumi.Input<string>;
    /**
     * If channel frequency is chosen automatically and channel.reselect-interval is used, then saves the last picked
     * frequency.
     */
    saveSelected?: pulumi.Input<boolean>;
    /**
     * Specifies the second frequency that will be used for 80+80MHz configuration. Set it to Disabled in order to disable
     * 80+80MHz capability.
     */
    secondaryFrequencies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * If channel.frequency is left blank, the selection will skip DFS channels.
     */
    skipDfsChannels?: pulumi.Input<boolean>;
    /**
     * TX Power for CAP interface (for the whole interface not for individual chains) in dBm. It is not possible to set higher
     * than allowed by country regulations or interface. By default max allowed by country or interface is used.
     */
    txPower?: pulumi.Input<number>;
    /**
     * Channel Width in MHz.
     */
    width?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a CapsmanChannel resource.
 */
export interface CapsmanChannelArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Define operational radio frequency band and mode taken from hardware capability of wireless card.
     */
    band?: pulumi.Input<string>;
    capsmanChannelId?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Control channel width.
     */
    controlChannelWidth?: pulumi.Input<string>;
    /**
     * Extension channel configuration. (E.g. Ce = extension channel is above Control channel, eC = extension channel is below
     * Control channel)
     */
    extensionChannel?: pulumi.Input<string>;
    /**
     * Channel frequency value in MHz on which AP will operate. If left blank, CAPsMAN will automatically determine the best
     * frequency that is least occupied.
     */
    frequencies?: pulumi.Input<pulumi.Input<number>[]>;
    name?: pulumi.Input<string>;
    /**
     * The interval after which the least occupied frequency is chosen, can be defined as a random interval, ex. as '30m..60m'.
     * Works only if channel.frequency is left blank.
     */
    reselectInterval?: pulumi.Input<string>;
    /**
     * If channel frequency is chosen automatically and channel.reselect-interval is used, then saves the last picked
     * frequency.
     */
    saveSelected?: pulumi.Input<boolean>;
    /**
     * Specifies the second frequency that will be used for 80+80MHz configuration. Set it to Disabled in order to disable
     * 80+80MHz capability.
     */
    secondaryFrequencies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * If channel.frequency is left blank, the selection will skip DFS channels.
     */
    skipDfsChannels?: pulumi.Input<boolean>;
    /**
     * TX Power for CAP interface (for the whole interface not for individual chains) in dBm. It is not possible to set higher
     * than allowed by country regulations or interface. By default max allowed by country or interface is used.
     */
    txPower?: pulumi.Input<number>;
    /**
     * Channel Width in MHz.
     */
    width?: pulumi.Input<string>;
}
