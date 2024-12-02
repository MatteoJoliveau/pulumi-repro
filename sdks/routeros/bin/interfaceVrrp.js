"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterfaceVrrp = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class InterfaceVrrp extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceVrrp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new InterfaceVrrp(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of InterfaceVrrp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InterfaceVrrp.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["arp"] = state ? state.arp : undefined;
            resourceInputs["arpTimeout"] = state ? state.arpTimeout : undefined;
            resourceInputs["authentication"] = state ? state.authentication : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["groupAuthority"] = state ? state.groupAuthority : undefined;
            resourceInputs["groupMaster"] = state ? state.groupMaster : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["interfaceVrrpId"] = state ? state.interfaceVrrpId : undefined;
            resourceInputs["interval"] = state ? state.interval : undefined;
            resourceInputs["invalid"] = state ? state.invalid : undefined;
            resourceInputs["macAddress"] = state ? state.macAddress : undefined;
            resourceInputs["mtu"] = state ? state.mtu : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["onBackup"] = state ? state.onBackup : undefined;
            resourceInputs["onFail"] = state ? state.onFail : undefined;
            resourceInputs["onMaster"] = state ? state.onMaster : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["preemptionMode"] = state ? state.preemptionMode : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["remoteAddress"] = state ? state.remoteAddress : undefined;
            resourceInputs["running"] = state ? state.running : undefined;
            resourceInputs["syncConnectionTracking"] = state ? state.syncConnectionTracking : undefined;
            resourceInputs["v3Protocol"] = state ? state.v3Protocol : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
            resourceInputs["vrid"] = state ? state.vrid : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.interface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interface'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["arp"] = args ? args.arp : undefined;
            resourceInputs["arpTimeout"] = args ? args.arpTimeout : undefined;
            resourceInputs["authentication"] = args ? args.authentication : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["groupAuthority"] = args ? args.groupAuthority : undefined;
            resourceInputs["groupMaster"] = args ? args.groupMaster : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["interfaceVrrpId"] = args ? args.interfaceVrrpId : undefined;
            resourceInputs["interval"] = args ? args.interval : undefined;
            resourceInputs["mtu"] = args ? args.mtu : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["onBackup"] = args ? args.onBackup : undefined;
            resourceInputs["onFail"] = args ? args.onFail : undefined;
            resourceInputs["onMaster"] = args ? args.onMaster : undefined;
            resourceInputs["password"] = (args === null || args === void 0 ? void 0 : args.password) ? pulumi.secret(args.password) : undefined;
            resourceInputs["preemptionMode"] = args ? args.preemptionMode : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["remoteAddress"] = args ? args.remoteAddress : undefined;
            resourceInputs["syncConnectionTracking"] = args ? args.syncConnectionTracking : undefined;
            resourceInputs["v3Protocol"] = args ? args.v3Protocol : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["vrid"] = args ? args.vrid : undefined;
            resourceInputs["invalid"] = undefined /*out*/;
            resourceInputs["macAddress"] = undefined /*out*/;
            resourceInputs["running"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(InterfaceVrrp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.InterfaceVrrp = InterfaceVrrp;
/** @internal */
InterfaceVrrp.__pulumiType = 'routeros:index/interfaceVrrp:InterfaceVrrp';
//# sourceMappingURL=interfaceVrrp.js.map