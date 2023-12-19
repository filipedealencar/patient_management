interface IDetailsOverview {
  sizeContainer?: { height?: number; width?: number };

  options: {
    name: string;
    detailsContact: {
      phone: string;
      cellPhone: string;
      email: string;
      adress: string;
    };
    resumeDetails: {
      gender: string;
      dateOfBirth: string;
      cpf: string;
      rg: string;
      motherName: string;
      fatherName: string;
    };
    medicalDetails: {
      lastAppointment: string;
      nextAppointment: string;
      professional: string;
      healthPlan: string;
      diseases: string;
      specialty: string;
    };
  };
}
