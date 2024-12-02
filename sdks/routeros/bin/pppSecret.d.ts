import * as pulumi from "@pulumi/pulumi";
export declare class PppSecret extends pulumi.CustomResource {
    /**
     * Get an existing PppSecret resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PppSecretState, opts?: pulumi.CustomResourceOptions): PppSecret;
    /**
     * Returns true if the given object is an instance of PppSecret.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PppSecret;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * For PPTP and L2TP it is the IP address a client must connect from. For PPPoE it is the MAC address (written in CAPITAL
     * letters) a client must connect from. For ISDN it is the caller's number (that may or may not be provided by the
     * operator) the client may dial-in from.
     */
    readonly callerId: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * IPv6 routes.
     */
    readonly ipv6Routes: pulumi.Output<string[] | undefined>;
    readonly lastCallerId: pulumi.Output<string>;
    readonly lastDisconnectReason: pulumi.Output<string>;
    readonly lastLoggedOut: pulumi.Output<string>;
    /**
     * Maximal amount of bytes for a session that client can upload.
     */
    readonly limitBytesIn: pulumi.Output<number | undefined>;
    /**
     * Maximal amount of bytes for a session that client can download.
     */
    readonly limitBytesOut: pulumi.Output<number | undefined>;
    /**
     * IP address that will be set locally on ppp interface.
     */
    readonly localAddress: pulumi.Output<string | undefined>;
    /**
     * Name used for authentication.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Password used for authentication.
     */
    readonly password: pulumi.Output<string | undefined>;
    readonly pppSecretId: pulumi.Output<string>;
    /**
     * Which user profile to use.
     */
    readonly profile: pulumi.Output<string | undefined>;
    /**
     * IP address that will be assigned to remote ppp interface.
     */
    readonly remoteAddress: pulumi.Output<string | undefined>;
    /**
     * IPv6 prefix assigned to ppp client. Prefix is added to ND prefix list enabling stateless address auto-configuration on
     * ppp interface.Available starting from v5.0.
     */
    readonly remoteIpv6Prefix: pulumi.Output<string | undefined>;
    /**
     * Routes that appear on the server when the client is connected. The route format is: dst-address gateway metric (for
     * example, 10.1.0.0/ 24 10.0.0.1 1). Other syntax is not acceptable since it can be represented in incorrect way. Several
     * routes may be specified separated with commas. This parameter will be ignored for OpenVPN.
     */
    readonly routes: pulumi.Output<string[] | undefined>;
    /**
     * Specifies the services that particular user will be able to use.
     */
    readonly service: pulumi.Output<string | undefined>;
    /**
     * Create a PppSecret resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: PppSecretArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering PppSecret resources.
 */
export interface PppSecretState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * For PPTP and L2TP it is the IP address a client must connect from. For PPPoE it is the MAC address (written in CAPITAL
     * letters) a client must connect from. For ISDN it is the caller's number (that may or may not be provided by the
     * operator) the client may dial-in from.
     */
    callerId?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * IPv6 routes.
     */
    ipv6Routes?: pulumi.Input<pulumi.Input<string>[]>;
    lastCallerId?: pulumi.Input<string>;
    lastDisconnectReason?: pulumi.Input<string>;
    lastLoggedOut?: pulumi.Input<string>;
    /**
     * Maximal amount of bytes for a session that client can upload.
     */
    limitBytesIn?: pulumi.Input<number>;
    /**
     * Maximal amount of bytes for a session that client can download.
     */
    limitBytesOut?: pulumi.Input<number>;
    /**
     * IP address that will be set locally on ppp interface.
     */
    localAddress?: pulumi.Input<string>;
    /**
     * Name used for authentication.
     */
    name?: pulumi.Input<string>;
    /**
     * Password used for authentication.
     */
    password?: pulumi.Input<string>;
    pppSecretId?: pulumi.Input<string>;
    /**
     * Which user profile to use.
     */
    profile?: pulumi.Input<string>;
    /**
     * IP address that will be assigned to remote ppp interface.
     */
    remoteAddress?: pulumi.Input<string>;
    /**
     * IPv6 prefix assigned to ppp client. Prefix is added to ND prefix list enabling stateless address auto-configuration on
     * ppp interface.Available starting from v5.0.
     */
    remoteIpv6Prefix?: pulumi.Input<string>;
    /**
     * Routes that appear on the server when the client is connected. The route format is: dst-address gateway metric (for
     * example, 10.1.0.0/ 24 10.0.0.1 1). Other syntax is not acceptable since it can be represented in incorrect way. Several
     * routes may be specified separated with commas. This parameter will be ignored for OpenVPN.
     */
    routes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the services that particular user will be able to use.
     */
    service?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a PppSecret resource.
 */
export interface PppSecretArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * For PPTP and L2TP it is the IP address a client must connect from. For PPPoE it is the MAC address (written in CAPITAL
     * letters) a client must connect from. For ISDN it is the caller's number (that may or may not be provided by the
     * operator) the client may dial-in from.
     */
    callerId?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * IPv6 routes.
     */
    ipv6Routes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Maximal amount of bytes for a session that client can upload.
     */
    limitBytesIn?: pulumi.Input<number>;
    /**
     * Maximal amount of bytes for a session that client can download.
     */
    limitBytesOut?: pulumi.Input<number>;
    /**
     * IP address that will be set locally on ppp interface.
     */
    localAddress?: pulumi.Input<string>;
    /**
     * Name used for authentication.
     */
    name?: pulumi.Input<string>;
    /**
     * Password used for authentication.
     */
    password?: pulumi.Input<string>;
    pppSecretId?: pulumi.Input<string>;
    /**
     * Which user profile to use.
     */
    profile?: pulumi.Input<string>;
    /**
     * IP address that will be assigned to remote ppp interface.
     */
    remoteAddress?: pulumi.Input<string>;
    /**
     * IPv6 prefix assigned to ppp client. Prefix is added to ND prefix list enabling stateless address auto-configuration on
     * ppp interface.Available starting from v5.0.
     */
    remoteIpv6Prefix?: pulumi.Input<string>;
    /**
     * Routes that appear on the server when the client is connected. The route format is: dst-address gateway metric (for
     * example, 10.1.0.0/ 24 10.0.0.1 1). Other syntax is not acceptable since it can be represented in incorrect way. Several
     * routes may be specified separated with commas. This parameter will be ignored for OpenVPN.
     */
    routes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the services that particular user will be able to use.
     */
    service?: pulumi.Input<string>;
}
