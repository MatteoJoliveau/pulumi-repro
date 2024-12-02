import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class SystemCertificate extends pulumi.CustomResource {
    /**
     * Get an existing SystemCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemCertificateState, opts?: pulumi.CustomResourceOptions): SystemCertificate;
    /**
     * Returns true if the given object is an instance of SystemCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SystemCertificate;
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
     * Authority Key Identifier.
     */
    readonly akid: pulumi.Output<string>;
    readonly authority: pulumi.Output<string>;
    readonly ca: pulumi.Output<string>;
    readonly caCrlHost: pulumi.Output<string>;
    readonly caFingerprint: pulumi.Output<string>;
    /**
     * A challenge password for scep client.
     */
    readonly challengePassword: pulumi.Output<string>;
    /**
     * Common Name (e.g. server FQDN or YOUR name).
     */
    readonly commonName: pulumi.Output<string>;
    readonly copyFrom: pulumi.Output<string | undefined>;
    /**
     * Country Name (2 letter code).
     */
    readonly country: pulumi.Output<string | undefined>;
    readonly crl: pulumi.Output<string>;
    /**
     * Certificate lifetime.
     */
    readonly daysValid: pulumi.Output<number | undefined>;
    readonly digestAlgorithm: pulumi.Output<boolean>;
    readonly dsa: pulumi.Output<boolean>;
    /**
     * Set to true if certificate is expired.
     */
    readonly expired: pulumi.Output<boolean>;
    readonly expiresAfter: pulumi.Output<string>;
    readonly fingerprint: pulumi.Output<string>;
    readonly imports: pulumi.Output<outputs.SystemCertificateImport[] | undefined>;
    /**
     * The date after which certificate wil be invalid.
     */
    readonly invalidAfter: pulumi.Output<string>;
    /**
     * The date before which certificate is invalid.
     */
    readonly invalidBefore: pulumi.Output<string>;
    readonly issued: pulumi.Output<string>;
    readonly issuer: pulumi.Output<string>;
    readonly keySize: pulumi.Output<string>;
    readonly keyType: pulumi.Output<string>;
    /**
     * Detailed key usage descriptions can be found in RFC 5280.
     */
    readonly keyUsages: pulumi.Output<string[] | undefined>;
    /**
     * Locality Name (eg, city).
     */
    readonly locality: pulumi.Output<string | undefined>;
    /**
     * Name of the certificate. Name can be edited.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Organizational Unit Name (eg, section)
     */
    readonly organization: pulumi.Output<string | undefined>;
    readonly privateKey: pulumi.Output<boolean>;
    readonly reqFingerprint: pulumi.Output<string>;
    readonly revoked: pulumi.Output<string>;
    readonly scepUrl: pulumi.Output<string>;
    readonly serialNumber: pulumi.Output<string>;
    readonly signViaSceps: pulumi.Output<outputs.SystemCertificateSignViaScep[] | undefined>;
    readonly signs: pulumi.Output<outputs.SystemCertificateSign[] | undefined>;
    /**
     * Subject Key Identifier.
     */
    readonly skid: pulumi.Output<string>;
    readonly smartCardKey: pulumi.Output<string>;
    /**
     * State or Province Name (full name).
     */
    readonly state: pulumi.Output<string | undefined>;
    /**
     * Shows current status of scep client.
     */
    readonly status: pulumi.Output<string>;
    /**
     * SANs (subject alternative names).
     */
    readonly subjectAltName: pulumi.Output<string | undefined>;
    readonly systemCertificateId: pulumi.Output<string>;
    /**
     * If set to yes certificate is included 'in trusted certificate chain'.
     */
    readonly trusted: pulumi.Output<boolean | undefined>;
    /**
     * Organizational Unit Name (eg, section).
     */
    readonly unit: pulumi.Output<string | undefined>;
    /**
     * Create a SystemCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemCertificateArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SystemCertificate resources.
 */
export interface SystemCertificateState {
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
     * Authority Key Identifier.
     */
    akid?: pulumi.Input<string>;
    authority?: pulumi.Input<string>;
    ca?: pulumi.Input<string>;
    caCrlHost?: pulumi.Input<string>;
    caFingerprint?: pulumi.Input<string>;
    /**
     * A challenge password for scep client.
     */
    challengePassword?: pulumi.Input<string>;
    /**
     * Common Name (e.g. server FQDN or YOUR name).
     */
    commonName?: pulumi.Input<string>;
    copyFrom?: pulumi.Input<string>;
    /**
     * Country Name (2 letter code).
     */
    country?: pulumi.Input<string>;
    crl?: pulumi.Input<string>;
    /**
     * Certificate lifetime.
     */
    daysValid?: pulumi.Input<number>;
    digestAlgorithm?: pulumi.Input<boolean>;
    dsa?: pulumi.Input<boolean>;
    /**
     * Set to true if certificate is expired.
     */
    expired?: pulumi.Input<boolean>;
    expiresAfter?: pulumi.Input<string>;
    fingerprint?: pulumi.Input<string>;
    imports?: pulumi.Input<pulumi.Input<inputs.SystemCertificateImport>[]>;
    /**
     * The date after which certificate wil be invalid.
     */
    invalidAfter?: pulumi.Input<string>;
    /**
     * The date before which certificate is invalid.
     */
    invalidBefore?: pulumi.Input<string>;
    issued?: pulumi.Input<string>;
    issuer?: pulumi.Input<string>;
    keySize?: pulumi.Input<string>;
    keyType?: pulumi.Input<string>;
    /**
     * Detailed key usage descriptions can be found in RFC 5280.
     */
    keyUsages?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Locality Name (eg, city).
     */
    locality?: pulumi.Input<string>;
    /**
     * Name of the certificate. Name can be edited.
     */
    name?: pulumi.Input<string>;
    /**
     * Organizational Unit Name (eg, section)
     */
    organization?: pulumi.Input<string>;
    privateKey?: pulumi.Input<boolean>;
    reqFingerprint?: pulumi.Input<string>;
    revoked?: pulumi.Input<string>;
    scepUrl?: pulumi.Input<string>;
    serialNumber?: pulumi.Input<string>;
    signViaSceps?: pulumi.Input<pulumi.Input<inputs.SystemCertificateSignViaScep>[]>;
    signs?: pulumi.Input<pulumi.Input<inputs.SystemCertificateSign>[]>;
    /**
     * Subject Key Identifier.
     */
    skid?: pulumi.Input<string>;
    smartCardKey?: pulumi.Input<string>;
    /**
     * State or Province Name (full name).
     */
    state?: pulumi.Input<string>;
    /**
     * Shows current status of scep client.
     */
    status?: pulumi.Input<string>;
    /**
     * SANs (subject alternative names).
     */
    subjectAltName?: pulumi.Input<string>;
    systemCertificateId?: pulumi.Input<string>;
    /**
     * If set to yes certificate is included 'in trusted certificate chain'.
     */
    trusted?: pulumi.Input<boolean>;
    /**
     * Organizational Unit Name (eg, section).
     */
    unit?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SystemCertificate resource.
 */
export interface SystemCertificateArgs {
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
     * Common Name (e.g. server FQDN or YOUR name).
     */
    commonName: pulumi.Input<string>;
    copyFrom?: pulumi.Input<string>;
    /**
     * Country Name (2 letter code).
     */
    country?: pulumi.Input<string>;
    /**
     * Certificate lifetime.
     */
    daysValid?: pulumi.Input<number>;
    imports?: pulumi.Input<pulumi.Input<inputs.SystemCertificateImport>[]>;
    keySize?: pulumi.Input<string>;
    /**
     * Detailed key usage descriptions can be found in RFC 5280.
     */
    keyUsages?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Locality Name (eg, city).
     */
    locality?: pulumi.Input<string>;
    /**
     * Name of the certificate. Name can be edited.
     */
    name?: pulumi.Input<string>;
    /**
     * Organizational Unit Name (eg, section)
     */
    organization?: pulumi.Input<string>;
    signViaSceps?: pulumi.Input<pulumi.Input<inputs.SystemCertificateSignViaScep>[]>;
    signs?: pulumi.Input<pulumi.Input<inputs.SystemCertificateSign>[]>;
    /**
     * State or Province Name (full name).
     */
    state?: pulumi.Input<string>;
    /**
     * SANs (subject alternative names).
     */
    subjectAltName?: pulumi.Input<string>;
    systemCertificateId?: pulumi.Input<string>;
    /**
     * If set to yes certificate is included 'in trusted certificate chain'.
     */
    trusted?: pulumi.Input<boolean>;
    /**
     * Organizational Unit Name (eg, section).
     */
    unit?: pulumi.Input<string>;
}
