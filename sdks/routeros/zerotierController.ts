// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ZerotierController extends pulumi.CustomResource {
    /**
     * Get an existing ZerotierController resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZerotierControllerState, opts?: pulumi.CustomResourceOptions): ZerotierController {
        return new ZerotierController(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/zerotierController:ZerotierController';

    /**
     * Returns true if the given object is an instance of ZerotierController.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ZerotierController {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ZerotierController.__pulumiType;
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
     * An option to allow receiving broadcast packets.
     */
    public readonly broadcast!: pulumi.Output<boolean | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * A flag whether the ZeroTier network is inactive.
     */
    public /*out*/ readonly inactive!: pulumi.Output<boolean>;
    /**
     * The ZeroTier instance name.
     */
    public readonly instance!: pulumi.Output<string>;
    /**
     * An option to assign every member a `/80` address within a `/40` network with using NDP emulation.
     */
    public readonly ip66plane!: pulumi.Output<boolean | undefined>;
    /**
     * The IPv6 range of the ZeroTier network.
     */
    public readonly ip6Range!: pulumi.Output<string | undefined>;
    /**
     * An option to assign every member a `/128` address within a `/88` network.
     */
    public readonly ip6Rfc4193!: pulumi.Output<boolean | undefined>;
    /**
     * The IP range of the ZeroTier network.
     */
    public readonly ipRange!: pulumi.Output<string | undefined>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    public readonly mtu!: pulumi.Output<number | undefined>;
    /**
     * An option to limit the maximum recipients of a multicast packet.
     */
    public readonly multicastLimit!: pulumi.Output<number | undefined>;
    /**
     * Name of the ZeroTier controller.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The ZeroTier network identifier.
     */
    public readonly network!: pulumi.Output<string>;
    /**
     * The ZeroTier network access control.
     */
    public readonly private!: pulumi.Output<boolean | undefined>;
    /**
     * The routes list that will be pushed to the client.
     */
    public readonly routes!: pulumi.Output<string[] | undefined>;
    public readonly zerotierControllerId!: pulumi.Output<string>;

    /**
     * Create a ZerotierController resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZerotierControllerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ZerotierControllerArgs | ZerotierControllerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ZerotierControllerState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["broadcast"] = state ? state.broadcast : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["inactive"] = state ? state.inactive : undefined;
            resourceInputs["instance"] = state ? state.instance : undefined;
            resourceInputs["ip66plane"] = state ? state.ip66plane : undefined;
            resourceInputs["ip6Range"] = state ? state.ip6Range : undefined;
            resourceInputs["ip6Rfc4193"] = state ? state.ip6Rfc4193 : undefined;
            resourceInputs["ipRange"] = state ? state.ipRange : undefined;
            resourceInputs["mtu"] = state ? state.mtu : undefined;
            resourceInputs["multicastLimit"] = state ? state.multicastLimit : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["network"] = state ? state.network : undefined;
            resourceInputs["private"] = state ? state.private : undefined;
            resourceInputs["routes"] = state ? state.routes : undefined;
            resourceInputs["zerotierControllerId"] = state ? state.zerotierControllerId : undefined;
        } else {
            const args = argsOrState as ZerotierControllerArgs | undefined;
            if ((!args || args.instance === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instance'");
            }
            if ((!args || args.network === undefined) && !opts.urn) {
                throw new Error("Missing required property 'network'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["broadcast"] = args ? args.broadcast : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["instance"] = args ? args.instance : undefined;
            resourceInputs["ip66plane"] = args ? args.ip66plane : undefined;
            resourceInputs["ip6Range"] = args ? args.ip6Range : undefined;
            resourceInputs["ip6Rfc4193"] = args ? args.ip6Rfc4193 : undefined;
            resourceInputs["ipRange"] = args ? args.ipRange : undefined;
            resourceInputs["mtu"] = args ? args.mtu : undefined;
            resourceInputs["multicastLimit"] = args ? args.multicastLimit : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["network"] = args ? args.network : undefined;
            resourceInputs["private"] = args ? args.private : undefined;
            resourceInputs["routes"] = args ? args.routes : undefined;
            resourceInputs["zerotierControllerId"] = args ? args.zerotierControllerId : undefined;
            resourceInputs["inactive"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ZerotierController.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ZerotierController resources.
 */
export interface ZerotierControllerState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option to allow receiving broadcast packets.
     */
    broadcast?: pulumi.Input<boolean>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * A flag whether the ZeroTier network is inactive.
     */
    inactive?: pulumi.Input<boolean>;
    /**
     * The ZeroTier instance name.
     */
    instance?: pulumi.Input<string>;
    /**
     * An option to assign every member a `/80` address within a `/40` network with using NDP emulation.
     */
    ip66plane?: pulumi.Input<boolean>;
    /**
     * The IPv6 range of the ZeroTier network.
     */
    ip6Range?: pulumi.Input<string>;
    /**
     * An option to assign every member a `/128` address within a `/88` network.
     */
    ip6Rfc4193?: pulumi.Input<boolean>;
    /**
     * The IP range of the ZeroTier network.
     */
    ipRange?: pulumi.Input<string>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    mtu?: pulumi.Input<number>;
    /**
     * An option to limit the maximum recipients of a multicast packet.
     */
    multicastLimit?: pulumi.Input<number>;
    /**
     * Name of the ZeroTier controller.
     */
    name?: pulumi.Input<string>;
    /**
     * The ZeroTier network identifier.
     */
    network?: pulumi.Input<string>;
    /**
     * The ZeroTier network access control.
     */
    private?: pulumi.Input<boolean>;
    /**
     * The routes list that will be pushed to the client.
     */
    routes?: pulumi.Input<pulumi.Input<string>[]>;
    zerotierControllerId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ZerotierController resource.
 */
export interface ZerotierControllerArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option to allow receiving broadcast packets.
     */
    broadcast?: pulumi.Input<boolean>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * The ZeroTier instance name.
     */
    instance: pulumi.Input<string>;
    /**
     * An option to assign every member a `/80` address within a `/40` network with using NDP emulation.
     */
    ip66plane?: pulumi.Input<boolean>;
    /**
     * The IPv6 range of the ZeroTier network.
     */
    ip6Range?: pulumi.Input<string>;
    /**
     * An option to assign every member a `/128` address within a `/88` network.
     */
    ip6Rfc4193?: pulumi.Input<boolean>;
    /**
     * The IP range of the ZeroTier network.
     */
    ipRange?: pulumi.Input<string>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    mtu?: pulumi.Input<number>;
    /**
     * An option to limit the maximum recipients of a multicast packet.
     */
    multicastLimit?: pulumi.Input<number>;
    /**
     * Name of the ZeroTier controller.
     */
    name?: pulumi.Input<string>;
    /**
     * The ZeroTier network identifier.
     */
    network: pulumi.Input<string>;
    /**
     * The ZeroTier network access control.
     */
    private?: pulumi.Input<boolean>;
    /**
     * The routes list that will be pushed to the client.
     */
    routes?: pulumi.Input<pulumi.Input<string>[]>;
    zerotierControllerId?: pulumi.Input<string>;
}
