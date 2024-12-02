import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceWireguard extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceWireguard resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceWireguardState, opts?: pulumi.CustomResourceOptions): InterfaceWireguard;
    /**
     * Returns true if the given object is an instance of InterfaceWireguard.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceWireguard;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    readonly interfaceWireguardId: pulumi.Output<string>;
    /**
     * Port for WireGuard service to listen on for incoming sessions.
     */
    readonly listenPort: pulumi.Output<number>;
    /**
     * Layer3 Maximum transmission unit ('auto', 0 .. 65535)
     */
    readonly mtu: pulumi.Output<string>;
    readonly name: pulumi.Output<string>;
    /**
     * A base64 private key. If not specified, it will be automatically generated upon interface creation.
     */
    readonly privateKey: pulumi.Output<string>;
    /**
     * A base64 public key is calculated from the private key.
     */
    readonly publicKey: pulumi.Output<string>;
    readonly running: pulumi.Output<boolean>;
    /**
     * Create a InterfaceWireguard resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterfaceWireguardArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterfaceWireguard resources.
 */
export interface InterfaceWireguardState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    interfaceWireguardId?: pulumi.Input<string>;
    /**
     * Port for WireGuard service to listen on for incoming sessions.
     */
    listenPort?: pulumi.Input<number>;
    /**
     * Layer3 Maximum transmission unit ('auto', 0 .. 65535)
     */
    mtu?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * A base64 private key. If not specified, it will be automatically generated upon interface creation.
     */
    privateKey?: pulumi.Input<string>;
    /**
     * A base64 public key is calculated from the private key.
     */
    publicKey?: pulumi.Input<string>;
    running?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a InterfaceWireguard resource.
 */
export interface InterfaceWireguardArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    interfaceWireguardId?: pulumi.Input<string>;
    /**
     * Port for WireGuard service to listen on for incoming sessions.
     */
    listenPort: pulumi.Input<number>;
    /**
     * Layer3 Maximum transmission unit ('auto', 0 .. 65535)
     */
    mtu?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * A base64 private key. If not specified, it will be automatically generated upon interface creation.
     */
    privateKey?: pulumi.Input<string>;
}
