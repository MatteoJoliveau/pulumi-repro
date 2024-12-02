import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceVrrp extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceVrrp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceVrrpState, opts?: pulumi.CustomResourceOptions): InterfaceVrrp;
    /**
     * Returns true if the given object is an instance of InterfaceVrrp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceVrrp;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Address Resolution Protocol mode: * disabled - the interface will not use ARP * enabled - the interface will use ARP *
     * local-proxy-arp - the router performs proxy ARP on the interface and sends replies to the same interface * proxy-arp -
     * the router performs proxy ARP on the interface and sends replies to other interfaces * reply-only - the interface will
     * only reply to requests originated from matching IP address/MAC address combinations which are entered as static entries
     * in the ARP table. No dynamic entries will be automatically stored in the ARP table. Therefore for communications to be
     * successful, a valid static entry must already exist.
     */
    readonly arp: pulumi.Output<string | undefined>;
    /**
     * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to
     * the value of arp-timeout in IP/Settings, default is 30s. Can use postfix ms, s, M, h, d for milliseconds, seconds,
     * minutes, hours or days. If no postfix is set then seconds (s) is used.
     */
    readonly arpTimeout: pulumi.Output<string | undefined>;
    /**
     * Authentication method to use for VRRP advertisement packets.
     */
    readonly authentication: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Allows combining multiple VRRP interfaces to maintain the same VRRP status within the group. `group_authority` was
     * previously called `group_master`, `group_master` is kept for compatibility with scripts, but if both are set only
     * `group_authority` will be taken into account.
     */
    readonly groupAuthority: pulumi.Output<string | undefined>;
    /**
     * Allows combining multiple VRRP interfaces to maintain the same VRRP status within the group. `group_authority` was
     * previously called `group_master`, `group_master` is kept for compatibility with scripts, but if both are set only
     * `group_authority` will be taken into account.
     */
    readonly groupMaster: pulumi.Output<string | undefined>;
    /**
     * Name of the interface.
     */
    readonly interface: pulumi.Output<string>;
    readonly interfaceVrrpId: pulumi.Output<string>;
    /**
     * VRRP update interval in seconds. Defines how often master sends advertisement packets.
     */
    readonly interval: pulumi.Output<string | undefined>;
    readonly invalid: pulumi.Output<boolean>;
    /**
     * Current mac address.
     */
    readonly macAddress: pulumi.Output<string>;
    /**
     * Layer3 Maximum transmission unit ('auto', 0 .. 65535)
     */
    readonly mtu: pulumi.Output<string>;
    readonly name: pulumi.Output<string>;
    /**
     * Script to execute when the node is switched to the backup state.
     */
    readonly onBackup: pulumi.Output<string | undefined>;
    /**
     * Script to execute when the node fails.
     */
    readonly onFail: pulumi.Output<string | undefined>;
    /**
     * Script to execute when the node is switched to master state.
     */
    readonly onMaster: pulumi.Output<string | undefined>;
    /**
     * Password required for authentication. Can be ignored if authentication is not used.
     */
    readonly password: pulumi.Output<string | undefined>;
    /**
     * Whether the master node always has the priority. When set to 'no' the backup node will not be elected to be a master
     * until the current master fails, even if the backup node has higher priority than the current master. This setting is
     * ignored if the owner router becomes available
     */
    readonly preemptionMode: pulumi.Output<boolean | undefined>;
    /**
     * Priority of VRRP node used in Master election algorithm. A higher number means higher priority. '255' is reserved for
     * the router that owns VR IP and '0' is reserved for the Master router to indicate that it is releasing responsibility.
     */
    readonly priority: pulumi.Output<number | undefined>;
    /**
     * Specifies the remote address of the other VRRP router for syncing connection tracking. If not set, the system
     * autodetects the remote address via VRRP. The remote address is used only if sync-connection-tracking=yes.Sync connection
     * tracking uses UDP port 8275.
     */
    readonly remoteAddress: pulumi.Output<string | undefined>;
    readonly running: pulumi.Output<boolean>;
    /**
     * Synchronize connection tracking entries from Master to Backup device.
     */
    readonly syncConnectionTracking: pulumi.Output<boolean | undefined>;
    /**
     * A protocol that will be used by VRRPv3. Valid only if the version is 3.
     */
    readonly v3Protocol: pulumi.Output<string | undefined>;
    /**
     * Which VRRP version to use.
     */
    readonly version: pulumi.Output<number | undefined>;
    /**
     * Virtual Router identifier. Each Virtual router must have a unique id number.
     */
    readonly vrid: pulumi.Output<number | undefined>;
    /**
     * Create a InterfaceVrrp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterfaceVrrpArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterfaceVrrp resources.
 */
