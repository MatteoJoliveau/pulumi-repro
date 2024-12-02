import * as pulumi from "@pulumi/pulumi";
export declare class OvpnServer extends pulumi.CustomResource {
    /**
     * Get an existing OvpnServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OvpnServerState, opts?: pulumi.CustomResourceOptions): OvpnServer;
    /**
     * Returns true if the given object is an instance of OvpnServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is OvpnServer;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Authentication methods that the server will accept.
     */
    readonly auths: pulumi.Output<string[] | undefined>;
    /**
     * Name of the certificate that the OVPN server will use.
     */
    readonly certificate: pulumi.Output<string | undefined>;
    /**
     * Allowed ciphers.
     */
    readonly ciphers: pulumi.Output<string[] | undefined>;
    /**
     * Default profile to use.
     */
    readonly defaultProfile: pulumi.Output<string | undefined>;
    /**
     * Specifies if IPv6 IP tunneling mode should be possible with this OVPN server.
     */
    readonly enableTunIpv6: pulumi.Output<boolean | undefined>;
    /**
     * Defines whether the OVPN server is enabled or not.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * Length of IPv6 prefix for IPv6 address which will be used when generating OVPN interface on the server side.
     */
    readonly ipv6PrefixLen: pulumi.Output<number | undefined>;
    /**
     * Defines the time period (in seconds) after which the router is starting to send keepalive packets every second. If no
     * traffic and no keepalive responses have come for that period of time (i.e. 2 * keepalive-timeout), not responding client
     * is proclaimed disconnected
     */
    readonly keepaliveTimeout: pulumi.Output<string | undefined>;
    /**
     * Automatically generated MAC address of the server.
     */
    readonly macAddress: pulumi.Output<string>;
    /**
     * Maximum Transmission Unit. Max packet size that the OVPN interface will be able to send without packet fragmentation.
     */
    readonly maxMtu: pulumi.Output<number | undefined>;
    /**
     * Layer3 or layer2 tunnel mode (alternatively tun, tap)
     */
    readonly mode: pulumi.Output<string | undefined>;
    /**
     * Subnet mask to be applied to the client.
     */
    readonly netmask: pulumi.Output<number | undefined>;
    readonly ovpnServerId: pulumi.Output<string>;
    /**
     * Port to run the server on.
     */
    readonly port: pulumi.Output<number | undefined>;
    /**
     * indicates the protocol to use when connecting with the remote endpoint.
     */
    readonly protocol: pulumi.Output<string | undefined>;
    /**
     * Push routes to the VPN client (available since RouterOS 7.14).
     */
    readonly pushRoutes: pulumi.Output<string[] | undefined>;
    /**
     * Specifies what kind of routes the OVPN client must add to the routing table. def1 – Use this flag to override the
     * default gateway by using 0.0.0.0/1 and 128.0.0.0/1 rather than 0.0.0.0/0. This has the benefit of overriding but not
     * wiping out the original default gateway. disabled - Do not send redirect-gateway flags to the OVPN client. ipv6 -
     * Redirect IPv6 routing into the tunnel on the client side. This works similarly to the def1 flag, that is, more specific
     * IPv6 routes are added (2000::/4 and 3000::/4), covering the whole IPv6 unicast space.
     */
    readonly redirectGateways: pulumi.Output<string[] | undefined>;
    /**
     * Renegotiate data channel key after n seconds (default=3600).
     */
    readonly renegSec: pulumi.Output<number | undefined>;
    /**
     * If set to yes, then the server checks whether the client's certificate belongs to the same certificate chain.
     */
    readonly requireClientCertificate: pulumi.Output<boolean | undefined>;
    /**
     * Specifies which TLS versions to allow.
     */
    readonly tlsVersion: pulumi.Output<string | undefined>;
    /**
     * IPv6 prefix address which will be used when generating the OVPN interface on the server side.
     */
    readonly tunServerIpv6: pulumi.Output<string | undefined>;
    /**
     * Create a OvpnServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: OvpnServerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering OvpnServer resources.
 */
export interface OvpnServerState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Authentication methods that the server will accept.
     */
    auths?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the certificate that the OVPN server will use.
     */
    certificate?: pulumi.Input<string>;
    /**
     * Allowed ciphers.
     */
    ciphers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Default profile to use.
     */
    defaultProfile?: pulumi.Input<string>;
    /**
     * Specifies if IPv6 IP tunneling mode should be possible with this OVPN server.
     */
    enableTunIpv6?: pulumi.Input<boolean>;
    /**
     * Defines whether the OVPN server is enabled or not.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Length of IPv6 prefix for IPv6 address which will be used when generating OVPN interface on the server side.
     */
    ipv6PrefixLen?: pulumi.Input<number>;
    /**
     * Defines the time period (in seconds) after which the router is starting to send keepalive packets every second. If no
     * traffic and no keepalive responses have come for that period of time (i.e. 2 * keepalive-timeout), not responding client
     * is proclaimed disconnected
     */
    keepaliveTimeout?: pulumi.Input<string>;
    /**
     * Automatically generated MAC address of the server.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Maximum Transmission Unit. Max packet size that the OVPN interface will be able to send without packet fragmentation.
     */
    maxMtu?: pulumi.Input<number>;
    /**
     * Layer3 or layer2 tunnel mode (alternatively tun, tap)
     */
    mode?: pulumi.Input<string>;
    /**
     * Subnet mask to be applied to the client.
     */
    netmask?: pulumi.Input<number>;
    ovpnServerId?: pulumi.Input<string>;
    /**
     * Port to run the server on.
     */
    port?: pulumi.Input<number>;
    /**
     * indicates the protocol to use when connecting with the remote endpoint.
     */
    protocol?: pulumi.Input<string>;
    /**
     * Push routes to the VPN client (available since RouterOS 7.14).
     */
    pushRoutes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies what kind of routes the OVPN client must add to the routing table. def1 – Use this flag to override the
     * default gateway by using 0.0.0.0/1 and 128.0.0.0/1 rather than 0.0.0.0/0. This has the benefit of overriding but not
     * wiping out the original default gateway. disabled - Do not send redirect-gateway flags to the OVPN client. ipv6 -
     * Redirect IPv6 routing into the tunnel on the client side. This works similarly to the def1 flag, that is, more specific
     * IPv6 routes are added (2000::/4 and 3000::/4), covering the whole IPv6 unicast space.
     */
    redirectGateways?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Renegotiate data channel key after n seconds (default=3600).
     */
    renegSec?: pulumi.Input<number>;
    /**
     * If set to yes, then the server checks whether the client's certificate belongs to the same certificate chain.
     */
    requireClientCertificate?: pulumi.Input<boolean>;
    /**
     * Specifies which TLS versions to allow.
     */
    tlsVersion?: pulumi.Input<string>;
    /**
     * IPv6 prefix address which will be used when generating the OVPN interface on the server side.
     */
    tunServerIpv6?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a OvpnServer resource.
 */
export interface OvpnServerArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Authentication methods that the server will accept.
     */
    auths?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the certificate that the OVPN server will use.
     */
    certificate?: pulumi.Input<string>;
    /**
     * Allowed ciphers.
     */
    ciphers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Default profile to use.
     */
    defaultProfile?: pulumi.Input<string>;
    /**
     * Specifies if IPv6 IP tunneling mode should be possible with this OVPN server.
     */
    enableTunIpv6?: pulumi.Input<boolean>;
    /**
     * Defines whether the OVPN server is enabled or not.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Length of IPv6 prefix for IPv6 address which will be used when generating OVPN interface on the server side.
     */
    ipv6PrefixLen?: pulumi.Input<number>;
    /**
     * Defines the time period (in seconds) after which the router is starting to send keepalive packets every second. If no
     * traffic and no keepalive responses have come for that period of time (i.e. 2 * keepalive-timeout), not responding client
     * is proclaimed disconnected
     */
    keepaliveTimeout?: pulumi.Input<string>;
    /**
     * Automatically generated MAC address of the server.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Maximum Transmission Unit. Max packet size that the OVPN interface will be able to send without packet fragmentation.
     */
    maxMtu?: pulumi.Input<number>;
    /**
     * Layer3 or layer2 tunnel mode (alternatively tun, tap)
     */
    mode?: pulumi.Input<string>;
    /**
     * Subnet mask to be applied to the client.
     */
    netmask?: pulumi.Input<number>;
    ovpnServerId?: pulumi.Input<string>;
    /**
     * Port to run the server on.
     */
    port?: pulumi.Input<number>;
    /**
     * indicates the protocol to use when connecting with the remote endpoint.
     */
    protocol?: pulumi.Input<string>;
    /**
     * Push routes to the VPN client (available since RouterOS 7.14).
     */
    pushRoutes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies what kind of routes the OVPN client must add to the routing table. def1 – Use this flag to override the
     * default gateway by using 0.0.0.0/1 and 128.0.0.0/1 rather than 0.0.0.0/0. This has the benefit of overriding but not
     * wiping out the original default gateway. disabled - Do not send redirect-gateway flags to the OVPN client. ipv6 -
     * Redirect IPv6 routing into the tunnel on the client side. This works similarly to the def1 flag, that is, more specific
     * IPv6 routes are added (2000::/4 and 3000::/4), covering the whole IPv6 unicast space.
     */
    redirectGateways?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Renegotiate data channel key after n seconds (default=3600).
     */
    renegSec?: pulumi.Input<number>;
    /**
     * If set to yes, then the server checks whether the client's certificate belongs to the same certificate chain.
     */
    requireClientCertificate?: pulumi.Input<boolean>;
    /**
     * Specifies which TLS versions to allow.
     */
    tlsVersion?: pulumi.Input<string>;
    /**
     * IPv6 prefix address which will be used when generating the OVPN interface on the server side.
     */
    tunServerIpv6?: pulumi.Input<string>;
}
