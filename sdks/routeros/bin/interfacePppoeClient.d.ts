import * as pulumi from "@pulumi/pulumi";
export declare class InterfacePppoeClient extends pulumi.CustomResource {
    /**
     * Get an existing InterfacePppoeClient resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfacePppoeClientState, opts?: pulumi.CustomResourceOptions): InterfacePppoeClient;
    /**
     * Returns true if the given object is an instance of InterfacePppoeClient.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfacePppoeClient;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Access Concentrator name, this may be left blank and the client will connect to any access concentrator on the broadcast
     * domain.
     */
    readonly acName: pulumi.Output<string | undefined>;
    /**
     * Enable/Disable whether to add default route automatically.
     */
    readonly addDefaultRoute: pulumi.Output<boolean | undefined>;
    /**
     * Allowed authentication methods, by default all methods are allowed.
     */
    readonly allows: pulumi.Output<string[]>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * sets distance value applied to auto created default route, if add-default-route is also selected.
     */
    readonly defaultRouteDistance: pulumi.Output<number | undefined>;
    /**
     * connects to AC only when outbound traffic is generated. If selected, then route with gateway address from
     * 10.112.112.0/24 network will be added while connection is not established.
     */
    readonly dialOnDemand: pulumi.Output<boolean | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Interface name on which client will run.
     */
    readonly interface: pulumi.Output<string>;
    readonly interfacePppoeClientId: pulumi.Output<string>;
    readonly invalid: pulumi.Output<boolean>;
    /**
     * Sets keepalive timeout in seconds.
     */
    readonly keepaliveTimeout: pulumi.Output<number | undefined>;
    /**
     * Maximum Receive Unit.
     */
    readonly maxMru: pulumi.Output<string | undefined>;
    /**
     * Maximum Transmission Unit.
     */
    readonly maxMtu: pulumi.Output<string | undefined>;
    /**
     * Maximum packet size (512..65535 or disabled) that can be received on the link. If a packet is bigger than tunnel MTU, it
     * will be split into multiple packets, allowing full size IP or Ethernet packets to be sent over the tunnel.
     */
    readonly mrru: pulumi.Output<string | undefined>;
    /**
     * Name of the PPPoE interface.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Password used to authenticate.
     */
    readonly password: pulumi.Output<string | undefined>;
    /**
     * Specifies which PPP profile configuration will be used when establishing the tunnel.
     */
    readonly profile: pulumi.Output<string | undefined>;
    readonly running: pulumi.Output<boolean>;
    /**
     * Specifies the service name set on the access concentrator, can be left blank to connect to any PPPoE server.
     */
    readonly serviceName: pulumi.Output<string | undefined>;
    /**
     * Enable/disable getting DNS settings from the peer.
     */
    readonly usePeerDns: pulumi.Output<boolean | undefined>;
    /**
     * Username used for authentication.
     */
    readonly user: pulumi.Output<string | undefined>;
    /**
     * Create a InterfacePppoeClient resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterfacePppoeClientArgs, opts?: pulumi.CustomResourceOptions);
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
