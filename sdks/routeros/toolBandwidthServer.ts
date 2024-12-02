// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ToolBandwidthServer extends pulumi.CustomResource {
    /**
     * Get an existing ToolBandwidthServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ToolBandwidthServerState, opts?: pulumi.CustomResourceOptions): ToolBandwidthServer {
        return new ToolBandwidthServer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/toolBandwidthServer:ToolBandwidthServer';

    /**
     * Returns true if the given object is an instance of ToolBandwidthServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ToolBandwidthServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ToolBandwidthServer.__pulumiType;
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
     * Beginning of UDP port range.
     */
    public readonly allocateUdpPortsFrom!: pulumi.Output<number | undefined>;
    /**
     * Communicate only with authenticated clients.
     */
    public readonly authenticate!: pulumi.Output<boolean | undefined>;
    /**
     * Defines whether bandwidth server is enabled or not.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Maximal simultaneous test count.
     */
    public readonly maxSessions!: pulumi.Output<number | undefined>;
    public readonly toolBandwidthServerId!: pulumi.Output<string>;

    /**
     * Create a ToolBandwidthServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ToolBandwidthServerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ToolBandwidthServerArgs | ToolBandwidthServerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ToolBandwidthServerState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["allocateUdpPortsFrom"] = state ? state.allocateUdpPortsFrom : undefined;
            resourceInputs["authenticate"] = state ? state.authenticate : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["maxSessions"] = state ? state.maxSessions : undefined;
            resourceInputs["toolBandwidthServerId"] = state ? state.toolBandwidthServerId : undefined;
        } else {
            const args = argsOrState as ToolBandwidthServerArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["allocateUdpPortsFrom"] = args ? args.allocateUdpPortsFrom : undefined;
            resourceInputs["authenticate"] = args ? args.authenticate : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["maxSessions"] = args ? args.maxSessions : undefined;
            resourceInputs["toolBandwidthServerId"] = args ? args.toolBandwidthServerId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ToolBandwidthServer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ToolBandwidthServer resources.
 */
export interface ToolBandwidthServerState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Beginning of UDP port range.
     */
    allocateUdpPortsFrom?: pulumi.Input<number>;
    /**
     * Communicate only with authenticated clients.
     */
    authenticate?: pulumi.Input<boolean>;
    /**
     * Defines whether bandwidth server is enabled or not.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Maximal simultaneous test count.
     */
    maxSessions?: pulumi.Input<number>;
    toolBandwidthServerId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ToolBandwidthServer resource.
 */
export interface ToolBandwidthServerArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Beginning of UDP port range.
     */
    allocateUdpPortsFrom?: pulumi.Input<number>;
    /**
     * Communicate only with authenticated clients.
     */
    authenticate?: pulumi.Input<boolean>;
    /**
     * Defines whether bandwidth server is enabled or not.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Maximal simultaneous test count.
     */
    maxSessions?: pulumi.Input<number>;
    toolBandwidthServerId?: pulumi.Input<string>;
}
