import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceGre extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceGre resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceGreState, opts?: pulumi.CustomResourceOptions): InterfaceGre;
    /**
     * Returns true if the given object is an instance of InterfaceGre.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceGre;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    readonly actualMtu: pulumi.Output<number>;
    /**
     * Whether to allow FastPath processing. Must be disabled if IPsec tunneling is used.
     */
    readonly allowFastPath: pulumi.Output<boolean | undefined>;
    /**
     * Controls whether to change MSS size for received TCP SYN packets. When enabled, a router will change the MSS size for
     * received TCP SYN packets if the current MSS size exceeds the tunnel interface MTU (taking into account the TCP/IP
     * overhead). The received encapsulated packet will still contain the original MSS, and only after decapsulation the MSS is
     * changed.
     */
    readonly clampTcpMss: pulumi.Output<boolean | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    readonly dontFragment: pulumi.Output<string | undefined>;
    /**
     * Set dscp value in GRE header to a fixed value '0..63' or 'inherit' from dscp value taken from tunnelled traffic.
     */
    readonly dscp: pulumi.Output<string | undefined>;
    readonly interfaceGreId: pulumi.Output<string>;
    /**
     * When secret is specified, router adds dynamic IPsec peer to remote-address with pre-shared key and policy (by default
     * phase2 uses sha1/aes128cbc).
     */
    readonly ipsecSecret: pulumi.Output<string | undefined>;
    /**
     * Tunnel keepalive parameter sets the time interval in which the tunnel running flag will remain even if the remote end of
     * tunnel goes down. If configured time,retries fail, interface running flag is removed. Parameters are written in
     * following format: KeepaliveInterval,KeepaliveRetries where KeepaliveInterval is time interval and KeepaliveRetries -
     * number of retry attempts. KeepaliveInterval is integer 0..4294967295
     */
    readonly keepalive: pulumi.Output<string | undefined>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    readonly l2mtu: pulumi.Output<number>;
    /**
     * Source address of the tunnel packets, local on the router.
     */
    readonly localAddress: pulumi.Output<string | undefined>;
    /**
     * Layer3 Maximum transmission unit ('auto', 0 .. 65535)
     */
    readonly mtu: pulumi.Output<string>;
    readonly name: pulumi.Output<string>;
    /**
     * IP address of the remote end of the tunnel.
     */
    readonly remoteAddress: pulumi.Output<string | undefined>;
    readonly running: pulumi.Output<boolean>;
    /**
     * Create a InterfaceGre resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: InterfaceGreArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterfaceGre resources.
 */
export interface InterfaceGreState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    actualMtu?: pulumi.Input<number>;
    /**
     * Whether to allow FastPath processing. Must be disabled if IPsec tunneling is used.
     */
    allowFastPath?: pulumi.Input<boolean>;
    /**
     * Controls whether to change MSS size for received TCP SYN packets. When enabled, a router will change the MSS size for
     * received TCP SYN packets if the current MSS size exceeds the tunnel interface MTU (taking into account the TCP/IP
     * overhead). The received encapsulated packet will still contain the original MSS, and only after decapsulation the MSS is
     * changed.
     */
    clampTcpMss?: pulumi.Input<boolean>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    dontFragment?: pulumi.Input<string>;
    /**
     * Set dscp value in GRE header to a fixed value '0..63' or 'inherit' from dscp value taken from tunnelled traffic.
     */
    dscp?: pulumi.Input<string>;
    interfaceGreId?: pulumi.Input<string>;
    /**
     * When secret is specified, router adds dynamic IPsec peer to remote-address with pre-shared key and policy (by default
     * phase2 uses sha1/aes128cbc).
     */
    ipsecSecret?: pulumi.Input<string>;
    /**
     * Tunnel keepalive parameter sets the time interval in which the tunnel running flag will remain even if the remote end of
     * tunnel goes down. If configured time,retries fail, interface running flag is removed. Parameters are written in
     * following format: KeepaliveInterval,KeepaliveRetries where KeepaliveInterval is time interval and KeepaliveRetries -
     * number of retry attempts. KeepaliveInterval is integer 0..4294967295
     */
    keepalive?: pulumi.Input<string>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    l2mtu?: pulumi.Input<number>;
    /**
     * Source address of the tunnel packets, local on the router.
     */
    localAddress?: pulumi.Input<string>;
    /**
     * Layer3 Maximum transmission unit ('auto', 0 .. 65535)
     */
    mtu?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * IP address of the remote end of the tunnel.
     */
    remoteAddress?: pulumi.Input<string>;
    running?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a InterfaceGre resource.
 */
export interface InterfaceGreArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to allow FastPath processing. Must be disabled if IPsec tunneling is used.
     */
    allowFastPath?: pulumi.Input<boolean>;
    /**
     * Controls whether to change MSS size for received TCP SYN packets. When enabled, a router will change the MSS size for
     * received TCP SYN packets if the current MSS size exceeds the tunnel interface MTU (taking into account the TCP/IP
     * overhead). The received encapsulated packet will still contain the original MSS, and only after decapsulation the MSS is
     * changed.
     */
    clampTcpMss?: pulumi.Input<boolean>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    dontFragment?: pulumi.Input<string>;
    /**
     * Set dscp value in GRE header to a fixed value '0..63' or 'inherit' from dscp value taken from tunnelled traffic.
     */
    dscp?: pulumi.Input<string>;
    interfaceGreId?: pulumi.Input<string>;
    /**
     * When secret is specified, router adds dynamic IPsec peer to remote-address with pre-shared key and policy (by default
     * phase2 uses sha1/aes128cbc).
     */
    ipsecSecret?: pulumi.Input<string>;
    /**
     * Tunnel keepalive parameter sets the time interval in which the tunnel running flag will remain even if the remote end of
     * tunnel goes down. If configured time,retries fail, interface running flag is removed. Parameters are written in
     * following format: KeepaliveInterval,KeepaliveRetries where KeepaliveInterval is time interval and KeepaliveRetries -
     * number of retry attempts. KeepaliveInterval is integer 0..4294967295
     */
    keepalive?: pulumi.Input<string>;
    /**
     * Source address of the tunnel packets, local on the router.
     */
    localAddress?: pulumi.Input<string>;
    /**
     * Layer3 Maximum transmission unit ('auto', 0 .. 65535)
     */
    mtu?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * IP address of the remote end of the tunnel.
     */
    remoteAddress?: pulumi.Input<string>;
}
