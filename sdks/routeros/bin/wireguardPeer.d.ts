import * as pulumi from "@pulumi/pulumi";
export declare class WireguardPeer extends pulumi.CustomResource {
    /**
     * Get an existing WireguardPeer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WireguardPeerState, opts?: pulumi.CustomResourceOptions): WireguardPeer;
    /**
     * Returns true if the given object is an instance of WireguardPeer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WireguardPeer;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * List of IP (v4 or v6) addresses with CIDR masks from which incoming traffic for this peer is allowed and to which
     * outgoing traffic for this peer is directed. The catch-all 0.0.0.0/0 may be specified for matching all IPv4 addresses,
     * and ::/0 may be specified for matching all IPv6 addresses.
     */
    readonly allowedAddresses: pulumi.Output<string[]>;
    /**
     * When imported using a qr code for a client (for example, a phone), then this address for the wg interface is set on that
     * device.
     */
    readonly clientAddress: pulumi.Output<string | undefined>;
    /**
     * Specify when using WireGuard Server as a VPN gateway for peer traffic.
     */
    readonly clientDns: pulumi.Output<string | undefined>;
    /**
     * The IP address and port number of the WireGuard Server.
     */
    readonly clientEndpoint: pulumi.Output<string | undefined>;
    /**
     * Same as persistent-keepalive but from peer side.
     */
    readonly clientKeepalive: pulumi.Output<string | undefined>;
    /**
     * The local port upon which this WireGuard tunnel will listen for incoming traffic from peers, and the port from which it
     * will source outgoing packets.
     */
    readonly clientListenPort: pulumi.Output<number | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * The most recent source IP address of correctly authenticated packets from the peer.
     */
    readonly currentEndpointAddress: pulumi.Output<string>;
    /**
     * The most recent source IP port of correctly authenticated packets from the peer.
     */
    readonly currentEndpointPort: pulumi.Output<number>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    readonly dynamic: pulumi.Output<boolean>;
    /**
     * An endpoint IP or hostname can be left blank to allow remote connection from any address.
     */
    readonly endpointAddress: pulumi.Output<string>;
    /**
     * An endpoint port can be left blank to allow remote connection from any port.
     */
    readonly endpointPort: pulumi.Output<string>;
    /**
     * Name of the interface.
     */
    readonly interface: pulumi.Output<string>;
    /**
     * Specifies if peer is intended to be connection initiator or only responder. Should be used on WireGuard devices that are
     * used as `servers` for other devices as clients to connect to. Otherwise router will all repeatedly try to connect
     * `endpoint-address` or `current-endpoint-address` causing unnecessary system logs to be written.
     */
    readonly isResponder: pulumi.Output<boolean | undefined>;
    /**
     * Time in seconds after the last successful handshake.
     */
    readonly lastHandshake: pulumi.Output<string>;
    /**
     * Name of the tunnel.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A seconds interval, between 1 and 65535 inclusive, of how often to send an authenticated empty packet to the peer for
     * the purpose of keeping a stateful firewall or NAT mapping valid persistently. For example, if the interface very rarely
     * sends traffic, but it might at anytime receive traffic from a peer, and it is behind NAT, the interface might benefit
     * from having a persistent keepalive interval of 25 seconds.
     */
    readonly persistentKeepalive: pulumi.Output<string | undefined>;
    /**
     * A **base64** preshared key. Optional, and may be omitted. This option adds an additional layer of symmetric-key
     * cryptography to be mixed into the already existing public-key cryptography, for post-quantum resistance.
     */
    readonly presharedKey: pulumi.Output<string | undefined>;
    /**
     * A base64 private key. If not specified, it will be automatically generated upon interface creation.
     */
    readonly privateKey: pulumi.Output<string | undefined>;
    /**
     * The remote peer's calculated public key.
     */
    readonly publicKey: pulumi.Output<string>;
    /**
     * The total amount of bytes received from the peer.
     */
    readonly rx: pulumi.Output<string>;
    /**
     * The total amount of bytes transmitted to the peer.
     */
    readonly tx: pulumi.Output<string>;
    readonly wireguardPeerId: pulumi.Output<string>;
    /**
     * Create a WireguardPeer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WireguardPeerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering WireguardPeer resources.
 */
export interface WireguardPeerState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * List of IP (v4 or v6) addresses with CIDR masks from which incoming traffic for this peer is allowed and to which
     * outgoing traffic for this peer is directed. The catch-all 0.0.0.0/0 may be specified for matching all IPv4 addresses,
     * and ::/0 may be specified for matching all IPv6 addresses.
     */
    allowedAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * When imported using a qr code for a client (for example, a phone), then this address for the wg interface is set on that
     * device.
     */
    clientAddress?: pulumi.Input<string>;
    /**
     * Specify when using WireGuard Server as a VPN gateway for peer traffic.
     */
    clientDns?: pulumi.Input<string>;
    /**
     * The IP address and port number of the WireGuard Server.
     */
    clientEndpoint?: pulumi.Input<string>;
    /**
     * Same as persistent-keepalive but from peer side.
     */
    clientKeepalive?: pulumi.Input<string>;
    /**
     * The local port upon which this WireGuard tunnel will listen for incoming traffic from peers, and the port from which it
     * will source outgoing packets.
     */
    clientListenPort?: pulumi.Input<number>;
    comment?: pulumi.Input<string>;
    /**
     * The most recent source IP address of correctly authenticated packets from the peer.
     */
    currentEndpointAddress?: pulumi.Input<string>;
    /**
     * The most recent source IP port of correctly authenticated packets from the peer.
     */
    currentEndpointPort?: pulumi.Input<number>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    /**
     * An endpoint IP or hostname can be left blank to allow remote connection from any address.
     */
    endpointAddress?: pulumi.Input<string>;
    /**
     * An endpoint port can be left blank to allow remote connection from any port.
     */
    endpointPort?: pulumi.Input<string>;
    /**
     * Name of the interface.
     */
    interface?: pulumi.Input<string>;
    /**
     * Specifies if peer is intended to be connection initiator or only responder. Should be used on WireGuard devices that are
     * used as `servers` for other devices as clients to connect to. Otherwise router will all repeatedly try to connect
     * `endpoint-address` or `current-endpoint-address` causing unnecessary system logs to be written.
     */
    isResponder?: pulumi.Input<boolean>;
    /**
     * Time in seconds after the last successful handshake.
     */
    lastHandshake?: pulumi.Input<string>;
    /**
     * Name of the tunnel.
     */
    name?: pulumi.Input<string>;
    /**
     * A seconds interval, between 1 and 65535 inclusive, of how often to send an authenticated empty packet to the peer for
     * the purpose of keeping a stateful firewall or NAT mapping valid persistently. For example, if the interface very rarely
     * sends traffic, but it might at anytime receive traffic from a peer, and it is behind NAT, the interface might benefit
     * from having a persistent keepalive interval of 25 seconds.
     */
    persistentKeepalive?: pulumi.Input<string>;
    /**
     * A **base64** preshared key. Optional, and may be omitted. This option adds an additional layer of symmetric-key
     * cryptography to be mixed into the already existing public-key cryptography, for post-quantum resistance.
     */
    presharedKey?: pulumi.Input<string>;
    /**
     * A base64 private key. If not specified, it will be automatically generated upon interface creation.
     */
    privateKey?: pulumi.Input<string>;
    /**
     * The remote peer's calculated public key.
     */
    publicKey?: pulumi.Input<string>;
    /**
     * The total amount of bytes received from the peer.
     */
    rx?: pulumi.Input<string>;
    /**
     * The total amount of bytes transmitted to the peer.
     */
    tx?: pulumi.Input<string>;
    wireguardPeerId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a WireguardPeer resource.
 */
export interface WireguardPeerArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * List of IP (v4 or v6) addresses with CIDR masks from which incoming traffic for this peer is allowed and to which
     * outgoing traffic for this peer is directed. The catch-all 0.0.0.0/0 may be specified for matching all IPv4 addresses,
     * and ::/0 may be specified for matching all IPv6 addresses.
     */
    allowedAddresses: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * When imported using a qr code for a client (for example, a phone), then this address for the wg interface is set on that
     * device.
     */
    clientAddress?: pulumi.Input<string>;
    /**
     * Specify when using WireGuard Server as a VPN gateway for peer traffic.
     */
    clientDns?: pulumi.Input<string>;
    /**
     * The IP address and port number of the WireGuard Server.
     */
    clientEndpoint?: pulumi.Input<string>;
    /**
     * Same as persistent-keepalive but from peer side.
     */
    clientKeepalive?: pulumi.Input<string>;
    /**
     * The local port upon which this WireGuard tunnel will listen for incoming traffic from peers, and the port from which it
     * will source outgoing packets.
     */
    clientListenPort?: pulumi.Input<number>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * An endpoint IP or hostname can be left blank to allow remote connection from any address.
     */
    endpointAddress?: pulumi.Input<string>;
    /**
     * An endpoint port can be left blank to allow remote connection from any port.
     */
    endpointPort?: pulumi.Input<string>;
    /**
     * Name of the interface.
     */
    interface: pulumi.Input<string>;
    /**
     * Specifies if peer is intended to be connection initiator or only responder. Should be used on WireGuard devices that are
     * used as `servers` for other devices as clients to connect to. Otherwise router will all repeatedly try to connect
     * `endpoint-address` or `current-endpoint-address` causing unnecessary system logs to be written.
     */
    isResponder?: pulumi.Input<boolean>;
    /**
     * Name of the tunnel.
     */
    name?: pulumi.Input<string>;
    /**
     * A seconds interval, between 1 and 65535 inclusive, of how often to send an authenticated empty packet to the peer for
     * the purpose of keeping a stateful firewall or NAT mapping valid persistently. For example, if the interface very rarely
     * sends traffic, but it might at anytime receive traffic from a peer, and it is behind NAT, the interface might benefit
     * from having a persistent keepalive interval of 25 seconds.
     */
    persistentKeepalive?: pulumi.Input<string>;
    /**
     * A **base64** preshared key. Optional, and may be omitted. This option adds an additional layer of symmetric-key
     * cryptography to be mixed into the already existing public-key cryptography, for post-quantum resistance.
     */
    presharedKey?: pulumi.Input<string>;
    /**
     * A base64 private key. If not specified, it will be automatically generated upon interface creation.
     */
    privateKey?: pulumi.Input<string>;
    /**
     * The remote peer's calculated public key.
     */
    publicKey: pulumi.Input<string>;
    wireguardPeerId?: pulumi.Input<string>;
}
