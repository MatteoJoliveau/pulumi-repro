import * as pulumi from "@pulumi/pulumi";
export declare class SystemNtpServer extends pulumi.CustomResource {
    /**
     * Get an existing SystemNtpServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemNtpServerState, opts?: pulumi.CustomResourceOptions): SystemNtpServer;
    /**
     * Returns true if the given object is an instance of SystemNtpServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SystemNtpServer;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * NTP symmetric key, used for authentication between the NTP client and server. Key Identifier (Key ID) - an integer
     * identifying the cryptographic key used to generate the message-authentication code.
     */
    readonly authKey: pulumi.Output<string | undefined>;
    /**
     * Enable certain NTP server mode, for this mode to work you have to set up broadcast-addresses field.
     */
    readonly broadcast: pulumi.Output<boolean | undefined>;
    /**
     * Set broadcast address to use for NTP server broadcast mode.
     */
    readonly broadcastAddresses: pulumi.Output<string | undefined>;
    /**
     * Enable NTP server.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * Manually set stratum if ```use_local_clock = true```.
     */
    readonly localClockStratum: pulumi.Output<number | undefined>;
    /**
     * Enable certain NTP server mode.
     */
    readonly manycast: pulumi.Output<boolean | undefined>;
    /**
     * Enable certain NTP server mode.
     */
    readonly multicast: pulumi.Output<boolean | undefined>;
    readonly systemNtpServerId: pulumi.Output<string>;
    /**
     * The server will supply its local system time as valid if others are not available.
     */
    readonly useLocalClock: pulumi.Output<boolean | undefined>;
    /**
     * The VRF table this resource operates on.
     */
    readonly vrf: pulumi.Output<string | undefined>;
    /**
     * Create a SystemNtpServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemNtpServerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SystemNtpServer resources.
 */
export interface SystemNtpServerState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * NTP symmetric key, used for authentication between the NTP client and server. Key Identifier (Key ID) - an integer
     * identifying the cryptographic key used to generate the message-authentication code.
     */
    authKey?: pulumi.Input<string>;
    /**
     * Enable certain NTP server mode, for this mode to work you have to set up broadcast-addresses field.
     */
    broadcast?: pulumi.Input<boolean>;
    /**
     * Set broadcast address to use for NTP server broadcast mode.
     */
    broadcastAddresses?: pulumi.Input<string>;
    /**
     * Enable NTP server.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Manually set stratum if ```use_local_clock = true```.
     */
    localClockStratum?: pulumi.Input<number>;
    /**
     * Enable certain NTP server mode.
     */
    manycast?: pulumi.Input<boolean>;
    /**
     * Enable certain NTP server mode.
     */
    multicast?: pulumi.Input<boolean>;
    systemNtpServerId?: pulumi.Input<string>;
    /**
     * The server will supply its local system time as valid if others are not available.
     */
    useLocalClock?: pulumi.Input<boolean>;
    /**
     * The VRF table this resource operates on.
     */
    vrf?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SystemNtpServer resource.
 */
export interface SystemNtpServerArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * NTP symmetric key, used for authentication between the NTP client and server. Key Identifier (Key ID) - an integer
     * identifying the cryptographic key used to generate the message-authentication code.
     */
    authKey?: pulumi.Input<string>;
    /**
     * Enable certain NTP server mode, for this mode to work you have to set up broadcast-addresses field.
     */
    broadcast?: pulumi.Input<boolean>;
    /**
     * Set broadcast address to use for NTP server broadcast mode.
     */
    broadcastAddresses?: pulumi.Input<string>;
    /**
     * Enable NTP server.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Manually set stratum if ```use_local_clock = true```.
     */
    localClockStratum?: pulumi.Input<number>;
    /**
     * Enable certain NTP server mode.
     */
    manycast?: pulumi.Input<boolean>;
    /**
     * Enable certain NTP server mode.
     */
    multicast?: pulumi.Input<boolean>;
    systemNtpServerId?: pulumi.Input<string>;
    /**
     * The server will supply its local system time as valid if others are not available.
     */
    useLocalClock?: pulumi.Input<boolean>;
    /**
     * The VRF table this resource operates on.
     */
    vrf?: pulumi.Input<string>;
}
