// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class OvpnServer extends pulumi.CustomResource {
    /**
     * Get an existing OvpnServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OvpnServerState, opts?: pulumi.CustomResourceOptions): OvpnServer {
        return new OvpnServer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/ovpnServer:OvpnServer';

    /**
     * Returns true if the given object is an instance of OvpnServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OvpnServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OvpnServer.__pulumiType;
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
     * Authentication methods that the server will accept.
     */
    public readonly auths!: pulumi.Output<string[] | undefined>;
    /**
     * Name of the certificate that the OVPN server will use.
     */
    public readonly certificate!: pulumi.Output<string | undefined>;
    /**
     * Allowed ciphers.
     */
    public readonly ciphers!: pulumi.Output<string[] | undefined>;
    /**
     * Default profile to use.
     */
    public readonly defaultProfile!: pulumi.Output<string | undefined>;
    /**
     * Specifies if IPv6 IP tunneling mode should be possible with this OVPN server.
     */
    public readonly enableTunIpv6!: pulumi.Output<boolean | undefined>;
    /**
     * Defines whether the OVPN server is enabled or not.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Length of IPv6 prefix for IPv6 address which will be used when generating OVPN interface on the server side.
     */
    public readonly ipv6PrefixLen!: pulumi.Output<number | undefined>;
    /**
     * Defines the time period (in seconds) after which the router is starting to send keepalive packets every second. If no
     * traffic and no keepalive responses have come for that period of time (i.e. 2 * keepalive-timeout), not responding client
     * is proclaimed disconnected
     */
    public readonly keepaliveTimeout!: pulumi.Output<string | undefined>;
    /**
     * Automatically generated MAC address of the server.
     */
    public readonly macAddress!: pulumi.Output<string>;
    /**
     * Maximum Transmission Unit. Max packet size that the OVPN interface will be able to send without packet fragmentation.
     */
    public readonly maxMtu!: pulumi.Output<number | undefined>;
    /**
     * Layer3 or layer2 tunnel mode (alternatively tun, tap)
     */
    public readonly mode!: pulumi.Output<string | undefined>;
    /**
     * Subnet mask to be applied to the client.
     */
    public readonly netmask!: pulumi.Output<number | undefined>;
    public readonly ovpnServerId!: pulumi.Output<string>;
    /**
     * Port to run the server on.
     */
    public readonly port!: pulumi.Output<number | undefined>;
    /**
     * indicates the protocol to use when connecting with the remote endpoint.
     */
    public readonly protocol!: pulumi.Output<string | undefined>;
    /**
     * Push routes to the VPN client (available since RouterOS 7.14).
     */
    public readonly pushRoutes!: pulumi.Output<string[] | undefined>;
    /**
     * Specifies what kind of routes the OVPN client must add to the routing table. def1 – Use this flag to override the
     * default gateway by using 0.0.0.0/1 and 128.0.0.0/1 rather than 0.0.0.0/0. This has the benefit of overriding but not
     * wiping out the original default gateway. disabled - Do not send redirect-gateway flags to the OVPN client. ipv6 -
     * Redirect IPv6 routing into the tunnel on the client side. This works similarly to the def1 flag, that is, more specific
     * IPv6 routes are added (2000::/4 and 3000::/4), covering the whole IPv6 unicast space.
     */
    public readonly redirectGateways!: pulumi.Output<string[] | undefined>;
    /**
     * Renegotiate data channel key after n seconds (default=3600).
     */
    public readonly renegSec!: pulumi.Output<number | undefined>;
    /**
     * If set to yes, then the server checks whether the client's certificate belongs to the same certificate chain.
     */
    public readonly requireClientCertificate!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies which TLS versions to allow.
     */
    public readonly tlsVersion!: pulumi.Output<string | undefined>;
    /**
     * IPv6 prefix address which will be used when generating the OVPN interface on the server side.
     */
    public readonly tunServerIpv6!: pulumi.Output<string | undefined>;

    /**
     * Create a OvpnServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: OvpnServerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OvpnServerArgs | OvpnServerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OvpnServerState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["auths"] = state ? state.auths : undefined;
            resourceInputs["certificate"] = state ? state.certificate : undefined;
            resourceInputs["ciphers"] = state ? state.ciphers : undefined;
            resourceInputs["defaultProfile"] = state ? state.defaultProfile : undefined;
            resourceInputs["enableTunIpv6"] = state ? state.enableTunIpv6 : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["ipv6PrefixLen"] = state ? state.ipv6PrefixLen : undefined;
            resourceInputs["keepaliveTimeout"] = state ? state.keepaliveTimeout : undefined;
            resourceInputs["macAddress"] = state ? state.macAddress : undefined;
            resourceInputs["maxMtu"] = state ? state.maxMtu : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["netmask"] = state ? state.netmask : undefined;
            resourceInputs["ovpnServerId"] = state ? state.ovpnServerId : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["pushRoutes"] = state ? state.pushRoutes : undefined;
            resourceInputs["redirectGateways"] = state ? state.redirectGateways : undefined;
            resourceInputs["renegSec"] = state ? state.renegSec : undefined;
            resourceInputs["requireClientCertificate"] = state ? state.requireClientCertificate : undefined;
            resourceInputs["tlsVersion"] = state ? state.tlsVersion : undefined;
            resourceInputs["tunServerIpv6"] = state ? state.tunServerIpv6 : undefined;
        } else {
            const args = argsOrState as OvpnServerArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["auths"] = args ? args.auths : undefined;
            resourceInputs["certificate"] = args ? args.certificate : undefined;
            resourceInputs["ciphers"] = args ? args.ciphers : undefined;
            resourceInputs["defaultProfile"] = args ? args.defaultProfile : undefined;
            resourceInputs["enableTunIpv6"] = args ? args.enableTunIpv6 : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["ipv6PrefixLen"] = args ? args.ipv6PrefixLen : undefined;
            resourceInputs["keepaliveTimeout"] = args ? args.keepaliveTimeout : undefined;
            resourceInputs["macAddress"] = args ? args.macAddress : undefined;
            resourceInputs["maxMtu"] = args ? args.maxMtu : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["netmask"] = args ? args.netmask : undefined;
            resourceInputs["ovpnServerId"] = args ? args.ovpnServerId : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["pushRoutes"] = args ? args.pushRoutes : undefined;
            resourceInputs["redirectGateways"] = args ? args.redirectGateways : undefined;
            resourceInputs["renegSec"] = args ? args.renegSec : undefined;
            resourceInputs["requireClientCertificate"] = args ? args.requireClientCertificate : undefined;
            resourceInputs["tlsVersion"] = args ? args.tlsVersion : undefined;
            resourceInputs["tunServerIpv6"] = args ? args.tunServerIpv6 : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OvpnServer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
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
