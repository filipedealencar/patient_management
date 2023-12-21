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
}

export async function getPatientById(id: number): Promise<PatientData> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APIS_BASE_URL}/patients/${id}`
    );

    if (!response.ok) {
      throw new Error(`Erro na requisição GET: ${response.statusText}`);
    }

    const data: PatientData = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deletePatientById(id: number): Promise<void> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APIS_BASE_URL}/patients/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Erro na requisição DELETE: ${response.statusText}`);
    }
  } catch (error) {
    throw error;
  }
}
export async function insertPatient(body: any): Promise<void> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APIS_BASE_URL}/patients`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      throw new Error(`Erro na requisição DELETE: ${response.statusText}`);
    }
  } catch (error) {
    throw error;
  }
}
export async function updatePatient(
  id: number,
  updatedData: any
): Promise<void> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APIS_BASE_URL}/patients/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    );

    if (!response.ok) {
      throw new Error(`Erro na requisição PUT: ${response.statusText}`);
    }
  } catch (error) {
    throw error;
  }
}
