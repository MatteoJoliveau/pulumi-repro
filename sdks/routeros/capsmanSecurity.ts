// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CapsmanSecurity extends pulumi.CustomResource {
    /**
     * Get an existing CapsmanSecurity resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CapsmanSecurityState, opts?: pulumi.CustomResourceOptions): CapsmanSecurity {
        return new CapsmanSecurity(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/capsmanSecurity:CapsmanSecurity';

    /**
     * Returns true if the given object is an instance of CapsmanSecurity.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CapsmanSecurity {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CapsmanSecurity.__pulumiType;
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
     * Specify the type of Authentication from wpa-psk, wpa2-psk, wpa-eap or wpa2-eap.
     */
    public readonly authenticationTypes!: pulumi.Output<string[] | undefined>;
    public readonly capsmanSecurityId!: pulumi.Output<string>;
    public readonly comment!: pulumi.Output<string | undefined>;
    /**
     * Whether to include PMKID into the EAPOL frame sent out by the Access Point. Disabling PMKID can cause compatibility
     * issues with devices that use the PMKID to connect to an Access Point.
     */
    public readonly disablePmkid!: pulumi.Output<boolean | undefined>;
    /**
     * eap-tls - Use built-in EAP TLS authentication; passthrough - Access point will relay authentication process to the
     * RADIUS server.
     */
    public readonly eapMethods!: pulumi.Output<string | undefined>;
    /**
     * Specifies if RADIUS traffic accounting should be used if RADIUS authentication gets done for this client
     */
    public readonly eapRadiusAccounting!: pulumi.Output<boolean | undefined>;
    /**
     * Set type of unicast encryption algorithm used.
     */
    public readonly encryptions!: pulumi.Output<string[] | undefined>;
    /**
     * Access Point advertises one of these ciphers, multiple values can be selected. Access Point uses it to encrypt all
     * broadcast and multicast frames. Client attempts connection only to Access Points that use one of the specified group
     * ciphers.
     */
    public readonly groupEncryption!: pulumi.Output<string | undefined>;
    /**
     * Controls how often Access Point updates the group key. This key is used to encrypt all broadcast and multicast frames.
     * property only has effect for Access Points. (30s..1h)
     */
    public readonly groupKeyUpdate!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    /**
     * WPA or WPA2 pre-shared key.
     */
    public readonly passphrase!: pulumi.Output<string | undefined>;
    /**
     * Access Point always needs a certificate when security.tls-mode is set to value other than no-certificates.
     */
    public readonly tlsCertificate!: pulumi.Output<string | undefined>;
    /**
     * This property has effect only when security.eap-methods contains eap-tls.
     */
    public readonly tlsMode!: pulumi.Output<string | undefined>;

    /**
     * Create a CapsmanSecurity resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CapsmanSecurityArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CapsmanSecurityArgs | CapsmanSecurityState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CapsmanSecurityState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["authenticationTypes"] = state ? state.authenticationTypes : undefined;
            resourceInputs["capsmanSecurityId"] = state ? state.capsmanSecurityId : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disablePmkid"] = state ? state.disablePmkid : undefined;
            resourceInputs["eapMethods"] = state ? state.eapMethods : undefined;
            resourceInputs["eapRadiusAccounting"] = state ? state.eapRadiusAccounting : undefined;
            resourceInputs["encryptions"] = state ? state.encryptions : undefined;
            resourceInputs["groupEncryption"] = state ? state.groupEncryption : undefined;
            resourceInputs["groupKeyUpdate"] = state ? state.groupKeyUpdate : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["passphrase"] = state ? state.passphrase : undefined;
            resourceInputs["tlsCertificate"] = state ? state.tlsCertificate : undefined;
            resourceInputs["tlsMode"] = state ? state.tlsMode : undefined;
        } else {
            const args = argsOrState as CapsmanSecurityArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["authenticationTypes"] = args ? args.authenticationTypes : undefined;
            resourceInputs["capsmanSecurityId"] = args ? args.capsmanSecurityId : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disablePmkid"] = args ? args.disablePmkid : undefined;
            resourceInputs["eapMethods"] = args ? args.eapMethods : undefined;
            resourceInputs["eapRadiusAccounting"] = args ? args.eapRadiusAccounting : undefined;
            resourceInputs["encryptions"] = args ? args.encryptions : undefined;
            resourceInputs["groupEncryption"] = args ? args.groupEncryption : undefined;
            resourceInputs["groupKeyUpdate"] = args ? args.groupKeyUpdate : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["passphrase"] = args?.passphrase ? pulumi.secret(args.passphrase) : undefined;
            resourceInputs["tlsCertificate"] = args ? args.tlsCertificate : undefined;
            resourceInputs["tlsMode"] = args ? args.tlsMode : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["passphrase"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(CapsmanSecurity.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CapsmanSecurity resources.
 */
