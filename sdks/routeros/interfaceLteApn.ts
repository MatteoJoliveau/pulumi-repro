// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class InterfaceLteApn extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceLteApn resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceLteApnState, opts?: pulumi.CustomResourceOptions): InterfaceLteApn {
        return new InterfaceLteApn(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/interfaceLteApn:InterfaceLteApn';

    /**
     * Returns true if the given object is an instance of InterfaceLteApn.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InterfaceLteApn {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InterfaceLteApn.__pulumiType;
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
     * Whether to add a default route to forward all traffic over the LTE interface.
     */
    public readonly addDefaultRoute!: pulumi.Output<boolean | undefined>;
    /**
     * Service Provider's Access Point Name.
     */
    public readonly apn!: pulumi.Output<string | undefined>;
    /**
     * Allowed protocol to use for authentication.
     */
    public readonly authentication!: pulumi.Output<string | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    /**
     * It's the default item.
     */
    public /*out*/ readonly default!: pulumi.Output<boolean>;
    /**
     * Sets distance value applied to auto-created default route, if add-default-route is also selected. LTE route by default
     * is with distance 2 to prefer wired routes over LTE.
     */
    public readonly defaultRouteDistance!: pulumi.Output<number | undefined>;
    public readonly interfaceLteApnId!: pulumi.Output<string>;
    /**
     * Requested PDN type.
     */
    public readonly ipType!: pulumi.Output<string | undefined>;
    /**
     * Interface on which to advertise IPv6 prefix.
     */
    public readonly ipv6Interface!: pulumi.Output<string | undefined>;
    /**
     * APN profile name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * APN profile number.
     */
    public readonly number!: pulumi.Output<number | undefined>;
    /**
     * Interface to passthrough IP configuration (activates passthrough).
     */
    public readonly passthroughInterface!: pulumi.Output<string | undefined>;
    /**
     * If set to auto, then will learn MAC from the first packet.
     */
    public readonly passthroughMac!: pulumi.Output<string | undefined>;
    /**
     * `auto` selects the smallest possible subnet to be used for the passthrough interface. `p2p` sets the passthrough
     * interface subnet as `/32` and picks gateway address from `10.177.0.0/16` range. The gateway address stays the same until
     * the apn configuration is changed.
     */
    public readonly passthroughSubnetSelection!: pulumi.Output<string | undefined>;
    /**
     * Password used if any of the authentication protocols are active.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * Parameter is available starting from RouterOS v7 and used only for MBIM modems. If set to yes, uses network provided
     * APN.
     */
    public readonly useNetworkApn!: pulumi.Output<boolean | undefined>;
    /**
     * If set to yes, uses DNS received from LTE interface.
     */
    public readonly usePeerDns!: pulumi.Output<boolean | undefined>;
    /**
     * Username used if any of the authentication protocols are active.
     */
    public readonly user!: pulumi.Output<string | undefined>;

    /**
     * Create a InterfaceLteApn resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: InterfaceLteApnArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InterfaceLteApnArgs | InterfaceLteApnState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as InterfaceLteApnState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["addDefaultRoute"] = state ? state.addDefaultRoute : undefined;
            resourceInputs["apn"] = state ? state.apn : undefined;
            resourceInputs["authentication"] = state ? state.authentication : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["default"] = state ? state.default : undefined;
            resourceInputs["defaultRouteDistance"] = state ? state.defaultRouteDistance : undefined;
            resourceInputs["interfaceLteApnId"] = state ? state.interfaceLteApnId : undefined;
            resourceInputs["ipType"] = state ? state.ipType : undefined;
            resourceInputs["ipv6Interface"] = state ? state.ipv6Interface : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["number"] = state ? state.number : undefined;
            resourceInputs["passthroughInterface"] = state ? state.passthroughInterface : undefined;
            resourceInputs["passthroughMac"] = state ? state.passthroughMac : undefined;
            resourceInputs["passthroughSubnetSelection"] = state ? state.passthroughSubnetSelection : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["useNetworkApn"] = state ? state.useNetworkApn : undefined;
            resourceInputs["usePeerDns"] = state ? state.usePeerDns : undefined;
            resourceInputs["user"] = state ? state.user : undefined;
        } else {
            const args = argsOrState as InterfaceLteApnArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["addDefaultRoute"] = args ? args.addDefaultRoute : undefined;
            resourceInputs["apn"] = args ? args.apn : undefined;
            resourceInputs["authentication"] = args ? args.authentication : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["defaultRouteDistance"] = args ? args.defaultRouteDistance : undefined;
            resourceInputs["interfaceLteApnId"] = args ? args.interfaceLteApnId : undefined;
            resourceInputs["ipType"] = args ? args.ipType : undefined;
            resourceInputs["ipv6Interface"] = args ? args.ipv6Interface : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["number"] = args ? args.number : undefined;
            resourceInputs["passthroughInterface"] = args ? args.passthroughInterface : undefined;
            resourceInputs["passthroughMac"] = args ? args.passthroughMac : undefined;
            resourceInputs["passthroughSubnetSelection"] = args ? args.passthroughSubnetSelection : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["useNetworkApn"] = args ? args.useNetworkApn : undefined;
            resourceInputs["usePeerDns"] = args ? args.usePeerDns : undefined;
            resourceInputs["user"] = args ? args.user : undefined;
            resourceInputs["default"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(InterfaceLteApn.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering InterfaceLteApn resources.
 */
export interface InterfaceLteApnState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to add a default route to forward all traffic over the LTE interface.
     */
    addDefaultRoute?: pulumi.Input<boolean>;
    /**
     * Service Provider's Access Point Name.
     */
    apn?: pulumi.Input<string>;
    /**
     * Allowed protocol to use for authentication.
     */
    authentication?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * It's the default item.
     */
    default?: pulumi.Input<boolean>;
    /**
     * Sets distance value applied to auto-created default route, if add-default-route is also selected. LTE route by default
     * is with distance 2 to prefer wired routes over LTE.
     */
    defaultRouteDistance?: pulumi.Input<number>;
    interfaceLteApnId?: pulumi.Input<string>;
    /**
     * Requested PDN type.
     */
    ipType?: pulumi.Input<string>;
    /**
     * Interface on which to advertise IPv6 prefix.
     */
    ipv6Interface?: pulumi.Input<string>;
    /**
     * APN profile name
     */
    name?: pulumi.Input<string>;
    /**
     * APN profile number.
     */
    number?: pulumi.Input<number>;
    /**
     * Interface to passthrough IP configuration (activates passthrough).
     */
    passthroughInterface?: pulumi.Input<string>;
    /**
     * If set to auto, then will learn MAC from the first packet.
     */
    passthroughMac?: pulumi.Input<string>;
    /**
     * `auto` selects the smallest possible subnet to be used for the passthrough interface. `p2p` sets the passthrough
     * interface subnet as `/32` and picks gateway address from `10.177.0.0/16` range. The gateway address stays the same until
     * the apn configuration is changed.
     */
    passthroughSubnetSelection?: pulumi.Input<string>;
    /**
     * Password used if any of the authentication protocols are active.
     */
    password?: pulumi.Input<string>;
    /**
     * Parameter is available starting from RouterOS v7 and used only for MBIM modems. If set to yes, uses network provided
     * APN.
     */
    useNetworkApn?: pulumi.Input<boolean>;
    /**
     * If set to yes, uses DNS received from LTE interface.
     */
    usePeerDns?: pulumi.Input<boolean>;
    /**
     * Username used if any of the authentication protocols are active.
     */
    user?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a InterfaceLteApn resource.
 */
export interface InterfaceLteApnArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to add a default route to forward all traffic over the LTE interface.
     */
    addDefaultRoute?: pulumi.Input<boolean>;
    /**
     * Service Provider's Access Point Name.
     */
    apn?: pulumi.Input<string>;
    /**
     * Allowed protocol to use for authentication.
     */
    authentication?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Sets distance value applied to auto-created default route, if add-default-route is also selected. LTE route by default
     * is with distance 2 to prefer wired routes over LTE.
     */
    defaultRouteDistance?: pulumi.Input<number>;
    interfaceLteApnId?: pulumi.Input<string>;
    /**
     * Requested PDN type.
     */
    ipType?: pulumi.Input<string>;
    /**
     * Interface on which to advertise IPv6 prefix.
     */
    ipv6Interface?: pulumi.Input<string>;
    /**
     * APN profile name
     */
    name?: pulumi.Input<string>;
    /**
     * APN profile number.
     */
    number?: pulumi.Input<number>;
    /**
     * Interface to passthrough IP configuration (activates passthrough).
     */
    passthroughInterface?: pulumi.Input<string>;
    /**
     * If set to auto, then will learn MAC from the first packet.
     */
    passthroughMac?: pulumi.Input<string>;
    /**
     * `auto` selects the smallest possible subnet to be used for the passthrough interface. `p2p` sets the passthrough
     * interface subnet as `/32` and picks gateway address from `10.177.0.0/16` range. The gateway address stays the same until
     * the apn configuration is changed.
     */
    passthroughSubnetSelection?: pulumi.Input<string>;
    /**
     * Password used if any of the authentication protocols are active.
     */
    password?: pulumi.Input<string>;
    /**
     * Parameter is available starting from RouterOS v7 and used only for MBIM modems. If set to yes, uses network provided
     * APN.
     */
    useNetworkApn?: pulumi.Input<boolean>;
    /**
     * If set to yes, uses DNS received from LTE interface.
     */
    usePeerDns?: pulumi.Input<boolean>;
    /**
     * Username used if any of the authentication protocols are active.
     */
    user?: pulumi.Input<string>;
}
