// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class InterfaceDot1xServer extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceDot1xServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceDot1xServerState, opts?: pulumi.CustomResourceOptions): InterfaceDot1xServer {
        return new InterfaceDot1xServer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/interfaceDot1xServer:InterfaceDot1xServer';

    /**
     * Returns true if the given object is an instance of InterfaceDot1xServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InterfaceDot1xServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InterfaceDot1xServer.__pulumiType;
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
     * Whether to send RADIUS accounting requests to the authentication server.
     */
    public readonly accounting!: pulumi.Output<boolean | undefined>;
    /**
     * Total time available for EAP authentication.
     */
    public readonly authTimeout!: pulumi.Output<string | undefined>;
    /**
     * Used authentication type on a server interface. Comma-separated list of `dot1x` and `mac-auth`.
     */
    public readonly authTypes!: pulumi.Output<string[] | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * Assigned VLAN when end devices do not support dot1x authentication and no mac-auth fallback is configured.
     */
    public readonly guestVlanId!: pulumi.Output<number | undefined>;
    /**
     * Name of the interface.
     */
    public readonly interface!: pulumi.Output<string>;
    public readonly interfaceDot1xServerId!: pulumi.Output<string>;
    /**
     * Interval between scheduled RADIUS Interim-Update messages.
     */
    public readonly interimUpdate!: pulumi.Output<string | undefined>;
    /**
     * An option that allows to control User-Name and User-Password RADIUS attributes when using MAC authentication.
     */
    public readonly macAuthMode!: pulumi.Output<string | undefined>;
    /**
     * An option that controls how the MAC address of the client is encoded in the User-Name and User-Password attributes when
     * using MAC authentication.
     */
    public readonly radiusMacFormat!: pulumi.Output<string | undefined>;
    /**
     * An option that enables server port re-authentication.
     */
    public readonly reauthTimeout!: pulumi.Output<string | undefined>;
    /**
     * Assigned VLAN when authentication failed, and a RADIUS server responded with an Access-Reject message.
     */
    public readonly rejectVlanId!: pulumi.Output<number | undefined>;
    /**
     * The time interval between message re-transmissions if no response is received from the supplicant.
     */
    public readonly retransTimeout!: pulumi.Output<string | undefined>;
    /**
     * Assigned VLAN when RADIUS server is not responding and request timed out.
     */
    public readonly serverFailVlanId!: pulumi.Output<number | undefined>;

    /**
     * Create a InterfaceDot1xServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterfaceDot1xServerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InterfaceDot1xServerArgs | InterfaceDot1xServerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as InterfaceDot1xServerState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["accounting"] = state ? state.accounting : undefined;
            resourceInputs["authTimeout"] = state ? state.authTimeout : undefined;
            resourceInputs["authTypes"] = state ? state.authTypes : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["guestVlanId"] = state ? state.guestVlanId : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["interfaceDot1xServerId"] = state ? state.interfaceDot1xServerId : undefined;
            resourceInputs["interimUpdate"] = state ? state.interimUpdate : undefined;
            resourceInputs["macAuthMode"] = state ? state.macAuthMode : undefined;
            resourceInputs["radiusMacFormat"] = state ? state.radiusMacFormat : undefined;
            resourceInputs["reauthTimeout"] = state ? state.reauthTimeout : undefined;
            resourceInputs["rejectVlanId"] = state ? state.rejectVlanId : undefined;
            resourceInputs["retransTimeout"] = state ? state.retransTimeout : undefined;
            resourceInputs["serverFailVlanId"] = state ? state.serverFailVlanId : undefined;
        } else {
            const args = argsOrState as InterfaceDot1xServerArgs | undefined;
            if ((!args || args.interface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interface'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["accounting"] = args ? args.accounting : undefined;
            resourceInputs["authTimeout"] = args ? args.authTimeout : undefined;
            resourceInputs["authTypes"] = args ? args.authTypes : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["guestVlanId"] = args ? args.guestVlanId : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["interfaceDot1xServerId"] = args ? args.interfaceDot1xServerId : undefined;
            resourceInputs["interimUpdate"] = args ? args.interimUpdate : undefined;
            resourceInputs["macAuthMode"] = args ? args.macAuthMode : undefined;
            resourceInputs["radiusMacFormat"] = args ? args.radiusMacFormat : undefined;
            resourceInputs["reauthTimeout"] = args ? args.reauthTimeout : undefined;
            resourceInputs["rejectVlanId"] = args ? args.rejectVlanId : undefined;
            resourceInputs["retransTimeout"] = args ? args.retransTimeout : undefined;
            resourceInputs["serverFailVlanId"] = args ? args.serverFailVlanId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(InterfaceDot1xServer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering InterfaceDot1xServer resources.
 */
