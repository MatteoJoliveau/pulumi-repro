// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class RadiusIncoming extends pulumi.CustomResource {
    /**
     * Get an existing RadiusIncoming resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RadiusIncomingState, opts?: pulumi.CustomResourceOptions): RadiusIncoming {
        return new RadiusIncoming(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/radiusIncoming:RadiusIncoming';

    /**
     * Returns true if the given object is an instance of RadiusIncoming.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RadiusIncoming {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RadiusIncoming.__pulumiType;
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
     * An option whether to accept the unsolicited messages.
     */
    public readonly accept!: pulumi.Output<boolean | undefined>;
    /**
     * The port number to listen for the requests on.
     */
    public readonly port!: pulumi.Output<number | undefined>;
    public readonly radiusIncomingId!: pulumi.Output<string>;
    /**
     * VRF on which service is listening for incoming connections. This option is available in RouterOS starting from version
     * 7.4.
     */
    public readonly vrf!: pulumi.Output<string | undefined>;

    /**
     * Create a RadiusIncoming resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: RadiusIncomingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RadiusIncomingArgs | RadiusIncomingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RadiusIncomingState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["accept"] = state ? state.accept : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["radiusIncomingId"] = state ? state.radiusIncomingId : undefined;
            resourceInputs["vrf"] = state ? state.vrf : undefined;
        } else {
            const args = argsOrState as RadiusIncomingArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["accept"] = args ? args.accept : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["radiusIncomingId"] = args ? args.radiusIncomingId : undefined;
            resourceInputs["vrf"] = args ? args.vrf : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RadiusIncoming.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RadiusIncoming resources.
 */
export interface RadiusIncomingState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option whether to accept the unsolicited messages.
     */
    accept?: pulumi.Input<boolean>;
    /**
     * The port number to listen for the requests on.
     */
    port?: pulumi.Input<number>;
    radiusIncomingId?: pulumi.Input<string>;
    /**
     * VRF on which service is listening for incoming connections. This option is available in RouterOS starting from version
     * 7.4.
     */
    vrf?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RadiusIncoming resource.
 */
export interface RadiusIncomingArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option whether to accept the unsolicited messages.
     */
    accept?: pulumi.Input<boolean>;
    /**
     * The port number to listen for the requests on.
     */
    port?: pulumi.Input<number>;
    radiusIncomingId?: pulumi.Input<string>;
    /**
     * VRF on which service is listening for incoming connections. This option is available in RouterOS starting from version
     * 7.4.
     */
    vrf?: pulumi.Input<string>;
}
