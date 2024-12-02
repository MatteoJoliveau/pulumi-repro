import * as pulumi from "@pulumi/pulumi";
export declare class IpHotspotProfile extends pulumi.CustomResource {
    /**
     * Get an existing IpHotspotProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpHotspotProfileState, opts?: pulumi.CustomResourceOptions): IpHotspotProfile;
    /**
     * Returns true if the given object is an instance of IpHotspotProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpHotspotProfile;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * DNS name of the HotSpot server (it appears as the location of the login page). This name will automatically be added as
     * a static DNS entry in the DNS cache. Name can affect if Hotspot is automatically detected by client device. For example,
     * iOS devices may not detect Hotspot that has a name which includes `.local`.
     */
    readonly dnsName: pulumi.Output<string | undefined>;
    /**
     * IP address of HotSpot service.
     */
    readonly hotspotAddress: pulumi.Output<string | undefined>;
    /**
     * Directory name in which HotSpot HTML pages are stored (by default hotspot directory). It is possible to specify
     * different directory with modified HTML pages. To change HotSpot login page, connect to the router with FTP and download
     * hotspot directory contents. v6.31 and older software builds: For devices where `flash` directory is present, hotspot
     * html directory must be stored there and path must be typed in as follows: `/(hotspot_dir)`. This must be done in this
     * order as hotspot sees `flash` directory as root location. v6.32 and newer software builds: full path must be typed in
     * html-directory field, including `/flash/(hotspot_dir)`.
     */
    readonly htmlDirectory: pulumi.Output<string | undefined>;
    /**
     * Alternative path for hotspot html files. It should be used only if customized hotspot html files are stored on external
     * storage(attached usb, hdd, etc). If configured then hotspot will switch to this html path as soon at it becomes
     * available and switch back to html-directory path if override path becomes non-available for some reason.
     */
    readonly htmlDirectoryOverride: pulumi.Output<string | undefined>;
    /**
     * HTTP cookie validity time, the option is related to cookie HotSpot login method.
     */
    readonly httpCookieLifetime: pulumi.Output<string | undefined>;
    /**
     * Address and port of the proxy server for HotSpot service, when default value is used all request are resolved by the
     * local `/ip proxy`.
     */
    readonly httpProxy: pulumi.Output<string | undefined>;
    /**
     * Whether to redirect unauthenticated user to hotspot login page, if he is visiting a https:// url. Since certificate
     * domain name will mismatch, often this leads to errors, so you can set this parameter to `no` and all https requests will
     * simply be rejected and user will have to visit a http page.
     */
    readonly httpsRedirect: pulumi.Output<boolean | undefined>;
    readonly ipHotspotProfileId: pulumi.Output<string>;
    /**
     * Used HotSpot authentication method * mac-cookie - enables login by mac cookie method. * cookie - may only be used with
     * other HTTP authentication method. HTTP cookie is generated, when user authenticates in HotSpot for the first time. User
     * is not asked for the login/password and authenticated automatically, until cookie-lifetime is active. * http-chap -
     * login/password is required for the user to authenticate in HotSpot. CHAP challenge-response method with MD5 hashing
     * algorithm is used for protecting passwords. * http-pap - login/password is required for user to authenticate in HotSpot.
     * Username and password are sent over network in plain text. * https - login/password is required for user to authenticate
     * in HotSpot. Client login/password exchange between client and server is encrypted with SSL tunnel. * mac - client is
     * authenticated without asking login form. Client MAC-address is added to `/ip hotspot user` database, client is
     * authenticated as soon as connected to the HotSpot * trial - client is allowed to use internet without HotSpot login for
     * the specified amount of time.
     */
    readonly loginBies: pulumi.Output<string[] | undefined>;
    /**
     * Allows to control User-Name and User-Password RADIUS attributes when using MAC authentication.
     */
    readonly macAuthMode: pulumi.Output<string | undefined>;
    /**
     * Used together with MAC authentication, field used to specify password for the users to be authenticated by their MAC
     * addresses. The following option is required, when specific RADIUS server rejects authentication for the clients with
     * blank password.
     */
    readonly macAuthPassword: pulumi.Output<string | undefined>;
    /**
     * Descriptive name of the profile.
     */
    readonly name: pulumi.Output<string>;
    /**
     * `NAS-Port-Type` value to be sent to RADIUS server, `NAS-Port-Type` values are described in the RADIUS RFC 2865. This
     * optional value attribute indicates the type of the physical port of the HotSpot server.
     */
    readonly nasPortType: pulumi.Output<string | undefined>;
    /**
     * Send RADIUS server accounting information for each user, when yes is used.
     */
    readonly radiusAccounting: pulumi.Output<boolean | undefined>;
    /**
     * Default domain to use for RADIUS requests. Allows to use separate RADIUS server per `/ip hotspot profile`. If used, same
     * domain name should be specified under `/radius domain` value.
     */
    readonly radiusDefaultDomain: pulumi.Output<string | undefined>;
    /**
     * How often to send accounting updates . When received is set, interim-time is used from RADIUS server. 0s is the same as
     * received.
     */
    readonly radiusInterimUpdate: pulumi.Output<string | undefined>;
    /**
     * `RADIUS-Location-Id` to be sent to RADIUS server. Used to identify location of the HotSpot server during the
     * communication with RADIUS server. Value is optional and used together with RADIUS server.
     */
    readonly radiusLocationName: pulumi.Output<string | undefined>;
    /**
     * Controls how the MAC address of the client is encoded in the `User-Name` and `User-Password` attributes when using MAC
     * authentication.
     */
    readonly radiusMacFormat: pulumi.Output<string | undefined>;
    /**
     * Rate limitation in form of rx-rate[/tx-rate] [rx-burst-rate[/tx-burst-rate] [rx-burst-threshold[/tx-burst-threshold]
     * [rx-burst-time[/tx-burst-time]]]] [priority] [rx-rate-min[/tx-rate-min]] from the point of view of the router (so `rx`
     * is client upload, and `tx` is client download). All rates should be numbers with optional 'k' (1,000s) or 'M'
     * (1,000,000s). If tx-rate is not specified, rx-rate is as tx-rate too. Same goes for tx-burst-rate and tx-burst-threshold
     * and tx-burst-time. If both rx-burst-threshold and tx-burst-threshold are not specified (but burst-rate is specified),
     * rx-rate and tx-rate is used as burst thresholds. If both rx-burst-time and tx-burst-time are not specified, 1s is used
     * as default. rx-rate-min and tx-rate min are the values of limit-at properties.
     */
    readonly rateLimit: pulumi.Output<string | undefined>;
    /**
     * SMTP server address to be used to redirect HotSpot users SMTP requests.
     */
    readonly smtpServer: pulumi.Output<string | undefined>;
    /**
     * Split username from domain name when the username is given in `user@domain` or in `domain\user` format from RADIUS
     * server.
     */
    readonly splitUserDomain: pulumi.Output<boolean | undefined>;
    /**
     * Name of the SSL certificate on the router to to use only for HTTPS authentication.
     */
    readonly sslCertificate: pulumi.Output<string | undefined>;
    /**
     * Used only with trial authentication method. Time value specifies, how long trial user identified by MAC address can use
     * access to public networks without HotSpot authentication.
     */
    readonly trialUptimeLimit: pulumi.Output<string | undefined>;
    /**
     * Used only with trial authentication method.
     */
    readonly trialUptimeReset: pulumi.Output<string | undefined>;
    /**
     * Specifies hotspot user profile for trial users.
     */
    readonly trialUserProfile: pulumi.Output<string | undefined>;
    /**
     * Use RADIUS to authenticate HotSpot users.
     */
    readonly useRadius: pulumi.Output<boolean | undefined>;
    /**
     * Create a IpHotspotProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpHotspotProfileArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpHotspotProfile resources.
 */
export interface IpHotspotProfileState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * DNS name of the HotSpot server (it appears as the location of the login page). This name will automatically be added as
     * a static DNS entry in the DNS cache. Name can affect if Hotspot is automatically detected by client device. For example,
     * iOS devices may not detect Hotspot that has a name which includes `.local`.
     */
    dnsName?: pulumi.Input<string>;
    /**
     * IP address of HotSpot service.
     */
    hotspotAddress?: pulumi.Input<string>;
    /**
     * Directory name in which HotSpot HTML pages are stored (by default hotspot directory). It is possible to specify
     * different directory with modified HTML pages. To change HotSpot login page, connect to the router with FTP and download
     * hotspot directory contents. v6.31 and older software builds: For devices where `flash` directory is present, hotspot
     * html directory must be stored there and path must be typed in as follows: `/(hotspot_dir)`. This must be done in this
     * order as hotspot sees `flash` directory as root location. v6.32 and newer software builds: full path must be typed in
     * html-directory field, including `/flash/(hotspot_dir)`.
     */
    htmlDirectory?: pulumi.Input<string>;
    /**
     * Alternative path for hotspot html files. It should be used only if customized hotspot html files are stored on external
     * storage(attached usb, hdd, etc). If configured then hotspot will switch to this html path as soon at it becomes
     * available and switch back to html-directory path if override path becomes non-available for some reason.
     */
    htmlDirectoryOverride?: pulumi.Input<string>;
    /**
     * HTTP cookie validity time, the option is related to cookie HotSpot login method.
     */
    httpCookieLifetime?: pulumi.Input<string>;
    /**
     * Address and port of the proxy server for HotSpot service, when default value is used all request are resolved by the
     * local `/ip proxy`.
     */
    httpProxy?: pulumi.Input<string>;
    /**
     * Whether to redirect unauthenticated user to hotspot login page, if he is visiting a https:// url. Since certificate
     * domain name will mismatch, often this leads to errors, so you can set this parameter to `no` and all https requests will
     * simply be rejected and user will have to visit a http page.
     */
    httpsRedirect?: pulumi.Input<boolean>;
    ipHotspotProfileId?: pulumi.Input<string>;
    /**
     * Used HotSpot authentication method * mac-cookie - enables login by mac cookie method. * cookie - may only be used with
     * other HTTP authentication method. HTTP cookie is generated, when user authenticates in HotSpot for the first time. User
     * is not asked for the login/password and authenticated automatically, until cookie-lifetime is active. * http-chap -
     * login/password is required for the user to authenticate in HotSpot. CHAP challenge-response method with MD5 hashing
     * algorithm is used for protecting passwords. * http-pap - login/password is required for user to authenticate in HotSpot.
     * Username and password are sent over network in plain text. * https - login/password is required for user to authenticate
     * in HotSpot. Client login/password exchange between client and server is encrypted with SSL tunnel. * mac - client is
     * authenticated without asking login form. Client MAC-address is added to `/ip hotspot user` database, client is
     * authenticated as soon as connected to the HotSpot * trial - client is allowed to use internet without HotSpot login for
     * the specified amount of time.
     */
    loginBies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Allows to control User-Name and User-Password RADIUS attributes when using MAC authentication.
     */
    macAuthMode?: pulumi.Input<string>;
    /**
     * Used together with MAC authentication, field used to specify password for the users to be authenticated by their MAC
     * addresses. The following option is required, when specific RADIUS server rejects authentication for the clients with
     * blank password.
     */
    macAuthPassword?: pulumi.Input<string>;
    /**
     * Descriptive name of the profile.
     */
    name?: pulumi.Input<string>;
    /**
     * `NAS-Port-Type` value to be sent to RADIUS server, `NAS-Port-Type` values are described in the RADIUS RFC 2865. This
     * optional value attribute indicates the type of the physical port of the HotSpot server.
     */
    nasPortType?: pulumi.Input<string>;
    /**
     * Send RADIUS server accounting information for each user, when yes is used.
     */
    radiusAccounting?: pulumi.Input<boolean>;
    /**
     * Default domain to use for RADIUS requests. Allows to use separate RADIUS server per `/ip hotspot profile`. If used, same
     * domain name should be specified under `/radius domain` value.
     */
    radiusDefaultDomain?: pulumi.Input<string>;
    /**
     * How often to send accounting updates . When received is set, interim-time is used from RADIUS server. 0s is the same as
     * received.
     */
    radiusInterimUpdate?: pulumi.Input<string>;
    /**
     * `RADIUS-Location-Id` to be sent to RADIUS server. Used to identify location of the HotSpot server during the
     * communication with RADIUS server. Value is optional and used together with RADIUS server.
     */
    radiusLocationName?: pulumi.Input<string>;
    /**
     * Controls how the MAC address of the client is encoded in the `User-Name` and `User-Password` attributes when using MAC
     * authentication.
     */
    radiusMacFormat?: pulumi.Input<string>;
    /**
     * Rate limitation in form of rx-rate[/tx-rate] [rx-burst-rate[/tx-burst-rate] [rx-burst-threshold[/tx-burst-threshold]
     * [rx-burst-time[/tx-burst-time]]]] [priority] [rx-rate-min[/tx-rate-min]] from the point of view of the router (so `rx`
     * is client upload, and `tx` is client download). All rates should be numbers with optional 'k' (1,000s) or 'M'
     * (1,000,000s). If tx-rate is not specified, rx-rate is as tx-rate too. Same goes for tx-burst-rate and tx-burst-threshold
     * and tx-burst-time. If both rx-burst-threshold and tx-burst-threshold are not specified (but burst-rate is specified),
     * rx-rate and tx-rate is used as burst thresholds. If both rx-burst-time and tx-burst-time are not specified, 1s is used
     * as default. rx-rate-min and tx-rate min are the values of limit-at properties.
     */
    rateLimit?: pulumi.Input<string>;
    /**
     * SMTP server address to be used to redirect HotSpot users SMTP requests.
     */
    smtpServer?: pulumi.Input<string>;
    /**
     * Split username from domain name when the username is given in `user@domain` or in `domain\user` format from RADIUS
     * server.
     */
    splitUserDomain?: pulumi.Input<boolean>;
    /**
     * Name of the SSL certificate on the router to to use only for HTTPS authentication.
     */
    sslCertificate?: pulumi.Input<string>;
    /**
     * Used only with trial authentication method. Time value specifies, how long trial user identified by MAC address can use
     * access to public networks without HotSpot authentication.
     */
    trialUptimeLimit?: pulumi.Input<string>;
    /**
     * Used only with trial authentication method.
     */
    trialUptimeReset?: pulumi.Input<string>;
    /**
     * Specifies hotspot user profile for trial users.
     */
    trialUserProfile?: pulumi.Input<string>;
    /**
     * Use RADIUS to authenticate HotSpot users.
     */
    useRadius?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a IpHotspotProfile resource.
 */
export interface IpHotspotProfileArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * DNS name of the HotSpot server (it appears as the location of the login page). This name will automatically be added as
     * a static DNS entry in the DNS cache. Name can affect if Hotspot is automatically detected by client device. For example,
     * iOS devices may not detect Hotspot that has a name which includes `.local`.
     */
    dnsName?: pulumi.Input<string>;
    /**
     * IP address of HotSpot service.
     */
    hotspotAddress?: pulumi.Input<string>;
    /**
     * Directory name in which HotSpot HTML pages are stored (by default hotspot directory). It is possible to specify
     * different directory with modified HTML pages. To change HotSpot login page, connect to the router with FTP and download
     * hotspot directory contents. v6.31 and older software builds: For devices where `flash` directory is present, hotspot
     * html directory must be stored there and path must be typed in as follows: `/(hotspot_dir)`. This must be done in this
     * order as hotspot sees `flash` directory as root location. v6.32 and newer software builds: full path must be typed in
     * html-directory field, including `/flash/(hotspot_dir)`.
     */
    htmlDirectory?: pulumi.Input<string>;
    /**
     * Alternative path for hotspot html files. It should be used only if customized hotspot html files are stored on external
     * storage(attached usb, hdd, etc). If configured then hotspot will switch to this html path as soon at it becomes
     * available and switch back to html-directory path if override path becomes non-available for some reason.
     */
    htmlDirectoryOverride?: pulumi.Input<string>;
    /**
     * HTTP cookie validity time, the option is related to cookie HotSpot login method.
     */
    httpCookieLifetime?: pulumi.Input<string>;
    /**
     * Address and port of the proxy server for HotSpot service, when default value is used all request are resolved by the
     * local `/ip proxy`.
     */
    httpProxy?: pulumi.Input<string>;
    /**
     * Whether to redirect unauthenticated user to hotspot login page, if he is visiting a https:// url. Since certificate
     * domain name will mismatch, often this leads to errors, so you can set this parameter to `no` and all https requests will
     * simply be rejected and user will have to visit a http page.
     */
    httpsRedirect?: pulumi.Input<boolean>;
    ipHotspotProfileId?: pulumi.Input<string>;
    /**
     * Used HotSpot authentication method * mac-cookie - enables login by mac cookie method. * cookie - may only be used with
     * other HTTP authentication method. HTTP cookie is generated, when user authenticates in HotSpot for the first time. User
     * is not asked for the login/password and authenticated automatically, until cookie-lifetime is active. * http-chap -
     * login/password is required for the user to authenticate in HotSpot. CHAP challenge-response method with MD5 hashing
     * algorithm is used for protecting passwords. * http-pap - login/password is required for user to authenticate in HotSpot.
     * Username and password are sent over network in plain text. * https - login/password is required for user to authenticate
     * in HotSpot. Client login/password exchange between client and server is encrypted with SSL tunnel. * mac - client is
     * authenticated without asking login form. Client MAC-address is added to `/ip hotspot user` database, client is
     * authenticated as soon as connected to the HotSpot * trial - client is allowed to use internet without HotSpot login for
     * the specified amount of time.
     */
    loginBies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Allows to control User-Name and User-Password RADIUS attributes when using MAC authentication.
     */
    macAuthMode?: pulumi.Input<string>;
    /**
     * Used together with MAC authentication, field used to specify password for the users to be authenticated by their MAC
     * addresses. The following option is required, when specific RADIUS server rejects authentication for the clients with
     * blank password.
     */
    macAuthPassword?: pulumi.Input<string>;
    /**
     * Descriptive name of the profile.
     */
    name?: pulumi.Input<string>;
    /**
     * `NAS-Port-Type` value to be sent to RADIUS server, `NAS-Port-Type` values are described in the RADIUS RFC 2865. This
     * optional value attribute indicates the type of the physical port of the HotSpot server.
     */
    nasPortType?: pulumi.Input<string>;
    /**
     * Send RADIUS server accounting information for each user, when yes is used.
     */
    radiusAccounting?: pulumi.Input<boolean>;
    /**
     * Default domain to use for RADIUS requests. Allows to use separate RADIUS server per `/ip hotspot profile`. If used, same
     * domain name should be specified under `/radius domain` value.
     */
    radiusDefaultDomain?: pulumi.Input<string>;
    /**
     * How often to send accounting updates . When received is set, interim-time is used from RADIUS server. 0s is the same as
     * received.
     */
    radiusInterimUpdate?: pulumi.Input<string>;
    /**
     * `RADIUS-Location-Id` to be sent to RADIUS server. Used to identify location of the HotSpot server during the
     * communication with RADIUS server. Value is optional and used together with RADIUS server.
     */
    radiusLocationName?: pulumi.Input<string>;
    /**
     * Controls how the MAC address of the client is encoded in the `User-Name` and `User-Password` attributes when using MAC
     * authentication.
     */
    radiusMacFormat?: pulumi.Input<string>;
    /**
     * Rate limitation in form of rx-rate[/tx-rate] [rx-burst-rate[/tx-burst-rate] [rx-burst-threshold[/tx-burst-threshold]
     * [rx-burst-time[/tx-burst-time]]]] [priority] [rx-rate-min[/tx-rate-min]] from the point of view of the router (so `rx`
     * is client upload, and `tx` is client download). All rates should be numbers with optional 'k' (1,000s) or 'M'
     * (1,000,000s). If tx-rate is not specified, rx-rate is as tx-rate too. Same goes for tx-burst-rate and tx-burst-threshold
     * and tx-burst-time. If both rx-burst-threshold and tx-burst-threshold are not specified (but burst-rate is specified),
     * rx-rate and tx-rate is used as burst thresholds. If both rx-burst-time and tx-burst-time are not specified, 1s is used
     * as default. rx-rate-min and tx-rate min are the values of limit-at properties.
     */
    rateLimit?: pulumi.Input<string>;
    /**
     * SMTP server address to be used to redirect HotSpot users SMTP requests.
     */
    smtpServer?: pulumi.Input<string>;
    /**
     * Split username from domain name when the username is given in `user@domain` or in `domain\user` format from RADIUS
     * server.
     */
    splitUserDomain?: pulumi.Input<boolean>;
    /**
     * Name of the SSL certificate on the router to to use only for HTTPS authentication.
     */
    sslCertificate?: pulumi.Input<string>;
    /**
     * Used only with trial authentication method. Time value specifies, how long trial user identified by MAC address can use
     * access to public networks without HotSpot authentication.
     */
    trialUptimeLimit?: pulumi.Input<string>;
    /**
     * Used only with trial authentication method.
     */
    trialUptimeReset?: pulumi.Input<string>;
    /**
     * Specifies hotspot user profile for trial users.
     */
    trialUserProfile?: pulumi.Input<string>;
    /**
     * Use RADIUS to authenticate HotSpot users.
     */
    useRadius?: pulumi.Input<boolean>;
}
