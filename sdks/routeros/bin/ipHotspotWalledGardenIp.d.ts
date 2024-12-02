import * as pulumi from "@pulumi/pulumi";
export declare class IpHotspotWalledGardenIp extends pulumi.CustomResource {
    /**
     * Get an existing IpHotspotWalledGardenIp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpHotspotWalledGardenIpState, opts?: pulumi.CustomResourceOptions): IpHotspotWalledGardenIp;
    /**
     * Returns true if the given object is an instance of IpHotspotWalledGardenIp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpHotspotWalledGardenIp;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Action to perform, when packet matches the rule allow - allow access to the web-page without authorization deny - the
     * authorization is required to access the web-page reject - the authorization is required to access the resource, ICMP
     * reject message will be sent to client, when packet will match the rule.
     */
    readonly action: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Destination IP address, IP address of the WEB-server. Ignored if dst-host is already specified.
     */
    readonly dstAddress: pulumi.Output<string | undefined>;
    /**
     * Destination IP address list. Ignored if dst-host is already specified.
     */
    readonly dstAddressList: pulumi.Output<string | undefined>;
    /**
     * Domain name of the destination web-server. When this parameter is specified dynamic entry is added to Walled Garden.
     */
    readonly dstHost: pulumi.Output<string | undefined>;
    /**
     * TCP port number, client sends request to.
     */
    readonly dstPort: pulumi.Output<string | undefined>;
    readonly invalid: pulumi.Output<boolean>;
    readonly ipHotspotWalledGardenIpId: pulumi.Output<string>;
    /**
     * IP protocol.
     */
    readonly protocol: pulumi.Output<string | undefined>;
    /**
     * Name of the HotSpot server, rule is applied to.
     */
    readonly server: pulumi.Output<string | undefined>;
    /**
     * Source address of the user, usually IP address of the HotSpot client.
     */
    readonly srcAddress: pulumi.Output<string | undefined>;
    /**
     * Source IP address list.
     */
    readonly srcAddressList: pulumi.Output<string | undefined>;
    /**
     * Create a IpHotspotWalledGardenIp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpHotspotWalledGardenIpArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpHotspotWalledGardenIp resources.
 */
export interface IpHotspotWalledGardenIpState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Action to perform, when packet matches the rule allow - allow access to the web-page without authorization deny - the
     * authorization is required to access the web-page reject - the authorization is required to access the resource, ICMP
     * reject message will be sent to client, when packet will match the rule.
     */
    action?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Destination IP address, IP address of the WEB-server. Ignored if dst-host is already specified.
     */
    dstAddress?: pulumi.Input<string>;
    /**
     * Destination IP address list. Ignored if dst-host is already specified.
     */
    dstAddressList?: pulumi.Input<string>;
    /**
     * Domain name of the destination web-server. When this parameter is specified dynamic entry is added to Walled Garden.
     */
    dstHost?: pulumi.Input<string>;
    /**
     * TCP port number, client sends request to.
     */
    dstPort?: pulumi.Input<string>;
    invalid?: pulumi.Input<boolean>;
    ipHotspotWalledGardenIpId?: pulumi.Input<string>;
    /**
     * IP protocol.
     */
    protocol?: pulumi.Input<string>;
    /**
     * Name of the HotSpot server, rule is applied to.
     */
    server?: pulumi.Input<string>;
    /**
     * Source address of the user, usually IP address of the HotSpot client.
     */
    srcAddress?: pulumi.Input<string>;
    /**
     * Source IP address list.
     */
    srcAddressList?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IpHotspotWalledGardenIp resource.
 */
export interface IpHotspotWalledGardenIpArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Action to perform, when packet matches the rule allow - allow access to the web-page without authorization deny - the
     * authorization is required to access the web-page reject - the authorization is required to access the resource, ICMP
     * reject message will be sent to client, when packet will match the rule.
     */
    action?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Destination IP address, IP address of the WEB-server. Ignored if dst-host is already specified.
     */
    dstAddress?: pulumi.Input<string>;
    /**
     * Destination IP address list. Ignored if dst-host is already specified.
     */
    dstAddressList?: pulumi.Input<string>;
    /**
     * Domain name of the destination web-server. When this parameter is specified dynamic entry is added to Walled Garden.
     */
    dstHost?: pulumi.Input<string>;
    /**
     * TCP port number, client sends request to.
     */
    dstPort?: pulumi.Input<string>;
    ipHotspotWalledGardenIpId?: pulumi.Input<string>;
    /**
     * IP protocol.
     */
    protocol?: pulumi.Input<string>;
    /**
     * Name of the HotSpot server, rule is applied to.
     */
    server?: pulumi.Input<string>;
    /**
     * Source address of the user, usually IP address of the HotSpot client.
     */
    srcAddress?: pulumi.Input<string>;
    /**
     * Source IP address list.
     */
    srcAddressList?: pulumi.Input<string>;
}
