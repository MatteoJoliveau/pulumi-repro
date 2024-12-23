// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class InterfaceVxlanVteps extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceVxlanVteps resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceVxlanVtepsState, opts?: pulumi.CustomResourceOptions): InterfaceVxlanVteps {
        return new InterfaceVxlanVteps(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/interfaceVxlanVteps:InterfaceVxlanVteps';

    /**
     * Returns true if the given object is an instance of InterfaceVxlanVteps.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InterfaceVxlanVteps {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InterfaceVxlanVteps.__pulumiType;
    }

    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    public readonly ___id_!: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    public readonly ___path_!: pulumi.Output<string | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    /**
     * Name of the interface.
     */
    public readonly interface!: pulumi.Output<string>;
    public readonly interfaceVxlanVtepsId!: pulumi.Output<string>;
    /**
     * Used UDP port number.
     */
    public readonly port!: pulumi.Output<number | undefined>;
    /**
     * The IPv4 or IPv6 destination address of remote VTEP.
     */
    public readonly remoteIp!: pulumi.Output<string | undefined>;

    /**
     * Create a InterfaceVxlanVteps resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterfaceVxlanVtepsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InterfaceVxlanVtepsArgs | InterfaceVxlanVtepsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as InterfaceVxlanVtepsState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["interfaceVxlanVtepsId"] = state ? state.interfaceVxlanVtepsId : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["remoteIp"] = state ? state.remoteIp : undefined;
        } else {
            const args = argsOrState as InterfaceVxlanVtepsArgs | undefined;
            if ((!args || args.interface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interface'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["interfaceVxlanVtepsId"] = args ? args.interfaceVxlanVtepsId : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["remoteIp"] = args ? args.remoteIp : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(InterfaceVxlanVteps.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering InterfaceVxlanVteps resources.
 */
export interface InterfaceVxlanVtepsState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Name of the interface.
     */
    interface?: pulumi.Input<string>;
    interfaceVxlanVtepsId?: pulumi.Input<string>;
    /**
     * Used UDP port number.
     */
    port?: pulumi.Input<number>;
    /**
     * The IPv4 or IPv6 destination address of remote VTEP.
     */
    remoteIp?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a InterfaceVxlanVteps resource.
 */
export interface InterfaceVxlanVtepsArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Name of the interface.
     */
    interface: pulumi.Input<string>;
    interfaceVxlanVtepsId?: pulumi.Input<string>;
    /**
     * Used UDP port number.
     */
    port?: pulumi.Input<number>;
    /**
     * The IPv4 or IPv6 destination address of remote VTEP.
     */
    remoteIp?: pulumi.Input<string>;
}
