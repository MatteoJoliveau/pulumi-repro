import * as pulumi from "@pulumi/pulumi";
export declare class Wireguard extends pulumi.CustomResource {
    /**
     * Get an existing Wireguard resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WireguardState, opts?: pulumi.CustomResourceOptions): Wireguard;
    /**
     * Returns true if the given object is an instance of Wireguard.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Wireguard;
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
    readonly wireguardId: pulumi.Output<string>;
    /**
     * Create a Wireguard resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WireguardArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Wireguard resources.
 */
export interface WireguardState {
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
    wireguardId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Wireguard resource.
 */
export interface WireguardArgs {
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
    wireguardId?: pulumi.Input<string>;
}
