"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sponsoredchildrecordFactory = exports.childrenbirthrecordFactory = exports.PersonBasicFactory = void 0;
const rosie_1 = require("rosie");
exports.PersonBasicFactory = new rosie_1.Factory()
    .sequence("uinfin", (i) => ({
    "lastupdated": "2018-06-01",
    "value": "S123456" + i + "A",
    "source": "1",
    "classification": "C",
}))
    .attrs({
    "edulevel": {
        "lastupdated": "2020-09-10",
        "code": "",
        "source": "2",
        "classification": "C",
        "desc": "",
    },
    "dialect": {
        "lastupdated": "2018-06-01",
        "code": "HK",
        "source": "1",
        "classification": "C",
        "desc": "HOKKIEN",
    },
    "occupation": {
        "lastupdated": "2020-09-10",
        "code": "",
        "source": "2",
        "classification": "C",
        "desc": "",
    },
    "regadd": {
        "country": {
            "code": "SG",
            "desc": "SINGAPORE",
        },
        "unit": {
            "value": "22",
        },
        "street": {
            "value": "TOA PAYOH LORONG 1",
        },
        "lastupdated": "2018-05-10",
        "block": {
            "value": "123",
        },
        "postal": {
            "value": "310123",
        },
        "source": "1",
        "classification": "C",
        "floor": {
            "value": "12",
        },
        "type": "SG",
        "building": {
            "value": "",
        },
    },
    "mobileno": {
        "lastupdated": "2019-04-03",
        "source": "4",
        "classification": "C",
        "areacode": {
            "value": "65",
        },
        "prefix": {
            "value": "+",
        },
        "nbr": {
            "value": "88158701",
        },
    },
    "passportexpirydate": {
        "lastupdated": "",
        "source": "1",
        "classification": "C",
        "value": "",
    },
    "divorcedate": {
        "lastupdated": "",
        "source": "1",
        "classification": "C",
        "value": "",
    },
    "marriagecertno": {
        "lastupdated": "2018-05-10",
        "source": "1",
        "classification": "C",
        "value": "M525997",
    },
    "merdekagen": {
        "eligibility": {
            "value": true,
        },
        "lastupdated": "2019-04-01",
        "quantum": {
            "value": 200,
        },
        "source": "1",
        "classification": "C",
        "message": {
            "code": "2",
            "desc": "You are eligible for the Merdeka Generation Package. For further enquiries, please contact 1800-2222-888.",
        },
    },
    "gstvoucher": {
        "gstregular": {
            "value": 300,
        },
        "year": {
            "value": 2019,
        },
        "exclusion": {
            "value": false,
        },
        "gstmedisave": {
            "value": 250,
        },
        "lastupdated": "2019-04-01",
        "gstspecial": {
            "value": 0,
        },
        "source": "1",
        "classification": "C",
        "signup": {
            "value": true,
        },
    },
    "email": {
        "lastupdated": "2019-04-03",
        "source": "4",
        "classification": "C",
        "value": "gt.govandi@gmail.com",
    },
    "birthcountry": {
        "lastupdated": "2018-06-01",
        "code": "SG",
        "source": "1",
        "classification": "C",
        "desc": "SINGAPORE",
    },
    "race": {
        "lastupdated": "2018-06-01",
        "code": "CN",
        "source": "1",
        "classification": "C",
        "desc": "CHINESE",
    },
    "silversupport": {
        "eligibility": {
            "value": true,
        },
        "lastupdated": "2019-04-01",
        "amount": {
            "value": 300,
        },
        "source": "1",
        "classification": "C",
        "year": {
            "value": 2019,
        },
    },
    "countryofmarriage": {
        "lastupdated": "2018-05-10",
        "code": "SG",
        "source": "1",
        "classification": "C",
        "desc": "SINGAPORE",
    },
    "sex": {
        "lastupdated": "2018-06-01",
        "code": "M",
        "source": "1",
        "classification": "C",
        "desc": "Male",
    },
    "marriagedate": {
        "lastupdated": "1993-10-22",
        "source": "1",
        "classification": "C",
        "value": "1993-10-22",
    },
    "residentialstatus": {
        "lastupdated": "2018-06-01",
        "code": "C",
        "source": "1",
        "classification": "C",
        "desc": "Citizen",
    },
    "passportnumber": {
        "lastupdated": "",
        "source": "1",
        "classification": "C",
        "value": "",
    },
    "marital": {
        "lastupdated": "2018-05-10",
        "code": "2",
        "source": "1",
        "classification": "C",
        "desc": "MARRIED",
    },
    "aliasname": {
        "lastupdated": "2018-06-01",
        "source": "1",
        "classification": "C",
        "value": "JASCKSON LIM YONG XIANG",
    },
    "nationality": {
        "lastupdated": "2018-06-01",
        "code": "SG",
        "source": "1",
        "classification": "C",
        "desc": "SINGAPORE CITIZEN",
    },
    "dob": {
        "lastupdated": "2018-06-01",
        "source": "1",
        "classification": "C",
        "value": "1953-10-06",
    },
    "name": {
        "lastupdated": "2018-06-01",
        "source": "1",
        "classification": "C",
        "value": "User-Name",
    },
    "secondaryrace": {
        "lastupdated": "2018-06-01",
        "code": "GM",
        "source": "1",
        "classification": "C",
        "desc": "GERMAN",
    },
})
    .attr("sponsoredChildRecords", () => [exports.sponsoredchildrecordFactory.build(), exports.sponsoredchildrecordFactory.build()])
    .attr("childrenBirthRecords", () => [exports.childrenbirthrecordFactory.build(), exports.childrenbirthrecordFactory.build()]);
