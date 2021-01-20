"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildrenRecords = exports.mrPreschoolRegister = void 0;
const _ = require("lodash");
const moment = require("moment");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const id = "S0350934F";
const name = fake_profile_1.ProfileArchetype.MR_SG_PRESCHOOL_CHILDREN;
exports.mrPreschoolRegister = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.childrenbirthrecords = _.values(exports.ChildrenRecords);
        return profile;
    },
};
const formatDateToString = (date) => {
    if (date) {
        return date.format("YYYY-MM-DD").toString();
    }
    return moment().format("YYYY-MM-DD").toString();
};
// the children here have birthcertno related to the preschool interest registration mock
const c1 = {
    birthcertno: { value: "T1639540J" },
    name: { value: "Child w level not offered" },
    dob: { value: formatDateToString(moment().subtract(2, "years")) },
};
const c2 = {
    birthcertno: { value: "T1717003H" },
    name: { value: "Child w ineligible" },
    dob: { value: formatDateToString(moment().subtract(2, "years")) },
};
const c3 = {
    birthcertno: { value: "T1728256A" },
    name: { value: "Child w registered" },
    dob: { value: formatDateToString(moment().subtract(3, "years")) },
};
const c4 = {
    birthcertno: { value: "T1766863Z" },
    name: { value: "Child w nothing" },
    dob: { value: formatDateToString(moment().subtract(4, "years")) },
};
const c5 = {
    birthcertno: { value: "T1783246D" },
    name: { value: "Child2 w level not offered " },
    dob: { value: formatDateToString(moment().subtract(5, "years")) },
};
const c6 = {
    birthcertno: { value: "T1790160A" },
    name: { value: "Child2 w ineligible" },
    dob: { value: formatDateToString(moment().subtract(6, "years")) },
};
exports.ChildrenRecords = {
    c1, c2, c3, c4, c5, c6,
};
//# sourceMappingURL=mrSGPreschoolRegister.js.map