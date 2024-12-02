import * as pulumi from "@pulumi/pulumi";
export declare class IpIpsecProfile extends pulumi.CustomResource {
    /**
     * Get an existing IpIpsecProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpIpsecProfileState, opts?: pulumi.CustomResourceOptions): IpIpsecProfile;
    /**
     * Returns true if the given object is an instance of IpIpsecProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpIpsecProfile;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Diffie-Hellman group (cipher strength).
     */
    readonly dhGroups: pulumi.Output<string[] | undefined>;
    /**
     * Dead peer detection interval. If set to disable-dpd, dead peer detection will not be used.
     */
    readonly dpdInterval: pulumi.Output<string | undefined>;
    /**
     * Maximum count of failures until peer is considered to be dead. Applicable if DPD is enabled.
     */
    readonly dpdMaximumFailures: pulumi.Output<number | undefined>;
    /**
     * List of encryption algorithms that will be used by the peer.
     */
    readonly encAlgorithms: pulumi.Output<string[] | undefined>;
    /**
     * Hashing algorithm. SHA (Secure Hash Algorithm) is stronger, but slower. MD5 uses 128-bit key, sha1-160bit key.
     */
    readonly hashAlgorithm: pulumi.Output<string | undefined>;
    readonly ipIpsecProfileId: pulumi.Output<string>;
    /**
     * Phase 1 lifebytes is used only as administrative value which is added to proposal. Used in cases if remote peer requires
     * specific lifebytes value to establish phase 1.
     */
    readonly lifebytes: pulumi.Output<number | undefined>;
    /**
     * Phase 1 lifetime: specifies how long the SA will be valid.
     */
    readonly lifetime: pulumi.Output<string | undefined>;
    readonly name: pulumi.Output<string>;
    /**
     * Use Linux NAT-T mechanism to solve IPsec incompatibility with NAT routers between IPsec peers. This can only be used
     * with ESP protocol (AH is not supported by design, as it signs the complete packet, including the IP header, which is
     * changed by NAT, rendering AH signature invalid). The method encapsulates IPsec ESP traffic into UDP streams in order to
     * overcome some minor issues that made ESP incompatible with NAT.
     */
    readonly natTraversal: pulumi.Output<boolean | undefined>;
    readonly prfAlgorithm: pulumi.Output<string | undefined>;
    /**
     * Phase 2 lifetime check logic:claim - take shortest of proposed and configured lifetimes and notify initiator about
     * itexact - require lifetimes to be the sameobey - accept whatever is sent by an initiatorstrict - if the proposed
     * lifetime is longer than the default then reject the proposal otherwise accept a proposed lifetime.
     */
    readonly proposalCheck: pulumi.Output<string | undefined>;
    /**
     * Create a IpIpsecProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpIpsecProfileArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpIpsecProfile resources.
 */
export interface IpIpsecProfileState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Diffie-Hellman group (cipher strength).
     */
    dhGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Dead peer detection interval. If set to disable-dpd, dead peer detection will not be used.
     */
    dpdInterval?: pulumi.Input<string>;
    /**
     * Maximum count of failures until peer is considered to be dead. Applicable if DPD is enabled.
     */
    dpdMaximumFailures?: pulumi.Input<number>;
    /**
     * List of encryption algorithms that will be used by the peer.
     */
    encAlgorithms?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Hashing algorithm. SHA (Secure Hash Algorithm) is stronger, but slower. MD5 uses 128-bit key, sha1-160bit key.
     */
    hashAlgorithm?: pulumi.Input<string>;
    ipIpsecProfileId?: pulumi.Input<string>;
    /**
     * Phase 1 lifebytes is used only as administrative value which is added to proposal. Used in cases if remote peer requires
     * specific lifebytes value to establish phase 1.
     */
    lifebytes?: pulumi.Input<number>;
    /**
     * Phase 1 lifetime: specifies how long the SA will be valid.
     */
    lifetime?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * Use Linux NAT-T mechanism to solve IPsec incompatibility with NAT routers between IPsec peers. This can only be used
     * with ESP protocol (AH is not supported by design, as it signs the complete packet, including the IP header, which is
     * changed by NAT, rendering AH signature invalid). The method encapsulates IPsec ESP traffic into UDP streams in order to
     * overcome some minor issues that made ESP incompatible with NAT.
     */
    natTraversal?: pulumi.Input<boolean>;
    prfAlgorithm?: pulumi.Input<string>;
    /**
     * Phase 2 lifetime check logic:claim - take shortest of proposed and configured lifetimes and notify initiator about
     * itexact - require lifetimes to be the sameobey - accept whatever is sent by an initiatorstrict - if the proposed
     * lifetime is longer than the default then reject the proposal otherwise accept a proposed lifetime.
     */
    proposalCheck?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IpIpsecProfile resource.
 */
export interface IpIpsecProfileArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Diffie-Hellman group (cipher strength).
     */
    dhGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Dead peer detection interval. If set to disable-dpd, dead peer detection will not be used.
     */
    dpdInterval?: pulumi.Input<string>;
    /**
     * Maximum count of failures until peer is considered to be dead. Applicable if DPD is enabled.
     */
    dpdMaximumFailures?: pulumi.Input<number>;
    /**
     * List of encryption algorithms that will be used by the peer.
     */
    encAlgorithms?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Hashing algorithm. SHA (Secure Hash Algorithm) is stronger, but slower. MD5 uses 128-bit key, sha1-160bit key.
     */
    hashAlgorithm?: pulumi.Input<string>;
    ipIpsecProfileId?: pulumi.Input<string>;
    /**
     * Phase 1 lifebytes is used only as administrative value which is added to proposal. Used in cases if remote peer requires
     * specific lifebytes value to establish phase 1.
     */
    lifebytes?: pulumi.Input<number>;
    /**
     * Phase 1 lifetime: specifies how long the SA will be valid.
     */
    lifetime?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * Use Linux NAT-T mechanism to solve IPsec incompatibility with NAT routers between IPsec peers. This can only be used
     * with ESP protocol (AH is not supported by design, as it signs the complete packet, including the IP header, which is
     * changed by NAT, rendering AH signature invalid). The method encapsulates IPsec ESP traffic into UDP streams in order to
     * overcome some minor issues that made ESP incompatible with NAT.
     */
    natTraversal?: pulumi.Input<boolean>;
    prfAlgorithm?: pulumi.Input<string>;
    /**
     * Phase 2 lifetime check logic:claim - take shortest of proposed and configured lifetimes and notify initiator about
     * itexact - require lifetimes to be the sameobey - accept whatever is sent by an initiatorstrict - if the proposed
     * lifetime is longer than the default then reject the proposal otherwise accept a proposed lifetime.
     */
    proposalCheck?: pulumi.Input<string>;
}
