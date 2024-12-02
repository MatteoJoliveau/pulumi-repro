import * as pulumi from "@pulumi/pulumi";
export declare class ZerotierController extends pulumi.CustomResource {
    /**
     * Get an existing ZerotierController resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZerotierControllerState, opts?: pulumi.CustomResourceOptions): ZerotierController;
    /**
     * Returns true if the given object is an instance of ZerotierController.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ZerotierController;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * An option to allow receiving broadcast packets.
     */
    readonly broadcast: pulumi.Output<boolean | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * A flag whether the ZeroTier network is inactive.
     */
    readonly inactive: pulumi.Output<boolean>;
    /**
     * The ZeroTier instance name.
     */
    readonly instance: pulumi.Output<string>;
    /**
     * An option to assign every member a `/80` address within a `/40` network with using NDP emulation.
     */
    readonly ip66plane: pulumi.Output<boolean | undefined>;
    /**
     * The IPv6 range of the ZeroTier network.
     */
    readonly ip6Range: pulumi.Output<string | undefined>;
    /**
     * An option to assign every member a `/128` address within a `/88` network.
     */
    readonly ip6Rfc4193: pulumi.Output<boolean | undefined>;
    /**
     * The IP range of the ZeroTier network.
     */
    readonly ipRange: pulumi.Output<string | undefined>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    readonly mtu: pulumi.Output<number | undefined>;
    /**
     * An option to limit the maximum recipients of a multicast packet.
     */
    readonly multicastLimit: pulumi.Output<number | undefined>;
    /**
     * Name of the ZeroTier controller.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The ZeroTier network identifier.
     */
    readonly network: pulumi.Output<string>;
    /**
     * The ZeroTier network access control.
     */
    readonly private: pulumi.Output<boolean | undefined>;
    /**
     * The routes list that will be pushed to the client.
     */
    readonly routes: pulumi.Output<string[] | undefined>;
    readonly zerotierControllerId: pulumi.Output<string>;
    /**
     * Create a ZerotierController resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZerotierControllerArgs, opts?: pulumi.CustomResourceOptions);
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