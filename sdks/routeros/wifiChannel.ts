// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class WifiChannel extends pulumi.CustomResource {
    /**
     * Get an existing WifiChannel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WifiChannelState, opts?: pulumi.CustomResourceOptions): WifiChannel {
        return new WifiChannel(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/wifiChannel:WifiChannel';

    /**
     * Returns true if the given object is an instance of WifiChannel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WifiChannel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WifiChannel.__pulumiType;
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
     * Frequency band and wireless standard that will be used by the AP.
     */
    public readonly band!: pulumi.Output<string | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * Channel frequency value or range in MHz on which AP or station will operate.
     */
    public readonly frequencies!: pulumi.Output<string[] | undefined>;
    /**
     * Name of the channel.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * An option that specifies when the interface should rescan channel availability and select the most appropriate one to
     * use.
     */
    public readonly reselectInterval!: pulumi.Output<string | undefined>;
    /**
     * Specifies the second frequency that will be used for 80+80MHz configuration. Set it to `disabled` in order to disable
     * 80+80MHz capability.
     */
    public readonly secondaryFrequencies!: pulumi.Output<string[] | undefined>;
    /**
     * An option to avoid using channels on which channel availability check (listening for the presence of radar signals) is
     * required.
     */
    public readonly skipDfsChannels!: pulumi.Output<string | undefined>;
    /**
     * Channel width.
     */
    public readonly width!: pulumi.Output<string | undefined>;
    public readonly wifiChannelId!: pulumi.Output<string>;

    /**
     * Create a WifiChannel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WifiChannelArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WifiChannelArgs | WifiChannelState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WifiChannelState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["band"] = state ? state.band : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["frequencies"] = state ? state.frequencies : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["reselectInterval"] = state ? state.reselectInterval : undefined;
            resourceInputs["secondaryFrequencies"] = state ? state.secondaryFrequencies : undefined;
            resourceInputs["skipDfsChannels"] = state ? state.skipDfsChannels : undefined;
            resourceInputs["width"] = state ? state.width : undefined;
            resourceInputs["wifiChannelId"] = state ? state.wifiChannelId : undefined;
        } else {
            const args = argsOrState as WifiChannelArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["band"] = args ? args.band : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["frequencies"] = args ? args.frequencies : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["reselectInterval"] = args ? args.reselectInterval : undefined;
            resourceInputs["secondaryFrequencies"] = args ? args.secondaryFrequencies : undefined;
            resourceInputs["skipDfsChannels"] = args ? args.skipDfsChannels : undefined;
            resourceInputs["width"] = args ? args.width : undefined;
            resourceInputs["wifiChannelId"] = args ? args.wifiChannelId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WifiChannel.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
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
