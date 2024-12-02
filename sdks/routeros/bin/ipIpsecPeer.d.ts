import * as pulumi from "@pulumi/pulumi";
export declare class IpIpsecPeer extends pulumi.CustomResource {
    /**
     * Get an existing IpIpsecPeer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpIpsecPeerState, opts?: pulumi.CustomResourceOptions): IpIpsecPeer;
    /**
     * Returns true if the given object is an instance of IpIpsecPeer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpIpsecPeer;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * If the remote peer's address matches this prefix, then the peer configuration is used in authentication and
     * establishment of Phase 1. If several peer's addresses match several configuration entries, the most specific one (i.e.
     * the one with the largest netmask) will be used.
     */
    readonly address: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    readonly dynamic: pulumi.Output<boolean>;
    /**
     * Different ISAKMP phase 1 exchange modes according to RFC 2408. the main mode relaxes rfc2409 section 5.4, to allow
     * pre-shared-key authentication in the main mode. ike2 mode enables Ikev2 RFC 7296. Parameters that are ignored by IKEv2
     * proposal-check, compatibility-options, lifebytes, dpd-maximum-failures, nat-traversal.
     */
    readonly exchangeMode: pulumi.Output<string | undefined>;
    readonly ipIpsecPeerId: pulumi.Output<string>;
    /**
     * Routers local address on which Phase 1 should be bounded to.
     */
    readonly localAddress: pulumi.Output<string | undefined>;
    /**
     * Peer name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * When a passive mode is enabled will wait for a remote peer to initiate an IKE connection. The enabled passive mode also
     * indicates that the peer is xauth responder, and disabled passive mode - xauth initiator. When a passive mode is a
     * disabled peer will try to establish not only phase1 but also phase2 automatically, if policies are configured or created
     * during the phase1.
     */
    readonly passive: pulumi.Output<boolean | undefined>;
    /**
     * Communication port used (when a router is an initiator) to connect to remote peer in cases if remote peer uses the
     * non-default port.
     */
    readonly port: pulumi.Output<number | undefined>;
    /**
     * Name of the profile template that will be used during IKE negotiation.
     */
    readonly profile: pulumi.Output<string | undefined>;
    /**
     * Whether this peer will act as a responder only (listen to incoming requests) and not initiate a connection.
     */
    readonly responder: pulumi.Output<boolean>;
    /**
     * Specifies whether to send `initial contact` IKE packet or wait for remote side, this packet should trigger the removal
     * of old peer SAs for current source address. Usually, in road warrior setups clients are initiators and this parameter
     * should be set to no. Initial contact is not sent if modecfg or xauth is enabled for ikev1.
     */
    readonly sendInitialContact: pulumi.Output<boolean | undefined>;
    /**
     * Create a IpIpsecPeer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpIpsecPeerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpIpsecPeer resources.
 */
export interface IpIpsecPeerState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * If the remote peer's address matches this prefix, then the peer configuration is used in authentication and
     * establishment of Phase 1. If several peer's addresses match several configuration entries, the most specific one (i.e.
     * the one with the largest netmask) will be used.
     */
    address?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    /**
     * Different ISAKMP phase 1 exchange modes according to RFC 2408. the main mode relaxes rfc2409 section 5.4, to allow
     * pre-shared-key authentication in the main mode. ike2 mode enables Ikev2 RFC 7296. Parameters that are ignored by IKEv2
     * proposal-check, compatibility-options, lifebytes, dpd-maximum-failures, nat-traversal.
     */
    exchangeMode?: pulumi.Input<string>;
    ipIpsecPeerId?: pulumi.Input<string>;
    /**
     * Routers local address on which Phase 1 should be bounded to.
     */
    localAddress?: pulumi.Input<string>;
    /**
     * Peer name.
     */
    name?: pulumi.Input<string>;
    /**
     * When a passive mode is enabled will wait for a remote peer to initiate an IKE connection. The enabled passive mode also
     * indicates that the peer is xauth responder, and disabled passive mode - xauth initiator. When a passive mode is a
     * disabled peer will try to establish not only phase1 but also phase2 automatically, if policies are configured or created
     * during the phase1.
     */
    passive?: pulumi.Input<boolean>;
    /**
     * Communication port used (when a router is an initiator) to connect to remote peer in cases if remote peer uses the
     * non-default port.
     */
    port?: pulumi.Input<number>;
    /**
     * Name of the profile template that will be used during IKE negotiation.
     */
    profile?: pulumi.Input<string>;
    /**
     * Whether this peer will act as a responder only (listen to incoming requests) and not initiate a connection.
     */
    responder?: pulumi.Input<boolean>;
    /**
     * Specifies whether to send `initial contact` IKE packet or wait for remote side, this packet should trigger the removal
     * of old peer SAs for current source address. Usually, in road warrior setups clients are initiators and this parameter
     * should be set to no. Initial contact is not sent if modecfg or xauth is enabled for ikev1.
     */
    sendInitialContact?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a IpIpsecPeer resource.
 */
export interface IpIpsecPeerArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * If the remote peer's address matches this prefix, then the peer configuration is used in authentication and
     * establishment of Phase 1. If several peer's addresses match several configuration entries, the most specific one (i.e.
     * the one with the largest netmask) will be used.
     */
    address?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Different ISAKMP phase 1 exchange modes according to RFC 2408. the main mode relaxes rfc2409 section 5.4, to allow
     * pre-shared-key authentication in the main mode. ike2 mode enables Ikev2 RFC 7296. Parameters that are ignored by IKEv2
     * proposal-check, compatibility-options, lifebytes, dpd-maximum-failures, nat-traversal.
     */
    exchangeMode?: pulumi.Input<string>;
    ipIpsecPeerId?: pulumi.Input<string>;
    /**
     * Routers local address on which Phase 1 should be bounded to.
     */
    localAddress?: pulumi.Input<string>;
    /**
     * Peer name.
     */
    name?: pulumi.Input<string>;
    /**
     * When a passive mode is enabled will wait for a remote peer to initiate an IKE connection. The enabled passive mode also
     * indicates that the peer is xauth responder, and disabled passive mode - xauth initiator. When a passive mode is a
     * disabled peer will try to establish not only phase1 but also phase2 automatically, if policies are configured or created
     * during the phase1.
     */
    passive?: pulumi.Input<boolean>;
    /**
     * Communication port used (when a router is an initiator) to connect to remote peer in cases if remote peer uses the
     * non-default port.
     */
    port?: pulumi.Input<number>;
    /**
     * Name of the profile template that will be used during IKE negotiation.
     */
    profile?: pulumi.Input<string>;
    /**
     * Specifies whether to send `initial contact` IKE packet or wait for remote side, this packet should trigger the removal
     * of old peer SAs for current source address. Usually, in road warrior setups clients are initiators and this parameter
     * should be set to no. Initial contact is not sent if modecfg or xauth is enabled for ikev1.
     */
    sendInitialContact?: pulumi.Input<boolean>;
}
