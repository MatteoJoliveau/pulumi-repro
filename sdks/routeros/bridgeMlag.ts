// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class BridgeMlag extends pulumi.CustomResource {
    /**
     * Get an existing BridgeMlag resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BridgeMlagState, opts?: pulumi.CustomResourceOptions): BridgeMlag {
        return new BridgeMlag(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/bridgeMlag:BridgeMlag';

    /**
     * Returns true if the given object is an instance of BridgeMlag.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BridgeMlag {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BridgeMlag.__pulumiType;
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
     * The bridge interface where MLAG is being created.
     */
    public readonly bridge!: pulumi.Output<string>;
    public readonly bridgeMlagId!: pulumi.Output<string>;
    /**
     * An interface that will be used as a peer port. Both peer devices are using inter-chassis communication over these peer
     * ports to establish MLAG and update the host table. Peer port should be isolated on a different untagged VLAN using a
     * pvid setting. Peer port can be configured as a bonding interface.
     */
    public readonly peerPort!: pulumi.Output<string>;

    /**
     * Create a BridgeMlag resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BridgeMlagArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BridgeMlagArgs | BridgeMlagState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BridgeMlagState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["bridge"] = state ? state.bridge : undefined;
            resourceInputs["bridgeMlagId"] = state ? state.bridgeMlagId : undefined;
            resourceInputs["peerPort"] = state ? state.peerPort : undefined;
        } else {
            const args = argsOrState as BridgeMlagArgs | undefined;
            if ((!args || args.bridge === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bridge'");
            }
            if ((!args || args.peerPort === undefined) && !opts.urn) {
                throw new Error("Missing required property 'peerPort'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["bridge"] = args ? args.bridge : undefined;
            resourceInputs["bridgeMlagId"] = args ? args.bridgeMlagId : undefined;
            resourceInputs["peerPort"] = args ? args.peerPort : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BridgeMlag.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BridgeMlag resources.
 */
export interface BridgeMlagState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The bridge interface where MLAG is being created.
     */
    bridge?: pulumi.Input<string>;
    bridgeMlagId?: pulumi.Input<string>;
    /**
     * An interface that will be used as a peer port. Both peer devices are using inter-chassis communication over these peer
     * ports to establish MLAG and update the host table. Peer port should be isolated on a different untagged VLAN using a
     * pvid setting. Peer port can be configured as a bonding interface.
     */
    peerPort?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a BridgeMlag resource.
 */
export interface BridgeMlagArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The bridge interface where MLAG is being created.
     */
    bridge: pulumi.Input<string>;
    bridgeMlagId?: pulumi.Input<string>;
    /**
     * An interface that will be used as a peer port. Both peer devices are using inter-chassis communication over these peer
     * ports to establish MLAG and update the host table. Peer port should be isolated on a different untagged VLAN using a
     * pvid setting. Peer port can be configured as a bonding interface.
     */
    peerPort: pulumi.Input<string>;
}
