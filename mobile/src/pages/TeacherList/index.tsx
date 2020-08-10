import React, { useState } from 'react';
import { View, ScrollView, TextInput, Text } from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import api from '../../services/api';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [subject, setSubject] = useState('Matemática');
  const [week_day, setWeekDay] = useState('3');
  const [time, setTime] = useState('9:00');

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    const response = await api.get('classes', {
      params: {
        subject, week_day, time,
      },
    });

    setIsFiltersVisible(false);
    setTeachers(response.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader
      title="Proffys disponíveis"
      headerRight={(
        <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
      )}
      >
        { isFiltersVisible && (
            <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholder="Qual a matéria?"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                style={styles.input}
                value={week_day}
                onChangeText={text => setWeekDay(text)}
                placeholder="Qual o dia?"
              />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                style={styles.input}
                value={time}
                onChangeText={text => setTime(text)}
                placeholder="Qual o horário?"
              />
              </View>
            </View>

            <RectButton
              style={styles.submitButton}
              onPress={handleFiltersSubmit}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>


          </View>
        )}
      </PageHeader>
      <ScrollView style={styles.teacherList}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16,
      }}
      >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default TeacherList;