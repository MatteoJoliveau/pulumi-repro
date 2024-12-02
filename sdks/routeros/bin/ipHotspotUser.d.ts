import * as pulumi from "@pulumi/pulumi";
export declare class IpHotspotUser extends pulumi.CustomResource {
    /**
     * Get an existing IpHotspotUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpHotspotUserState, opts?: pulumi.CustomResourceOptions): IpHotspotUser;
    /**
     * Returns true if the given object is an instance of IpHotspotUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpHotspotUser;
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
     * IP address, when specified client will get the address from the HotSpot one-to-one NAT translations. Address does not
     * restrict HotSpot login only from this address.
     */
    readonly address: pulumi.Output<number | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * It's the default item.
     */
    readonly default: pulumi.Output<boolean>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    readonly dynamic: pulumi.Output<boolean>;
    /**
     * HotSpot client's e-mail, informational value for the HotSpot user.
     */
    readonly email: pulumi.Output<string | undefined>;
    readonly ipHotspotUserId: pulumi.Output<string>;
    /**
     * Maximal amount of bytes that can be received from the user. User is disconnected from HotSpot after the limit is
     * reached.
     */
    readonly limitBytesIn: pulumi.Output<number | undefined>;
    /**
     * Maximal amount of bytes that can be transmitted from the user. User is disconnected from HotSpot after the limit is
     * reached.
     */
    readonly limitBytesOut: pulumi.Output<number | undefined>;
    /**
     * (limit-bytes-in+limit-bytes-out). User is disconnected from HotSpot after the limit is reached.
     */
    readonly limitBytesTotal: pulumi.Output<number | undefined>;
    /**
     * Uptime limit for the HotSpot client, user is disconnected from HotSpot as soon as uptime is reached.
     */
    readonly limitUptime: pulumi.Output<number | undefined>;
    /**
     * Client is allowed to login only from the specified MAC-address. If value is 00:00:00:00:00:00, any mac address is
     * allowed.
     */
    readonly macAddress: pulumi.Output<number | undefined>;
    /**
     * HotSpot login page username, when MAC-address authentication is used name is configured as client's MAC-address.
     */
    readonly name: pulumi.Output<string>;
    /**
     * User password.
     */
    readonly password: pulumi.Output<string | undefined>;
    /**
     * User profile configured in `/ip hotspot user profile`.
     */
    readonly profile: pulumi.Output<string | undefined>;
    /**
     * Routes added to HotSpot gateway when client is connected. The route format dst-address gateway metric (for example,
     * `192.168.1.0/24 192.168.0.1 1`).
     */
    readonly routes: pulumi.Output<string | undefined>;
    /**
     * HotSpot server's name to which user is allowed login.
     */
    readonly server: pulumi.Output<string | undefined>;
    /**
     * Create a IpHotspotUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpHotspotUserArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpHotspotUser resources.
 */
export interface IpHotspotUserState {
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
     * IP address, when specified client will get the address from the HotSpot one-to-one NAT translations. Address does not
     * restrict HotSpot login only from this address.
     */
    address?: pulumi.Input<number>;
    comment?: pulumi.Input<string>;
    /**
     * It's the default item.
     */
    default?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    /**
     * HotSpot client's e-mail, informational value for the HotSpot user.
     */
    email?: pulumi.Input<string>;
    ipHotspotUserId?: pulumi.Input<string>;
    /**
     * Maximal amount of bytes that can be received from the user. User is disconnected from HotSpot after the limit is
     * reached.
     */
    limitBytesIn?: pulumi.Input<number>;
    /**
     * Maximal amount of bytes that can be transmitted from the user. User is disconnected from HotSpot after the limit is
     * reached.
     */
    limitBytesOut?: pulumi.Input<number>;
    /**
     * (limit-bytes-in+limit-bytes-out). User is disconnected from HotSpot after the limit is reached.
     */
    limitBytesTotal?: pulumi.Input<number>;
    /**
     * Uptime limit for the HotSpot client, user is disconnected from HotSpot as soon as uptime is reached.
     */
    limitUptime?: pulumi.Input<number>;
    /**
     * Client is allowed to login only from the specified MAC-address. If value is 00:00:00:00:00:00, any mac address is
     * allowed.
     */
    macAddress?: pulumi.Input<number>;
    /**
     * HotSpot login page username, when MAC-address authentication is used name is configured as client's MAC-address.
     */
    name?: pulumi.Input<string>;
    /**
     * User password.
     */
    password?: pulumi.Input<string>;
    /**
     * User profile configured in `/ip hotspot user profile`.
     */
    profile?: pulumi.Input<string>;
    /**
     * Routes added to HotSpot gateway when client is connected. The route format dst-address gateway metric (for example,
     * `192.168.1.0/24 192.168.0.1 1`).
     */
    routes?: pulumi.Input<string>;
    /**
     * HotSpot server's name to which user is allowed login.
     */
    server?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IpHotspotUser resource.
 */
export interface IpHotspotUserArgs {
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
     * IP address, when specified client will get the address from the HotSpot one-to-one NAT translations. Address does not
     * restrict HotSpot login only from this address.
     */
    address?: pulumi.Input<number>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * HotSpot client's e-mail, informational value for the HotSpot user.
     */
    email?: pulumi.Input<string>;
    ipHotspotUserId?: pulumi.Input<string>;
    /**
     * Maximal amount of bytes that can be received from the user. User is disconnected from HotSpot after the limit is
     * reached.
     */
    limitBytesIn?: pulumi.Input<number>;
    /**
     * Maximal amount of bytes that can be transmitted from the user. User is disconnected from HotSpot after the limit is
     * reached.
     */
    limitBytesOut?: pulumi.Input<number>;
    /**
     * (limit-bytes-in+limit-bytes-out). User is disconnected from HotSpot after the limit is reached.
     */
    limitBytesTotal?: pulumi.Input<number>;
    /**
     * Uptime limit for the HotSpot client, user is disconnected from HotSpot as soon as uptime is reached.
     */
    limitUptime?: pulumi.Input<number>;
    /**
     * Client is allowed to login only from the specified MAC-address. If value is 00:00:00:00:00:00, any mac address is
     * allowed.
     */
    macAddress?: pulumi.Input<number>;
    /**
     * HotSpot login page username, when MAC-address authentication is used name is configured as client's MAC-address.
     */
    name?: pulumi.Input<string>;
    /**
     * User password.
     */
    password?: pulumi.Input<string>;
    /**
     * User profile configured in `/ip hotspot user profile`.
     */
    profile?: pulumi.Input<string>;
    /**
     * Routes added to HotSpot gateway when client is connected. The route format dst-address gateway metric (for example,
     * `192.168.1.0/24 192.168.0.1 1`).
     */
    routes?: pulumi.Input<string>;
    /**
     * HotSpot server's name to which user is allowed login.
     */
    server?: pulumi.Input<string>;
}
