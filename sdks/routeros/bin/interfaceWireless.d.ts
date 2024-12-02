import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceWireless extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceWireless resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceWirelessState, opts?: pulumi.CustomResourceOptions): InterfaceWireless;
    /**
     * Returns true if the given object is an instance of InterfaceWireless.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceWireless;
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
     * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___ts_: pulumi.Output<string | undefined>;
    /**
     * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not
     * required.</em>
     */
    readonly ___unset_: pulumi.Output<string | undefined>;
    /**
     * This property is only effective for cards based on Atheros chipset.
     */
    readonly adaptiveNoiseImmunity: pulumi.Output<string | undefined>;
    /**
     * Allow WEP Shared Key clients to connect. Note that no authentication is done for these clients (WEP Shared keys are not
     * compared to anything) - they are just accepted at once (if access list allows that).
     */
    readonly allowSharedkey: pulumi.Output<boolean | undefined>;
    /**
     * Frame priorities for which AMPDU sending (aggregating frames and sending using block acknowledgment) should get
     * negotiated and used. Using AMPDUs will increase throughput, but may increase latency, therefore, may not be desirable
     * for real-time traffic (voice, video). Due to this, by default AMPDUs are enabled only for best-effort traffic.
     */
    readonly ampduPriorities: pulumi.Output<number[] | undefined>;
    /**
     * Max AMSDU that device is allowed to prepare when negotiated. AMSDU aggregation may significantly increase throughput
     * especially for small frames, but may increase latency in case of packet loss due to retransmission of aggregated frame.
     * Sending and receiving AMSDUs will also increase CPU usage.
     */
    readonly amsduLimit: pulumi.Output<number | undefined>;
    /**
     * Max frame size to allow including in AMSDU.
     */
    readonly amsduThreshold: pulumi.Output<number | undefined>;
    /**
     * Antenna gain in dBi, used to calculate maximum transmit power according to country regulations.
     */
    readonly antennaGain: pulumi.Output<number | undefined>;
    /**
     * Select antenna to use for transmitting and for receiving: `ant-a` - use only 'a'; antenna `ant-b` - use only 'b';
     * antenna `txa-rxb` - use antenna 'a' for transmitting, antenna 'b' for receiving; `rxa-txb` - use antenna 'b' for
     * transmitting, antenna 'a' for receiving.
     */
    readonly antennaMode: pulumi.Output<string | undefined>;
    /**
     * Identifies group of wireless networks. This value is announced by AP, and can be matched in connect-list by area-prefix.
     * This is a proprietary extension.
     */
    readonly area: pulumi.Output<string | undefined>;
    /**
     * ARP Mode.
     */
    readonly arp: pulumi.Output<string | undefined>;
    /**
     * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to
     * the value of arp-timeout in `/ip settings`, default is 30s.
     */
    readonly arpTimeout: pulumi.Output<string | undefined>;
    /**
     * Defines set of used data rates, channel frequencies and widths.
     */
    readonly band: pulumi.Output<string | undefined>;
    /**
     * Similar to the basic-rates-b property, but used for 5ghz, 5ghz-10mhz, 5ghz-5mhz, 5ghz-turbo, 2.4ghz-b/g, 2.4ghz-onlyg,
     * 2ghz-10mhz, 2ghz-5mhz and 2.4ghz-g-turbo bands.
     */
    readonly basicRatesAgs: pulumi.Output<string[] | undefined>;
    /**
     * List of basic rates, used for 2.4ghz-b, 2.4ghz-b/g and 2.4ghz-onlyg bands.Client will connect to AP only if it supports
     * all basic rates announced by the AP. AP will establish WDS link only if it supports all basic rates of the other AP.This
     * property has effect only in AP modes, and when value of rate-set is configured.
     */
    readonly basicRatesBs: pulumi.Output<string[] | undefined>;
    /**
     * Allows to use station-bridge mode.
     */
    readonly bridgeMode: pulumi.Output<string | undefined>;
    /**
     * Time in microseconds which will be used to send data without stopping. Note that no other wireless cards in that network
     * will be able to transmit data during burst-time microseconds. This setting is available only for AR5000, AR5001X, and
     * AR5001X+ chipset based cards.
     */
    readonly burstTime: pulumi.Output<string | undefined>;
    /**
     * Use of extension channels (e.g. Ce, eC etc) allows additional 20MHz extension channels and if it should be located below
     * or above the control (main) channel. Extension channel allows 802.11n devices to use up to 40MHz (802.11ac up to 160MHz)
     * of spectrum in total thus increasing max throughput. Channel widths with XX and XXXX extensions automatically scan for a
     * less crowded control channel frequency based on the number of concurrent devices running in every frequency and chooses
     * the `C` - Control channel frequency automatically.
     */
    readonly channelWidth: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * Setting this property to yes will allow the use of the hardware compression. Wireless interface must have support for
     * hardware compression. Connections with devices that do not use compression will still work.
     */
    readonly compression: pulumi.Output<boolean | undefined>;
    /**
     * Limits available bands, frequencies and maximum transmit power for each frequency. Also specifies default value of
     * scan-list. Value no_country_set is an FCC compliant set of channels.
     */
    readonly country: pulumi.Output<string | undefined>;
    /**
     * This is the value of ap-tx-limit for clients that do not match any entry in the access-list. 0 means no limit.
     */
    readonly defaultApTxLimit: pulumi.Output<number | undefined>;
    /**
     * For AP mode, this is the value of authentication for clients that do not match any entry in the access-list. For station
     * mode, this is the value of connect for APs that do not match any entry in the connect-list.
     */
    readonly defaultAuthentication: pulumi.Output<boolean | undefined>;
    /**
     * This is the value of client-tx-limit for clients that do not match any entry in the access-list. 0 means no limit.
     */
    readonly defaultClientTxLimit: pulumi.Output<number | undefined>;
    /**
     * This is the value of forwarding for clients that do not match any entry in the access-list.
     */
    readonly defaultForwarding: pulumi.Output<boolean | undefined>;
    readonly defaultName: pulumi.Output<string>;
    /**
     * When set to yes interface will always have running flag. If value is set to no', the router determines whether the card
     * is up and running - for AP one or more clients have to be registered to it, for station, it should be connected to an
     * AP.
     */
    readonly disableRunningCheck: pulumi.Output<boolean | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * This interval is measured from third sending failure on the lowest data rate. At this point 3 * (hw-retries + 1) frame
     * transmits on the lowest data rate had failed. During disconnect-timeout packet transmission will be retried with
     * on-fail-retry-time interval. If no frame can be transmitted successfully during disconnect-timeout, the connection is
     * closed, and this event is logged as `extensive data loss`. Successful frame transmission resets this timer.
     */
    readonly disconnectTimeout: pulumi.Output<string | undefined>;
    /**
     * How long to wait for confirmation of unicast frames (ACKs) before considering transmission unsuccessful, or in short
     * ACK-Timeout. Distance value has these behaviors:Dynamic - causes AP to detect and use the smallest timeout that works
     * with all connected clients.Indoor - uses the default ACK timeout value that the hardware chip manufacturer has
     * set.Number - uses the input value in formula: ACK-timeout = ((distance * 1000) + 299) / 300 us;Acknowledgments are not
     * used in Nstreme/NV2 protocols.
     */
    readonly distance: pulumi.Output<string | undefined>;
    /**
     * Discard frames that have been queued for sending longer than frame-lifetime. By default, when value of this property is
     * 0, frames are discarded only after connection is closed.
     */
    readonly frameLifetime: pulumi.Output<number | undefined>;
    /**
     * Channel frequency value in MHz on which AP will operate.Allowed values depend on the selected band, and are restricted
     * by country setting and wireless card capabilities. This setting has no effect if interface is in any of station modes,
     * or in wds-slave mode, or if DFS is active.Note: If using mode `superchannel.
     */
    readonly frequency: pulumi.Output<string | undefined>;
    /**
     * Three frequency modes are available: `regulatory-domain` - Limit available channels and maximum transmit power for each
     * channel according to the value of country `manual-txpower` - Same as above, but do not limit maximum transmit
     * power.`superchannel` - Conformance Testing Mode. Allow all channels supported by the card.List of available channels for
     * each band can be seen in `/interface wireless` info allowed-channels. This mode allows you to test wireless channels
     * outside the default scan-list and/or regulatory domain. This mode should only be used in controlled environments, or if
     * you have special permission to use it in your region. Before v4.3 this was called Custom Frequency Upgrade, or
     * Superchannel. Since RouterOS v4.3 this mode is available without special key upgrades to all installations.
     */
    readonly frequencyMode: pulumi.Output<string | undefined>;
    /**
     * Allows to specify offset if the used wireless card operates at a different frequency than is shown in RouterOS, in case
     * a frequency converter is used in the card. So if your card works at 4000MHz but RouterOS shows 5000MHz, set offset to
     * 1000MHz and it will be displayed correctly. The value is in MHz and can be positive or negative.
     */
    readonly frequencyOffset: pulumi.Output<number | undefined>;
    /**
     * Whether to allow use of short guard interval (refer to 802.11n MCS specification to see how this may affect throughput).
     * `any` will use either short or long, depending on data rate, `long` will use long.
     */
    readonly guardInterval: pulumi.Output<string | undefined>;
    /**
     * Yes - AP does not include SSID in the beacon frames, and does not reply to probe requests that have broadcast SSID.no -
     * AP includes SSID in the beacon frames, and replies to probe requests that have broadcast SSID.This property has an
     * effect only in AP mode. Setting it to yes can remove this network from the list of wireless networks that are shown by
     * some client software. Changing this setting does not improve the security of the wireless network, because SSID is
     * included in other frames sent by the AP.
     */
    readonly hideSsid: pulumi.Output<boolean | undefined>;
    /**
     * Modulation and Coding Schemes that every connecting client must support. Refer to 802.11n for MCS specification.
     */
    readonly htBasicMcs: pulumi.Output<string[] | undefined>;
    /**
     * Modulation and Coding Schemes that this device advertises as supported. Refer to 802.11n for MCS specification.
     */
    readonly htSupportedMcs: pulumi.Output<string[] | undefined>;
    /**
     * Specifies maximum fragment size in bytes when transmitted over the wireless medium. 802.11 standard packet (MSDU in
     * 802.11 terminologies) fragmentation allows packets to be fragmented before transmitting over a wireless medium to
     * increase the probability of successful transmission (only fragments that did not transmit correctly are retransmitted).
     * Note that transmission of a fragmented packet is less efficient than transmitting unfragmented packet because of
     * protocol overhead and increased resource usage at both - transmitting and receiving party.
     */
    readonly hwFragmentationThreshold: pulumi.Output<string | undefined>;
    /**
     * Frame protection support property.
     */
    readonly hwProtectionMode: pulumi.Output<string | undefined>;
    /**
     * Frame protection support property read more >>.
     */
    readonly hwProtectionThreshold: pulumi.Output<number | undefined>;
    /**
     * Number of times sending frame is retried without considering it a transmission failure. Data-rate is decreased upon
     * failure and the frame is sent again. Three sequential failures on the lowest supported rate suspend transmission to this
     * destination for the duration of on-fail-retry-time. After that, the frame is sent again. The frame is being
     * retransmitted until transmission success, or until the client is disconnected after disconnect-timeout. The frame can be
     * discarded during this time if frame-lifetime is exceeded.
     */
    readonly hwRetries: pulumi.Output<number | undefined>;
    /**
     * Adjusts scan-list to use indoor, outdoor or all frequencies for the country that is set.
     */
    readonly installation: pulumi.Output<string | undefined>;
    readonly interfaceType: pulumi.Output<string>;
    readonly interfaceWirelessId: pulumi.Output<string>;
    readonly interworkingProfile: pulumi.Output<string | undefined>;
    /**
     * Applies only if wireless interface is in mode=ap-bridge. If a client has not communicated for around 20 seconds, AP
     * sends a `keepalive-frame`. Note, disabling the feature can lead to `ghost` clients in registration-table.
     */
    readonly keepaliveFrames: pulumi.Output<string | undefined>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    readonly l2mtu: pulumi.Output<number | undefined>;
    /**
     * MAC address.
     */
    readonly macAddress: pulumi.Output<string | undefined>;
    /**
     * Name of wireless interface that has virtual-ap capability. Virtual AP interface will only work if master interface is in
     * ap-bridge, bridge, station or wds-slave mode. This property is only for virtual AP interfaces.
     */
    readonly masterInterface: pulumi.Output<string | undefined>;
    /**
     * Maximum number of associated clients. WDS links also count toward this limit.
     */
    readonly maxStationCount: pulumi.Output<number | undefined>;
    /**
     * Selection between different station and access point (AP) modes. **Station modes**: `station` - Basic station mode. Find
     * and connect to acceptable AP. `station-wds` - Same as station, but create WDS link with AP, using proprietary extension.
     * AP configuration has to allow WDS links with this device. Note that this mode does not use entries in wds.
     * `station-pseudobridge` - Same as station, but additionally perform MAC address translation of all traffic. Allows
     * interface to be bridged. `station-pseudobridge-clone` - Same as station-pseudobridge, but use station-bridge-clone-mac
     * address to connect to AP. `station-bridge` - Provides support for transparent protocol-independent L2 bridging on the
     * station device. RouterOS AP accepts clients in station-bridge mode when enabled using bridge-mode parameter. In this
     * mode, the AP maintains a forwarding table with information on which MAC addresses are reachable over which station
     * device. Only works with RouterOS APs. With station-bridge mode, it is not possible to connect to CAPsMAN controlled CAP.
     * **AP modes**: `ap-bridge` - Basic access point mode. `bridge` - Same as ap-bridge, but limited to one associated client.
     * `wds-slave` - Same as ap-bridge, but scan for AP with the same ssid and establishes WDS link. If this link is lost or
     * cannot be established, then continue scanning. If dfs-mode is radar-detect, then APs with enabled hide-ssid will not be
     * found during scanning. **Special modes**: `alignment-only` - Put the interface in a continuous transmit mode that is
     * used for aiming the remote antenna. `nstreme-dual-slave` - allow this interface to be used in nstreme-dual setup. MAC
     * address translation in pseudobridge modes works by inspecting packets and building a table of corresponding IP and MAC
     * addresses. All packets are sent to AP with the MAC address used by pseudobridge, and MAC addresses of received packets
     * are restored from the address translation table. There is a single entry in the address translation table for all non-IP
     * packets, hence more than one host in the bridged network cannot reliably use non-IP protocols. Note: Currently IPv6
     * doesn't work over Pseudobridge.
     */
    readonly mode: pulumi.Output<string | undefined>;
    /**
     * Layer3 Maximum transmission unit ('auto', 0 .. 65535)
     */
    readonly mtu: pulumi.Output<string>;
    /**
     * For a client that has power saving, buffer multicast packets until next beacon time. A client should wake up to receive
     * a beacon, by receiving beacon it sees that there are multicast packets pending, and it should wait for multicast packets
     * to be sent.
     */
    readonly multicastBuffering: pulumi.Output<string | undefined>;
    /**
     * When set to full, multicast packets will be sent with a unicast destination MAC address, resolving multicast problem on
     * the wireless link. This option should be enabled only on the access point, clients should be configured in
     * station-bridge mode. Available starting from v5.15.disabled - disables the helper and sends multicast packets with
     * multicast destination MAC addressesdhcp - dhcp packet mac addresses are changed to unicast mac addresses prior to
     * sending them outfull - all multicast packet mac address are changed to unicast mac addresses prior to sending them
     * outdefault - default choice that currently is set to dhcp. Value can be changed in future releases.
     */
    readonly multicastHelper: pulumi.Output<string | undefined>;
    /**
     * Name of the interface.
     */
    readonly name: pulumi.Output<string>;
    /**
     * For advanced use only, as it can badly affect the performance of the interface. It is possible to manually set noise
     * floor threshold value. By default, it is dynamically calculated. This property also affects received signal strength.
     * This property is only effective on non-AC chips.
     */
    readonly noiseFloorThreshold: pulumi.Output<string | undefined>;
    /**
     * Setting affects the size of contention time slot that AP allocates for clients to initiate connection and also size of
     * time slots used for estimating distance to client. When setting is too small, clients that are farther away may have
     * trouble connecting and/or disconnect with `ranging timeout` error. Although during normal operation the effect of this
     * setting should be negligible, in order to maintain maximum performance, it is advised to not increase this setting if
     * not necessary, so AP is not reserving time that is actually never used, but instead allocates it for actual data
     * transfer.on AP: distance to farthest client in kmon station: no effect.
     */
    readonly nv2CellRadius: pulumi.Output<number | undefined>;
    /**
     * Specifies the Nv2 downlink ratio. Uplink ratio is automatically calculated from the downlink-ratio value. When using
     * dynamic-downlink mode the downlink-ratio is also used when link get fully saturated. Minimum value is 20 and maximum 80.
     */
    readonly nv2DownlinkRatio: pulumi.Output<number | undefined>;
    /**
     * Specifies to use dynamic or fixed downlink/uplink ratio.
     */
    readonly nv2Mode: pulumi.Output<string | undefined>;
    readonly nv2NoiseFloorOffset: pulumi.Output<string | undefined>;
    /**
     * Specifies preshared key to be used.
     */
    readonly nv2PresharedKey: pulumi.Output<string | undefined>;
    /**
     * Sets the packet priority mechanism, firstly data from high priority queue is sent, then lower queue priority data until
     * 0 queue priority is reached. When link is full with high priority queue data, lower priority data is not sent. Use it
     * very carefully, setting works on APframe-priority - manual setting that can be tuned with Mangle rules.default - default
     * setting where small packets receive priority for best latency.
     */
    readonly nv2Qos: pulumi.Output<string | undefined>;
    /**
     * Specifies how many priority queues are used in Nv2 network.
     */
    readonly nv2QueueCount: pulumi.Output<number | undefined>;
    /**
     * Specifies Nv2 security mode.
     */
    readonly nv2Security: pulumi.Output<string | undefined>;
    /**
     * Specifies secret key for use in the Nv2 synchronization. Secret should match on Master and Slave devices in order to
     * establish the synced state.
     */
    readonly nv2SyncSecret: pulumi.Output<string | undefined>;
    /**
     * After third sending failure on the lowest data rate, wait for specified time interval before retrying.
     */
    readonly onFailRetryTime: pulumi.Output<string | undefined>;
    /**
     * Setting default enables periodic calibration if info default-periodic-calibration property is enabled. Value of that
     * property depends on the type of wireless card. This property is only effective for cards based on Atheros chipset.
     */
    readonly periodicCalibration: pulumi.Output<string | undefined>;
    /**
     * This property is only effective for cards based on Atheros chipset.
     */
    readonly periodicCalibrationInterval: pulumi.Output<number | undefined>;
    /**
     * Short preamble mode is an option of 802.11b standard that reduces per-frame overhead.On AP:long - Do not use short
     * preamble.short - Announce short preamble capability. Do not accept connections from clients that do not have this
     * capability.both - Announce short preamble capability.On station:long - do not use short preamble.short - do not connect
     * to AP if it does not support short preamble.both - Use short preamble if AP supports it.
     */
    readonly preambleMode: pulumi.Output<string | undefined>;
    /**
     * Specify type of the installed Prism wireless card.
     */
    readonly prismCardtype: pulumi.Output<string | undefined>;
    /**
     * RouterOS includes proprietary information in an information element of management frames. This parameter controls how
     * this information is included. `pre-2.9.25` - This is older method. It can interoperate with newer versions of RouterOS.
     * This method is incompatible with some clients, for example, Centrino based ones. `post-2.9.25` - This uses standardized
     * way of including vendor specific information, that is compatible with newer wireless clients.
     */
    readonly proprietaryExtensions: pulumi.Output<string | undefined>;
    /**
     * Descriptive name of the device, that is shown in registration table entries on the remote devices. This is a proprietary
     * extension.
     */
    readonly radioName: pulumi.Output<string>;
    /**
     * Starting from v5.9 default value is advanced since legacy mode was inefficient.
     */
    readonly rateSelection: pulumi.Output<string | undefined>;
    /**
     * Two options are available: `default` - default basic and supported rate sets are used. Values from basic-rates and
     * supported-rates parameters have no effect. `configured` - use values from basic-rates, supported-rates, basic-mcs, mcs.
     */
    readonly rateSet: pulumi.Output<string | undefined>;
    readonly running: pulumi.Output<boolean>;
    /**
     * Which antennas to use for receive. In current MikroTik routers, both RX and TX chain must be enabled, for the chain to
     * be enabled.
     */
    readonly rxChains: pulumi.Output<number[] | undefined>;
    /**
     * The default value is all channels from selected band that are supported by card and allowed by the country and
     * frequency-mode settings (this list can be seen in info). For default scan list in 5ghz band channels are taken with
     * 20MHz step, in 5ghz-turbo band - with 40MHz step, for all other bands - with 5MHz step. If scan-list is specified
     * manually, then all matching channels are taken. (Example: scan-list=default,5200-5245,2412-2427 - This will use the
     * default value of scan list for current band, and add to it supported frequencies from 5200-5245 or 2412-2427 range.)
     * Since RouterOS v6.0 with Winbox or Webfig, for inputting of multiple frequencies, add each frequency or range of
     * frequencies into separate multiple scan-lists. Using a comma to separate frequencies is no longer supported in
     * Winbox/Webfig since v6.0.Since RouterOS v6.35 (wireless-rep) scan-list support step feature where it is possible to
     * manually specify the scan step. Example: scan-list=5500-5600:20 will generate such scan-list values
     * 5500,5520,5540,5560,5580,5600.
     */
    readonly scanList: pulumi.Output<string | undefined>;
    /**
     * Specifies secondary channel, required to enable 80+80MHz transmission. To disable 80+80MHz functionality, set
     * secondary-frequency to `` or unset the value via CLI/GUI.
     */
    readonly secondaryFrequency: pulumi.Output<string | undefined>;
    /**
     * Name of profile from security-profiles.
     */
    readonly securityProfile: pulumi.Output<string | undefined>;
    /**
     * These values are used to skip all DFS channels or specifically skip DFS CAC channels in range 5600-5650MHz which
     * detection could go up to 10min.
     */
    readonly skipDfsChannels: pulumi.Output<string | undefined>;
    /**
     * SSID (service set identifier) is a name that identifies wireless network.
     */
    readonly ssid: pulumi.Output<string | undefined>;
    /**
     * This property has effect only in the station-pseudobridge-clone mode.Use this MAC address when connection to AP. If this
     * value is 00:00:00:00:00:00, station will initially use MAC address of the wireless interface.As soon as packet with MAC
     * address of another device needs to be transmitted, station will reconnect to AP using that address.
     */
    readonly stationBridgeCloneMac: pulumi.Output<string | undefined>;
    /**
     * Station Roaming feature is available only for 802.11 wireless protocol and only for station modes.
     */
    readonly stationRoaming: pulumi.Output<string | undefined>;
    /**
     * List of supported rates, used for all bands except 2ghz-b.
     */
    readonly supportedRatesAg: pulumi.Output<string | undefined>;
    /**
     * List of supported rates, used for 2ghz-b, 2ghz-b/g and 2ghz-b/g/n bands. Two devices will communicate only using rates
     * that are supported by both devices. This property has effect only when value of rate-set is configured.
     */
    readonly supportedRatesB: pulumi.Output<string | undefined>;
    /**
     * Specifies TDMA period in milliseconds. It could help on the longer distance links, it could slightly increase bandwidth,
     * while latency is increased too.
     */
    readonly tdmaPeriodSize: pulumi.Output<number | undefined>;
    /**
     * Which antennas to use for transmitting. In current MikroTik routers, both RX and TX chain must be enabled, for the chain
     * to be enabled.
     */
    readonly txChains: pulumi.Output<number[] | undefined>;
    /**
     * For 802.11ac wireless interface it's total power but for 802.11a/b/g/n it's power per chain.
     */
    readonly txPower: pulumi.Output<number | undefined>;
    /**
     * Sets up tx-power mode for wireless card `default` - use values stored in the card `all-rates-fixed` - use same transmit
     * power for all data rates. Can damage the card if transmit power is set above rated value of the card for used rate.
     * `manual-table` - define transmit power for each rate separately. Can damage the card if transmit power is set above
     * rated value of the card for used rate. `card-rates` - use transmit power calculated for each rate based on value of
     * tx-power parameter. Legacy mode only compatible with currently discontinued products.
     */
    readonly txPowerMode: pulumi.Output<string | undefined>;
    /**
     * How often to request update of signals strength and ccq values from clients. Access to registration-table also triggers
     * update of these values.This is proprietary extension.
     */
    readonly updateStatsInterval: pulumi.Output<string | undefined>;
    /**
     * Modulation and Coding Schemes that every connecting client must support. Refer to 802.11ac for MCS specification. You
     * can set MCS interval for each of Spatial Stream `none` - will not use selected; Spatial Stream `mcs0-7` - client must
     * support MCS-0 to MCS-7; `mcs0-8` - client must support MCS-0 to MCS-8; `mcs0-9` - client must support MCS-0 to MCS-9.
     */
    readonly vhtBasicMcs: pulumi.Output<string | undefined>;
    /**
     * Modulation and Coding Schemes that this device advertises as supported. Refer to 802.11ac for MCS specification. You can
     * set MCS interval for each of Spatial Stream `none` - will not use selected; Spatial Stream `mcs0-7` - devices will
     * advertise as supported MCS-0 to MCS-7; `mcs0-8` - devices will advertise as supported MCS-0 to MCS-8; `mcs0-9` - devices
     * will advertise as supported MCS-0 to MCS-9.
     */
    readonly vhtSupportedMcs: pulumi.Output<string | undefined>;
    /**
     * VLAN ID to use if doing VLAN tagging.
     */
    readonly vlanId: pulumi.Output<number | undefined>;
    /**
     * VLAN tagging mode specifies if traffic coming from client should get tagged (and untagged when going to client).
     */
    readonly vlanMode: pulumi.Output<string | undefined>;
    /**
     * Bridge port cost of WDS links are automatically adjusted, depending on measured link throughput. Port cost is
     * recalculated and adjusted every 5 seconds if it has changed by more than 10%, or if more than 20 seconds have passed
     * since the last adjustment.Setting this property to 0 disables automatic cost adjustment.Automatic adjustment does not
     * work for WDS links that are manually configured as a bridge port.
     */
    readonly wdsCostRange: pulumi.Output<string | undefined>;
    /**
     * When WDS link is established and status of the wds interface becomes running, it will be added as a bridge port to the
     * bridge interface specified by this property. When WDS link is lost, wds interface is removed from the bridge. If wds
     * interface is already included in a bridge setup when WDS link becomes active, it will not be added to bridge specified
     * by , and will (needs editing).
     */
    readonly wdsDefaultBridge: pulumi.Output<string | undefined>;
    /**
     * Initial bridge port cost of the WDS links.
     */
    readonly wdsDefaultCost: pulumi.Output<number | undefined>;
    /**
     * By default, WDS link between two APs can be created only when they work on the same frequency and have the same SSID
     * value. If this property is set to yes, then SSID of the remote AP will not be checked. This property has no effect on
     * connections from clients in station-wds mode. It also does not work if wds-mode is static-mesh or dynamic-mesh.
     */
    readonly wdsIgnoreSsid: pulumi.Output<boolean | undefined>;
    /**
     * Controls how WDS links with other devices (APs and clients in station-wds mode) are established. `disabled` does not
     * allow WDS links. `static` only allows WDS links that are manually configured in WDS. `dynamic` also allows WDS links
     * with devices that are not configured in WDS, by creating required entries dynamically. Such dynamic WDS entries are
     * removed automatically after the connection with the other AP is lost. `-mesh` modes use different (better) method for
     * establishing link between AP, that is not compatible with APs in non-mesh mode. This method avoids one-sided WDS links
     * that are created only by one of the two APs. Such links cannot pass any data.When AP or station is establishing WDS
     * connection with another AP, it uses connect-list to check whether this connection is allowed. If station in station-wds
     * mode is establishing connection with AP, AP uses access-list to check whether this connection is allowed.If mode is
     * station-wds, then this property has no effect.
     */
    readonly wdsMode: pulumi.Output<string | undefined>;
    /**
     * Specifies protocol used on wireless interface; `unspecified` - protocol mode used on previous RouterOS versions (v3.x,
     * v4.x). Nstreme is enabled by old enable-nstreme setting, Nv2 configuration is not possible. `any` : on AP - regular
     * 802.11 Access Point or Nstreme Access Point; on station - selects Access Point without specific sequence, it could be
     * changed by connect-list rules. `nstreme` - enables Nstreme protocol (the same as old enable-nstreme setting). `nv2` -
     * enables Nv2 protocol. `nv2 nstreme` : on AP - uses first wireless-protocol setting, always Nv2; on station - searches
     * for Nv2 Access Point, then for Nstreme Access Point. `nv2 nstreme 802.11` - on AP - uses first wireless-protocol
     * setting, always Nv2; on station - searches for Nv2 Access Point, then for Nstreme Access Point, then for regular 802.11
     * Access Point.Warning! Nv2 doesn't have support for Virtual AP.
     */
    readonly wirelessProtocol: pulumi.Output<string | undefined>;
    /**
     * Specifies whether to enable WMM. Only applies to bands B and G. Other bands will have it enabled regardless of this
     * setting.
     */
    readonly wmmSupport: pulumi.Output<string | undefined>;
    /**
     * WPS Server allows to connect wireless clients that support WPS to AP protected with the Pre-Shared Key without
     * specifying that key in the clients configuration.
     */
    readonly wpsMode: pulumi.Output<string | undefined>;
    /**
     * Create a InterfaceWireless resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: InterfaceWirelessArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterfaceWireless resources.
 */
