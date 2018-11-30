import { IContactInfo } from "./IContactInfo";
import { ILanguageSkill } from "./ILanguageSkill";
import { IEducationBlock } from "./IEducationBlock";
import { ISkill } from "./ISkill";
import { IEmploymentBlock } from "./IEmploymentBlock";

export interface IResume {
    name: string;
    position: string;
    contact: IContactInfo;
    summary: string;
    languages: ILanguageSkill[];
    education: IEducationBlock[];
    skills: ISkill[];
    employment: IEmploymentBlock[];   
}
