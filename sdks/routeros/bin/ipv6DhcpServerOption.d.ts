import * as pulumi from "@pulumi/pulumi";
export declare class Ipv6DhcpServerOption extends pulumi.CustomResource {
    /**
     * Get an existing Ipv6DhcpServerOption resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ipv6DhcpServerOptionState, opts?: pulumi.CustomResourceOptions): Ipv6DhcpServerOption;
    /**
     * Returns true if the given object is an instance of Ipv6DhcpServerOption.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Ipv6DhcpServerOption;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Dhcp option [code](https://www.ipamworldwide.com/ipam/isc-dhcpv6-options.html).
     */
    readonly code: pulumi.Output<number>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly ipv6DhcpServerOptionId: pulumi.Output<string>;
    /**
     * Descriptive name of the option.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Read-only field which shows raw DHCP option value (the format actually sent out).
     */
    readonly rawValue: pulumi.Output<string>;
    /**
     * Parameter's value. Available data types for options are: - `'test'` > ASCII to Hex 0x74657374 - `'10.10.10.10'` >
     * Unicode IP to Hex 0x0a0a0a0a - `s'10.10.10.10'` > ASCII to Hex 0x31302e31302e31302e3130 - `s'160'` > ASCII to Hex
     * 0x313630 - `'10'` > Decimal to Hex 0x0a - `0x0a0a` > No conversion - `$(VARIABLE)` > hardcoded values RouterOS has
     * predefined variables that can be used: - `HOSTNAME` - client hostname - `RADIUS_MT_STR1` - from radius MT attr nr. `24`
     * - `RADIUS_MT_STR2` - from radius MT attr nr. `25` - `REMOTE_ID` - agent remote-id - `NETWORK_GATEWAY - the first gateway
     * from `/ip dhcp-server network`, note that this option won't work if used from lease. Now it is also possible to combine
     * data types into one, for example: `0x01'vards'$(HOSTNAME)`For example if HOSTNAME is 'kvm', then raw value will be
     * 0x0176617264736b766d.
     */
    readonly value: pulumi.Output<string | undefined>;
    /**
     * Create a Ipv6DhcpServerOption resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Ipv6DhcpServerOptionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Ipv6DhcpServerOption resources.
 */
export interface Ipv6DhcpServerOptionState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Dhcp option [code](https://www.ipamworldwide.com/ipam/isc-dhcpv6-options.html).
     */
    code?: pulumi.Input<number>;
    comment?: pulumi.Input<string>;
    ipv6DhcpServerOptionId?: pulumi.Input<string>;
    /**
     * Descriptive name of the option.
     */
    name?: pulumi.Input<string>;
    /**
     * Read-only field which shows raw DHCP option value (the format actually sent out).
     */
    rawValue?: pulumi.Input<string>;
    /**
     * Parameter's value. Available data types for options are: - `'test'` > ASCII to Hex 0x74657374 - `'10.10.10.10'` >
     * Unicode IP to Hex 0x0a0a0a0a - `s'10.10.10.10'` > ASCII to Hex 0x31302e31302e31302e3130 - `s'160'` > ASCII to Hex
     * 0x313630 - `'10'` > Decimal to Hex 0x0a - `0x0a0a` > No conversion - `$(VARIABLE)` > hardcoded values RouterOS has
     * predefined variables that can be used: - `HOSTNAME` - client hostname - `RADIUS_MT_STR1` - from radius MT attr nr. `24`
     * - `RADIUS_MT_STR2` - from radius MT attr nr. `25` - `REMOTE_ID` - agent remote-id - `NETWORK_GATEWAY - the first gateway
     * from `/ip dhcp-server network`, note that this option won't work if used from lease. Now it is also possible to combine
     * data types into one, for example: `0x01'vards'$(HOSTNAME)`For example if HOSTNAME is 'kvm', then raw value will be
     * 0x0176617264736b766d.
     */
    value?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Ipv6DhcpServerOption resource.
 */
export interface Ipv6DhcpServerOptionArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Dhcp option [code](https://www.ipamworldwide.com/ipam/isc-dhcpv6-options.html).
     */
    code: pulumi.Input<number>;
    comment?: pulumi.Input<string>;
    ipv6DhcpServerOptionId?: pulumi.Input<string>;
    /**
     * Descriptive name of the option.
     */
    name?: pulumi.Input<string>;
    /**
     * Parameter's value. Available data types for options are: - `'test'` > ASCII to Hex 0x74657374 - `'10.10.10.10'` >
     * Unicode IP to Hex 0x0a0a0a0a - `s'10.10.10.10'` > ASCII to Hex 0x31302e31302e31302e3130 - `s'160'` > ASCII to Hex
     * 0x313630 - `'10'` > Decimal to Hex 0x0a - `0x0a0a` > No conversion - `$(VARIABLE)` > hardcoded values RouterOS has
     * predefined variables that can be used: - `HOSTNAME` - client hostname - `RADIUS_MT_STR1` - from radius MT attr nr. `24`
     * - `RADIUS_MT_STR2` - from radius MT attr nr. `25` - `REMOTE_ID` - agent remote-id - `NETWORK_GATEWAY - the first gateway
     * from `/ip dhcp-server network`, note that this option won't work if used from lease. Now it is also possible to combine
     * data types into one, for example: `0x01'vards'$(HOSTNAME)`For example if HOSTNAME is 'kvm', then raw value will be
     * 0x0176617264736b766d.
     */
    value?: pulumi.Input<string>;
}