exports.childrenbirthrecordFactory = new rosie_1.Factory()
    .sequence("birthcertno", (i) => ({
    "value": "S556288" + i,
}))
    .sequence("name", (i) => ({
    "value": "child" + i,
}))
    .attrs({
    "dialect": {
        "code": "HK",
        "desc": "Hokkien",
    },
    "race": {
        "code": "CN",
        "desc": "Chinese",
    },
    "lifestatus": {
        "code": "A",
        "desc": "ALIVE",
    },
    "tob": {
        "value": "0901",
    },
    "sex": {
        "code": "F",
        "desc": "Female",
    },
    "source": "1",
    "classification": "C",
    "hanyupinyinname": {
        "value": "Cheng Pei Ni",
    },
    "hanyupinyinaliasname": {
        "value": "",
    },
    "marriedname": {
        "value": "",
    },
    "aliasname": {
        "value": "",
    },
    "dob": {
        "value": "2011-09-10",
    },
    "lastupdated": "2018-05-16",
    "secondaryrace": {
        "code": "",
        "desc": "",
    },
});
exports.sponsoredchildrecordFactory = new rosie_1.Factory()
    .sequence("birthcertno", (i) => ({
    "value": "S556288" + i,
}))
    .sequence("name", (i) => ({
    "value": "child" + i,
}))
    .attrs({
    "dialect": {
        "code": "HK",
        "desc": "Hokkien",
    },
    "race": {
        "code": "CN",
        "desc": "Chinese",
    },
    "lifestatus": {
        "code": "A",
        "desc": "ALIVE",
    },
    "tob": {
        "value": "0901",
    },
    "sex": {
        "code": "M",
        "desc": "MALE",
    },
    "source": "1",
    "classification": "C",
    "hanyupinyinname": {
        "value": "Sponsored Child",
    },
    "hanyupinyinaliasname": {
        "value": "",
    },
    "marriedname": {
        "value": "",
    },
    "aliasname": {
        "value": "",
    },
    "dob": {
        "value": "2012-09-10",
    },
    "lastupdated": "2018-05-16",
    "secondaryrace": {
        "code": "",
        "desc": "",
    },
});
//# sourceMappingURL=personbasic-factory.js.map