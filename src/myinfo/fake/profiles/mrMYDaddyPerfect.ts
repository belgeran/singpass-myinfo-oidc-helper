import * as _ from "lodash";
import { FakeProfile, ProfileArchetype } from "./fake-profile";
import { mrSGDaddyPerfect } from "./mrSGDaddyPerfect";
import { residentialstatus, sex } from "../../domain/map";

const id = "F5994458N";
const name = ProfileArchetype.MR_MY_DADDY_PERFECT;

export const mrMYDaddyPerfect: FakeProfile = {
	id,
	name,
	generate: (profileName) => {
		profileName = _.isEmpty(profileName) ? name : profileName;

		const profile = mrSGDaddyPerfect.generate(profileName);
		profile.sex.code = "M";
		profile.sex.desc = sex.map.codeToDesc[profile.residentialstatus.code];
		profile.nationality.code = "MY";
		profile.birthcountry.code = "MY";
		profile.residentialstatus.code = "";
		profile.residentialstatus.desc = "";
		profile.marital = {
			"lastupdated": "2020-09-10",
			"code": "",
			"source": "2",
			"classification": "C",
			"desc": "",
		};
		profile.marriagedate = {
			"lastupdated": "2020-09-10",
			"source": "2",
			"classification": "C",
			"value": "",
		};
		profile.occupation = {
			"lastupdated": "2018-05-21",
			"code": "11110",
			"source": "2",
			"classification": "C",
			"desc": "LEGISLATOR",
		};

		profile.dialect = {
			"lastupdated": "2020-09-10",
			"code": "",
			"source": "2",
			"classification": "C",
			"desc": "",
		};

		return profile;
	},
};
