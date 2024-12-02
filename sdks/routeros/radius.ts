// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Radius extends pulumi.CustomResource {
    /**
     * Get an existing Radius resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RadiusState, opts?: pulumi.CustomResourceOptions): Radius {
        return new Radius(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/radius:Radius';

    /**
     * Returns true if the given object is an instance of Radius.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Radius {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Radius.__pulumiType;
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
     * An option whether the configuration is for the backup RADIUS server.
     */
    public readonly accountingBackup!: pulumi.Output<boolean | undefined>;
    /**
     * RADIUS server port used for accounting.
     */
    public readonly accountingPort!: pulumi.Output<number | undefined>;
    /**
     * IPv4 or IPv6 address of RADIUS server.
     */
    public readonly address!: pulumi.Output<string>;
    /**
     * RADIUS server port used for authentication.
     */
    public readonly authenticationPort!: pulumi.Output<number | undefined>;
    /**
     * RADIUS calling station identifier.
     */
    public readonly calledId!: pulumi.Output<string | undefined>;
    /**
     * Certificate to use for communication with RADIUS Server with RadSec enabled.
     */
    public readonly certificate!: pulumi.Output<string | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * Microsoft Windows domain of client passed to RADIUS servers that require domain validation.
     */
    public readonly domain!: pulumi.Output<string | undefined>;
    /**
     * An option specifies the protocol to use when communicating with the RADIUS Server.
     */
    public readonly protocol!: pulumi.Output<string | undefined>;
    public readonly radiusId!: pulumi.Output<string>;
    /**
     * Explicitly stated realm (user domain), so the users do not have to provide proper ISP domain name in the user name.
     */
    public readonly realm!: pulumi.Output<string | undefined>;
    /**
     * An option whether to require `Message-Authenticator` in received Access-Accept/Challenge/Reject messages.
     */
    public readonly requireMessageAuth!: pulumi.Output<string | undefined>;
    /**
     * The shared secret to access the RADIUS server.
     */
    public readonly secret!: pulumi.Output<string | undefined>;
    /**
     * A set of router services that will use the RADIUS server. Possible values: `hotspot`, `login`, `ppp`, `wireless`,
     * `dhcp`, `ipsec`, `dot1x`.
     */
    public readonly services!: pulumi.Output<string[] | undefined>;
    /**
     * Source IPv4/IPv6 address of the packets sent to the RADIUS server.
     */
    public readonly srcAddress!: pulumi.Output<string | undefined>;
    /**
     * A timeout, after which the request should be resent.
     */
    public readonly timeout!: pulumi.Output<string | undefined>;

    /**
     * Create a Radius resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RadiusArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RadiusArgs | RadiusState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RadiusState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["accountingBackup"] = state ? state.accountingBackup : undefined;
            resourceInputs["accountingPort"] = state ? state.accountingPort : undefined;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["authenticationPort"] = state ? state.authenticationPort : undefined;
            resourceInputs["calledId"] = state ? state.calledId : undefined;
            resourceInputs["certificate"] = state ? state.certificate : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["domain"] = state ? state.domain : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["radiusId"] = state ? state.radiusId : undefined;
            resourceInputs["realm"] = state ? state.realm : undefined;
            resourceInputs["requireMessageAuth"] = state ? state.requireMessageAuth : undefined;
            resourceInputs["secret"] = state ? state.secret : undefined;
            resourceInputs["services"] = state ? state.services : undefined;
            resourceInputs["srcAddress"] = state ? state.srcAddress : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
        } else {
            const args = argsOrState as RadiusArgs | undefined;
            if ((!args || args.address === undefined) && !opts.urn) {
                throw new Error("Missing required property 'address'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["accountingBackup"] = args ? args.accountingBackup : undefined;
            resourceInputs["accountingPort"] = args ? args.accountingPort : undefined;
            resourceInputs["address"] = args ? args.address : undefined;
            resourceInputs["authenticationPort"] = args ? args.authenticationPort : undefined;
            resourceInputs["calledId"] = args ? args.calledId : undefined;
            resourceInputs["certificate"] = args ? args.certificate : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["domain"] = args ? args.domain : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["radiusId"] = args ? args.radiusId : undefined;
            resourceInputs["realm"] = args ? args.realm : undefined;
            resourceInputs["requireMessageAuth"] = args ? args.requireMessageAuth : undefined;
            resourceInputs["secret"] = args?.secret ? pulumi.secret(args.secret) : undefined;
            resourceInputs["services"] = args ? args.services : undefined;
            resourceInputs["srcAddress"] = args ? args.srcAddress : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["secret"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Radius.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
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