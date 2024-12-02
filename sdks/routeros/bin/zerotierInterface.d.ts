import * as pulumi from "@pulumi/pulumi";
export declare class ZerotierInterface extends pulumi.CustomResource {
    /**
     * Get an existing ZerotierInterface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZerotierInterfaceState, opts?: pulumi.CustomResourceOptions): ZerotierInterface;
    /**
     * Returns true if the given object is an instance of ZerotierInterface.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ZerotierInterface;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * An option to override the default route.
     */
    readonly allowDefault: pulumi.Output<boolean | undefined>;
    /**
     * An option to allow overlapping public IP space by the ZeroTier routes. .
     */
    readonly allowGlobal: pulumi.Output<boolean | undefined>;
    /**
     * An option to allow assignment of managed IPs.
     */
    readonly allowManaged: pulumi.Output<boolean | undefined>;
    /**
     * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to
     * the value of arp-timeout in IP/Settings, default is 30s. Can use postfix ms, s, M, h, d for milliseconds, seconds,
     * minutes, hours or days. If no postfix is set then seconds (s) is used.
     */
    readonly arpTimeout: pulumi.Output<string | undefined>;
    /**
     * A flag whether the ZeroTier interface is bridged.
     */
    readonly bridge: pulumi.Output<boolean>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * A flag whether the ZeroTier interface obtained an IP address.
     */
    readonly dhcp: pulumi.Output<boolean>;
    /**
     * An option to force the `running` property to true.
     */
    readonly disableRunningCheck: pulumi.Output<boolean | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * The ZeroTier instance name.
     */
    readonly instance: pulumi.Output<string>;
    /**
     * Current mac address.
     */
    readonly macAddress: pulumi.Output<string>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    readonly mtu: pulumi.Output<number>;
    /**
     * Name of the ZeroTier interface.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The ZeroTier network identifier.
     */
    readonly network: pulumi.Output<string>;
    /**
     * The ZeroTier network name.
     */
    readonly networkName: pulumi.Output<string>;
    readonly running: pulumi.Output<boolean>;
    /**
     * The status of the ZeroTier connection.
     */
    readonly status: pulumi.Output<string>;
    /**
     * The ZeroTier network type.
     */
    readonly type: pulumi.Output<string>;
    readonly zerotierInterfaceId: pulumi.Output<string>;
    /**
     * Create a ZerotierInterface resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZerotierInterfaceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ZerotierInterface resources.
 */
export interface ZerotierInterfaceState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option to override the default route.
     */
    allowDefault?: pulumi.Input<boolean>;
    /**
     * An option to allow overlapping public IP space by the ZeroTier routes. .
     */
    allowGlobal?: pulumi.Input<boolean>;
    /**
     * An option to allow assignment of managed IPs.
     */
    allowManaged?: pulumi.Input<boolean>;
    /**
     * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to
     * the value of arp-timeout in IP/Settings, default is 30s. Can use postfix ms, s, M, h, d for milliseconds, seconds,
     * minutes, hours or days. If no postfix is set then seconds (s) is used.
     */
    arpTimeout?: pulumi.Input<string>;
    /**
     * A flag whether the ZeroTier interface is bridged.
     */
    bridge?: pulumi.Input<boolean>;
    comment?: pulumi.Input<string>;
    /**
     * A flag whether the ZeroTier interface obtained an IP address.
     */
    dhcp?: pulumi.Input<boolean>;
    /**
     * An option to force the `running` property to true.
     */
    disableRunningCheck?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * The ZeroTier instance name.
     */
    instance?: pulumi.Input<string>;
    /**
     * Current mac address.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    mtu?: pulumi.Input<number>;
    /**
     * Name of the ZeroTier interface.
     */
    name?: pulumi.Input<string>;
    /**
     * The ZeroTier network identifier.
     */
    network?: pulumi.Input<string>;
    /**
     * The ZeroTier network name.
     */
    networkName?: pulumi.Input<string>;
    running?: pulumi.Input<boolean>;
    /**
     * The status of the ZeroTier connection.
     */
    status?: pulumi.Input<string>;
    /**
     * The ZeroTier network type.
     */
    type?: pulumi.Input<string>;
    zerotierInterfaceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ZerotierInterface resource.
 */
export interface ZerotierInterfaceArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option to override the default route.
     */
    allowDefault?: pulumi.Input<boolean>;
    /**
     * An option to allow overlapping public IP space by the ZeroTier routes. .
     */
    allowGlobal?: pulumi.Input<boolean>;
    /**
     * An option to allow assignment of managed IPs.
     */
    allowManaged?: pulumi.Input<boolean>;
    /**
     * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to
     * the value of arp-timeout in IP/Settings, default is 30s. Can use postfix ms, s, M, h, d for milliseconds, seconds,
     * minutes, hours or days. If no postfix is set then seconds (s) is used.
     */
    arpTimeout?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * An option to force the `running` property to true.
     */
    disableRunningCheck?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * The ZeroTier instance name.
     */
    instance: pulumi.Input<string>;
    /**
     * Name of the ZeroTier interface.
     */
    name?: pulumi.Input<string>;
    /**
     * The ZeroTier network identifier.
     */
    network: pulumi.Input<string>;
    zerotierInterfaceId?: pulumi.Input<string>;
}