export interface CapsmanSecurityState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Specify the type of Authentication from wpa-psk, wpa2-psk, wpa-eap or wpa2-eap.
     */
    authenticationTypes?: pulumi.Input<pulumi.Input<string>[]>;
    capsmanSecurityId?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Whether to include PMKID into the EAPOL frame sent out by the Access Point. Disabling PMKID can cause compatibility
     * issues with devices that use the PMKID to connect to an Access Point.
     */
    disablePmkid?: pulumi.Input<boolean>;
    /**
     * eap-tls - Use built-in EAP TLS authentication; passthrough - Access point will relay authentication process to the
     * RADIUS server.
     */
    eapMethods?: pulumi.Input<string>;
    /**
     * Specifies if RADIUS traffic accounting should be used if RADIUS authentication gets done for this client
     */
    eapRadiusAccounting?: pulumi.Input<boolean>;
    /**
     * Set type of unicast encryption algorithm used.
     */
    encryptions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Access Point advertises one of these ciphers, multiple values can be selected. Access Point uses it to encrypt all
     * broadcast and multicast frames. Client attempts connection only to Access Points that use one of the specified group
     * ciphers.
     */
    groupEncryption?: pulumi.Input<string>;
    /**
     * Controls how often Access Point updates the group key. This key is used to encrypt all broadcast and multicast frames.
     * property only has effect for Access Points. (30s..1h)
     */
    groupKeyUpdate?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * WPA or WPA2 pre-shared key.
     */
    passphrase?: pulumi.Input<string>;
    /**
     * Access Point always needs a certificate when security.tls-mode is set to value other than no-certificates.
     */
    tlsCertificate?: pulumi.Input<string>;
    /**
     * This property has effect only when security.eap-methods contains eap-tls.
     */
    tlsMode?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CapsmanSecurity resource.
 */
export interface CapsmanSecurityArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Specify the type of Authentication from wpa-psk, wpa2-psk, wpa-eap or wpa2-eap.
     */
    authenticationTypes?: pulumi.Input<pulumi.Input<string>[]>;
    capsmanSecurityId?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Whether to include PMKID into the EAPOL frame sent out by the Access Point. Disabling PMKID can cause compatibility
     * issues with devices that use the PMKID to connect to an Access Point.
     */
    disablePmkid?: pulumi.Input<boolean>;
    /**
     * eap-tls - Use built-in EAP TLS authentication; passthrough - Access point will relay authentication process to the
     * RADIUS server.
     */
    eapMethods?: pulumi.Input<string>;
    /**
     * Specifies if RADIUS traffic accounting should be used if RADIUS authentication gets done for this client
     */
    eapRadiusAccounting?: pulumi.Input<boolean>;
    /**
     * Set type of unicast encryption algorithm used.
     */
    encryptions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Access Point advertises one of these ciphers, multiple values can be selected. Access Point uses it to encrypt all
     * broadcast and multicast frames. Client attempts connection only to Access Points that use one of the specified group
     * ciphers.
     */
    groupEncryption?: pulumi.Input<string>;
    /**
     * Controls how often Access Point updates the group key. This key is used to encrypt all broadcast and multicast frames.
     * property only has effect for Access Points. (30s..1h)
     */
    groupKeyUpdate?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * WPA or WPA2 pre-shared key.
     */
    passphrase?: pulumi.Input<string>;
    /**
     * Access Point always needs a certificate when security.tls-mode is set to value other than no-certificates.
     */
    tlsCertificate?: pulumi.Input<string>;
    /**
     * This property has effect only when security.eap-methods contains eap-tls.
     */
    tlsMode?: pulumi.Input<string>;
}