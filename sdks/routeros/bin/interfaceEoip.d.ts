import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceEoip extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceEoip resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceEoipState, opts?: pulumi.CustomResourceOptions): InterfaceEoip;
    /**
     * Returns true if the given object is an instance of InterfaceEoip.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceEoip;
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
     * Address Resolution Protocol mode: * disabled - the interface will not use ARP * enabled - the interface will use ARP *
     * local-proxy-arp - the router performs proxy ARP on the interface and sends replies to the same interface * proxy-arp -
     * the router performs proxy ARP on the interface and sends replies to other interfaces * reply-only - the interface will
     * only reply to requests originated from matching IP address/MAC address combinations which are entered as static entries
     * in the ARP table. No dynamic entries will be automatically stored in the ARP table. Therefore for communications to be
     * successful, a valid static entry must already exist.
     */
    readonly arp: pulumi.Output<string | undefined>;
    /**
     * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to
     * the value of arp-timeout in IP/Settings, default is 30s. Can use postfix ms, s, M, h, d for milliseconds, seconds,
     * minutes, hours or days. If no postfix is set then seconds (s) is used.
     */
    readonly arpTimeout: pulumi.Output<string | undefined>;
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
    readonly interfaceEoipId: pulumi.Output<string>;
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
    readonly loopProtect: pulumi.Output<string | undefined>;
    readonly loopProtectDisableTime: pulumi.Output<string | undefined>;
    readonly loopProtectSendInterval: pulumi.Output<string | undefined>;
    readonly loopProtectStatus: pulumi.Output<string>;
    /**
     * Current mac address.
     */
    readonly macAddress: pulumi.Output<string>;
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
     * Unique tunnel identifier, which must match the other side of the tunnel.
     */
    readonly tunnelId: pulumi.Output<number | undefined>;
    /**
     * Create a InterfaceEoip resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: InterfaceEoipArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterfaceEoip resources.
 */
export interface InterfaceEoipState {
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
     * Address Resolution Protocol mode: * disabled - the interface will not use ARP * enabled - the interface will use ARP *
     * local-proxy-arp - the router performs proxy ARP on the interface and sends replies to the same interface * proxy-arp -
     * the router performs proxy ARP on the interface and sends replies to other interfaces * reply-only - the interface will
     * only reply to requests originated from matching IP address/MAC address combinations which are entered as static entries
     * in the ARP table. No dynamic entries will be automatically stored in the ARP table. Therefore for communications to be
     * successful, a valid static entry must already exist.
     */
    arp?: pulumi.Input<string>;
    /**
     * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to
     * the value of arp-timeout in IP/Settings, default is 30s. Can use postfix ms, s, M, h, d for milliseconds, seconds,
     * minutes, hours or days. If no postfix is set then seconds (s) is used.
     */
    arpTimeout?: pulumi.Input<string>;
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
    interfaceEoipId?: pulumi.Input<string>;
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
    loopProtect?: pulumi.Input<string>;
    loopProtectDisableTime?: pulumi.Input<string>;
    loopProtectSendInterval?: pulumi.Input<string>;
    loopProtectStatus?: pulumi.Input<string>;
    /**
     * Current mac address.
     */
    macAddress?: pulumi.Input<string>;
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
    /**
     * Unique tunnel identifier, which must match the other side of the tunnel.
     */
    tunnelId?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a InterfaceEoip resource.
 */
export interface InterfaceEoipArgs {
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
     * Address Resolution Protocol mode: * disabled - the interface will not use ARP * enabled - the interface will use ARP *
     * local-proxy-arp - the router performs proxy ARP on the interface and sends replies to the same interface * proxy-arp -
     * the router performs proxy ARP on the interface and sends replies to other interfaces * reply-only - the interface will
     * only reply to requests originated from matching IP address/MAC address combinations which are entered as static entries
     * in the ARP table. No dynamic entries will be automatically stored in the ARP table. Therefore for communications to be
     * successful, a valid static entry must already exist.
     */
    arp?: pulumi.Input<string>;
    /**
     * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to
     * the value of arp-timeout in IP/Settings, default is 30s. Can use postfix ms, s, M, h, d for milliseconds, seconds,
     * minutes, hours or days. If no postfix is set then seconds (s) is used.
     */
    arpTimeout?: pulumi.Input<string>;
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
    interfaceEoipId?: pulumi.Input<string>;
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
    loopProtect?: pulumi.Input<string>;
    loopProtectDisableTime?: pulumi.Input<string>;
    loopProtectSendInterval?: pulumi.Input<string>;
    /**
     * Layer3 Maximum transmission unit ('auto', 0 .. 65535)
     */
    mtu?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * IP address of the remote end of the tunnel.
     */
    remoteAddress?: pulumi.Input<string>;
    /**
     * Unique tunnel identifier, which must match the other side of the tunnel.
     */
    tunnelId?: pulumi.Input<number>;
}
