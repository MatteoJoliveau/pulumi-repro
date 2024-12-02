import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceDot1xServer extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceDot1xServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceDot1xServerState, opts?: pulumi.CustomResourceOptions): InterfaceDot1xServer;
    /**
     * Returns true if the given object is an instance of InterfaceDot1xServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceDot1xServer;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Whether to send RADIUS accounting requests to the authentication server.
     */
    readonly accounting: pulumi.Output<boolean | undefined>;
    /**
     * Total time available for EAP authentication.
     */
    readonly authTimeout: pulumi.Output<string | undefined>;
    /**
     * Used authentication type on a server interface. Comma-separated list of `dot1x` and `mac-auth`.
     */
    readonly authTypes: pulumi.Output<string[] | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Assigned VLAN when end devices do not support dot1x authentication and no mac-auth fallback is configured.
     */
    readonly guestVlanId: pulumi.Output<number | undefined>;
    /**
     * Name of the interface.
     */
    readonly interface: pulumi.Output<string>;
    readonly interfaceDot1xServerId: pulumi.Output<string>;
    /**
     * Interval between scheduled RADIUS Interim-Update messages.
     */
    readonly interimUpdate: pulumi.Output<string | undefined>;
    /**
     * An option that allows to control User-Name and User-Password RADIUS attributes when using MAC authentication.
     */
    readonly macAuthMode: pulumi.Output<string | undefined>;
    /**
     * An option that controls how the MAC address of the client is encoded in the User-Name and User-Password attributes when
     * using MAC authentication.
     */
    readonly radiusMacFormat: pulumi.Output<string | undefined>;
    /**
     * An option that enables server port re-authentication.
     */
    readonly reauthTimeout: pulumi.Output<string | undefined>;
    /**
     * Assigned VLAN when authentication failed, and a RADIUS server responded with an Access-Reject message.
     */
    readonly rejectVlanId: pulumi.Output<number | undefined>;
    /**
     * The time interval between message re-transmissions if no response is received from the supplicant.
     */
    readonly retransTimeout: pulumi.Output<string | undefined>;
    /**
     * Assigned VLAN when RADIUS server is not responding and request timed out.
     */
    readonly serverFailVlanId: pulumi.Output<number | undefined>;
    /**
     * Create a InterfaceDot1xServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterfaceDot1xServerArgs, opts?: pulumi.CustomResourceOptions);
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
