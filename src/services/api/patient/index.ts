import { PatientData } from "@/services/types";
import { IHttpResponse } from "../../data/IHttpClient";
import { SWRHttpClient } from "../../http/SWRHttpClient";

export default class PatientApi {
  private baseUrl = "";
  private apiKey = "";

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_APIS_BASE_URL
      ? `${process.env.NEXT_PUBLIC_APIS_BASE_URL}`
      : this.baseUrl;
  }

  private allPatientsEndpoint = () => {
    return `${this.baseUrl}/patients`;
  };

  private getPatientByIdEndpoint = (id: number) => {
    return `${this.baseUrl}/patients/${id}`;
  };

  private searchPatientsByNameEndpoint = (name: string) => {
    return `${this.baseUrl}/patients/search/${name}`;
  };

  private insertPatientEndpoint = () => {
    return `${this.baseUrl}/patients`;
  };

  private updatePatientEndpoint = (id: number) => {
    return `${this.baseUrl}/patients/${id}`;
  };

  private deletePatientEndpoint = (id: number) => {
    return `${this.baseUrl}/patients/${id}`;
  };

  getAllPatients = (): IHttpResponse<PatientData[], unknown> => {
    const { data, error } = SWRHttpClient.useGet<PatientData[]>(
      this.allPatientsEndpoint()
    ) as IHttpResponse<PatientData[], unknown>;

    return {
      data,
      isLoading: !error && !data,
      error,
    };
  };

  getPatientById = (id: number): IHttpResponse<PatientData, unknown> => {
    const { data, error } = SWRHttpClient.useGet<PatientData>(
      this.getPatientByIdEndpoint(id)
    ) as IHttpResponse<PatientData, unknown>;

    return {
      data,
      isLoading: !error && !data,
      error,
    };
  };

  searchPatientsByName = (
    name: string
  ): IHttpResponse<PatientData[], unknown> => {
    const { data, error } = SWRHttpClient.useGet<PatientData[]>(
      this.searchPatientsByNameEndpoint(name)
    ) as IHttpResponse<PatientData[], unknown>;

    return {
      data,
      isLoading: !error && !data,
      error,
    };
  };

  insertPatient = (
    patient: PatientData
  ): IHttpResponse<PatientData, unknown> => {
    const { data, error } = SWRHttpClient.usePost<PatientData>(
      this.insertPatientEndpoint(),
      JSON.stringify(patient)
    ) as IHttpResponse<PatientData, unknown>;

    return {
      data,
      isLoading: !error && !data,
      error,
    };
  };

  updatePatient = (
    id: number,
    patient: PatientData
  ): IHttpResponse<PatientData, unknown> => {
    const { data, error } = SWRHttpClient.usePut<PatientData>(
      this.updatePatientEndpoint(id),
      JSON.stringify(patient)
    ) as IHttpResponse<PatientData, unknown>;

    return {
      data,
      isLoading: !error && !data,
      error,
    };
  };

  deletePatient = (id: number): IHttpResponse<void, unknown> => {
    const { data, error } = SWRHttpClient.useDelete<void>(
      this.deletePatientEndpoint(id)
    ) as IHttpResponse<void, unknown>;

    return {
      data,
      isLoading: !error && !data,
      error,
    };
  };
}
