import * as pulumi from "@pulumi/pulumi";
export declare class IpIpsecProposal extends pulumi.CustomResource {
    /**
     * Get an existing IpIpsecProposal resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpIpsecProposalState, opts?: pulumi.CustomResourceOptions): IpIpsecProposal;
    /**
     * Returns true if the given object is an instance of IpIpsecProposal.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpIpsecProposal;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Allowed algorithms for authorization. SHA (Secure Hash Algorithm) is stronger but slower. MD5 uses a 128-bit key,
     * sha1-160bit key.
     */
    readonly authAlgorithms: pulumi.Output<string[] | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * It's the default item.
     */
    readonly default: pulumi.Output<boolean>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Allowed algorithms and key lengths to use for SAs.
     */
    readonly encAlgorithms: pulumi.Output<string[] | undefined>;
    readonly ipIpsecProposalId: pulumi.Output<string>;
    /**
     * How long to use SA before throwing it out.
     */
    readonly lifetime: pulumi.Output<string | undefined>;
    readonly name: pulumi.Output<string>;
    /**
     * The diffie-Helman group used for Perfect Forward Secrecy.
     */
    readonly pfsGroup: pulumi.Output<string | undefined>;
    /**
     * Create a IpIpsecProposal resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpIpsecProposalArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpIpsecProposal resources.
 */
export interface IpIpsecProposalState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Allowed algorithms for authorization. SHA (Secure Hash Algorithm) is stronger but slower. MD5 uses a 128-bit key,
     * sha1-160bit key.
     */
    authAlgorithms?: pulumi.Input<pulumi.Input<string>[]>;
    comment?: pulumi.Input<string>;
    /**
     * It's the default item.
     */
    default?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Allowed algorithms and key lengths to use for SAs.
     */
    encAlgorithms?: pulumi.Input<pulumi.Input<string>[]>;
    ipIpsecProposalId?: pulumi.Input<string>;
    /**
     * How long to use SA before throwing it out.
     */
    lifetime?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * The diffie-Helman group used for Perfect Forward Secrecy.
     */
    pfsGroup?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IpIpsecProposal resource.
 */
export interface IpIpsecProposalArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Allowed algorithms for authorization. SHA (Secure Hash Algorithm) is stronger but slower. MD5 uses a 128-bit key,
     * sha1-160bit key.
     */
    authAlgorithms?: pulumi.Input<pulumi.Input<string>[]>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Allowed algorithms and key lengths to use for SAs.
     */
    encAlgorithms?: pulumi.Input<pulumi.Input<string>[]>;
    ipIpsecProposalId?: pulumi.Input<string>;
    /**
     * How long to use SA before throwing it out.
     */
    lifetime?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * The diffie-Helman group used for Perfect Forward Secrecy.
     */
    pfsGroup?: pulumi.Input<string>;
}
