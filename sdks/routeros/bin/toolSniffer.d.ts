import * as pulumi from "@pulumi/pulumi";
export declare class ToolSniffer extends pulumi.CustomResource {
    /**
     * Get an existing ToolSniffer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ToolSnifferState, opts?: pulumi.CustomResourceOptions): ToolSniffer;
    /**
     * Returns true if the given object is an instance of ToolSniffer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ToolSniffer;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___skip_: pulumi.Output<string | undefined>;
    /**
     * Start packet capture.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * File size limit. Sniffer will stop when a limit is reached.
     */
    readonly fileLimit: pulumi.Output<number | undefined>;
    /**
     * Name of the file where sniffed packets will be saved.
     */
    readonly fileName: pulumi.Output<string | undefined>;
    /**
     * CPU core used as a filter.
     */
    readonly filterCpu: pulumi.Output<string | undefined>;
    /**
     * Specifies which direction filtering will be applied.
     */
    readonly filterDirection: pulumi.Output<string | undefined>;
    /**
     * Up to 16 IP destination addresses used as a filter.
     */
    readonly filterDstIpAddresses: pulumi.Output<string[] | undefined>;
    /**
     * Up to 16 IPv6 destination addresses used as a filter.
     */
    readonly filterDstIpv6Addresses: pulumi.Output<string[] | undefined>;
    /**
     * Up to 16 MAC destination addresses and MAC address masks used as a filter.
     */
    readonly filterDstMacAddresses: pulumi.Output<string[] | undefined>;
    /**
     * Up to 16 comma-separated destination ports used as a filter. A list of predefined port names is also available, like ssh
     * and telnet.
     */
    readonly filterDstPorts: pulumi.Output<string[] | undefined>;
    /**
     * Interface name on which sniffer will be running. all indicates that the sniffer will sniff packets on all interfaces.
     */
    readonly filterInterfaces: pulumi.Output<string[] | undefined>;
    /**
     * Up to 16 IP addresses used as a filter.
     */
    readonly filterIpAddresses: pulumi.Output<string[] | undefined>;
    /**
     * Up to 16 comma-separated IP/IPv6 protocols used as a filter. IP protocols (instead of protocol names, protocol numbers
     * can be used): * ipsec-ah - IPsec AH protocol * ipsec-esp - IPsec ESP protocol * ddp - datagram delivery protocol * egp -
     * exterior gateway protocol * ggp - gateway-gateway protocol * gre - general routing encapsulation * hmp - host monitoring
     * protocol * idpr-cmtp - idpr control message transport * icmp - internet control message protocol * icmpv6 - internet
     * control message protocol v6 * igmp - internet group management protocol * ipencap - ip encapsulated in ip * ipip - ip
     * encapsulation * encap - ip encapsulation * iso-tp4 - iso transport protocol class 4 * ospf - open shortest path first *
     * pup - parc universal packet protocol * pim - protocol independent multicast * rspf - radio shortest path first * rdp -
     * reliable datagram protocol * st - st datagram mode * tcp - transmission control protocol * udp - user datagram protocol
     * * vmtp versatile message transport * vrrp - virtual router redundancy protocol * xns-idp - xerox xns idp * xtp - xpress
     * transfer protocol
     */
    readonly filterIpProtocols: pulumi.Output<string[] | undefined>;
    /**
     * Up to 16 IPv6 addresses used as a filter.
     */
    readonly filterIpv6Addresses: pulumi.Output<string[] | undefined>;
    /**
     * Up to 16 MAC addresses and MAC address masks used as a filter.
     */
    readonly filterMacAddresses: pulumi.Output<string[] | undefined>;
    /**
     * Up to 16 comma separated entries used as a filter. Mac protocols (instead of protocol names, protocol number can be
     * used): * 802.2 - 802.2 Frames (0x0004) * arp - Address Resolution Protocol (0x0806) * homeplug-av - HomePlug AV MME
     * (0x88E1) * ip - Internet Protocol version 4 (0x0800) * ipv6 - Internet Protocol Version 6 (0x86DD) * ipx - Internetwork
     * Packet Exchange (0x8137) * lldp - Link Layer Discovery Protocol (0x88CC) * loop-protect - Loop Protect Protocol (0x9003)
     * * mpls-multicast - MPLS multicast (0x8848) * mpls-unicast - MPLS unicast (0x8847) * packing-compr - Encapsulated packets
     * with compressed IP packing (0x9001) * packing-simple - Encapsulated packets with simple IP packing (0x9000) * pppoe -
     * PPPoE Session Stage (0x8864) * pppoe-discovery - PPPoE Discovery Stage (0x8863) * rarp - Reverse Address Resolution
     * Protocol (0x8035) * service-vlan - Provider Bridging (IEEE 802.1ad) & Shortest Path Bridging IEEE 802.1aq (0x88A8) *
     * vlan - VLAN-tagged frame (IEEE 802.1Q) and Shortest Path Bridging IEEE 802.1aq with NNI compatibility (0x8100)
     */
    readonly filterMacProtocols: pulumi.Output<string[] | undefined>;
    /**
     * Changes the logic for filters with multiple entries.
     */
    readonly filterOperatorBetweenEntries: pulumi.Output<string | undefined>;
    /**
     * Up to 16 comma-separated ports used as a filter. A list of predefined port names is also available, like ssh and telnet.
     */
    readonly filterPorts: pulumi.Output<string[] | undefined>;
    /**
     * Filters packets of specified size or size range in bytes.
     */
    readonly filterSize: pulumi.Output<string | undefined>;
    /**
     * Up to 16 IP source addresses used as a filter.
     */
    readonly filterSrcIpAddresses: pulumi.Output<string[] | undefined>;
    /**
     * Up to 16 IPv6 source addresses used as a filter.
     */
    readonly filterSrcIpv6Addresses: pulumi.Output<string[] | undefined>;
    /**
     * Up to 16 MAC source addresses and MAC address masks used as a filter.
     */
    readonly filterSrcMacAddresses: pulumi.Output<string[] | undefined>;
    /**
     * Up to 16 comma-separated source ports used as a filter. A list of predefined port names is also available, like ssh and
     * telnet.
     */
    readonly filterSrcPorts: pulumi.Output<string[] | undefined>;
    /**
     * Sniffed packets that are devised for the sniffer server are ignored.
     */
    readonly filterStream: pulumi.Output<boolean | undefined>;
    /**
     * Up to 16 VLAN IDs used as a filter.
     */
    readonly filterVlans: pulumi.Output<number[] | undefined>;
    /**
     * Memory amount used to store sniffed data.
     */
    readonly memoryLimit: pulumi.Output<number | undefined>;
    /**
     * Whether to rewrite older sniffed data when the memory limit is reached.
     */
    readonly memoryScroll: pulumi.Output<boolean | undefined>;
    /**
     * Save in the memory only the packet's headers, not the whole packet.
     */
    readonly onlyHeaders: pulumi.Output<boolean | undefined>;
    readonly running: pulumi.Output<boolean>;
    /**
     * Defines whether to send sniffed packets to the streaming server.
     */
    readonly streamingEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Tazmen Sniffer Protocol (TZSP) stream receiver.
     */
    readonly streamingServer: pulumi.Output<string | undefined>;
    readonly toolSnifferId: pulumi.Output<string>;
    /**
     * Create a ToolSniffer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ToolSnifferArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ToolSniffer resources.
 */
export interface ToolSnifferState {
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
     * Start packet capture.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * File size limit. Sniffer will stop when a limit is reached.
     */
    fileLimit?: pulumi.Input<number>;
    /**
     * Name of the file where sniffed packets will be saved.
     */
    fileName?: pulumi.Input<string>;
    /**
     * CPU core used as a filter.
     */
    filterCpu?: pulumi.Input<string>;
    /**
     * Specifies which direction filtering will be applied.
     */
    filterDirection?: pulumi.Input<string>;
    /**
     * Up to 16 IP destination addresses used as a filter.
     */
    filterDstIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Up to 16 IPv6 destination addresses used as a filter.
     */
    filterDstIpv6Addresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Up to 16 MAC destination addresses and MAC address masks used as a filter.
     */
    filterDstMacAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Up to 16 comma-separated destination ports used as a filter. A list of predefined port names is also available, like ssh
     * and telnet.
     */
    filterDstPorts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Interface name on which sniffer will be running. all indicates that the sniffer will sniff packets on all interfaces.
     */
    filterInterfaces?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Up to 16 IP addresses used as a filter.
     */
    filterIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Up to 16 comma-separated IP/IPv6 protocols used as a filter. IP protocols (instead of protocol names, protocol numbers
     * can be used): * ipsec-ah - IPsec AH protocol * ipsec-esp - IPsec ESP protocol * ddp - datagram delivery protocol * egp -
     * exterior gateway protocol * ggp - gateway-gateway protocol * gre - general routing encapsulation * hmp - host monitoring
     * protocol * idpr-cmtp - idpr control message transport * icmp - internet control message protocol * icmpv6 - internet
     * control message protocol v6 * igmp - internet group management protocol * ipencap - ip encapsulated in ip * ipip - ip
     * encapsulation * encap - ip encapsulation * iso-tp4 - iso transport protocol class 4 * ospf - open shortest path first *
     * pup - parc universal packet protocol * pim - protocol independent multicast * rspf - radio shortest path first * rdp -
     * reliable datagram protocol * st - st datagram mode * tcp - transmission control protocol * udp - user datagram protocol
     * * vmtp versatile message transport * vrrp - virtual router redundancy protocol * xns-idp - xerox xns idp * xtp - xpress
     * transfer protocol
     */
    filterIpProtocols?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Up to 16 IPv6 addresses used as a filter.
     */
    filterIpv6Addresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Up to 16 MAC addresses and MAC address masks used as a filter.
     */
    filterMacAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Up to 16 comma separated entries used as a filter. Mac protocols (instead of protocol names, protocol number can be
     * used): * 802.2 - 802.2 Frames (0x0004) * arp - Address Resolution Protocol (0x0806) * homeplug-av - HomePlug AV MME
     * (0x88E1) * ip - Internet Protocol version 4 (0x0800) * ipv6 - Internet Protocol Version 6 (0x86DD) * ipx - Internetwork
     * Packet Exchange (0x8137) * lldp - Link Layer Discovery Protocol (0x88CC) * loop-protect - Loop Protect Protocol (0x9003)
     * * mpls-multicast - MPLS multicast (0x8848) * mpls-unicast - MPLS unicast (0x8847) * packing-compr - Encapsulated packets
     * with compressed IP packing (0x9001) * packing-simple - Encapsulated packets with simple IP packing (0x9000) * pppoe -
     * PPPoE Session Stage (0x8864) * pppoe-discovery - PPPoE Discovery Stage (0x8863) * rarp - Reverse Address Resolution
     * Protocol (0x8035) * service-vlan - Provider Bridging (IEEE 802.1ad) & Shortest Path Bridging IEEE 802.1aq (0x88A8) *
     * vlan - VLAN-tagged frame (IEEE 802.1Q) and Shortest Path Bridging IEEE 802.1aq with NNI compatibility (0x8100)
     */
    filterMacProtocols?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Changes the logic for filters with multiple entries.
     */
    filterOperatorBetweenEntries?: pulumi.Input<string>;
    /**
     * Up to 16 comma-separated ports used as a filter. A list of predefined port names is also available, like ssh and telnet.
     */
    filterPorts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Filters packets of specified size or size range in bytes.
     */
    filterSize?: pulumi.Input<string>;
    /**
     * Up to 16 IP source addresses used as a filter.
     */
    filterSrcIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Up to 16 IPv6 source addresses used as a filter.
     */
    filterSrcIpv6Addresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Up to 16 MAC source addresses and MAC address masks used as a filter.
     */
    filterSrcMacAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Up to 16 comma-separated source ports used as a filter. A list of predefined port names is also available, like ssh and
     * telnet.
     */
    filterSrcPorts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Sniffed packets that are devised for the sniffer server are ignored.
     */
    filterStream?: pulumi.Input<boolean>;
    /**
     * Up to 16 VLAN IDs used as a filter.
     */
    filterVlans?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Memory amount used to store sniffed data.
     */
    memoryLimit?: pulumi.Input<number>;
    /**
     * Whether to rewrite older sniffed data when the memory limit is reached.
     */
    memoryScroll?: pulumi.Input<boolean>;
    /**
     * Save in the memory only the packet's headers, not the whole packet.
     */
    onlyHeaders?: pulumi.Input<boolean>;
    running?: pulumi.Input<boolean>;
    /**
     * Defines whether to send sniffed packets to the streaming server.
     */
    streamingEnabled?: pulumi.Input<boolean>;
    /**
     * Tazmen Sniffer Protocol (TZSP) stream receiver.
     */
    streamingServer?: pulumi.Input<string>;
    toolSnifferId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ToolSniffer resource.
 */
export interface ToolSnifferArgs {
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
     * Start packet capture.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * File size limit. Sniffer will stop when a limit is reached.
     */
    fileLimit?: pulumi.Input<number>;
    /**
     * Name of the file where sniffed packets will be saved.
     */
    fileName?: pulumi.Input<string>;
    /**
     * CPU core used as a filter.
     */
    filterCpu?: pulumi.Input<string>;
    /**
     * Specifies which direction filtering will be applied.
     */
    filterDirection?: pulumi.Input<string>;
    /**
     * Up to 16 IP destination addresses used as a filter.
     */
    filterDstIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Up to 16 IPv6 destination addresses used as a filter.
     */
    filterDstIpv6Addresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Up to 16 MAC destination addresses and MAC address masks used as a filter.
     */
    filterDstMacAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Up to 16 comma-separated destination ports used as a filter. A list of predefined port names is also available, like ssh
     * and telnet.
     */
    filterDstPorts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Interface name on which sniffer will be running. all indicates that the sniffer will sniff packets on all interfaces.
     */
    filterInterfaces?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Up to 16 IP addresses used as a filter.
     */
    filterIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Up to 16 comma-separated IP/IPv6 protocols used as a filter. IP protocols (instead of protocol names, protocol numbers
     * can be used): * ipsec-ah - IPsec AH protocol * ipsec-esp - IPsec ESP protocol * ddp - datagram delivery protocol * egp -
     * exterior gateway protocol * ggp - gateway-gateway protocol * gre - general routing encapsulation * hmp - host monitoring
     * protocol * idpr-cmtp - idpr control message transport * icmp - internet control message protocol * icmpv6 - internet
     * control message protocol v6 * igmp - internet group management protocol * ipencap - ip encapsulated in ip * ipip - ip
     * encapsulation * encap - ip encapsulation * iso-tp4 - iso transport protocol class 4 * ospf - open shortest path first *
     * pup - parc universal packet protocol * pim - protocol independent multicast * rspf - radio shortest path first * rdp -
     * reliable datagram protocol * st - st datagram mode * tcp - transmission control protocol * udp - user datagram protocol
     * * vmtp versatile message transport * vrrp - virtual router redundancy protocol * xns-idp - xerox xns idp * xtp - xpress
     * transfer protocol
     */
    filterIpProtocols?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Up to 16 IPv6 addresses used as a filter.
     */
    filterIpv6Addresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Up to 16 MAC addresses and MAC address masks used as a filter.
     */
    filterMacAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Up to 16 comma separated entries used as a filter. Mac protocols (instead of protocol names, protocol number can be
     * used): * 802.2 - 802.2 Frames (0x0004) * arp - Address Resolution Protocol (0x0806) * homeplug-av - HomePlug AV MME
     * (0x88E1) * ip - Internet Protocol version 4 (0x0800) * ipv6 - Internet Protocol Version 6 (0x86DD) * ipx - Internetwork
     * Packet Exchange (0x8137) * lldp - Link Layer Discovery Protocol (0x88CC) * loop-protect - Loop Protect Protocol (0x9003)
     * * mpls-multicast - MPLS multicast (0x8848) * mpls-unicast - MPLS unicast (0x8847) * packing-compr - Encapsulated packets
     * with compressed IP packing (0x9001) * packing-simple - Encapsulated packets with simple IP packing (0x9000) * pppoe -
     * PPPoE Session Stage (0x8864) * pppoe-discovery - PPPoE Discovery Stage (0x8863) * rarp - Reverse Address Resolution
     * Protocol (0x8035) * service-vlan - Provider Bridging (IEEE 802.1ad) & Shortest Path Bridging IEEE 802.1aq (0x88A8) *
     * vlan - VLAN-tagged frame (IEEE 802.1Q) and Shortest Path Bridging IEEE 802.1aq with NNI compatibility (0x8100)
     */
    filterMacProtocols?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Changes the logic for filters with multiple entries.
     */
    filterOperatorBetweenEntries?: pulumi.Input<string>;
    /**
     * Up to 16 comma-separated ports used as a filter. A list of predefined port names is also available, like ssh and telnet.
     */
    filterPorts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Filters packets of specified size or size range in bytes.
     */
    filterSize?: pulumi.Input<string>;
    /**
     * Up to 16 IP source addresses used as a filter.
     */
    filterSrcIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Up to 16 IPv6 source addresses used as a filter.
     */
    filterSrcIpv6Addresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Up to 16 MAC source addresses and MAC address masks used as a filter.
     */
    filterSrcMacAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Up to 16 comma-separated source ports used as a filter. A list of predefined port names is also available, like ssh and
     * telnet.
     */
    filterSrcPorts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Sniffed packets that are devised for the sniffer server are ignored.
     */
    filterStream?: pulumi.Input<boolean>;
    /**
     * Up to 16 VLAN IDs used as a filter.
     */
    filterVlans?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Memory amount used to store sniffed data.
     */
    memoryLimit?: pulumi.Input<number>;
    /**
     * Whether to rewrite older sniffed data when the memory limit is reached.
     */
    memoryScroll?: pulumi.Input<boolean>;
    /**
     * Save in the memory only the packet's headers, not the whole packet.
     */
    onlyHeaders?: pulumi.Input<boolean>;
    /**
     * Defines whether to send sniffed packets to the streaming server.
     */
    streamingEnabled?: pulumi.Input<boolean>;
    /**
     * Tazmen Sniffer Protocol (TZSP) stream receiver.
     */
    streamingServer?: pulumi.Input<string>;
    toolSnifferId?: pulumi.Input<string>;
}
