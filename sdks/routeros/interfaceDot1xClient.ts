// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class InterfaceDot1xClient extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceDot1xClient resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceDot1xClientState, opts?: pulumi.CustomResourceOptions): InterfaceDot1xClient {
        return new InterfaceDot1xClient(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/interfaceDot1xClient:InterfaceDot1xClient';

    /**
     * Returns true if the given object is an instance of InterfaceDot1xClient.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InterfaceDot1xClient {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InterfaceDot1xClient.__pulumiType;
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
     * Identity for outer layer EAP authentication. Used only with `eap-ttls` and `eap-peap` methods. If not set, the value
     * from the identity parameter will be used for outer layer EAP authentication.
     */
    public readonly anonIdentity!: pulumi.Output<string | undefined>;
    /**
     * Name of a certificate. Required when the `eap-tls` method is used.
     */
    public readonly certificate!: pulumi.Output<string | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * A set of EAP methods used for authentication: `eap-tls`, `eap-ttls`, `eap-peap`, `eap-mschapv2`.
     */
    public readonly eapMethods!: pulumi.Output<string[]>;
    /**
     * The supplicant identity that is used for EAP authentication.
     */
    public readonly identity!: pulumi.Output<string>;
    /**
     * Name of the interface.
     */
    public readonly interface!: pulumi.Output<string>;
    public readonly interfaceDot1xClientId!: pulumi.Output<string>;
    /**
     * Cleartext password for the supplicant.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    public /*out*/ readonly status!: pulumi.Output<string>;

    /**
     * Create a InterfaceDot1xClient resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterfaceDot1xClientArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InterfaceDot1xClientArgs | InterfaceDot1xClientState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as InterfaceDot1xClientState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["anonIdentity"] = state ? state.anonIdentity : undefined;
            resourceInputs["certificate"] = state ? state.certificate : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["eapMethods"] = state ? state.eapMethods : undefined;
            resourceInputs["identity"] = state ? state.identity : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["interfaceDot1xClientId"] = state ? state.interfaceDot1xClientId : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as InterfaceDot1xClientArgs | undefined;
            if ((!args || args.eapMethods === undefined) && !opts.urn) {
                throw new Error("Missing required property 'eapMethods'");
            }
            if ((!args || args.identity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'identity'");
            }
            if ((!args || args.interface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interface'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["anonIdentity"] = args ? args.anonIdentity : undefined;
            resourceInputs["certificate"] = args ? args.certificate : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["eapMethods"] = args ? args.eapMethods : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["interfaceDot1xClientId"] = args ? args.interfaceDot1xClientId : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(InterfaceDot1xClient.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering InterfaceDot1xClient resources.
 */
export interface InterfaceDot1xClientState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Identity for outer layer EAP authentication. Used only with `eap-ttls` and `eap-peap` methods. If not set, the value
     * from the identity parameter will be used for outer layer EAP authentication.
     */
    anonIdentity?: pulumi.Input<string>;
    /**
     * Name of a certificate. Required when the `eap-tls` method is used.
     */
    certificate?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * A set of EAP methods used for authentication: `eap-tls`, `eap-ttls`, `eap-peap`, `eap-mschapv2`.
     */
    eapMethods?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The supplicant identity that is used for EAP authentication.
     */
    identity?: pulumi.Input<string>;
    /**
     * Name of the interface.
     */
    interface?: pulumi.Input<string>;
    interfaceDot1xClientId?: pulumi.Input<string>;
    /**
     * Cleartext password for the supplicant.
     */
    password?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a InterfaceDot1xClient resource.
 */
export interface InterfaceDot1xClientArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Identity for outer layer EAP authentication. Used only with `eap-ttls` and `eap-peap` methods. If not set, the value
     * from the identity parameter will be used for outer layer EAP authentication.
     */
    anonIdentity?: pulumi.Input<string>;
    /**
     * Name of a certificate. Required when the `eap-tls` method is used.
     */
    certificate?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * A set of EAP methods used for authentication: `eap-tls`, `eap-ttls`, `eap-peap`, `eap-mschapv2`.
     */
    eapMethods: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The supplicant identity that is used for EAP authentication.
     */
    identity: pulumi.Input<string>;
    /**
     * Name of the interface.
     */
    interface: pulumi.Input<string>;
    interfaceDot1xClientId?: pulumi.Input<string>;
    /**
     * Cleartext password for the supplicant.
     */
    password?: pulumi.Input<string>;
}
