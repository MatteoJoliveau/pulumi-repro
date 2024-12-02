export interface ContainerTimeouts {
    create?: string;
    delete?: string;
}
export interface GetFilesFile {
    contents: string;
    creationTime: string;
    id: string;
    name: string;
    packageArchitecture: string;
    packageBuiltTime: string;
    packageName: string;
    packageVersion: string;
    size: number;
    type: string;
}
export interface GetFirewallAddressList {
    address: string;
    comment: string;
    creationTime: string;
    disabled: boolean;
    dynamic: boolean;
    /**
     * Additional request filtering options.
     */
    filter?: {
        [key: string]: string;
    };
    id: string;
    list: string;
    timeout: string;
}
export interface GetFirewallMangle {
    action: string;
    addressList: string;
    addressListTimeout: string;
    bytes: number;
    chain: string;
    comment: string;
    connectionBytes: string;
    connectionLimit: string;
    connectionMark: string;
    connectionNatState: string;
    connectionRate: string;
    connectionState: string;
    connectionType: string;
    content: string;
    disabled: boolean;
    dscp: number;
    dstAddress: string;
    dstAddressList: string;
    dstAddressType: string;
    dstLimit: string;
    dstPort: string;
    dynamic: boolean;
    /**
     * Additional request filtering options.
     */
    filter?: {
        [key: string]: string;
    };
    fragment: boolean;
    hotspot: string;
    icmpOptions: string;
    id: string;
    inBridgePort: string;
    inBridgePortList: string;
    inInterface: string;
    inInterfaceList: string;
    ingressPriority: number;
    invalid: boolean;
    ipsecPolicy: string;
    ipv4Options: string;
    jumpTarget: string;
    layer7Protocol: string;
    limit: string;
    log: boolean;
    logPrefix: string;
    newConnectionMark: string;
    newDscp: number;
    newMss: number;
    newPacketMark: string;
    newPriority: string;
    newRoutingMark: string;
    newTtl: string;
    nth: string;
    outBridgePort: string;
    outBridgePortList: string;
    outInterface: string;
    outInterfaceList: string;
    packetMark: string;
    packetSize: string;
    passthrough: boolean;
    perConnectionClassifier: string;
    port: string;
    protocol: string;
    psd: string;
    random: number;
    routeDst: string;
    routingMark: string;
    srcAddress: string;
    srcAddressList: string;
    srcAddressType: string;
    srcMacAddress: string;
    srcPort: string;
    tcpFlags: string;
    tcpMss: string;
    time: string;
    tlsHost: string;
    ttl: string;
}
export interface GetFirewallNat {
    action: string;
    addressList: string;
    addressListTimeout: string;
    bytes: number;
    chain: string;
    comment: string;
    connectionBytes: string;
    connectionLimit: string;
    connectionMark: string;
    connectionRate: string;
    connectionType: string;
    content: string;
    disabled: boolean;
    dscp: number;
    dstAddress: string;
    dstAddressList: string;
    dstAddressType: string;
    dstLimit: string;
    dstPort: string;
    dynamic: boolean;
    /**
     * Additional request filtering options.
     */
    filter?: {
        [key: string]: string;
    };
    fragment: boolean;
    hotspot: string;
    icmpOptions: string;
    id: string;
    inBridgePort: string;
    inBridgePortList: string;
    inInterface: string;
    inInterfaceList: string;
    ingressPriority: number;
    invalid: boolean;
    ipsecPolicy: string;
    ipv4Options: string;
    jumpTarget: string;
    layer7Protocol: string;
    limit: string;
    log: boolean;
    logPrefix: string;
    nth: string;
    outBridgePort: string;
    outBridgePortList: string;
    outInterface: string;
    outInterfaceList: string;
    packetMark: string;
    packetSize: string;
    perConnectionClassifier: string;
    port: string;
    priority: number;
    protocol: string;
    psd: string;
    random: number;
    routingMark: string;
    sameNotByDst: boolean;
    srcAddress: string;
    srcAddressList: string;
    srcAddressType: string;
    srcMacAddress: string;
    srcPort: string;
    tcpMss: string;
    time: string;
    toAddresses: string;
    toPorts: string;
    ttl: string;
}
export interface GetFirewallRule {
    action: string;
    addressListTimeout: string;
    bytes: number;
    chain: string;
    comment: string;
    connectionBytes: string;
    connectionLimit: string;
    connectionMark: string;
    connectionNatState: string;
    connectionRate: string;
    connectionState: string;
    connectionType: string;
    content: string;
    disabled: boolean;
    dscp: number;
    dstAddress: string;
    dstAddressList: string;
    dstAddressType: string;
    dstLimit: string;
    dstPort: string;
    dynamic: boolean;
    /**
     * Additional request filtering options.
     */
    filter?: {
        [key: string]: string;
    };
    fragment: boolean;
    hotspot: string;
    hwOffload: boolean;
    icmpOptions: string;
    id: string;
    inBridgePort: string;
    inBridgePortList: string;
    inInterface: string;
    inInterfaceList: string;
    ingressPriority: number;
    invalid: boolean;
    ipsecPolicy: string;
    ipv4Options: string;
    jumpTarget: string;
    layer7Protocol: string;
    limit: string;
    log: boolean;
    logPrefix: string;
    nth: string;
    outBridgePort: string;
    outBridgePortList: string;
    outInterface: string;
    outInterfaceList: string;
    packetMark: string;
    packetSize: string;
    perConnectionClassifier: string;
    port: string;
    priority: number;
    protocol: string;
    psd: string;
    random: number;
    rejectWith: string;
    routingMark: string;
    routingTable: string;
    srcAddress: string;
    srcAddressList: string;
    srcAddressType: string;
    srcMacAddress: string;
    srcPort: string;
    tcpFlags: string;
    tcpMss: string;
    time: string;
    tlsHost: string;
    ttl: string;
}
export interface GetInterfacesInterface {
    actualMtu: number;
    comment: string;
    defaultName: string;
    disabled: boolean;
    dynamic: boolean;
    id: string;
    l2mtu: number;
    lastLinkDownTime: string;
    lastLinkUpTime: string;
    macAddress: string;
    maxL2mtu: number;
    mtu: string;
    name: string;
    running: boolean;
    slave: boolean;
    type: string;
}
export interface GetIpAddressesAddress {
    actualInterface: string;
    address: string;
    comment: string;
    disabled: boolean;
    dynamic: boolean;
    id: string;
    interface: string;
    invalid: boolean;
    network: string;
    slave: boolean;
}
export interface GetIpArpData {
    address: string;
    complete: boolean;
    dhcp: boolean;
    disabled: boolean;
    dynamic: boolean;
    id: string;
    interface: string;
    invalid: boolean;
    macAddress: string;
    published: boolean;
}
export interface GetIpDhcpServerLeasesData {
    address: string;
    addressLists: string;
    blocked: boolean;
    comment: string;
    dhcpOption: string;
    disabled: boolean;
    dynamic: boolean;
    id: string;
    lastSeen: string;
    macAddress: string;
    radius: boolean;
    server: string;
    status: string;
}
export interface GetIpFirewallAddressList {
    address: string;
    comment: string;
    creationTime: string;
    disabled: boolean;
    dynamic: boolean;
    /**
     * Additional request filtering options.
     */
    filter?: {
        [key: string]: string;
    };
    id: string;
    list: string;
    timeout: string;
}
export interface GetIpFirewallMangle {
    action: string;
    addressList: string;
    addressListTimeout: string;
    bytes: number;
    chain: string;
    comment: string;
    connectionBytes: string;
    connectionLimit: string;
    connectionMark: string;
    connectionNatState: string;
    connectionRate: string;
    connectionState: string;
    connectionType: string;
    content: string;
    disabled: boolean;
    dscp: number;
    dstAddress: string;
    dstAddressList: string;
    dstAddressType: string;
    dstLimit: string;
    dstPort: string;
    dynamic: boolean;
    /**
     * Additional request filtering options.
     */
    filter?: {
        [key: string]: string;
    };
    fragment: boolean;
    hotspot: string;
    icmpOptions: string;
    id: string;
    inBridgePort: string;
    inBridgePortList: string;
    inInterface: string;
    inInterfaceList: string;
    ingressPriority: number;
    invalid: boolean;
    ipsecPolicy: string;
    ipv4Options: string;
    jumpTarget: string;
    layer7Protocol: string;
    limit: string;
    log: boolean;
    logPrefix: string;
    newConnectionMark: string;
    newDscp: number;
    newMss: number;
    newPacketMark: string;
    newPriority: string;
    newRoutingMark: string;
    newTtl: string;
    nth: string;
    outBridgePort: string;
    outBridgePortList: string;
    outInterface: string;
    outInterfaceList: string;
    packetMark: string;
    packetSize: string;
    passthrough: boolean;
    perConnectionClassifier: string;
    port: string;
    protocol: string;
    psd: string;
    random: number;
    routeDst: string;
    routingMark: string;
    srcAddress: string;
    srcAddressList: string;
    srcAddressType: string;
    srcMacAddress: string;
    srcPort: string;
    tcpFlags: string;
    tcpMss: string;
    time: string;
    tlsHost: string;
    ttl: string;
}
export interface GetIpFirewallNat {
    action: string;
    addressList: string;
    addressListTimeout: string;
    bytes: number;
    chain: string;
    comment: string;
    connectionBytes: string;
    connectionLimit: string;
    connectionMark: string;
    connectionRate: string;
    connectionType: string;
    content: string;
    disabled: boolean;
    dscp: number;
    dstAddress: string;
    dstAddressList: string;
    dstAddressType: string;
    dstLimit: string;
    dstPort: string;
    dynamic: boolean;
    /**
     * Additional request filtering options.
     */
    filter?: {
        [key: string]: string;
    };
    fragment: boolean;
    hotspot: string;
    icmpOptions: string;
    id: string;
    inBridgePort: string;
    inBridgePortList: string;
    inInterface: string;
    inInterfaceList: string;
    ingressPriority: number;
    invalid: boolean;
    ipsecPolicy: string;
    ipv4Options: string;
    jumpTarget: string;
    layer7Protocol: string;
    limit: string;
    log: boolean;
    logPrefix: string;
    nth: string;
    outBridgePort: string;
    outBridgePortList: string;
    outInterface: string;
    outInterfaceList: string;
    packetMark: string;
    packetSize: string;
    perConnectionClassifier: string;
    port: string;
    priority: number;
    protocol: string;
    psd: string;
    random: number;
    routingMark: string;
    sameNotByDst: boolean;
    srcAddress: string;
    srcAddressList: string;
    srcAddressType: string;
    srcMacAddress: string;
    srcPort: string;
    tcpMss: string;
    time: string;
    toAddresses: string;
    toPorts: string;
    ttl: string;
}
export interface GetIpFirewallRule {
    action: string;
    addressListTimeout: string;
    bytes: number;
    chain: string;
    comment: string;
    connectionBytes: string;
    connectionLimit: string;
    connectionMark: string;
    connectionNatState: string;
    connectionRate: string;
    connectionState: string;
    connectionType: string;
    content: string;
    disabled: boolean;
    dscp: number;
    dstAddress: string;
    dstAddressList: string;
    dstAddressType: string;
    dstLimit: string;
    dstPort: string;
    dynamic: boolean;
    /**
     * Additional request filtering options.
     */
    filter?: {
        [key: string]: string;
    };
    fragment: boolean;
    hotspot: string;
    hwOffload: boolean;
    icmpOptions: string;
    id: string;
    inBridgePort: string;
    inBridgePortList: string;
    inInterface: string;
    inInterfaceList: string;
    ingressPriority: number;
    invalid: boolean;
    ipsecPolicy: string;
    ipv4Options: string;
    jumpTarget: string;
    layer7Protocol: string;
    limit: string;
    log: boolean;
    logPrefix: string;
    nth: string;
    outBridgePort: string;
    outBridgePortList: string;
    outInterface: string;
    outInterfaceList: string;
    packetMark: string;
    packetSize: string;
    perConnectionClassifier: string;
    port: string;
    priority: number;
    protocol: string;
    psd: string;
    random: number;
    rejectWith: string;
    routingMark: string;
    routingTable: string;
    srcAddress: string;
    srcAddressList: string;
    srcAddressType: string;
    srcMacAddress: string;
    srcPort: string;
    tcpFlags: string;
    tcpMss: string;
    time: string;
    tlsHost: string;
    ttl: string;
}
export interface GetIpRoutesRoute {
    active: boolean;
    blackhole: boolean;
    comment: string;
    connect: boolean;
    dhcp: boolean;
    disabled: boolean;
    distance: number;
    dstAddress: string;
    dynamic: boolean;
    ecmp: boolean;
    gateway: string;
    hwOffloaded: boolean;
    id: string;
    immediateGw: string;
    inactive: boolean;
    localAddress: string;
    prefSrc: string;
    routingTable: string;
    scope: number;
    static: boolean;
    suppressHwOffload: boolean;
    targetScope: number;
    vrfInterface: string;
}
export interface GetIpServicesService {
    address: string;
    certificate: string;
    disabled: boolean;
    id: string;
    invalid: string;
    name: string;
    port: number;
    tlsVersion: string;
    vrf: string;
}
export interface GetIpv6AddressesAddress {
    actualInterface: string;
    address: string;
    advertise: boolean;
    comment: string;
    deprecated: boolean;
    disabled: boolean;
    dynamic: boolean;
    eui64: boolean;
    fromPool: string;
    id: string;
    interface: string;
    invalid: boolean;
    linkLocal: boolean;
    noDad: boolean;
    slave: boolean;
}
export interface GetIpv6FirewallRule {
    action: string;
    bytes: number;
    chain: string;
    comment: string;
    connectionBytes: string;
    connectionLimit: string;
    connectionMark: string;
    connectionNatState: string;
    connectionRate: string;
    connectionState: string;
    connectionType: string;
    content: string;
    disabled: boolean;
    dscp: number;
    dstAddress: string;
    dstAddressList: string;
    dstAddressType: string;
    dstLimit: string;
    dstPort: string;
    dynamic: boolean;
    /**
     * Additional request filtering options.
     */
    filter?: {
        [key: string]: string;
    };
    icmpOptions: string;
    id: string;
    inBridgePort: string;
    inBridgePortList: string;
    inInterface: string;
    inInterfaceList: string;
    ingressPriority: number;
    invalid: boolean;
    ipsecPolicy: string;
    limit: string;
    log: boolean;
    logPrefix: string;
    nth: string;
    outBridgePort: string;
    outBridgePortList: string;
    outInterface: string;
    outInterfaceList: string;
    packetMark: string;
    packetSize: string;
    perConnectionClassifier: string;
    port: string;
    priority: number;
    protocol: string;
    random: number;
    rejectWith: string;
    routingMark: string;
    routingTable: string;
    srcAddress: string;
    srcAddressList: string;
    srcAddressType: string;
    srcMacAddress: string;
    srcPort: string;
    tcpFlags: string;
    tcpMss: string;
    time: string;
    tlsHost: string;
    ttl: string;
}
export interface RoutingBgpConnectionInput {
    /**
     * A quick way to filter incoming updates with specific communities. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session refresh.
     */
    acceptCommunities?: string;
    /**
     * A quick way to filter incoming updates with specific extended communities. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session refresh.
     */
    acceptExtCommunities?: string;
    /**
     * A quick way to filter incoming updates with specific large communities. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session refresh.
     */
    acceptLargeCommunities?: string;
    /**
     * Name of the ipv4/6 address-list. A quick way to filter incoming updates with specific NLRIs. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session restart.
     */
    acceptNlri?: string;
    /**
     * A quick way to filter incoming updates with specific 'unknown' attributes. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session refresh.
     */
    acceptUnknown?: string;
    /**
     * Configure input multi-core processing. Read more in Routing Protocol Multi-core Support article. alone - input and output of each session are processed in its own process, most likely the best option when there are a lot of cores and a lot of peers afi, instance, vrf, remote-as - try to run input/output of new session in process with similar parameters main - run input/output in the main process (could potentially increase performance on single-core even possibly on multi-core devices with a small amount of cores) input - run output in the same process as input (can be set only for output affinity)
     */
    affinity?: string;
    /**
     * Indicates how many times to allow your own AS number in AS-PATH, before discarding a prefix.
     */
    allowAs?: number;
    /**
     * Name of the routing filter chain to be used on input prefixes. This happens after NLRIs are processed. If the chain is not specified, then BGP by default accepts everything.
     */
    filter?: string;
    /**
     * Whether to ignore the AS_PATH attribute in the BGP route selection algorithm
     */
    ignoreAsPathLen?: boolean;
    /**
     * Try to limit the amount of received IPv4 routes to the specified number. This number does not represent the exact number of routes going to be installed in the routing table by the peer. BGP session 'clear' command must be used to reset the flag if the limit is reached.
     */
    limitProcessRoutesIpv4?: number;
    /**
     * Try to limit the amount of received IPv6 routes to the specified number. This number does not represent the exact number of routes going to be installed in the routing table by the peer. BGP session 'clear' command must be used to reset the flag if the limit is reached.
     */
    limitProcessRoutesIpv6?: number;
}
export interface RoutingBgpConnectionLocal {
    /**
     * Local connection IPv4/6 address.
     */
    address?: string;
    defaultAddress: string;
    /**
     * Local connection port.
     */
    port?: number;
    /**
     * BGP role, in most common scenarios it should be set to iBGP or eBGP. More information on BGP roles can be found in the corresponding [RFC draft](https://datatracker.ietf.org/doc/draft-ietf-idr-bgp-open-policy/?include_text=1)
     */
    role: string;
    /**
     * Time To Live (hop limit) that will be recorded in sent TCP packets.
     */
    ttl?: number;
}
export interface RoutingBgpConnectionOutput {
    /**
     * Configure output multicore processing. Read more in Routing Protocol Multi-core Support article. alone - input and output of each session is processed in its own process, the most likely best option when there are a lot of cores and a lot of peers afi, instance, vrf, remote-as - try to run input/output of new session in process with similar parameters main - run input/output in the main process (could potentially increase performance on single-core even possibly on multicore devices with small amount of cores) input - run output in the same process as input (can be set only for output affinity).
     */
    affinity?: string;
    /**
     * If set, then all instances of the remote peer's AS number in the BGP AS-PATH attribute are replaced with the local AS number before sending a route update to that peer. Happens before routing filters and prepending.
     */
    asOverride?: boolean;
    /**
     * Specifies default route (0.0.0.0/0) distribution method.
     */
    defaultOriginate?: string;
    /**
     * The count of AS prepended to the AS path.
     */
    defaultPrepend?: number;
    /**
     * Name of the routing filter chain to be used on the output prefixes. If the chain is not specified, then BGP by default accepts everything.
     */
    filterChain?: string;
    /**
     * Name of the routing select chain to be used for prefix selection. If not specified, then default selection is used.
     */
    filterSelect?: string;
    /**
     * Store in memory sent prefix attributes, required for ' dump-saved-advertisements ' command to work. By default, sent-out prefixes are not stored to preserve the router's memory. An option should be enabled only for debugging purposes when necessary to see currently advertised prefixes.
     */
    keepSentAttributes?: boolean;
    /**
     * Name of the address list used to send local networks. The network is sent only if a matching IGP route exists in the routing table.
     */
    network?: string;
    /**
     * Disable client-to-client route reflection in Route Reflector setups.
     */
    noClientToClientReflection?: boolean;
    /**
     * The early cut is the mechanism, to guess (based on default RFC behavior) what would happen with the sent NPLRI when received by the remote peer. If the algorithm determines that the NLRI is going to be dropped, a peer will not even try to send it. However such behavior may not be desired in specific scenarios, then then this option should be used to disable the early cut feature.
     */
    noEarlyCut?: boolean;
    /**
     * Enable redistribution of specified route types.
     */
    redistribute?: string;
    /**
     * If set, then the BGP AS-PATH attribute is removed before sending out route updates if the attribute contains only private AS numbers. The removal process happens before routing filters are applied and before the local, AS number is prepended to the AS path.
     */
    removePrivateAs?: boolean;
}
export interface RoutingBgpConnectionRemote {
    /**
     * Remote IPv4/6 address used to connect and/or listen to.
     */
    address?: string;
    /**
     * List of remote AS numbers that are allowed to connect. Useful for dynamic peer configuration.
     */
    allowedAs?: string;
    /**
     * Remote AS number. If not specified BGP will determine remote AS automatically from the OPEN message.
     */
    as?: string;
    /**
     * Local connection port.
     */
    port?: number;
    /**
     * Acceptable minimum Time To Live, the hop limit for this TCP connection. For example, if 'ttl=255' then only single-hop neighbors will be able to establish the connection. This property only affects EBGP peers.
     */
    ttl?: number;
}
export interface RoutingBgpTemplateInput {
    /**
     * A quick way to filter incoming updates with specific communities. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session refresh.
     */
    acceptComunities?: string;
    /**
     * A quick way to filter incoming updates with specific extended communities. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session refresh.
     */
    acceptExtCommunities?: string;
    /**
     * A quick way to filter incoming updates with specific large communities. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session refresh.
     */
    acceptLargeComunities?: string;
    /**
     * Name of the ipv4/6 address-list. A quick way to filter incoming updates with specific NLRIs. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session restart.
     */
    acceptNlri?: string;
    /**
     * A quick way to filter incoming updates with specific 'unknown' attributes. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session refresh.
     */
    acceptUnknown?: string;
    /**
     * Configure input multi-core processing. Read more in Routing Protocol Multi-core Support article. alone - input and output of each session are processed in its own process, most likely the best option when there are a lot of cores and a lot of peers afi, instance, vrf, remote-as - try to run input/output of new session in process with similar parameters main - run input/output in the main process (could potentially increase performance on single-core even possibly on multi-core devices with a small amount of cores) input - run output in the same process as input (can be set only for output affinity)
     */
    affinity?: string;
    /**
     * Indicates how many times to allow your own AS number in AS-PATH, before discarding a prefix.
     */
    allowAs?: number;
    /**
     * Name of the routing filter chain to be used on input prefixes. This happens after NLRIs are processed. If the chain is not specified, then BGP by default accepts everything.
     */
    filter?: string;
    /**
     * Whether to ignore the AS_PATH attribute in the BGP route selection algorithm
     */
    ignoreAsPathLen?: boolean;
    /**
     * Try to limit the amount of received IPv4 routes to the specified number. This number does not represent the exact number of routes going to be installed in the routing table by the peer. BGP session 'clear' command must be used to reset the flag if the limit is reached.
     */
    limitProcessRoutesIpv4?: number;
    /**
     * Try to limit the amount of received IPv6 routes to the specified number. This number does not represent the exact number of routes going to be installed in the routing table by the peer. BGP session 'clear' command must be used to reset the flag if the limit is reached.
     */
    limitProcessRoutesIpv6?: number;
}
export interface RoutingBgpTemplateOutput {
    /**
     * Configure output multicore processing. Read more in Routing Protocol Multi-core Support article. alone - input and output of each session is processed in its own process, the most likely best option when there are a lot of cores and a lot of peers afi, instance, vrf, remote-as - try to run input/output of new session in process with similar parameters main - run input/output in the main process (could potentially increase performance on single-core even possibly on multicore devices with small amount of cores) input - run output in the same process as input (can be set only for output affinity).
     */
    affinity?: string;
    /**
     * Specifies default route (0.0.0.0/0) distribution method.
     */
    defaultOriginate?: string;
    /**
     * The count of AS prepended to the AS path.
     */
    defaultPrepend?: number;
    /**
     * Name of the routing filter chain to be used on the output prefixes. If the chain is not specified, then BGP by default accepts everything.
     */
    filterChain?: string;
    /**
     * Name of the routing select chain to be used for prefix selection. If not specified, then default selection is used.
     */
    filterSelect?: string;
    /**
     * Store in memory sent prefix attributes, required for ' dump-saved-advertisements ' command to work. By default, sent-out prefixes are not stored to preserve the router's memory. An option should be enabled only for debugging purposes when necessary to see currently advertised prefixes.
     */
    keepSentAttributes?: boolean;
    /**
     * Name of the address list used to send local networks. The network is sent only if a matching IGP route exists in the routing table.
     */
    network?: string;
    /**
     * Disable client-to-client route reflection in Route Reflector setups.
     */
    noClientToClientReflection?: boolean;
    /**
     * The early cut is the mechanism, to guess (based on default RFC behavior) what would happen with the sent NPLRI when received by the remote peer. If the algorithm determines that the NLRI is going to be dropped, a peer will not even try to send it. However such behavior may not be desired in specific scenarios, then then this option should be used to disable the early cut feature.
     */
    noEarlyCut?: boolean;
    /**
     * Enable redistribution of specified route types.
     */
    redistribute?: string;
}
export interface SystemCertificateImport {
    /**
     * Certificate file name that will be imported.
     */
    certFileName: string;
    /**
     * Key file name that will be imported.
     */
    keyFileName?: string;
    /**
     * File passphrase if there is such.
     */
    passphrase?: string;
}
export interface SystemCertificateSign {
    /**
     * Which CA to use if signing issued certificates.
     */
    ca?: string;
    /**
     * CRL host if issuing CA certificate.
     */
    caCrlHost?: string;
}
export interface SystemCertificateSignViaScep {
    /**
     * SCEP CA identity.
     */
    caIdentity?: string;
    /**
     * A challenge password.
     */
    challengePassword?: string;
    /**
     * Whether to store a private key on smart card if hardware supports it.
     */
    onSmartCard?: boolean;
    /**
     * Check certificate expiration and refresh it if expired.
     */
    refresh?: boolean;
    /**
     * HTTP URL to the SCEP server.
     */
    scepUrl: string;
}
export interface WireguardKeysKey {
    preshared: string;
    private: string;
    public: string;
}
