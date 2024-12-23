// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PppSecret extends pulumi.CustomResource {
    /**
     * Get an existing PppSecret resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PppSecretState, opts?: pulumi.CustomResourceOptions): PppSecret {
        return new PppSecret(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/pppSecret:PppSecret';

    /**
     * Returns true if the given object is an instance of PppSecret.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PppSecret {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PppSecret.__pulumiType;
    }

    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    public readonly ___id_!: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    public readonly ___path_!: pulumi.Output<string | undefined>;
    /**
     * For PPTP and L2TP it is the IP address a client must connect from. For PPPoE it is the MAC address (written in CAPITAL
     * letters) a client must connect from. For ISDN it is the caller's number (that may or may not be provided by the
     * operator) the client may dial-in from.
     */
    public readonly callerId!: pulumi.Output<string | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * IPv6 routes.
     */
    public readonly ipv6Routes!: pulumi.Output<string[] | undefined>;
    public /*out*/ readonly lastCallerId!: pulumi.Output<string>;
    public /*out*/ readonly lastDisconnectReason!: pulumi.Output<string>;
    public /*out*/ readonly lastLoggedOut!: pulumi.Output<string>;
    /**
     * Maximal amount of bytes for a session that client can upload.
     */
    public readonly limitBytesIn!: pulumi.Output<number | undefined>;
    /**
     * Maximal amount of bytes for a session that client can download.
     */
    public readonly limitBytesOut!: pulumi.Output<number | undefined>;
    /**
     * IP address that will be set locally on ppp interface.
     */
    public readonly localAddress!: pulumi.Output<string | undefined>;
    /**
     * Name used for authentication.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Password used for authentication.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    public readonly pppSecretId!: pulumi.Output<string>;
    /**
     * Which user profile to use.
     */
    public readonly profile!: pulumi.Output<string | undefined>;
    /**
     * IP address that will be assigned to remote ppp interface.
     */
    public readonly remoteAddress!: pulumi.Output<string | undefined>;
    /**
     * IPv6 prefix assigned to ppp client. Prefix is added to ND prefix list enabling stateless address auto-configuration on
     * ppp interface.Available starting from v5.0.
     */
    public readonly remoteIpv6Prefix!: pulumi.Output<string | undefined>;
    /**
     * Routes that appear on the server when the client is connected. The route format is: dst-address gateway metric (for
     * example, 10.1.0.0/ 24 10.0.0.1 1). Other syntax is not acceptable since it can be represented in incorrect way. Several
     * routes may be specified separated with commas. This parameter will be ignored for OpenVPN.
     */
    public readonly routes!: pulumi.Output<string[] | undefined>;
    /**
     * Specifies the services that particular user will be able to use.
     */
    public readonly service!: pulumi.Output<string | undefined>;

    /**
     * Create a PppSecret resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: PppSecretArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PppSecretArgs | PppSecretState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PppSecretState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["callerId"] = state ? state.callerId : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["ipv6Routes"] = state ? state.ipv6Routes : undefined;
            resourceInputs["lastCallerId"] = state ? state.lastCallerId : undefined;
            resourceInputs["lastDisconnectReason"] = state ? state.lastDisconnectReason : undefined;
            resourceInputs["lastLoggedOut"] = state ? state.lastLoggedOut : undefined;
            resourceInputs["limitBytesIn"] = state ? state.limitBytesIn : undefined;
            resourceInputs["limitBytesOut"] = state ? state.limitBytesOut : undefined;
            resourceInputs["localAddress"] = state ? state.localAddress : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["pppSecretId"] = state ? state.pppSecretId : undefined;
            resourceInputs["profile"] = state ? state.profile : undefined;
            resourceInputs["remoteAddress"] = state ? state.remoteAddress : undefined;
            resourceInputs["remoteIpv6Prefix"] = state ? state.remoteIpv6Prefix : undefined;
            resourceInputs["routes"] = state ? state.routes : undefined;
            resourceInputs["service"] = state ? state.service : undefined;
        } else {
            const args = argsOrState as PppSecretArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["callerId"] = args ? args.callerId : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["ipv6Routes"] = args ? args.ipv6Routes : undefined;
            resourceInputs["limitBytesIn"] = args ? args.limitBytesIn : undefined;
            resourceInputs["limitBytesOut"] = args ? args.limitBytesOut : undefined;
            resourceInputs["localAddress"] = args ? args.localAddress : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["pppSecretId"] = args ? args.pppSecretId : undefined;
            resourceInputs["profile"] = args ? args.profile : undefined;
            resourceInputs["remoteAddress"] = args ? args.remoteAddress : undefined;
            resourceInputs["remoteIpv6Prefix"] = args ? args.remoteIpv6Prefix : undefined;
            resourceInputs["routes"] = args ? args.routes : undefined;
            resourceInputs["service"] = args ? args.service : undefined;
            resourceInputs["lastCallerId"] = undefined /*out*/;
            resourceInputs["lastDisconnectReason"] = undefined /*out*/;
            resourceInputs["lastLoggedOut"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(PppSecret.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
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
