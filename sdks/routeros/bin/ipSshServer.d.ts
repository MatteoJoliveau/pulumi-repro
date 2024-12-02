import * as pulumi from "@pulumi/pulumi";
export declare class IpSshServer extends pulumi.CustomResource {
    /**
     * Get an existing IpSshServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpSshServerState, opts?: pulumi.CustomResourceOptions): IpSshServer;
    /**
     * Returns true if the given object is an instance of IpSshServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpSshServer;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Whether to allow connection if cryptographic algorithms are set to none.
     */
    readonly allowNoneCrypto: pulumi.Output<boolean | undefined>;
    /**
     * Whether to allow password login at the same time when public key authorization is configured for a user.
     */
    readonly alwaysAllowPasswordLogin: pulumi.Output<boolean | undefined>;
    /**
     * Allows to control which SSH forwarding method to allow: * no - SSH forwarding is disabled; * local - Allow SSH clients
     * to originate connections from the server(router), this setting controls also dynamic forwarding; * remote - Allow SSH
     * clients to listen on the server(router) and forward incoming connections; * both - Allow both local and remote
     * forwarding methods.
     */
    readonly forwardingEnabled: pulumi.Output<string | undefined>;
    /**
     * RSA key size when host key is being regenerated.
     */
    readonly hostKeySize: pulumi.Output<number | undefined>;
    /**
     * Select host key type.
     */
    readonly hostKeyType: pulumi.Output<string | undefined>;
    readonly ipSshServerId: pulumi.Output<string>;
    /**
     * Use stronger encryption.
     */
    readonly strongCrypto: pulumi.Output<boolean | undefined>;
    /**
     * Create a IpSshServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpSshServerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpSshServer resources.
 */
export interface IpSshServerState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to allow connection if cryptographic algorithms are set to none.
     */
    allowNoneCrypto?: pulumi.Input<boolean>;
    /**
     * Whether to allow password login at the same time when public key authorization is configured for a user.
     */
    alwaysAllowPasswordLogin?: pulumi.Input<boolean>;
    /**
     * Allows to control which SSH forwarding method to allow: * no - SSH forwarding is disabled; * local - Allow SSH clients
     * to originate connections from the server(router), this setting controls also dynamic forwarding; * remote - Allow SSH
     * clients to listen on the server(router) and forward incoming connections; * both - Allow both local and remote
     * forwarding methods.
     */
    forwardingEnabled?: pulumi.Input<string>;
    /**
     * RSA key size when host key is being regenerated.
     */
    hostKeySize?: pulumi.Input<number>;
    /**
     * Select host key type.
     */
    hostKeyType?: pulumi.Input<string>;
    ipSshServerId?: pulumi.Input<string>;
    /**
     * Use stronger encryption.
     */
    strongCrypto?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a IpSshServer resource.
 */
export interface IpSshServerArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to allow connection if cryptographic algorithms are set to none.
     */
    allowNoneCrypto?: pulumi.Input<boolean>;
    /**
     * Whether to allow password login at the same time when public key authorization is configured for a user.
     */
    alwaysAllowPasswordLogin?: pulumi.Input<boolean>;
    /**
     * Allows to control which SSH forwarding method to allow: * no - SSH forwarding is disabled; * local - Allow SSH clients
     * to originate connections from the server(router), this setting controls also dynamic forwarding; * remote - Allow SSH
     * clients to listen on the server(router) and forward incoming connections; * both - Allow both local and remote
     * forwarding methods.
     */
    forwardingEnabled?: pulumi.Input<string>;
    /**
     * RSA key size when host key is being regenerated.
     */
    hostKeySize?: pulumi.Input<number>;
    /**
     * Select host key type.
     */
    hostKeyType?: pulumi.Input<string>;
    ipSshServerId?: pulumi.Input<string>;
    /**
     * Use stronger encryption.
     */
    strongCrypto?: pulumi.Input<boolean>;
}
