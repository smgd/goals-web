import styled from "styled-components";
import React, {useState} from "react";
import ReactMinimalPieChart from "react-minimal-pie-chart";


const PieWithTitleWrapper = styled.div`
  display: flex;
`;

const PieWrapper = styled.div`
  width: 40%;
  border-radius: 50%;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

const Title = styled.h1`
  color: #FF9091;
`;


const Pie = ({ areas, animate }) => {
  const colors = [
    ['#36877F', '#5f877f'],
    ['#CC001F', '#c96877'],
    ['#BCE3BE', '#d9e0da'],
    ['#F2930C', '#efd5b1'],
    ['#0CBCF2', '#bbe1ed'],
  ];

  const defaultPieData = areas.map((area, i) => ({
    title: area.name,
    value: area.weight,
    color: colors[i][0],
    key: area.id,
  }));

  const [ pieData, setPieData ] = useState(defaultPieData);
  const [ title, setTitle ] = useState(null);


  const onMouseOver = (e, props, index) => {
    setPieData(prevState => prevState.map((datum, i) => {
      if (i !== index) {
        return {
          ...datum,
          color: colors[i][1],
        };
      }

      return datum;
    }));
    setTitle(props[index].title);
  };

  const onMouseOut = () => {
    setPieData(defaultPieData);
    setTitle(null);
  };

  return (
    <PieWithTitleWrapper>
      <PieWrapper>
        <ReactMinimalPieChart
          data={pieData}
          segmentsStyle={{ cursor: 'pointer', transition: 'stroke .3s' }}
          onClick={(e, data, i) => console.log(data, i)} // here will be link to area
          animate={animate}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
        />
      </PieWrapper>
      {title !== null &&
        <Title>
          {title}
        </Title>
      }
    </PieWithTitleWrapper>
  )
};

export default Pie;