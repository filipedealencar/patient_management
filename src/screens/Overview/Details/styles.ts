import styled from "styled-components";

export const WrapperDetailsOverview = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const CardDetailsOverview = styled.div`
  border: 1px solid;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const ContainerInfoContact = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 38px;
  /* 
  ${({ theme }) => theme.media.max.mobileXL`
  flex-direction: row;
  `} */
`;

export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const AvatarContainer = styled.div`
  width: 50px;
  border-radius: 20%;
  overflow: hidden;
  border: 2px solid #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const TextInfoEmphasis = styled.span`
  font-weight: 700;
  color: #3270ff;
  text-transform: uppercase;
`;

export const ContainerDetailsContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const ContentDetailsContact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  svg {
    width: 25px;
    height: 35px;
  }
`;

export const TextInfoDetails = styled.span`
  color: #272626;
  font-weight: 500;
  font-family: Montserrat;
`;

export const ContentResumeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const TextDescritionResume = styled.span`
  font-family: Montserrat;
  color: #417bff;
  font-weight: 500;
`;
