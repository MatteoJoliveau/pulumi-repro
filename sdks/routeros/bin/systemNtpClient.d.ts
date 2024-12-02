import * as pulumi from "@pulumi/pulumi";
export declare class SystemNtpClient extends pulumi.CustomResource {
    /**
     * Get an existing SystemNtpClient resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemNtpClientState, opts?: pulumi.CustomResourceOptions): SystemNtpClient;
    /**
     * Returns true if the given object is an instance of SystemNtpClient.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SystemNtpClient;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Enable NTP client.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * The fractional frequency drift per unit time.
     */
    readonly freqDrift: pulumi.Output<string>;
    /**
     * Mode that the NTP client will operate in
     */
    readonly mode: pulumi.Output<string | undefined>;
    /**
     * The list of NTP servers. It is possible to add static entries. The following formats are accepted: - FQDN ("Resolved
     * Address" will appear in the "Servers"- window in an appropriate column if the address is resolved) or IP address can be
     * used. If DHCP-Client property `use-peer-ntp=yes` - the dynamic entries advertised by DHCP - ipv4 - ipv4@vrf - ipv6 -
     * ipv6@vrf - ipv6-linklocal%interface
     */
    readonly servers: pulumi.Output<string[] | undefined>;
    /**
     * Current status of the NTP client.
     */
    readonly status: pulumi.Output<string>;
    /**
     * The IP address of the NTP Server.
     */
    readonly syncedServer: pulumi.Output<string>;
    /**
     * The accuracy of each server is defined by a number called the stratum, with the topmost level (primary servers) assigned
     * as one and each level downwards (secondary servers) in the hierarchy assigned as one greater than the preceding level.
     */
    readonly syncedStratum: pulumi.Output<string>;
    readonly systemNtpClientId: pulumi.Output<string>;
    /**
     * This is a signed, fixed-point number indicating the offset of the NTP server's clock relative to the local clock, in
     * seconds.
     */
    readonly systemOffset: pulumi.Output<string>;
    /**
     * The VRF table this resource operates on.
     */
    readonly vrf: pulumi.Output<string | undefined>;
    /**
     * Create a SystemNtpClient resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemNtpClientArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SystemNtpClient resources.
 */
export interface SystemNtpClientState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Enable NTP client.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The fractional frequency drift per unit time.
     */
    freqDrift?: pulumi.Input<string>;
    /**
     * Mode that the NTP client will operate in
     */
    mode?: pulumi.Input<string>;
    /**
     * The list of NTP servers. It is possible to add static entries. The following formats are accepted: - FQDN ("Resolved
     * Address" will appear in the "Servers"- window in an appropriate column if the address is resolved) or IP address can be
     * used. If DHCP-Client property `use-peer-ntp=yes` - the dynamic entries advertised by DHCP - ipv4 - ipv4@vrf - ipv6 -
     * ipv6@vrf - ipv6-linklocal%interface
     */
    servers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Current status of the NTP client.
     */
    status?: pulumi.Input<string>;
    /**
     * The IP address of the NTP Server.
     */
    syncedServer?: pulumi.Input<string>;
    /**
     * The accuracy of each server is defined by a number called the stratum, with the topmost level (primary servers) assigned
     * as one and each level downwards (secondary servers) in the hierarchy assigned as one greater than the preceding level.
     */
    syncedStratum?: pulumi.Input<string>;
    systemNtpClientId?: pulumi.Input<string>;
    /**
     * This is a signed, fixed-point number indicating the offset of the NTP server's clock relative to the local clock, in
     * seconds.
     */
    systemOffset?: pulumi.Input<string>;
    /**
     * The VRF table this resource operates on.
     */
    vrf?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SystemNtpClient resource.
 */
export interface SystemNtpClientArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Enable NTP client.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Mode that the NTP client will operate in
     */
    mode?: pulumi.Input<string>;
    /**
     * The list of NTP servers. It is possible to add static entries. The following formats are accepted: - FQDN ("Resolved
     * Address" will appear in the "Servers"- window in an appropriate column if the address is resolved) or IP address can be
     * used. If DHCP-Client property `use-peer-ntp=yes` - the dynamic entries advertised by DHCP - ipv4 - ipv4@vrf - ipv6 -
     * ipv6@vrf - ipv6-linklocal%interface
     */
    servers?: pulumi.Input<pulumi.Input<string>[]>;
    systemNtpClientId?: pulumi.Input<string>;
    /**
     * The VRF table this resource operates on.
     */
    vrf?: pulumi.Input<string>;
}
