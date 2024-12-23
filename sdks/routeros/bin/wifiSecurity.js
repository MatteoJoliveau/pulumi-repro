"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.WifiSecurity = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class WifiSecurity extends pulumi.CustomResource {
    /**
     * Get an existing WifiSecurity resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new WifiSecurity(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of WifiSecurity.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WifiSecurity.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["authenticationTypes"] = state ? state.authenticationTypes : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["connectGroup"] = state ? state.connectGroup : undefined;
            resourceInputs["connectPriority"] = state ? state.connectPriority : undefined;
            resourceInputs["dhGroups"] = state ? state.dhGroups : undefined;
            resourceInputs["disablePmkid"] = state ? state.disablePmkid : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["eapAccounting"] = state ? state.eapAccounting : undefined;
            resourceInputs["eapAnonymousIdentity"] = state ? state.eapAnonymousIdentity : undefined;
            resourceInputs["eapCertificateMode"] = state ? state.eapCertificateMode : undefined;
            resourceInputs["eapMethods"] = state ? state.eapMethods : undefined;
            resourceInputs["eapPassword"] = state ? state.eapPassword : undefined;
            resourceInputs["eapTlsCertificate"] = state ? state.eapTlsCertificate : undefined;
            resourceInputs["eapUsername"] = state ? state.eapUsername : undefined;
            resourceInputs["encryptions"] = state ? state.encryptions : undefined;
            resourceInputs["ft"] = state ? state.ft : undefined;
            resourceInputs["ftMobilityDomain"] = state ? state.ftMobilityDomain : undefined;
            resourceInputs["ftNasIdentifier"] = state ? state.ftNasIdentifier : undefined;
            resourceInputs["ftOverDs"] = state ? state.ftOverDs : undefined;
            resourceInputs["ftPreserveVlanid"] = state ? state.ftPreserveVlanid : undefined;
            resourceInputs["ftR0KeyLifetime"] = state ? state.ftR0KeyLifetime : undefined;
            resourceInputs["ftReassociationDeadline"] = state ? state.ftReassociationDeadline : undefined;
            resourceInputs["groupEncryption"] = state ? state.groupEncryption : undefined;
            resourceInputs["groupKeyUpdate"] = state ? state.groupKeyUpdate : undefined;
            resourceInputs["managementEncryption"] = state ? state.managementEncryption : undefined;
            resourceInputs["managementProtection"] = state ? state.managementProtection : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["oweTransitionInterface"] = state ? state.oweTransitionInterface : undefined;
            resourceInputs["passphrase"] = state ? state.passphrase : undefined;
            resourceInputs["saeAntiCloggingThreshold"] = state ? state.saeAntiCloggingThreshold : undefined;
            resourceInputs["saeMaxFailureRate"] = state ? state.saeMaxFailureRate : undefined;
            resourceInputs["saePwe"] = state ? state.saePwe : undefined;
            resourceInputs["wifiSecurityId"] = state ? state.wifiSecurityId : undefined;
            resourceInputs["wps"] = state ? state.wps : undefined;
        }
        else {
            const args = argsOrState;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["authenticationTypes"] = args ? args.authenticationTypes : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["connectGroup"] = args ? args.connectGroup : undefined;
            resourceInputs["connectPriority"] = args ? args.connectPriority : undefined;
            resourceInputs["dhGroups"] = args ? args.dhGroups : undefined;
            resourceInputs["disablePmkid"] = args ? args.disablePmkid : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["eapAccounting"] = args ? args.eapAccounting : undefined;
            resourceInputs["eapAnonymousIdentity"] = args ? args.eapAnonymousIdentity : undefined;
            resourceInputs["eapCertificateMode"] = args ? args.eapCertificateMode : undefined;
            resourceInputs["eapMethods"] = args ? args.eapMethods : undefined;
            resourceInputs["eapPassword"] = args ? args.eapPassword : undefined;
            resourceInputs["eapTlsCertificate"] = args ? args.eapTlsCertificate : undefined;
            resourceInputs["eapUsername"] = args ? args.eapUsername : undefined;
            resourceInputs["encryptions"] = args ? args.encryptions : undefined;
            resourceInputs["ft"] = args ? args.ft : undefined;
            resourceInputs["ftMobilityDomain"] = args ? args.ftMobilityDomain : undefined;
            resourceInputs["ftNasIdentifier"] = args ? args.ftNasIdentifier : undefined;
            resourceInputs["ftOverDs"] = args ? args.ftOverDs : undefined;
            resourceInputs["ftPreserveVlanid"] = args ? args.ftPreserveVlanid : undefined;
            resourceInputs["ftR0KeyLifetime"] = args ? args.ftR0KeyLifetime : undefined;
            resourceInputs["ftReassociationDeadline"] = args ? args.ftReassociationDeadline : undefined;
            resourceInputs["groupEncryption"] = args ? args.groupEncryption : undefined;
            resourceInputs["groupKeyUpdate"] = args ? args.groupKeyUpdate : undefined;
            resourceInputs["managementEncryption"] = args ? args.managementEncryption : undefined;
            resourceInputs["managementProtection"] = args ? args.managementProtection : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["oweTransitionInterface"] = args ? args.oweTransitionInterface : undefined;
            resourceInputs["passphrase"] = args ? args.passphrase : undefined;
            resourceInputs["saeAntiCloggingThreshold"] = args ? args.saeAntiCloggingThreshold : undefined;
            resourceInputs["saeMaxFailureRate"] = args ? args.saeMaxFailureRate : undefined;
            resourceInputs["saePwe"] = args ? args.saePwe : undefined;
            resourceInputs["wifiSecurityId"] = args ? args.wifiSecurityId : undefined;
            resourceInputs["wps"] = args ? args.wps : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WifiSecurity.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.WifiSecurity = WifiSecurity;
/** @internal */
WifiSecurity.__pulumiType = 'routeros:index/wifiSecurity:WifiSecurity';
//# sourceMappingURL=wifiSecurity.js.map