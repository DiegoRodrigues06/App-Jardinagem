import styled from "styled-components";

export const Body = styled.div`
  font-family: 'Inter', sans-serif;
  background-color: #fcfbf8;
  color: #334155;
  margin: 0;
  padding: 2rem;
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const HeaderImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 1rem;
  object-fit: cover;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    height: 250px;
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderApelido = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
`;

export const HeaderEspecie = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-style: italic;
  color: #64748b;
  margin: 0.25rem 0 1rem 0;
`;

export const HeaderData = styled.p`
  font-size: 0.9rem;
  color: #64748b;
  margin-bottom: 1.5rem;
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid transparent;

  &.edit {
    background-color: #eef2ff;
    color: #4338ca;
    border-color: #c7d2fe;

    &:hover {
      background-color: #e0e7ff;
    }
  }

  &.delete {
    background-color: #fee2e2;
    color: #b91c1c;
    border-color: #fecaca;

    &:hover {
      background-color: #fca5a5;
      color: #7f1d1d;
    }
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 0.75rem;
`;

export const RoutineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`;

export const TaskCard = styled.div`
  background-color: #fffffcff;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.05);
`;

export const TaskCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #4338ca;
`;

export const TaskCardTitle = styled.h3`
  font-size: 1.25rem;
  margin: 0;
  color: #1c1c1dff;
`;

export const TaskCardDetail = styled.span`
  font-size: 0.9rem;
  color: #475569;
  background-color: #eef1efff;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  align-self: flex-start;
`;

export const TaskCardButton = styled.button`
  margin-top: 1rem;
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-color: #4338ca;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3730a3;
  }
`;

export const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #475569;
`;

export const AiSection = styled.section`
  background-color: #eefff2ff;
  border: 1px solid #a0cab6ff;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
`;

export const AiTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

export const AiText = styled.p`
  margin-bottom: 1.5rem;
  color: #53634dff;
`;

export const AiButton = styled.a`
  padding: 0.8rem 2rem;
  border-radius: 999px;
  background-color: #5b922eff;
  color: white;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3e641fff;
  }
`;


