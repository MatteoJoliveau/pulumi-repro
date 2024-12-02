import * as pulumi from "@pulumi/pulumi";
export declare class IpDnsAdlist extends pulumi.CustomResource {
    /**
     * Get an existing IpDnsAdlist resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpDnsAdlistState, opts?: pulumi.CustomResourceOptions): IpDnsAdlist;
    /**
     * Returns true if the given object is an instance of IpDnsAdlist.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpDnsAdlist;
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
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Used to specify a local file path from which to read adlist data.
     */
    readonly file: pulumi.Output<string | undefined>;
    readonly ipDnsAdlistId: pulumi.Output<string>;
    /**
     * Specifies whether to validate the server's SSL certificate when connecting to an online resource. Will use the
     * `/certificate` list to verify server validity.
     */
    readonly sslVerify: pulumi.Output<boolean | undefined>;
    /**
     * Used to specify the URL of an adlist.
     */
    readonly url: pulumi.Output<string | undefined>;
    /**
     * Create a IpDnsAdlist resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpDnsAdlistArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpDnsAdlist resources.
 */
export interface IpDnsAdlistState {
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
    disabled?: pulumi.Input<boolean>;
    /**
     * Used to specify a local file path from which to read adlist data.
     */
    file?: pulumi.Input<string>;
    ipDnsAdlistId?: pulumi.Input<string>;
    /**
     * Specifies whether to validate the server's SSL certificate when connecting to an online resource. Will use the
     * `/certificate` list to verify server validity.
     */
    sslVerify?: pulumi.Input<boolean>;
    /**
     * Used to specify the URL of an adlist.
     */
    url?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IpDnsAdlist resource.
 */
export interface IpDnsAdlistArgs {
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
    disabled?: pulumi.Input<boolean>;
    /**
     * Used to specify a local file path from which to read adlist data.
     */
    file?: pulumi.Input<string>;
    ipDnsAdlistId?: pulumi.Input<string>;
    /**
     * Specifies whether to validate the server's SSL certificate when connecting to an online resource. Will use the
     * `/certificate` list to verify server validity.
     */
    sslVerify?: pulumi.Input<boolean>;
    /**
     * Used to specify the URL of an adlist.
     */
    url?: pulumi.Input<string>;
}
