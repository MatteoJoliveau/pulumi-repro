// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Snmp extends pulumi.CustomResource {
    /**
     * Get an existing Snmp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SnmpState, opts?: pulumi.CustomResourceOptions): Snmp {
        return new Snmp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/snmp:Snmp';

    /**
     * Returns true if the given object is an instance of Snmp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Snmp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Snmp.__pulumiType;
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
     * Contact information.
     */
    public readonly contact!: pulumi.Output<string | undefined>;
    /**
     * Used to disable/enable SNMP service
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * For SNMP v3, used as part of identifier. You can configure suffix part of engine id using this argument. If SNMP client
     * is not capable to detect set engine-id value then this prefix hex have to be used 0x80003a8c04
     */
    public /*out*/ readonly engineId!: pulumi.Output<string>;
    /**
     * Unique identifier for an SNMPv3 engine by configuring the suffix of the engine ID.
     */
    public readonly engineIdSuffix!: pulumi.Output<string | undefined>;
    /**
     * Location information.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    public readonly snmpId!: pulumi.Output<string>;
    /**
     * Force the router to always use the same IP source address for all of the SNMP messages.
     */
    public readonly srcAddress!: pulumi.Output<string | undefined>;
    /**
     * Which communities configured in community menu to use when sending out the trap. This name must be present in the
     * community list.
     */
    public readonly trapCommunity!: pulumi.Output<string>;
    /**
     * What action will generate traps: interfaces - interface changes; start-trap - snmp server starting on the router.
     */
    public readonly trapGenerators!: pulumi.Output<string>;
    /**
     * List of interfaces that traps are going to be sent out.
     */
    public readonly trapInterfaces!: pulumi.Output<string | undefined>;
    /**
     * IP (IPv4 or IPv6) addresses of SNMP data collectors that have to receive the trap.
     */
    public readonly trapTargets!: pulumi.Output<string[] | undefined>;
    /**
     * Version of SNMP protocol to use for trap.
     */
    public readonly trapVersion!: pulumi.Output<number>;
    /**
     * The VRF table this resource operates on.
     */
    public readonly vrf!: pulumi.Output<string | undefined>;

    /**
     * Create a Snmp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SnmpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SnmpArgs | SnmpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SnmpState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["contact"] = state ? state.contact : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["engineId"] = state ? state.engineId : undefined;
            resourceInputs["engineIdSuffix"] = state ? state.engineIdSuffix : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["snmpId"] = state ? state.snmpId : undefined;
            resourceInputs["srcAddress"] = state ? state.srcAddress : undefined;
            resourceInputs["trapCommunity"] = state ? state.trapCommunity : undefined;
            resourceInputs["trapGenerators"] = state ? state.trapGenerators : undefined;
            resourceInputs["trapInterfaces"] = state ? state.trapInterfaces : undefined;
            resourceInputs["trapTargets"] = state ? state.trapTargets : undefined;
            resourceInputs["trapVersion"] = state ? state.trapVersion : undefined;
            resourceInputs["vrf"] = state ? state.vrf : undefined;
        } else {
            const args = argsOrState as SnmpArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["contact"] = args ? args.contact : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["engineIdSuffix"] = args ? args.engineIdSuffix : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["snmpId"] = args ? args.snmpId : undefined;
            resourceInputs["srcAddress"] = args ? args.srcAddress : undefined;
            resourceInputs["trapCommunity"] = args?.trapCommunity ? pulumi.secret(args.trapCommunity) : undefined;
            resourceInputs["trapGenerators"] = args ? args.trapGenerators : undefined;
            resourceInputs["trapInterfaces"] = args ? args.trapInterfaces : undefined;
            resourceInputs["trapTargets"] = args ? args.trapTargets : undefined;
            resourceInputs["trapVersion"] = args ? args.trapVersion : undefined;
            resourceInputs["vrf"] = args ? args.vrf : undefined;
            resourceInputs["engineId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["trapCommunity"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Snmp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Snmp resources.
 */
export interface SnmpState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Contact information.
     */
    contact?: pulumi.Input<string>;
    /**
     * Used to disable/enable SNMP service
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * For SNMP v3, used as part of identifier. You can configure suffix part of engine id using this argument. If SNMP client
     * is not capable to detect set engine-id value then this prefix hex have to be used 0x80003a8c04
     */
    engineId?: pulumi.Input<string>;
    /**
     * Unique identifier for an SNMPv3 engine by configuring the suffix of the engine ID.
     */
    engineIdSuffix?: pulumi.Input<string>;
    /**
     * Location information.
     */
    location?: pulumi.Input<string>;
    snmpId?: pulumi.Input<string>;
    /**
     * Force the router to always use the same IP source address for all of the SNMP messages.
     */
    srcAddress?: pulumi.Input<string>;
    /**
     * Which communities configured in community menu to use when sending out the trap. This name must be present in the
     * community list.
     */
    trapCommunity?: pulumi.Input<string>;
    /**
     * What action will generate traps: interfaces - interface changes; start-trap - snmp server starting on the router.
     */
    trapGenerators?: pulumi.Input<string>;
    /**
     * List of interfaces that traps are going to be sent out.
     */
    trapInterfaces?: pulumi.Input<string>;
    /**
     * IP (IPv4 or IPv6) addresses of SNMP data collectors that have to receive the trap.
     */
    trapTargets?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Version of SNMP protocol to use for trap.
     */
    trapVersion?: pulumi.Input<number>;
    /**
     * The VRF table this resource operates on.
     */
    vrf?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Snmp resource.
 */
export interface SnmpArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Contact information.
     */
    contact?: pulumi.Input<string>;
    /**
     * Used to disable/enable SNMP service
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Unique identifier for an SNMPv3 engine by configuring the suffix of the engine ID.
     */
    engineIdSuffix?: pulumi.Input<string>;
    /**
     * Location information.
     */
    location?: pulumi.Input<string>;
    snmpId?: pulumi.Input<string>;
    /**
     * Force the router to always use the same IP source address for all of the SNMP messages.
     */
    srcAddress?: pulumi.Input<string>;
    /**
     * Which communities configured in community menu to use when sending out the trap. This name must be present in the
     * community list.
     */
    trapCommunity?: pulumi.Input<string>;
    /**
     * What action will generate traps: interfaces - interface changes; start-trap - snmp server starting on the router.
     */
    trapGenerators?: pulumi.Input<string>;
    /**
     * List of interfaces that traps are going to be sent out.
     */
    trapInterfaces?: pulumi.Input<string>;
    /**
     * IP (IPv4 or IPv6) addresses of SNMP data collectors that have to receive the trap.
     */
    trapTargets?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Version of SNMP protocol to use for trap.
     */
    trapVersion?: pulumi.Input<number>;
    /**
     * The VRF table this resource operates on.
     */
    vrf?: pulumi.Input<string>;
}
