import * as pulumi from "@pulumi/pulumi";
export declare class Radius extends pulumi.CustomResource {
    /**
     * Get an existing Radius resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RadiusState, opts?: pulumi.CustomResourceOptions): Radius;
    /**
     * Returns true if the given object is an instance of Radius.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Radius;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * An option whether the configuration is for the backup RADIUS server.
     */
    readonly accountingBackup: pulumi.Output<boolean | undefined>;
    /**
     * RADIUS server port used for accounting.
     */
    readonly accountingPort: pulumi.Output<number | undefined>;
    /**
     * IPv4 or IPv6 address of RADIUS server.
     */
    readonly address: pulumi.Output<string>;
    /**
     * RADIUS server port used for authentication.
     */
    readonly authenticationPort: pulumi.Output<number | undefined>;
    /**
     * RADIUS calling station identifier.
     */
    readonly calledId: pulumi.Output<string | undefined>;
    /**
     * Certificate to use for communication with RADIUS Server with RadSec enabled.
     */
    readonly certificate: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Microsoft Windows domain of client passed to RADIUS servers that require domain validation.
     */
    readonly domain: pulumi.Output<string | undefined>;
    /**
     * An option specifies the protocol to use when communicating with the RADIUS Server.
     */
    readonly protocol: pulumi.Output<string | undefined>;
    readonly radiusId: pulumi.Output<string>;
    /**
     * Explicitly stated realm (user domain), so the users do not have to provide proper ISP domain name in the user name.
     */
    readonly realm: pulumi.Output<string | undefined>;
    /**
     * An option whether to require `Message-Authenticator` in received Access-Accept/Challenge/Reject messages.
     */
    readonly requireMessageAuth: pulumi.Output<string | undefined>;
    /**
     * The shared secret to access the RADIUS server.
     */
    readonly secret: pulumi.Output<string | undefined>;
    /**
     * A set of router services that will use the RADIUS server. Possible values: `hotspot`, `login`, `ppp`, `wireless`,
     * `dhcp`, `ipsec`, `dot1x`.
     */
    readonly services: pulumi.Output<string[] | undefined>;
    /**
     * Source IPv4/IPv6 address of the packets sent to the RADIUS server.
     */
    readonly srcAddress: pulumi.Output<string | undefined>;
    /**
     * A timeout, after which the request should be resent.
     */
    readonly timeout: pulumi.Output<string | undefined>;
    /**
     * Create a Radius resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RadiusArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Radius resources.
 */
export interface RadiusState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option whether the configuration is for the backup RADIUS server.
     */
    accountingBackup?: pulumi.Input<boolean>;
    /**
     * RADIUS server port used for accounting.
     */
    accountingPort?: pulumi.Input<number>;
    /**
     * IPv4 or IPv6 address of RADIUS server.
     */
    address?: pulumi.Input<string>;
    /**
     * RADIUS server port used for authentication.
     */
    authenticationPort?: pulumi.Input<number>;
    /**
     * RADIUS calling station identifier.
     */
    calledId?: pulumi.Input<string>;
    /**
     * Certificate to use for communication with RADIUS Server with RadSec enabled.
     */
    certificate?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Microsoft Windows domain of client passed to RADIUS servers that require domain validation.
     */
    domain?: pulumi.Input<string>;
    /**
     * An option specifies the protocol to use when communicating with the RADIUS Server.
     */
    protocol?: pulumi.Input<string>;
    radiusId?: pulumi.Input<string>;
    /**
     * Explicitly stated realm (user domain), so the users do not have to provide proper ISP domain name in the user name.
     */
    realm?: pulumi.Input<string>;
    /**
     * An option whether to require `Message-Authenticator` in received Access-Accept/Challenge/Reject messages.
     */
    requireMessageAuth?: pulumi.Input<string>;
    /**
     * The shared secret to access the RADIUS server.
     */
    secret?: pulumi.Input<string>;
    /**
     * A set of router services that will use the RADIUS server. Possible values: `hotspot`, `login`, `ppp`, `wireless`,
     * `dhcp`, `ipsec`, `dot1x`.
     */
    services?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Source IPv4/IPv6 address of the packets sent to the RADIUS server.
     */
    srcAddress?: pulumi.Input<string>;
    /**
     * A timeout, after which the request should be resent.
     */
    timeout?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Radius resource.
 */
export interface RadiusArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option whether the configuration is for the backup RADIUS server.
     */
    accountingBackup?: pulumi.Input<boolean>;
    /**
     * RADIUS server port used for accounting.
     */
    accountingPort?: pulumi.Input<number>;
    /**
     * IPv4 or IPv6 address of RADIUS server.
     */
    address: pulumi.Input<string>;
    /**
     * RADIUS server port used for authentication.
     */
    authenticationPort?: pulumi.Input<number>;
    /**
     * RADIUS calling station identifier.
     */
    calledId?: pulumi.Input<string>;
    /**
     * Certificate to use for communication with RADIUS Server with RadSec enabled.
     */
    certificate?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Microsoft Windows domain of client passed to RADIUS servers that require domain validation.
     */
    domain?: pulumi.Input<string>;
    /**
     * An option specifies the protocol to use when communicating with the RADIUS Server.
     */
    protocol?: pulumi.Input<string>;
    radiusId?: pulumi.Input<string>;
    /**
     * Explicitly stated realm (user domain), so the users do not have to provide proper ISP domain name in the user name.
     */
    realm?: pulumi.Input<string>;
    /**
     * An option whether to require `Message-Authenticator` in received Access-Accept/Challenge/Reject messages.
     */
    requireMessageAuth?: pulumi.Input<string>;
    /**
     * The shared secret to access the RADIUS server.
     */
    secret?: pulumi.Input<string>;
    /**
     * A set of router services that will use the RADIUS server. Possible values: `hotspot`, `login`, `ppp`, `wireless`,
     * `dhcp`, `ipsec`, `dot1x`.
     */
    services?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Source IPv4/IPv6 address of the packets sent to the RADIUS server.
     */
    srcAddress?: pulumi.Input<string>;
    /**
     * A timeout, after which the request should be resent.
     */
    timeout?: pulumi.Input<string>;
}