export interface InterfaceVrrpState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Address Resolution Protocol mode: * disabled - the interface will not use ARP * enabled - the interface will use ARP *
     * local-proxy-arp - the router performs proxy ARP on the interface and sends replies to the same interface * proxy-arp -
     * the router performs proxy ARP on the interface and sends replies to other interfaces * reply-only - the interface will
     * only reply to requests originated from matching IP address/MAC address combinations which are entered as static entries
     * in the ARP table. No dynamic entries will be automatically stored in the ARP table. Therefore for communications to be
     * successful, a valid static entry must already exist.
     */
    arp?: pulumi.Input<string>;
    /**
     * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to
     * the value of arp-timeout in IP/Settings, default is 30s. Can use postfix ms, s, M, h, d for milliseconds, seconds,
     * minutes, hours or days. If no postfix is set then seconds (s) is used.
     */
    arpTimeout?: pulumi.Input<string>;
    /**
     * Authentication method to use for VRRP advertisement packets.
     */
    authentication?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Allows combining multiple VRRP interfaces to maintain the same VRRP status within the group. `group_authority` was
     * previously called `group_master`, `group_master` is kept for compatibility with scripts, but if both are set only
     * `group_authority` will be taken into account.
     */
    groupAuthority?: pulumi.Input<string>;
    /**
     * Allows combining multiple VRRP interfaces to maintain the same VRRP status within the group. `group_authority` was
     * previously called `group_master`, `group_master` is kept for compatibility with scripts, but if both are set only
     * `group_authority` will be taken into account.
     */
    groupMaster?: pulumi.Input<string>;
    /**
     * Name of the interface.
     */
    interface?: pulumi.Input<string>;
    interfaceVrrpId?: pulumi.Input<string>;
    /**
     * VRRP update interval in seconds. Defines how often master sends advertisement packets.
     */
    interval?: pulumi.Input<string>;
    invalid?: pulumi.Input<boolean>;
    /**
     * Current mac address.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Layer3 Maximum transmission unit ('auto', 0 .. 65535)
     */
    mtu?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * Script to execute when the node is switched to the backup state.
     */
    onBackup?: pulumi.Input<string>;
    /**
     * Script to execute when the node fails.
     */
    onFail?: pulumi.Input<string>;
    /**
     * Script to execute when the node is switched to master state.
     */
    onMaster?: pulumi.Input<string>;
    /**
     * Password required for authentication. Can be ignored if authentication is not used.
     */
    password?: pulumi.Input<string>;
    /**
     * Whether the master node always has the priority. When set to 'no' the backup node will not be elected to be a master
     * until the current master fails, even if the backup node has higher priority than the current master. This setting is
     * ignored if the owner router becomes available
     */
    preemptionMode?: pulumi.Input<boolean>;
    /**
     * Priority of VRRP node used in Master election algorithm. A higher number means higher priority. '255' is reserved for
     * the router that owns VR IP and '0' is reserved for the Master router to indicate that it is releasing responsibility.
     */
    priority?: pulumi.Input<number>;
    /**
     * Specifies the remote address of the other VRRP router for syncing connection tracking. If not set, the system
     * autodetects the remote address via VRRP. The remote address is used only if sync-connection-tracking=yes.Sync connection
     * tracking uses UDP port 8275.
     */
    remoteAddress?: pulumi.Input<string>;
    running?: pulumi.Input<boolean>;
    /**
     * Synchronize connection tracking entries from Master to Backup device.
     */
    syncConnectionTracking?: pulumi.Input<boolean>;
    /**
     * A protocol that will be used by VRRPv3. Valid only if the version is 3.
     */
    v3Protocol?: pulumi.Input<string>;
    /**
     * Which VRRP version to use.
     */
    version?: pulumi.Input<number>;
    /**
     * Virtual Router identifier. Each Virtual router must have a unique id number.
     */
    vrid?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a InterfaceVrrp resource.
 */
