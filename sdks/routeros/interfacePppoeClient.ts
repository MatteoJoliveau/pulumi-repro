// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class InterfacePppoeClient extends pulumi.CustomResource {
    /**
     * Get an existing InterfacePppoeClient resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfacePppoeClientState, opts?: pulumi.CustomResourceOptions): InterfacePppoeClient {
        return new InterfacePppoeClient(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/interfacePppoeClient:InterfacePppoeClient';

    /**
     * Returns true if the given object is an instance of InterfacePppoeClient.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InterfacePppoeClient {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InterfacePppoeClient.__pulumiType;
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
     * Access Concentrator name, this may be left blank and the client will connect to any access concentrator on the broadcast
     * domain.
     */
    public readonly acName!: pulumi.Output<string | undefined>;
    /**
     * Enable/Disable whether to add default route automatically.
     */
    public readonly addDefaultRoute!: pulumi.Output<boolean | undefined>;
    /**
     * Allowed authentication methods, by default all methods are allowed.
     */
    public readonly allows!: pulumi.Output<string[]>;
    public readonly comment!: pulumi.Output<string | undefined>;
    /**
     * sets distance value applied to auto created default route, if add-default-route is also selected.
     */
    public readonly defaultRouteDistance!: pulumi.Output<number | undefined>;
    /**
     * connects to AC only when outbound traffic is generated. If selected, then route with gateway address from
     * 10.112.112.0/24 network will be added while connection is not established.
     */
    public readonly dialOnDemand!: pulumi.Output<boolean | undefined>;
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * Interface name on which client will run.
     */
    public readonly interface!: pulumi.Output<string>;
    public readonly interfacePppoeClientId!: pulumi.Output<string>;
    public /*out*/ readonly invalid!: pulumi.Output<boolean>;
    /**
     * Sets keepalive timeout in seconds.
     */
    public readonly keepaliveTimeout!: pulumi.Output<number | undefined>;
    /**
     * Maximum Receive Unit.
     */
    public readonly maxMru!: pulumi.Output<string | undefined>;
    /**
     * Maximum Transmission Unit.
     */
    public readonly maxMtu!: pulumi.Output<string | undefined>;
    /**
     * Maximum packet size (512..65535 or disabled) that can be received on the link. If a packet is bigger than tunnel MTU, it
     * will be split into multiple packets, allowing full size IP or Ethernet packets to be sent over the tunnel.
     */
    public readonly mrru!: pulumi.Output<string | undefined>;
    /**
     * Name of the PPPoE interface.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Password used to authenticate.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * Specifies which PPP profile configuration will be used when establishing the tunnel.
     */
    public readonly profile!: pulumi.Output<string | undefined>;
    public /*out*/ readonly running!: pulumi.Output<boolean>;
    /**
     * Specifies the service name set on the access concentrator, can be left blank to connect to any PPPoE server.
     */
    public readonly serviceName!: pulumi.Output<string | undefined>;
    /**
     * Enable/disable getting DNS settings from the peer.
     */
    public readonly usePeerDns!: pulumi.Output<boolean | undefined>;
    /**
     * Username used for authentication.
     */
    public readonly user!: pulumi.Output<string | undefined>;

    /**
     * Create a InterfacePppoeClient resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterfacePppoeClientArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InterfacePppoeClientArgs | InterfacePppoeClientState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as InterfacePppoeClientState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["acName"] = state ? state.acName : undefined;
            resourceInputs["addDefaultRoute"] = state ? state.addDefaultRoute : undefined;
            resourceInputs["allows"] = state ? state.allows : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["defaultRouteDistance"] = state ? state.defaultRouteDistance : undefined;
            resourceInputs["dialOnDemand"] = state ? state.dialOnDemand : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["interfacePppoeClientId"] = state ? state.interfacePppoeClientId : undefined;
            resourceInputs["invalid"] = state ? state.invalid : undefined;
            resourceInputs["keepaliveTimeout"] = state ? state.keepaliveTimeout : undefined;
            resourceInputs["maxMru"] = state ? state.maxMru : undefined;
            resourceInputs["maxMtu"] = state ? state.maxMtu : undefined;
            resourceInputs["mrru"] = state ? state.mrru : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["profile"] = state ? state.profile : undefined;
            resourceInputs["running"] = state ? state.running : undefined;
            resourceInputs["serviceName"] = state ? state.serviceName : undefined;
            resourceInputs["usePeerDns"] = state ? state.usePeerDns : undefined;
            resourceInputs["user"] = state ? state.user : undefined;
        } else {
            const args = argsOrState as InterfacePppoeClientArgs | undefined;
            if ((!args || args.interface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interface'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["acName"] = args ? args.acName : undefined;
            resourceInputs["addDefaultRoute"] = args ? args.addDefaultRoute : undefined;
            resourceInputs["allows"] = args ? args.allows : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["defaultRouteDistance"] = args ? args.defaultRouteDistance : undefined;
            resourceInputs["dialOnDemand"] = args ? args.dialOnDemand : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["interfacePppoeClientId"] = args ? args.interfacePppoeClientId : undefined;
            resourceInputs["keepaliveTimeout"] = args ? args.keepaliveTimeout : undefined;
            resourceInputs["maxMru"] = args ? args.maxMru : undefined;
            resourceInputs["maxMtu"] = args ? args.maxMtu : undefined;
            resourceInputs["mrru"] = args ? args.mrru : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["profile"] = args ? args.profile : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["usePeerDns"] = args ? args.usePeerDns : undefined;
            resourceInputs["user"] = args ? args.user : undefined;
            resourceInputs["invalid"] = undefined /*out*/;
            resourceInputs["running"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(InterfacePppoeClient.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering InterfacePppoeClient resources.
 */
export interface InterfacePppoeClientState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Access Concentrator name, this may be left blank and the client will connect to any access concentrator on the broadcast
     * domain.
     */
    acName?: pulumi.Input<string>;
    /**
     * Enable/Disable whether to add default route automatically.
     */
    addDefaultRoute?: pulumi.Input<boolean>;
    /**
     * Allowed authentication methods, by default all methods are allowed.
     */
    allows?: pulumi.Input<pulumi.Input<string>[]>;
    comment?: pulumi.Input<string>;
    /**
     * sets distance value applied to auto created default route, if add-default-route is also selected.
     */
    defaultRouteDistance?: pulumi.Input<number>;
    /**
     * connects to AC only when outbound traffic is generated. If selected, then route with gateway address from
     * 10.112.112.0/24 network will be added while connection is not established.
     */
    dialOnDemand?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Interface name on which client will run.
     */
    interface?: pulumi.Input<string>;
    interfacePppoeClientId?: pulumi.Input<string>;
    invalid?: pulumi.Input<boolean>;
    /**
     * Sets keepalive timeout in seconds.
     */
    keepaliveTimeout?: pulumi.Input<number>;
    /**
     * Maximum Receive Unit.
     */
    maxMru?: pulumi.Input<string>;
    /**
     * Maximum Transmission Unit.
     */
    maxMtu?: pulumi.Input<string>;
    /**
     * Maximum packet size (512..65535 or disabled) that can be received on the link. If a packet is bigger than tunnel MTU, it
     * will be split into multiple packets, allowing full size IP or Ethernet packets to be sent over the tunnel.
     */
    mrru?: pulumi.Input<string>;
    /**
     * Name of the PPPoE interface.
     */
    name?: pulumi.Input<string>;
    /**
     * Password used to authenticate.
     */
    password?: pulumi.Input<string>;
    /**
     * Specifies which PPP profile configuration will be used when establishing the tunnel.
     */
    profile?: pulumi.Input<string>;
    running?: pulumi.Input<boolean>;
    /**
     * Specifies the service name set on the access concentrator, can be left blank to connect to any PPPoE server.
     */
    serviceName?: pulumi.Input<string>;
    /**
     * Enable/disable getting DNS settings from the peer.
     */
    usePeerDns?: pulumi.Input<boolean>;
    /**
     * Username used for authentication.
     */
    user?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a InterfacePppoeClient resource.
 */
export interface InterfacePppoeClientArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Access Concentrator name, this may be left blank and the client will connect to any access concentrator on the broadcast
     * domain.
     */
    acName?: pulumi.Input<string>;
    /**
     * Enable/Disable whether to add default route automatically.
     */
    addDefaultRoute?: pulumi.Input<boolean>;
    /**
     * Allowed authentication methods, by default all methods are allowed.
     */
    allows?: pulumi.Input<pulumi.Input<string>[]>;
    comment?: pulumi.Input<string>;
    /**
     * sets distance value applied to auto created default route, if add-default-route is also selected.
     */
    defaultRouteDistance?: pulumi.Input<number>;
    /**
     * connects to AC only when outbound traffic is generated. If selected, then route with gateway address from
     * 10.112.112.0/24 network will be added while connection is not established.
     */
    dialOnDemand?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Interface name on which client will run.
     */
    interface: pulumi.Input<string>;
    interfacePppoeClientId?: pulumi.Input<string>;
    /**
     * Sets keepalive timeout in seconds.
     */
    keepaliveTimeout?: pulumi.Input<number>;
    /**
     * Maximum Receive Unit.
     */
    maxMru?: pulumi.Input<string>;
    /**
     * Maximum Transmission Unit.
     */
    maxMtu?: pulumi.Input<string>;
    /**
     * Maximum packet size (512..65535 or disabled) that can be received on the link. If a packet is bigger than tunnel MTU, it
     * will be split into multiple packets, allowing full size IP or Ethernet packets to be sent over the tunnel.
     */
    mrru?: pulumi.Input<string>;
    /**
     * Name of the PPPoE interface.
     */
    name?: pulumi.Input<string>;
    /**
     * Password used to authenticate.
     */
    password?: pulumi.Input<string>;
    /**
     * Specifies which PPP profile configuration will be used when establishing the tunnel.
     */
    profile?: pulumi.Input<string>;
    /**
     * Specifies the service name set on the access concentrator, can be left blank to connect to any PPPoE server.
     */
    serviceName?: pulumi.Input<string>;
    /**
     * Enable/disable getting DNS settings from the peer.
     */
    usePeerDns?: pulumi.Input<boolean>;
    /**
     * Username used for authentication.
     */
    user?: pulumi.Input<string>;
}
