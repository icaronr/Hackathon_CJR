import styled from 'styled-components/native';

const SubjectView = styled.ScrollView`
  flex: 1;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 180px;
`;

const SubjectCard = styled.View`
  background-color: #eee;
  border-radius: 4px;
  padding: 16px;
  color: black;
  width: 90%;
  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 2;
`;

const CardTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const ClassRow = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  margin-top: 12px;
`;

const ClassHeader = styled.View`
  background-color: #ddd;
  padding: 8px;
  border-radius: 4px;
  width: 100%;
  elevation: 1;
  justify-content: space-around;
`;

const ClassBody = styled.View`
  background-color: #fcfcfc;
  padding: 8px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  width: 96%;
`;

const Square = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 4px;
  margin-right: 4px;
`;

export {
  SubjectView,
  SubjectCard,
  CardTitle,
  ClassRow,
  ClassHeader,
  ClassBody,
  Square,
};
