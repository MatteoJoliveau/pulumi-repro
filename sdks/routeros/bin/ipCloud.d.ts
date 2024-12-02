import * as pulumi from "@pulumi/pulumi";
export declare class IpCloud extends pulumi.CustomResource {
    /**
     * Get an existing IpCloud resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpCloudState, opts?: pulumi.CustomResourceOptions): IpCloud;
    /**
     * Returns true if the given object is an instance of IpCloud.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpCloud;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Enables or revokes and disables the Back to Home service. ddns-enabled has to be set to yes, for BTH to function.
     */
    readonly backToHomeVpn: pulumi.Output<string | undefined>;
    /**
     * If set to yes, then the device will send an encrypted message to the MikroTik's Cloud server. The server will then
     * decrypt the message and verify that the sender is an authentic MikroTik device. If all is OK, then the MikroTik's Cloud
     * server will create a DDNS record for this device and send a response to the device. Every minute the IP/Cloud service on
     * the router will check if WAN IP address matches the one sent to MikroTik's Cloud server and will send encrypted update
     * to cloud server if IP address changes.
     */
    readonly ddnsEnabled: pulumi.Output<boolean | undefined>;
    /**
     * If set DDNS will attempt to connect IP Cloud servers at the set interval. If set to none it will continue to internally
     * check IP address update and connect to IP Cloud servers as needed. Useful if IP address used is not on the router itself
     * and thus, cannot be checked as a value internal to the router.
     */
    readonly ddnsUpdateInterval: pulumi.Output<string | undefined>;
    /**
     * Shows DNS name assigned to the rdevice. Name consists of 12 character serial number appended by .sn.mynetname.net. This
     * field is visible only after at least one ddns-request is successfully completed.
     */
    readonly dnsName: pulumi.Output<string>;
    readonly ipCloudId: pulumi.Output<string>;
    /**
     * Shows device's IPv4 address that was sent to cloud server. This field is visible only after at least one IP Cloud
     * request was successfully completed.
     */
    readonly publicAddress: pulumi.Output<string>;
    /**
     * Shows device's IPv6 address that was sent to cloud server. This field is visible only after at least one IP Cloud
     * request was successfully completed.
     */
    readonly publicAddressIpv6: pulumi.Output<string>;
    /**
     * Contains text string that describes current dns-service state. The messages are self explanatory updating... updated
     * Error: no Internet connection Error: request timed out Error: REJECTED. Contact MikroTik support Error: internal error -
     * should not happen. One possible cause is if router runs out of memory.
     */
    readonly status: pulumi.Output<string>;
    /**
     * If set to yes then router clock will be set to time, provided by cloud server IF there is no NTP or SNTP client enabled.
     * If set to no, then IP/Cloud service will never update the device's clock. If update-time is set to yes, Clock will be
     * updated even when ddns-enabled is set to no.
     */
    readonly updateTime: pulumi.Output<boolean | undefined>;
    /**
     * Shows a warning message if IP address sent by the device differs from the IP address in UDP packet header as visible by
     * the MikroTik's Cloud server. Typically this happens if the device is behind NAT. Example: 'DDNS server received request
     * from IP 123.123.123.123 but your local IP was 192.168.88.23; DDNS service might not work'
     */
    readonly warning: pulumi.Output<string>;
    /**
     * Create a IpCloud resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpCloudArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpCloud resources.
 */
export interface IpCloudState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Enables or revokes and disables the Back to Home service. ddns-enabled has to be set to yes, for BTH to function.
     */
    backToHomeVpn?: pulumi.Input<string>;
    /**
     * If set to yes, then the device will send an encrypted message to the MikroTik's Cloud server. The server will then
     * decrypt the message and verify that the sender is an authentic MikroTik device. If all is OK, then the MikroTik's Cloud
     * server will create a DDNS record for this device and send a response to the device. Every minute the IP/Cloud service on
     * the router will check if WAN IP address matches the one sent to MikroTik's Cloud server and will send encrypted update
     * to cloud server if IP address changes.
     */
    ddnsEnabled?: pulumi.Input<boolean>;
    /**
     * If set DDNS will attempt to connect IP Cloud servers at the set interval. If set to none it will continue to internally
     * check IP address update and connect to IP Cloud servers as needed. Useful if IP address used is not on the router itself
     * and thus, cannot be checked as a value internal to the router.
     */
    ddnsUpdateInterval?: pulumi.Input<string>;
    /**
     * Shows DNS name assigned to the rdevice. Name consists of 12 character serial number appended by .sn.mynetname.net. This
     * field is visible only after at least one ddns-request is successfully completed.
     */
    dnsName?: pulumi.Input<string>;
    ipCloudId?: pulumi.Input<string>;
    /**
     * Shows device's IPv4 address that was sent to cloud server. This field is visible only after at least one IP Cloud
     * request was successfully completed.
     */
    publicAddress?: pulumi.Input<string>;
    /**
     * Shows device's IPv6 address that was sent to cloud server. This field is visible only after at least one IP Cloud
     * request was successfully completed.
     */
    publicAddressIpv6?: pulumi.Input<string>;
    /**
     * Contains text string that describes current dns-service state. The messages are self explanatory updating... updated
     * Error: no Internet connection Error: request timed out Error: REJECTED. Contact MikroTik support Error: internal error -
     * should not happen. One possible cause is if router runs out of memory.
     */
    status?: pulumi.Input<string>;
    /**
     * If set to yes then router clock will be set to time, provided by cloud server IF there is no NTP or SNTP client enabled.
     * If set to no, then IP/Cloud service will never update the device's clock. If update-time is set to yes, Clock will be
     * updated even when ddns-enabled is set to no.
     */
    updateTime?: pulumi.Input<boolean>;
    /**
     * Shows a warning message if IP address sent by the device differs from the IP address in UDP packet header as visible by
     * the MikroTik's Cloud server. Typically this happens if the device is behind NAT. Example: 'DDNS server received request
     * from IP 123.123.123.123 but your local IP was 192.168.88.23; DDNS service might not work'
     */
    warning?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IpCloud resource.
 */
export interface IpCloudArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Enables or revokes and disables the Back to Home service. ddns-enabled has to be set to yes, for BTH to function.
     */
    backToHomeVpn?: pulumi.Input<string>;
    /**
     * If set to yes, then the device will send an encrypted message to the MikroTik's Cloud server. The server will then
     * decrypt the message and verify that the sender is an authentic MikroTik device. If all is OK, then the MikroTik's Cloud
     * server will create a DDNS record for this device and send a response to the device. Every minute the IP/Cloud service on
     * the router will check if WAN IP address matches the one sent to MikroTik's Cloud server and will send encrypted update
     * to cloud server if IP address changes.
     */
    ddnsEnabled?: pulumi.Input<boolean>;
    /**
     * If set DDNS will attempt to connect IP Cloud servers at the set interval. If set to none it will continue to internally
     * check IP address update and connect to IP Cloud servers as needed. Useful if IP address used is not on the router itself
     * and thus, cannot be checked as a value internal to the router.
     */
    ddnsUpdateInterval?: pulumi.Input<string>;
    ipCloudId?: pulumi.Input<string>;
    /**
     * If set to yes then router clock will be set to time, provided by cloud server IF there is no NTP or SNTP client enabled.
     * If set to no, then IP/Cloud service will never update the device's clock. If update-time is set to yes, Clock will be
     * updated even when ddns-enabled is set to no.
     */
    updateTime?: pulumi.Input<boolean>;
}