export interface InterfaceVrrpArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Address Resolution Protocol mode: * disabled - the interface will not use ARP * enabled - the interface will use ARP *
     * local-proxy-arp - the router performs proxy ARP on the interface and sends replies to the same interface * proxy-arp -
     * the router performs proxy ARP on the interface and sends replies to other interfaces * reply-only - the interface will
     * only reply to requests originated from matching IP address/MAC address combinations which are entered as static entries
     * in the ARP table. No dynamic entries will be automatically stored in the ARP table. Therefore for communications to be
     * successful, a valid static entry must already exist.
     */
    arp?: pulumi.Input<string>;
    /**
     * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to
     * the value of arp-timeout in IP/Settings, default is 30s. Can use postfix ms, s, M, h, d for milliseconds, seconds,
     * minutes, hours or days. If no postfix is set then seconds (s) is used.
     */
    arpTimeout?: pulumi.Input<string>;
    /**
     * Authentication method to use for VRRP advertisement packets.
     */
    authentication?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Allows combining multiple VRRP interfaces to maintain the same VRRP status within the group. `group_authority` was
     * previously called `group_master`, `group_master` is kept for compatibility with scripts, but if both are set only
     * `group_authority` will be taken into account.
     */
    groupAuthority?: pulumi.Input<string>;
    /**
     * Allows combining multiple VRRP interfaces to maintain the same VRRP status within the group. `group_authority` was
     * previously called `group_master`, `group_master` is kept for compatibility with scripts, but if both are set only
     * `group_authority` will be taken into account.
     */
    groupMaster?: pulumi.Input<string>;
    /**
     * Name of the interface.
     */
    interface: pulumi.Input<string>;
    interfaceVrrpId?: pulumi.Input<string>;
    /**
     * VRRP update interval in seconds. Defines how often master sends advertisement packets.
     */
    interval?: pulumi.Input<string>;
    /**
     * Layer3 Maximum transmission unit ('auto', 0 .. 65535)
     */
    mtu?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * Script to execute when the node is switched to the backup state.
     */
    onBackup?: pulumi.Input<string>;
    /**
     * Script to execute when the node fails.
     */
    onFail?: pulumi.Input<string>;
    /**
     * Script to execute when the node is switched to master state.
     */
    onMaster?: pulumi.Input<string>;
    /**
     * Password required for authentication. Can be ignored if authentication is not used.
     */
    password?: pulumi.Input<string>;
    /**
     * Whether the master node always has the priority. When set to 'no' the backup node will not be elected to be a master
     * until the current master fails, even if the backup node has higher priority than the current master. This setting is
     * ignored if the owner router becomes available
     */
    preemptionMode?: pulumi.Input<boolean>;
    /**
     * Priority of VRRP node used in Master election algorithm. A higher number means higher priority. '255' is reserved for
     * the router that owns VR IP and '0' is reserved for the Master router to indicate that it is releasing responsibility.
     */
    priority?: pulumi.Input<number>;
    /**
     * Specifies the remote address of the other VRRP router for syncing connection tracking. If not set, the system
     * autodetects the remote address via VRRP. The remote address is used only if sync-connection-tracking=yes.Sync connection
     * tracking uses UDP port 8275.
     */
    remoteAddress?: pulumi.Input<string>;
    /**
     * Synchronize connection tracking entries from Master to Backup device.
     */
    syncConnectionTracking?: pulumi.Input<boolean>;
    /**
     * A protocol that will be used by VRRPv3. Valid only if the version is 3.
     */
    v3Protocol?: pulumi.Input<string>;
    /**
     * Which VRRP version to use.
     */
    version?: pulumi.Input<number>;
    /**
     * Virtual Router identifier. Each Virtual router must have a unique id number.
     */
    vrid?: pulumi.Input<number>;
}
