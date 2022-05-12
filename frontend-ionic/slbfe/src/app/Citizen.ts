export interface Citizen{
    firstName: string;
    lastName: string;
    surName: string;
    gender:string;
    dateOfBirth: string;
    age:number;
    profession: string;
    affiliation: string;
    email: string;
    password: string;
    phone:string;
    mobile: string;
    address: string;
    passport:{
        passportId: string;
        passportFile: string;
    },
    nic:{
        nicId: string;
        nicFile: string;
    },
    birthCertificate:{
        birthCertificateId: string;
        birthCertificateFile: string;
    },
    qualificationList:string[];
}