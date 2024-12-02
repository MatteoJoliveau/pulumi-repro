// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IpIpsecPolicy extends pulumi.CustomResource {
    /**
     * Get an existing IpIpsecPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpIpsecPolicyState, opts?: pulumi.CustomResourceOptions): IpIpsecPolicy {
        return new IpIpsecPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/ipIpsecPolicy:IpIpsecPolicy';

    /**
     * Returns true if the given object is an instance of IpIpsecPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IpIpsecPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpIpsecPolicy.__pulumiType;
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
     * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
     */
    public readonly ___skip_!: pulumi.Output<string | undefined>;
    /**
     * Specifies what to do with the packet matched by the policy.none - pass the packet unchanged.discard - drop the
     * packet.encrypt - apply transformations specified in this policy and it's SA.
     */
    public readonly action!: pulumi.Output<string | undefined>;
    public /*out*/ readonly active!: pulumi.Output<boolean>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * Destination address to be matched in packets. Applicable when tunnel mode (`tunnel=yes`) or template (`template=yes`) is
     * used.
     */
    public readonly dstAddress!: pulumi.Output<string | undefined>;
    /**
     * Destination port to be matched in packets. If set to any all ports will be matched.
     */
    public readonly dstPort!: pulumi.Output<string | undefined>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    public /*out*/ readonly dynamic!: pulumi.Output<boolean>;
    /**
     * Name of the policy group to which this **template** is assigned.
     */
    public readonly group!: pulumi.Output<string | undefined>;
    public /*out*/ readonly invalid!: pulumi.Output<boolean>;
    public readonly ipIpsecPolicyId!: pulumi.Output<string>;
    /**
     * Specifies what combination of Authentication Header and Encapsulating Security Payload protocols you want to apply to
     * matched traffic.
     */
    public readonly ipsecProtocols!: pulumi.Output<string | undefined>;
    /**
     * Specifies what to do if some of the SAs for this policy cannot be found:use - skip this transform, do not drop the
     * packet, and do not acquire SA from IKE daemon;require - drop the packet and acquire SA;unique - drop the packet and
     * acquire a unique SA that is only used with this particular policy. It is used in setups where multiple clients can sit
     * behind one public IP address (clients behind NAT).
     */
    public readonly level!: pulumi.Output<string | undefined>;
    /**
     * Name of the peer on which the policy applies.
     */
    public readonly peer!: pulumi.Output<string | undefined>;
    /**
     * Name of the proposal template that will be sent by IKE daemon to establish SAs for this policy.
     */
    public readonly proposal!: pulumi.Output<string | undefined>;
    /**
     * IP packet protocol to match.
     */
    public readonly protocol!: pulumi.Output<string | undefined>;
    /**
     * Source address to be matched in packets. Applicable when tunnel mode (`tunnel=yes`) or template (`template=yes`) is
     * used.
     */
    public readonly srcAddress!: pulumi.Output<string | undefined>;
    /**
     * Source port to be matched in packets. If set to any all ports will be matched.
     */
    public readonly srcPort!: pulumi.Output<string | undefined>;
    /**
     * Creates a template and assigns it to a specified policy group.Following parameters are used by template: `group` - name
     * of the policy group to which this template is assigned; `src-address`, `dst-address` - Requested subnet must match in
     * both directions (for example 0.0.0.0/0 to allow all); `protocol` - protocol to match, if set to all, then any protocol
     * is accepted; `proposal` - SA parameters used for this template; `level` - useful when unique is required in setups with
     * multiple clients behind NAT.
     */
    public readonly template!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies whether to use tunnel mode.
     */
    public readonly tunnel!: pulumi.Output<boolean | undefined>;

    /**
     * Create a IpIpsecPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpIpsecPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IpIpsecPolicyArgs | IpIpsecPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IpIpsecPolicyState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["___skip_"] = state ? state.___skip_ : undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["active"] = state ? state.active : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["dstAddress"] = state ? state.dstAddress : undefined;
            resourceInputs["dstPort"] = state ? state.dstPort : undefined;
            resourceInputs["dynamic"] = state ? state.dynamic : undefined;
            resourceInputs["group"] = state ? state.group : undefined;
            resourceInputs["invalid"] = state ? state.invalid : undefined;
            resourceInputs["ipIpsecPolicyId"] = state ? state.ipIpsecPolicyId : undefined;
            resourceInputs["ipsecProtocols"] = state ? state.ipsecProtocols : undefined;
            resourceInputs["level"] = state ? state.level : undefined;
            resourceInputs["peer"] = state ? state.peer : undefined;
            resourceInputs["proposal"] = state ? state.proposal : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["srcAddress"] = state ? state.srcAddress : undefined;
            resourceInputs["srcPort"] = state ? state.srcPort : undefined;
            resourceInputs["template"] = state ? state.template : undefined;
            resourceInputs["tunnel"] = state ? state.tunnel : undefined;
        } else {
            const args = argsOrState as IpIpsecPolicyArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["___skip_"] = args ? args.___skip_ : undefined;
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["dstAddress"] = args ? args.dstAddress : undefined;
            resourceInputs["dstPort"] = args ? args.dstPort : undefined;
            resourceInputs["group"] = args ? args.group : undefined;
            resourceInputs["ipIpsecPolicyId"] = args ? args.ipIpsecPolicyId : undefined;
            resourceInputs["ipsecProtocols"] = args ? args.ipsecProtocols : undefined;
            resourceInputs["level"] = args ? args.level : undefined;
            resourceInputs["peer"] = args ? args.peer : undefined;
            resourceInputs["proposal"] = args ? args.proposal : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["srcAddress"] = args ? args.srcAddress : undefined;
            resourceInputs["srcPort"] = args ? args.srcPort : undefined;
            resourceInputs["template"] = args ? args.template : undefined;
            resourceInputs["tunnel"] = args ? args.tunnel : undefined;
            resourceInputs["active"] = undefined /*out*/;
            resourceInputs["dynamic"] = undefined /*out*/;
            resourceInputs["invalid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IpIpsecPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
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