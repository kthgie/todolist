import React, { useState } from 'react';
import MyButton from './buttons/MyButton';
import './Goals.css'


const Goals = () => {
  const [newGoal, setNewGoal] = useState('');
  const [goals, setGoals] = useState([
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d'altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ]);

  const handleButtonClick = () => {
    if (newGoal.trim() !== '') {
      setGoals([...goals, newGoal]);
      setNewGoal('');
    }
  };

  const handleDeleteGoals = (index) => {
    const updateGoals = [...Goals];
    updateGoals.splice(index,1);
    setGoals(updateGoals);
  }

  return (
    <div>
      <h1>Sample Goals List</h1>
      <MyButton onClick={handleButtonClick} label="Add" />
      <input
        type="text"
        value={newGoal}
        onChange={(e) => setNewGoal(e.target.value)}
        placeholder="Entrez un nouvel objectif"
      />
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>{goal}
          <button onClick={() => handleDeleteGoals(index)}>X </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Goals;