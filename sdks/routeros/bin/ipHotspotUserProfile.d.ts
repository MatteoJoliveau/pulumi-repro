import * as pulumi from "@pulumi/pulumi";
export declare class IpHotspotUserProfile extends pulumi.CustomResource {
    /**
     * Get an existing IpHotspotUserProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpHotspotUserProfileState, opts?: pulumi.CustomResourceOptions): IpHotspotUserProfile;
    /**
     * Returns true if the given object is an instance of IpHotspotUserProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpHotspotUserProfile;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not
     * required.</em>
     */
    readonly ___unset_: pulumi.Output<string | undefined>;
    /**
     * Allows to add mac cookie for users.
     */
    readonly addMacCookie: pulumi.Output<boolean | undefined>;
    /**
     * Name of the address list in which users IP address will be added. Useful to mark traffic per user groups for queue tree
     * configurations.
     */
    readonly addressList: pulumi.Output<string | undefined>;
    /**
     * IP pool name from which the user will get IP. When user has improper network settings configuration on the computer,
     * HotSpot server makes translation and assigns correct IP address from the pool instead of incorrect one.
     */
    readonly addressPool: pulumi.Output<string | undefined>;
    /**
     * Enable forced advertisement popups. After certain interval specific web-page is being displayed for HotSpot users.
     * Advertisement page might be blocked by browsers popup blockers.
     */
    readonly advertise: pulumi.Output<boolean | undefined>;
    /**
     * Set of intervals between advertisement popups. After the list is done, the last value is used for all further
     * advertisements, 10 minutes.
     */
    readonly advertiseIntervals: pulumi.Output<string[] | undefined>;
    /**
     * How long advertisement is shown, before blocking network access for HotSpot client. Connection to Internet is not
     * allowed, when advertisement is not shown.
     */
    readonly advertiseTimeout: pulumi.Output<string | undefined>;
    /**
     * List of URLs that is show for advertisement popups. After the last URL is used, list starts from the begining.
     */
    readonly advertiseUrl: pulumi.Output<string | undefined>;
    /**
     * It's the default item.
     */
    readonly default: pulumi.Output<boolean>;
    /**
     * Maximal period of inactivity for authorized HotSpot clients. Timer is counting, when there is no traffic coming from
     * that client and going through the router, for example computer is switched off. User is logged out, dropped of the host
     * list, the address used by the user is freed, when timeout is reached.
     */
    readonly idleTimeout: pulumi.Output<string | undefined>;
    /**
     * Name of the firewall chain applied to incoming packets from the users of this profile, jump rule is required from
     * built-in chain (input, forward, output) to chain=hotspot.
     */
    readonly incomingFilter: pulumi.Output<string | undefined>;
    /**
     * Packet mark put on incoming packets from every user of this profile.
     */
    readonly incomingPacketMark: pulumi.Output<string | undefined>;
    readonly insertQueueBefore: pulumi.Output<string | undefined>;
    readonly ipHotspotUserProfileId: pulumi.Output<string>;
    /**
     * Keepalive timeout for authorized HotSpot clients. Used to detect, that the computer of the client is alive and
     * reachable. User is logged out, when timeout value is reached.
     */
    readonly keepaliveTimeout: pulumi.Output<string | undefined>;
    /**
     * Selects mac-cookie timeout from last login or logout. Read more>>.
     */
    readonly macCookieTimeout: pulumi.Output<string | undefined>;
    /**
     * Descriptive name of the profile.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Script name to be executed, when user logs in to the HotSpot from the particular profile. It is possible to get username
     * from internal user and interface variable. For example, :log info ``User $user logged in!`` . If hotspot is set on
     * bridge interface, then interface variable will show bridge as actual interface unless use-ip-firewall' is set in bridge
     * settings. List of available variables: $user $username (alternative var name for $user) $address $``mac-address``
     * $interface.
     */
    readonly onLogin: pulumi.Output<string | undefined>;
    /**
     * Script name to be executed, when user logs out from the HotSpot.It is possible to get username from internal user and
     * interface variable. For example, :log info ``User $user logged in!`` . If hotspot is set on bridge interface, then
     * interface variable will show bridge as actual interface unless use-ip-firewall is set in bridge settings. List of
     * available variables: $user $username (alternative var name for $user) $address $``mac-address`` $interface $cause
     * Starting with v6.34rc11 some additional variables are available: $uptime-secs - final session time in seconds $bytes-in
     * - bytes uploaded $bytes-out - bytes downloaded $bytes-total - bytes up + bytes down $packets-in - packets uploaded
     * $packets-out - packets downloaded $packets-total - packets up + packets down.
     */
    readonly onLogout: pulumi.Output<string | undefined>;
    /**
     * Option to show status page for user authenticated with mac login method. For example to show advertisement on status
     * page (alogin.html) http-login - open status page only for HTTP login (includes cookie and HTTPS) always - open HTTP
     * status page in case of mac login as well.
     */
    readonly openStatusPage: pulumi.Output<string | undefined>;
    /**
     * Name of the firewall chain applied to outgoing packets from the users of this profile, jump rule is required from
     * built-in chain (input, forward, output) to chain=hotspot.
     */
    readonly outgoingFilter: pulumi.Output<string | undefined>;
    /**
     * Packet mark put on outgoing packets from every user of this profile.
     */
    readonly outgoingPacketMark: pulumi.Output<string | undefined>;
    readonly parentQueue: pulumi.Output<string | undefined>;
    readonly queueType: pulumi.Output<string | undefined>;
    /**
     * Simple dynamic queue is created for user, once it logs in to the HotSpot. Rate-limitation is configured in the following
     * form [rx-rate[/tx-rate] [rx-burst-rate[/tx-burst-rate] [rx-burst-threshold[/tx-burst-threshold]
     * [rx-burst-time[/tx-burst-time] [priority] [rx-rate-min[/tx-rate-min]]]]. For example, to set 1M download, 512k upload
     * for the client, rate-limit=512k/1M.
     */
    readonly rateLimit: pulumi.Output<string | undefined>;
    /**
     * Allowed session time for client. After this time, the user is logged out unconditionally.
     */
    readonly sessionTimeout: pulumi.Output<string | undefined>;
    /**
     * Allowed number of simultaneously logged in users with the same HotSpot username.
     */
    readonly sharedUsers: pulumi.Output<number | undefined>;
    /**
     * HotSpot status page autorefresh interval.
     */
    readonly statusAutorefresh: pulumi.Output<string | undefined>;
    /**
     * Use transparent HTTP proxy for the authorized users of this profile.
     */
    readonly transparentProxy: pulumi.Output<boolean | undefined>;
    /**
     * Create a IpHotspotUserProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpHotspotUserProfileArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpHotspotUserProfile resources.
 */
export interface IpHotspotUserProfileState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not
     * required.</em>
     */
    ___unset_?: pulumi.Input<string>;
    /**
     * Allows to add mac cookie for users.
     */
    addMacCookie?: pulumi.Input<boolean>;
    /**
     * Name of the address list in which users IP address will be added. Useful to mark traffic per user groups for queue tree
     * configurations.
     */
    addressList?: pulumi.Input<string>;
    /**
     * IP pool name from which the user will get IP. When user has improper network settings configuration on the computer,
     * HotSpot server makes translation and assigns correct IP address from the pool instead of incorrect one.
     */
    addressPool?: pulumi.Input<string>;
    /**
     * Enable forced advertisement popups. After certain interval specific web-page is being displayed for HotSpot users.
     * Advertisement page might be blocked by browsers popup blockers.
     */
    advertise?: pulumi.Input<boolean>;
    /**
     * Set of intervals between advertisement popups. After the list is done, the last value is used for all further
     * advertisements, 10 minutes.
     */
    advertiseIntervals?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * How long advertisement is shown, before blocking network access for HotSpot client. Connection to Internet is not
     * allowed, when advertisement is not shown.
     */
    advertiseTimeout?: pulumi.Input<string>;
    /**
     * List of URLs that is show for advertisement popups. After the last URL is used, list starts from the begining.
     */
    advertiseUrl?: pulumi.Input<string>;
    /**
     * It's the default item.
     */
    default?: pulumi.Input<boolean>;
    /**
     * Maximal period of inactivity for authorized HotSpot clients. Timer is counting, when there is no traffic coming from
     * that client and going through the router, for example computer is switched off. User is logged out, dropped of the host
     * list, the address used by the user is freed, when timeout is reached.
     */
    idleTimeout?: pulumi.Input<string>;
    /**
     * Name of the firewall chain applied to incoming packets from the users of this profile, jump rule is required from
     * built-in chain (input, forward, output) to chain=hotspot.
     */
    incomingFilter?: pulumi.Input<string>;
    /**
     * Packet mark put on incoming packets from every user of this profile.
     */
    incomingPacketMark?: pulumi.Input<string>;
    insertQueueBefore?: pulumi.Input<string>;
    ipHotspotUserProfileId?: pulumi.Input<string>;
    /**
     * Keepalive timeout for authorized HotSpot clients. Used to detect, that the computer of the client is alive and
     * reachable. User is logged out, when timeout value is reached.
     */
    keepaliveTimeout?: pulumi.Input<string>;
    /**
     * Selects mac-cookie timeout from last login or logout. Read more>>.
     */
    macCookieTimeout?: pulumi.Input<string>;
    /**
     * Descriptive name of the profile.
     */
    name?: pulumi.Input<string>;
    /**
     * Script name to be executed, when user logs in to the HotSpot from the particular profile. It is possible to get username
     * from internal user and interface variable. For example, :log info ``User $user logged in!`` . If hotspot is set on
     * bridge interface, then interface variable will show bridge as actual interface unless use-ip-firewall' is set in bridge
     * settings. List of available variables: $user $username (alternative var name for $user) $address $``mac-address``
     * $interface.
     */
    onLogin?: pulumi.Input<string>;
    /**
     * Script name to be executed, when user logs out from the HotSpot.It is possible to get username from internal user and
     * interface variable. For example, :log info ``User $user logged in!`` . If hotspot is set on bridge interface, then
     * interface variable will show bridge as actual interface unless use-ip-firewall is set in bridge settings. List of
     * available variables: $user $username (alternative var name for $user) $address $``mac-address`` $interface $cause
     * Starting with v6.34rc11 some additional variables are available: $uptime-secs - final session time in seconds $bytes-in
     * - bytes uploaded $bytes-out - bytes downloaded $bytes-total - bytes up + bytes down $packets-in - packets uploaded
     * $packets-out - packets downloaded $packets-total - packets up + packets down.
     */
    onLogout?: pulumi.Input<string>;
    /**
     * Option to show status page for user authenticated with mac login method. For example to show advertisement on status
     * page (alogin.html) http-login - open status page only for HTTP login (includes cookie and HTTPS) always - open HTTP
     * status page in case of mac login as well.
     */
    openStatusPage?: pulumi.Input<string>;
    /**
     * Name of the firewall chain applied to outgoing packets from the users of this profile, jump rule is required from
     * built-in chain (input, forward, output) to chain=hotspot.
     */
    outgoingFilter?: pulumi.Input<string>;
    /**
     * Packet mark put on outgoing packets from every user of this profile.
     */
    outgoingPacketMark?: pulumi.Input<string>;
    parentQueue?: pulumi.Input<string>;
    queueType?: pulumi.Input<string>;
    /**
     * Simple dynamic queue is created for user, once it logs in to the HotSpot. Rate-limitation is configured in the following
     * form [rx-rate[/tx-rate] [rx-burst-rate[/tx-burst-rate] [rx-burst-threshold[/tx-burst-threshold]
     * [rx-burst-time[/tx-burst-time] [priority] [rx-rate-min[/tx-rate-min]]]]. For example, to set 1M download, 512k upload
     * for the client, rate-limit=512k/1M.
     */
    rateLimit?: pulumi.Input<string>;
    /**
     * Allowed session time for client. After this time, the user is logged out unconditionally.
     */
    sessionTimeout?: pulumi.Input<string>;
    /**
     * Allowed number of simultaneously logged in users with the same HotSpot username.
     */
    sharedUsers?: pulumi.Input<number>;
    /**
     * HotSpot status page autorefresh interval.
     */
    statusAutorefresh?: pulumi.Input<string>;
    /**
     * Use transparent HTTP proxy for the authorized users of this profile.
     */
    transparentProxy?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a IpHotspotUserProfile resource.
 */
export interface IpHotspotUserProfileArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not
     * required.</em>
     */
    ___unset_?: pulumi.Input<string>;
    /**
     * Allows to add mac cookie for users.
     */
    addMacCookie?: pulumi.Input<boolean>;
    /**
     * Name of the address list in which users IP address will be added. Useful to mark traffic per user groups for queue tree
     * configurations.
     */
    addressList?: pulumi.Input<string>;
    /**
     * IP pool name from which the user will get IP. When user has improper network settings configuration on the computer,
     * HotSpot server makes translation and assigns correct IP address from the pool instead of incorrect one.
     */
    addressPool?: pulumi.Input<string>;
    /**
     * Enable forced advertisement popups. After certain interval specific web-page is being displayed for HotSpot users.
     * Advertisement page might be blocked by browsers popup blockers.
     */
    advertise?: pulumi.Input<boolean>;
    /**
     * Set of intervals between advertisement popups. After the list is done, the last value is used for all further
     * advertisements, 10 minutes.
     */
    advertiseIntervals?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * How long advertisement is shown, before blocking network access for HotSpot client. Connection to Internet is not
     * allowed, when advertisement is not shown.
     */
    advertiseTimeout?: pulumi.Input<string>;
    /**
     * List of URLs that is show for advertisement popups. After the last URL is used, list starts from the begining.
     */
    advertiseUrl?: pulumi.Input<string>;
    /**
     * Maximal period of inactivity for authorized HotSpot clients. Timer is counting, when there is no traffic coming from
     * that client and going through the router, for example computer is switched off. User is logged out, dropped of the host
     * list, the address used by the user is freed, when timeout is reached.
     */
    idleTimeout?: pulumi.Input<string>;
    /**
     * Name of the firewall chain applied to incoming packets from the users of this profile, jump rule is required from
     * built-in chain (input, forward, output) to chain=hotspot.
     */
    incomingFilter?: pulumi.Input<string>;
    /**
     * Packet mark put on incoming packets from every user of this profile.
     */
    incomingPacketMark?: pulumi.Input<string>;
    insertQueueBefore?: pulumi.Input<string>;
    ipHotspotUserProfileId?: pulumi.Input<string>;
    /**
     * Keepalive timeout for authorized HotSpot clients. Used to detect, that the computer of the client is alive and
     * reachable. User is logged out, when timeout value is reached.
     */
    keepaliveTimeout?: pulumi.Input<string>;
    /**
     * Selects mac-cookie timeout from last login or logout. Read more>>.
     */
    macCookieTimeout?: pulumi.Input<string>;
    /**
     * Descriptive name of the profile.
     */
    name?: pulumi.Input<string>;
    /**
     * Script name to be executed, when user logs in to the HotSpot from the particular profile. It is possible to get username
     * from internal user and interface variable. For example, :log info ``User $user logged in!`` . If hotspot is set on
     * bridge interface, then interface variable will show bridge as actual interface unless use-ip-firewall' is set in bridge
     * settings. List of available variables: $user $username (alternative var name for $user) $address $``mac-address``
     * $interface.
     */
    onLogin?: pulumi.Input<string>;
    /**
     * Script name to be executed, when user logs out from the HotSpot.It is possible to get username from internal user and
     * interface variable. For example, :log info ``User $user logged in!`` . If hotspot is set on bridge interface, then
     * interface variable will show bridge as actual interface unless use-ip-firewall is set in bridge settings. List of
     * available variables: $user $username (alternative var name for $user) $address $``mac-address`` $interface $cause
     * Starting with v6.34rc11 some additional variables are available: $uptime-secs - final session time in seconds $bytes-in
     * - bytes uploaded $bytes-out - bytes downloaded $bytes-total - bytes up + bytes down $packets-in - packets uploaded
     * $packets-out - packets downloaded $packets-total - packets up + packets down.
     */
    onLogout?: pulumi.Input<string>;
    /**
     * Option to show status page for user authenticated with mac login method. For example to show advertisement on status
     * page (alogin.html) http-login - open status page only for HTTP login (includes cookie and HTTPS) always - open HTTP
     * status page in case of mac login as well.
     */
    openStatusPage?: pulumi.Input<string>;
    /**
     * Name of the firewall chain applied to outgoing packets from the users of this profile, jump rule is required from
     * built-in chain (input, forward, output) to chain=hotspot.
     */
    outgoingFilter?: pulumi.Input<string>;
    /**
     * Packet mark put on outgoing packets from every user of this profile.
     */
    outgoingPacketMark?: pulumi.Input<string>;
    parentQueue?: pulumi.Input<string>;
    queueType?: pulumi.Input<string>;
    /**
     * Simple dynamic queue is created for user, once it logs in to the HotSpot. Rate-limitation is configured in the following
     * form [rx-rate[/tx-rate] [rx-burst-rate[/tx-burst-rate] [rx-burst-threshold[/tx-burst-threshold]
     * [rx-burst-time[/tx-burst-time] [priority] [rx-rate-min[/tx-rate-min]]]]. For example, to set 1M download, 512k upload
     * for the client, rate-limit=512k/1M.
     */
    rateLimit?: pulumi.Input<string>;
    /**
     * Allowed session time for client. After this time, the user is logged out unconditionally.
     */
    sessionTimeout?: pulumi.Input<string>;
    /**
     * Allowed number of simultaneously logged in users with the same HotSpot username.
     */
    sharedUsers?: pulumi.Input<number>;
    /**
     * HotSpot status page autorefresh interval.
     */
    statusAutorefresh?: pulumi.Input<string>;
    /**
     * Use transparent HTTP proxy for the authorized users of this profile.
     */
    transparentProxy?: pulumi.Input<boolean>;
}
