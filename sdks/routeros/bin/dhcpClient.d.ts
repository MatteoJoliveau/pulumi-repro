import * as pulumi from "@pulumi/pulumi";
export declare class DhcpClient extends pulumi.CustomResource {
    /**
     * Get an existing DhcpClient resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DhcpClientState, opts?: pulumi.CustomResourceOptions): DhcpClient;
    /**
     * Returns true if the given object is an instance of DhcpClient.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DhcpClient;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Whether to install default route in routing table received from DHCP server.
     */
    readonly addDefaultRoute: pulumi.Output<string>;
    /**
     * IP address and netmask, which is assigned to DHCP Client from the Server.
     */
    readonly address: pulumi.Output<string>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * Distance of default route. Applicable if add-default-route is set to yes.
     */
    readonly defaultRouteDistance: pulumi.Output<number | undefined>;
    readonly dhcpClientId: pulumi.Output<string>;
    /**
     * Options that are sent to the DHCP server.
     */
    readonly dhcpOptions: pulumi.Output<string | undefined>;
    /**
     * The IP address of the DHCP server.
     */
    readonly dhcpServer: pulumi.Output<string>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    readonly dynamic: pulumi.Output<boolean>;
    /**
     * A time when the lease expires (specified by the DHCP server).
     */
    readonly expiresAfter: pulumi.Output<string>;
    /**
     * The IP address of the gateway which is assigned by DHCP server.
     */
    readonly gateway: pulumi.Output<string>;
    /**
     * Name of the interface.
     */
    readonly interface: pulumi.Output<string>;
    readonly invalid: pulumi.Output<boolean>;
    /**
     * The IP address of the first DNS resolver, that was assigned by the DHCP server.
     */
    readonly primaryDns: pulumi.Output<string>;
    /**
     * The IP address of the primary NTP server, assigned by the DHCP server.
     */
    readonly primaryNtp: pulumi.Output<string>;
    /**
     * A script.
     */
    readonly script: pulumi.Output<string | undefined>;
    /**
     * The IP address of the second DNS resolver, assigned by the DHCP server.
     */
    readonly secondaryDns: pulumi.Output<string>;
    /**
     * The IP address of the secondary NTP server, assigned by the DHCP server.
     */
    readonly secondaryNtp: pulumi.Output<string>;
    readonly status: pulumi.Output<string>;
    /**
     * Whether to accept the DNS settings advertised by DHCP Server (will override the settings put in the /ip dns submenu).
     */
    readonly usePeerDns: pulumi.Output<boolean | undefined>;
    /**
     * Whether to accept the NTP settings advertised by DHCP Server (will override the settings put in the /system ntp client
     * submenu).
     */
    readonly usePeerNtp: pulumi.Output<boolean | undefined>;
    /**
     * Create a DhcpClient resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DhcpClientArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DhcpClient resources.
 */
export interface DhcpClientState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to install default route in routing table received from DHCP server.
     */
    addDefaultRoute?: pulumi.Input<string>;
    /**
     * IP address and netmask, which is assigned to DHCP Client from the Server.
     */
    address?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Distance of default route. Applicable if add-default-route is set to yes.
     */
    defaultRouteDistance?: pulumi.Input<number>;
    dhcpClientId?: pulumi.Input<string>;
    /**
     * Options that are sent to the DHCP server.
     */
    dhcpOptions?: pulumi.Input<string>;
    /**
     * The IP address of the DHCP server.
     */
    dhcpServer?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    /**
     * A time when the lease expires (specified by the DHCP server).
     */
    expiresAfter?: pulumi.Input<string>;
    /**
     * The IP address of the gateway which is assigned by DHCP server.
     */
    gateway?: pulumi.Input<string>;
    /**
     * Name of the interface.
     */
    interface?: pulumi.Input<string>;
    invalid?: pulumi.Input<boolean>;
    /**
     * The IP address of the first DNS resolver, that was assigned by the DHCP server.
     */
    primaryDns?: pulumi.Input<string>;
    /**
     * The IP address of the primary NTP server, assigned by the DHCP server.
     */
    primaryNtp?: pulumi.Input<string>;
    /**
     * A script.
     */
    script?: pulumi.Input<string>;
    /**
     * The IP address of the second DNS resolver, assigned by the DHCP server.
     */
    secondaryDns?: pulumi.Input<string>;
    /**
     * The IP address of the secondary NTP server, assigned by the DHCP server.
     */
    secondaryNtp?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    /**
     * Whether to accept the DNS settings advertised by DHCP Server (will override the settings put in the /ip dns submenu).
     */
    usePeerDns?: pulumi.Input<boolean>;
    /**
     * Whether to accept the NTP settings advertised by DHCP Server (will override the settings put in the /system ntp client
     * submenu).
     */
    usePeerNtp?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a DhcpClient resource.
 */
export interface DhcpClientArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to install default route in routing table received from DHCP server.
     */
    addDefaultRoute?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Distance of default route. Applicable if add-default-route is set to yes.
     */
    defaultRouteDistance?: pulumi.Input<number>;
    dhcpClientId?: pulumi.Input<string>;
    /**
     * Options that are sent to the DHCP server.
     */
    dhcpOptions?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Name of the interface.
     */
    interface: pulumi.Input<string>;
    /**
     * A script.
     */
    script?: pulumi.Input<string>;
    /**
     * Whether to accept the DNS settings advertised by DHCP Server (will override the settings put in the /ip dns submenu).
     */
    usePeerDns?: pulumi.Input<boolean>;
    /**
     * Whether to accept the NTP settings advertised by DHCP Server (will override the settings put in the /system ntp client
     * submenu).
     */
    usePeerNtp?: pulumi.Input<boolean>;
}
