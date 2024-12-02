import * as pulumi from "@pulumi/pulumi";
export declare class IpService extends pulumi.CustomResource {
    /**
     * Get an existing IpService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpServiceState, opts?: pulumi.CustomResourceOptions): IpService;
    /**
     * Returns true if the given object is an instance of IpService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpService;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * List of IP/IPv6 prefixes from which the service is accessible.
     */
    readonly address: pulumi.Output<string | undefined>;
    /**
     * The name of the certificate used by a particular service. Applicable only for services that depend on certificates (
     * www-ssl, api-ssl ).
     */
    readonly certificate: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    readonly invalid: pulumi.Output<boolean>;
    readonly ipServiceId: pulumi.Output<string>;
    /**
     * Maximum number of concurrent connections to a particular service. This option is available in RouterOS starting from
     * version 7.16.
     */
    readonly maxSessions: pulumi.Output<number | undefined>;
    /**
     * Service name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the service whose settings will be changed ( api, api-ssl, ftp, ssh, telnet, winbox, www, www-ssl ).
     */
    readonly numbers: pulumi.Output<string>;
    /**
     * The port particular service listens on.
     */
    readonly port: pulumi.Output<number>;
    /**
     * Specifies which TLS versions to allow by a particular service.
     */
    readonly tlsVersion: pulumi.Output<string | undefined>;
    /**
     * The VRF table this resource operates on.
     */
    readonly vrf: pulumi.Output<string | undefined>;
    /**
     * Create a IpService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpServiceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpService resources.
 */
export interface IpServiceState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * List of IP/IPv6 prefixes from which the service is accessible.
     */
    address?: pulumi.Input<string>;
    /**
     * The name of the certificate used by a particular service. Applicable only for services that depend on certificates (
     * www-ssl, api-ssl ).
     */
    certificate?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    invalid?: pulumi.Input<boolean>;
    ipServiceId?: pulumi.Input<string>;
    /**
     * Maximum number of concurrent connections to a particular service. This option is available in RouterOS starting from
     * version 7.16.
     */
    maxSessions?: pulumi.Input<number>;
    /**
     * Service name.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the service whose settings will be changed ( api, api-ssl, ftp, ssh, telnet, winbox, www, www-ssl ).
     */
    numbers?: pulumi.Input<string>;
    /**
     * The port particular service listens on.
     */
    port?: pulumi.Input<number>;
    /**
     * Specifies which TLS versions to allow by a particular service.
     */
    tlsVersion?: pulumi.Input<string>;
    /**
     * The VRF table this resource operates on.
     */
    vrf?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IpService resource.
 */
export interface IpServiceArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * List of IP/IPv6 prefixes from which the service is accessible.
     */
    address?: pulumi.Input<string>;
    /**
     * The name of the certificate used by a particular service. Applicable only for services that depend on certificates (
     * www-ssl, api-ssl ).
     */
    certificate?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    ipServiceId?: pulumi.Input<string>;
    /**
     * Maximum number of concurrent connections to a particular service. This option is available in RouterOS starting from
     * version 7.16.
     */
    maxSessions?: pulumi.Input<number>;
    /**
     * The name of the service whose settings will be changed ( api, api-ssl, ftp, ssh, telnet, winbox, www, www-ssl ).
     */
    numbers: pulumi.Input<string>;
    /**
     * The port particular service listens on.
     */
    port: pulumi.Input<number>;
    /**
     * Specifies which TLS versions to allow by a particular service.
     */
    tlsVersion?: pulumi.Input<string>;
    /**
     * The VRF table this resource operates on.
     */
    vrf?: pulumi.Input<string>;
}
