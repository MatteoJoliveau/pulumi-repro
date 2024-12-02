import * as pulumi from "@pulumi/pulumi";
export declare class IpHotspot extends pulumi.CustomResource {
    /**
     * Get an existing IpHotspot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpHotspotState, opts?: pulumi.CustomResourceOptions): IpHotspot;
    /**
     * Returns true if the given object is an instance of IpHotspot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpHotspot;
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
     * Address space used to change HotSpot client any IP address to a valid address. Useful for providing public network
     * access to mobile clients that are not willing to change their networking settings.
     */
    readonly addressPool: pulumi.Output<string | undefined>;
    /**
     * Number of IP addresses allowed to be bind with the MAC address, when multiple HotSpot clients connected with one
     * MAC-address.
     */
    readonly addressesPerMac: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Period of inactivity for unauthorized clients. When there is no traffic from this client (literally client computer
     * should be switched off), once the timeout is reached, a user is dropped from the HotSpot host list, its used address
     * becomes available.
     */
    readonly idleTimeout: pulumi.Output<string | undefined>;
    /**
     * Interface to run HotSpot on.
     */
    readonly interface: pulumi.Output<string>;
    readonly invalid: pulumi.Output<boolean>;
    readonly ipHotspotId: pulumi.Output<string>;
    /**
     * The exact value of the keepalive-timeout, that is applied to the user. Value shows how long the host can stay out of
     * reach to be removed from the HotSpot.
     */
    readonly keepaliveTimeout: pulumi.Output<string | undefined>;
    /**
     * Period of time after which if a host hasn't been authorized itself with a system the host entry gets deleted from host
     * table. Loop repeats until the host logs in the system. Enable if there are situations where a host cannot log in after
     * being too long in the host table unauthorized.
     */
    readonly loginTimeout: pulumi.Output<string | undefined>;
    /**
     * HotSpot server's name or identifier.
     */
    readonly name: pulumi.Output<string>;
    /**
     * HotSpot server default HotSpot profile, which is located in `/ip/hotspot/profile`.
     */
    readonly profile: pulumi.Output<string | undefined>;
    /**
     * Create a IpHotspot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpHotspotArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpHotspot resources.
 */
export interface IpHotspotState {
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
     * Address space used to change HotSpot client any IP address to a valid address. Useful for providing public network
     * access to mobile clients that are not willing to change their networking settings.
     */
    addressPool?: pulumi.Input<string>;
    /**
     * Number of IP addresses allowed to be bind with the MAC address, when multiple HotSpot clients connected with one
     * MAC-address.
     */
    addressesPerMac?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Period of inactivity for unauthorized clients. When there is no traffic from this client (literally client computer
     * should be switched off), once the timeout is reached, a user is dropped from the HotSpot host list, its used address
     * becomes available.
     */
    idleTimeout?: pulumi.Input<string>;
    /**
     * Interface to run HotSpot on.
     */
    interface?: pulumi.Input<string>;
    invalid?: pulumi.Input<boolean>;
    ipHotspotId?: pulumi.Input<string>;
    /**
     * The exact value of the keepalive-timeout, that is applied to the user. Value shows how long the host can stay out of
     * reach to be removed from the HotSpot.
     */
    keepaliveTimeout?: pulumi.Input<string>;
    /**
     * Period of time after which if a host hasn't been authorized itself with a system the host entry gets deleted from host
     * table. Loop repeats until the host logs in the system. Enable if there are situations where a host cannot log in after
     * being too long in the host table unauthorized.
     */
    loginTimeout?: pulumi.Input<string>;
    /**
     * HotSpot server's name or identifier.
     */
    name?: pulumi.Input<string>;
    /**
     * HotSpot server default HotSpot profile, which is located in `/ip/hotspot/profile`.
     */
    profile?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IpHotspot resource.
 */
export interface IpHotspotArgs {
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
     * Address space used to change HotSpot client any IP address to a valid address. Useful for providing public network
     * access to mobile clients that are not willing to change their networking settings.
     */
    addressPool?: pulumi.Input<string>;
    /**
     * Number of IP addresses allowed to be bind with the MAC address, when multiple HotSpot clients connected with one
     * MAC-address.
     */
    addressesPerMac?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Period of inactivity for unauthorized clients. When there is no traffic from this client (literally client computer
     * should be switched off), once the timeout is reached, a user is dropped from the HotSpot host list, its used address
     * becomes available.
     */
    idleTimeout?: pulumi.Input<string>;
    /**
     * Interface to run HotSpot on.
     */
    interface: pulumi.Input<string>;
    ipHotspotId?: pulumi.Input<string>;
    /**
     * The exact value of the keepalive-timeout, that is applied to the user. Value shows how long the host can stay out of
     * reach to be removed from the HotSpot.
     */
    keepaliveTimeout?: pulumi.Input<string>;
    /**
     * Period of time after which if a host hasn't been authorized itself with a system the host entry gets deleted from host
     * table. Loop repeats until the host logs in the system. Enable if there are situations where a host cannot log in after
     * being too long in the host table unauthorized.
     */
    loginTimeout?: pulumi.Input<string>;
    /**
     * HotSpot server's name or identifier.
     */
    name?: pulumi.Input<string>;
    /**
     * HotSpot server default HotSpot profile, which is located in `/ip/hotspot/profile`.
     */
    profile?: pulumi.Input<string>;
}
