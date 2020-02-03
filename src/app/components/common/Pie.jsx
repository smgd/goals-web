import styled from "styled-components";
import React from "react";
import ReactMinimalPieChart from "react-minimal-pie-chart";


const PieWrapper = styled.div`
  height: 40%;
  width: 40%;
`;

const colors = [
  '#36877F',
  '#CC001F',
  '#BCE3BE',
  '#F2930C',
  '#0CBCF2',
];

const Pie = ({ areas, animate }) => {
  return (
    <PieWrapper>
      <ReactMinimalPieChart
        data={areas.map((area, i) => ({
          title: area.name,
          value: area.weight,
          color: colors[i],
          key: area.id,
        }))}
        segmentsStyle={{ cursor: 'pointer' }}
        onClick={(e, data, i) => console.log(data, i)} // here will be link to area
        animate={animate}
      />
    </PieWrapper>
  )
};

export default Pie;