import * as pulumi from "@pulumi/pulumi";
export declare class IpIpsecPolicy extends pulumi.CustomResource {
    /**
     * Get an existing IpIpsecPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpIpsecPolicyState, opts?: pulumi.CustomResourceOptions): IpIpsecPolicy;
    /**
     * Returns true if the given object is an instance of IpIpsecPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpIpsecPolicy;
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
     * Specifies what to do with the packet matched by the policy.none - pass the packet unchanged.discard - drop the
     * packet.encrypt - apply transformations specified in this policy and it's SA.
     */
    readonly action: pulumi.Output<string | undefined>;
    readonly active: pulumi.Output<boolean>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Destination address to be matched in packets. Applicable when tunnel mode (`tunnel=yes`) or template (`template=yes`) is
     * used.
     */
    readonly dstAddress: pulumi.Output<string | undefined>;
    /**
     * Destination port to be matched in packets. If set to any all ports will be matched.
     */
    readonly dstPort: pulumi.Output<string | undefined>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    readonly dynamic: pulumi.Output<boolean>;
    /**
     * Name of the policy group to which this **template** is assigned.
     */
    readonly group: pulumi.Output<string | undefined>;
    readonly invalid: pulumi.Output<boolean>;
    readonly ipIpsecPolicyId: pulumi.Output<string>;
    /**
     * Specifies what combination of Authentication Header and Encapsulating Security Payload protocols you want to apply to
     * matched traffic.
     */
    readonly ipsecProtocols: pulumi.Output<string | undefined>;
    /**
     * Specifies what to do if some of the SAs for this policy cannot be found:use - skip this transform, do not drop the
     * packet, and do not acquire SA from IKE daemon;require - drop the packet and acquire SA;unique - drop the packet and
     * acquire a unique SA that is only used with this particular policy. It is used in setups where multiple clients can sit
     * behind one public IP address (clients behind NAT).
     */
    readonly level: pulumi.Output<string | undefined>;
    /**
     * Name of the peer on which the policy applies.
     */
    readonly peer: pulumi.Output<string | undefined>;
    /**
     * Name of the proposal template that will be sent by IKE daemon to establish SAs for this policy.
     */
    readonly proposal: pulumi.Output<string | undefined>;
    /**
     * IP packet protocol to match.
     */
    readonly protocol: pulumi.Output<string | undefined>;
    /**
     * Source address to be matched in packets. Applicable when tunnel mode (`tunnel=yes`) or template (`template=yes`) is
     * used.
     */
    readonly srcAddress: pulumi.Output<string | undefined>;
    /**
     * Source port to be matched in packets. If set to any all ports will be matched.
     */
    readonly srcPort: pulumi.Output<string | undefined>;
    /**
     * Creates a template and assigns it to a specified policy group.Following parameters are used by template: `group` - name
     * of the policy group to which this template is assigned; `src-address`, `dst-address` - Requested subnet must match in
     * both directions (for example 0.0.0.0/0 to allow all); `protocol` - protocol to match, if set to all, then any protocol
     * is accepted; `proposal` - SA parameters used for this template; `level` - useful when unique is required in setups with
     * multiple clients behind NAT.
     */
    readonly template: pulumi.Output<boolean | undefined>;
    /**
     * Specifies whether to use tunnel mode.
     */
    readonly tunnel: pulumi.Output<boolean | undefined>;
    /**
     * Create a IpIpsecPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpIpsecPolicyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpIpsecPolicy resources.
 */
export interface IpIpsecPolicyState {
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
     * Specifies what to do with the packet matched by the policy.none - pass the packet unchanged.discard - drop the
     * packet.encrypt - apply transformations specified in this policy and it's SA.
     */
    action?: pulumi.Input<string>;
    active?: pulumi.Input<boolean>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Destination address to be matched in packets. Applicable when tunnel mode (`tunnel=yes`) or template (`template=yes`) is
     * used.
     */
    dstAddress?: pulumi.Input<string>;
    /**
     * Destination port to be matched in packets. If set to any all ports will be matched.
     */
    dstPort?: pulumi.Input<string>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    /**
     * Name of the policy group to which this **template** is assigned.
     */
    group?: pulumi.Input<string>;
    invalid?: pulumi.Input<boolean>;
    ipIpsecPolicyId?: pulumi.Input<string>;
    /**
     * Specifies what combination of Authentication Header and Encapsulating Security Payload protocols you want to apply to
     * matched traffic.
     */
    ipsecProtocols?: pulumi.Input<string>;
    /**
     * Specifies what to do if some of the SAs for this policy cannot be found:use - skip this transform, do not drop the
     * packet, and do not acquire SA from IKE daemon;require - drop the packet and acquire SA;unique - drop the packet and
     * acquire a unique SA that is only used with this particular policy. It is used in setups where multiple clients can sit
     * behind one public IP address (clients behind NAT).
     */
    level?: pulumi.Input<string>;
    /**
     * Name of the peer on which the policy applies.
     */
    peer?: pulumi.Input<string>;
    /**
     * Name of the proposal template that will be sent by IKE daemon to establish SAs for this policy.
     */
    proposal?: pulumi.Input<string>;
    /**
     * IP packet protocol to match.
     */
    protocol?: pulumi.Input<string>;
    /**
     * Source address to be matched in packets. Applicable when tunnel mode (`tunnel=yes`) or template (`template=yes`) is
     * used.
     */
    srcAddress?: pulumi.Input<string>;
    /**
     * Source port to be matched in packets. If set to any all ports will be matched.
     */
    srcPort?: pulumi.Input<string>;
    /**
     * Creates a template and assigns it to a specified policy group.Following parameters are used by template: `group` - name
     * of the policy group to which this template is assigned; `src-address`, `dst-address` - Requested subnet must match in
     * both directions (for example 0.0.0.0/0 to allow all); `protocol` - protocol to match, if set to all, then any protocol
     * is accepted; `proposal` - SA parameters used for this template; `level` - useful when unique is required in setups with
     * multiple clients behind NAT.
     */
    template?: pulumi.Input<boolean>;
    /**
     * Specifies whether to use tunnel mode.
     */
    tunnel?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a IpIpsecPolicy resource.
 */
export interface IpIpsecPolicyArgs {
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
     * Specifies what to do with the packet matched by the policy.none - pass the packet unchanged.discard - drop the
     * packet.encrypt - apply transformations specified in this policy and it's SA.
     */
    action?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Destination address to be matched in packets. Applicable when tunnel mode (`tunnel=yes`) or template (`template=yes`) is
     * used.
     */
    dstAddress?: pulumi.Input<string>;
    /**
     * Destination port to be matched in packets. If set to any all ports will be matched.
     */
    dstPort?: pulumi.Input<string>;
    /**
     * Name of the policy group to which this **template** is assigned.
     */
    group?: pulumi.Input<string>;
    ipIpsecPolicyId?: pulumi.Input<string>;
    /**
     * Specifies what combination of Authentication Header and Encapsulating Security Payload protocols you want to apply to
     * matched traffic.
     */
    ipsecProtocols?: pulumi.Input<string>;
    /**
     * Specifies what to do if some of the SAs for this policy cannot be found:use - skip this transform, do not drop the
     * packet, and do not acquire SA from IKE daemon;require - drop the packet and acquire SA;unique - drop the packet and
     * acquire a unique SA that is only used with this particular policy. It is used in setups where multiple clients can sit
     * behind one public IP address (clients behind NAT).
     */
    level?: pulumi.Input<string>;
    /**
     * Name of the peer on which the policy applies.
     */
    peer?: pulumi.Input<string>;
    /**
     * Name of the proposal template that will be sent by IKE daemon to establish SAs for this policy.
     */
    proposal?: pulumi.Input<string>;
    /**
     * IP packet protocol to match.
     */
    protocol?: pulumi.Input<string>;
    /**
     * Source address to be matched in packets. Applicable when tunnel mode (`tunnel=yes`) or template (`template=yes`) is
     * used.
     */
    srcAddress?: pulumi.Input<string>;
    /**
     * Source port to be matched in packets. If set to any all ports will be matched.
     */
    srcPort?: pulumi.Input<string>;
    /**
     * Creates a template and assigns it to a specified policy group.Following parameters are used by template: `group` - name
     * of the policy group to which this template is assigned; `src-address`, `dst-address` - Requested subnet must match in
     * both directions (for example 0.0.0.0/0 to allow all); `protocol` - protocol to match, if set to all, then any protocol
     * is accepted; `proposal` - SA parameters used for this template; `level` - useful when unique is required in setups with
     * multiple clients behind NAT.
     */
    template?: pulumi.Input<boolean>;
    /**
     * Specifies whether to use tunnel mode.
     */
    tunnel?: pulumi.Input<boolean>;
}
