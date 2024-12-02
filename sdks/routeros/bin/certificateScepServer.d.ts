import * as pulumi from "@pulumi/pulumi";
export declare class CertificateScepServer extends pulumi.CustomResource {
    /**
     * Get an existing CertificateScepServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CertificateScepServerState, opts?: pulumi.CustomResourceOptions): CertificateScepServer;
    /**
     * Returns true if the given object is an instance of CertificateScepServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CertificateScepServer;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Name of the CA certificate to use.
     */
    readonly caCert: pulumi.Output<string>;
    readonly certificateScepServerId: pulumi.Output<string>;
    /**
     * The number of days to sign certificates for.
     */
    readonly daysValid: pulumi.Output<number | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Name of the next CA certificate or `none`.
     */
    readonly nextCaCert: pulumi.Output<string | undefined>;
    /**
     * HTTP path starting with `/scep/`.
     */
    readonly path: pulumi.Output<string>;
    /**
     * Request lifetime (5m minimum).
     */
    readonly requestLifetime: pulumi.Output<string | undefined>;
    /**
     * Create a CertificateScepServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateScepServerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering CertificateScepServer resources.
 */
export interface CertificateScepServerState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Name of the CA certificate to use.
     */
    caCert?: pulumi.Input<string>;
    certificateScepServerId?: pulumi.Input<string>;
    /**
     * The number of days to sign certificates for.
     */
    daysValid?: pulumi.Input<number>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Name of the next CA certificate or `none`.
     */
    nextCaCert?: pulumi.Input<string>;
    /**
     * HTTP path starting with `/scep/`.
     */
    path?: pulumi.Input<string>;
    /**
     * Request lifetime (5m minimum).
     */
    requestLifetime?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a CertificateScepServer resource.
 */
export interface CertificateScepServerArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Name of the CA certificate to use.
     */
    caCert: pulumi.Input<string>;
    certificateScepServerId?: pulumi.Input<string>;
    /**
     * The number of days to sign certificates for.
     */
    daysValid?: pulumi.Input<number>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Name of the next CA certificate or `none`.
     */
    nextCaCert?: pulumi.Input<string>;
    /**
     * HTTP path starting with `/scep/`.
     */
    path: pulumi.Input<string>;
    /**
     * Request lifetime (5m minimum).
     */
    requestLifetime?: pulumi.Input<string>;
}
