"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wifi = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class Wifi extends pulumi.CustomResource {
    /**
     * Get an existing Wifi resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new Wifi(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of Wifi.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Wifi.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["___ts_"] = state ? state.___ts_ : undefined;
            resourceInputs["aaa"] = state ? state.aaa : undefined;
            resourceInputs["arp"] = state ? state.arp : undefined;
            resourceInputs["arpTimeout"] = state ? state.arpTimeout : undefined;
            resourceInputs["bound"] = state ? state.bound : undefined;
            resourceInputs["channel"] = state ? state.channel : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["configuration"] = state ? state.configuration : undefined;
            resourceInputs["datapath"] = state ? state.datapath : undefined;
            resourceInputs["defaultName"] = state ? state.defaultName : undefined;
            resourceInputs["disableRunningCheck"] = state ? state.disableRunningCheck : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["inactive"] = state ? state.inactive : undefined;
            resourceInputs["interworking"] = state ? state.interworking : undefined;
            resourceInputs["l2mtu"] = state ? state.l2mtu : undefined;
            resourceInputs["macAddress"] = state ? state.macAddress : undefined;
            resourceInputs["master"] = state ? state.master : undefined;
            resourceInputs["masterInterface"] = state ? state.masterInterface : undefined;
            resourceInputs["mtu"] = state ? state.mtu : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["radioMac"] = state ? state.radioMac : undefined;
            resourceInputs["running"] = state ? state.running : undefined;
            resourceInputs["security"] = state ? state.security : undefined;
            resourceInputs["steering"] = state ? state.steering : undefined;
            resourceInputs["wifiId"] = state ? state.wifiId : undefined;
        }
        else {
            const args = argsOrState;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["___ts_"] = args ? args.___ts_ : undefined;
            resourceInputs["aaa"] = args ? args.aaa : undefined;
            resourceInputs["arp"] = args ? args.arp : undefined;
            resourceInputs["arpTimeout"] = args ? args.arpTimeout : undefined;
            resourceInputs["channel"] = args ? args.channel : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["configuration"] = args ? args.configuration : undefined;
            resourceInputs["datapath"] = args ? args.datapath : undefined;
            resourceInputs["disableRunningCheck"] = args ? args.disableRunningCheck : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["interworking"] = args ? args.interworking : undefined;
            resourceInputs["l2mtu"] = args ? args.l2mtu : undefined;
            resourceInputs["macAddress"] = args ? args.macAddress : undefined;
            resourceInputs["masterInterface"] = args ? args.masterInterface : undefined;
            resourceInputs["mtu"] = args ? args.mtu : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["security"] = args ? args.security : undefined;
            resourceInputs["steering"] = args ? args.steering : undefined;
            resourceInputs["wifiId"] = args ? args.wifiId : undefined;
            resourceInputs["bound"] = undefined /*out*/;
            resourceInputs["defaultName"] = undefined /*out*/;
            resourceInputs["inactive"] = undefined /*out*/;
            resourceInputs["master"] = undefined /*out*/;
            resourceInputs["radioMac"] = undefined /*out*/;
            resourceInputs["running"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Wifi.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.Wifi = Wifi;
/** @internal */
Wifi.__pulumiType = 'routeros:index/wifi:Wifi';
//# sourceMappingURL=wifi.js.map