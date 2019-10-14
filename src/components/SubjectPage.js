import React from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  SubjectView,
  SubjectCard,
  CardTitle,
  ClassRow,
  ClassHeader,
  ClassBody,
  Square,
} from './styled';

const subjects = [
  {
    name: 'Álgebra 1',
    dept: 'MAT',
    turmas: [
      {
        teacher: 'Norai Rocco',
        title: 'A',
        days: {
          segunda: false,
          terca: true,
          quarta: false,
          quinta: true,
          sexta: false,
          sabado: false,
        },
        totalSeats: 50,
        occupiedSeats: 46,
      },
      {
        teacher: 'Aline Pinto',
        title: 'B',
        days: {
          segunda: false,
          terca: true,
          quarta: false,
          quinta: true,
          sexta: false,
          sabado: false,
        },
        totalSeats: 50,
        occupiedSeats: 36,
      },
      {
        teacher: 'José Antônio',
        title: 'C',
        days: {
          segunda: false,
          terca: true,
          quarta: false,
          quinta: false,
          sexta: true,
          sabado: false,
        },
        totalSeats: 50,
        occupiedSeats: 49,
      },
    ],
  },

  {
    name: 'Cálculo 1',
    dept: 'MAT',
    turmas: [
      {
        title: 'A',
        teacher: 'Lucinger Alves',
        days: {
          segunda: true,
          terca: false,
          quarta: true,
          quinta: false,
          sexta: true,
          sabado: false,
        },
        totalSeats: 50,
        occupiedSeats: 54,
      },
      {
        title: 'B',
        teacher: 'Raquel Döor',
        days: {
          segunda: true,
          terca: false,
          quarta: true,
          quinta: false,
          sexta: true,
          sabado: false,
        },
        totalSeats: 50,
        occupiedSeats: 23,
      },
      {
        title: 'C',
        teacher: 'Antônio Queiroz',
        days: {
          segunda: true,
          terca: false,
          quarta: true,
          quinta: false,
          sexta: true,
          sabado: false,
        },
        totalSeats: 50,
        occupiedSeats: 48,
      },
    ],
  },

  {
    name: 'Algoritmos e Programação de computadores',
    dept: 'CIC',
    turmas: [
      {
        title: 'A',
        teacher: 'Carla Castanho',
        days: {
          segunda: true,
          terca: true,
          quarta: false,
          quinta: true,
          sexta: false,
          sabado: false,
        },
        totalSeats: 50,
        occupiedSeats: 51,
      },
      {
        title: 'B',
        teacher: 'Pedro Berger',
        days: {
          segunda: true,
          terca: true,
          quarta: false,
          quinta: true,
          sexta: false,
          sabado: false,
        },
        totalSeats: 50,
        occupiedSeats: 20,
      },
      {
        title: 'C',
        teacher: 'Teófilo Campos',
        days: {
          segunda: true,
          terca: true,
          quarta: false,
          quinta: true,
          sexta: false,
          sabado: false,
        },
        totalSeats: 50,
        occupiedSeats: 15,
      },
    ],
  },
  {
    name: 'Fundamentos Teóricos da Computação',
    dept: 'CIC',
    turmas: [
      {
        title: 'A',
        teacher: 'Jorge Lucero',
        days: {
          segunda: false,
          terca: true,
          quarta: false,
          quinta: true,
          sexta: false,
          sabado: false,
        },
        totalSeats: 40,
        occupiedSeats: 23,
      },
      {
        title: 'B',
        teacher: 'Claudia Nalón',
        days: {
          segunda: false,
          terca: true,
          quarta: false,
          quinta: true,
          sexta: false,
          sabado: false,
        },
        totalSeats: 40,
        occupiedSeats: 16,
      },
    ],
  },
];

function mostraDias(turma) {
  return (
    <View style={{ flex: 2, flexDirection: 'row' }}>
      <Square
        style={{ backgroundColor: turma.days.segunda ? 'red' : 'gray' }}
      />
      <Square style={{ backgroundColor: turma.days.terca ? 'red' : 'gray' }} />
      <Square style={{ backgroundColor: turma.days.quarta ? 'red' : 'gray' }} />
      <Square style={{ backgroundColor: turma.days.quinta ? 'red' : 'gray' }} />
      <Square style={{ backgroundColor: turma.days.sexta ? 'red' : 'gray' }} />
      <Square style={{ backgroundColor: turma.days.sabado ? 'red' : 'gray' }} />
    </View>
  );
}

const SubjectPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <SubjectView
        contentContainerStyle={{
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        {subjects.map((subject, index) => {
          return (
            <SubjectCard
              key={index}
              style={
                index === subjects.length - 1
                  ? { marginBottom: 80 }
                  : { marginBottom: 40 }
              }>
              <CardTitle>{subject.name}</CardTitle>
              <CardTitle>{subject.dept}</CardTitle>
              {subject.turmas.map((turma, inx) => {
                return (
                  <ClassRow key={inx}>
                    <ClassHeader style={{ flexDirection: 'row' }}>
                      <Text style={{ flex: 1 }}>{turma.title} </Text>
                      <Text style={{ flex: 3 }}>{turma.teacher}</Text>
                      {mostraDias(turma)}
                    </ClassHeader>
                    <ClassBody>
                      <Text>
                        {turma.occupiedSeats}/{turma.totalSeats} Vagas
                      </Text>
                    </ClassBody>
                  </ClassRow>
                );
              })}
            </SubjectCard>
          );
        })}
      </SubjectView>
    </View>
  );
};

export default withNavigation(SubjectPage);
