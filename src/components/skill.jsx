'use client';
import styled from 'styled-components';

const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 150px;
  height: 150px;
  &:hover .techName {
    opacity: 1;
  }
`;

const SvgCircle = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`;

const CircleBackground = styled.circle`
  fill: none;
  stroke: #e6e6e6;
  stroke-width: 10;
`;

const CircleProgress = styled.circle`
  fill: none;
  stroke: #00aaff;
  stroke-width: 10;
  stroke-linecap: round;
  transition: stroke-dasharray 0.3s ease;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  z-index: 1;
`;

const TechName = styled.div`
  position: absolute;
  bottom: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
`;

const SkillProgressComponent = ({ iconUrl, percentage, techName }) => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <CircleContainer>
      <SvgCircle viewBox="0 0 150 150">
        <CircleBackground cx="75" cy="75" r={radius} />
        <CircleProgress
          cx="75"
          cy="75"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </SvgCircle>
      <Icon src={iconUrl} alt="Icon" />
      <TechName className="techName">{techName}</TechName>
    </CircleContainer>
  );
};

export default SkillProgressComponent;