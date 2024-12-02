import * as pulumi from "@pulumi/pulumi";
export declare class ToolNetwatch extends pulumi.CustomResource {
    /**
     * Get an existing ToolNetwatch resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ToolNetwatchState, opts?: pulumi.CustomResourceOptions): ToolNetwatch;
    /**
     * Returns true if the given object is an instance of ToolNetwatch.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ToolNetwatch;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___skip_: pulumi.Output<string | undefined>;
    /**
     * If the ICMP `time exceeded` message should be considered a valid response.
     */
    readonly acceptIcmpTimeExceeded: pulumi.Output<boolean | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * The DNS server that the probe should send its requests to, if not specified it will use the value from `/ip dns`.
     */
    readonly dnsServer: pulumi.Output<string | undefined>;
    /**
     * Script to execute on the event of probe state change `OK` -> `fail`.
     */
    readonly downScript: pulumi.Output<string | undefined>;
    /**
     * The IP address of the server to be probed. Formats: - ipv4 - ipv4@vrf - ipv6 - ipv6@vrf - ipv6-linklocal%interface
     */
    readonly host: pulumi.Output<string>;
    /**
     * Response in the range [http-code-min , http-code-max] is a probe pass/OK; outside - a probe fail. See
     * [mozilla-http-status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) or
     * [rfc7231](https://datatracker.ietf.org/doc/html/rfc7231#section-6).
     */
    readonly httpCodeMax: pulumi.Output<number | undefined>;
    /**
     * OK/fail criteria for HTTP response code.
     */
    readonly httpCodeMin: pulumi.Output<number | undefined>;
    /**
     * The time interval between probe tests.
     */
    readonly interval: pulumi.Output<string | undefined>;
    /**
     * Task name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Total count of ICMP packets to send out within a single test.
     */
    readonly packetCount: pulumi.Output<number | undefined>;
    /**
     * The time between ICMP-request packet send.
     */
    readonly packetInterval: pulumi.Output<string | undefined>;
    /**
     * The total size of the IP ICMP packet.
     */
    readonly packetSize: pulumi.Output<number | undefined>;
    /**
     * TCP port (for both tcp-conn and http-get probes)
     */
    readonly port: pulumi.Output<number | undefined>;
    /**
     * Record type that will be used for DNS probe.
     */
    readonly recordType: pulumi.Output<string | undefined>;
    /**
     * Source IP address which the Netwatch will try to use in order to reach the host. If address is not present, then the
     * host will be considered as `down`.
     */
    readonly srcAddress: pulumi.Output<string | undefined>;
    /**
     * Time to wait before starting probe (on add, enable, or system start).
     */
    readonly startDelay: pulumi.Output<string | undefined>;
    /**
     * Time to wait until starting Netwatch probe after system startup.
     */
    readonly startupDelay: pulumi.Output<string | undefined>;
    /**
     * Script to execute at the end of every probe test.
     */
    readonly testScript: pulumi.Output<string | undefined>;
    /**
     * Fail threshold for rtt-avg.
     */
    readonly thrAvg: pulumi.Output<string | undefined>;
    /**
     * Fail threshold for http-resp-time.
     */
    readonly thrHttpTime: pulumi.Output<string | undefined>;
    /**
     * Fail threshold for rtt-jitter.
     */
    readonly thrJitter: pulumi.Output<string | undefined>;
    /**
     * Fail threshold for loss-count.
     */
    readonly thrLossCount: pulumi.Output<number | undefined>;
    /**
     * Fail threshold for loss-percent.
     */
    readonly thrLossPercent: pulumi.Output<number | undefined>;
    /**
     * Fail threshold for rtt-max (a value above thr-max is a probe fail).
     */
    readonly thrMax: pulumi.Output<string | undefined>;
    /**
     * Fail threshold for rtt-stdev.
     */
    readonly thrStdev: pulumi.Output<string | undefined>;
    /**
     * Fail threshold for tcp-connect-time, the configuration uses microseconds, if the time unit is not specified (s/m/h), log
     * and status pages display the same value in milliseconds.
     */
    readonly thrTcpConnTime: pulumi.Output<string | undefined>;
    /**
     * Max time limit to wait for a response.
     */
    readonly timeout: pulumi.Output<string | undefined>;
    readonly toolNetwatchId: pulumi.Output<string>;
    /**
     * Manually set time to live value for ICMP packet.
     */
    readonly ttl: pulumi.Output<number | undefined>;
    /**
     * Type of the probe: - icmp - (ping-style) series of ICMP request-response with statistics - tcp-conn - test TCP
     * connection (3-way handshake) to a server specified by IP and port - http-get - do an HTTP Get request and test for a
     * range of correct replies - simple - simplified ICMP probe, with fewer options than **ICMP** type, used for backward
     * compatibility with the older Netwatch version
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * Script to execute on the event of probe state change `fail` -> `OK`.
     */
    readonly upScript: pulumi.Output<string | undefined>;
    /**
     * Create a ToolNetwatch resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ToolNetwatchArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ToolNetwatch resources.
 */
export interface ToolNetwatchState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
     */
    ___skip_?: pulumi.Input<string>;
    /**
     * If the ICMP `time exceeded` message should be considered a valid response.
     */
    acceptIcmpTimeExceeded?: pulumi.Input<boolean>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * The DNS server that the probe should send its requests to, if not specified it will use the value from `/ip dns`.
     */
    dnsServer?: pulumi.Input<string>;
    /**
     * Script to execute on the event of probe state change `OK` -> `fail`.
     */
    downScript?: pulumi.Input<string>;
    /**
     * The IP address of the server to be probed. Formats: - ipv4 - ipv4@vrf - ipv6 - ipv6@vrf - ipv6-linklocal%interface
     */
    host?: pulumi.Input<string>;
    /**
     * Response in the range [http-code-min , http-code-max] is a probe pass/OK; outside - a probe fail. See
     * [mozilla-http-status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) or
     * [rfc7231](https://datatracker.ietf.org/doc/html/rfc7231#section-6).
     */
    httpCodeMax?: pulumi.Input<number>;
    /**
     * OK/fail criteria for HTTP response code.
     */
    httpCodeMin?: pulumi.Input<number>;
    /**
     * The time interval between probe tests.
     */
    interval?: pulumi.Input<string>;
    /**
     * Task name.
     */
    name?: pulumi.Input<string>;
    /**
     * Total count of ICMP packets to send out within a single test.
     */
    packetCount?: pulumi.Input<number>;
    /**
     * The time between ICMP-request packet send.
     */
    packetInterval?: pulumi.Input<string>;
    /**
     * The total size of the IP ICMP packet.
     */
    packetSize?: pulumi.Input<number>;
    /**
     * TCP port (for both tcp-conn and http-get probes)
     */
    port?: pulumi.Input<number>;
    /**
     * Record type that will be used for DNS probe.
     */
    recordType?: pulumi.Input<string>;
    /**
     * Source IP address which the Netwatch will try to use in order to reach the host. If address is not present, then the
     * host will be considered as `down`.
     */
    srcAddress?: pulumi.Input<string>;
    /**
     * Time to wait before starting probe (on add, enable, or system start).
     */
    startDelay?: pulumi.Input<string>;
    /**
     * Time to wait until starting Netwatch probe after system startup.
     */
    startupDelay?: pulumi.Input<string>;
    /**
     * Script to execute at the end of every probe test.
     */
    testScript?: pulumi.Input<string>;
    /**
     * Fail threshold for rtt-avg.
     */
    thrAvg?: pulumi.Input<string>;
    /**
     * Fail threshold for http-resp-time.
     */
    thrHttpTime?: pulumi.Input<string>;
    /**
     * Fail threshold for rtt-jitter.
     */
    thrJitter?: pulumi.Input<string>;
    /**
     * Fail threshold for loss-count.
     */
    thrLossCount?: pulumi.Input<number>;
    /**
     * Fail threshold for loss-percent.
     */
    thrLossPercent?: pulumi.Input<number>;
    /**
     * Fail threshold for rtt-max (a value above thr-max is a probe fail).
     */
    thrMax?: pulumi.Input<string>;
    /**
     * Fail threshold for rtt-stdev.
     */
    thrStdev?: pulumi.Input<string>;
    /**
     * Fail threshold for tcp-connect-time, the configuration uses microseconds, if the time unit is not specified (s/m/h), log
     * and status pages display the same value in milliseconds.
     */
    thrTcpConnTime?: pulumi.Input<string>;
    /**
     * Max time limit to wait for a response.
     */
    timeout?: pulumi.Input<string>;
    toolNetwatchId?: pulumi.Input<string>;
    /**
     * Manually set time to live value for ICMP packet.
     */
    ttl?: pulumi.Input<number>;
    /**
     * Type of the probe: - icmp - (ping-style) series of ICMP request-response with statistics - tcp-conn - test TCP
     * connection (3-way handshake) to a server specified by IP and port - http-get - do an HTTP Get request and test for a
     * range of correct replies - simple - simplified ICMP probe, with fewer options than **ICMP** type, used for backward
     * compatibility with the older Netwatch version
     */
    type?: pulumi.Input<string>;
    /**
     * Script to execute on the event of probe state change `fail` -> `OK`.
     */
    upScript?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ToolNetwatch resource.
 */
export interface ToolNetwatchArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
     */
    ___skip_?: pulumi.Input<string>;
    /**
     * If the ICMP `time exceeded` message should be considered a valid response.
     */
    acceptIcmpTimeExceeded?: pulumi.Input<boolean>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * The DNS server that the probe should send its requests to, if not specified it will use the value from `/ip dns`.
     */
    dnsServer?: pulumi.Input<string>;
    /**
     * Script to execute on the event of probe state change `OK` -> `fail`.
     */
    downScript?: pulumi.Input<string>;
    /**
     * The IP address of the server to be probed. Formats: - ipv4 - ipv4@vrf - ipv6 - ipv6@vrf - ipv6-linklocal%interface
     */
    host: pulumi.Input<string>;
    /**
     * Response in the range [http-code-min , http-code-max] is a probe pass/OK; outside - a probe fail. See
     * [mozilla-http-status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) or
     * [rfc7231](https://datatracker.ietf.org/doc/html/rfc7231#section-6).
     */
    httpCodeMax?: pulumi.Input<number>;
    /**
     * OK/fail criteria for HTTP response code.
     */
    httpCodeMin?: pulumi.Input<number>;
    /**
     * The time interval between probe tests.
     */
    interval?: pulumi.Input<string>;
    /**
     * Task name.
     */
    name?: pulumi.Input<string>;
    /**
     * Total count of ICMP packets to send out within a single test.
     */
    packetCount?: pulumi.Input<number>;
    /**
     * The time between ICMP-request packet send.
     */
    packetInterval?: pulumi.Input<string>;
    /**
     * The total size of the IP ICMP packet.
     */
    packetSize?: pulumi.Input<number>;
    /**
     * TCP port (for both tcp-conn and http-get probes)
     */
    port?: pulumi.Input<number>;
    /**
     * Record type that will be used for DNS probe.
     */
    recordType?: pulumi.Input<string>;
    /**
     * Source IP address which the Netwatch will try to use in order to reach the host. If address is not present, then the
     * host will be considered as `down`.
     */
    srcAddress?: pulumi.Input<string>;
    /**
     * Time to wait before starting probe (on add, enable, or system start).
     */
    startDelay?: pulumi.Input<string>;
    /**
     * Time to wait until starting Netwatch probe after system startup.
     */
    startupDelay?: pulumi.Input<string>;
    /**
     * Script to execute at the end of every probe test.
     */
    testScript?: pulumi.Input<string>;
    /**
     * Fail threshold for rtt-avg.
     */
    thrAvg?: pulumi.Input<string>;
    /**
     * Fail threshold for http-resp-time.
     */
    thrHttpTime?: pulumi.Input<string>;
    /**
     * Fail threshold for rtt-jitter.
     */
    thrJitter?: pulumi.Input<string>;
    /**
     * Fail threshold for loss-count.
     */
    thrLossCount?: pulumi.Input<number>;
    /**
     * Fail threshold for loss-percent.
     */
    thrLossPercent?: pulumi.Input<number>;
    /**
     * Fail threshold for rtt-max (a value above thr-max is a probe fail).
     */
    thrMax?: pulumi.Input<string>;
    /**
     * Fail threshold for rtt-stdev.
     */
    thrStdev?: pulumi.Input<string>;
    /**
     * Fail threshold for tcp-connect-time, the configuration uses microseconds, if the time unit is not specified (s/m/h), log
     * and status pages display the same value in milliseconds.
     */
    thrTcpConnTime?: pulumi.Input<string>;
    /**
     * Max time limit to wait for a response.
     */
    timeout?: pulumi.Input<string>;
    toolNetwatchId?: pulumi.Input<string>;
    /**
     * Manually set time to live value for ICMP packet.
     */
    ttl?: pulumi.Input<number>;
    /**
     * Type of the probe: - icmp - (ping-style) series of ICMP request-response with statistics - tcp-conn - test TCP
     * connection (3-way handshake) to a server specified by IP and port - http-get - do an HTTP Get request and test for a
     * range of correct replies - simple - simplified ICMP probe, with fewer options than **ICMP** type, used for backward
     * compatibility with the older Netwatch version
     */
    type?: pulumi.Input<string>;
    /**
     * Script to execute on the event of probe state change `fail` -> `OK`.
     */
    upScript?: pulumi.Input<string>;
}
