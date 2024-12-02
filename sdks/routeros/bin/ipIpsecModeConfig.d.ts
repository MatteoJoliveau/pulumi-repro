import * as pulumi from "@pulumi/pulumi";
export declare class IpIpsecModeConfig extends pulumi.CustomResource {
    /**
     * Get an existing IpIpsecModeConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpIpsecModeConfigState, opts?: pulumi.CustomResourceOptions): IpIpsecModeConfig;
    /**
     * Returns true if the given object is an instance of IpIpsecModeConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpIpsecModeConfig;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Single IP address for the initiator instead of specifying a whole address pool.
     */
    readonly address: pulumi.Output<string | undefined>;
    /**
     * Name of the address pool from which the responder will try to assign address if mode-config is enabled.
     */
    readonly addressPool: pulumi.Output<string | undefined>;
    /**
     * Prefix length (netmask) of the assigned address from the pool.
     */
    readonly addressPrefixLength: pulumi.Output<number | undefined>;
    /**
     * Firewall connection mark.
     */
    readonly connectionMark: pulumi.Output<string | undefined>;
    readonly ipIpsecModeConfigId: pulumi.Output<string>;
    readonly name: pulumi.Output<string>;
    /**
     * Specifies whether the configuration will work as an initiator (client) or responder (server). The initiator will request
     * for mode-config parameters from the responder.
     */
    readonly responder: pulumi.Output<boolean | undefined>;
    /**
     * List of DNS names that will be resolved using a system-dns=yes or static-dns= setting.
     */
    readonly splitDns: pulumi.Output<string[] | undefined>;
    /**
     * List of subnets in CIDR format, which to tunnel. Subnets will be sent to the peer using the CISCO UNITY extension, a
     * remote peer will create specific dynamic policies.
     */
    readonly splitIncludes: pulumi.Output<string[] | undefined>;
    /**
     * Specifying an address list will generate dynamic source NAT rules. This parameter is only available with responder=no. A
     * roadWarrior client with NAT.
     */
    readonly srcAddressList: pulumi.Output<string | undefined>;
    /**
     * Manually specified DNS server's IP address to be sent to the client.
     */
    readonly staticDns: pulumi.Output<string | undefined>;
    /**
     * When this option is enabled DNS addresses will be taken from `/ip dns`.
     */
    readonly systemDns: pulumi.Output<boolean | undefined>;
    readonly useResponderDns: pulumi.Output<string | undefined>;
    /**
     * Create a IpIpsecModeConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpIpsecModeConfigArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpIpsecModeConfig resources.
 */
export interface IpIpsecModeConfigState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Single IP address for the initiator instead of specifying a whole address pool.
     */
    address?: pulumi.Input<string>;
    /**
     * Name of the address pool from which the responder will try to assign address if mode-config is enabled.
     */
    addressPool?: pulumi.Input<string>;
    /**
     * Prefix length (netmask) of the assigned address from the pool.
     */
    addressPrefixLength?: pulumi.Input<number>;
    /**
     * Firewall connection mark.
     */
    connectionMark?: pulumi.Input<string>;
    ipIpsecModeConfigId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * Specifies whether the configuration will work as an initiator (client) or responder (server). The initiator will request
     * for mode-config parameters from the responder.
     */
    responder?: pulumi.Input<boolean>;
    /**
     * List of DNS names that will be resolved using a system-dns=yes or static-dns= setting.
     */
    splitDns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of subnets in CIDR format, which to tunnel. Subnets will be sent to the peer using the CISCO UNITY extension, a
     * remote peer will create specific dynamic policies.
     */
    splitIncludes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifying an address list will generate dynamic source NAT rules. This parameter is only available with responder=no. A
     * roadWarrior client with NAT.
     */
    srcAddressList?: pulumi.Input<string>;
    /**
     * Manually specified DNS server's IP address to be sent to the client.
     */
    staticDns?: pulumi.Input<string>;
    /**
     * When this option is enabled DNS addresses will be taken from `/ip dns`.
     */
    systemDns?: pulumi.Input<boolean>;
    useResponderDns?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IpIpsecModeConfig resource.
 */
export interface IpIpsecModeConfigArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Single IP address for the initiator instead of specifying a whole address pool.
     */
    address?: pulumi.Input<string>;
    /**
     * Name of the address pool from which the responder will try to assign address if mode-config is enabled.
     */
    addressPool?: pulumi.Input<string>;
    /**
     * Prefix length (netmask) of the assigned address from the pool.
     */
    addressPrefixLength?: pulumi.Input<number>;
    /**
     * Firewall connection mark.
     */
    connectionMark?: pulumi.Input<string>;
    ipIpsecModeConfigId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * Specifies whether the configuration will work as an initiator (client) or responder (server). The initiator will request
     * for mode-config parameters from the responder.
     */
    responder?: pulumi.Input<boolean>;
    /**
     * List of DNS names that will be resolved using a system-dns=yes or static-dns= setting.
     */
    splitDns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of subnets in CIDR format, which to tunnel. Subnets will be sent to the peer using the CISCO UNITY extension, a
     * remote peer will create specific dynamic policies.
     */
    splitIncludes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifying an address list will generate dynamic source NAT rules. This parameter is only available with responder=no. A
     * roadWarrior client with NAT.
     */
    srcAddressList?: pulumi.Input<string>;
    /**
     * Manually specified DNS server's IP address to be sent to the client.
     */
    staticDns?: pulumi.Input<string>;
    /**
     * When this option is enabled DNS addresses will be taken from `/ip dns`.
     */
    systemDns?: pulumi.Input<boolean>;
    useResponderDns?: pulumi.Input<string>;
}
