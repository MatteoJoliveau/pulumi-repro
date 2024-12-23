"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpHotspotProfile = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class IpHotspotProfile extends pulumi.CustomResource {
    /**
     * Get an existing IpHotspotProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new IpHotspotProfile(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of IpHotspotProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpHotspotProfile.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["dnsName"] = state ? state.dnsName : undefined;
            resourceInputs["hotspotAddress"] = state ? state.hotspotAddress : undefined;
            resourceInputs["htmlDirectory"] = state ? state.htmlDirectory : undefined;
            resourceInputs["htmlDirectoryOverride"] = state ? state.htmlDirectoryOverride : undefined;
            resourceInputs["httpCookieLifetime"] = state ? state.httpCookieLifetime : undefined;
            resourceInputs["httpProxy"] = state ? state.httpProxy : undefined;
            resourceInputs["httpsRedirect"] = state ? state.httpsRedirect : undefined;
            resourceInputs["ipHotspotProfileId"] = state ? state.ipHotspotProfileId : undefined;
            resourceInputs["loginBies"] = state ? state.loginBies : undefined;
            resourceInputs["macAuthMode"] = state ? state.macAuthMode : undefined;
            resourceInputs["macAuthPassword"] = state ? state.macAuthPassword : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nasPortType"] = state ? state.nasPortType : undefined;
            resourceInputs["radiusAccounting"] = state ? state.radiusAccounting : undefined;
            resourceInputs["radiusDefaultDomain"] = state ? state.radiusDefaultDomain : undefined;
            resourceInputs["radiusInterimUpdate"] = state ? state.radiusInterimUpdate : undefined;
            resourceInputs["radiusLocationName"] = state ? state.radiusLocationName : undefined;
            resourceInputs["radiusMacFormat"] = state ? state.radiusMacFormat : undefined;
            resourceInputs["rateLimit"] = state ? state.rateLimit : undefined;
            resourceInputs["smtpServer"] = state ? state.smtpServer : undefined;
            resourceInputs["splitUserDomain"] = state ? state.splitUserDomain : undefined;
            resourceInputs["sslCertificate"] = state ? state.sslCertificate : undefined;
            resourceInputs["trialUptimeLimit"] = state ? state.trialUptimeLimit : undefined;
            resourceInputs["trialUptimeReset"] = state ? state.trialUptimeReset : undefined;
            resourceInputs["trialUserProfile"] = state ? state.trialUserProfile : undefined;
            resourceInputs["useRadius"] = state ? state.useRadius : undefined;
        }
        else {
            const args = argsOrState;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["dnsName"] = args ? args.dnsName : undefined;
            resourceInputs["hotspotAddress"] = args ? args.hotspotAddress : undefined;
            resourceInputs["htmlDirectory"] = args ? args.htmlDirectory : undefined;
            resourceInputs["htmlDirectoryOverride"] = args ? args.htmlDirectoryOverride : undefined;
            resourceInputs["httpCookieLifetime"] = args ? args.httpCookieLifetime : undefined;
            resourceInputs["httpProxy"] = args ? args.httpProxy : undefined;
            resourceInputs["httpsRedirect"] = args ? args.httpsRedirect : undefined;
            resourceInputs["ipHotspotProfileId"] = args ? args.ipHotspotProfileId : undefined;
            resourceInputs["loginBies"] = args ? args.loginBies : undefined;
            resourceInputs["macAuthMode"] = args ? args.macAuthMode : undefined;
            resourceInputs["macAuthPassword"] = (args === null || args === void 0 ? void 0 : args.macAuthPassword) ? pulumi.secret(args.macAuthPassword) : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nasPortType"] = args ? args.nasPortType : undefined;
            resourceInputs["radiusAccounting"] = args ? args.radiusAccounting : undefined;
            resourceInputs["radiusDefaultDomain"] = args ? args.radiusDefaultDomain : undefined;
            resourceInputs["radiusInterimUpdate"] = args ? args.radiusInterimUpdate : undefined;
            resourceInputs["radiusLocationName"] = args ? args.radiusLocationName : undefined;
            resourceInputs["radiusMacFormat"] = args ? args.radiusMacFormat : undefined;
            resourceInputs["rateLimit"] = args ? args.rateLimit : undefined;
            resourceInputs["smtpServer"] = args ? args.smtpServer : undefined;
            resourceInputs["splitUserDomain"] = args ? args.splitUserDomain : undefined;
            resourceInputs["sslCertificate"] = args ? args.sslCertificate : undefined;
            resourceInputs["trialUptimeLimit"] = args ? args.trialUptimeLimit : undefined;
            resourceInputs["trialUptimeReset"] = args ? args.trialUptimeReset : undefined;
            resourceInputs["trialUserProfile"] = args ? args.trialUserProfile : undefined;
            resourceInputs["useRadius"] = args ? args.useRadius : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["macAuthPassword"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(IpHotspotProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.IpHotspotProfile = IpHotspotProfile;
/** @internal */
IpHotspotProfile.__pulumiType = 'routeros:index/ipHotspotProfile:IpHotspotProfile';
//# sourceMappingURL=ipHotspotProfile.js.map