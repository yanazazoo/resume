import { ICompanyProject } from "./ICompanyProject";

export interface IEmploymentBlock {
    companyName: string;
    years: string;
    projects: ICompanyProject[];
}