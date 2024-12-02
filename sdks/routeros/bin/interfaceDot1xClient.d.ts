import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceDot1xClient extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceDot1xClient resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceDot1xClientState, opts?: pulumi.CustomResourceOptions): InterfaceDot1xClient;
    /**
     * Returns true if the given object is an instance of InterfaceDot1xClient.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceDot1xClient;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Identity for outer layer EAP authentication. Used only with `eap-ttls` and `eap-peap` methods. If not set, the value
     * from the identity parameter will be used for outer layer EAP authentication.
     */
    readonly anonIdentity: pulumi.Output<string | undefined>;
    /**
     * Name of a certificate. Required when the `eap-tls` method is used.
     */
    readonly certificate: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * A set of EAP methods used for authentication: `eap-tls`, `eap-ttls`, `eap-peap`, `eap-mschapv2`.
     */
    readonly eapMethods: pulumi.Output<string[]>;
    /**
     * The supplicant identity that is used for EAP authentication.
     */
    readonly identity: pulumi.Output<string>;
    /**
     * Name of the interface.
     */
    readonly interface: pulumi.Output<string>;
    readonly interfaceDot1xClientId: pulumi.Output<string>;
    /**
     * Cleartext password for the supplicant.
     */
    readonly password: pulumi.Output<string | undefined>;
    readonly status: pulumi.Output<string>;
    /**
     * Create a InterfaceDot1xClient resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterfaceDot1xClientArgs, opts?: pulumi.CustomResourceOptions);
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
