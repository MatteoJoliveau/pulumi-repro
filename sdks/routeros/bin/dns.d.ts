import * as pulumi from "@pulumi/pulumi";
export declare class Dns extends pulumi.CustomResource {
    /**
     * Get an existing Dns resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DnsState, opts?: pulumi.CustomResourceOptions): Dns;
    /**
     * Returns true if the given object is an instance of Dns.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Dns;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    readonly addressListExtraTime: pulumi.Output<string | undefined>;
    /**
     * Specifies whether to allow network requests.
     */
    readonly allowRemoteRequests: pulumi.Output<boolean | undefined>;
    /**
     * Maximum time-to-live for cache records. In other words, cache records will expire unconditionally after cache-max-ttl
     * time. Shorter TTL received from DNS servers are respected. *Default: 1w*
     */
    readonly cacheMaxTtl: pulumi.Output<string>;
    /**
     * Specifies the size of DNS cache in KiB (64..4294967295). *Default: 2048*
     */
    readonly cacheSize: pulumi.Output<number>;
    /**
     * Shows the currently used cache size in KiB.
     */
    readonly cacheUsed: pulumi.Output<number>;
    readonly dnsId: pulumi.Output<string>;
    /**
     * Specifies how many DoH concurrent queries are allowed.
     */
    readonly dohMaxConcurrentQueries: pulumi.Output<number>;
    /**
     * Specifies how many concurrent connections to the DoH server are allowed.
     */
    readonly dohMaxServerConnections: pulumi.Output<number>;
    /**
     * Specifies how long to wait for query response from the DoH server.
     */
    readonly dohTimeout: pulumi.Output<string>;
    /**
     * List of dynamically added DNS server from different services, for example, DHCP.
     */
    readonly dynamicServers: pulumi.Output<string>;
    /**
     * Specifies how much concurrent queries are allowed. *Default: 100*
     */
    readonly maxConcurrentQueries: pulumi.Output<number>;
    /**
     * Specifies how much concurrent TCP sessions are allowed. *Default: 20*
     */
    readonly maxConcurrentTcpSessions: pulumi.Output<number>;
    /**
     * Maximum size of allowed UDP packet. *Default: 4096*
     */
    readonly maxUdpPacketSize: pulumi.Output<number>;
    /**
     * An option to enable mDNS repeater on specified interfaces. This option is available in RouterOS starting from version
     * 7.16.
     */
    readonly mdnsRepeatIfaces: pulumi.Output<string[] | undefined>;
    /**
     * Specifies how long to wait for query response from one server. Time can be specified in milliseconds. *Default: 2s*
     */
    readonly queryServerTimeout: pulumi.Output<string>;
    /**
     * Specifies how long to wait for query response in total. Note that this setting must be configured taking into account
     * query_server_timeout and number of used DNS server. Time can be specified in milliseconds. *Default: 10s*
     */
    readonly queryTotalTimeout: pulumi.Output<string>;
    /**
     * List of DNS server IPv4/IPv6 addresses.
     */
    readonly servers: pulumi.Output<string[] | undefined>;
    /**
     * DNS over HTTPS (DoH) server URL. > Mikrotik strongly suggest not use third-party download links for certificate
     * fetching. Use the Certificate Authority's own website. > RouterOS prioritize DoH over DNS server if both are configured
     * on the device.
     */
    readonly useDohServer: pulumi.Output<string | undefined>;
    /**
     * DoH certificate verification. [See docs](https://wiki.mikrotik.com/wiki/Manual:IP/DNS#DNS_over_HTTPS).
     */
    readonly verifyDohCert: pulumi.Output<boolean | undefined>;
    /**
     * The VRF table this resource operates on.
     */
    readonly vrf: pulumi.Output<string | undefined>;
    /**
     * Create a Dns resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DnsArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Dns resources.
 */
export interface DnsState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    addressListExtraTime?: pulumi.Input<string>;
    /**
     * Specifies whether to allow network requests.
     */
    allowRemoteRequests?: pulumi.Input<boolean>;
    /**
     * Maximum time-to-live for cache records. In other words, cache records will expire unconditionally after cache-max-ttl
     * time. Shorter TTL received from DNS servers are respected. *Default: 1w*
     */
    cacheMaxTtl?: pulumi.Input<string>;
    /**
     * Specifies the size of DNS cache in KiB (64..4294967295). *Default: 2048*
     */
    cacheSize?: pulumi.Input<number>;
    /**
     * Shows the currently used cache size in KiB.
     */
    cacheUsed?: pulumi.Input<number>;
    dnsId?: pulumi.Input<string>;
    /**
     * Specifies how many DoH concurrent queries are allowed.
     */
    dohMaxConcurrentQueries?: pulumi.Input<number>;
    /**
     * Specifies how many concurrent connections to the DoH server are allowed.
     */
    dohMaxServerConnections?: pulumi.Input<number>;
    /**
     * Specifies how long to wait for query response from the DoH server.
     */
    dohTimeout?: pulumi.Input<string>;
    /**
     * List of dynamically added DNS server from different services, for example, DHCP.
     */
    dynamicServers?: pulumi.Input<string>;
    /**
     * Specifies how much concurrent queries are allowed. *Default: 100*
     */
    maxConcurrentQueries?: pulumi.Input<number>;
    /**
     * Specifies how much concurrent TCP sessions are allowed. *Default: 20*
     */
    maxConcurrentTcpSessions?: pulumi.Input<number>;
    /**
     * Maximum size of allowed UDP packet. *Default: 4096*
     */
    maxUdpPacketSize?: pulumi.Input<number>;
    /**
     * An option to enable mDNS repeater on specified interfaces. This option is available in RouterOS starting from version
     * 7.16.
     */
    mdnsRepeatIfaces?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies how long to wait for query response from one server. Time can be specified in milliseconds. *Default: 2s*
     */
    queryServerTimeout?: pulumi.Input<string>;
    /**
     * Specifies how long to wait for query response in total. Note that this setting must be configured taking into account
     * query_server_timeout and number of used DNS server. Time can be specified in milliseconds. *Default: 10s*
     */
    queryTotalTimeout?: pulumi.Input<string>;
    /**
     * List of DNS server IPv4/IPv6 addresses.
     */
    servers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * DNS over HTTPS (DoH) server URL. > Mikrotik strongly suggest not use third-party download links for certificate
     * fetching. Use the Certificate Authority's own website. > RouterOS prioritize DoH over DNS server if both are configured
     * on the device.
     */
    useDohServer?: pulumi.Input<string>;
    /**
     * DoH certificate verification. [See docs](https://wiki.mikrotik.com/wiki/Manual:IP/DNS#DNS_over_HTTPS).
     */
    verifyDohCert?: pulumi.Input<boolean>;
    /**
     * The VRF table this resource operates on.
     */
    vrf?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Dns resource.
 */
export interface DnsArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    addressListExtraTime?: pulumi.Input<string>;
    /**
     * Specifies whether to allow network requests.
     */
    allowRemoteRequests?: pulumi.Input<boolean>;
    /**
     * Maximum time-to-live for cache records. In other words, cache records will expire unconditionally after cache-max-ttl
     * time. Shorter TTL received from DNS servers are respected. *Default: 1w*
     */
    cacheMaxTtl?: pulumi.Input<string>;
    /**
     * Specifies the size of DNS cache in KiB (64..4294967295). *Default: 2048*
     */
    cacheSize?: pulumi.Input<number>;
    dnsId?: pulumi.Input<string>;
    /**
     * Specifies how many DoH concurrent queries are allowed.
     */
    dohMaxConcurrentQueries?: pulumi.Input<number>;
    /**
     * Specifies how many concurrent connections to the DoH server are allowed.
     */
    dohMaxServerConnections?: pulumi.Input<number>;
    /**
     * Specifies how long to wait for query response from the DoH server.
     */
    dohTimeout?: pulumi.Input<string>;
    /**
     * Specifies how much concurrent queries are allowed. *Default: 100*
     */
    maxConcurrentQueries?: pulumi.Input<number>;
    /**
     * Specifies how much concurrent TCP sessions are allowed. *Default: 20*
     */
    maxConcurrentTcpSessions?: pulumi.Input<number>;
    /**
     * Maximum size of allowed UDP packet. *Default: 4096*
     */
    maxUdpPacketSize?: pulumi.Input<number>;
    /**
     * An option to enable mDNS repeater on specified interfaces. This option is available in RouterOS starting from version
     * 7.16.
     */
    mdnsRepeatIfaces?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies how long to wait for query response from one server. Time can be specified in milliseconds. *Default: 2s*
     */
    queryServerTimeout?: pulumi.Input<string>;
    /**
     * Specifies how long to wait for query response in total. Note that this setting must be configured taking into account
     * query_server_timeout and number of used DNS server. Time can be specified in milliseconds. *Default: 10s*
     */
    queryTotalTimeout?: pulumi.Input<string>;
    /**
     * List of DNS server IPv4/IPv6 addresses.
     */
    servers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * DNS over HTTPS (DoH) server URL. > Mikrotik strongly suggest not use third-party download links for certificate
     * fetching. Use the Certificate Authority's own website. > RouterOS prioritize DoH over DNS server if both are configured
     * on the device.
     */
    useDohServer?: pulumi.Input<string>;
    /**
     * DoH certificate verification. [See docs](https://wiki.mikrotik.com/wiki/Manual:IP/DNS#DNS_over_HTTPS).
     */
    verifyDohCert?: pulumi.Input<boolean>;
    /**
     * The VRF table this resource operates on.
     */
    vrf?: pulumi.Input<string>;
}
