"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const __config = new pulumi.Config("routeros");
Object.defineProperty(exports, "caCertificate", {
    get() {
        return __config.get("caCertificate");
    },
    enumerable: true,
});
Object.defineProperty(exports, "hosturl", {
    get() {
        return __config.get("hosturl");
    },
    enumerable: true,
});
Object.defineProperty(exports, "insecure", {
    get() {
        return __config.getObject("insecure");
    },
    enumerable: true,
});
Object.defineProperty(exports, "password", {
    get() {
        return __config.get("password");
    },
    enumerable: true,
});
Object.defineProperty(exports, "suppressSysoDelWarn", {
    get() {
        return __config.getObject("suppressSysoDelWarn");
    },
    enumerable: true,
});
Object.defineProperty(exports, "username", {
    get() {
        return __config.get("username");
    },
    enumerable: true,
});
//# sourceMappingURL=vars.js.map