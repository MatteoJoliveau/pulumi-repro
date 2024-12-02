import * as pulumi from "@pulumi/pulumi";
export interface ContainerTimeouts {
    create?: pulumi.Input<string>;
    delete?: pulumi.Input<string>;
}
export interface GetFirewallAddressList {
    address?: string;
    comment?: string;
    creationTime?: string;
    disabled?: boolean;
    dynamic?: boolean;
    /**
     * Additional request filtering options.
     */
    filter?: {
        [key: string]: string;
    };
    id?: string;
    list?: string;
    timeout?: string;
}
export interface GetFirewallAddressListArgs {
    address?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    creationTime?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    dynamic?: pulumi.Input<boolean>;
    /**
     * Additional request filtering options.
     */
    filter?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    id?: pulumi.Input<string>;
    list?: pulumi.Input<string>;
    timeout?: pulumi.Input<string>;
}
export interface GetFirewallMangle {
    action?: string;
    addressList?: string;
    addressListTimeout?: string;
    bytes?: number;
    chain?: string;
    comment?: string;
    connectionBytes?: string;
    connectionLimit?: string;
    connectionMark?: string;
    connectionNatState?: string;
    connectionRate?: string;
    connectionState?: string;
    connectionType?: string;
    content?: string;
    disabled?: boolean;
    dscp?: number;
    dstAddress?: string;
    dstAddressList?: string;
    dstAddressType?: string;
    dstLimit?: string;
    dstPort?: string;
    dynamic?: boolean;
    /**
     * Additional request filtering options.
     */
    filter?: {
        [key: string]: string;
    };
    fragment?: boolean;
    hotspot?: string;
    icmpOptions?: string;
    id?: string;
    inBridgePort?: string;
    inBridgePortList?: string;
    inInterface?: string;
    inInterfaceList?: string;
    ingressPriority?: number;
    invalid?: boolean;
    ipsecPolicy?: string;
    ipv4Options?: string;
    jumpTarget?: string;
    layer7Protocol?: string;
    limit?: string;
    log?: boolean;
    logPrefix?: string;
    newConnectionMark?: string;
    newDscp?: number;
    newMss?: number;
    newPacketMark?: string;
    newPriority?: string;
    newRoutingMark?: string;
    newTtl?: string;
    nth?: string;
    outBridgePort?: string;
    outBridgePortList?: string;
    outInterface?: string;
    outInterfaceList?: string;
    packetMark?: string;
    packetSize?: string;
    passthrough?: boolean;
    perConnectionClassifier?: string;
    port?: string;
    protocol?: string;
    psd?: string;
    random?: number;
    routeDst?: string;
    routingMark?: string;
    srcAddress?: string;
    srcAddressList?: string;
    srcAddressType?: string;
    srcMacAddress?: string;
    srcPort?: string;
    tcpFlags?: string;
    tcpMss?: string;
    time?: string;
    tlsHost?: string;
    ttl?: string;
}
export interface GetFirewallMangleArgs {
    action?: pulumi.Input<string>;
    addressList?: pulumi.Input<string>;
    addressListTimeout?: pulumi.Input<string>;
    bytes?: pulumi.Input<number>;
    chain?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    connectionBytes?: pulumi.Input<string>;
    connectionLimit?: pulumi.Input<string>;
    connectionMark?: pulumi.Input<string>;
    connectionNatState?: pulumi.Input<string>;
    connectionRate?: pulumi.Input<string>;
    connectionState?: pulumi.Input<string>;
    connectionType?: pulumi.Input<string>;
    content?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    dscp?: pulumi.Input<number>;
    dstAddress?: pulumi.Input<string>;
    dstAddressList?: pulumi.Input<string>;
    dstAddressType?: pulumi.Input<string>;
    dstLimit?: pulumi.Input<string>;
    dstPort?: pulumi.Input<string>;
    dynamic?: pulumi.Input<boolean>;
    /**
     * Additional request filtering options.
     */
    filter?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    fragment?: pulumi.Input<boolean>;
    hotspot?: pulumi.Input<string>;
    icmpOptions?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    inBridgePort?: pulumi.Input<string>;
    inBridgePortList?: pulumi.Input<string>;
    inInterface?: pulumi.Input<string>;
    inInterfaceList?: pulumi.Input<string>;
    ingressPriority?: pulumi.Input<number>;
    invalid?: pulumi.Input<boolean>;
    ipsecPolicy?: pulumi.Input<string>;
    ipv4Options?: pulumi.Input<string>;
    jumpTarget?: pulumi.Input<string>;
    layer7Protocol?: pulumi.Input<string>;
    limit?: pulumi.Input<string>;
    log?: pulumi.Input<boolean>;
    logPrefix?: pulumi.Input<string>;
    newConnectionMark?: pulumi.Input<string>;
    newDscp?: pulumi.Input<number>;
    newMss?: pulumi.Input<number>;
    newPacketMark?: pulumi.Input<string>;
    newPriority?: pulumi.Input<string>;
    newRoutingMark?: pulumi.Input<string>;
    newTtl?: pulumi.Input<string>;
    nth?: pulumi.Input<string>;
    outBridgePort?: pulumi.Input<string>;
    outBridgePortList?: pulumi.Input<string>;
    outInterface?: pulumi.Input<string>;
    outInterfaceList?: pulumi.Input<string>;
    packetMark?: pulumi.Input<string>;
    packetSize?: pulumi.Input<string>;
    passthrough?: pulumi.Input<boolean>;
    perConnectionClassifier?: pulumi.Input<string>;
    port?: pulumi.Input<string>;
    protocol?: pulumi.Input<string>;
    psd?: pulumi.Input<string>;
    random?: pulumi.Input<number>;
    routeDst?: pulumi.Input<string>;
    routingMark?: pulumi.Input<string>;
    srcAddress?: pulumi.Input<string>;
    srcAddressList?: pulumi.Input<string>;
    srcAddressType?: pulumi.Input<string>;
    srcMacAddress?: pulumi.Input<string>;
    srcPort?: pulumi.Input<string>;
    tcpFlags?: pulumi.Input<string>;
    tcpMss?: pulumi.Input<string>;
    time?: pulumi.Input<string>;
    tlsHost?: pulumi.Input<string>;
    ttl?: pulumi.Input<string>;
}
export interface GetFirewallNat {
    action?: string;
    addressList?: string;
    addressListTimeout?: string;
    bytes?: number;
    chain?: string;
    comment?: string;
    connectionBytes?: string;
    connectionLimit?: string;
    connectionMark?: string;
    connectionRate?: string;
    connectionType?: string;
    content?: string;
    disabled?: boolean;
    dscp?: number;
    dstAddress?: string;
    dstAddressList?: string;
    dstAddressType?: string;
    dstLimit?: string;
    dstPort?: string;
    dynamic?: boolean;
    /**
     * Additional request filtering options.
     */
    filter?: {
        [key: string]: string;
    };
    fragment?: boolean;
    hotspot?: string;
    icmpOptions?: string;
    id?: string;
    inBridgePort?: string;
    inBridgePortList?: string;
    inInterface?: string;
    inInterfaceList?: string;
    ingressPriority?: number;
    invalid?: boolean;
    ipsecPolicy?: string;
    ipv4Options?: string;
    jumpTarget?: string;
    layer7Protocol?: string;
    limit?: string;
    log?: boolean;
    logPrefix?: string;
    nth?: string;
    outBridgePort?: string;
    outBridgePortList?: string;
    outInterface?: string;
    outInterfaceList?: string;
    packetMark?: string;
    packetSize?: string;
    perConnectionClassifier?: string;
    port?: string;
    priority?: number;
    protocol?: string;
    psd?: string;
    random?: number;
    routingMark?: string;
    sameNotByDst?: boolean;
    srcAddress?: string;
    srcAddressList?: string;
    srcAddressType?: string;
    srcMacAddress?: string;
    srcPort?: string;
    tcpMss?: string;
    time?: string;
    toAddresses?: string;
    toPorts?: string;
    ttl?: string;
}
export interface GetFirewallNatArgs {
    action?: pulumi.Input<string>;
    addressList?: pulumi.Input<string>;
    addressListTimeout?: pulumi.Input<string>;
    bytes?: pulumi.Input<number>;
    chain?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    connectionBytes?: pulumi.Input<string>;
    connectionLimit?: pulumi.Input<string>;
    connectionMark?: pulumi.Input<string>;
    connectionRate?: pulumi.Input<string>;
    connectionType?: pulumi.Input<string>;
    content?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    dscp?: pulumi.Input<number>;
    dstAddress?: pulumi.Input<string>;
    dstAddressList?: pulumi.Input<string>;
    dstAddressType?: pulumi.Input<string>;
    dstLimit?: pulumi.Input<string>;
    dstPort?: pulumi.Input<string>;
    dynamic?: pulumi.Input<boolean>;
    /**
     * Additional request filtering options.
     */
    filter?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    fragment?: pulumi.Input<boolean>;
    hotspot?: pulumi.Input<string>;
    icmpOptions?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    inBridgePort?: pulumi.Input<string>;
    inBridgePortList?: pulumi.Input<string>;
    inInterface?: pulumi.Input<string>;
    inInterfaceList?: pulumi.Input<string>;
    ingressPriority?: pulumi.Input<number>;
    invalid?: pulumi.Input<boolean>;
    ipsecPolicy?: pulumi.Input<string>;
    ipv4Options?: pulumi.Input<string>;
    jumpTarget?: pulumi.Input<string>;
    layer7Protocol?: pulumi.Input<string>;
    limit?: pulumi.Input<string>;
    log?: pulumi.Input<boolean>;
    logPrefix?: pulumi.Input<string>;
    nth?: pulumi.Input<string>;
    outBridgePort?: pulumi.Input<string>;
    outBridgePortList?: pulumi.Input<string>;
    outInterface?: pulumi.Input<string>;
    outInterfaceList?: pulumi.Input<string>;
    packetMark?: pulumi.Input<string>;
    packetSize?: pulumi.Input<string>;
    perConnectionClassifier?: pulumi.Input<string>;
    port?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    protocol?: pulumi.Input<string>;
    psd?: pulumi.Input<string>;
    random?: pulumi.Input<number>;
    routingMark?: pulumi.Input<string>;
    sameNotByDst?: pulumi.Input<boolean>;
    srcAddress?: pulumi.Input<string>;
    srcAddressList?: pulumi.Input<string>;
    srcAddressType?: pulumi.Input<string>;
    srcMacAddress?: pulumi.Input<string>;
    srcPort?: pulumi.Input<string>;
    tcpMss?: pulumi.Input<string>;
    time?: pulumi.Input<string>;
    toAddresses?: pulumi.Input<string>;
    toPorts?: pulumi.Input<string>;
    ttl?: pulumi.Input<string>;
}
export interface GetFirewallRule {
    action?: string;
    addressListTimeout?: string;
    bytes?: number;
    chain?: string;
    comment?: string;
    connectionBytes?: string;
    connectionLimit?: string;
    connectionMark?: string;
    connectionNatState?: string;
    connectionRate?: string;
    connectionState?: string;
    connectionType?: string;
    content?: string;
    disabled?: boolean;
    dscp?: number;
    dstAddress?: string;
    dstAddressList?: string;
    dstAddressType?: string;
    dstLimit?: string;
    dstPort?: string;
    dynamic?: boolean;
    /**
     * Additional request filtering options.
     */
    filter?: {
        [key: string]: string;
    };
    fragment?: boolean;
    hotspot?: string;
    hwOffload?: boolean;
    icmpOptions?: string;
    id?: string;
    inBridgePort?: string;
    inBridgePortList?: string;
    inInterface?: string;
    inInterfaceList?: string;
    ingressPriority?: number;
    invalid?: boolean;
    ipsecPolicy?: string;
    ipv4Options?: string;
    jumpTarget?: string;
    layer7Protocol?: string;
    limit?: string;
    log?: boolean;
    logPrefix?: string;
    nth?: string;
    outBridgePort?: string;
    outBridgePortList?: string;
    outInterface?: string;
    outInterfaceList?: string;
    packetMark?: string;
    packetSize?: string;
    perConnectionClassifier?: string;
    port?: string;
    priority?: number;
    protocol?: string;
    psd?: string;
    random?: number;
    rejectWith?: string;
    routingMark?: string;
    routingTable?: string;
    srcAddress?: string;
    srcAddressList?: string;
    srcAddressType?: string;
    srcMacAddress?: string;
    srcPort?: string;
    tcpFlags?: string;
    tcpMss?: string;
    time?: string;
    tlsHost?: string;
    ttl?: string;
}
export interface GetFirewallRuleArgs {
    action?: pulumi.Input<string>;
    addressListTimeout?: pulumi.Input<string>;
    bytes?: pulumi.Input<number>;
    chain?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    connectionBytes?: pulumi.Input<string>;
    connectionLimit?: pulumi.Input<string>;
    connectionMark?: pulumi.Input<string>;
    connectionNatState?: pulumi.Input<string>;
    connectionRate?: pulumi.Input<string>;
    connectionState?: pulumi.Input<string>;
    connectionType?: pulumi.Input<string>;
    content?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    dscp?: pulumi.Input<number>;
    dstAddress?: pulumi.Input<string>;
    dstAddressList?: pulumi.Input<string>;
    dstAddressType?: pulumi.Input<string>;
    dstLimit?: pulumi.Input<string>;
    dstPort?: pulumi.Input<string>;
    dynamic?: pulumi.Input<boolean>;
    /**
     * Additional request filtering options.
     */
    filter?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    fragment?: pulumi.Input<boolean>;
    hotspot?: pulumi.Input<string>;
    hwOffload?: pulumi.Input<boolean>;
    icmpOptions?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    inBridgePort?: pulumi.Input<string>;
    inBridgePortList?: pulumi.Input<string>;
    inInterface?: pulumi.Input<string>;
    inInterfaceList?: pulumi.Input<string>;
    ingressPriority?: pulumi.Input<number>;
    invalid?: pulumi.Input<boolean>;
    ipsecPolicy?: pulumi.Input<string>;
    ipv4Options?: pulumi.Input<string>;
    jumpTarget?: pulumi.Input<string>;
    layer7Protocol?: pulumi.Input<string>;
    limit?: pulumi.Input<string>;
    log?: pulumi.Input<boolean>;
    logPrefix?: pulumi.Input<string>;
    nth?: pulumi.Input<string>;
    outBridgePort?: pulumi.Input<string>;
    outBridgePortList?: pulumi.Input<string>;
    outInterface?: pulumi.Input<string>;
    outInterfaceList?: pulumi.Input<string>;
    packetMark?: pulumi.Input<string>;
    packetSize?: pulumi.Input<string>;
    perConnectionClassifier?: pulumi.Input<string>;
    port?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    protocol?: pulumi.Input<string>;
    psd?: pulumi.Input<string>;
    random?: pulumi.Input<number>;
    rejectWith?: pulumi.Input<string>;
    routingMark?: pulumi.Input<string>;
    routingTable?: pulumi.Input<string>;
    srcAddress?: pulumi.Input<string>;
    srcAddressList?: pulumi.Input<string>;
    srcAddressType?: pulumi.Input<string>;
    srcMacAddress?: pulumi.Input<string>;
    srcPort?: pulumi.Input<string>;
    tcpFlags?: pulumi.Input<string>;
    tcpMss?: pulumi.Input<string>;
    time?: pulumi.Input<string>;
    tlsHost?: pulumi.Input<string>;
    ttl?: pulumi.Input<string>;
}
export interface GetIpFirewallAddressList {
    address?: string;
    comment?: string;
    creationTime?: string;
    disabled?: boolean;
    dynamic?: boolean;
    /**
     * Additional request filtering options.
     */
    filter?: {
        [key: string]: string;
    };
    id?: string;
    list?: string;
    timeout?: string;
}
export interface GetIpFirewallAddressListArgs {
    address?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    creationTime?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    dynamic?: pulumi.Input<boolean>;
    /**
     * Additional request filtering options.
     */
    filter?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    id?: pulumi.Input<string>;
    list?: pulumi.Input<string>;
    timeout?: pulumi.Input<string>;
}
export interface GetIpFirewallMangle {
    action?: string;
    addressList?: string;
    addressListTimeout?: string;
    bytes?: number;
    chain?: string;
    comment?: string;
    connectionBytes?: string;
    connectionLimit?: string;
    connectionMark?: string;
    connectionNatState?: string;
    connectionRate?: string;
    connectionState?: string;
    connectionType?: string;
    content?: string;
    disabled?: boolean;
    dscp?: number;
    dstAddress?: string;
    dstAddressList?: string;
    dstAddressType?: string;
    dstLimit?: string;
    dstPort?: string;
    dynamic?: boolean;
    /**
     * Additional request filtering options.
     */
    filter?: {
        [key: string]: string;
    };
    fragment?: boolean;
    hotspot?: string;
    icmpOptions?: string;
    id?: string;
    inBridgePort?: string;
    inBridgePortList?: string;
    inInterface?: string;
    inInterfaceList?: string;
    ingressPriority?: number;
    invalid?: boolean;
    ipsecPolicy?: string;
    ipv4Options?: string;
    jumpTarget?: string;
    layer7Protocol?: string;
    limit?: string;
    log?: boolean;
    logPrefix?: string;
    newConnectionMark?: string;
    newDscp?: number;
    newMss?: number;
    newPacketMark?: string;
    newPriority?: string;
    newRoutingMark?: string;
    newTtl?: string;
    nth?: string;
    outBridgePort?: string;
    outBridgePortList?: string;
    outInterface?: string;
    outInterfaceList?: string;
    packetMark?: string;
    packetSize?: string;
    passthrough?: boolean;
    perConnectionClassifier?: string;
    port?: string;
    protocol?: string;
    psd?: string;
    random?: number;
    routeDst?: string;
    routingMark?: string;
    srcAddress?: string;
    srcAddressList?: string;
    srcAddressType?: string;
    srcMacAddress?: string;
    srcPort?: string;
    tcpFlags?: string;
    tcpMss?: string;
    time?: string;
    tlsHost?: string;
    ttl?: string;
}
export interface GetIpFirewallMangleArgs {
    action?: pulumi.Input<string>;
    addressList?: pulumi.Input<string>;
    addressListTimeout?: pulumi.Input<string>;
    bytes?: pulumi.Input<number>;
    chain?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    connectionBytes?: pulumi.Input<string>;
    connectionLimit?: pulumi.Input<string>;
    connectionMark?: pulumi.Input<string>;
    connectionNatState?: pulumi.Input<string>;
    connectionRate?: pulumi.Input<string>;
    connectionState?: pulumi.Input<string>;
    connectionType?: pulumi.Input<string>;
    content?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    dscp?: pulumi.Input<number>;
    dstAddress?: pulumi.Input<string>;
    dstAddressList?: pulumi.Input<string>;
    dstAddressType?: pulumi.Input<string>;
    dstLimit?: pulumi.Input<string>;
    dstPort?: pulumi.Input<string>;
    dynamic?: pulumi.Input<boolean>;
    /**
     * Additional request filtering options.
     */
    filter?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    fragment?: pulumi.Input<boolean>;
    hotspot?: pulumi.Input<string>;
    icmpOptions?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    inBridgePort?: pulumi.Input<string>;
    inBridgePortList?: pulumi.Input<string>;
    inInterface?: pulumi.Input<string>;
    inInterfaceList?: pulumi.Input<string>;
    ingressPriority?: pulumi.Input<number>;
    invalid?: pulumi.Input<boolean>;
    ipsecPolicy?: pulumi.Input<string>;
    ipv4Options?: pulumi.Input<string>;
    jumpTarget?: pulumi.Input<string>;
    layer7Protocol?: pulumi.Input<string>;
    limit?: pulumi.Input<string>;
    log?: pulumi.Input<boolean>;
    logPrefix?: pulumi.Input<string>;
    newConnectionMark?: pulumi.Input<string>;
    newDscp?: pulumi.Input<number>;
    newMss?: pulumi.Input<number>;
    newPacketMark?: pulumi.Input<string>;
    newPriority?: pulumi.Input<string>;
    newRoutingMark?: pulumi.Input<string>;
    newTtl?: pulumi.Input<string>;
    nth?: pulumi.Input<string>;
    outBridgePort?: pulumi.Input<string>;
    outBridgePortList?: pulumi.Input<string>;
    outInterface?: pulumi.Input<string>;
    outInterfaceList?: pulumi.Input<string>;
    packetMark?: pulumi.Input<string>;
    packetSize?: pulumi.Input<string>;
    passthrough?: pulumi.Input<boolean>;
    perConnectionClassifier?: pulumi.Input<string>;
    port?: pulumi.Input<string>;
    protocol?: pulumi.Input<string>;
    psd?: pulumi.Input<string>;
    random?: pulumi.Input<number>;
    routeDst?: pulumi.Input<string>;
    routingMark?: pulumi.Input<string>;
    srcAddress?: pulumi.Input<string>;
    srcAddressList?: pulumi.Input<string>;
    srcAddressType?: pulumi.Input<string>;
    srcMacAddress?: pulumi.Input<string>;
    srcPort?: pulumi.Input<string>;
    tcpFlags?: pulumi.Input<string>;
    tcpMss?: pulumi.Input<string>;
    time?: pulumi.Input<string>;
    tlsHost?: pulumi.Input<string>;
    ttl?: pulumi.Input<string>;
}
export interface GetIpFirewallNat {
    action?: string;
    addressList?: string;
    addressListTimeout?: string;
    bytes?: number;
    chain?: string;
    comment?: string;
    connectionBytes?: string;
    connectionLimit?: string;
    connectionMark?: string;
    connectionRate?: string;
    connectionType?: string;
    content?: string;
    disabled?: boolean;
    dscp?: number;
    dstAddress?: string;
    dstAddressList?: string;
    dstAddressType?: string;
    dstLimit?: string;
    dstPort?: string;
    dynamic?: boolean;
    /**
     * Additional request filtering options.
     */
    filter?: {
        [key: string]: string;
    };
    fragment?: boolean;
    hotspot?: string;
    icmpOptions?: string;
    id?: string;
    inBridgePort?: string;
    inBridgePortList?: string;
    inInterface?: string;
    inInterfaceList?: string;
    ingressPriority?: number;
    invalid?: boolean;
    ipsecPolicy?: string;
    ipv4Options?: string;
    jumpTarget?: string;
    layer7Protocol?: string;
    limit?: string;
    log?: boolean;
    logPrefix?: string;
    nth?: string;
    outBridgePort?: string;
    outBridgePortList?: string;
    outInterface?: string;
    outInterfaceList?: string;
    packetMark?: string;
    packetSize?: string;
    perConnectionClassifier?: string;
    port?: string;
    priority?: number;
    protocol?: string;
    psd?: string;
    random?: number;
    routingMark?: string;
    sameNotByDst?: boolean;
    srcAddress?: string;
    srcAddressList?: string;
    srcAddressType?: string;
    srcMacAddress?: string;
    srcPort?: string;
    tcpMss?: string;
    time?: string;
    toAddresses?: string;
    toPorts?: string;
    ttl?: string;
}
export interface GetIpFirewallNatArgs {
    action?: pulumi.Input<string>;
    addressList?: pulumi.Input<string>;
    addressListTimeout?: pulumi.Input<string>;
    bytes?: pulumi.Input<number>;
    chain?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    connectionBytes?: pulumi.Input<string>;
    connectionLimit?: pulumi.Input<string>;
    connectionMark?: pulumi.Input<string>;
    connectionRate?: pulumi.Input<string>;
    connectionType?: pulumi.Input<string>;
    content?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    dscp?: pulumi.Input<number>;
    dstAddress?: pulumi.Input<string>;
    dstAddressList?: pulumi.Input<string>;
    dstAddressType?: pulumi.Input<string>;
    dstLimit?: pulumi.Input<string>;
    dstPort?: pulumi.Input<string>;
    dynamic?: pulumi.Input<boolean>;
    /**
     * Additional request filtering options.
     */
    filter?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    fragment?: pulumi.Input<boolean>;
    hotspot?: pulumi.Input<string>;
    icmpOptions?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    inBridgePort?: pulumi.Input<string>;
    inBridgePortList?: pulumi.Input<string>;
    inInterface?: pulumi.Input<string>;
    inInterfaceList?: pulumi.Input<string>;
    ingressPriority?: pulumi.Input<number>;
    invalid?: pulumi.Input<boolean>;
    ipsecPolicy?: pulumi.Input<string>;
    ipv4Options?: pulumi.Input<string>;
    jumpTarget?: pulumi.Input<string>;
    layer7Protocol?: pulumi.Input<string>;
    limit?: pulumi.Input<string>;
    log?: pulumi.Input<boolean>;
    logPrefix?: pulumi.Input<string>;
    nth?: pulumi.Input<string>;
    outBridgePort?: pulumi.Input<string>;
    outBridgePortList?: pulumi.Input<string>;
    outInterface?: pulumi.Input<string>;
    outInterfaceList?: pulumi.Input<string>;
    packetMark?: pulumi.Input<string>;
    packetSize?: pulumi.Input<string>;
    perConnectionClassifier?: pulumi.Input<string>;
    port?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    protocol?: pulumi.Input<string>;
    psd?: pulumi.Input<string>;
    random?: pulumi.Input<number>;
    routingMark?: pulumi.Input<string>;
    sameNotByDst?: pulumi.Input<boolean>;
    srcAddress?: pulumi.Input<string>;
    srcAddressList?: pulumi.Input<string>;
    srcAddressType?: pulumi.Input<string>;
    srcMacAddress?: pulumi.Input<string>;
    srcPort?: pulumi.Input<string>;
    tcpMss?: pulumi.Input<string>;
    time?: pulumi.Input<string>;
    toAddresses?: pulumi.Input<string>;
    toPorts?: pulumi.Input<string>;
    ttl?: pulumi.Input<string>;
}
export interface GetIpFirewallRule {
    action?: string;
    addressListTimeout?: string;
    bytes?: number;
    chain?: string;
    comment?: string;
    connectionBytes?: string;
    connectionLimit?: string;
    connectionMark?: string;
    connectionNatState?: string;
    connectionRate?: string;
    connectionState?: string;
    connectionType?: string;
    content?: string;
    disabled?: boolean;
    dscp?: number;
    dstAddress?: string;
    dstAddressList?: string;
    dstAddressType?: string;
    dstLimit?: string;
    dstPort?: string;
    dynamic?: boolean;
    /**
     * Additional request filtering options.
     */
    filter?: {
        [key: string]: string;
    };
    fragment?: boolean;
    hotspot?: string;
    hwOffload?: boolean;
    icmpOptions?: string;
    id?: string;
    inBridgePort?: string;
    inBridgePortList?: string;
    inInterface?: string;
    inInterfaceList?: string;
    ingressPriority?: number;
    invalid?: boolean;
    ipsecPolicy?: string;
    ipv4Options?: string;
    jumpTarget?: string;
    layer7Protocol?: string;
    limit?: string;
    log?: boolean;
    logPrefix?: string;
    nth?: string;
    outBridgePort?: string;
    outBridgePortList?: string;
    outInterface?: string;
    outInterfaceList?: string;
    packetMark?: string;
    packetSize?: string;
    perConnectionClassifier?: string;
    port?: string;
    priority?: number;
    protocol?: string;
    psd?: string;
    random?: number;
    rejectWith?: string;
    routingMark?: string;
    routingTable?: string;
    srcAddress?: string;
    srcAddressList?: string;
    srcAddressType?: string;
    srcMacAddress?: string;
    srcPort?: string;
    tcpFlags?: string;
    tcpMss?: string;
    time?: string;
    tlsHost?: string;
    ttl?: string;
}
export interface GetIpFirewallRuleArgs {
    action?: pulumi.Input<string>;
    addressListTimeout?: pulumi.Input<string>;
    bytes?: pulumi.Input<number>;
    chain?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    connectionBytes?: pulumi.Input<string>;
    connectionLimit?: pulumi.Input<string>;
    connectionMark?: pulumi.Input<string>;
    connectionNatState?: pulumi.Input<string>;
    connectionRate?: pulumi.Input<string>;
    connectionState?: pulumi.Input<string>;
    connectionType?: pulumi.Input<string>;
    content?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    dscp?: pulumi.Input<number>;
    dstAddress?: pulumi.Input<string>;
    dstAddressList?: pulumi.Input<string>;
    dstAddressType?: pulumi.Input<string>;
    dstLimit?: pulumi.Input<string>;
    dstPort?: pulumi.Input<string>;
    dynamic?: pulumi.Input<boolean>;
    /**
     * Additional request filtering options.
     */
    filter?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    fragment?: pulumi.Input<boolean>;
    hotspot?: pulumi.Input<string>;
    hwOffload?: pulumi.Input<boolean>;
    icmpOptions?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    inBridgePort?: pulumi.Input<string>;
    inBridgePortList?: pulumi.Input<string>;
    inInterface?: pulumi.Input<string>;
    inInterfaceList?: pulumi.Input<string>;
    ingressPriority?: pulumi.Input<number>;
    invalid?: pulumi.Input<boolean>;
    ipsecPolicy?: pulumi.Input<string>;
    ipv4Options?: pulumi.Input<string>;
    jumpTarget?: pulumi.Input<string>;
    layer7Protocol?: pulumi.Input<string>;
    limit?: pulumi.Input<string>;
    log?: pulumi.Input<boolean>;
    logPrefix?: pulumi.Input<string>;
    nth?: pulumi.Input<string>;
    outBridgePort?: pulumi.Input<string>;
    outBridgePortList?: pulumi.Input<string>;
    outInterface?: pulumi.Input<string>;
    outInterfaceList?: pulumi.Input<string>;
    packetMark?: pulumi.Input<string>;
    packetSize?: pulumi.Input<string>;
    perConnectionClassifier?: pulumi.Input<string>;
    port?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    protocol?: pulumi.Input<string>;
    psd?: pulumi.Input<string>;
    random?: pulumi.Input<number>;
    rejectWith?: pulumi.Input<string>;
    routingMark?: pulumi.Input<string>;
    routingTable?: pulumi.Input<string>;
    srcAddress?: pulumi.Input<string>;
    srcAddressList?: pulumi.Input<string>;
    srcAddressType?: pulumi.Input<string>;
    srcMacAddress?: pulumi.Input<string>;
    srcPort?: pulumi.Input<string>;
    tcpFlags?: pulumi.Input<string>;
    tcpMss?: pulumi.Input<string>;
    time?: pulumi.Input<string>;
    tlsHost?: pulumi.Input<string>;
    ttl?: pulumi.Input<string>;
}
export interface GetIpv6FirewallRule {
    action?: string;
    bytes?: number;
    chain?: string;
    comment?: string;
    connectionBytes?: string;
    connectionLimit?: string;
    connectionMark?: string;
    connectionNatState?: string;
    connectionRate?: string;
    connectionState?: string;
    connectionType?: string;
    content?: string;
    disabled?: boolean;
    dscp?: number;
    dstAddress?: string;
    dstAddressList?: string;
    dstAddressType?: string;
    dstLimit?: string;
    dstPort?: string;
    dynamic?: boolean;
    /**
     * Additional request filtering options.
     */
    filter?: {
        [key: string]: string;
    };
    icmpOptions?: string;
    id?: string;
    inBridgePort?: string;
    inBridgePortList?: string;
    inInterface?: string;
    inInterfaceList?: string;
    ingressPriority?: number;
    invalid?: boolean;
    ipsecPolicy?: string;
    limit?: string;
    log?: boolean;
    logPrefix?: string;
    nth?: string;
    outBridgePort?: string;
    outBridgePortList?: string;
    outInterface?: string;
    outInterfaceList?: string;
    packetMark?: string;
    packetSize?: string;
    perConnectionClassifier?: string;
    port?: string;
    priority?: number;
    protocol?: string;
    random?: number;
    rejectWith?: string;
    routingMark?: string;
    routingTable?: string;
    srcAddress?: string;
    srcAddressList?: string;
    srcAddressType?: string;
    srcMacAddress?: string;
    srcPort?: string;
    tcpFlags?: string;
    tcpMss?: string;
    time?: string;
    tlsHost?: string;
    ttl?: string;
}
export interface GetIpv6FirewallRuleArgs {
    action?: pulumi.Input<string>;
    bytes?: pulumi.Input<number>;
    chain?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    connectionBytes?: pulumi.Input<string>;
    connectionLimit?: pulumi.Input<string>;
    connectionMark?: pulumi.Input<string>;
    connectionNatState?: pulumi.Input<string>;
    connectionRate?: pulumi.Input<string>;
    connectionState?: pulumi.Input<string>;
    connectionType?: pulumi.Input<string>;
    content?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    dscp?: pulumi.Input<number>;
    dstAddress?: pulumi.Input<string>;
    dstAddressList?: pulumi.Input<string>;
    dstAddressType?: pulumi.Input<string>;
    dstLimit?: pulumi.Input<string>;
    dstPort?: pulumi.Input<string>;
    dynamic?: pulumi.Input<boolean>;
    /**
     * Additional request filtering options.
     */
    filter?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    icmpOptions?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    inBridgePort?: pulumi.Input<string>;
    inBridgePortList?: pulumi.Input<string>;
    inInterface?: pulumi.Input<string>;
    inInterfaceList?: pulumi.Input<string>;
    ingressPriority?: pulumi.Input<number>;
    invalid?: pulumi.Input<boolean>;
    ipsecPolicy?: pulumi.Input<string>;
    limit?: pulumi.Input<string>;
    log?: pulumi.Input<boolean>;
    logPrefix?: pulumi.Input<string>;
    nth?: pulumi.Input<string>;
    outBridgePort?: pulumi.Input<string>;
    outBridgePortList?: pulumi.Input<string>;
    outInterface?: pulumi.Input<string>;
    outInterfaceList?: pulumi.Input<string>;
    packetMark?: pulumi.Input<string>;
    packetSize?: pulumi.Input<string>;
    perConnectionClassifier?: pulumi.Input<string>;
    port?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    protocol?: pulumi.Input<string>;
    random?: pulumi.Input<number>;
    rejectWith?: pulumi.Input<string>;
    routingMark?: pulumi.Input<string>;
    routingTable?: pulumi.Input<string>;
    srcAddress?: pulumi.Input<string>;
    srcAddressList?: pulumi.Input<string>;
    srcAddressType?: pulumi.Input<string>;
    srcMacAddress?: pulumi.Input<string>;
    srcPort?: pulumi.Input<string>;
    tcpFlags?: pulumi.Input<string>;
    tcpMss?: pulumi.Input<string>;
    time?: pulumi.Input<string>;
    tlsHost?: pulumi.Input<string>;
    ttl?: pulumi.Input<string>;
}
export interface RoutingBgpConnectionInput {
    /**
     * A quick way to filter incoming updates with specific communities. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session refresh.
     */
    acceptCommunities?: pulumi.Input<string>;
    /**
     * A quick way to filter incoming updates with specific extended communities. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session refresh.
     */
    acceptExtCommunities?: pulumi.Input<string>;
    /**
     * A quick way to filter incoming updates with specific large communities. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session refresh.
     */
    acceptLargeCommunities?: pulumi.Input<string>;
    /**
     * Name of the ipv4/6 address-list. A quick way to filter incoming updates with specific NLRIs. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session restart.
     */
    acceptNlri?: pulumi.Input<string>;
    /**
     * A quick way to filter incoming updates with specific 'unknown' attributes. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session refresh.
     */
    acceptUnknown?: pulumi.Input<string>;
    /**
     * Configure input multi-core processing. Read more in Routing Protocol Multi-core Support article. alone - input and output of each session are processed in its own process, most likely the best option when there are a lot of cores and a lot of peers afi, instance, vrf, remote-as - try to run input/output of new session in process with similar parameters main - run input/output in the main process (could potentially increase performance on single-core even possibly on multi-core devices with a small amount of cores) input - run output in the same process as input (can be set only for output affinity)
     */
    affinity?: pulumi.Input<string>;
    /**
     * Indicates how many times to allow your own AS number in AS-PATH, before discarding a prefix.
     */
    allowAs?: pulumi.Input<number>;
    /**
     * Name of the routing filter chain to be used on input prefixes. This happens after NLRIs are processed. If the chain is not specified, then BGP by default accepts everything.
     */
    filter?: pulumi.Input<string>;
    /**
     * Whether to ignore the AS_PATH attribute in the BGP route selection algorithm
     */
    ignoreAsPathLen?: pulumi.Input<boolean>;
    /**
     * Try to limit the amount of received IPv4 routes to the specified number. This number does not represent the exact number of routes going to be installed in the routing table by the peer. BGP session 'clear' command must be used to reset the flag if the limit is reached.
     */
    limitProcessRoutesIpv4?: pulumi.Input<number>;
    /**
     * Try to limit the amount of received IPv6 routes to the specified number. This number does not represent the exact number of routes going to be installed in the routing table by the peer. BGP session 'clear' command must be used to reset the flag if the limit is reached.
     */
    limitProcessRoutesIpv6?: pulumi.Input<number>;
}
export interface RoutingBgpConnectionLocal {
    /**
     * Local connection IPv4/6 address.
     */
    address?: pulumi.Input<string>;
    defaultAddress?: pulumi.Input<string>;
    /**
     * Local connection port.
     */
    port?: pulumi.Input<number>;
    /**
     * BGP role, in most common scenarios it should be set to iBGP or eBGP. More information on BGP roles can be found in the corresponding [RFC draft](https://datatracker.ietf.org/doc/draft-ietf-idr-bgp-open-policy/?include_text=1)
     */
    role: pulumi.Input<string>;
    /**
     * Time To Live (hop limit) that will be recorded in sent TCP packets.
     */
    ttl?: pulumi.Input<number>;
}
export interface RoutingBgpConnectionOutput {
    /**
     * Configure output multicore processing. Read more in Routing Protocol Multi-core Support article. alone - input and output of each session is processed in its own process, the most likely best option when there are a lot of cores and a lot of peers afi, instance, vrf, remote-as - try to run input/output of new session in process with similar parameters main - run input/output in the main process (could potentially increase performance on single-core even possibly on multicore devices with small amount of cores) input - run output in the same process as input (can be set only for output affinity).
     */
    affinity?: pulumi.Input<string>;
    /**
     * If set, then all instances of the remote peer's AS number in the BGP AS-PATH attribute are replaced with the local AS number before sending a route update to that peer. Happens before routing filters and prepending.
     */
    asOverride?: pulumi.Input<boolean>;
    /**
     * Specifies default route (0.0.0.0/0) distribution method.
     */
    defaultOriginate?: pulumi.Input<string>;
    /**
     * The count of AS prepended to the AS path.
     */
    defaultPrepend?: pulumi.Input<number>;
    /**
     * Name of the routing filter chain to be used on the output prefixes. If the chain is not specified, then BGP by default accepts everything.
     */
    filterChain?: pulumi.Input<string>;
    /**
     * Name of the routing select chain to be used for prefix selection. If not specified, then default selection is used.
     */
    filterSelect?: pulumi.Input<string>;
    /**
     * Store in memory sent prefix attributes, required for ' dump-saved-advertisements ' command to work. By default, sent-out prefixes are not stored to preserve the router's memory. An option should be enabled only for debugging purposes when necessary to see currently advertised prefixes.
     */
    keepSentAttributes?: pulumi.Input<boolean>;
    /**
     * Name of the address list used to send local networks. The network is sent only if a matching IGP route exists in the routing table.
     */
    network?: pulumi.Input<string>;
    /**
     * Disable client-to-client route reflection in Route Reflector setups.
     */
    noClientToClientReflection?: pulumi.Input<boolean>;
    /**
     * The early cut is the mechanism, to guess (based on default RFC behavior) what would happen with the sent NPLRI when received by the remote peer. If the algorithm determines that the NLRI is going to be dropped, a peer will not even try to send it. However such behavior may not be desired in specific scenarios, then then this option should be used to disable the early cut feature.
     */
    noEarlyCut?: pulumi.Input<boolean>;
    /**
     * Enable redistribution of specified route types.
     */
    redistribute?: pulumi.Input<string>;
    /**
     * If set, then the BGP AS-PATH attribute is removed before sending out route updates if the attribute contains only private AS numbers. The removal process happens before routing filters are applied and before the local, AS number is prepended to the AS path.
     */
    removePrivateAs?: pulumi.Input<boolean>;
}
export interface RoutingBgpConnectionRemote {
    /**
     * Remote IPv4/6 address used to connect and/or listen to.
     */
    address?: pulumi.Input<string>;
    /**
     * List of remote AS numbers that are allowed to connect. Useful for dynamic peer configuration.
     */
    allowedAs?: pulumi.Input<string>;
    /**
     * Remote AS number. If not specified BGP will determine remote AS automatically from the OPEN message.
     */
    as?: pulumi.Input<string>;
    /**
     * Local connection port.
     */
    port?: pulumi.Input<number>;
    /**
     * Acceptable minimum Time To Live, the hop limit for this TCP connection. For example, if 'ttl=255' then only single-hop neighbors will be able to establish the connection. This property only affects EBGP peers.
     */
    ttl?: pulumi.Input<number>;
}
export interface RoutingBgpTemplateInput {
    /**
     * A quick way to filter incoming updates with specific communities. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session refresh.
     */
    acceptComunities?: pulumi.Input<string>;
    /**
     * A quick way to filter incoming updates with specific extended communities. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session refresh.
     */
    acceptExtCommunities?: pulumi.Input<string>;
    /**
     * A quick way to filter incoming updates with specific large communities. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session refresh.
     */
    acceptLargeComunities?: pulumi.Input<string>;
    /**
     * Name of the ipv4/6 address-list. A quick way to filter incoming updates with specific NLRIs. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session restart.
     */
    acceptNlri?: pulumi.Input<string>;
    /**
     * A quick way to filter incoming updates with specific 'unknown' attributes. It allows filtering incoming messages directly before they are even parsed and stored in memory, that way significantly reducing memory usage. Regular input filter chain can only reject prefixes which means that it will still eat memory and will be visible in /routing route table as 'not active, filtered'. Changes to be applied required session refresh.
     */
    acceptUnknown?: pulumi.Input<string>;
    /**
     * Configure input multi-core processing. Read more in Routing Protocol Multi-core Support article. alone - input and output of each session are processed in its own process, most likely the best option when there are a lot of cores and a lot of peers afi, instance, vrf, remote-as - try to run input/output of new session in process with similar parameters main - run input/output in the main process (could potentially increase performance on single-core even possibly on multi-core devices with a small amount of cores) input - run output in the same process as input (can be set only for output affinity)
     */
    affinity?: pulumi.Input<string>;
    /**
     * Indicates how many times to allow your own AS number in AS-PATH, before discarding a prefix.
     */
    allowAs?: pulumi.Input<number>;
    /**
     * Name of the routing filter chain to be used on input prefixes. This happens after NLRIs are processed. If the chain is not specified, then BGP by default accepts everything.
     */
    filter?: pulumi.Input<string>;
    /**
     * Whether to ignore the AS_PATH attribute in the BGP route selection algorithm
     */
    ignoreAsPathLen?: pulumi.Input<boolean>;
    /**
     * Try to limit the amount of received IPv4 routes to the specified number. This number does not represent the exact number of routes going to be installed in the routing table by the peer. BGP session 'clear' command must be used to reset the flag if the limit is reached.
     */
    limitProcessRoutesIpv4?: pulumi.Input<number>;
    /**
     * Try to limit the amount of received IPv6 routes to the specified number. This number does not represent the exact number of routes going to be installed in the routing table by the peer. BGP session 'clear' command must be used to reset the flag if the limit is reached.
     */
    limitProcessRoutesIpv6?: pulumi.Input<number>;
}
export interface RoutingBgpTemplateOutput {
    /**
     * Configure output multicore processing. Read more in Routing Protocol Multi-core Support article. alone - input and output of each session is processed in its own process, the most likely best option when there are a lot of cores and a lot of peers afi, instance, vrf, remote-as - try to run input/output of new session in process with similar parameters main - run input/output in the main process (could potentially increase performance on single-core even possibly on multicore devices with small amount of cores) input - run output in the same process as input (can be set only for output affinity).
     */
    affinity?: pulumi.Input<string>;
    /**
     * Specifies default route (0.0.0.0/0) distribution method.
     */
    defaultOriginate?: pulumi.Input<string>;
    /**
     * The count of AS prepended to the AS path.
     */
    defaultPrepend?: pulumi.Input<number>;
    /**
     * Name of the routing filter chain to be used on the output prefixes. If the chain is not specified, then BGP by default accepts everything.
     */
    filterChain?: pulumi.Input<string>;
    /**
     * Name of the routing select chain to be used for prefix selection. If not specified, then default selection is used.
     */
    filterSelect?: pulumi.Input<string>;
    /**
     * Store in memory sent prefix attributes, required for ' dump-saved-advertisements ' command to work. By default, sent-out prefixes are not stored to preserve the router's memory. An option should be enabled only for debugging purposes when necessary to see currently advertised prefixes.
     */
    keepSentAttributes?: pulumi.Input<boolean>;
    /**
     * Name of the address list used to send local networks. The network is sent only if a matching IGP route exists in the routing table.
     */
    network?: pulumi.Input<string>;
    /**
     * Disable client-to-client route reflection in Route Reflector setups.
     */
    noClientToClientReflection?: pulumi.Input<boolean>;
    /**
     * The early cut is the mechanism, to guess (based on default RFC behavior) what would happen with the sent NPLRI when received by the remote peer. If the algorithm determines that the NLRI is going to be dropped, a peer will not even try to send it. However such behavior may not be desired in specific scenarios, then then this option should be used to disable the early cut feature.
     */
    noEarlyCut?: pulumi.Input<boolean>;
    /**
     * Enable redistribution of specified route types.
     */
    redistribute?: pulumi.Input<string>;
}
export interface SystemCertificateImport {
    /**
     * Certificate file name that will be imported.
     */
    certFileName: pulumi.Input<string>;
    /**
     * Key file name that will be imported.
     */
    keyFileName?: pulumi.Input<string>;
    /**
     * File passphrase if there is such.
     */
    passphrase?: pulumi.Input<string>;
}
export interface SystemCertificateSign {
    /**
     * Which CA to use if signing issued certificates.
     */
    ca?: pulumi.Input<string>;
    /**
     * CRL host if issuing CA certificate.
     */
    caCrlHost?: pulumi.Input<string>;
}
export interface SystemCertificateSignViaScep {
    /**
     * SCEP CA identity.
     */
    caIdentity?: pulumi.Input<string>;
    /**
     * A challenge password.
     */
    challengePassword?: pulumi.Input<string>;
    /**
     * Whether to store a private key on smart card if hardware supports it.
     */
    onSmartCard?: pulumi.Input<boolean>;
    /**
     * Check certificate expiration and refresh it if expired.
     */
    refresh?: pulumi.Input<boolean>;
    /**
     * HTTP URL to the SCEP server.
     */
    scepUrl: pulumi.Input<string>;
}
export interface WireguardKeysKey {
    preshared: pulumi.Input<string>;
    private: pulumi.Input<string>;
    public: pulumi.Input<string>;
}
