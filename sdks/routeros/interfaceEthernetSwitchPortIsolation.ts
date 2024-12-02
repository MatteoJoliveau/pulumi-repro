// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class InterfaceEthernetSwitchPortIsolation extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceEthernetSwitchPortIsolation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceEthernetSwitchPortIsolationState, opts?: pulumi.CustomResourceOptions): InterfaceEthernetSwitchPortIsolation {
        return new InterfaceEthernetSwitchPortIsolation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/interfaceEthernetSwitchPortIsolation:InterfaceEthernetSwitchPortIsolation';

    /**
     * Returns true if the given object is an instance of InterfaceEthernetSwitchPortIsolation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InterfaceEthernetSwitchPortIsolation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InterfaceEthernetSwitchPortIsolation.__pulumiType;
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
     * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not
     * required.</em>
     */
    public readonly ___unset_!: pulumi.Output<string | undefined>;
    /**
     * Forces ingress traffic to be forwarded to a specific interface. Multiple interfaces can be specified by separating them
     * with a comma.
     */
    public readonly forwardingOverride!: pulumi.Output<string | undefined>;
    public readonly interfaceEthernetSwitchPortIsolationId!: pulumi.Output<string>;
    public /*out*/ readonly invalid!: pulumi.Output<boolean>;
    /**
     * Port name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Name of the switch.
     */
    public /*out*/ readonly switch!: pulumi.Output<string>;

    /**
     * Create a InterfaceEthernetSwitchPortIsolation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: InterfaceEthernetSwitchPortIsolationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InterfaceEthernetSwitchPortIsolationArgs | InterfaceEthernetSwitchPortIsolationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as InterfaceEthernetSwitchPortIsolationState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["___skip_"] = state ? state.___skip_ : undefined;
            resourceInputs["___unset_"] = state ? state.___unset_ : undefined;
            resourceInputs["forwardingOverride"] = state ? state.forwardingOverride : undefined;
            resourceInputs["interfaceEthernetSwitchPortIsolationId"] = state ? state.interfaceEthernetSwitchPortIsolationId : undefined;
            resourceInputs["invalid"] = state ? state.invalid : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["switch"] = state ? state.switch : undefined;
        } else {
            const args = argsOrState as InterfaceEthernetSwitchPortIsolationArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["___skip_"] = args ? args.___skip_ : undefined;
            resourceInputs["___unset_"] = args ? args.___unset_ : undefined;
            resourceInputs["forwardingOverride"] = args ? args.forwardingOverride : undefined;
            resourceInputs["interfaceEthernetSwitchPortIsolationId"] = args ? args.interfaceEthernetSwitchPortIsolationId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["invalid"] = undefined /*out*/;
            resourceInputs["switch"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(InterfaceEthernetSwitchPortIsolation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering InterfaceEthernetSwitchPortIsolation resources.
 */
export interface InterfaceEthernetSwitchPortIsolationState {
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
     * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not
     * required.</em>
     */
    ___unset_?: pulumi.Input<string>;
    /**
     * Forces ingress traffic to be forwarded to a specific interface. Multiple interfaces can be specified by separating them
     * with a comma.
     */
    forwardingOverride?: pulumi.Input<string>;
    interfaceEthernetSwitchPortIsolationId?: pulumi.Input<string>;
    invalid?: pulumi.Input<boolean>;
    /**
     * Port name.
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the switch.
     */
    switch?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a InterfaceEthernetSwitchPortIsolation resource.
 */
export interface InterfaceEthernetSwitchPortIsolationArgs {
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
     * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not
     * required.</em>
     */
    ___unset_?: pulumi.Input<string>;
    /**
     * Forces ingress traffic to be forwarded to a specific interface. Multiple interfaces can be specified by separating them
     * with a comma.
     */
    forwardingOverride?: pulumi.Input<string>;
    interfaceEthernetSwitchPortIsolationId?: pulumi.Input<string>;
    /**
     * Port name.
     */
    name?: pulumi.Input<string>;
}