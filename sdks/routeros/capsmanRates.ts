// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CapsmanRates extends pulumi.CustomResource {
    /**
     * Get an existing CapsmanRates resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CapsmanRatesState, opts?: pulumi.CustomResourceOptions): CapsmanRates {
        return new CapsmanRates(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/capsmanRates:CapsmanRates';

    /**
     * Returns true if the given object is an instance of CapsmanRates.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CapsmanRates {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CapsmanRates.__pulumiType;
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
     * List of basic rates. Client will connect to AP only if it supports all basic rates announced by the AP. AP will
     * establish WDS link only if it supports all basic rates of the other AP.
     */
    public readonly basics!: pulumi.Output<string[] | undefined>;
    public readonly capsmanRatesId!: pulumi.Output<string>;
    public readonly comment!: pulumi.Output<string | undefined>;
    /**
     * Modulation and Coding Schemes that every connecting client must support. Refer to 802.11n for MCS specification.
     */
    public readonly htBasicMcs!: pulumi.Output<string[]>;
    /**
     * Modulation and Coding Schemes that this device advertises as supported. Refer to 802.11n for MCS specification.
     */
    public readonly htSupportedMcs!: pulumi.Output<string[]>;
    public readonly name!: pulumi.Output<string>;
    /**
     * List of supported rates. Two devices will communicate only using rates that are supported by both devices.
     */
    public readonly supporteds!: pulumi.Output<string[] | undefined>;
    /**
     * Modulation and Coding Schemes that every connecting client must support. Refer to 802.11ac for MCS specification. You
     * can set MCS interval for each of Spatial Stream none - will not use selected Spatial Stream MCS 0-7 - client must
     * support MCS-0 to MCS-7 MCS 0-8 - client must support MCS-0 to MCS-8 MCS 0-9 - client must support MCS-0 to MCS-9
     */
    public readonly vhtBasicMcs!: pulumi.Output<string>;
    /**
     * Modulation and Coding Schemes that this device advertises as supported. Refer to 802.11ac for MCS specification. You can
     * set MCS interval for each of Spatial Stream none - will not use selected Spatial Stream MCS 0-7 - devices will advertise
     * as supported MCS-0 to MCS-7 MCS 0-8 - devices will advertise as supported MCS-0 to MCS-8 MCS 0-9 - devices will
     * advertise as supported MCS-0 to MCS-9
     */
    public readonly vhtSupportedMcs!: pulumi.Output<string>;

    /**
     * Create a CapsmanRates resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CapsmanRatesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CapsmanRatesArgs | CapsmanRatesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CapsmanRatesState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["basics"] = state ? state.basics : undefined;
            resourceInputs["capsmanRatesId"] = state ? state.capsmanRatesId : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["htBasicMcs"] = state ? state.htBasicMcs : undefined;
            resourceInputs["htSupportedMcs"] = state ? state.htSupportedMcs : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["supporteds"] = state ? state.supporteds : undefined;
            resourceInputs["vhtBasicMcs"] = state ? state.vhtBasicMcs : undefined;
            resourceInputs["vhtSupportedMcs"] = state ? state.vhtSupportedMcs : undefined;
        } else {
            const args = argsOrState as CapsmanRatesArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["basics"] = args ? args.basics : undefined;
            resourceInputs["capsmanRatesId"] = args ? args.capsmanRatesId : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["htBasicMcs"] = args ? args.htBasicMcs : undefined;
            resourceInputs["htSupportedMcs"] = args ? args.htSupportedMcs : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["supporteds"] = args ? args.supporteds : undefined;
            resourceInputs["vhtBasicMcs"] = args ? args.vhtBasicMcs : undefined;
            resourceInputs["vhtSupportedMcs"] = args ? args.vhtSupportedMcs : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CapsmanRates.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CapsmanRates resources.
 */
export interface CapsmanRatesState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * List of basic rates. Client will connect to AP only if it supports all basic rates announced by the AP. AP will
     * establish WDS link only if it supports all basic rates of the other AP.
     */
    basics?: pulumi.Input<pulumi.Input<string>[]>;
    capsmanRatesId?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Modulation and Coding Schemes that every connecting client must support. Refer to 802.11n for MCS specification.
     */
    htBasicMcs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Modulation and Coding Schemes that this device advertises as supported. Refer to 802.11n for MCS specification.
     */
    htSupportedMcs?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    /**
     * List of supported rates. Two devices will communicate only using rates that are supported by both devices.
     */
    supporteds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Modulation and Coding Schemes that every connecting client must support. Refer to 802.11ac for MCS specification. You
     * can set MCS interval for each of Spatial Stream none - will not use selected Spatial Stream MCS 0-7 - client must
     * support MCS-0 to MCS-7 MCS 0-8 - client must support MCS-0 to MCS-8 MCS 0-9 - client must support MCS-0 to MCS-9
     */
    vhtBasicMcs?: pulumi.Input<string>;
    /**
     * Modulation and Coding Schemes that this device advertises as supported. Refer to 802.11ac for MCS specification. You can
     * set MCS interval for each of Spatial Stream none - will not use selected Spatial Stream MCS 0-7 - devices will advertise
     * as supported MCS-0 to MCS-7 MCS 0-8 - devices will advertise as supported MCS-0 to MCS-8 MCS 0-9 - devices will
     * advertise as supported MCS-0 to MCS-9
     */
    vhtSupportedMcs?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CapsmanRates resource.
 */
export interface CapsmanRatesArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * List of basic rates. Client will connect to AP only if it supports all basic rates announced by the AP. AP will
     * establish WDS link only if it supports all basic rates of the other AP.
     */
    basics?: pulumi.Input<pulumi.Input<string>[]>;
    capsmanRatesId?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Modulation and Coding Schemes that every connecting client must support. Refer to 802.11n for MCS specification.
     */
    htBasicMcs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Modulation and Coding Schemes that this device advertises as supported. Refer to 802.11n for MCS specification.
     */
    htSupportedMcs?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    /**
     * List of supported rates. Two devices will communicate only using rates that are supported by both devices.
     */
    supporteds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Modulation and Coding Schemes that every connecting client must support. Refer to 802.11ac for MCS specification. You
     * can set MCS interval for each of Spatial Stream none - will not use selected Spatial Stream MCS 0-7 - client must
     * support MCS-0 to MCS-7 MCS 0-8 - client must support MCS-0 to MCS-8 MCS 0-9 - client must support MCS-0 to MCS-9
     */
    vhtBasicMcs?: pulumi.Input<string>;
    /**
     * Modulation and Coding Schemes that this device advertises as supported. Refer to 802.11ac for MCS specification. You can
     * set MCS interval for each of Spatial Stream none - will not use selected Spatial Stream MCS 0-7 - devices will advertise
     * as supported MCS-0 to MCS-7 MCS 0-8 - devices will advertise as supported MCS-0 to MCS-8 MCS 0-9 - devices will
     * advertise as supported MCS-0 to MCS-9
     */
    vhtSupportedMcs?: pulumi.Input<string>;
}