export interface InterfaceWirelessState {
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
     * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
     */
    ___ts_?: pulumi.Input<string>;
    /**
     * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not
     * required.</em>
     */
    ___unset_?: pulumi.Input<string>;
    /**
     * This property is only effective for cards based on Atheros chipset.
     */
    adaptiveNoiseImmunity?: pulumi.Input<string>;
    /**
     * Allow WEP Shared Key clients to connect. Note that no authentication is done for these clients (WEP Shared keys are not
     * compared to anything) - they are just accepted at once (if access list allows that).
     */
    allowSharedkey?: pulumi.Input<boolean>;
    /**
     * Frame priorities for which AMPDU sending (aggregating frames and sending using block acknowledgment) should get
     * negotiated and used. Using AMPDUs will increase throughput, but may increase latency, therefore, may not be desirable
     * for real-time traffic (voice, video). Due to this, by default AMPDUs are enabled only for best-effort traffic.
     */
    ampduPriorities?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Max AMSDU that device is allowed to prepare when negotiated. AMSDU aggregation may significantly increase throughput
     * especially for small frames, but may increase latency in case of packet loss due to retransmission of aggregated frame.
     * Sending and receiving AMSDUs will also increase CPU usage.
     */
    amsduLimit?: pulumi.Input<number>;
    /**
     * Max frame size to allow including in AMSDU.
     */
    amsduThreshold?: pulumi.Input<number>;
    /**
     * Antenna gain in dBi, used to calculate maximum transmit power according to country regulations.
     */
    antennaGain?: pulumi.Input<number>;
    /**
     * Select antenna to use for transmitting and for receiving: `ant-a` - use only 'a'; antenna `ant-b` - use only 'b';
     * antenna `txa-rxb` - use antenna 'a' for transmitting, antenna 'b' for receiving; `rxa-txb` - use antenna 'b' for
     * transmitting, antenna 'a' for receiving.
     */
    antennaMode?: pulumi.Input<string>;
    /**
     * Identifies group of wireless networks. This value is announced by AP, and can be matched in connect-list by area-prefix.
     * This is a proprietary extension.
     */
    area?: pulumi.Input<string>;
    /**
     * ARP Mode.
     */
    arp?: pulumi.Input<string>;
    /**
     * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to
     * the value of arp-timeout in `/ip settings`, default is 30s.
     */
    arpTimeout?: pulumi.Input<string>;
    /**
     * Defines set of used data rates, channel frequencies and widths.
     */
    band?: pulumi.Input<string>;
    /**
     * Similar to the basic-rates-b property, but used for 5ghz, 5ghz-10mhz, 5ghz-5mhz, 5ghz-turbo, 2.4ghz-b/g, 2.4ghz-onlyg,
     * 2ghz-10mhz, 2ghz-5mhz and 2.4ghz-g-turbo bands.
     */
    basicRatesAgs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of basic rates, used for 2.4ghz-b, 2.4ghz-b/g and 2.4ghz-onlyg bands.Client will connect to AP only if it supports
     * all basic rates announced by the AP. AP will establish WDS link only if it supports all basic rates of the other AP.This
     * property has effect only in AP modes, and when value of rate-set is configured.
     */
    basicRatesBs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Allows to use station-bridge mode.
     */
    bridgeMode?: pulumi.Input<string>;
    /**
     * Time in microseconds which will be used to send data without stopping. Note that no other wireless cards in that network
     * will be able to transmit data during burst-time microseconds. This setting is available only for AR5000, AR5001X, and
     * AR5001X+ chipset based cards.
     */
    burstTime?: pulumi.Input<string>;
    /**
     * Use of extension channels (e.g. Ce, eC etc) allows additional 20MHz extension channels and if it should be located below
     * or above the control (main) channel. Extension channel allows 802.11n devices to use up to 40MHz (802.11ac up to 160MHz)
     * of spectrum in total thus increasing max throughput. Channel widths with XX and XXXX extensions automatically scan for a
     * less crowded control channel frequency based on the number of concurrent devices running in every frequency and chooses
     * the `C` - Control channel frequency automatically.
     */
    channelWidth?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Setting this property to yes will allow the use of the hardware compression. Wireless interface must have support for
     * hardware compression. Connections with devices that do not use compression will still work.
     */
    compression?: pulumi.Input<boolean>;
    /**
     * Limits available bands, frequencies and maximum transmit power for each frequency. Also specifies default value of
     * scan-list. Value no_country_set is an FCC compliant set of channels.
     */
    country?: pulumi.Input<string>;
    /**
     * This is the value of ap-tx-limit for clients that do not match any entry in the access-list. 0 means no limit.
     */
    defaultApTxLimit?: pulumi.Input<number>;
    /**
     * For AP mode, this is the value of authentication for clients that do not match any entry in the access-list. For station
     * mode, this is the value of connect for APs that do not match any entry in the connect-list.
     */
    defaultAuthentication?: pulumi.Input<boolean>;
    /**
     * This is the value of client-tx-limit for clients that do not match any entry in the access-list. 0 means no limit.
     */
    defaultClientTxLimit?: pulumi.Input<number>;
    /**
     * This is the value of forwarding for clients that do not match any entry in the access-list.
     */
    defaultForwarding?: pulumi.Input<boolean>;
    defaultName?: pulumi.Input<string>;
    /**
     * When set to yes interface will always have running flag. If value is set to no', the router determines whether the card
     * is up and running - for AP one or more clients have to be registered to it, for station, it should be connected to an
     * AP.
     */
    disableRunningCheck?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * This interval is measured from third sending failure on the lowest data rate. At this point 3 * (hw-retries + 1) frame
     * transmits on the lowest data rate had failed. During disconnect-timeout packet transmission will be retried with
     * on-fail-retry-time interval. If no frame can be transmitted successfully during disconnect-timeout, the connection is
     * closed, and this event is logged as `extensive data loss`. Successful frame transmission resets this timer.
     */
    disconnectTimeout?: pulumi.Input<string>;
    /**
     * How long to wait for confirmation of unicast frames (ACKs) before considering transmission unsuccessful, or in short
     * ACK-Timeout. Distance value has these behaviors:Dynamic - causes AP to detect and use the smallest timeout that works
     * with all connected clients.Indoor - uses the default ACK timeout value that the hardware chip manufacturer has
     * set.Number - uses the input value in formula: ACK-timeout = ((distance * 1000) + 299) / 300 us;Acknowledgments are not
     * used in Nstreme/NV2 protocols.
     */
    distance?: pulumi.Input<string>;
    /**
     * Discard frames that have been queued for sending longer than frame-lifetime. By default, when value of this property is
     * 0, frames are discarded only after connection is closed.
     */
    frameLifetime?: pulumi.Input<number>;
    /**
     * Channel frequency value in MHz on which AP will operate.Allowed values depend on the selected band, and are restricted
     * by country setting and wireless card capabilities. This setting has no effect if interface is in any of station modes,
     * or in wds-slave mode, or if DFS is active.Note: If using mode `superchannel.
     */
    frequency?: pulumi.Input<string>;
    /**
     * Three frequency modes are available: `regulatory-domain` - Limit available channels and maximum transmit power for each
     * channel according to the value of country `manual-txpower` - Same as above, but do not limit maximum transmit
     * power.`superchannel` - Conformance Testing Mode. Allow all channels supported by the card.List of available channels for
     * each band can be seen in `/interface wireless` info allowed-channels. This mode allows you to test wireless channels
     * outside the default scan-list and/or regulatory domain. This mode should only be used in controlled environments, or if
     * you have special permission to use it in your region. Before v4.3 this was called Custom Frequency Upgrade, or
     * Superchannel. Since RouterOS v4.3 this mode is available without special key upgrades to all installations.
     */
    frequencyMode?: pulumi.Input<string>;
    /**
     * Allows to specify offset if the used wireless card operates at a different frequency than is shown in RouterOS, in case
     * a frequency converter is used in the card. So if your card works at 4000MHz but RouterOS shows 5000MHz, set offset to
     * 1000MHz and it will be displayed correctly. The value is in MHz and can be positive or negative.
     */
    frequencyOffset?: pulumi.Input<number>;
    /**
     * Whether to allow use of short guard interval (refer to 802.11n MCS specification to see how this may affect throughput).
     * `any` will use either short or long, depending on data rate, `long` will use long.
     */
    guardInterval?: pulumi.Input<string>;
    /**
     * Yes - AP does not include SSID in the beacon frames, and does not reply to probe requests that have broadcast SSID.no -
     * AP includes SSID in the beacon frames, and replies to probe requests that have broadcast SSID.This property has an
     * effect only in AP mode. Setting it to yes can remove this network from the list of wireless networks that are shown by
     * some client software. Changing this setting does not improve the security of the wireless network, because SSID is
     * included in other frames sent by the AP.
     */
    hideSsid?: pulumi.Input<boolean>;
    /**
     * Modulation and Coding Schemes that every connecting client must support. Refer to 802.11n for MCS specification.
     */
    htBasicMcs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Modulation and Coding Schemes that this device advertises as supported. Refer to 802.11n for MCS specification.
     */
    htSupportedMcs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies maximum fragment size in bytes when transmitted over the wireless medium. 802.11 standard packet (MSDU in
     * 802.11 terminologies) fragmentation allows packets to be fragmented before transmitting over a wireless medium to
     * increase the probability of successful transmission (only fragments that did not transmit correctly are retransmitted).
     * Note that transmission of a fragmented packet is less efficient than transmitting unfragmented packet because of
     * protocol overhead and increased resource usage at both - transmitting and receiving party.
     */
    hwFragmentationThreshold?: pulumi.Input<string>;
    /**
     * Frame protection support property.
     */
    hwProtectionMode?: pulumi.Input<string>;
    /**
     * Frame protection support property read more >>.
     */
    hwProtectionThreshold?: pulumi.Input<number>;
    /**
     * Number of times sending frame is retried without considering it a transmission failure. Data-rate is decreased upon
     * failure and the frame is sent again. Three sequential failures on the lowest supported rate suspend transmission to this
     * destination for the duration of on-fail-retry-time. After that, the frame is sent again. The frame is being
     * retransmitted until transmission success, or until the client is disconnected after disconnect-timeout. The frame can be
     * discarded during this time if frame-lifetime is exceeded.
     */
    hwRetries?: pulumi.Input<number>;
    /**
     * Adjusts scan-list to use indoor, outdoor or all frequencies for the country that is set.
     */
    installation?: pulumi.Input<string>;
    interfaceType?: pulumi.Input<string>;
    interfaceWirelessId?: pulumi.Input<string>;
    interworkingProfile?: pulumi.Input<string>;
    /**
     * Applies only if wireless interface is in mode=ap-bridge. If a client has not communicated for around 20 seconds, AP
     * sends a `keepalive-frame`. Note, disabling the feature can lead to `ghost` clients in registration-table.
     */
    keepaliveFrames?: pulumi.Input<string>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    l2mtu?: pulumi.Input<number>;
    /**
     * MAC address.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Name of wireless interface that has virtual-ap capability. Virtual AP interface will only work if master interface is in
     * ap-bridge, bridge, station or wds-slave mode. This property is only for virtual AP interfaces.
     */
    masterInterface?: pulumi.Input<string>;
    /**
     * Maximum number of associated clients. WDS links also count toward this limit.
     */
    maxStationCount?: pulumi.Input<number>;
    /**
     * Selection between different station and access point (AP) modes. **Station modes**: `station` - Basic station mode. Find
     * and connect to acceptable AP. `station-wds` - Same as station, but create WDS link with AP, using proprietary extension.
     * AP configuration has to allow WDS links with this device. Note that this mode does not use entries in wds.
     * `station-pseudobridge` - Same as station, but additionally perform MAC address translation of all traffic. Allows
     * interface to be bridged. `station-pseudobridge-clone` - Same as station-pseudobridge, but use station-bridge-clone-mac
     * address to connect to AP. `station-bridge` - Provides support for transparent protocol-independent L2 bridging on the
     * station device. RouterOS AP accepts clients in station-bridge mode when enabled using bridge-mode parameter. In this
     * mode, the AP maintains a forwarding table with information on which MAC addresses are reachable over which station
     * device. Only works with RouterOS APs. With station-bridge mode, it is not possible to connect to CAPsMAN controlled CAP.
     * **AP modes**: `ap-bridge` - Basic access point mode. `bridge` - Same as ap-bridge, but limited to one associated client.
     * `wds-slave` - Same as ap-bridge, but scan for AP with the same ssid and establishes WDS link. If this link is lost or
     * cannot be established, then continue scanning. If dfs-mode is radar-detect, then APs with enabled hide-ssid will not be
     * found during scanning. **Special modes**: `alignment-only` - Put the interface in a continuous transmit mode that is
     * used for aiming the remote antenna. `nstreme-dual-slave` - allow this interface to be used in nstreme-dual setup. MAC
     * address translation in pseudobridge modes works by inspecting packets and building a table of corresponding IP and MAC
     * addresses. All packets are sent to AP with the MAC address used by pseudobridge, and MAC addresses of received packets
     * are restored from the address translation table. There is a single entry in the address translation table for all non-IP
     * packets, hence more than one host in the bridged network cannot reliably use non-IP protocols. Note: Currently IPv6
     * doesn't work over Pseudobridge.
     */
    mode?: pulumi.Input<string>;
    /**
     * Layer3 Maximum transmission unit ('auto', 0 .. 65535)
     */
    mtu?: pulumi.Input<string>;
    /**
     * For a client that has power saving, buffer multicast packets until next beacon time. A client should wake up to receive
     * a beacon, by receiving beacon it sees that there are multicast packets pending, and it should wait for multicast packets
     * to be sent.
     */
    multicastBuffering?: pulumi.Input<string>;
    /**
     * When set to full, multicast packets will be sent with a unicast destination MAC address, resolving multicast problem on
     * the wireless link. This option should be enabled only on the access point, clients should be configured in
     * station-bridge mode. Available starting from v5.15.disabled - disables the helper and sends multicast packets with
     * multicast destination MAC addressesdhcp - dhcp packet mac addresses are changed to unicast mac addresses prior to
     * sending them outfull - all multicast packet mac address are changed to unicast mac addresses prior to sending them
     * outdefault - default choice that currently is set to dhcp. Value can be changed in future releases.
     */
    multicastHelper?: pulumi.Input<string>;
    /**
     * Name of the interface.
     */
    name?: pulumi.Input<string>;
    /**
     * For advanced use only, as it can badly affect the performance of the interface. It is possible to manually set noise
     * floor threshold value. By default, it is dynamically calculated. This property also affects received signal strength.
     * This property is only effective on non-AC chips.
     */
    noiseFloorThreshold?: pulumi.Input<string>;
    /**
     * Setting affects the size of contention time slot that AP allocates for clients to initiate connection and also size of
     * time slots used for estimating distance to client. When setting is too small, clients that are farther away may have
     * trouble connecting and/or disconnect with `ranging timeout` error. Although during normal operation the effect of this
     * setting should be negligible, in order to maintain maximum performance, it is advised to not increase this setting if
     * not necessary, so AP is not reserving time that is actually never used, but instead allocates it for actual data
     * transfer.on AP: distance to farthest client in kmon station: no effect.
     */
    nv2CellRadius?: pulumi.Input<number>;
    /**
     * Specifies the Nv2 downlink ratio. Uplink ratio is automatically calculated from the downlink-ratio value. When using
     * dynamic-downlink mode the downlink-ratio is also used when link get fully saturated. Minimum value is 20 and maximum 80.
     */
    nv2DownlinkRatio?: pulumi.Input<number>;
    /**
     * Specifies to use dynamic or fixed downlink/uplink ratio.
     */
    nv2Mode?: pulumi.Input<string>;
    nv2NoiseFloorOffset?: pulumi.Input<string>;
    /**
     * Specifies preshared key to be used.
     */
    nv2PresharedKey?: pulumi.Input<string>;
    /**
     * Sets the packet priority mechanism, firstly data from high priority queue is sent, then lower queue priority data until
     * 0 queue priority is reached. When link is full with high priority queue data, lower priority data is not sent. Use it
     * very carefully, setting works on APframe-priority - manual setting that can be tuned with Mangle rules.default - default
     * setting where small packets receive priority for best latency.
     */
    nv2Qos?: pulumi.Input<string>;
    /**
     * Specifies how many priority queues are used in Nv2 network.
     */
    nv2QueueCount?: pulumi.Input<number>;
    /**
     * Specifies Nv2 security mode.
     */
    nv2Security?: pulumi.Input<string>;
    /**
     * Specifies secret key for use in the Nv2 synchronization. Secret should match on Master and Slave devices in order to
     * establish the synced state.
     */
    nv2SyncSecret?: pulumi.Input<string>;
    /**
     * After third sending failure on the lowest data rate, wait for specified time interval before retrying.
     */
    onFailRetryTime?: pulumi.Input<string>;
    /**
     * Setting default enables periodic calibration if info default-periodic-calibration property is enabled. Value of that
     * property depends on the type of wireless card. This property is only effective for cards based on Atheros chipset.
     */
    periodicCalibration?: pulumi.Input<string>;
    /**
     * This property is only effective for cards based on Atheros chipset.
     */
    periodicCalibrationInterval?: pulumi.Input<number>;
    /**
     * Short preamble mode is an option of 802.11b standard that reduces per-frame overhead.On AP:long - Do not use short
     * preamble.short - Announce short preamble capability. Do not accept connections from clients that do not have this
     * capability.both - Announce short preamble capability.On station:long - do not use short preamble.short - do not connect
     * to AP if it does not support short preamble.both - Use short preamble if AP supports it.
     */
    preambleMode?: pulumi.Input<string>;
    /**
     * Specify type of the installed Prism wireless card.
     */
    prismCardtype?: pulumi.Input<string>;
    /**
     * RouterOS includes proprietary information in an information element of management frames. This parameter controls how
     * this information is included. `pre-2.9.25` - This is older method. It can interoperate with newer versions of RouterOS.
     * This method is incompatible with some clients, for example, Centrino based ones. `post-2.9.25` - This uses standardized
     * way of including vendor specific information, that is compatible with newer wireless clients.
     */
    proprietaryExtensions?: pulumi.Input<string>;
    /**
     * Descriptive name of the device, that is shown in registration table entries on the remote devices. This is a proprietary
     * extension.
     */
    radioName?: pulumi.Input<string>;
    /**
     * Starting from v5.9 default value is advanced since legacy mode was inefficient.
     */
    rateSelection?: pulumi.Input<string>;
    /**
     * Two options are available: `default` - default basic and supported rate sets are used. Values from basic-rates and
     * supported-rates parameters have no effect. `configured` - use values from basic-rates, supported-rates, basic-mcs, mcs.
     */
    rateSet?: pulumi.Input<string>;
    running?: pulumi.Input<boolean>;
    /**
     * Which antennas to use for receive. In current MikroTik routers, both RX and TX chain must be enabled, for the chain to
     * be enabled.
     */
    rxChains?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * The default value is all channels from selected band that are supported by card and allowed by the country and
     * frequency-mode settings (this list can be seen in info). For default scan list in 5ghz band channels are taken with
     * 20MHz step, in 5ghz-turbo band - with 40MHz step, for all other bands - with 5MHz step. If scan-list is specified
     * manually, then all matching channels are taken. (Example: scan-list=default,5200-5245,2412-2427 - This will use the
     * default value of scan list for current band, and add to it supported frequencies from 5200-5245 or 2412-2427 range.)
     * Since RouterOS v6.0 with Winbox or Webfig, for inputting of multiple frequencies, add each frequency or range of
     * frequencies into separate multiple scan-lists. Using a comma to separate frequencies is no longer supported in
     * Winbox/Webfig since v6.0.Since RouterOS v6.35 (wireless-rep) scan-list support step feature where it is possible to
     * manually specify the scan step. Example: scan-list=5500-5600:20 will generate such scan-list values
     * 5500,5520,5540,5560,5580,5600.
     */
    scanList?: pulumi.Input<string>;
    /**
     * Specifies secondary channel, required to enable 80+80MHz transmission. To disable 80+80MHz functionality, set
     * secondary-frequency to `` or unset the value via CLI/GUI.
     */
    secondaryFrequency?: pulumi.Input<string>;
    /**
     * Name of profile from security-profiles.
     */
    securityProfile?: pulumi.Input<string>;
    /**
     * These values are used to skip all DFS channels or specifically skip DFS CAC channels in range 5600-5650MHz which
     * detection could go up to 10min.
     */
    skipDfsChannels?: pulumi.Input<string>;
    /**
     * SSID (service set identifier) is a name that identifies wireless network.
     */
    ssid?: pulumi.Input<string>;
    /**
     * This property has effect only in the station-pseudobridge-clone mode.Use this MAC address when connection to AP. If this
     * value is 00:00:00:00:00:00, station will initially use MAC address of the wireless interface.As soon as packet with MAC
     * address of another device needs to be transmitted, station will reconnect to AP using that address.
     */
    stationBridgeCloneMac?: pulumi.Input<string>;
    /**
     * Station Roaming feature is available only for 802.11 wireless protocol and only for station modes.
     */
    stationRoaming?: pulumi.Input<string>;
    /**
     * List of supported rates, used for all bands except 2ghz-b.
     */
    supportedRatesAg?: pulumi.Input<string>;
    /**
     * List of supported rates, used for 2ghz-b, 2ghz-b/g and 2ghz-b/g/n bands. Two devices will communicate only using rates
     * that are supported by both devices. This property has effect only when value of rate-set is configured.
     */
    supportedRatesB?: pulumi.Input<string>;
    /**
     * Specifies TDMA period in milliseconds. It could help on the longer distance links, it could slightly increase bandwidth,
     * while latency is increased too.
     */
    tdmaPeriodSize?: pulumi.Input<number>;
    /**
     * Which antennas to use for transmitting. In current MikroTik routers, both RX and TX chain must be enabled, for the chain
     * to be enabled.
     */
    txChains?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * For 802.11ac wireless interface it's total power but for 802.11a/b/g/n it's power per chain.
     */
    txPower?: pulumi.Input<number>;
    /**
     * Sets up tx-power mode for wireless card `default` - use values stored in the card `all-rates-fixed` - use same transmit
     * power for all data rates. Can damage the card if transmit power is set above rated value of the card for used rate.
     * `manual-table` - define transmit power for each rate separately. Can damage the card if transmit power is set above
     * rated value of the card for used rate. `card-rates` - use transmit power calculated for each rate based on value of
     * tx-power parameter. Legacy mode only compatible with currently discontinued products.
     */
    txPowerMode?: pulumi.Input<string>;
    /**
     * How often to request update of signals strength and ccq values from clients. Access to registration-table also triggers
     * update of these values.This is proprietary extension.
     */
    updateStatsInterval?: pulumi.Input<string>;
    /**
     * Modulation and Coding Schemes that every connecting client must support. Refer to 802.11ac for MCS specification. You
     * can set MCS interval for each of Spatial Stream `none` - will not use selected; Spatial Stream `mcs0-7` - client must
     * support MCS-0 to MCS-7; `mcs0-8` - client must support MCS-0 to MCS-8; `mcs0-9` - client must support MCS-0 to MCS-9.
     */
    vhtBasicMcs?: pulumi.Input<string>;
    /**
     * Modulation and Coding Schemes that this device advertises as supported. Refer to 802.11ac for MCS specification. You can
     * set MCS interval for each of Spatial Stream `none` - will not use selected; Spatial Stream `mcs0-7` - devices will
     * advertise as supported MCS-0 to MCS-7; `mcs0-8` - devices will advertise as supported MCS-0 to MCS-8; `mcs0-9` - devices
     * will advertise as supported MCS-0 to MCS-9.
     */
    vhtSupportedMcs?: pulumi.Input<string>;
    /**
     * VLAN ID to use if doing VLAN tagging.
     */
    vlanId?: pulumi.Input<number>;
    /**
     * VLAN tagging mode specifies if traffic coming from client should get tagged (and untagged when going to client).
     */
    vlanMode?: pulumi.Input<string>;
    /**
     * Bridge port cost of WDS links are automatically adjusted, depending on measured link throughput. Port cost is
     * recalculated and adjusted every 5 seconds if it has changed by more than 10%, or if more than 20 seconds have passed
     * since the last adjustment.Setting this property to 0 disables automatic cost adjustment.Automatic adjustment does not
     * work for WDS links that are manually configured as a bridge port.
     */
    wdsCostRange?: pulumi.Input<string>;
    /**
     * When WDS link is established and status of the wds interface becomes running, it will be added as a bridge port to the
     * bridge interface specified by this property. When WDS link is lost, wds interface is removed from the bridge. If wds
     * interface is already included in a bridge setup when WDS link becomes active, it will not be added to bridge specified
     * by , and will (needs editing).
     */
    wdsDefaultBridge?: pulumi.Input<string>;
    /**
     * Initial bridge port cost of the WDS links.
     */
    wdsDefaultCost?: pulumi.Input<number>;
    /**
     * By default, WDS link between two APs can be created only when they work on the same frequency and have the same SSID
     * value. If this property is set to yes, then SSID of the remote AP will not be checked. This property has no effect on
     * connections from clients in station-wds mode. It also does not work if wds-mode is static-mesh or dynamic-mesh.
     */
    wdsIgnoreSsid?: pulumi.Input<boolean>;
    /**
     * Controls how WDS links with other devices (APs and clients in station-wds mode) are established. `disabled` does not
     * allow WDS links. `static` only allows WDS links that are manually configured in WDS. `dynamic` also allows WDS links
     * with devices that are not configured in WDS, by creating required entries dynamically. Such dynamic WDS entries are
     * removed automatically after the connection with the other AP is lost. `-mesh` modes use different (better) method for
     * establishing link between AP, that is not compatible with APs in non-mesh mode. This method avoids one-sided WDS links
     * that are created only by one of the two APs. Such links cannot pass any data.When AP or station is establishing WDS
     * connection with another AP, it uses connect-list to check whether this connection is allowed. If station in station-wds
     * mode is establishing connection with AP, AP uses access-list to check whether this connection is allowed.If mode is
     * station-wds, then this property has no effect.
     */
    wdsMode?: pulumi.Input<string>;
    /**
     * Specifies protocol used on wireless interface; `unspecified` - protocol mode used on previous RouterOS versions (v3.x,
     * v4.x). Nstreme is enabled by old enable-nstreme setting, Nv2 configuration is not possible. `any` : on AP - regular
     * 802.11 Access Point or Nstreme Access Point; on station - selects Access Point without specific sequence, it could be
     * changed by connect-list rules. `nstreme` - enables Nstreme protocol (the same as old enable-nstreme setting). `nv2` -
     * enables Nv2 protocol. `nv2 nstreme` : on AP - uses first wireless-protocol setting, always Nv2; on station - searches
     * for Nv2 Access Point, then for Nstreme Access Point. `nv2 nstreme 802.11` - on AP - uses first wireless-protocol
     * setting, always Nv2; on station - searches for Nv2 Access Point, then for Nstreme Access Point, then for regular 802.11
     * Access Point.Warning! Nv2 doesn't have support for Virtual AP.
     */
    wirelessProtocol?: pulumi.Input<string>;
    /**
     * Specifies whether to enable WMM. Only applies to bands B and G. Other bands will have it enabled regardless of this
     * setting.
     */
    wmmSupport?: pulumi.Input<string>;
    /**
     * WPS Server allows to connect wireless clients that support WPS to AP protected with the Pre-Shared Key without
     * specifying that key in the clients configuration.
     */
    wpsMode?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a InterfaceWireless resource.
 */
export interface InterfaceWirelessArgs {
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
     * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
     */
    ___ts_?: pulumi.Input<string>;
    /**
     * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not
     * required.</em>
     */
    ___unset_?: pulumi.Input<string>;
    /**
     * This property is only effective for cards based on Atheros chipset.
     */
    adaptiveNoiseImmunity?: pulumi.Input<string>;
    /**
     * Allow WEP Shared Key clients to connect. Note that no authentication is done for these clients (WEP Shared keys are not
     * compared to anything) - they are just accepted at once (if access list allows that).
     */
    allowSharedkey?: pulumi.Input<boolean>;
    /**
     * Frame priorities for which AMPDU sending (aggregating frames and sending using block acknowledgment) should get
     * negotiated and used. Using AMPDUs will increase throughput, but may increase latency, therefore, may not be desirable
     * for real-time traffic (voice, video). Due to this, by default AMPDUs are enabled only for best-effort traffic.
     */
    ampduPriorities?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Max AMSDU that device is allowed to prepare when negotiated. AMSDU aggregation may significantly increase throughput
     * especially for small frames, but may increase latency in case of packet loss due to retransmission of aggregated frame.
     * Sending and receiving AMSDUs will also increase CPU usage.
     */
    amsduLimit?: pulumi.Input<number>;
    /**
     * Max frame size to allow including in AMSDU.
     */
    amsduThreshold?: pulumi.Input<number>;
    /**
     * Antenna gain in dBi, used to calculate maximum transmit power according to country regulations.
     */
    antennaGain?: pulumi.Input<number>;
    /**
     * Select antenna to use for transmitting and for receiving: `ant-a` - use only 'a'; antenna `ant-b` - use only 'b';
     * antenna `txa-rxb` - use antenna 'a' for transmitting, antenna 'b' for receiving; `rxa-txb` - use antenna 'b' for
     * transmitting, antenna 'a' for receiving.
     */
    antennaMode?: pulumi.Input<string>;
    /**
     * Identifies group of wireless networks. This value is announced by AP, and can be matched in connect-list by area-prefix.
     * This is a proprietary extension.
     */
    area?: pulumi.Input<string>;
    /**
     * ARP Mode.
     */
    arp?: pulumi.Input<string>;
    /**
     * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to
     * the value of arp-timeout in `/ip settings`, default is 30s.
     */
    arpTimeout?: pulumi.Input<string>;
    /**
     * Defines set of used data rates, channel frequencies and widths.
     */
    band?: pulumi.Input<string>;
    /**
     * Similar to the basic-rates-b property, but used for 5ghz, 5ghz-10mhz, 5ghz-5mhz, 5ghz-turbo, 2.4ghz-b/g, 2.4ghz-onlyg,
     * 2ghz-10mhz, 2ghz-5mhz and 2.4ghz-g-turbo bands.
     */
    basicRatesAgs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of basic rates, used for 2.4ghz-b, 2.4ghz-b/g and 2.4ghz-onlyg bands.Client will connect to AP only if it supports
     * all basic rates announced by the AP. AP will establish WDS link only if it supports all basic rates of the other AP.This
     * property has effect only in AP modes, and when value of rate-set is configured.
     */
    basicRatesBs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Allows to use station-bridge mode.
     */
    bridgeMode?: pulumi.Input<string>;
    /**
     * Time in microseconds which will be used to send data without stopping. Note that no other wireless cards in that network
     * will be able to transmit data during burst-time microseconds. This setting is available only for AR5000, AR5001X, and
     * AR5001X+ chipset based cards.
     */
    burstTime?: pulumi.Input<string>;
    /**
     * Use of extension channels (e.g. Ce, eC etc) allows additional 20MHz extension channels and if it should be located below
     * or above the control (main) channel. Extension channel allows 802.11n devices to use up to 40MHz (802.11ac up to 160MHz)
     * of spectrum in total thus increasing max throughput. Channel widths with XX and XXXX extensions automatically scan for a
     * less crowded control channel frequency based on the number of concurrent devices running in every frequency and chooses
     * the `C` - Control channel frequency automatically.
     */
    channelWidth?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Setting this property to yes will allow the use of the hardware compression. Wireless interface must have support for
     * hardware compression. Connections with devices that do not use compression will still work.
     */
    compression?: pulumi.Input<boolean>;
    /**
     * Limits available bands, frequencies and maximum transmit power for each frequency. Also specifies default value of
     * scan-list. Value no_country_set is an FCC compliant set of channels.
     */
    country?: pulumi.Input<string>;
    /**
     * This is the value of ap-tx-limit for clients that do not match any entry in the access-list. 0 means no limit.
     */
    defaultApTxLimit?: pulumi.Input<number>;
    /**
     * For AP mode, this is the value of authentication for clients that do not match any entry in the access-list. For station
     * mode, this is the value of connect for APs that do not match any entry in the connect-list.
     */
    defaultAuthentication?: pulumi.Input<boolean>;
    /**
     * This is the value of client-tx-limit for clients that do not match any entry in the access-list. 0 means no limit.
     */
    defaultClientTxLimit?: pulumi.Input<number>;
    /**
     * This is the value of forwarding for clients that do not match any entry in the access-list.
     */
    defaultForwarding?: pulumi.Input<boolean>;
    /**
     * When set to yes interface will always have running flag. If value is set to no', the router determines whether the card
     * is up and running - for AP one or more clients have to be registered to it, for station, it should be connected to an
     * AP.
     */
    disableRunningCheck?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * This interval is measured from third sending failure on the lowest data rate. At this point 3 * (hw-retries + 1) frame
     * transmits on the lowest data rate had failed. During disconnect-timeout packet transmission will be retried with
     * on-fail-retry-time interval. If no frame can be transmitted successfully during disconnect-timeout, the connection is
     * closed, and this event is logged as `extensive data loss`. Successful frame transmission resets this timer.
     */
    disconnectTimeout?: pulumi.Input<string>;
    /**
     * How long to wait for confirmation of unicast frames (ACKs) before considering transmission unsuccessful, or in short
     * ACK-Timeout. Distance value has these behaviors:Dynamic - causes AP to detect and use the smallest timeout that works
     * with all connected clients.Indoor - uses the default ACK timeout value that the hardware chip manufacturer has
     * set.Number - uses the input value in formula: ACK-timeout = ((distance * 1000) + 299) / 300 us;Acknowledgments are not
     * used in Nstreme/NV2 protocols.
     */
    distance?: pulumi.Input<string>;
    /**
     * Discard frames that have been queued for sending longer than frame-lifetime. By default, when value of this property is
     * 0, frames are discarded only after connection is closed.
     */
    frameLifetime?: pulumi.Input<number>;
    /**
     * Channel frequency value in MHz on which AP will operate.Allowed values depend on the selected band, and are restricted
     * by country setting and wireless card capabilities. This setting has no effect if interface is in any of station modes,
     * or in wds-slave mode, or if DFS is active.Note: If using mode `superchannel.
     */
    frequency?: pulumi.Input<string>;
    /**
     * Three frequency modes are available: `regulatory-domain` - Limit available channels and maximum transmit power for each
     * channel according to the value of country `manual-txpower` - Same as above, but do not limit maximum transmit
     * power.`superchannel` - Conformance Testing Mode. Allow all channels supported by the card.List of available channels for
     * each band can be seen in `/interface wireless` info allowed-channels. This mode allows you to test wireless channels
     * outside the default scan-list and/or regulatory domain. This mode should only be used in controlled environments, or if
     * you have special permission to use it in your region. Before v4.3 this was called Custom Frequency Upgrade, or
     * Superchannel. Since RouterOS v4.3 this mode is available without special key upgrades to all installations.
     */
    frequencyMode?: pulumi.Input<string>;
    /**
     * Allows to specify offset if the used wireless card operates at a different frequency than is shown in RouterOS, in case
     * a frequency converter is used in the card. So if your card works at 4000MHz but RouterOS shows 5000MHz, set offset to
     * 1000MHz and it will be displayed correctly. The value is in MHz and can be positive or negative.
     */
    frequencyOffset?: pulumi.Input<number>;
    /**
     * Whether to allow use of short guard interval (refer to 802.11n MCS specification to see how this may affect throughput).
     * `any` will use either short or long, depending on data rate, `long` will use long.
     */
    guardInterval?: pulumi.Input<string>;
    /**
     * Yes - AP does not include SSID in the beacon frames, and does not reply to probe requests that have broadcast SSID.no -
     * AP includes SSID in the beacon frames, and replies to probe requests that have broadcast SSID.This property has an
     * effect only in AP mode. Setting it to yes can remove this network from the list of wireless networks that are shown by
     * some client software. Changing this setting does not improve the security of the wireless network, because SSID is
     * included in other frames sent by the AP.
     */
    hideSsid?: pulumi.Input<boolean>;
    /**
     * Modulation and Coding Schemes that every connecting client must support. Refer to 802.11n for MCS specification.
     */
    htBasicMcs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Modulation and Coding Schemes that this device advertises as supported. Refer to 802.11n for MCS specification.
     */
    htSupportedMcs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies maximum fragment size in bytes when transmitted over the wireless medium. 802.11 standard packet (MSDU in
     * 802.11 terminologies) fragmentation allows packets to be fragmented before transmitting over a wireless medium to
     * increase the probability of successful transmission (only fragments that did not transmit correctly are retransmitted).
     * Note that transmission of a fragmented packet is less efficient than transmitting unfragmented packet because of
     * protocol overhead and increased resource usage at both - transmitting and receiving party.
     */
    hwFragmentationThreshold?: pulumi.Input<string>;
    /**
     * Frame protection support property.
     */
    hwProtectionMode?: pulumi.Input<string>;
    /**
     * Frame protection support property read more >>.
     */
    hwProtectionThreshold?: pulumi.Input<number>;
    /**
     * Number of times sending frame is retried without considering it a transmission failure. Data-rate is decreased upon
     * failure and the frame is sent again. Three sequential failures on the lowest supported rate suspend transmission to this
     * destination for the duration of on-fail-retry-time. After that, the frame is sent again. The frame is being
     * retransmitted until transmission success, or until the client is disconnected after disconnect-timeout. The frame can be
     * discarded during this time if frame-lifetime is exceeded.
     */
    hwRetries?: pulumi.Input<number>;
    /**
     * Adjusts scan-list to use indoor, outdoor or all frequencies for the country that is set.
     */
    installation?: pulumi.Input<string>;
    interfaceWirelessId?: pulumi.Input<string>;
    interworkingProfile?: pulumi.Input<string>;
    /**
     * Applies only if wireless interface is in mode=ap-bridge. If a client has not communicated for around 20 seconds, AP
     * sends a `keepalive-frame`. Note, disabling the feature can lead to `ghost` clients in registration-table.
     */
    keepaliveFrames?: pulumi.Input<string>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    l2mtu?: pulumi.Input<number>;
    /**
     * MAC address.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Name of wireless interface that has virtual-ap capability. Virtual AP interface will only work if master interface is in
     * ap-bridge, bridge, station or wds-slave mode. This property is only for virtual AP interfaces.
     */
    masterInterface?: pulumi.Input<string>;
    /**
     * Maximum number of associated clients. WDS links also count toward this limit.
     */
    maxStationCount?: pulumi.Input<number>;
    /**
     * Selection between different station and access point (AP) modes. **Station modes**: `station` - Basic station mode. Find
     * and connect to acceptable AP. `station-wds` - Same as station, but create WDS link with AP, using proprietary extension.
     * AP configuration has to allow WDS links with this device. Note that this mode does not use entries in wds.
     * `station-pseudobridge` - Same as station, but additionally perform MAC address translation of all traffic. Allows
     * interface to be bridged. `station-pseudobridge-clone` - Same as station-pseudobridge, but use station-bridge-clone-mac
     * address to connect to AP. `station-bridge` - Provides support for transparent protocol-independent L2 bridging on the
     * station device. RouterOS AP accepts clients in station-bridge mode when enabled using bridge-mode parameter. In this
     * mode, the AP maintains a forwarding table with information on which MAC addresses are reachable over which station
     * device. Only works with RouterOS APs. With station-bridge mode, it is not possible to connect to CAPsMAN controlled CAP.
     * **AP modes**: `ap-bridge` - Basic access point mode. `bridge` - Same as ap-bridge, but limited to one associated client.
     * `wds-slave` - Same as ap-bridge, but scan for AP with the same ssid and establishes WDS link. If this link is lost or
     * cannot be established, then continue scanning. If dfs-mode is radar-detect, then APs with enabled hide-ssid will not be
     * found during scanning. **Special modes**: `alignment-only` - Put the interface in a continuous transmit mode that is
     * used for aiming the remote antenna. `nstreme-dual-slave` - allow this interface to be used in nstreme-dual setup. MAC
     * address translation in pseudobridge modes works by inspecting packets and building a table of corresponding IP and MAC
     * addresses. All packets are sent to AP with the MAC address used by pseudobridge, and MAC addresses of received packets
     * are restored from the address translation table. There is a single entry in the address translation table for all non-IP
     * packets, hence more than one host in the bridged network cannot reliably use non-IP protocols. Note: Currently IPv6
     * doesn't work over Pseudobridge.
     */
    mode?: pulumi.Input<string>;
    /**
     * Layer3 Maximum transmission unit ('auto', 0 .. 65535)
     */
    mtu?: pulumi.Input<string>;
    /**
     * For a client that has power saving, buffer multicast packets until next beacon time. A client should wake up to receive
     * a beacon, by receiving beacon it sees that there are multicast packets pending, and it should wait for multicast packets
     * to be sent.
     */
    multicastBuffering?: pulumi.Input<string>;
    /**
     * When set to full, multicast packets will be sent with a unicast destination MAC address, resolving multicast problem on
     * the wireless link. This option should be enabled only on the access point, clients should be configured in
     * station-bridge mode. Available starting from v5.15.disabled - disables the helper and sends multicast packets with
     * multicast destination MAC addressesdhcp - dhcp packet mac addresses are changed to unicast mac addresses prior to
     * sending them outfull - all multicast packet mac address are changed to unicast mac addresses prior to sending them
     * outdefault - default choice that currently is set to dhcp. Value can be changed in future releases.
     */
    multicastHelper?: pulumi.Input<string>;
    /**
     * Name of the interface.
     */
    name?: pulumi.Input<string>;
    /**
     * For advanced use only, as it can badly affect the performance of the interface. It is possible to manually set noise
     * floor threshold value. By default, it is dynamically calculated. This property also affects received signal strength.
     * This property is only effective on non-AC chips.
     */
    noiseFloorThreshold?: pulumi.Input<string>;
    /**
     * Setting affects the size of contention time slot that AP allocates for clients to initiate connection and also size of
     * time slots used for estimating distance to client. When setting is too small, clients that are farther away may have
     * trouble connecting and/or disconnect with `ranging timeout` error. Although during normal operation the effect of this
     * setting should be negligible, in order to maintain maximum performance, it is advised to not increase this setting if
     * not necessary, so AP is not reserving time that is actually never used, but instead allocates it for actual data
     * transfer.on AP: distance to farthest client in kmon station: no effect.
     */
    nv2CellRadius?: pulumi.Input<number>;
    /**
     * Specifies the Nv2 downlink ratio. Uplink ratio is automatically calculated from the downlink-ratio value. When using
     * dynamic-downlink mode the downlink-ratio is also used when link get fully saturated. Minimum value is 20 and maximum 80.
     */
    nv2DownlinkRatio?: pulumi.Input<number>;
    /**
     * Specifies to use dynamic or fixed downlink/uplink ratio.
     */
    nv2Mode?: pulumi.Input<string>;
    nv2NoiseFloorOffset?: pulumi.Input<string>;
    /**
     * Specifies preshared key to be used.
     */
    nv2PresharedKey?: pulumi.Input<string>;
    /**
     * Sets the packet priority mechanism, firstly data from high priority queue is sent, then lower queue priority data until
     * 0 queue priority is reached. When link is full with high priority queue data, lower priority data is not sent. Use it
     * very carefully, setting works on APframe-priority - manual setting that can be tuned with Mangle rules.default - default
     * setting where small packets receive priority for best latency.
     */
    nv2Qos?: pulumi.Input<string>;
    /**
     * Specifies how many priority queues are used in Nv2 network.
     */
    nv2QueueCount?: pulumi.Input<number>;
    /**
     * Specifies Nv2 security mode.
     */
    nv2Security?: pulumi.Input<string>;
    /**
     * Specifies secret key for use in the Nv2 synchronization. Secret should match on Master and Slave devices in order to
     * establish the synced state.
     */
    nv2SyncSecret?: pulumi.Input<string>;
    /**
     * After third sending failure on the lowest data rate, wait for specified time interval before retrying.
     */
    onFailRetryTime?: pulumi.Input<string>;
    /**
     * Setting default enables periodic calibration if info default-periodic-calibration property is enabled. Value of that
     * property depends on the type of wireless card. This property is only effective for cards based on Atheros chipset.
     */
    periodicCalibration?: pulumi.Input<string>;
    /**
     * This property is only effective for cards based on Atheros chipset.
     */
    periodicCalibrationInterval?: pulumi.Input<number>;
    /**
     * Short preamble mode is an option of 802.11b standard that reduces per-frame overhead.On AP:long - Do not use short
     * preamble.short - Announce short preamble capability. Do not accept connections from clients that do not have this
     * capability.both - Announce short preamble capability.On station:long - do not use short preamble.short - do not connect
     * to AP if it does not support short preamble.both - Use short preamble if AP supports it.
     */
    preambleMode?: pulumi.Input<string>;
    /**
     * Specify type of the installed Prism wireless card.
     */
    prismCardtype?: pulumi.Input<string>;
    /**
     * RouterOS includes proprietary information in an information element of management frames. This parameter controls how
     * this information is included. `pre-2.9.25` - This is older method. It can interoperate with newer versions of RouterOS.
     * This method is incompatible with some clients, for example, Centrino based ones. `post-2.9.25` - This uses standardized
     * way of including vendor specific information, that is compatible with newer wireless clients.
     */
    proprietaryExtensions?: pulumi.Input<string>;
    /**
     * Starting from v5.9 default value is advanced since legacy mode was inefficient.
     */
    rateSelection?: pulumi.Input<string>;
    /**
     * Two options are available: `default` - default basic and supported rate sets are used. Values from basic-rates and
     * supported-rates parameters have no effect. `configured` - use values from basic-rates, supported-rates, basic-mcs, mcs.
     */
    rateSet?: pulumi.Input<string>;
    /**
     * Which antennas to use for receive. In current MikroTik routers, both RX and TX chain must be enabled, for the chain to
     * be enabled.
     */
    rxChains?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * The default value is all channels from selected band that are supported by card and allowed by the country and
     * frequency-mode settings (this list can be seen in info). For default scan list in 5ghz band channels are taken with
     * 20MHz step, in 5ghz-turbo band - with 40MHz step, for all other bands - with 5MHz step. If scan-list is specified
     * manually, then all matching channels are taken. (Example: scan-list=default,5200-5245,2412-2427 - This will use the
     * default value of scan list for current band, and add to it supported frequencies from 5200-5245 or 2412-2427 range.)
     * Since RouterOS v6.0 with Winbox or Webfig, for inputting of multiple frequencies, add each frequency or range of
     * frequencies into separate multiple scan-lists. Using a comma to separate frequencies is no longer supported in
     * Winbox/Webfig since v6.0.Since RouterOS v6.35 (wireless-rep) scan-list support step feature where it is possible to
     * manually specify the scan step. Example: scan-list=5500-5600:20 will generate such scan-list values
     * 5500,5520,5540,5560,5580,5600.
     */
    scanList?: pulumi.Input<string>;
    /**
     * Specifies secondary channel, required to enable 80+80MHz transmission. To disable 80+80MHz functionality, set
     * secondary-frequency to `` or unset the value via CLI/GUI.
     */
    secondaryFrequency?: pulumi.Input<string>;
    /**
     * Name of profile from security-profiles.
     */
    securityProfile?: pulumi.Input<string>;
    /**
     * These values are used to skip all DFS channels or specifically skip DFS CAC channels in range 5600-5650MHz which
     * detection could go up to 10min.
     */
    skipDfsChannels?: pulumi.Input<string>;
    /**
     * SSID (service set identifier) is a name that identifies wireless network.
     */
    ssid?: pulumi.Input<string>;
    /**
     * This property has effect only in the station-pseudobridge-clone mode.Use this MAC address when connection to AP. If this
     * value is 00:00:00:00:00:00, station will initially use MAC address of the wireless interface.As soon as packet with MAC
     * address of another device needs to be transmitted, station will reconnect to AP using that address.
     */
    stationBridgeCloneMac?: pulumi.Input<string>;
    /**
     * Station Roaming feature is available only for 802.11 wireless protocol and only for station modes.
     */
    stationRoaming?: pulumi.Input<string>;
    /**
     * List of supported rates, used for all bands except 2ghz-b.
     */
    supportedRatesAg?: pulumi.Input<string>;
    /**
     * List of supported rates, used for 2ghz-b, 2ghz-b/g and 2ghz-b/g/n bands. Two devices will communicate only using rates
     * that are supported by both devices. This property has effect only when value of rate-set is configured.
     */
    supportedRatesB?: pulumi.Input<string>;
    /**
     * Specifies TDMA period in milliseconds. It could help on the longer distance links, it could slightly increase bandwidth,
     * while latency is increased too.
     */
    tdmaPeriodSize?: pulumi.Input<number>;
    /**
     * Which antennas to use for transmitting. In current MikroTik routers, both RX and TX chain must be enabled, for the chain
     * to be enabled.
     */
    txChains?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * For 802.11ac wireless interface it's total power but for 802.11a/b/g/n it's power per chain.
     */
    txPower?: pulumi.Input<number>;
    /**
     * Sets up tx-power mode for wireless card `default` - use values stored in the card `all-rates-fixed` - use same transmit
     * power for all data rates. Can damage the card if transmit power is set above rated value of the card for used rate.
     * `manual-table` - define transmit power for each rate separately. Can damage the card if transmit power is set above
     * rated value of the card for used rate. `card-rates` - use transmit power calculated for each rate based on value of
     * tx-power parameter. Legacy mode only compatible with currently discontinued products.
     */
    txPowerMode?: pulumi.Input<string>;
    /**
     * How often to request update of signals strength and ccq values from clients. Access to registration-table also triggers
     * update of these values.This is proprietary extension.
     */
    updateStatsInterval?: pulumi.Input<string>;
    /**
     * Modulation and Coding Schemes that every connecting client must support. Refer to 802.11ac for MCS specification. You
     * can set MCS interval for each of Spatial Stream `none` - will not use selected; Spatial Stream `mcs0-7` - client must
     * support MCS-0 to MCS-7; `mcs0-8` - client must support MCS-0 to MCS-8; `mcs0-9` - client must support MCS-0 to MCS-9.
     */
    vhtBasicMcs?: pulumi.Input<string>;
    /**
     * Modulation and Coding Schemes that this device advertises as supported. Refer to 802.11ac for MCS specification. You can
     * set MCS interval for each of Spatial Stream `none` - will not use selected; Spatial Stream `mcs0-7` - devices will
     * advertise as supported MCS-0 to MCS-7; `mcs0-8` - devices will advertise as supported MCS-0 to MCS-8; `mcs0-9` - devices
     * will advertise as supported MCS-0 to MCS-9.
     */
    vhtSupportedMcs?: pulumi.Input<string>;
    /**
     * VLAN ID to use if doing VLAN tagging.
     */
    vlanId?: pulumi.Input<number>;
    /**
     * VLAN tagging mode specifies if traffic coming from client should get tagged (and untagged when going to client).
     */
    vlanMode?: pulumi.Input<string>;
    /**
     * Bridge port cost of WDS links are automatically adjusted, depending on measured link throughput. Port cost is
     * recalculated and adjusted every 5 seconds if it has changed by more than 10%, or if more than 20 seconds have passed
     * since the last adjustment.Setting this property to 0 disables automatic cost adjustment.Automatic adjustment does not
     * work for WDS links that are manually configured as a bridge port.
     */
    wdsCostRange?: pulumi.Input<string>;
    /**
     * When WDS link is established and status of the wds interface becomes running, it will be added as a bridge port to the
     * bridge interface specified by this property. When WDS link is lost, wds interface is removed from the bridge. If wds
     * interface is already included in a bridge setup when WDS link becomes active, it will not be added to bridge specified
     * by , and will (needs editing).
     */
    wdsDefaultBridge?: pulumi.Input<string>;
    /**
     * Initial bridge port cost of the WDS links.
     */
    wdsDefaultCost?: pulumi.Input<number>;
    /**
     * By default, WDS link between two APs can be created only when they work on the same frequency and have the same SSID
     * value. If this property is set to yes, then SSID of the remote AP will not be checked. This property has no effect on
     * connections from clients in station-wds mode. It also does not work if wds-mode is static-mesh or dynamic-mesh.
     */
    wdsIgnoreSsid?: pulumi.Input<boolean>;
    /**
     * Controls how WDS links with other devices (APs and clients in station-wds mode) are established. `disabled` does not
     * allow WDS links. `static` only allows WDS links that are manually configured in WDS. `dynamic` also allows WDS links
     * with devices that are not configured in WDS, by creating required entries dynamically. Such dynamic WDS entries are
     * removed automatically after the connection with the other AP is lost. `-mesh` modes use different (better) method for
     * establishing link between AP, that is not compatible with APs in non-mesh mode. This method avoids one-sided WDS links
     * that are created only by one of the two APs. Such links cannot pass any data.When AP or station is establishing WDS
     * connection with another AP, it uses connect-list to check whether this connection is allowed. If station in station-wds
     * mode is establishing connection with AP, AP uses access-list to check whether this connection is allowed.If mode is
     * station-wds, then this property has no effect.
     */
    wdsMode?: pulumi.Input<string>;
    /**
     * Specifies protocol used on wireless interface; `unspecified` - protocol mode used on previous RouterOS versions (v3.x,
     * v4.x). Nstreme is enabled by old enable-nstreme setting, Nv2 configuration is not possible. `any` : on AP - regular
     * 802.11 Access Point or Nstreme Access Point; on station - selects Access Point without specific sequence, it could be
     * changed by connect-list rules. `nstreme` - enables Nstreme protocol (the same as old enable-nstreme setting). `nv2` -
     * enables Nv2 protocol. `nv2 nstreme` : on AP - uses first wireless-protocol setting, always Nv2; on station - searches
     * for Nv2 Access Point, then for Nstreme Access Point. `nv2 nstreme 802.11` - on AP - uses first wireless-protocol
     * setting, always Nv2; on station - searches for Nv2 Access Point, then for Nstreme Access Point, then for regular 802.11
     * Access Point.Warning! Nv2 doesn't have support for Virtual AP.
     */
    wirelessProtocol?: pulumi.Input<string>;
    /**
     * Specifies whether to enable WMM. Only applies to bands B and G. Other bands will have it enabled regardless of this
     * setting.
     */
    wmmSupport?: pulumi.Input<string>;
    /**
     * WPS Server allows to connect wireless clients that support WPS to AP protected with the Pre-Shared Key without
     * specifying that key in the clients configuration.
     */
    wpsMode?: pulumi.Input<string>;
}