export interface InterfaceDot1xServerState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to send RADIUS accounting requests to the authentication server.
     */
    accounting?: pulumi.Input<boolean>;
    /**
     * Total time available for EAP authentication.
     */
    authTimeout?: pulumi.Input<string>;
    /**
     * Used authentication type on a server interface. Comma-separated list of `dot1x` and `mac-auth`.
     */
    authTypes?: pulumi.Input<pulumi.Input<string>[]>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Assigned VLAN when end devices do not support dot1x authentication and no mac-auth fallback is configured.
     */
    guestVlanId?: pulumi.Input<number>;
    /**
     * Name of the interface.
     */
    interface?: pulumi.Input<string>;
    interfaceDot1xServerId?: pulumi.Input<string>;
    /**
     * Interval between scheduled RADIUS Interim-Update messages.
     */
    interimUpdate?: pulumi.Input<string>;
    /**
     * An option that allows to control User-Name and User-Password RADIUS attributes when using MAC authentication.
     */
    macAuthMode?: pulumi.Input<string>;
    /**
     * An option that controls how the MAC address of the client is encoded in the User-Name and User-Password attributes when
     * using MAC authentication.
     */
    radiusMacFormat?: pulumi.Input<string>;
    /**
     * An option that enables server port re-authentication.
     */
    reauthTimeout?: pulumi.Input<string>;
    /**
     * Assigned VLAN when authentication failed, and a RADIUS server responded with an Access-Reject message.
     */
    rejectVlanId?: pulumi.Input<number>;
    /**
     * The time interval between message re-transmissions if no response is received from the supplicant.
     */
    retransTimeout?: pulumi.Input<string>;
    /**
     * Assigned VLAN when RADIUS server is not responding and request timed out.
     */
    serverFailVlanId?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a InterfaceDot1xServer resource.
 */
export interface InterfaceDot1xServerArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to send RADIUS accounting requests to the authentication server.
     */
    accounting?: pulumi.Input<boolean>;
    /**
     * Total time available for EAP authentication.
     */
    authTimeout?: pulumi.Input<string>;
    /**
     * Used authentication type on a server interface. Comma-separated list of `dot1x` and `mac-auth`.
     */
    authTypes?: pulumi.Input<pulumi.Input<string>[]>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Assigned VLAN when end devices do not support dot1x authentication and no mac-auth fallback is configured.
     */
    guestVlanId?: pulumi.Input<number>;
    /**
     * Name of the interface.
     */
    interface: pulumi.Input<string>;
    interfaceDot1xServerId?: pulumi.Input<string>;
    /**
     * Interval between scheduled RADIUS Interim-Update messages.
     */
    interimUpdate?: pulumi.Input<string>;
    /**
     * An option that allows to control User-Name and User-Password RADIUS attributes when using MAC authentication.
     */
    macAuthMode?: pulumi.Input<string>;
    /**
     * An option that controls how the MAC address of the client is encoded in the User-Name and User-Password attributes when
     * using MAC authentication.
     */
    radiusMacFormat?: pulumi.Input<string>;
    /**
     * An option that enables server port re-authentication.
     */
    reauthTimeout?: pulumi.Input<string>;
    /**
     * Assigned VLAN when authentication failed, and a RADIUS server responded with an Access-Reject message.
     */
    rejectVlanId?: pulumi.Input<number>;
    /**
     * The time interval between message re-transmissions if no response is received from the supplicant.
     */
    retransTimeout?: pulumi.Input<string>;
    /**
     * Assigned VLAN when RADIUS server is not responding and request timed out.
     */
    serverFailVlanId?: pulumi.Input<number>;
}
