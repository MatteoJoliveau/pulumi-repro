"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagerUserGroup = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class UserManagerUserGroup extends pulumi.CustomResource {
    /**
     * Get an existing UserManagerUserGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new UserManagerUserGroup(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of UserManagerUserGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UserManagerUserGroup.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["attributes"] = state ? state.attributes : undefined;
            resourceInputs["default"] = state ? state.default : undefined;
            resourceInputs["defaultName"] = state ? state.defaultName : undefined;
            resourceInputs["innerAuths"] = state ? state.innerAuths : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["outerAuths"] = state ? state.outerAuths : undefined;
            resourceInputs["userManagerUserGroupId"] = state ? state.userManagerUserGroupId : undefined;
        }
        else {
            const args = argsOrState;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["attributes"] = args ? args.attributes : undefined;
            resourceInputs["innerAuths"] = args ? args.innerAuths : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["outerAuths"] = args ? args.outerAuths : undefined;
            resourceInputs["userManagerUserGroupId"] = args ? args.userManagerUserGroupId : undefined;
            resourceInputs["default"] = undefined /*out*/;
            resourceInputs["defaultName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(UserManagerUserGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.UserManagerUserGroup = UserManagerUserGroup;
/** @internal */
UserManagerUserGroup.__pulumiType = 'routeros:index/userManagerUserGroup:UserManagerUserGroup';
//# sourceMappingURL=userManagerUserGroup.js.map